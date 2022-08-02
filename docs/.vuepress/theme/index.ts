/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-29 14:36:56
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-29 17:06:02
 * @Description: In User Settings Edit
 */
import { resolve } from 'path'
import { ThemeObject } from 'vuepress'

const theme: ThemeObject = {
  name: "docs",
  // extends: "@vuepress/theme-default",
  layouts: {
    '404': resolve(__dirname, './layouts/404.vue')
  },
}

export default theme