(function(e) {
	function n(n) {
		for (var a, s, d = n[0], r = n[1], g = n[2], p = 0, c = []; p < d.length; p++) s = d[p], Object.prototype.hasOwnProperty.call(t, s) && t[s] && c.push(t[s][0]), t[s] = 0;
		for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
		l && l(n);
		while (c.length) c.shift()();
		return o.push.apply(o, g || []), i()
	}

	function i() {
		for (var e, n = 0; n < o.length; n++) {
			for (var i = o[n], a = !0, s = 1; s < i.length; s++) {
				var r = i[s];
				0 !== t[r] && (a = !1)
			}
			a && (o.splice(n--, 1), e = d(d.s = i[0]))
		}
		return e
	}
	var a = {},
		t = {
			index: 0
		},
		o = [];

	function s(e) {
		return d.p + "static/js/" + ({
			"pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156": "pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156",
			"pages-customer-index": "pages-customer-index",
			"pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad": "pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad",
			"pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index": "pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index",
			"pages-bill-index~pages-financial-index~pages-profit-index": "pages-bill-index~pages-financial-index~pages-profit-index",
			"pages-bill-index": "pages-bill-index",
			"pages-financial-index": "pages-financial-index",
			"pages-profit-index": "pages-profit-index",
			"pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index": "pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index",
			"pages-index-index": "pages-index-index",
			"pages-desposit-index": "pages-desposit-index",
			"pages-tradeDetail-index": "pages-tradeDetail-index",
			"pages-withdrawal-index": "pages-withdrawal-index",
			"pages-notification-detail": "pages-notification-detail",
			"pages-notification-index": "pages-notification-index",
			"pages-setPaypwd-index": "pages-setPaypwd-index",
			"pages-share-index": "pages-share-index",
			"pages-team-index": "pages-team-index",
			"pages-transfer-index": "pages-transfer-index",
			"pages-login-index~pages-register-index": "pages-login-index~pages-register-index",
			"pages-register-index": "pages-register-index",
			"pages-login-index": "pages-login-index",
			"pages-other-index": "pages-other-index"
		} [e] || e) + "." + {
			"pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156": "e3618737",
			"pages-customer-index": "27965980",
			"pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad": "09749193",
			"pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index": "ec0a70b8",
			"pages-bill-index~pages-financial-index~pages-profit-index": "76acdc2c",
			"pages-bill-index": "32838541",
			"pages-financial-index": "002a69ac",
			"pages-profit-index": "80801edd",
			"pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index": "5fc36082",
			"pages-index-index": "e79f63f3",
			"pages-desposit-index": "7fa27a91",
			"pages-tradeDetail-index": "12329522",
			"pages-withdrawal-index": "e09c156d",
			"pages-notification-detail": "1ba40c00",
			"pages-notification-index": "cf9df0a1",
			"pages-setPaypwd-index": "d300b44d",
			"pages-share-index": "05e1753c",
			"pages-team-index": "b1027ed0",
			"pages-transfer-index": "916e3571",
			"pages-login-index~pages-register-index": "2e0c0fff",
			"pages-register-index": "8766a8ce",
			"pages-login-index": "e6d47c06",
			"pages-other-index": "d40e103d"
		} [e] + ".js"
	}

	function d(n) {
		if (a[n]) return a[n].exports;
		var i = a[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(i.exports, i, i.exports, d), i.l = !0, i.exports
	}
	d.e = function(e) {
		var n = [],
			i = t[e];
		if (0 !== i)
			if (i) n.push(i[2]);
			else {
				var a = new Promise((function(n, a) {
					i = t[e] = [n, a]
				}));
				n.push(i[2] = a);
				var o, r = document.createElement("script");
				r.charset = "utf-8", r.timeout = 120, d.nc && r.setAttribute("nonce", d.nc), r.src = s(e);
				var g = new Error;
				o = function(n) {
					r.onerror = r.onload = null, clearTimeout(p);
					var i = t[e];
					if (0 !== i) {
						if (i) {
							var a = n && ("load" === n.type ? "missing" : n.type),
								o = n && n.target && n.target.src;
							g.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")", g.name = "ChunkLoadError", g.type = a, g.request = o, i[1](g)
						}
						t[e] = void 0
					}
				};
				var p = setTimeout((function() {
					o({
						type: "timeout",
						target: r
					})
				}), 12e4);
				r.onerror = r.onload = o, document.head.appendChild(r)
			} return Promise.all(n)
	}, d.m = e, d.c = a, d.d = function(e, n, i) {
		d.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: i
		})
	}, d.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, d.t = function(e, n) {
		if (1 & n && (e = d(e)), 8 & n) return e;
		if (4 & n && "object" === typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (d.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: e
		}), 2 & n && "string" != typeof e)
			for (var a in e) d.d(i, a, function(n) {
				return e[n]
			}.bind(null, a));
		return i
	}, d.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return d.d(n, "a", n), n
	}, d.o = function(e, n) {
		return Object.prototype.hasOwnProperty.call(e, n)
	}, d.p = "/", d.oe = function(e) {
		throw console.error(e), e
	};
	var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
		g = r.push.bind(r);
	r.push = n, r = r.slice();
	for (var p = 0; p < r.length; p++) n(r[p]);
	var l = g;
	o.push([0, "chunk-vendors"]), i()
})({
	0: function(e, n, i) {
		e.exports = i("bb28")
	},
	"447b": function(e, n, i) {
		"use strict";
		var a = i("d1c5"),
			t = i.n(a);
		t.a
	},
	5646: function(e, n, i) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.default = void 0;
		var a = "https://usdt.creator-studio2.online",
			t = "en-us",
			o = {
				BASE_URL: a,
				DEFAULT_LANG: t
			};
		n.default = o
	},
	"64ee": function(e, n, i) {
		"use strict";
		var a;
		i.d(n, "b", (function() {
			return t
		})), i.d(n, "c", (function() {
			return o
		})), i.d(n, "a", (function() {
			return a
		}));
		var t = function() {
				var e = this,
					n = e.$createElement,
					i = e._self._c || n;
				return i("App", {
					attrs: {
						keepAliveInclude: e.keepAliveInclude
					}
				})
			},
			o = []
	},
	"7d94": function(e, n, i) {
		var a = i("24fb");
		n = a(!1), n.push([e.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*每个页面公共css */@font-face{font-family:iconfont;\n  /* Project id 3279054 */src:url(https://at.alicdn.com/t/font_3279054_xi3fvaefrp.woff2?t=1649039404929) format("woff2"),url(https://at.alicdn.com/t/font_3279054_xi3fvaefrp.woff?t=1649039404929) format("woff"),url(https://at.alicdn.com/t/font_3279054_xi3fvaefrp.ttf?t=1649039404929) format("truetype")}.iconfont{font-family:iconfont;font-size:%?36?%}uni-page-body{font-size:%?28?%}.flex-center{display:flex;flex-direction:row;align-items:center;justify-content:center}.flex-center-col{display:flex;flex-direction:column;align-items:center;justify-content:center}.flex-row{display:flex;flex-direction:row}.flex-col{display:flex;flex-direction:column}.flex-1{flex:1}.flex-wrap{flex-wrap:wrap}.jc-start{justify-content:flex-start}.jc-end{justify-content:flex-end}.jc-center{justify-content:center}.jc-around{justify-content:space-around}.jc-between{justify-content:space-between}.ai-start{align-items:flex-start}.ai-end{align-items:flex-end}.ai-center{align-items:center}.plr30{padding:0 %?30?%}.ml20{margin-left:%?20?%}.mr20{margin-right:%?20?%}.ml10{margin-left:%?10?%}.mr10{margin-right:%?10?%}.cursor:hover{cursor:pointer}\n/* 文字溢出 */.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}', ""]), e.exports = n
	},
	"8d21": function(e, n, i) {
		"use strict";
		i.r(n);
		var a = i("64ee"),
			t = i("ff3b");
		for (var o in t) "default" !== o && function(e) {
			i.d(n, e, (function() {
				return t[e]
			}))
		}(o);
		i("447b");
		var s, d = i("f0c5"),
			r = Object(d["a"])(t["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], s);
		n["default"] = r.exports
	},
	"9da6": function(e, n, i) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.default = void 0;
		var a = {
			onLaunch: function() {
				console.log("App Launch");
				uni.getSystemInfoSync()
			},
			onShow: function() {
				console.log("App Show")
			},
			onHide: function() {
				console.log("App Hide")
			}
		};
		n.default = a
	},
	bb28: function(e, n, i) {
		"use strict";
		var a = i("4ea4");
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.default = void 0;
		var t = a(i("5530"));
		i("e260"), i("e6cf"), i("cca6"), i("a79d"), i("c71e"), i("1c31");
		var o = a(i("8d21")),
			s = a(i("a925")),
			d = a(i("5646")),
			r = a(i("e143"));
		r.default.use(s.default);
		var g = new s.default({
			locale: d.default.DEFAULT_LANG,
			messages: {}
		});
		r.default.prototype.$global = d.default, r.default.config.productionTip = !1, o.default.mpType = "app";
		var p = new r.default((0, t.default)({
			i18n: g
		}, o.default));
		p.$mount();
		var l = p;
		n.default = l
	},
	c71e: function(e, n, i) {
		"use strict";
		(function(e) {
			var n = i("4ea4");
			i("13d5"), i("d3b7"), i("ac1f"), i("5319"), i("ddb0");
			var a = n(i("e143")),
				t = {
					keys: function() {
						return []
					}
				};
			e["____C62EA55____"] = !0, delete e["____C62EA55____"], e.__uniConfig = {
					globalStyle: {
						navigationStyle: "custom",
						navigationBarTextStyle: "black",
						navigationBarTitleText: "TRX2.0",
						navigationBarBackgroundColor: "#F8F8F8",
						backgroundColor: "#F8F8F8"
					}
				}, e.__uniConfig.compilerVersion = "3.4.7", e.__uniConfig.router = {
					mode: "hash",
					base: "/"
				}, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
					loading: "AsyncLoading",
					error: "AsyncError",
					delay: 200,
					timeout: 6e4
				}, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
					request: 6e4,
					connectSocket: 6e4,
					uploadFile: 6e4,
					downloadFile: 6e4
				}, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0, e.__uniConfig.locales = t.keys()
				.reduce((function(e, n) {
					var i = n.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
						a = t(n);
					return Object.assign(e[i] || (e[i] = {}), a.common || a), e
				}), {}), e.__uniConfig.nvue = {
					"flex-direction": "column"
				}, e.__uniConfig.__webpack_chunk_load__ = i.e, a.default.component("pages-index-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index"), i.e("pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index"), i.e("pages-index-index")])
							.then(function() {
								return e(i("57b2"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-register-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index"), i.e("pages-login-index~pages-register-index"), i.e("pages-register-index")])
							.then(function() {
								return e(i("90a5"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-login-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-login-index~pages-register-index"), i.e("pages-login-index")])
							.then(function() {
								return e(i("1496"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-customer-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-customer-index")])
							.then(function() {
								return e(i("edcd"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-desposit-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-desposit-index")])
							.then(function() {
								return e(i("648b"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-notification-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-notification-index")])
							.then(function() {
								return e(i("ea2d"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-notification-detail", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-notification-detail")])
							.then(function() {
								return e(i("3572"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-profit-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index"), i.e("pages-bill-index~pages-financial-index~pages-profit-index"), i.e("pages-profit-index")])
							.then(function() {
								return e(i("50b0"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-financial-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index"), i.e("pages-bill-index~pages-financial-index~pages-profit-index"), i.e("pages-financial-index")])
							.then(function() {
								return e(i("6c6a"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-bill-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-bill-index~pages-financial-index~pages-index-index~pages-profit-index"), i.e("pages-bill-index~pages-financial-index~pages-profit-index"), i.e("pages-bill-index")])
							.then(function() {
								return e(i("14b1"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-share-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-share-index")])
							.then(function() {
								return e(i("1327"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-team-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-team-index")])
							.then(function() {
								return e(i("9abe"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-transfer-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-transfer-index")])
							.then(function() {
								return e(i("b2e4"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-withdrawal-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index"), i.e("pages-withdrawal-index")])
							.then(function() {
								return e(i("f4d3"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-tradeDetail-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-index-index~pages-register-index~pages-tradeDetail-index~pages-withdrawal-index"), i.e("pages-tradeDetail-index")])
							.then(function() {
								return e(i("2c28"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-setPaypwd-index", (function(e) {
					var n = {
						component: Promise.all([i.e("pages-bill-index~pages-desposit-index~pages-financial-index~pages-index-index~pages-login-index~page~1b9d10ad"), i.e("pages-bill-index~pages-customer-index~pages-desposit-index~pages-financial-index~pages-index-index~p~ba94c156"), i.e("pages-setPaypwd-index")])
							.then(function() {
								return e(i("d499"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), a.default.component("pages-other-index", (function(e) {
					var n = {
						component: i.e("pages-other-index")
							.then(function() {
								return e(i("98d7"))
							}.bind(null, i))
							.catch(i.oe),
						delay: __uniConfig["async"].delay,
						timeout: __uniConfig["async"].timeout
					};
					return __uniConfig["async"]["loading"] && (n.loading = {
						name: "SystemAsyncLoading",
						render: function(e) {
							return e(__uniConfig["async"]["loading"])
						}
					}), __uniConfig["async"]["error"] && (n.error = {
						name: "SystemAsyncError",
						render: function(e) {
							return e(__uniConfig["async"]["error"])
						}
					}), n
				})), e.__uniRoutes = [{
					path: "/",
					alias: "/pages/index/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({
									isQuit: !0,
									isEntry: !0
								}, __uniConfig.globalStyle, {})
							}, [e("pages-index-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						id: 1,
						name: "pages-index-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/index/index",
						isQuit: !0,
						isEntry: !0,
						windowTop: 0
					}
				}, {
					path: "/pages/register/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-register-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-register-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/register/index",
						windowTop: 0
					}
				}, {
					path: "/pages/login/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-login-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-login-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/login/index",
						windowTop: 0
					}
				}, {
					path: "/pages/customer/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-customer-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-customer-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/customer/index",
						windowTop: 0
					}
				}, {
					path: "/pages/desposit/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {
									enablePullDownRefresh: !0
								})
							}, [e("pages-desposit-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-desposit-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/desposit/index",
						windowTop: 0
					}
				}, {
					path: "/pages/notification/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-notification-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-notification-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/notification/index",
						windowTop: 0
					}
				}, {
					path: "/pages/notification/detail",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-notification-detail", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-notification-detail",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/notification/detail",
						windowTop: 0
					}
				}, {
					path: "/pages/profit/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-profit-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-profit-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/profit/index",
						windowTop: 0
					}
				}, {
					path: "/pages/financial/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-financial-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-financial-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/financial/index",
						windowTop: 0
					}
				}, {
					path: "/pages/bill/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-bill-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-bill-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/bill/index",
						windowTop: 0
					}
				}, {
					path: "/pages/share/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-share-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-share-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/share/index",
						windowTop: 0
					}
				}, {
					path: "/pages/team/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-team-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-team-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/team/index",
						windowTop: 0
					}
				}, {
					path: "/pages/transfer/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-transfer-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-transfer-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/transfer/index",
						windowTop: 0
					}
				}, {
					path: "/pages/withdrawal/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-withdrawal-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-withdrawal-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/withdrawal/index",
						windowTop: 0
					}
				}, {
					path: "/pages/tradeDetail/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-tradeDetail-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-tradeDetail-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/tradeDetail/index",
						windowTop: 0
					}
				}, {
					path: "/pages/setPaypwd/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-setPaypwd-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-setPaypwd-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/setPaypwd/index",
						windowTop: 0
					}
				}, {
					path: "/pages/other/index",
					component: {
						render: function(e) {
							return e("Page", {
								props: Object.assign({}, __uniConfig.globalStyle, {})
							}, [e("pages-other-index", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "pages-other-index",
						isNVue: !1,
						maxWidth: 0,
						pagePath: "pages/other/index",
						windowTop: 0
					}
				}, {
					path: "/preview-image",
					component: {
						render: function(e) {
							return e("Page", {
								props: {
									navigationStyle: "custom"
								}
							}, [e("system-preview-image", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "preview-image",
						pagePath: "/preview-image"
					}
				}, {
					path: "/choose-location",
					component: {
						render: function(e) {
							return e("Page", {
								props: {
									navigationStyle: "custom"
								}
							}, [e("system-choose-location", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "choose-location",
						pagePath: "/choose-location"
					}
				}, {
					path: "/open-location",
					component: {
						render: function(e) {
							return e("Page", {
								props: {
									navigationStyle: "custom"
								}
							}, [e("system-open-location", {
								slot: "page"
							})])
						}
					},
					meta: {
						name: "open-location",
						pagePath: "/open-location"
					}
				}], e.UniApp && new e.UniApp
		})
		.call(this, i("c8ba"))
	},
	d1c5: function(e, n, i) {
		var a = i("7d94");
		"string" === typeof a && (a = [
			[e.i, a, ""]
		]), a.locals && (e.exports = a.locals);
		var t = i("4f06")
			.default;
		t("c2e167d6", a, !0, {
			sourceMap: !1,
			shadowMode: !1
		})
	},
	ff3b: function(e, n, i) {
		"use strict";
		i.r(n);
		var a = i("9da6"),
			t = i.n(a);
		for (var o in a) "default" !== o && function(e) {
			i.d(n, e, (function() {
				return a[e]
			}))
		}(o);
		n["default"] = t.a
	}
});