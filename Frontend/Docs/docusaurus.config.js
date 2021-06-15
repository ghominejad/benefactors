
const {lastName} = require('./src/plugins/Names');
var lastUpdateName = lastName('updates');
const path = require('path');

module.exports = {
  title: 'راهنمای نرم‌افزار خیرین',
  tagline: 'شامل راهنما، بروزرسانی‌ها، وقایع و مستندات',
  url: 'https://emdad.rup.ir',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'faranam', // Usually your GitHub org/user name.
  projectName: 'benefactors', // Usually your repo name.
  plugins:['docusaurus-plugin-auto-sidebars', {
    path:'docs'
  }],
  themeConfig: {
    navbar: {
      title: 'خیرین',
      logo: {
        alt: 'Emdadgaran docs',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'benefactors/getting-started',
          activeBasePath: '',
          label: 'راهنما',
          position: 'left',
        },
        {
          to: lastUpdateName,
          activeBasePath: '',
          label: 'بروزرسانی‌ها',
          position: 'left',
        },
        {
          to: 'DeveloperGuides/technologies',
          activeBasePath: '',
          label: 'راهنمای برنامه‌نویسان',
          position: 'left',
        },
        {
          href: 'https://staging-emdad.rup.ir/swagger',
          activeBasePath: '',
          label: 'API',
          position: 'left',
        },
        {
          to: 'video/dashboard',
          activeBasePath: '',
          label: 'فیلم‌ها',
          position: 'left',
        },
        // {
        //   href: 'https://emdad.rup.ir',
        //   activeBasePath: '',
        //   label: 'نسخه اصلی',
        //   position: 'right',
        // },
        // {
        //   href: 'https://staging-emdad.rup.ir',
        //   activeBasePath: '',
        //   label: 'نسخه آزمایشی',
        //   position: 'right',
        // },
        {to: 'blog', label: 'بلاگ', position: 'left'},
        {
          href: 'https://trello.com/b/u9k0YTAx/benefactors',
          label: 'سامانه درخواست‌ها',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'مستندات',
          items: [
            {
              label: 'راهنما',
              to: 'benefactors/getting-started',
            },
            {
              label: 'نسخه‌ها',
              to: lastUpdateName,
            },
            {
              label: 'API',
              href: 'https://emdad.rup.ir/swagger',
            },
          ],
        },
        {
          title: 'شبکه‌های اجتماعی',
          items: [
            {
              label: 'تلگرام',
              href: 'https://api.whatsapp.com/send?phone=+989198012677',
            },
            {
              label: 'واتس‌اپ',
              href: 'https://api.whatsapp.com/send?phone=+989198012677',
            },
            {
              label: 'اینستا‌گرام',
              href: 'https://api.whatsapp.com/send?phone=+989198012677',
            },
          ],
        },
        {
          title: 'منابع اینترنتی',
          items: [
            {
              label: 'بلاگ',
              to: 'blog',
            },
            {
              label: 'سورس کدها',
              href: 'https://gitlab.com/faranam/benefactors',
            },
            {
              label: 'ترلو',
              href: 'https://trello.com/b/u9k0YTAx/benefactors',
            },
          ],
        },
      ],
      copyright:`کلیه حقوق این سایت محفوظ و متعلق به موسسه‌ی خیریه‌ی امدادگران عاشورا می‌باشد - Copyright © ${new Date().getFullYear()} Emdadgaraan Institute`
      // copyright: `Copyright © ${new Date().getFullYear()} Faranam, Inc.`,
    },
    // algolia: {
    //   appId: '0U2G29IYVK',
    //   apiKey: 'f8887308aa3fb9f7746513ebae7b3e02',
    //   indexName: 'prod_Emdadgaran.Benefactors.Docs',
    //   // templates:{empty:"no"},
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          
          path: 'docs',
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.auto.js'),
          editUrl:
            'https://gitlab.com/faranam/benefactors/faranam.benefactors.docs/-/tree/master ',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
      
    ],
    
  ],

};
