/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 17:46:39
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-11 15:23:32
 * @Description: In User Settings Edit
 */
import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '前端',
    children: [
      {
        text: '前端',
        link: '/frontend/',
      },
      {
        text: 'egg',
        link: '/egg/',
      },
      {
        text: 'flutter',
        link: '/flutter/',
      },
    ],
  },
  {
    text: 'docker',
    link: '/docker/',
  },
  {
    text: '移动端',
    children: [
      {
        text: 'android',
        link: '/android/',
      },
      {
        text: 'flutter',
        link: '/flutter/',
      },
    ],
  },
  {
    text: '工程化',
    children: [
      {
        text: 'git',
        link: '/git/',
      },
    ],
  },
  {
    text: 'go',
    children: [
      {
        text: 'gin',
        link: '/go/gin/',
      },
    ],
  },
  {
    text: '高效开发环境',
    link: '/computer/',
  },
  {
    text: '数据库',
    children: [
      {
        text: 'mysql',
        link: '/mysql/',
      },
    ],
  },
  {
    text: '面试',
    link: '/interview/',
    // children: [
    //   {
    //     text: 'javascript',
    //     link: '/interview/javascript/',
    //   },
    //   {
    //     text: 'css',
    //     link: '/interview/css/',
    //   },
    //   {
    //     text: 'html',
    //     link: '/interview/html/',
    //   },
    //   {
    //     text: 'react',
    //     link: '/interview/react/',
    //   },
    //   {
    //     text: 'vue',
    //     link: '/interview/vue/',
    //   },
    //   {
    //     text: 'node',
    //     link: '/interview/node/',
    //   },
    //   {
    //     text: '编程',
    //     link: '/interview/encoding/',
    //   },
    //   {
    //     text: '工程化',
    //     link: '/interview/engineering/',
    //   },
    //   {
    //     text: '网络',
    //     link: '/interview/http/',
    //   },
    //   {
    //     text: '性能',
    //     link: '/interview/performance/',
    //   },
    //   {
    //     text: 'flutter',
    //     link: '/interview/flutter/',
    //   },
    // ],
  },
  {
    text: 'Github',
    link: 'https://github.com/zhengzhuang96/blog',
  },
]