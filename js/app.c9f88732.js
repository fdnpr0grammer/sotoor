(function(t){function e(e){for(var r,i,l=e[0],c=e[1],s=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sotoor/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],i={name:"App"},l=i,c=n("2877"),s=Object(c["a"])(l,a,o,!1,null,null,null),u=s.exports,d=n("9483");Object(d["a"])("".concat("/sotoor/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){window.location.reload(),console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f"),p=(n("99af"),n("b0c0"),n("d4ec")),g=n("bee2"),h=function(){function t(e){Object(p["a"])(this,t),this.path=e,this.name=null,this.component=void 0}return Object(g["a"])(t,[{key:"hasName",value:function(t){return this.name=t,this}},{key:"forComponent",value:function(t){return this.component=t,this}},{key:"withOptions",value:function(t){return t?(Object.assign(this,t),this):this}},{key:"withHooks",value:function(t){return t?(Object.assign(this,t),this):this}},{key:"hasChildren",value:function(t){return this.children=t,this}}],[{key:"withPath",value:function(e){return new t(e)}}]),t}(),v="fa",m=h.withPath("/").withHooks({beforeEnter:function(t,e,n){n("/".concat(v,"/dogs").concat(t.fullPath))}}),y=(n("caad"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("a925")),b={app_title:"Dr. Sotoor",bird:"Bird | Birds",parrot:"Parrot | Parrots",dog:"Dog | Dogs",cat:"Cat | Cats",loading_track:"Loading track",soothe_your_dog:"Sooth your dog",track_number:"Track #{number}"},w={strings:b},_={app_title:"دکتر سُتور",bird:"پرنده | پرنده",parrot:"طوطی | طوطی",dog:"سگ | سگ",cat:"گربه | گربه",loading_track:"بارگذاری ترک",soothe_your_dog:"سگتو آروم کن",track_number:"ترک شماره {number}"},k={strings:_};r["a"].use(y["a"]);var x=new y["a"]({locale:"fa",messages:{fa:k,en:w}}),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("menu-bar"),n("v-container",{staticStyle:{"margin-top":"64px"},attrs:{fluid:""}},[n("router-view")],1)],1)},O=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"primary--text",attrs:{app:"",color:"white",light:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v(t._s(t.$t("strings.app_title")))]),n("v-spacer")],1)},j=[],V={data:function(){return{drawer:!1}},name:"menu-bar"},A=V,$=n("6544"),S=n.n($),E=n("40dc"),N=n("5bc1"),T=n("2fa4"),B=n("2a7f"),D=Object(c["a"])(A,C,j,!1,null,null,null),L=D.exports;S()(D,{VAppBar:E["a"],VAppBarNavIcon:N["a"],VSpacer:T["a"],VToolbarTitle:B["a"]});var M={components:{MenuBar:L},mounted:function(){this.$vuetify.rtl="fa"===this.$i18n.locale},name:"master"},F=M,H=n("7496"),I=n("a523"),J=Object(c["a"])(F,P,O,!1,null,null,null),U=J.exports;S()(J,{VApp:H["a"],VContainer:I["a"]});var q="fa,en".split(","),z="fa",G=h.withPath("/:lang").withHooks({beforeEnter:function(t,e,n){if(K(t.params.lang))x.locale=t.params.lang,n();else{x.locale=z;var r=t.fullPath.replace(t.params.lang,z);n("".concat(r))}}}).forComponent(U);function K(t){return q.includes(t)}var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"my-6",staticStyle:{"max-width":"1000px"},attrs:{fluid:""}},[r("h2",{staticClass:"text-h5 grey--text text--darken-2"},[r("v-icon",{attrs:{large:""}},[t._v("mdi-dog")]),t._v(" "+t._s(t.$t("strings.soothe_your_dog")))],1),r("v-divider",{staticClass:"mb-5"}),r("v-card",{attrs:{"max-width":t.$vuetify.breakpoint.mdAndDown?null:300}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:n("84d9"),gradient:"to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)",height:"200px"}},[r("div",{staticClass:"d-flex align-center pa-3"},[r("v-card-title",{staticClass:"pa-0"},[t._v(t._s(t.$t("strings.track_number",{number:1})))]),r("v-btn",{class:{"ml-auto":!t.$vuetify.rtl,"mr-auto":t.$vuetify.rtl},attrs:{color:"white",icon:""},on:{click:function(e){return t.togglePlay(1)}}},[1!==t.currentlyPlaying?r("v-icon",[t._v("mdi-play-circle-outline")]):r("v-icon",[t._v("mdi-stop-circle-outline")])],1)],1)]),1===t.loading?r("v-overlay",{attrs:{opacity:".8",absolute:""}},[r("div",{staticClass:"d-flex flex-column align-center"},[r("v-progress-circular",{attrs:{size:"25",width:"4",indeterminate:"",color:"primary"}}),r("span",{staticClass:"my-2"},[t._v(t._s(t.$t("strings.loading_track")))]),r("v-btn",{attrs:{icon:"",small:""},on:{click:t.cancelLoading}},[r("v-icon",[t._v("mdi-close-circle-outline")])],1)],1)]):t._e()],1)],1)},R=[],W={data:function(){return{currentlyPlaying:null,loading:null,currentlyPlayingAudio:null}},methods:{cancelLoading:function(){this.loading=null,this.currentlyPlaying=null,this.currentlyPlayingAudio&&(this.currentlyPlayingAudio.pause(),this.currentlyPlayingAudio=null)},togglePlay:function(t){var e=this;if(t!==this.currentlyPlaying){var r=new Audio(n("d888")("./".concat(t,".mp3")));this.loading=t,r.onplay=function(){e.currentlyPlaying=t,e.currentlyPlayingAudio=r,e.loading=null},r.onended=function(){e.cancelLoading()},r.play()}else this.cancelLoading()}},name:"dogs-index"},X=W,Y=n("8336"),Z=n("b0af"),tt=n("99d9"),et=n("ce7e"),nt=n("132d"),rt=n("adda"),at=n("a797"),ot=n("490a"),it=Object(c["a"])(X,Q,R,!1,null,null,null),lt=it.exports;S()(it,{VBtn:Y["a"],VCard:Z["a"],VCardTitle:tt["a"],VContainer:I["a"],VDivider:et["a"],VIcon:nt["a"],VImg:rt["a"],VOverlay:at["a"],VProgressCircular:ot["a"]});var ct=h.withPath("dogs").hasName("dogs.index").forComponent(lt);r["a"].use(f["a"]);var st=[m,G.hasChildren([ct])],ut=new f["a"]({routes:st}),dt=ut,ft=n("2f62");r["a"].use(ft["a"]);var pt=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),gt=n("f309");r["a"].use(gt["a"]);var ht=new gt["a"]({rtl:"fa"===x.locale,theme:{themes:{light:{primary:"#9c27b0",secondary:"#009688"},dark:{primary:"#f59342"}}}});r["a"].config.productionTip=!1,new r["a"]({router:dt,store:pt,vuetify:ht,i18n:x,render:function(t){return t(u)}}).$mount("#app")},"84d9":function(t,e,n){t.exports=n.p+"img/1.0d8bb39e.jpg"},d888:function(t,e,n){var r={"./1.mp3":"ee05"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="d888"},ee05:function(t,e,n){t.exports=n.p+"media/1.af3a090f.mp3"}});
//# sourceMappingURL=app.c9f88732.js.map