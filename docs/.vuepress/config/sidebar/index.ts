/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 17:58:21
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-11 14:11:18
 * @Description: In User Settings Edit
 */
import { SidebarConfig } from "vuepress";
import { genDefaultSidebar } from "../../utils/genSidebar";

export const sidebar: SidebarConfig = {
  '/interview/css/': genDefaultSidebar('./interview/css', 'css'),
  '/interview/javascript/': genDefaultSidebar('./interview/javascript', 'javascript'),
  '/interview/vue/': genDefaultSidebar('./interview/vue', 'vue'),
  '/interview/react/': genDefaultSidebar('./interview/react', 'react'),
  '/interview/node/': genDefaultSidebar('./interview/node', 'node'),
  '/interview/html/': genDefaultSidebar('./interview/html', 'html'),
  '/interview/flutter/': genDefaultSidebar('./interview/flutter', 'flutter'),
  '/interview/encoding/': genDefaultSidebar('./interview/encoding', '编程题'),
  '/interview/engineering/': genDefaultSidebar('./interview/engineering', '工程化'),
  '/interview/http/': genDefaultSidebar('./interview/http', '网络'),
  '/interview/performance/': genDefaultSidebar('./interview/performance', '性能'),
  '/frontend/': genDefaultSidebar('./frontend'),
  '/docker/': genDefaultSidebar('./docker', 'docker'),
  '/android/': genDefaultSidebar('./android', 'android'),
  '/egg/': genDefaultSidebar('./egg', 'egg'),
  '/flutter/': genDefaultSidebar('./flutter', 'flutter'),
  '/git/': genDefaultSidebar('./git', 'git'),
  '/go/gin/': genDefaultSidebar('./go/gin', 'gin'),
  '/computer/': genDefaultSidebar('./computer', '高效开发环境'),
  '/mysql/': genDefaultSidebar('./mysql', 'mysql'),

  // '/frontend/': [
  //   {
  //     text: '前端',
  //     children: [
  //       '/frontend/使用Nexus搭建npm私服.md',
  //       '/frontend/前端基础设施建设.md',
  //       '/frontend/将npm包发布在私有仓库（nexus）中.md',
  //       '/frontend/打造vue3组件库.md',
  //       '/frontend/打造一款企业级cli脚手架.md',
  //       {
  //         text: 'npm',
  //         children: [
  //           '/frontend/npm/mddir项目结构生成包.md',
  //           '/frontend/npm/npm指令集.md',
  //           '/frontend/npm/发布npm包到官方仓库.md'
  //         ]
  //       },
  //     ]
  //   }
  // ],
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
  '/': ['']
}