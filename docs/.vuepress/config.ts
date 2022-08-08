/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 13:34:44
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-08 17:32:27
 * @Description: In User Settings Edit
 */
import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'
import { resolve } from 'path'

export default defineUserConfig({
  title: '北关尔士',  // 显示在左上角的网站名称
  base: '/', // 项目基础路径
  lang: 'zh-CN', // 项目语言
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: '记录我生活的点点积极', // 网站描述
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  // // theme: defaultTheme({}), // 使用默认主题包
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: "Evan's blog",
  //     description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
  //   }
  // },
  // themeConfig: {
  //   nav: navbar, // 导航栏配置
  //   sidebar: sidebar, // 侧边栏配置
  //   sidebarDepth: 2, // 侧边栏显示2级
  //   lastUpdated: 'Last Updated', // 更新时间：每个文件git最后提交的时间
  //   smoothScroll: true, // 启用平滑滚动
  //   searchMaxSuggestions: 10, // 搜索结果显示10个
  // }
  // 主题
  theme: defaultTheme({
    home: '/',
    navbar: navbar,
    sidebar: sidebar,
    selectLanguageName: '简体中文',
    selectLanguageText: '选择语言',
    selectLanguageAriaLabel: '选择语言',
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
})