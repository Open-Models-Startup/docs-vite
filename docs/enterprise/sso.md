---
title: &title Setting up SSO
description: &description OpenModels is excited to offer SAML-based Single Sign-on (SSO) to organizations using OpenModels Enterprise Edition (EE).
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/enterprise-setting-up-sso.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

OpenModels is excited to offer SAML-based Single Sign-on (SSO) to organizations using OpenModels Enterprise Edition (EE). To enable this feature, you need to be logged in as an admin. If you are also a company IdP admin, we can get started! If not, you will need to coordinate with whoever manages your identity provider (IdP).

OpenModels SAML integration relies on a user-level token. To ensure consistent delivery of SAML services, we recommend using an admin service account email for the admin account such as `IT@yourcompany.com` to avoid email collisions with other users.

:::info Please note that:

- After SAML is enabled, all non-admin members in OpenModels must log in with SAML. Admins can still log in with a password as needed.
- Only OpenModels admins have the superpowers to enable SAML for the organization.
- OpenModels offers just-in-time provisioning. This means that if a user logs into OpenModels for the first time using SSO, an account will automatically be created.
:::

### Configure your IdP

Begin by logging into your OpenModels admin account and then click on "Setup Authentication". This will take you to the "Auth Settings" page:

![SAML Config](./assets/saml-config.png)

To start, check the "enabled" box on the SAML settings form.

Next, you will find one piece of information that is unique to your organization. Look for the the Assertion Customer Service (ACS) URL and paste it into the corresponding field in your IdP. Additionally, define the "Service Provider Entity ID" (Issuer) and add it into your IdP.

Last, you need to either:

- provide the "App Federation Metadata URL" - usually a URL to an XML file from IdP;

Or:

- fill in the "IDP SSO Target URL" and "Certificate Fingerprint", which should be available from your IdP.

### Fill out the remaining fields in your IdP

Admins can choose to map attributes that will send user information to OpenModels. This allows OpenModels to get user information for provisioning users. Best practices recommend that these attributes are mapped in addition to Name ID (Email Address):

| Field        | SAML Attribute | Description                                            |
| ------------ | -------------- | ------------------------------------------------------ |
| Display name | `name`         | The display name of the user (first and last or other) |
| Email        | `email`        | The email of the user                                  |

:::warning
Please note: these attributes are case-sensitive and and must be entered exactly as you see here.
:::

### Best Practices

- OpenModels offers "Just-in-time" provisioning. If a user logs into OpenModels for the first time using SSO, an account will automatically be created as long as that email address does not already exist in OpenModels.
- Please ensure that the email addresses in the IdP are what your users will be using to log into OpenModels.

### Troubleshooting

If you're unable to login after verifying these things, please reach out to [enterprise@openmodels.wiki](mailto:enterprise@openmodels.wiki) for support.
