(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdrawal-index"],{"08ce":function(t,n,e){"use strict";e.r(n);var o=e("39c7"),i=e("319d");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("718e");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"440bf61a",null,!1,o["a"],c);n["default"]=u.exports},"319d":function(t,n,e){"use strict";e.r(n);var o=e("6462"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"39c7":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.d))]):t._e(),t.showDay?e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.dayText))]):t._e(),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.h))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.hourText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.i))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.minuteText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.secondText))])],1)},a=[]},4565:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-440bf61a]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.uni-countdown__splitor[data-v-440bf61a]{margin:0 2px;font-size:14px;color:#333}.uni-countdown__number[data-v-440bf61a]{border-radius:3px;text-align:center;font-size:14px}',""]),t.exports=n},5521:function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.completed=n.index=void 0;var i=o(e("5530")),a=e("ddff"),c=function(t){return(0,a.apiResquest)({url:"/withdrawal/index",method:"POST",query:(0,i.default)({},t)})};n.index=c;var s=function(t){return(0,a.apiResquest)({url:"/withdrawal/completed",method:"POST",query:(0,i.default)({},t)})};n.completed=s},"5d4a":function(t,n,e){"use strict";e.r(n);var o=e("7ff3"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},6462:function(t,n,e){"use strict";var o=e("4ea4");e("a9e3"),e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("37dc"),a=o(e("f132")),c=(0,i.initVueI18n)(a.default),s=c.t,u={name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},computed:{dayText:function(){return s("uni-countdown.day")},hourText:function(t){return s("uni-countdown.h")},minuteText:function(t){return s("uni-countdown.m")},secondText:function(t){return s("uni-countdown.s")},timeStyle:function(){var t=this.color,n=this.backgroundColor,e=this.fontSize;return{color:t,backgroundColor:n,fontSize:"".concat(e,"px"),width:"".concat(22*e/14,"px"),lineHeight:"".concat(20*e/14,"px"),borderRadius:"".concat(3*e/14,"px")}},splitorStyle:function(){var t=this.splitorColor,n=this.fontSize,e=this.backgroundColor;return{color:t,fontSize:"".concat(12*n/14,"px"),margin:e?"".concat(4*n/14,"px"):""}}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()},start:{immediate:!0,handler:function(t,n){if(t)this.startData();else{if(!n)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},destroyed:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o,i){return t?t-parseInt((new Date).getTime()/1e3,10):60*n*60*24+60*e*60+60*o+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i},startData:function(){var t=this;if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3)},update:function(){this.startData()},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=u},6825:function(t,n,e){var o=e("71b4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("6e97671b",o,!0,{sourceMap:!1,shadowMode:!1})},"718e":function(t,n,e){"use strict";var o=e("caf8"),i=e.n(o);i.a},"71b4":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page .page_bg[data-v-6810e428]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.page .content[data-v-6810e428]{padding:%?60?% %?30?% %?100?%;margin:%?30?%;border-radius:%?40?%;color:#ddd}.page .content .head .title[data-v-6810e428]{font-size:%?36?%;font-weight:700}.page .content .head .num[data-v-6810e428]{width:100%;font-size:%?70?%;padding:%?40?% 0;border-radius:%?40?%;background-color:#fff;margin:%?20?% 0}.page .content .form[data-v-6810e428]{margin-top:%?40?%}.page .content .form .item[data-v-6810e428]{width:100%;height:%?90?%;background-color:rgba(170,69,69,.1);border-radius:%?90?%;padding:0 %?30?%;margin-top:%?26?%;box-sizing:border-box;overflow:hidden}.page .content .form .item .input[data-v-6810e428]{height:100%;position:relative;color:#333}.page .content .form .item .input .iconfont[data-v-6810e428]{position:absolute;right:%?-30?%;top:0;width:%?80?%;height:100%}.page .content .form .textarea[data-v-6810e428]{height:%?160?%;width:100%;margin-top:%?26?%;background-color:rgba(170,69,69,.1);border-radius:%?20?%;padding:%?20?%;box-sizing:border-box}.page .content .form .btn[data-v-6810e428]{width:100%;height:%?90?%;border-radius:%?90?%;background-color:#669288;color:#fff;font-weight:700;margin-top:%?26?%}.page .content .form .uni-forms-item__content[data-v-6810e428]{border-radius:%?20?%!important;background-color:#fff}.page .content .form .btn[data-v-6810e428]{height:%?70?%;border-radius:%?70?%;margin:%?60?% 0;color:#fff}.page .content .confirm[data-v-6810e428]{height:%?70?%;border-radius:%?70?%;margin-top:%?60?%;color:#fff}.page .pop[data-v-6810e428]{background-color:#fff;border-radius:%?30?% %?30?% 0 0}.page .pop .item[data-v-6810e428]{width:100%;height:%?90?%;border-bottom:1px solid #eee}.page .pop .cancel[data-v-6810e428]{color:#999}',""]),t.exports=n},7533:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}')},"7ff3":function(t,n,e){"use strict";e("99af"),e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("5521"),i={data:function(){return{config:{},info:{},amountPlaceholder:"",curAccount:{},toAccount:0,params:{coin_types:"",account:"",address:"",paypwd:""},countdown:0,basic:{},commission:{},text:[]}},onLoad:function(){this.config=uni.getStorageSync("config"),this.getCountDown(),this.getIndex()},onShow:function(){},methods:{getIndex:function(){var t=this;(0,o.index)({}).then((function(n){t.curAccount=n.data.basic,t.basic=n.data.basic,t.commission=n.data.commission,t.text=n.data.text,t.amountPlaceholder="quota ".concat(t.curAccount.withdraw_min_num,"-").concat(t.curAccount.withdraw_max_num),t.params.address=t.curAccount.withdraw_address,t.params.coin_types=t.curAccount.coin_types}))},inputAmount:function(t){this.params.account=t.detail.value,this.toAccount=Number(this.params.account-this.params.account*this.curAccount.withdraw_sxf).toFixed(2)},changeAccount:function(t){this.curAccount=t,this.amountPlaceholder="quota ".concat(this.curAccount.withdraw_min_num,"-").concat(this.curAccount.withdraw_max_num),this.params.address=this.curAccount.withdraw_address,this.params.coin_types=this.curAccount.coin_types,this.close()},submit:function(){var t=this;this.params.account?isNaN(this.params.account)?uni.showToast({title:this.$t("ruleCheck.number"),duration:2e3,icon:"none"}):this.params.account>Number(this.curAccount.withdraw_max_num)||this.params.account>Number(this.curAccount.account_limit)?uni.showToast({title:this.$t("ruleCheck.max_limit"),duration:2e3,icon:"none"}):this.params.account<Number(this.curAccount.withdraw_min_num)?uni.showToast({title:this.$t("ruleCheck.min_limit"),duration:2e3,icon:"none"}):this.params.account<=0?uni.showToast({title:this.$t("ruleCheck.gt0"),duration:3e3,icon:"none"}):this.params.address?this.params.paypwd?(this.setCountDown(),(0,o.completed)(this.params).then((function(n){uni.showToast({title:t.$t("mine.widthdrawal_succ")}),t.getIndex(),t.params={account:"",paypwd:""}}))):uni.showToast({title:this.$t("common.enter_password"),duration:2e3,icon:"none"}):uni.showToast({title:this.$t("ruleCheck.input_address"),duration:2e3,icon:"none"}):uni.showToast({title:this.$t("ruleCheck.input_account"),duration:2e3,icon:"none"})},getCountDown:function(){var t=uni.getStorageSync("withdrawal_countdown_time");if(t){var n=new Date(t).getTime(),e=(new Date).getTime(),o=n-e;this.countdown=o>0?Math.floor(o/1e3):0}},countdownUp:function(){this.countdown=0},setCountDown:function(){var t=new Date,n=t.getMinutes();t.setMinutes(n+1);var e=t.getFullYear(),o=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),c=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getseconds():t.getSeconds(),u=e+"-"+o+"-"+i+" "+a+":"+c+":"+s;uni.setStorageSync("withdrawal_countdown_time",u),this.getCountDown()},open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()}}};n.default=i},"8e29":function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"}')},caf8:function(t,n,e){var o=e("4565");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("fa8b8c20",o,!0,{sourceMap:!1,shadowMode:!1})},cd73:function(t){t.exports=JSON.parse('{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"}')},de5f:function(t,n,e){"use strict";var o=e("6825"),i=e.n(o);i.a},e48c:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={cusHeader:e("3f2c").default,uniIcons:e("3076").default,uniCountdown:e("08ce").default,uniPopup:e("2396").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("cus-header",{attrs:{title:t.$t("mine.withdraw")}}),e("v-uni-view",{staticClass:"page_bg",style:{backgroundColor:t.config["theme-bg-color"]}},[t.config.homebg?e("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.config.homebg}}):t._e()],1),e("v-uni-view",{staticClass:"content",style:{backgroundColor:t.config["theme-bg-color2"]}},[e("v-uni-view",{staticClass:"head flex-col ai-center"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.curAccount.title))]),t._l(t.text,(function(n,o){return e("v-uni-view",{key:o,staticStyle:{color:"red"}},[t._v(t._s(n))])})),e("v-uni-view",{staticClass:"num flex-center",style:{color:t.config["theme-text-color"],backgroundColor:t.config["theme-bg-color1"]}},[t._v(t._s(t.curAccount.account))]),e("v-uni-view",[e("v-uni-text",[t._v(t._s(t.$t("mine.withdrawal_limit"))+"：")]),e("v-uni-text",{style:{color:t.config["theme-text-color"]}},[t._v(t._s(t.curAccount.account_limit))])],1)],2),e("v-uni-view",{staticClass:"form"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"input flex-row ai-center",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"flex-1",style:{color:t.config["theme-text-color"]}},[t._v(t._s(t.curAccount.title))]),e("v-uni-text",{staticClass:"iconfont flex-center",style:{backgroundColor:t.config["theme-btn-bgcolor"]}},[e("uni-icons",{attrs:{type:"bottom",size:"17",color:t.config["theme-btn-color"]}})],1)],1)],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-input",{staticClass:"input",style:{color:t.config["theme-text-color"]},attrs:{value:t.params.account,type:"number",placeholder:t.amountPlaceholder},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.inputAmount.apply(void 0,arguments)}}})],1),e("v-uni-view",[e("v-uni-text",{staticStyle:{color:"red","font-size":"26rpx","margin-left":"30rpx"}},[t._v(t._s(t.$t("mine.fee")+" "+t.curAccount.withdraw_sxf+", "+t.$t("mine.to_account")+" "+t.toAccount))])],1),e("v-uni-view",{staticClass:"textarea"},[e("v-uni-textarea",{staticClass:"input",style:{color:t.config["theme-text-color"]},attrs:{cols:"30",rows:"10",placeholder:t.$t("mine.text_desc")},model:{value:t.params.address,callback:function(n){t.$set(t.params,"address",n)},expression:"params.address"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-input",{staticClass:"input",style:{color:t.config["theme-text-color"]},attrs:{type:"paypwd",placeholder:t.$t("common.enter_password")},model:{value:t.params.paypwd,callback:function(n){t.$set(t.params,"paypwd",n)},expression:"params.paypwd"}})],1)],1),t.countdown?e("v-uni-view",{staticClass:"flex-center",staticStyle:{"margin-top":"30rpx"}},[e("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(t.$t("mine.resubmit")))]),e("uni-countdown",{attrs:{color:"#D28C31",splitorColor:"#D28C31",fontSize:20,"show-day":!1,"show-hour":!1,"show-min":!1,second:t.countdown},on:{timeup:function(n){arguments[0]=n=t.$handleEvent(n),t.countdownUp.apply(void 0,arguments)}}}),e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[t._v("seconds")])],1):e("v-uni-view",{staticClass:"confirm flex-center",style:{color:t.config["theme-btn-color"],backgroundColor:t.config["theme-btn-bgcolor"]},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.confirm")))])],1),e("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[e("v-uni-view",{staticClass:"pop"},[t._l([t.basic,t.commission],(function(n,o){return e("v-uni-view",{key:o,staticClass:"item flex-center",style:{color:t.curAccount.title==n.title?t.config["theme-text-color2"]:"#333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAccount(n)}}},[t._v(t._s(n.title))])})),e("v-uni-view",{staticClass:"item flex-center cancel",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.cancel")))])],2)],1)],1)},a=[]},f132:function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("cd73")),a=o(e("8e29")),c=o(e("7533")),s={en:i.default,"zh-Hans":a.default,"zh-Hant":c.default};n.default=s},f4d3:function(t,n,e){"use strict";e.r(n);var o=e("e48c"),i=e("5d4a");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("de5f");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"6810e428",null,!1,o["a"],c);n["default"]=u.exports}}]);