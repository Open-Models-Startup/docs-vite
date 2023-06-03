import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfig, type HeadConfig } from 'vitepress';
import { defaultGroupLink, sidebarLinks } from '../docs/links';

dotenv.config();

export default defineConfig({
    srcDir: 'docs',
    outDir: 'build',

    // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
    cleanUrls: true,

    // Prevent builds when content has dead links
    ignoreDeadLinks: false,

    // Metadata
    lang: 'en-US',
    title: 'Qi X LAB',
    description:
        "Welcome to Qi X Lab, a vibrant community that democratizes AI through accessibility, innovation, and collaboration. Welcome aboard!",
    head: getHeadTags(process.env),

    // Theme
    themeConfig: {
        siteTitle: 'Qi X LAB',
        logo: '/img/theme/docs-logo.svg',
        algolia: getAlgoliaConfig(process.env),
        editLink: {
            pattern: 'https://pr.new/Qi-X-Lab/docs-home/edit/main/docs/:path',
            text: 'Edit this page',
        },
        nav: [
            { text: 'HOME', link: defaultGroupLink('userGuide') },
            { text: 'RESEARCH', link: defaultGroupLink('research') },
            { text: 'PUBLISH', link: defaultGroupLink('publish') },
            { text: 'NEWSROOM', link: defaultGroupLink('newsroom') }, { text: 'CAREER', link: defaultGroupLink('career') },
            { text: 'COOPERATIONS', link: defaultGroupLink('cooperations') },
        ],
        sidebar: {
            '/home/': sidebarLinks('main', ['userGuide', 'integrationGuide']),
            '/research/': sidebarLinks('main', ['research']),
            '/platform/api/': sidebarLinks('main', ['api']),
            '/platform/publish/': sidebarLinks('main', ['publish']),
            '/platform/newsroom/': sidebarLinks('main', ['newsroom']),
            '/cooperations/': sidebarLinks('cooperations', ['cooperations']),
        },
    },

    markdown: {
        config: (md) => {
            md.use(mdFootnote);
        },
    },
});

function getHeadTags(env: NodeJS.ProcessEnv): HeadConfig[] {
    const tags: HeadConfig[] = [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/theme/favicon.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Qi X LAB' }],
        ['meta', { name: 'twitter:site', content: '@Qi X Lab' }],
    ];

    if (env.VITE_GTM_ID) {
        tags.push([
            'script',
            { src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GTM_ID}`, async: '' },
        ]);
        tags.push([
            'script',
            {},
            `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${env.VITE_GTM_ID}',{anonymize_ip:true})`,
        ]);
    }

    return tags;
}

function getAlgoliaConfig(env: NodeJS.ProcessEnv) {
    if (env.VITE_ALGOLIA_ID && env.VITE_ALGOLIA_KEY) {
        return {
            indexName: 'Qi X Lab',
            appId: env.VITE_ALGOLIA_ID,
            apiKey: env.VITE_ALGOLIA_KEY,
        };
    }
}
