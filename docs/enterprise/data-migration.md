---
title: &title Migrating OpenModels Data
sidebar_label: Data Migration
description: &description By default, OpenModels Enterprise Edition (EE) will deploy a basic PostgreSQL container instance for persisting user and project data. This provides trial users with the fastest possible deployment experience but is not well-suited for production use.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/enterprise-data-migration.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

By default, OpenModels Enterprise Edition (EE) will deploy a basic PostgreSQL container instance for persisting user and project data. This provides trial users with the fastest possible deployment experience but is not well-suited for production use.

For production deployments, we suggest an external PostgreSQL solution with managed backups and security enhancements (for instance, PostgreSQL for Amazon RDS, or Azure Database for PostgreSQL). Once an external database is available, migrating your data away from the embedded database is simple.

## Prerequisites

You will need:

* `kubectl` access to the Kubernetes cluster where OpenModels is installed. On [embedded installs](/enterprise/installation/quickstart), `kubectl` is fully configured already, so a login shell on the host (usually via SSH or console) is sufficient.
* Network reachability from your cluster node(s) to the target instance of PostgreSQL, which by default listens on TCP port 5432.

:::info
Most of the commands in this guide require you to provide the Kubernetes [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) where OpenModels is installed. If you followed the [embedded installation procedure](/enterprise/installation/quickstart), your namespace is `default`. If you installed into an existing Kubernetes cluster your namespace is `OpenModels`, unless a custom value was provided during installation.
:::

## Database Export

Execute the following on any host with `kubectl` access to the cluster:

```
K8S_NAMESPACE=<your OpenModels namespace> \
PG_POD=$(kubectl get pods -o name -n $K8S_NAMESPACE| grep 'postgres' | grep -v 'kots') && \
kubectl exec -n $K8S_NAMESPACE -it $PG_POD -- sh -c \
'pg_dump --if-exists -xcCO \
-U $POSTGRES_USER \
-d OpenModels_production' | \
gzip > OpenModels_dump.sql.gz
```

This will leave a compressed file called `OpenModels_dump.sql.gz` in the working directory which contains all SQL code necessary to recreate the `OpenModels_production` database, its schema, and all table data on another instance of PostgreSQL.

## Database Import / Restore

From the same directory (wherever `OpenModels_dump.sql.gz` is stored), execute the following:

```
K8S_NAMESPACE=<your stackbltiz namespace> \
PG_POD=$(kubectl get pods -o name -n $K8S_NAMESPACE | grep 'postgres' | grep -v 'kots' | cut -d'/' -f2) && \
kubectl cp OpenModels_dump.sql.gz $K8S_NAMESPACE/$PG_POD:/var/lib/postgresql/data/OpenModels_dump.sql.gz && \
kubectl exec -n $K8S_NAMESPACE -it $PG_POD -- sh -c \
'zcat /var/lib/postgresql/data/OpenModels_dump.sql.gz | \
psql \
-h <managed DB hostname> \
-U <managed DB username>
-p <managed DB port (optional, 5432 by default)> \
-d postgres'
```

:::warning
The restore will create the `OpenModels_production` database and connect to it before restoring. If the DB already exists, it will drop it and create it again before restoring. In case it doesn't exist, we connect to the default `postgres` DB first. You **must** provide a username which is allowed to create, read, and write databases, tables, and indexes on the target PostgreSQL instance.
:::

## Encryption Key

This guide assumes the sole goal of migrating from the embedded PostgreSQL instance to an externally managed one. For users wanting to reinstall OpenModels itself while retaining or migrating existing user and project data, the procedure mostly remains the same, except that OpenModels's encryption key **must** be carried forward as well.

You can get the encryption key value from your existing OpenModels deployment via the KOTS CLI:

```sh
kubectl kots get config -n <your OpenModels namespace> --sequence <current release sequence number> --appslug OpenModels | grep -A1 'OpenModels_enc'
```

:::tip
You can get the current release sequence value by checking the release history panel in the KOTS admin dashboard, or with the following KOTS CLI command: `kubectl kots get versions OpenModels -n <your OpenModels namespace>`. The current sequence number will be shown on the top.
:::

This command will output values for `OpenModels_enc_key_settings`, `OpenModels_enc_key`, and if set, `OpenModels_enc_custom_key`.

If the value of `OpenModels_enc_key_settings` is `OpenModels_default_generated`, your encryption key is the value of `OpenModels_enc_key`.

Otherwise, it's the value of `OpenModels_enc_custom_key`.

Once you have the old encryption key, navigate to the KOTS admin dashboard, and select "Custom Key" in the "Key Settings" field. Paste the old encryption key into the "Custom Encryption Key" field that appears, then save and deploy the new configuration.
