(self["webpackChunkelsaify"]=self["webpackChunkelsaify"]||[]).push([[597],{276:function(e,t,n){e=n.nmd(e);var r=200,o="Expected a function",i="__lodash_hash_undefined__",a=1,u=2,s=1/0,c=9007199254740991,l="[object Arguments]",f="[object Array]",d="[object Boolean]",h="[object Date]",p="[object Error]",v="[object Function]",g="[object GeneratorFunction]",_="[object Map]",y="[object Number]",m="[object Object]",w="[object Promise]",b="[object RegExp]",k="[object Set]",j="[object String]",C="[object Symbol]",I="[object WeakMap]",W="[object ArrayBuffer]",A="[object DataView]",D="[object Float32Array]",x="[object Float64Array]",O="[object Int8Array]",B="[object Int16Array]",S="[object Int32Array]",T="[object Uint8Array]",L="[object Uint8ClampedArray]",z="[object Uint16Array]",U="[object Uint32Array]",$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/,Q=/^\./,R=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,M=/[\\^$.*+?()[\]{}|]/g,P=/\\(\\)?/g,F=/^\[object .+?Constructor\]$/,G=/^(?:0|[1-9]\d*)$/,q={};q[D]=q[x]=q[O]=q[B]=q[S]=q[T]=q[L]=q[z]=q[U]=!0,q[l]=q[f]=q[W]=q[d]=q[A]=q[h]=q[p]=q[v]=q[_]=q[y]=q[m]=q[b]=q[k]=q[j]=q[I]=!1;var H="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,Y="object"==typeof self&&self&&self.Object===Object&&self,Z=H||Y||Function("return this")(),J=t&&!t.nodeType&&t,K=J&&e&&!e.nodeType&&e,X=K&&K.exports===J,N=X&&H.process,V=function(){try{return N&&N.binding("util")}catch(e){}}(),ee=V&&V.isTypedArray;function te(e,t,n,r){var o=-1,i=e?e.length:0;while(++o<i){var a=e[o];t(r,a,n(a),e)}return r}function ne(e,t){var n=-1,r=e?e.length:0;while(++n<r)if(t(e[n],n,e))return!0;return!1}function re(e){return function(t){return null==t?void 0:t[e]}}function oe(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}function ie(e){return function(t){return e(t)}}function ae(e,t){return null==e?void 0:e[t]}function ue(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}function se(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function ce(e,t){return function(n){return e(t(n))}}function le(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var fe=Array.prototype,de=Function.prototype,he=Object.prototype,pe=Z["__core-js_shared__"],ve=function(){var e=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ge=de.toString,_e=he.hasOwnProperty,ye=he.toString,me=RegExp("^"+ge.call(_e).replace(M,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),we=Z.Symbol,be=Z.Uint8Array,ke=he.propertyIsEnumerable,je=fe.splice,Ce=ce(Object.keys,Object),Ie=Mt(Z,"DataView"),We=Mt(Z,"Map"),Ae=Mt(Z,"Promise"),De=Mt(Z,"Set"),xe=Mt(Z,"WeakMap"),Oe=Mt(Object,"create"),Be=Vt(Ie),Se=Vt(We),Te=Vt(Ae),Le=Vt(De),ze=Vt(xe),Ue=we?we.prototype:void 0,$e=Ue?Ue.valueOf:void 0,Ee=Ue?Ue.toString:void 0;function Qe(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Re(){this.__data__=Oe?Oe(null):{}}function Me(e){return this.has(e)&&delete this.__data__[e]}function Pe(e){var t=this.__data__;if(Oe){var n=t[e];return n===i?void 0:n}return _e.call(t,e)?t[e]:void 0}function Fe(e){var t=this.__data__;return Oe?void 0!==t[e]:_e.call(t,e)}function Ge(e,t){var n=this.__data__;return n[e]=Oe&&void 0===t?i:t,this}function qe(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function He(){this.__data__=[]}function Ye(e){var t=this.__data__,n=ht(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():je.call(t,n,1),!0}function Ze(e){var t=this.__data__,n=ht(t,e);return n<0?void 0:t[n][1]}function Je(e){return ht(this.__data__,e)>-1}function Ke(e,t){var n=this.__data__,r=ht(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}function Xe(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Ne(){this.__data__={hash:new Qe,map:new(We||qe),string:new Qe}}function Ve(e){return Qt(this,e)["delete"](e)}function et(e){return Qt(this,e).get(e)}function tt(e){return Qt(this,e).has(e)}function nt(e,t){return Qt(this,e).set(e,t),this}function rt(e){var t=-1,n=e?e.length:0;this.__data__=new Xe;while(++t<n)this.add(e[t])}function ot(e){return this.__data__.set(e,i),this}function it(e){return this.__data__.has(e)}function at(e){this.__data__=new qe(e)}function ut(){this.__data__=new qe}function st(e){return this.__data__["delete"](e)}function ct(e){return this.__data__.get(e)}function lt(e){return this.__data__.has(e)}function ft(e,t){var n=this.__data__;if(n instanceof qe){var o=n.__data__;if(!We||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Xe(o)}return n.set(e,t),this}function dt(e,t){var n=on(e)||rn(e)?oe(e.length,String):[],r=n.length,o=!!r;for(var i in e)!t&&!_e.call(e,i)||o&&("length"==i||Gt(i,r))||n.push(i);return n}function ht(e,t){var n=e.length;while(n--)if(nn(e[n][0],t))return n;return-1}function pt(e,t,n,r){return vt(e,(function(e,o,i){t(r,e,n(e),i)})),r}Qe.prototype.clear=Re,Qe.prototype["delete"]=Me,Qe.prototype.get=Pe,Qe.prototype.has=Fe,Qe.prototype.set=Ge,qe.prototype.clear=He,qe.prototype["delete"]=Ye,qe.prototype.get=Ze,qe.prototype.has=Je,qe.prototype.set=Ke,Xe.prototype.clear=Ne,Xe.prototype["delete"]=Ve,Xe.prototype.get=et,Xe.prototype.has=tt,Xe.prototype.set=nt,rt.prototype.add=rt.prototype.push=ot,rt.prototype.has=it,at.prototype.clear=ut,at.prototype["delete"]=st,at.prototype.get=ct,at.prototype.has=lt,at.prototype.set=ft;var vt=Lt(_t),gt=zt();function _t(e,t){return e&&gt(e,t,_n)}function yt(e,t){t=qt(t,e)?[t]:St(t);var n=0,r=t.length;while(null!=e&&n<r)e=e[Nt(t[n++])];return n&&n==r?e:void 0}function mt(e){return ye.call(e)}function wt(e,t){return null!=e&&t in Object(e)}function bt(e,t,n,r,o){return e===t||(null==e||null==t||!ln(e)&&!fn(t)?e!==e&&t!==t:kt(e,t,bt,n,r,o))}function kt(e,t,n,r,o,i){var a=on(e),s=on(t),c=f,d=f;a||(c=Pt(e),c=c==l?m:c),s||(d=Pt(t),d=d==l?m:d);var h=c==m&&!ue(e),p=d==m&&!ue(t),v=c==d;if(v&&!h)return i||(i=new at),a||hn(e)?Ut(e,t,n,r,o,i):$t(e,t,c,n,r,o,i);if(!(o&u)){var g=h&&_e.call(e,"__wrapped__"),_=p&&_e.call(t,"__wrapped__");if(g||_){var y=g?e.value():e,w=_?t.value():t;return i||(i=new at),n(y,w,r,o,i)}}return!!v&&(i||(i=new at),Et(e,t,n,r,o,i))}function jt(e,t,n,r){var o=n.length,i=o,s=!r;if(null==e)return!i;e=Object(e);while(o--){var c=n[o];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}while(++o<i){c=n[o];var l=c[0],f=e[l],d=c[1];if(s&&c[2]){if(void 0===f&&!(l in e))return!1}else{var h=new at;if(r)var p=r(f,d,l,e,t,h);if(!(void 0===p?bt(d,f,r,a|u,h):p))return!1}}return!0}function Ct(e){if(!ln(e)||Yt(e))return!1;var t=sn(e)||ue(e)?me:F;return t.test(Vt(e))}function It(e){return fn(e)&&cn(e.length)&&!!q[ye.call(e)]}function Wt(e){return"function"==typeof e?e:null==e?yn:"object"==typeof e?on(e)?xt(e[0],e[1]):Dt(e):mn(e)}function At(e){if(!Zt(e))return Ce(e);var t=[];for(var n in Object(e))_e.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Dt(e){var t=Rt(e);return 1==t.length&&t[0][2]?Kt(t[0][0],t[0][1]):function(n){return n===e||jt(n,e,t)}}function xt(e,t){return qt(e)&&Jt(t)?Kt(Nt(e),t):function(n){var r=vn(n,e);return void 0===r&&r===t?gn(n,e):bt(t,r,void 0,a|u)}}function Ot(e){return function(t){return yt(t,e)}}function Bt(e){if("string"==typeof e)return e;if(dn(e))return Ee?Ee.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}function St(e){return on(e)?e:Xt(e)}function Tt(e,t){return function(n,r){var o=on(n)?te:pt,i=t?t():{};return o(n,e,Wt(r,2),i)}}function Lt(e,t){return function(n,r){if(null==n)return n;if(!an(n))return e(n,r);var o=n.length,i=t?o:-1,a=Object(n);while(t?i--:++i<o)if(!1===r(a[i],i,a))break;return n}}function zt(e){return function(t,n,r){var o=-1,i=Object(t),a=r(t),u=a.length;while(u--){var s=a[e?u:++o];if(!1===n(i[s],s,i))break}return t}}function Ut(e,t,n,r,o,i){var s=o&u,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var f=i.get(e);if(f&&i.get(t))return f==t;var d=-1,h=!0,p=o&a?new rt:void 0;i.set(e,t),i.set(t,e);while(++d<c){var v=e[d],g=t[d];if(r)var _=s?r(g,v,d,t,e,i):r(v,g,d,e,t,i);if(void 0!==_){if(_)continue;h=!1;break}if(p){if(!ne(t,(function(e,t){if(!p.has(t)&&(v===e||n(v,e,r,o,i)))return p.add(t)}))){h=!1;break}}else if(v!==g&&!n(v,g,r,o,i)){h=!1;break}}return i["delete"](e),i["delete"](t),h}function $t(e,t,n,r,o,i,s){switch(n){case A:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case W:return!(e.byteLength!=t.byteLength||!r(new be(e),new be(t)));case d:case h:case y:return nn(+e,+t);case p:return e.name==t.name&&e.message==t.message;case b:case j:return e==t+"";case _:var c=se;case k:var l=i&u;if(c||(c=le),e.size!=t.size&&!l)return!1;var f=s.get(e);if(f)return f==t;i|=a,s.set(e,t);var v=Ut(c(e),c(t),r,o,i,s);return s["delete"](e),v;case C:if($e)return $e.call(e)==$e.call(t)}return!1}function Et(e,t,n,r,o,i){var a=o&u,s=_n(e),c=s.length,l=_n(t),f=l.length;if(c!=f&&!a)return!1;var d=c;while(d--){var h=s[d];if(!(a?h in t:_e.call(t,h)))return!1}var p=i.get(e);if(p&&i.get(t))return p==t;var v=!0;i.set(e,t),i.set(t,e);var g=a;while(++d<c){h=s[d];var _=e[h],y=t[h];if(r)var m=a?r(y,_,h,t,e,i):r(_,y,h,e,t,i);if(!(void 0===m?_===y||n(_,y,r,o,i):m)){v=!1;break}g||(g="constructor"==h)}if(v&&!g){var w=e.constructor,b=t.constructor;w==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof b&&b instanceof b||(v=!1)}return i["delete"](e),i["delete"](t),v}function Qt(e,t){var n=e.__data__;return Ht(t)?n["string"==typeof t?"string":"hash"]:n.map}function Rt(e){var t=_n(e),n=t.length;while(n--){var r=t[n],o=e[r];t[n]=[r,o,Jt(o)]}return t}function Mt(e,t){var n=ae(e,t);return Ct(n)?n:void 0}var Pt=mt;function Ft(e,t,n){t=qt(t,e)?[t]:St(t);var r,o=-1,i=t.length;while(++o<i){var a=Nt(t[o]);if(!(r=null!=e&&n(e,a)))break;e=e[a]}if(r)return r;i=e?e.length:0;return!!i&&cn(i)&&Gt(a,i)&&(on(e)||rn(e))}function Gt(e,t){return t=null==t?c:t,!!t&&("number"==typeof e||G.test(e))&&e>-1&&e%1==0&&e<t}function qt(e,t){if(on(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!dn(e))||(E.test(e)||!$.test(e)||null!=t&&e in Object(t))}function Ht(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function Yt(e){return!!ve&&ve in e}function Zt(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||he;return e===n}function Jt(e){return e===e&&!ln(e)}function Kt(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}(Ie&&Pt(new Ie(new ArrayBuffer(1)))!=A||We&&Pt(new We)!=_||Ae&&Pt(Ae.resolve())!=w||De&&Pt(new De)!=k||xe&&Pt(new xe)!=I)&&(Pt=function(e){var t=ye.call(e),n=t==m?e.constructor:void 0,r=n?Vt(n):void 0;if(r)switch(r){case Be:return A;case Se:return _;case Te:return w;case Le:return k;case ze:return I}return t});var Xt=tn((function(e){e=pn(e);var t=[];return Q.test(e)&&t.push(""),e.replace(R,(function(e,n,r,o){t.push(r?o.replace(P,"$1"):n||e)})),t}));function Nt(e){if("string"==typeof e||dn(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}function Vt(e){if(null!=e){try{return ge.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var en=Tt((function(e,t,n){_e.call(e,n)?e[n].push(t):e[n]=[t]}));function tn(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(o);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(tn.Cache||Xe),n}function nn(e,t){return e===t||e!==e&&t!==t}function rn(e){return un(e)&&_e.call(e,"callee")&&(!ke.call(e,"callee")||ye.call(e)==l)}tn.Cache=Xe;var on=Array.isArray;function an(e){return null!=e&&cn(e.length)&&!sn(e)}function un(e){return fn(e)&&an(e)}function sn(e){var t=ln(e)?ye.call(e):"";return t==v||t==g}function cn(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function ln(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function fn(e){return!!e&&"object"==typeof e}function dn(e){return"symbol"==typeof e||fn(e)&&ye.call(e)==C}var hn=ee?ie(ee):It;function pn(e){return null==e?"":Bt(e)}function vn(e,t,n){var r=null==e?void 0:yt(e,t);return void 0===r?n:r}function gn(e,t){return null!=e&&Ft(e,t,wt)}function _n(e){return an(e)?dt(e):At(e)}function yn(e){return e}function mn(e){return qt(e)?re(Nt(e)):Ot(e)}e.exports=en},1597:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(6252),o=n(9963),i=n(3577);const a={key:0,class:"wrapper"},u={key:1,class:"courses-wrapper"},s=(0,r.Uk)("المحاضرات"),c=(0,r.Uk)("الواجبات"),l={key:0},f={key:1},d={key:2,class:"error-wrapper"},h=(0,r.Uk)("ممكن تكون فاصل نت أو موقع الصيفي مش متاح"),p=(0,r.Uk)("حاول تاني");function v(e,t,n,v,g,_){const y=(0,r.up)("ion-img"),m=(0,r.up)("ion-spinner"),w=(0,r.up)("ion-label"),b=(0,r.up)("ion-segment-button"),k=(0,r.up)("ion-segment"),j=(0,r.up)("ion-card"),C=(0,r.up)("ion-badge"),I=(0,r.up)("ion-item"),W=(0,r.up)("ion-avatar"),A=(0,r.up)("ion-list"),D=(0,r.up)("ion-accordion"),x=(0,r.up)("ion-accordion-group"),O=(0,r.up)("course-tile"),B=(0,r.up)("ion-text"),S=(0,r.up)("ion-button"),T=(0,r.up)("ion-content"),L=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(L,null,{default:(0,r.w5)((()=>[(0,r.Wm)(T,null,{default:(0,r.w5)((()=>[(0,r._)("main",null,[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[e.loading?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(y,{class:"logo",src:"/assets/img/amr.png"}),(0,r.Wm)(m,{color:"primary",name:"crescent"})])):e.error?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(y,{src:"/assets/img/amr.png"}),(0,r.Wm)(B,{color:"danger"},{default:(0,r.w5)((()=>[h])),_:1}),(0,r.Wm)(S,{size:"small",style:{"margin-top":"15px","--box-shadow":"none"},onClick:_.getCourses},{default:(0,r.w5)((()=>[p])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(y,{class:"logo",src:"/assets/img/amr.png"}),(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k,{value:e.segment,onIonChange:t[0]||(t[0]=e=>_.segmentChanged(e))},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{value:"lectures"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[s])),_:1})])),_:1}),(0,r.Wm)(b,{value:"homeworks"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[c])),_:1})])),_:1})])),_:1},8,["value"])])),_:1}),(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>["lectures"===e.segment?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(x,{expand:"inset"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.groupBy(this.lectures,"parentName"),((t,n,o)=>((0,r.wg)(),(0,r.j4)(D,{key:o},{default:(0,r.w5)((()=>[(0,r.Wm)(I,{lines:"none",slot:"header"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n),1)])),_:2},1024),(0,r.Wm)(C,{mode:"ios",color:"light",slot:"end"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.length),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(A,{slot:"content"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,(t=>((0,r.wg)(),(0,r.j4)(I,{onClick:e=>_.isLectureAvailable(t)?_.goToLecture(t):_.useQR(t),key:t.id,button:"",detail:"","detail-icon":_.isLectureAvailable(t)?e.chevronBack:e.lockClosed,lines:"none",class:"lecture"},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{src:"https://elsaify.elameed.education/elsefy/"+t.img},null,8,["src"])])),_:2},1024),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["onClick","detail-icon"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])):"homeworks"===e.segment?((0,r.wg)(),(0,r.iD)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.homeworks.sort(_.sortCourses),(e=>((0,r.wg)(),(0,r.j4)(O,{dense:"",class:"course",course:e,key:e.id},null,8,["course"])))),128))])):(0,r.kq)("",!0)])),_:1})]))])),_:1})])])),_:1})])),_:1})}var g=n(9490),_=n(8903),y=n(9669),m=n.n(y);function w(e,t,n,o,a,u){const s=(0,r.up)("ion-img"),c=(0,r.up)("ion-avatar"),l=(0,r.up)("ion-label"),f=(0,r.up)("ion-item"),d=(0,r.up)("ion-card"),h=(0,r.up)("ion-card-subtitle"),p=(0,r.up)("ion-card-title"),v=(0,r.up)("ion-card-header");return(0,r.wg)(),(0,r.iD)("div",null,[n.dense?((0,r.wg)(),(0,r.j4)(d,{key:0,onClick:t[0]||(t[0]=e=>u.isAvailable?u.goToCourse():u.useQR()),button:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{lines:"none",detail:"","detail-icon":u.isAvailable?e.chevronBack:e.lockClosed},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{src:"https://elsaify.elameed.education/elsefy/"+n.course.img},null,8,["src"])])),_:1}),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r._)("h2",null,(0,i.zw)(n.course.text),1),(0,r._)("p",null,(0,i.zw)(n.course.title),1)])),_:1})])),_:1},8,["detail-icon"])])),_:1})):((0,r.wg)(),(0,r.j4)(d,{key:1,class:"bordered",onClick:u.goToCourse,button:""},{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,{lines:"none",detail:"","detail-icon":e.chevronBack},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.course.text),1)])),_:1}),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.course.title),1)])),_:1})])),_:1})])),_:1},8,["detail-icon"])])),_:1})])),_:1},8,["onClick"]))])}var b=n(9865),k={components:{IonCard:g.PM,IonCardHeader:g.Zi,IonCardTitle:g.Dq,IonCardSubtitle:g.tO,IonLabel:g.Q$,IonItem:g.Ie,IonImg:g.Xz,IonAvatar:g.BJ},props:{course:Object,dense:Boolean,isLecture:Boolean},data:()=>({closeCircle:_.XZx,chevronBack:_.Mny,lockClosed:_.Ml6}),computed:{isAvailable(){return this.course.countC>0||"0.00"==this.course.money}},methods:{goToCourse(){this.$router.push({path:this.isLecture?"/lecture":"/course",query:{id:this.course.id,title:this.course.title,type:this.course.type}})},async useQR(){const e=await g.Cl.create({header:"QR",message:"اعمل اسكان للكيو ار بتليفونك و دخل الكود اللي طلع هنا",inputs:[{name:"code",placeholder:"كود الكيو ار",type:"text"}],buttons:[{text:"الغاء",role:"cancel",cssClass:"secondary"},{text:"تأكيد",handler:async e=>{const t=await g.G0.create({message:"استنى نفعل الكود"});await t.present();const n=m().create({headers:{Authentication:"Bearer "+(0,b.a)().token}});n.get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseCode?courseId="+this.course.id+"&code="+e.code,{crossdomain:!0}).then((e=>{200==e.data.code?this.goToCourse():g.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((e=>{e.present(),e.onDidDismiss().then((()=>{this.useQR()}))})),t.dismiss()})).catch((e=>{console.error(e),g.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((e=>{e.present(),e.onDidDismiss().then((()=>{this.useQR()}))})),t.dismiss()}))}}],mode:"ios"});await e.present();const{role:t}=await e.onDidDismiss();console.log("onDidDismiss resolved with role",t)}}},j=n(3744);const C=(0,j.Z)(k,[["render",w],["__scopeId","data-v-825a7242"]]);var I=C;const W=n(276);var A={mounted(){this.getCourses()},data:()=>({loading:!0,homeworks:[],lectures:[],homeworksError:!1,lecturesError:!1,error:!1,sortWords:["الاول","الأول","الثاني","الثانى","الثالث","الرابع","الخامس"],lockClosed:_.Ml6,chevronBack:_.Mny,segment:"lectures"}),methods:{groupBy:W,segmentChanged(e){e.preventDefault(),this.segment=e.detail.value},sortCourses(e,t){return this.sortWords.findIndex((t=>e.text.includes(t)))-this.sortWords.findIndex((e=>t.text.includes(e)))},isLectureAvailable(e){return e.countC>0||"0.00"==e.money},async useQR(e){const t=await g.Cl.create({header:"QR",message:"اعمل اسكان للكيو ار بتليفونك و دخل الكود اللي طلع هنا",inputs:[{name:"code",placeholder:"كود الكيو ار",type:"text"}],buttons:[{text:"الغاء",role:"cancel",cssClass:"secondary"},{text:"تأكيد",handler:async t=>{const n=await g.G0.create({message:"استنى نفعل الكود"});await n.present();const r=m().create({headers:{Authentication:"Bearer "+(0,b.a)().token}});r.get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseCode?courseId="+e.id+"&code="+t.code,{crossdomain:!0}).then((t=>{200==t.data.code?this.goToLecture(e):g.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((t=>{t.present(),t.onDidDismiss().then((()=>{this.useQR(e)}))})),n.dismiss()})).catch((t=>{console.error(t),g.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((t=>{t.present(),t.onDidDismiss().then((()=>{this.useQR(e)}))})),n.dismiss()}))}}],mode:"ios"});await t.present();const{role:n}=await t.onDidDismiss();console.log("onDidDismiss resolved with role",n)},getCourses(){this.error=!1,this.loading=!0,Promise.all([m().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=5",{crossdomain:!0}),m().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=0",{crossdomain:!0})]).then((e=>{console.log(e),200==e[0].data.code?this.homeworks=e[0].data.data:this.homeworksError=!0,200==e[1].data.code?this.lectures=e[1].data.data:this.lecturesError=!0,this.loading=!1})).catch((e=>{console.error(e),this.error=!0,this.loading=!1}))},goToLecture(e){this.$router.push({path:"/lecture",query:{id:e.id,title:e.title,type:e.type}})}},components:{IonContent:g.W2,IonPage:g._i,CourseTile:I,IonSpinner:g.PQ,IonImg:g.Xz,IonText:g.yW,IonButton:g.YG,IonSegment:g.cJ,IonSegmentButton:g.GO,IonCard:g.PM,IonAccordion:g.We,IonAccordionGroup:g.eh,IonItem:g.Ie,IonLabel:g.Q$,IonBadge:g.yp,IonAvatar:g.BJ,IonList:g.q_}};const D=(0,j.Z)(A,[["render",v],["__scopeId","data-v-c24c0f1a"]]);var x=D}}]);
//# sourceMappingURL=597.bdfce359.js.map