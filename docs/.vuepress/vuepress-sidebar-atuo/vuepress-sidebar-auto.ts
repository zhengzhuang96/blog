/*
 * @Author: {zhengzhuang}
 * @Date: 2022-08-08 14:23:23
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-08 17:57:33
 * @Description: 侧边栏
 */
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const fs = require('fs')
const path = require('path')

/**
 * @description: 过滤所要导航的文件, 文件名 包含.md 但 不包含  README
 * @param {*} path
 */
function checkFileType(path) {
  return path.includes(".md") && (!path.includes("README"));
}

/**
 * @description: 格式化文件路径
 * @param {*} basePath
 * @param {*} dirPath
 */
function prefixPath(basePath, dirPath) {
  let index = basePath.indexOf("/")
  // 去除一级目录地址
  basePath = basePath.slice(index, path.length)
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/")
}

/**
 * @description: 截取文档路径
 * @param {*} path
 * @param {*} ele
 */
function getPath(path, ele) {
  let item = prefixPath(path, ele);
  // console.log('===', item, item.split('/'))
  return item;
  if (item.split('/')[6]) {
    return item.split('/')[3] + '/' + item.split('/')[4] + '/' + item.split('/')[5] + '/' + item.split('/')[6]
  } else if (item.split('/')[5]) {
    return item.split('/')[3] + '/' + item.split('/')[4] + '/' + item.split('/')[5]
  } else if (item.split('/')[4]) {
    return item.split('/')[3] + '/' + item.split('/')[4]
  } else {
    return item.split('/')[3]
  }
}

/**
 * @description: 递归获取分组信息并排序
 */
function getGroupChildren(path, ele, root, pathTrue) {
  let pa = fs.readdirSync(path + "/" + ele + "/");
  let palist = pa;
  pa = palist.sort(function (a, b) {
    return a.replace(".md", "").match(/[^-]*$/) - b.replace(".md", "").match(/[^-]*$/)
  });
  pa.forEach(function (item, index) {
    let info = fs.statSync(path + "/" + ele + "/" + item);
    if (info.isDirectory()) {
      let children = [];
      let group: any = {};
      group.text = item.split('-')[0];
      // group.collapsable = true;
      // group.sidebarDepth = 2;
      getGroupChildren(path + "/" + ele, item, children, pathTrue);
      group.children = children;
      root.push(group);
    } else {
      if (checkFileType(item)) {
        // console.log(path + "/" + ele, item)
        root.push(getPath(path + "/" + ele, item));
        // if (pathTrue) {
        //   root.push(getPath(path + "/" + ele, item));
        // } else {
        //   root.push('../' + getPath(path + "/" + ele, item));
        // }
        // root.push(getPath(path + "/" + ele, item));
      }
    }
  })
}

/**
 * @description: 初始化
 * @param {*} path
 * @param {*} ele
 * @param {boolean} pathTrue
 */
function getChildren(path, ele, pathTrue?: boolean) {
  var root = []
  getGroupChildren(path, ele, root, pathTrue);
  // console.log(root)
  return root;
}

export default getChildren