/*
 * @Author: {zhengzhuang}
 * @Date: 2022-08-08 18:05:41
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-08-08 18:20:33
 * @Description: 
 */
// docs/.vuepress/utils/genSidebar.js
const fs = require("fs");
const rpath = require("path");

// 获取根目录
var DOCS_PATH = rpath.resolve(__dirname, "../..");

// 比较文档序列
function cmpMarkDown(md1, md2) {
  var ls1 = md1.split(".");
  var ls2 = md2.split(".");
  return parseInt(ls1[0]) - parseInt(ls2[0]);
}

// 获取md文档列表
function getMarkDownList(path, is_sort) {
  var list = new Array();
  if (typeof path == "string" && typeof is_sort == "boolean") {
    let file_list = fs.readdirSync(path);
    for (let i = 0; i < file_list.length; i++) {
      let file = file_list[i];
      if (file.endsWith(".md") && file.indexOf("README") == -1) {
        list.push(file);
      }
    }
    if (is_sort) {
      list.sort(cmpMarkDown);
    }
  }
  return list;
}

// 裁剪到文本左侧的特殊字符
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

var genSidebar = {
  // 生成侧边栏
  genDefaultSidebar: function (path, name, version, is_sort, depth) {
    var result = new Array();
    var object: any = new Object();
    if (
      typeof path == "string" &&
      typeof name == "string" &&
      typeof version == "string"
    ) {
      let target_path = rpath.resolve(DOCS_PATH, path);
      if (typeof depth != "number") {
        depth = 2;
      }
      object.text = name + "_" + version;
      object.collapsable = false;
      object.sidebarDepth = depth;
      object.children = new Array();

      let md_list = getMarkDownList(target_path, is_sort);
      console.log(md_list);
      for (let i = 0; i < md_list.length; i++) {
        let md = md_list[i];
        let ls = md.split(".");
        let iter: any = new Object();
        if (ls.length > 2) {
          iter.text = ls[1];
          // iter.path = ls[0] + "." + ls[1];
        } else {
          iter.text = ls[0];
          // iter.path = ls[0];
        }
        object.children.push(ls[0]);
      }
    }
    result.push(object);
    // console.log(result);
    return result;
  },
};

export default genSidebar;
