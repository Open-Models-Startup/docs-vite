// --------------------------------
// Link Groups / Sidebar

type LinkGroup =
    | 'api'
    | 'iecho'
    | 'icreate'
    | 'enterprise'
    | 'integrationGuide'
    | 'userGuide'
    | 'ihub';

interface LinkItem {
    text: string;
    link: string;
    items?: LinkItem[];
}

const groupLinks: Record<LinkGroup, LinkItem[]> = {
    userGuide: [
        { text: 'What is OpenModels', link: '/guides/user-guide/what-is-openmodels' },
        { text: 'Getting started', link: '/guides/user-guide/getting-started' },
        { text: 'Starter projects', link: '/guides/user-guide/starter-projects' },
        { text: 'Available environments', link: '/guides/user-guide/available-environments' },
        { text: 'Importing projects', link: '/guides/user-guide/importing-projects' },
        { text: 'IDE: what’s on your screen', link: '/guides/user-guide/ide-whats-on-your-screen' },
        { text: 'Collections', link: '/guides/user-guide/collections' },
        { text: 'Keyboard shortcuts', link: '/guides/user-guide/keyboard-shortcuts' },
    ],
    integrationGuide: [
        { text: 'Embedding projects', link: '/guides/integration/embedding' },
        { text: 'Launching projects from GitHub', link: '/guides/integration/open-from-github' },
        { text: 'Creating projects with the SDK', link: '/guides/integration/create-with-sdk' },
        { text: 'Bug reproductions', link: '/guides/integration/bug-reproductions' },
    ],
    iecho: [
        { text: 'What is iEcho?', link: '/iecho/what-is-iecho' },
        { text: 'Using pr.new', link: '/iecho/using-pr-new' },
        { text: 'Working in iEcho IDE', link: '/iecho/working-in-iecho-ide' },
        { text: 'Integrating iEchoApp bot', link: '/iecho/integrating-iechoapp-bot' },
        {
            text: 'Content updates with Web Publisher',
            link: '/iecho/content-updates-with-web-publisher',
        },
        { text: 'Integrating Web Publisher', link: '/iecho/integrating-web-publisher' },
        { text: 'iEcho FAQ', link: '/iecho/iecho-faq' },
    ],
    api: [
        {
            text: 'JavaScript SDK',
            link: '/platform/api/javascript-sdk',
            items: [
                { text: 'SDK overview', link: '/platform/api/javascript-sdk' },
                { text: 'Options reference', link: '/platform/api/javascript-sdk-options' },
                { text: 'Controlling embeds', link: '/platform/api/javascript-sdk-vm' },
                { text: 'Managing dependencies', link: '/platform/api/javascript-sdk-dependencies' },
            ],
        },
        { text: 'POST API', link: '/platform/api/post-api' },
        { text: 'WebContainer API', link: '/platform/api/webcontainer-api' },
    ],
    ihub: [
        { text: 'Browser support', link: '/platform/ihub/browser-support' },
        { text: 'Browser configuration', link: '/platform/ihub/browser-config' },
        { text: 'Project configuration', link: '/platform/ihub/project-config' },
        { text: 'Turbo package manager', link: '/platform/ihub/turbo-package-manager' },
        { text: 'Troubleshooting', link: '/platform/ihub/troubleshooting-ihub' },
    ],
    enterprise: [
        { text: 'Overview', link: '/enterprise/overview' },
        {
            text: 'Installation',
            link: '/enterprise/installation/quickstart',
            items: [
                { text: 'Quickstart on Bare Metal', link: '/enterprise/installation/quickstart' },
                { text: 'Quickstart on GCP (Non-GKE)', link: '/enterprise/installation/quickstart-gcp' },
                {
                    text: 'Quickstart (Existing Cluster)',
                    link: '/enterprise/installation/quickstart-existing-cluster',
                },
                { text: 'Administrator Guide', link: '/enterprise/installation/administrator-guide' },
                { text: 'Air Gapped Installs', link: '/enterprise/installation/air-gapped-installs' },
            ],
        },
        { text: 'Configuring DNS & TLS', link: '/enterprise/configuring-dns' },
        { text: 'Configuring Firewall Rules', link: '/enterprise/configuring-firewall-rules' },
        { text: 'Setting up SSO', link: '/enterprise/sso' },
        { text: 'Setting up SSO with Okta', link: '/enterprise/okta-sso' },
        { text: 'Setting up SSO with ADFS', link: '/enterprise/adfs-sso' },
        { text: 'Connect NPM registry', link: '/enterprise/npm' },
        { text: 'Starter Projects', link: '/enterprise/starter-projects' },
        { text: 'User Management', link: '/enterprise/user-management' },
        { text: 'Aggregating Logs', link: '/enterprise/log-aggregation' },
        { text: 'Data Migration', link: '/enterprise/data-migration' },
    ],
    icreate: [{ text: 'Browser support', link: '/platform/icreate/browser-support' },
    { text: 'Browser configuration', link: '/platform/icreate/browser-config' },
    { text: 'Project configuration', link: '/platform/icreate/project-config' },
    { text: 'Turbo package manager', link: '/platform/icreate/turbo-package-manager' },
    { text: 'Troubleshooting', link: '/platform/icreate/troubleshooting-ihub' },]
};

const linkGroups: Record<LinkGroup, { text: string; items: LinkItem[] }> = {
    userGuide: {
        text: 'User Guide',
        items: groupLinks.userGuide,
    },
    integrationGuide: {
        text: 'Integration Guide',
        items: groupLinks.integrationGuide,
    },
    iecho: {
        text: 'iEcho',
        items: groupLinks.iecho,
    },
    ihub: {
        text: 'iHub',
        items: groupLinks.ihub,
    },
    icreate: {
        text: 'iCreate',
        items: groupLinks.icreate,
    },
    enterprise: {
        text: 'Enterprise Edition',
        items: groupLinks.enterprise,
    },
    api: {
        text: 'OpenModels API',
        items: groupLinks.api,
    },
};

export const defaultGroupLink = (linkGroup: LinkGroup) => groupLinks[linkGroup][0].link;

export const sidebarLinks = (
    sidebar: 'main' | 'enterprise',
    activeLinkGroups: LinkGroup[] = []
) => {
    if (sidebar === 'enterprise') {
        return [linkGroups.enterprise];
    }

    return Object.entries(linkGroups)
        .filter(([key]) => key !== 'enterprise')
        .map(([key, data]) => ({
            ...data,
            collapsed: !activeLinkGroups.includes(key as LinkGroup),
        }));
};

// --------------------------------
// Home

export const homeTopLinks = [
    {
        icon: '/icons/fa-file-import.svg',
        title: 'Get Started',
        description:
            'Explore the full potential of OpenModels: from writing code or spinning quick demos to making your docs delightful.',
        url: '/guides/user-guide/what-is-openmodels',
    },
    {
        icon: '/icons/fa-browser.svg',
        title: 'iEcho',
        description:
            'One click opens a full in-browser IDE for your repos, issues, and PRs. No more cloning, installing, stashing!',
        url: '/iecho/what-is-iecho',
    },
    {
        icon: '/icons/fa-brackets-curly.svg',
        title: 'API Reference',
        description:
            'Embed GitHub repos, create new projects, build educational experiences, all programmatically with our SDK.',
        url: '/platform/api/javascript-sdk',
    },
    {
        icon: '/icons/fa-gear.svg',
        title: 'iHub',
        description:
            'Learn about browser support, package managers, project config, performance, and troubleshooting.',
        url: '/platform/ihub/browser-support',
    },
    {
        icon: '/icons/fa-life-ring.svg',
        title: 'Integrating OpenModels',
        description:
            'Follow guides on building interactive playgrounds, improving bug repros, and using OpenModels for tech education.',
        url: '/guides/integration/open-from-github',
    },
    {
        icon: '/icons/fa-users.svg',
        title: 'Enterprise Edition',
        description:
            'Run OpenModels behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
        url: '/enterprise/overview',
    },
];

export const homeExternalLinks = [
    {
        title: 'OpenModels Blog',
        description:
            'Stay up to date with our news, read tech posts from our engineers, and join in celebrating our community.',
        url: 'https://blog.openmodels.wiki/',
        large: true,
        bgImgLight: '/img/theme/link-bg-bolt-light.jpg',
        bgImgDark: '/img/theme/link-bg-bolt-dark.jpg',
    },
    {
        title: 'Community',
        description:
            'Join our supportive community on Discord, ask questions, and share your OpenModels projects.',
        url: 'https://discord.com/invite/EQ7uJQxC',
        large: true,
        bgImgLight: '/img/theme/link-bg-squares-light.png',
        bgImgDark: '/img/theme/link-bg-squares-dark.png',
    },
];

// --------------------------------
// Footer

export const footerSections: Array<{ title: string; items: LinkItem[] }> = [
    {
        title: 'Workspaces',
        items: [
            { text: 'Popular', link: 'https://openmodels.wiki/?starters=popular' },
            { text: 'Frontend', link: 'https://openmodels.wiki/?starters=frontend' },
            { text: 'Backend', link: 'https://openmodels.wiki/?starters=backend' },
            { text: 'Fullstack', link: 'https://openmodels.wiki/?starters=fullstack' },
            { text: 'Vite', link: 'https://openmodels.wiki/?starters=vite' },
            { text: 'Docs, Blogs & Slides', link: 'https://openmodels.wiki/?starters=docs' },
            { text: 'Vanilla', link: 'https://openmodels.wiki/?starters=vanilla' },
        ],
    },
    {
        title: 'Start a new Project',
        items: [
            { text: 'From a Workspace', link: 'https://openmodels.wiki/?starters=popular' },
            {
                text: 'From a GitHub Repo',
                link: '/guides/user-guide/importing-projects#import-from-github',
            },
            {
                text: 'From your computer',
                link: '/guides/user-guide/importing-projects#upload-from-your-computer',
            },
        ],
    },
    {
        title: 'Product',
        items: [
            { text: 'Docs', link: 'https://openmodels.wiki/' },
            { text: 'Enterprise', link: 'https://openmodels.wiki/enterprise' },
            { text: 'Pricing', link: 'https://openmodels.wiki/membership' },
            { text: 'Case Studies', link: 'https://openmodels.wiki/case-studies/google' },
        ],
    },
    {
        title: 'Company',
        items: [
            { text: 'Blog', link: 'https://blog.openmodels.wiki/' },
            { text: 'Careers', link: 'https://openmodels.wiki/careers' },
            { text: 'Community', link: 'https://discord.gg/OpenModels' },
            { text: 'Enterprise Sales', link: 'https://openmodels.wiki/enterprise-contact' },
            { text: 'Privacy', link: 'https://openmodels.wiki/privacy-policy' },
            { text: 'Terms of Service', link: 'https://openmodels.wiki/terms-of-service' },
        ],
    },
    {
        title: 'Connect',
        items: [
            { text: 'GitHub', link: 'https://github.com/OpenModels/core' },
            { text: 'Twitter', link: 'https://twitter.com/OpenModels' },
            { text: 'Discord', link: 'https://discord.gg/OpenModels' },
        ],
    },
];
