// --------------------------------
// Link Groups / Sidebar

type LinkGroup =
    | 'career'
    | 'research'
    | 'newsroom'
    | 'cooperations'
    | 'home'
    | 'course'
    | 'publish';

interface LinkItem {
    text: string;
    link: string;
    items?: LinkItem[];
}

const groupLinks: Record<LinkGroup, LinkItem[]> = {
    home: [
        { text: 'What is Qi X Lab', link: '/home/user-guide/what-is-qixlab' },
        { text: 'Getting started', link: '/home/user-guide/getting-started' },
        { text: 'Starter projects', link: '/home/user-guide/starter-projects' },
        { text: 'Available environments', link: '/home/user-guide/available-environments' },
        { text: 'Importing projects', link: '/home/user-guide/importing-projects' },
        { text: 'IDE: what’s on your screen', link: '/home/user-guide/ide-whats-on-your-screen' },
        { text: 'Collections', link: '/home/user-guide/collections' },
        { text: 'Keyboard shortcuts', link: '/home/user-guide/keyboard-shortcuts' },
    ],
    research: [
        { text: 'What is Research?', link: '/research/what-is-research' },
        { text: 'Using pr.new', link: '/research/using-pr-new' },
        { text: 'Working in Research IDE', link: '/research/working-in-research-ide' },
        { text: 'Integrating ResearchApp bot', link: '/research/integrating-researchapp-bot' },
        {
            text: 'Content updates with Web Publisher',
            link: '/research/content-updates-with-web-publisher',
        }],
    course: [
        { text: 'What is Course?', link: '/course/what-is-course' },
        { text: 'Using pr.new', link: '/course/using-pr-new' },
        { text: 'Working in Course', link: '/research/working-in-courese-ide' },
        { text: 'Integrating Course bot', link: '/course/integrating-courseapp-bot' },
        {
            text: 'Content updates with Web Publisher',
            link: '/course/content-updates-with-web-publisher',
        },
        { text: 'Integrating Web Publisher', link: '/course/integrating-web-publisher' },
        { text: 'COURSE FAQ', link: '/course/course-faq' },
    ],

    publish: [
        { text: 'Browser support', link: '/platform/publish/browser-support' },
        { text: 'Browser configuration', link: '/platform/publish/browser-config' },
        { text: 'Project configuration', link: '/platform/publish/project-config' },
        { text: 'Turbo package manager', link: '/platform/publish/turbo-package-manager' },
        { text: 'Troubleshooting', link: '/platform/publish/troubleshooting-publish' },
    ],
    career: [
        { text: 'Browser support', link: '/platform/publish/browser-support' },
        { text: 'Browser configuration', link: '/platform/publish/browser-config' },
        { text: 'Project configuration', link: '/platform/publish/project-config' },
        { text: 'Turbo package manager', link: '/platform/publish/turbo-package-manager' },
        { text: 'Troubleshooting', link: '/platform/publish/troubleshooting-career' },
    ],
    cooperations: [
        { text: 'Overview', link: '/cooperations/overview' },
        {
            text: 'Installation',
            link: '/cooperations/installation/quickstart',
            items: [
                { text: 'Quickstart on Bare Metal', link: '/cooperations/installation/quickstart' },
                { text: 'Quickstart on GCP (Non-GKE)', link: '/cooperations/installation/quickstart-gcp' },
                {
                    text: 'Quickstart (Existing Cluster)',
                    link: '/cooperations/installation/quickstart-existing-cluster',
                },
                { text: 'Administrator Guide', link: '/cooperations/installation/administrator-guide' },
                { text: 'Air Gapped Installs', link: '/cooperations/installation/air-gapped-installs' },
            ],
        },
        { text: 'Configuring DNS & TLS', link: '/cooperations/configuring-dns' },
        { text: 'Configuring Firewall Rules', link: '/cooperations/configuring-firewall-rules' },
        { text: 'Setting up SSO', link: '/cooperations/sso' },
        { text: 'Setting up SSO with Okta', link: '/cooperations/okta-sso' },
        { text: 'Setting up SSO with ADFS', link: '/cooperations/adfs-sso' },
        { text: 'Connect NPM registry', link: '/cooperations/npm' },
        { text: 'Starter Projects', link: '/cooperations/starter-projects' },
        { text: 'User Management', link: '/cooperations/user-management' },
        { text: 'Aggregating Logs', link: '/cooperations/log-aggregation' },
        { text: 'Data Migration', link: '/cooperations/data-migration' },
    ],
    newsroom: [{ text: 'Browser support', link: '/platform/newsroom/browser-support' },
    { text: 'Browser configuration', link: '/platform/newsroom/browser-config' },
    { text: 'Project configuration', link: '/platform/newsroom/project-config' },
    { text: 'Turbo package manager', link: '/platform/newsroom/turbo-package-manager' },
    { text: 'Troubleshooting', link: '/platform/newsroom/troubleshooting-newsroom' },]
};

const linkGroups: Record<LinkGroup, { text: string; items: LinkItem[] }> = {
    home: {
        text: 'HOME',
        items: groupLinks.home,
    },
    research: {
        text: 'Research',
        items: groupLinks.research,
    },
    publish: {
        text: 'PUBLISH',
        items: groupLinks.publish,
    },
    course: {
        text: 'COURSE',
        items: groupLinks.course,
    },
    newsroom: {
        text: 'NEWS',
        items: groupLinks.newsroom,
    },
    career: {
        text: 'CAREERS',
        items: groupLinks.career,
    },
    cooperations: {
        text: 'COOPERATIONS',
        items: groupLinks.cooperations,
    },
};

export const defaultGroupLink = (linkGroup: LinkGroup) => groupLinks[linkGroup][0].link;

export const sidebarLinks = (
    sidebar: 'main' | 'cooperations',
    activeLinkGroups: LinkGroup[] = []
) => {
    if (sidebar === 'cooperations') {
        return [linkGroups.cooperations];
    }

    return Object.entries(linkGroups)
        .filter(([key]) => key !== 'cooperations')
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
        title: 'HOME',
        description:
            'Explore the full potential of Qi X Lab: from writing code or spinning quick demos to making your docs delightful.',
        url: '/home/user-guide/what-is-qixlab',
    },
    {
        icon: '/icons/fa-browser.svg',
        title: 'Research',
        description:
            'One click opens a full in-browser IDE for your repos, issues, and PRs. No more cloning, installing, stashing!',
        url: '/research/what-is-research',
    },
    {
        icon: '/icons/fa-brackets-curly.svg',
        title: 'CAREERS',
        description:
            'Embed GitHub repos, create new projects, build educational experiences, all programmatically with our SDK.',
        url: '/platform/career/javascript-sdk',
    },
    {
        icon: '/icons/fa-gear.svg',
        title: 'PUBLISH',
        description:
            'Learn about browser support, package managers, project config, performance, and troubleshooting.',
        url: '/platform/publish/browser-support',
    },
    {
        icon: '/icons/fa-life-ring.svg',
        title: 'COURSE',
        description:
            'Follow home on building interactive playgrounds, improving bug repros, and using Qi X Lab for tech education.',
        url: '/course/what-is-course',
    },
    {
        icon: '/icons/fa-users.svg',
        title: 'COOPERATIONS',
        description:
            'Run Qi X Lab behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
        url: '/cooperations/overview',
    },
];

export const homeExternalLinks = [
    {
        title: 'Qi X Lab Blog',
        description:
            'Stay up to date with our news, read tech posts from our engineers, and join in celebrating our community.',
        url: 'https://blog.qixlab.com/',
        large: true,
        bgImgLight: '/img/theme/link-bg-bolt-light.jpg',
        bgImgDark: '/img/theme/link-bg-bolt-dark.jpg',
    },
    {
        title: 'Community',
        description:
            'Join our supportive community on Discord, ask questions, and share your Qi X Lab projects.',
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
        title: 'Press',
        items: [
            { text: 'Publish', link: 'https://qixlab.com/?starters=docs' },
            { text: 'Blogs', link: 'https://qixlab.com/?starters=docs' },
            { text: 'Slides', link: 'https://qixlab.com/?starters=docs' },
        ],
    },
    {
        title: 'Lab Project',
        items: [
            { text: 'From a Workspace', link: 'https://qixlab.com/?starters=popular' },
            {
                text: 'From a GitHub',
                link: '/home/user-guide/importing-projects#import-from-github',
            },
            {
                text: 'From your Computer',
                link: '/home/user-guide/importing-projects#upload-from-your-computer',
            },
        ],
    },
    {
        title: 'Service',
        items: [
            { text: 'Open Course', link: 'https://qixlab.com/' },
            { text: 'Cooperations', link: 'https://qixlab.com/cooperations' },
            { text: 'Education', link: 'https://qixlab.com/membership' },
            { text: 'Case Studies', link: 'https://qixlab.com/case-studies/google' },
        ],
    },
    {
        title: 'Oppertunity',
        items: [
            { text: 'News', link: 'https://blog.qixlab.com/' },
            { text: 'Careers', link: 'https://qixlab.com/careers' },
            { text: 'Community', link: 'https://discord.gg/Qi X Lab' },
            { text: 'Privacy', link: 'https://qixlab.com/privacy-policy' },
            { text: 'Terms of Service', link: 'https://qixlab.com/terms-of-service' },
        ],
    },
    {
        title: 'Connect',
        items: [
            { text: 'GitHub', link: 'https://github.com/Qi-X-Lab' },
            { text: 'Twitter', link: 'https://twitter.com/QiXLab' },
            { text: 'Email', link: 'https://twitter.com/QiXLab' },
        ],
    },
];
