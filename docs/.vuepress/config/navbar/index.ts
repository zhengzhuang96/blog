/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 17:46:39
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-09 09:47:16
 * @Description: In User Settings Edit
 */
import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '面试',
    children: [
      {
        text: 'css',
        link: '/interview/css/',
      },
      {
        text: 'javascript',
        link: '/interview/javascript/',
      },
      {
        text: 'vue',
        link: '/interview/vue/',
      },
      {
        text: 'react',
        link: '/interview/react/',
      },
      {
        text: 'node',
        link: '/interview/node/',
      },
      {
        text: 'html',
        link: '/interview/html/',
      },
      {
        text: 'flutter',
        link: '/interview/flutter/',
      },
      {
        text: 'css',
        link: '/interview/css/',
      },
      {
        text: '编程',
        link: '/interview/编程/',
      },
      {
        text: '工程化',
        link: '/interview/工程化/',
      },
      {
        text: '算法',
        link: '/interview/算法/',
      },
      {
        text: '网络',
        link: '/interview/网络/',
      },
      {
        text: '性能',
        link: '/interview/性能/',
      },
      {
        text: '真题宝典',
        link: '/interview/真题宝典/',
      },
    ],
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
    text: 'mac',
    link: '/mac/',
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
    text: 'Github',
    link: 'https://github.com/zhengzhuang96/blog',
  },
]