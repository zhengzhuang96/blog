/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 17:58:21
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-02 13:37:28
 * @Description: In User Settings Edit
 */
import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  "/interview/css": [
    {
      text: 'css',
      children: [
        '/interview/css/盒模型',
        '/interview/css/BFC',
        '/interview/css/link和@import的区别',
      ],
    },
  ],
  "/interview/javascript": [
    {
      text: 'javascript',
      children: [
        '/interview/javascript/变量提升',
        '/interview/javascript/常用的设计模式',
        '/interview/javascript/防抖和节流?',
        '/interview/javascript/关于原型的题目',
        '/interview/javascript/模块化机制',
        '/interview/javascript/强缓存与协商缓存',
      ],
    },
  ],
  '/frontend': [
    {
      text: '前端',
      children: [
        'README',
        '打造一款企业级cli脚手架',
        '打造vue3组件库',
        '将npm包发布在私有仓库（nexus）中',
        '前端基础设施建设',
        '使用Nexus搭建npm私服',
        'package.json中版本号前面~和^的区别',
        '发布npm包到官方仓库',
      ],
    },
  ],
  '/docker': [
    {
      text: 'docker',
      children: [
        'Docker安装MySQL',
        'docker安装nginx',
        'Docker安装Redis',
        'docker常用命令',
      ],
    },
  ],
  // '/zh/advanced/': [
  //   {
  //     text: '深入',
  //     children: [
  //       '/zh/advanced/architecture.md',
  //       '/zh/advanced/plugin.md',
  //       '/zh/advanced/theme.md',
  //     ],
  //   },
  //   {
  //     text: 'Cookbook',
  //     children: [
  //       '/zh/advanced/cookbook/README.md',
  //       '/zh/advanced/cookbook/usage-of-client-config.md',
  //       '/zh/advanced/cookbook/adding-extra-pages.md',
  //       '/zh/advanced/cookbook/making-a-theme-extendable.md',
  //       '/zh/advanced/cookbook/passing-data-to-client-code.md',
  //       '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
  //     ],
  //   },
  // ],
  // '/zh/reference/': [
  //   {
  //     text: 'VuePress 参考',
  //     collapsible: true,
  //     children: [
  //       '/zh/reference/cli.md',
  //       '/zh/reference/config.md',
  //       '/zh/reference/frontmatter.md',
  //       '/zh/reference/components.md',
  //       '/zh/reference/plugin-api.md',
  //       '/zh/reference/theme-api.md',
  //       '/zh/reference/client-api.md',
  //       '/zh/reference/node-api.md',
  //     ],
  //   },
  //   {
  //     text: '打包工具参考',
  //     collapsible: true,
  //     children: [
  //       '/zh/reference/bundler/vite.md',
  //       '/zh/reference/bundler/webpack.md',
  //     ],
  //   },
  //   {
  //     text: '默认主题参考',
  //     collapsible: true,
  //     children: [
  //       '/zh/reference/default-theme/config.md',
  //       '/zh/reference/default-theme/frontmatter.md',
  //       '/zh/reference/default-theme/components.md',
  //       '/zh/reference/default-theme/markdown.md',
  //       '/zh/reference/default-theme/styles.md',
  //       '/zh/reference/default-theme/extending.md',
  //     ],
  //   },
  //   {
  //     text: '官方插件参考',
  //     collapsible: true,
  //     children: [
  //       {
  //         text: '常用功能',
  //         children: [
  //           '/zh/reference/plugin/back-to-top.md',
  //           '/zh/reference/plugin/container.md',
  //           '/zh/reference/plugin/external-link-icon.md',
  //           '/zh/reference/plugin/google-analytics.md',
  //           '/zh/reference/plugin/medium-zoom.md',
  //           '/zh/reference/plugin/nprogress.md',
  //           '/zh/reference/plugin/register-components.md',
  //         ],
  //       },
  //       {
  //         text: '内容搜索',
  //         children: [
  //           '/zh/reference/plugin/docsearch.md',
  //           '/zh/reference/plugin/search.md',
  //         ],
  //       },
  //       {
  //         text: 'PWA',
  //         children: [
  //           '/zh/reference/plugin/pwa.md',
  //           '/zh/reference/plugin/pwa-popup.md',
  //         ],
  //       },
  //       {
  //         text: '语法高亮',
  //         children: [
  //           '/zh/reference/plugin/prismjs.md',
  //           '/zh/reference/plugin/shiki.md',
  //         ],
  //       },
  //       {
  //         text: '主题开发',
  //         children: [
  //           '/zh/reference/plugin/active-header-links.md',
  //           '/zh/reference/plugin/git.md',
  //           '/zh/reference/plugin/palette.md',
  //           '/zh/reference/plugin/theme-data.md',
  //           '/zh/reference/plugin/toc.md',
  //         ],
  //       },
  //     ],
  //   },
  // ],
  '': ['']
}