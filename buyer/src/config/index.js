/*
 * @Author: your name
 * @Date: 2022-03-22 09:41:19

 * @LastEditTime: 2022-05-17 11:08:15
 * @LastEditors: YLY 2695371472@qq.com
=======
 * @LastEditTime: 2022-05-16 22:15:40
 * @LastEditors: YLY 2695371472@qq.com

 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lilishop-ui_4.2.4\buyer\src\config\index.js
 */
module.exports = {

  title: "邮乡味", //配置显示在浏览器标签的title、底部信息、部分信息展示的值
 
  icpCard: "", // icp证
  company: {
    href: "https://pickmall.cn",
    name: "南京翰然信息技术有限公司",
  }, //公司信息
  icpMessage: "苏ICP备XXXXXXXX", //icp备案
  aMapKey: "b440952723253aa9fe483e698057bf7d", //高德web端申请的api key
  enableCDN: false, //生产环境 是否启用cdn加载 vue等js
  port: 10000, //端口
};
