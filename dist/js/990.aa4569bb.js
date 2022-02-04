"use strict";(self["webpackChunkelsaify"]=self["webpackChunkelsaify"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return s}});var r=n(6587),a=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(e,t,n,s,c)=>{const i=e.ownerDocument.defaultView,o=e=>e.startX<=50&&t(),u=e=>{const t=e.deltaX,n=t/i.innerWidth;s(n)},l=e=>{const t=e.deltaX,n=i.innerWidth,a=t/n,s=e.velocityX,o=n/2,u=s>=0&&(s>.2||e.deltaX>o),l=u?1-a:a,d=l*n;let h=0;if(d>5){const e=d/Math.abs(s);h=Math.min(e,540)}c(u,a<=0?.01:(0,r.d)(0,a,.9999),h)};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o,onStart:n,onMove:u,onEnd:l})}}}]);
//# sourceMappingURL=990.aa4569bb.js.map