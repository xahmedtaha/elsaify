(function(){var e={1993:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=1993,e.exports=t},2061:function(e,t,o){"use strict";var n=o(9963),r=o(6252);function a(e,t,o,a,i,s){const u=(0,r.up)("loading-page"),c=(0,r.up)("no-network-page"),l=(0,r.up)("ion-router-outlet"),d=(0,r.up)("ion-app");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n.uT,{name:"fade"},{default:(0,r.w5)((()=>[e.loading?((0,r.wg)(),(0,r.j4)(u,{key:0})):e.networkError?((0,r.wg)(),(0,r.j4)(c,{key:1,onRetry:e.reload},null,8,["onRetry"])):((0,r.wg)(),(0,r.j4)(l,{key:2}))])),_:1})])),_:1})}var i=o(9490),s=o(5241),u=o(2119),c=o(9865);const l={class:"container"},d={class:"wrapper"};function f(e,t,o,n,a,i){const s=(0,r.up)("ion-img"),u=(0,r.up)("ion-spinner"),c=(0,r.up)("ion-content"),f=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r._)("div",d,[(0,r.Wm)(s,{src:"/assets/img/amr.png"}),(0,r.Wm)(u,{color:"primary",name:"crescent"})])])])),_:1})])),_:1})}var m={components:{IonContent:i.W2,IonPage:i._i,IonSpinner:i.PQ,IonImg:i.Xz}},p=o(3744);const h=(0,p.Z)(m,[["render",f],["__scopeId","data-v-594d9ab8"]]);var g=h,b=o(2136),w=o(9895),y=o(3577);const v={class:"container"},k={class:"wrapper"},_=(0,r.Uk)("مفيش نت يا غالي"),I=(0,r.Uk)("الكود بتاعك لو احتاجته"),S={id:"draw-container",ref:"target"},O=(0,r.Uk)("شغبط هنا لحد ما النت يرجع");function j(e,t,o,n,a,i){const s=(0,r.up)("ion-icon"),u=(0,r.up)("ion-fab-button"),c=(0,r.up)("ion-text"),l=(0,r.up)("ion-note"),d=(0,r.up)("ion-content"),f=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("div",v,[(0,r._)("div",k,[(0,r.Wm)(u,{color:"danger",size:"small",style:{"margin-top":"20px","--box-shadow":"none"},onClick:t[0]||(t[0]=t=>e.$emit("retry"))},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{icon:n.refresh},null,8,["icon"])])),_:1}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[_])),_:1}),n.userId?((0,r.wg)(),(0,r.j4)(l,{key:0},{default:(0,r.w5)((()=>[I])),_:1})):(0,r.kq)("",!0),n.userId?((0,r.wg)(),(0,r.j4)(c,{key:1,color:"primary",class:"code"},{default:(0,r.w5)((()=>[(0,r._)("h3",null,(0,y.zw)(n.userId),1)])),_:1})):(0,r.kq)("",!0),((0,r.wg)(),(0,r.iD)("svg",S,null,512))])]),(0,r.Wm)(l,{class:"draw-note"},{default:(0,r.w5)((()=>[O])),_:1})])),_:1})])),_:1})}var C=o(8903),A=o(2262),W=o(5457),P=o(4422),T={setup(){const e=(0,A.Fl)((()=>localStorage.getItem("user_id")));return(0,r.bv)((()=>{(0,W.l)({el:"#draw-container",brush:{mode:"stylus",color:(0,P.Zaf)("--ion-color-primary").value,size:1.5}})})),{alertCircle:C.no6,refresh:C.biU,userId:e}},components:{IonContent:i.W2,IonPage:i._i,IonIcon:i.gu,IonText:i.yW,IonFabButton:i.W4,IonNote:i.uN}};const E=(0,p.Z)(T,[["render",j],["__scopeId","data-v-d21b6dbc"]]);var L=E;const{App:x}=w.Vn;var N=(0,r.aZ)({name:"App",data:()=>({loading:!0,networkError:!1}),methods:{reload(){window.location.reload()},monitorDarkMode(){localStorage.getItem("theme")||localStorage.setItem("theme","auto");const e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme");if(t&&"auto"!==t?document.body.classList.toggle("dark","dark"===t):document.body.classList.toggle("dark",e.matches),e.addEventListener("change",(e=>{localStorage.getItem("theme")&&"auto"!==localStorage.getItem("theme")||document.body.classList.toggle("dark",e.matches)})),(0,s.a)("capacitor")){document.body.classList.contains("dark")?(b.A_.setStyle({style:b.bg.Dark}),b.A_.setBackgroundColor({color:"#121212"})):(b.A_.setStyle({style:b.bg.Light}),b.A_.setBackgroundColor({color:"#f4f5f8"}));const e=new MutationObserver(((e,t)=>{e.forEach((e=>{"class"===e.attributeName&&(document.body.classList.contains("dark")?(b.A_.setStyle({style:b.bg.Dark}),b.A_.setBackgroundColor({color:"#121212"})):(b.A_.setStyle({style:b.bg.Light}),b.A_.setBackgroundColor({color:"#f4f5f8"})))}))}));e.observe(document.body,{attributes:!0,attributeFilter:["class"]})}}},async mounted(){this.monitorDarkMode();const e=(0,i.cj)(),t=(0,c.a)(),o=(0,u.yj)();t.init().then((()=>{o.matched.some((e=>e.meta.requiresAuth&&!t.user))&&e.replace("/login"),o.matched.some((e=>e.meta.requiresGuest&&!!t.user))&&e.replace("/"),setTimeout((()=>{this.loading=!1}),200)})).catch((t=>{t.network?this.networkError=!0:e.replace("/login"),setTimeout((()=>{this.loading=!1}),200)})),(0,i.Kx)(-1,(()=>{e.canGoBack()||x.exitApp()}))},components:{IonApp:i.dr,IonRouterOutlet:i.jP,LoadingPage:g,NoNetworkPage:L}});const B=(0,p.Z)(N,[["render",a]]);var q=B,U=o(1089);const z=(0,r.Uk)("الرئيسية"),D=(0,r.Uk)("التواصل"),M=(0,r.Uk)("عن التطبيق");function F(e,t,o,n,a,i){const s=(0,r.up)("ion-router-outlet"),u=(0,r.up)("ion-icon"),c=(0,r.up)("ion-label"),l=(0,r.up)("ion-tab-button"),d=(0,r.up)("ion-tab-bar"),f=(0,r.up)("ion-tabs"),m=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,{onIonTabsWillChange:i.changeTabs},{default:(0,r.w5)((()=>[(0,r.Wm)(s),(0,r.Wm)(d,{slot:"bottom"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{tab:"home",href:"/home"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{icon:"home"===e.selected?e.home:e.homeOutline},null,8,["icon"]),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[z])),_:1})])),_:1}),(0,r.Wm)(l,{tab:"contact",href:"/contact"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{icon:"contact"===e.selected?e.megaphone:e.megaphoneOutline},null,8,["icon"]),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[D])),_:1})])),_:1}),(0,r.Wm)(l,{tab:"about",href:"/about"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{icon:"about"===e.selected?e.helpCircle:e.helpCircleOutline},null,8,["icon"]),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[M])),_:1})])),_:1})])),_:1})])),_:1},8,["onIonTabsWillChange"])])),_:1})}var Z={components:{IonTabs:i.UN,IonTabBar:i.yq,IonTabButton:i.ZU,IonIcon:i.gu,IonPage:i._i,IonRouterOutlet:i.jP,IonLabel:i.Q$},methods:{changeTabs(e){this.selected=e.tab}},data:()=>({homeOutline:C.TSh,home:C.LEH,helpCircleOutline:C.Sm,helpCircle:C.pvH,megaphoneOutline:C.ln3,megaphone:C.m5g,selected:null})};const R=(0,p.Z)(Z,[["render",F]]);var $=R;const G=[{meta:{requiresGuest:!0},path:"/login",component:()=>o.e(193).then(o.bind(o,2193))},{meta:{requiresAuth:!0},path:"/course",props:!0,component:()=>Promise.all([o.e(167),o.e(671)]).then(o.bind(o,8457))},{meta:{requiresAuth:!0},path:"/lecture",props:!0,component:()=>Promise.all([o.e(167),o.e(965)]).then(o.bind(o,3114))},{path:"/",redirect:"/home"},{meta:{requiresAuth:!0},path:"/",component:$,children:[{path:"",redirect:"/home"},{path:"home",component:()=>o.e(267).then(o.bind(o,1267))},{path:"contact",component:()=>Promise.all([o.e(14),o.e(562)]).then(o.bind(o,2562))},{path:"about",component:()=>Promise.all([o.e(14),o.e(596)]).then(o.bind(o,7596))}]}],H=(0,U.p7)({history:(0,U.PO)("/"),routes:G});H.beforeEach(((e,t)=>{const o=(0,c.a)();if(o.initialized){if(e.matched.some((e=>e.meta.requiresAuth))&&!o.user)return"/login"!==t.path&&"/login";if(e.matched.some((e=>e.meta.requiresGuest))&&o.user)return!t&&"/"}}));var Q=H,K=(o(8851),o(1292),o(1633),o(1045),o(6187),o(2299),o(3423),o(4687),o(9147),o(6250),o(8262)),X=o(9986);(0,s.a)("capacitor")&&X.Zn.sync({onSyncStatusChanged:()=>{}});const V=(0,K.WB)();V.use((({store:e})=>{e.router=Q}));const J=(0,n.ri)(q).use(i.oX,{mode:"md"}).use(Q).use(V);Q.isReady().then((()=>{J.mount("#app")}))},9865:function(e,t,o){"use strict";o.d(t,{a:function(){return s}});var n=o(8262),r=o(9669),a=o.n(r);const i="IgnitionSoftware930",s=(0,n.Q_)("auth",{state:()=>({user:null,token:null,initialized:!1}),actions:{async init(){return new Promise(((e,t)=>{if(localStorage.getItem("phone")){const o=localStorage.getItem("phone"),n=localStorage.getItem("password");a().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/student/login?",{crossdomain:!0,params:{phone:o,password:n,serial:i}}).then((r=>{200==r.data.code?(this.user=r.data.data[0],this.token=r.data.data[0].api_token,localStorage.setItem("phone",o),localStorage.setItem("password",n),localStorage.setItem("user_id",r.data.data[0].id),a().defaults.headers.common.Authorization=`Bearer ${r.data.data[0].api_token}`,e()):(this.logout(),t())})).catch((e=>{e.response?(this.logout(),console.log(e),t({network:!1})):(console.log(e),t({network:!0}))}))}else t({network:!1});a().interceptors.response.use((e=>{if(401!=e.data.code&&403!=e.data.code||!this.token)return e;window.location.reload()}),(e=>{if(401!=e.response.status&&403!=e.response.status||!this.token)return Promise.reject(e);window.location.reload()})),this.initialized=!0}))},async login({phone:e,password:t}){return new Promise(((o,n)=>{a().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/login?",{crossdomain:!0,params:{phone:e,password:t,serial:i}}).then((r=>{200==r.data.code?(this.user=r.data.data[0],this.token=r.data.data[0].api_token,localStorage.setItem("phone",e),localStorage.setItem("password",t),localStorage.setItem("user_id",r.data.data[0].id),a().defaults.headers.common.Authorization=`Bearer ${r.data.data[0].api_token}`,o({code:r.code,message:"تم تسجيل الدخول بنجاح"})):401==r.data.code?n({code:r.data.code,message:"رقم التليفون أو كلمة السر غلط"}):n({code:r.code,message:"موقع الصيفي مش متاح حاليا"})})).catch((e=>{console.log(e),n({code:e.code,message:"ممكن تكون فاصل نت أو موقع الصيفي مش متاح حاليا"})}))}))},logout(){localStorage.removeItem("phone"),localStorage.removeItem("password"),localStorage.removeItem("user_id"),this.$reset(),this.initialized=!0}}})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},o.d(a,i),a}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{14:"291d7e96",78:"8a7b3f13",167:"766179bb",168:"4bb50377",176:"6627d39c",193:"e3496713",267:"aead4eaa",338:"b9debbb5",544:"7aa8a2ab",562:"6d7c2174",576:"dc4e8686",577:"d3348142",596:"3fefa51f",671:"0fc827f4",674:"2ecd3238",753:"7259cf57",775:"69ecff55",961:"426c3a2b",965:"d844f234",990:"aa4569bb"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{193:"a216a5df",267:"ad97a254",562:"f7f58657",596:"3fbfa606",671:"247fed58",965:"c12a09ac"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="elsaify:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var f=function(t,o){s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={193:1,267:1,562:1,596:1,671:1,965:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,u=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var l=u(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return o.O(l)},n=self["webpackChunkelsaify"]=self["webpackChunkelsaify"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2061)}));n=o.O(n)})();
//# sourceMappingURL=app.a44c5c85.js.map