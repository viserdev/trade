(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tradeDetail-index"],{1208:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={cusHeader:a("3f2c").default,uniPopup:a("2396").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("cus-header",{attrs:{title:e.$t("trades.detail")}}),a("v-uni-view",{staticClass:"page_bg",style:{backgroundColor:e.config["theme-bg-color"]}},[e.config.homebg?a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.config.homebg}}):e._e()],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{staticClass:"banner",attrs:{src:e.goods.logo,mode:"widthFix"}}),a("v-uni-view",{staticClass:"info",style:{backgroundColor:e.config["theme-bg-color2"],color:e.config["theme-text-color"]}},[a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.product_name"))+"："+e._s(e.goods.title))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.min_investment"))+"："+e._s(e.goods.play_price))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.max_investment"))+"："+e._s(e.goods.max_price))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.total_investment"))+"："+e._s(e.goods.pro_amount))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.daily_dividend"))+"："+e._s(e.goods.play_rate))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.dividend_duration"))+"："+e._s(e.goods.play_time))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.purchase_restrictions"))+"："+e._s(e.goods.can_buy))]),a("v-uni-view",{staticClass:"item"},[e._v(e._s(e.$t("trades.project_progress"))+"："+e._s(e.goods.pro_gress)+"%")]),a("v-uni-view",{staticClass:"progress",style:{borderColor:e.config["theme-text-color"]}},[a("v-uni-view",{staticClass:"percent",style:{width:e.goods.pro_gress+"%",backgroundColor:e.config["theme-text-color"]}})],1)],1),a("v-uni-view",{staticClass:"info",style:{backgroundColor:e.config["theme-bg-color2"],color:e.config["theme-text-color"]}},[a("v-uni-view",{staticClass:"title",style:{color:e.config["theme-text-color"]}},[e._v(e._s(e.$t("trades.project_content")))]),a("v-uni-rich-text",{attrs:{nodes:e.goods.content}})],1),a("v-uni-view",{staticClass:"logbtn flex-center",style:{color:e.config["theme-btn-color"],backgroundColor:e.config["theme-btn-bgcolor"]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showBuy.apply(void 0,arguments)}}},[e._v(e._s(e.isLogin?e.$t("trades.purchase"):e.$t("common.login_tip")))])],1),a("uni-popup",{ref:"popup",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"area",style:{backgroundColor:e.config["theme-bg-color2"],color:e.config["theme-text-color"]}},[a("v-uni-view",{staticClass:"title flex-center"},[e._v(e._s(e.$t("trades.purchase")))]),a("v-uni-view",{staticClass:"param"},[a("v-uni-view",{staticClass:"label"},[e._v(e._s(e.$t("trades.purchase_quantity")))]),a("v-uni-input",{staticClass:"input",style:{color:e.config["theme-text-color"]},attrs:{type:"text",placeholder:e.$t("trades.enter_purchase")},model:{value:e.params.buy_account,callback:function(t){e.$set(e.params,"buy_account",t)},expression:"params.buy_account"}})],1),a("v-uni-view",{staticClass:"param"},[a("v-uni-view",{staticClass:"label"},[e._v(e._s(e.$t("common.payment_password")))]),a("v-uni-input",{staticClass:"input",style:{color:e.config["theme-text-color"]},attrs:{type:"password",placeholder:e.$t("common.enter_password")},model:{value:e.params.paypwd,callback:function(t){e.$set(e.params,"paypwd",t)},expression:"params.paypwd"}})],1),a("v-uni-view",{staticClass:"confirm flex-center",style:{color:e.config["theme-btn-color"],backgroundColor:e.config["theme-btn-bgcolor"]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trades.confirm")))])],1)],1)],1)},i=[]},"2c06":function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.info=t.lists=t.index=void 0;var n=o(a("5530")),i=a("ddff"),r=function(e){return(0,i.apiResquest)({url:"/good/index",method:"POST",query:(0,n.default)({},e)})};t.index=r;var s=function(e){return(0,i.apiResquest)({url:"/good/lists",method:"POST",query:(0,n.default)({},e)})};t.lists=s;var u=function(e){return(0,i.apiResquest)({url:"/good/info",method:"POST",query:(0,n.default)({},e)})};t.info=u},"2c28":function(e,t,a){"use strict";a.r(t);var o=a("1208"),n=a("851e");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("bb6b");var r,s=a("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"51aef1ed",null,!1,o["a"],r);t["default"]=u.exports},"566c":function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("2c06"),i=a("cdf4"),r=o(a("ed62")),s={data:function(){return{config:{},id:"",isLogin:!1,params:{good_id:"",buy_account:"",paypwd:""},goods:[]}},onLoad:function(e){this.config=uni.getStorageSync("config"),this.isLogin=!!uni.getStorageSync("token"),this.id=e.id,this.getGoodInfo()},methods:{getGoodInfo:function(){var e=this;(0,n.info)({id:this.id}).then((function(t){e.goods=t.data}))},showBuy:function(){this.isLogin?this.$refs.popup.open():uni.reLaunch({url:"/pages/login/index"})},submit:function(){var e=this;this.params.good_id=this.id;var t=new r.default,a=t.test({buy_account:[{rule:"isRequired",value:this.params.buy_account,message:this.$t("trades.valid_quatity")},{rule:"isNumber",value:this.params.buy_account,message:this.$t("trades.valid_quatity2")}],paypwd:[{rule:"isRequired",value:this.params.paypwd,message:this.$t("trades.valid_paypwd")}]});a?uni.showToast({title:a.errMsg,duration:3e3,icon:"none"}):(0,i.good_dobuy)(this.params).then((function(t){1==t.code&&(uni.showToast({title:t.msg,duration:2e3}),e.$refs.popup.close())}))}}};t.default=s},6796:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page .page_bg[data-v-51aef1ed]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.page .content[data-v-51aef1ed]{padding-bottom:%?280?%}.page .content .banner[data-v-51aef1ed]{width:100%}.page .content .info[data-v-51aef1ed]{margin:%?60?% %?20?% 0;font-size:%?30?%;padding:%?30?% %?20?%;border-radius:%?14?%}.page .content .info .title[data-v-51aef1ed]{font-size:%?34?%;margin-bottom:%?30?%}.page .content .info .item[data-v-51aef1ed]{margin-bottom:%?20?%}.page .content .info .progress[data-v-51aef1ed]{width:100%;height:%?18?%;margin-top:%?20?%;border:1px solid transparent;border-radius:%?20?%}.page .content .info .progress .percent[data-v-51aef1ed]{width:0;height:100%;border-radius:%?20?%;transition:all 1s}.page .content .logbtn[data-v-51aef1ed]{position:fixed;bottom:%?120?%;left:3%;border-radius:%?14?%;font-size:%?30?%;width:94%;height:%?90?%;z-index:10}.page .area[data-v-51aef1ed]{width:%?600?%;overflow:hidden;padding:%?20?%;border-radius:%?20?%;box-sizing:border-box}.page .area .title[data-v-51aef1ed]{font-size:%?32?%;font-weight:700;padding:%?10?% 0;margin-bottom:%?30?%}.page .area .param[data-v-51aef1ed]{margin-bottom:%?50?%}.page .area .param .label[data-v-51aef1ed]{margin-bottom:%?10?%}.page .area .param .input[data-v-51aef1ed]{width:100%;height:%?100?%;border-radius:%?10?%;border:1px solid #eee;margin-bottom:%?20?%;padding:0 %?30?%;box-sizing:border-box}.page .area .confirm[data-v-51aef1ed]{border-radius:%?14?%;font-size:%?30?%;width:%?300?%;height:%?70?%;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),e.exports=t},"851e":function(e,t,a){"use strict";a.r(t);var o=a("566c"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},a623:function(e,t,a){"use strict";var o=a("23e7"),n=a("b727").every,i=a("a640"),r=a("ae40"),s=i("every"),u=r("every");o({target:"Array",proto:!0,forced:!s||!u},{every:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},bb6b:function(e,t,a){"use strict";var o=a("c2a25"),n=a.n(o);n.a},c2a25:function(e,t,a){var o=a("6796");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("755addd9",o,!0,{sourceMap:!1,shadowMode:!1})},cdf4:function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.setpaypass=t.gameorder=t.game_dobuy=t.good_dobuy=t.balancelog=t.goodorder=t.transfer=t.index=void 0;var n=o(a("5530")),i=a("ddff"),r=function(e){return(0,i.apiResquest)({url:"/mine/index",method:"POST",query:(0,n.default)({},e)})};t.index=r;var s=function(e){return(0,i.apiResquest)({url:"/mine/transfer",method:"POST",query:(0,n.default)({},e)})};t.transfer=s;var u=function(e){return(0,i.apiResquest)({url:"/mine/goodorder",method:"POST",query:(0,n.default)({},e)})};t.goodorder=u;var d=function(e){return(0,i.apiResquest)({url:"/mine/balancelog",method:"POST",query:(0,n.default)({},e)})};t.balancelog=d;var c=function(e){return(0,i.apiResquest)({url:"/mine/good_dobuy",method:"POST",query:(0,n.default)({},e)})};t.good_dobuy=c;var l=function(e){return(0,i.apiResquest)({url:"/mine/game_dobuy",method:"POST",query:(0,n.default)({},e)})};t.game_dobuy=l;var f=function(e){return(0,i.apiResquest)({url:"/mine/gameorder",method:"POST",query:(0,n.default)({},e)})};t.gameorder=f;var p=function(e){return(0,i.apiResquest)({url:"/mine/setpaypass",method:"POST",query:(0,n.default)({},e)})};t.setpaypass=p},ed62:function(e,t,a){"use strict";function o(){}a("a623"),a("fb6a"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,o.prototype.rules={isMobile:function(e){var t=/^1[3,4,5,7,8,9][0-9]\d{8}$/;return t.test(e)},isNumber:function(e){var t=/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/;return t.test(e)},isRequired:function(e){var t=e.replace(/(^\s*)|(\s*$)/g,"");return""!==t},minLength:function(e,t){var a=e.length;return a>=t},maxLength:function(e,t){var a=e.length;return a<=t},isEqual:function(){var e=Array.prototype.slice.call(arguments),t=e.every((function(t){return t===e[0]}));return t}},o.prototype.test=function(e){var t,a=this;for(var o in e){if(e[o])for(var n=0;n<e[o].length;n++){var i=e[o][n].rule,r=e[o][n].value;Array.isArray(r)||(r=new Array(r));var s=a.rules[i].apply(this,r);if(!s){t={errValue:o,errMsg:e[o][n].message};break}}if(t)break}return t}}}]);