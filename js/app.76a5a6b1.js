(function(t){function e(e){for(var r,o,l=e[0],s=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],o={name:"App"},l=o,s=n("2877"),c=Object(s["a"])(l,a,i,!1,null,null,null),u=c.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f"),v=(n("99af"),n("b0c0"),n("d4ec")),p=n("bee2"),g=function(){function t(e){Object(v["a"])(this,t),this.path=e,this.name=null,this.component=void 0}return Object(p["a"])(t,[{key:"hasName",value:function(t){return this.name=t,this}},{key:"forComponent",value:function(t){return this.component=t,this}},{key:"withOptions",value:function(t){return t?(Object.assign(this,t),this):this}},{key:"withHooks",value:function(t){return t?(Object.assign(this,t),this):this}},{key:"hasChildren",value:function(t){return this.children=t,this}}],[{key:"withPath",value:function(e){return new t(e)}}]),t}(),m="fa",h=g.withPath("/").withHooks({beforeEnter:function(t,e,n){n("/".concat(m,"/dogs").concat(t.fullPath))}}),y=(n("caad"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("a925")),b={app_title:"Dr. Sotoor",bird:"Bird | Birds",parrot:"Parrot | Parrots",dog:"Dog | Dogs",cat:"Cat | Cats",loading_track:"Loading track",soothe_your_dog:"Sooth your dog",track_number:"Track #{number}"},_={strings:b},w={app_title:"دکتر سُتور",bird:"پرنده | پرنده",parrot:"طوطی | طوطی",dog:"سگ | سگ",cat:"گربه | گربه",loading_track:"بارگذاری ترک",soothe_your_dog:"سگتو آروم کن",track_number:"ترک شماره {number}"},k={strings:w};r["a"].use(y["a"]);var x=new y["a"]({locale:"fa",messages:{fa:k,en:_}}),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("menu-bar"),n("router-view")],1)},O=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{staticClass:"primary--text",attrs:{color:"white",light:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v(t._s(t.$t("strings.app_title")))]),n("v-spacer")],1),n("v-navigation-drawer",{style:{"width: 100%":t.$vuetify.breakpoint.smAndDown},attrs:{right:"fa"===t.$i18n.locale,left:"fa"!==t.$i18n.locale,absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"primary--text"},[t._v(" "+t._s(t.$t("strings.app_title"))+" ")])],1),t.$vuetify.breakpoint.smAndDown?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1):t._e()],1),n("v-divider"),n("v-list",{staticClass:"secondary--text",attrs:{nav:"",dense:""}},[n("v-list-item",{attrs:{to:{name:"dogs.index"}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-dog")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$tc("strings.dog",2)))])],1)],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-bird")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$tc("strings.bird",2)))])],1)],1)],1)],1)],1)},V=[],j={data:function(){return{drawer:!1}},name:"menu-bar"},$=j,A=n("6544"),L=n.n(A),S=n("40dc"),D=n("5bc1"),I=n("8336"),E=n("ce7e"),N=n("132d"),T=n("8860"),B=n("da13"),M=n("1800"),F=n("5d23"),H=n("34c3"),J=n("f774"),U=n("2fa4"),q=n("2a7f"),z=Object(s["a"])($,C,V,!1,null,null,null),G=z.exports;L()(z,{VAppBar:S["a"],VAppBarNavIcon:D["a"],VBtn:I["a"],VDivider:E["a"],VIcon:N["a"],VList:T["a"],VListItem:B["a"],VListItemAction:M["a"],VListItemContent:F["a"],VListItemIcon:H["a"],VListItemTitle:F["b"],VNavigationDrawer:J["a"],VSpacer:U["a"],VToolbarTitle:q["a"]});var K={components:{MenuBar:G},mounted:function(){this.$vuetify.rtl="fa"===this.$i18n.locale},name:"master"},Q=K,R=n("7496"),W=Object(s["a"])(Q,P,O,!1,null,null,null),X=W.exports;L()(W,{VApp:R["a"]});var Y="fa,en".split(","),Z="fa",tt=g.withPath("/:lang").withHooks({beforeEnter:function(t,e,n){if(et(t.params.lang))x.locale=t.params.lang,n();else{x.locale=Z;var r=t.fullPath.replace(t.params.lang,Z);n("".concat(r))}}}).forComponent(X);function et(t){return Y.includes(t)}var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"my-6",staticStyle:{"max-width":"1000px"},attrs:{fluid:""}},[r("h2",{staticClass:"text-h5 grey--text text--darken-2"},[r("v-icon",{attrs:{large:""}},[t._v("mdi-dog")]),t._v(" "+t._s(t.$t("strings.soothe_your_dog")))],1),r("v-divider",{staticClass:"mb-5"}),r("v-card",{attrs:{"max-width":"300"}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:n("84d9"),gradient:"to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)",height:"200px"}},[r("div",{staticClass:"d-flex align-center pa-3"},[r("v-card-title",{staticClass:"pa-0"},[t._v(t._s(t.$t("strings.track_number",{number:1})))]),r("v-btn",{class:{"ml-auto":!t.$vuetify.rtl,"mr-auto":t.$vuetify.rtl},attrs:{color:"white",icon:""},on:{click:function(e){return t.togglePlay(1)}}},[1!==t.currentlyPlaying?r("v-icon",[t._v("mdi-play-circle-outline")]):r("v-icon",[t._v("mdi-stop-circle-outline")])],1)],1)]),1===t.loading?r("v-overlay",{attrs:{opacity:".8",absolute:""}},[r("div",{staticClass:"d-flex flex-column align-center"},[r("v-progress-circular",{attrs:{size:"25",width:"4",indeterminate:"",color:"primary"}}),r("span",{staticClass:"my-2"},[t._v(t._s(t.$t("strings.loading_track")))]),r("v-btn",{attrs:{icon:"",small:""},on:{click:t.cancelLoading}},[r("v-icon",[t._v("mdi-close-circle-outline")])],1)],1)]):t._e()],1)],1)},rt=[],at={data:function(){return{currentlyPlaying:null,loading:null,currentlyPlayingAudio:null}},methods:{cancelLoading:function(){this.loading=null,this.currentlyPlaying=null,this.currentlyPlayingAudio&&(this.currentlyPlayingAudio.pause(),this.currentlyPlayingAudio=null)},togglePlay:function(t){var e=this;if(t!==this.currentlyPlaying){var r=new Audio(n("d888")("./".concat(t,".mp3")));this.loading=t,r.onplay=function(){e.currentlyPlaying=t,e.currentlyPlayingAudio=r,e.loading=null},r.play()}else this.cancelLoading()}},name:"dogs-index"},it=at,ot=n("b0af"),lt=n("99d9"),st=n("a523"),ct=n("adda"),ut=n("a797"),dt=n("490a"),ft=Object(s["a"])(it,nt,rt,!1,null,null,null),vt=ft.exports;L()(ft,{VBtn:I["a"],VCard:ot["a"],VCardTitle:lt["a"],VContainer:st["a"],VDivider:E["a"],VIcon:N["a"],VImg:ct["a"],VOverlay:ut["a"],VProgressCircular:dt["a"]});var pt=g.withPath("dogs").hasName("dogs.index").forComponent(vt);r["a"].use(f["a"]);var gt=[h,tt.hasChildren([pt])],mt=new f["a"]({routes:gt}),ht=mt,yt=n("2f62");r["a"].use(yt["a"]);var bt=new yt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_t=n("f309");r["a"].use(_t["a"]);var wt=new _t["a"]({rtl:"fa"===x.locale,theme:{themes:{light:{primary:"#9c27b0",secondary:"#009688"},dark:{primary:"#f59342"}}}});r["a"].config.productionTip=!1,new r["a"]({router:ht,store:bt,vuetify:wt,i18n:x,render:function(t){return t(u)}}).$mount("#app")},"84d9":function(t,e,n){t.exports=n.p+"img/1.0d8bb39e.jpg"},d888:function(t,e,n){var r={"./1.mp3":"ee05"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="d888"},ee05:function(t,e,n){t.exports=n.p+"media/1.af3a090f.mp3"}});
//# sourceMappingURL=app.76a5a6b1.js.map