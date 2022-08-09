/*
 * @Author: {zhengzhuang}
 * @Date: 2022-08-08 18:05:41
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-09 14:56:07
 * @Description:
 */
const fs = require("fs");
const rpath = require("path");

// 获取根目录
var DOCS_PATH = rpath.resolve(__dirname, "../..");

// 比较文档序列, 未用到
function cmpMarkDown(md1, md2) {
  var ls1 = md1.split(".");
  var ls2 = md2.split(".");
  return parseInt(ls1[0]) - parseInt(ls2[0]);
}

// 裁剪到文本左侧的特殊字符, 未用到
function trimRight(string) {
  var str = new String();
  if (typeof string == "string") {
    str = string;
    var filter = new String(" \t\r\n");
    if (filter.indexOf(str.charAt(str.length - 1))) {
      var i = str.length - 1;
      while (i >= 0 && filter.indexOf(str.charAt(i)) != -1) {
        i--;
      }
      str = str.substring(0, i + 1);
    }
    return str;
  }
  return undefined;
}

// 获取md文档列表
function getMarkDownList(list, path, name) {
  let file_list = fs.readdirSync(path);
  let palist = file_list;
  file_list = palist.sort(function (a, b) {
    return a.replace(".md", "").match(/[^-]*$/) - b.replace(".md", "").match(/[^-]*$/)
  });

  file_list.forEach(function (item, index) {
    let file_path = path + "/" + item;
    let info = fs.statSync(file_path);
    if (info.isDirectory()) {
      let children = [];
      let group: any = {};
      let group_name = item.split('-')[0];
      group.text = group_name;
      group.collapsible = true;
      // group.sidebarDepth = 2;
      getMarkDownList(children, file_path, group_name);
      group.children = children;
      list.push(group);
    } else {
      if (file_path.endsWith(".md") && file_path.indexOf("README") == -1) {
        let path = file_path.replace(DOCS_PATH, "").replace(/\\/g, "/");
        list.push(path);
      }
    }
  })
  return list;
}

export const genDefaultSidebar = (path: any, name?: any) => {
  var result = new Array();
  if (
    typeof path == "string"
  ) {
    let target_path = rpath.resolve(DOCS_PATH, path);
    if (name) {
      var object: any = new Object();
      object.text = name;
      // object.collapsible = true;
      object.children = new Array();
      var list = new Array();
      let md_list = getMarkDownList(list, target_path, name);
      object.children.push(...md_list);
      result.push(object);
    } else {
      var list = new Array();
      let md_list = getMarkDownList(list, target_path, name);
      result.push(...md_list);
    }
  }
  return result
}