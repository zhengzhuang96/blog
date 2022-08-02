/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 17:46:39
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-02 10:59:52
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
    // link: '/interview/',
    children: [
      {
        text: 'css',
        link: '/interview/css/',
      },
      {
        text: 'javascript',
        link: '/interview/javascript/',
      },
    ],
  },
  {
    text: '前端',
    link: '/frontend/',
    // children: [
    //   {
    //     text: 'javascript',
    //     link: '/面试/javascript/',
    //   },
    // ],
  },
]