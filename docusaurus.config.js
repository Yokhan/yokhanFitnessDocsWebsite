// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Yandex Metrica counter ID — set via env var to avoid hardcoding.
// If not set at build time, analytics snippet is omitted.
const YANDEX_METRICA_ID = process.env.YANDEX_METRICA_ID || '';

const SITE_URL = 'https://guide.yokhanfitness.ru';

// JSON-LD structured data — helps Google/Yandex understand site identity,
// author credentials, and content type. Critical for YMYL (health) content.
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Yokhan Gym',
  url: SITE_URL,
  logo: `${SITE_URL}/img/logoSVG.svg`,
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#author`,
    name: 'Игорь Назаров',
    jobTitle: 'Фитнес-тренер',
    description: 'Фитнес-тренер «Мастер-тренер», автор гайда «Новая физическая культура» для IT-специалистов.',
    url: SITE_URL,
    sameAs: ['https://t.me/YokhanGym_bot'],
  },
  sameAs: ['https://t.me/YokhanGym_bot'],
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Новая физическая культура',
  description: 'Гайд по фитнесу для IT-специалистов от Игоря Назарова (Yokhan Gym)',
  inLanguage: 'ru',
  publisher: {'@id': `${SITE_URL}/#organization`},
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Новая физическая культура',
  tagline: 'Гайд по фитнесу для IT-специалистов',
  favicon: 'img/logoSVG.ico',
  staticDirectories: ['static', 'docs/media/img','docs/media/video'],

  // Head tags: JSON-LD + font preload + analytics (if enabled)
  headTags: [
    // Preconnect + preload for critical fonts (perf)
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/Unbounded-VariableFont_wght.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/GolosText-VariableFont_wght.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    // JSON-LD: Organization / Person / WebSite
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(jsonLdOrganization),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(jsonLdWebsite),
    },
    // Yandex Metrica — loaded only if YANDEX_METRICA_ID is set at build time.
    // No-op otherwise (no network calls, no cookies).
    ...(YANDEX_METRICA_ID
      ? [
          {
            tagName: 'script',
            attributes: {type: 'text/javascript'},
            innerHTML: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${JSON.stringify(YANDEX_METRICA_ID)}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          },
          {
            tagName: 'noscript',
            attributes: {},
            innerHTML: `<div><img src="https://mc.yandex.ru/watch/${YANDEX_METRICA_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`,
          },
        ]
      : []),
  ],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
 
  // Set the production url of your site here
  url: 'https://guide.yokhanfitness.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config (used by editUrl below).
  organizationName: 'Yokhan',
  projectName: 'yokhanFitnessDocsWebsite',

  // Custom fields — доступны в compile time через siteConfig.customFields.
  customFields: {
    // Giscus (GitHub Discussions) комментарии.
    // Чтобы включить:
    //  1. Зайдите на https://giscus.app
    //  2. Укажите репозиторий: Yokhan/yokhanFitnessDocsWebsite
    //  3. Создайте категорию Discussions "Comments" (тип "Announcements")
    //  4. Скопируйте repoId и categoryId со страницы giscus.app
    //  5. Заполните поля ниже и пересоберите сайт
    // Если хотя бы одно поле пустое — комментарии не отображаются.
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
    },
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
          docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Yokhan/yokhanFitnessDocsWebsite/edit/main/',
        },
          blog: false, // Optional: disable the blog plugin

        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logoSVG.svg',
      metadata: [
        {name: 'description', content: 'Бесплатный гайд по тренировкам для программистов, дизайнеров и инженеров с сидячим образом жизни. Без фармы, героизма и пустых обещаний.'},
        {name: 'keywords', content: 'фитнес, тренировки, IT, программисты, здоровье, силовые, кардио, похудение, набор мышц, Yokhan Gym'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Новая физическая культура'},
        {property: 'og:locale', content: 'ru_RU'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      navbar: {
        title: 'Новая физическая культура',        
        logo: {
          alt: 'Новая физическая культура',
          src: 'img/logoSVG.svg',
            width: 44,
            height: 44,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Гайд по тренировкам',
            to: '/', // Теперь ведет на документацию
          },
          
          {
            href: 'https://t.me/YokhanGym_bot',
            label: 'Игорь Назаров',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Навигация',
            items: [
              {label: '🚀 Quick Start', to: '/WarmingUp/quick-start'},
              {label: 'Об авторе', to: '/'},
              {label: 'FAQ', to: '/FAQ/muscle-pain'},
            ],
          },
          {
            title: 'Связь с автором',
            items: [
              {
                label: 'Telegram-бот',
                href: 'https://t.me/YokhanGym_bot',
              },
            ],
          },
          {
            title: 'Материалы',
            items: [
              {label: 'Sitemap', href: 'https://guide.yokhanfitness.ru/sitemap.xml'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Игорь Назаров (Yokhan Gym). Гайд распространяется бесплатно. Это не медицинский совет — при хронических заболеваниях проконсультируйтесь с врачом.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    }),
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['ru'],
        docsRouteBasePath: '/',
        searchBarShortcutHint: false,
      }),
    ],
  ],
};

export default config;




