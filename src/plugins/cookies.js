"use strict";
import Vue from 'vue';
import VueCookies from 'vue-cookies'   //引入VueCookies 
Vue.use(VueCookies )    // 声明使用

/** @新增cookie **/
/*this.$cookies.set(key, value[, expireTimes[, path[, domain[, secure]]]]);　　// @value(JSONstr)*/
/** @获取cookie **/
/*this.$cookies.get(keyName)*/
/**@删除cookie */
/**this.$cookies.remove(key [, path [, domain]]) */
/**@判断某个cookie是否存在 */
/*this.$cookies.isKey(key);*/
/**@获取所有cookie名称 */
/**this.$cookies.keys();    // return a array */