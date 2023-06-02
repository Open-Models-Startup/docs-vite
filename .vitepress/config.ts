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
    title: 'OpenModels Docs',
    description:
        "Welcome to OpenModels, a vibrant community that democratizes AI through accessibility, innovation, and collaboration. Welcome aboard!",
    head: getHeadTags(process.env),

    // Theme
    themeConfig: {
        siteTitle: 'OpenModels Docs',
        logo: '/img/theme/docs-logo.svg',
        algolia: getAlgoliaConfig(process.env),
        editLink: {
            pattern: 'https://pr.new/Open-Models-Startup/docs-vite/edit/main/docs/:path',
            text: 'Edit this page',
        },
        nav: [
            { text: 'Guides', link: defaultGroupLink('userGuide') },
            { text: 'iEcho', link: defaultGroupLink('iecho') },
            { text: 'iHub', link: defaultGroupLink('ihub') },
            { text: 'iCreate', link: defaultGroupLink('icreate') }, { text: 'API', link: defaultGroupLink('api') },
            { text: 'Enterprise', link: defaultGroupLink('enterprise') },
        ],
        sidebar: {
            '/guides/': sidebarLinks('main', ['userGuide', 'integrationGuide']),
            '/iecho/': sidebarLinks('main', ['iecho']),
            '/platform/api/': sidebarLinks('main', ['api']),
            '/platform/ihub/': sidebarLinks('main', ['ihub']),
            '/platform/icreate/': sidebarLinks('main', ['icreate']),
            '/enterprise/': sidebarLinks('enterprise', ['enterprise']),
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
        ['meta', { name: 'twitter:title', content: 'OpenModels Docs' }],
        ['meta', { name: 'twitter:site', content: '@OpenModels' }],
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
            indexName: 'OpenModels',
            appId: env.VITE_ALGOLIA_ID,
            apiKey: env.VITE_ALGOLIA_KEY,
        };
    }
}
