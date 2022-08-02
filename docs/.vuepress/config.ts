/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 13:34:44
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-02 13:43:26
 * @Description: In User Settings Edit
 */
import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'

export default defineUserConfig({
  title: '北关尔士',  // 显示在左上角的网站名称
  base: '/', // 项目基础路径
  lang: 'zh-CN', // 项目语言
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  description: '记录我生活的点点积极', // 网站描述
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