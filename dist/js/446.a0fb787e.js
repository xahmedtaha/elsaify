"use strict";(self["webpackChunkelsaify"]=self["webpackChunkelsaify"]||[]).push([[446],{8446:function(e,l,o){o.r(l),o.d(l,{default:function(){return b}});var n=o(6252),a=o(9963);const i={class:"container"},s={class:"wrapper"},t=(0,n.Uk)("رقم التليفون"),u=(0,n.Uk)("كلمة السر"),d=(0,n.Uk)("كود تعريف الجهاز"),r={style:{display:"flex","flex-direction":"column","justify-items":"center"}},p=(0,n.Uk)("لو معندكش أكونت اعمل واحد من الأبلكيشن الأصلي");function m(e,l,o,m,c,w){const f=(0,n.up)("ion-img"),g=(0,n.up)("ion-label"),y=(0,n.up)("ion-input"),h=(0,n.up)("ion-item"),v=(0,n.up)("ion-icon"),b=(0,n.up)("ion-spinner"),I=(0,n.up)("ion-button"),_=(0,n.up)("ion-note"),W=(0,n.up)("ion-content"),k=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,null,{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("div",s,[(0,n.Wm)(f,{src:"/assets/img/amr.png",class:"logo"}),(0,n._)("form",{onSubmit:l[4]||(l[4]=(0,a.iM)(((...e)=>m.login&&m.login(...e)),["prevent"]))},[(0,n.Wm)(h,{fill:"solid"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{position:"stacked"},{default:(0,n.w5)((()=>[t])),_:1}),(0,n.Wm)(y,{disabled:m.loading,required:"",modelValue:m.phone,"onUpdate:modelValue":l[0]||(l[0]=e=>m.phone=e),modelModifiers:{trim:!0},name:"phone",type:"number",inputmode:"numeric",placeholder:"أدخل رقم التليفون",onKeyup:(0,a.D2)(m.login,["enter"])},null,8,["disabled","modelValue","onKeyup"])])),_:1}),(0,n.Wm)(h,{fill:"solid"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{position:"stacked"},{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)(y,{disabled:m.loading,required:"",modelValue:m.password,"onUpdate:modelValue":l[1]||(l[1]=e=>m.password=e),modelModifiers:{trim:!0},type:m.showPassword?"text":"password",name:"password",placeholder:"أدخل كلمة السر",onKeyup:(0,a.D2)(m.login,["enter"])},null,8,["disabled","modelValue","type","onKeyup"]),(0,n.Wm)(v,{icon:m.showPassword?m.eyeOutline:m.eyeOffOutline,onClick:l[2]||(l[2]=e=>m.showPassword=!m.showPassword),slot:"end",style:{cursor:"pointer"}},null,8,["icon"])])),_:1}),(0,n.Wm)(h,{fill:"solid"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{position:"stacked"},{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Wm)(y,{disabled:m.loading,modelValue:m.serial,"onUpdate:modelValue":l[3]||(l[3]=e=>m.serial=e),modelModifiers:{trim:!0},type:"text",name:"password",placeholder:"سيبها فاضية لو متعرفش بتعمل ايه",onKeyup:(0,a.D2)(m.login,["enter"])},null,8,["disabled","modelValue","onKeyup"])])),_:1}),(0,n.Wm)(I,{disabled:m.loading,expand:"block",type:"submit",class:"submit-btn"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("span",null,"تسجيل الدخول",512),[[a.F8,!m.loading]]),(0,n.wy)((0,n.Wm)(b,{name:"crescent"},null,512),[[a.F8,m.loading]])])),_:1},8,["disabled"]),(0,n._)("div",r,[(0,n.Wm)(_,{style:{"text-align":"center",margin:"20px auto","max-width":"300px"}},{default:(0,n.w5)((()=>[p])),_:1})])],32)])])])),_:1})])),_:1})}var c=o(9490),w=o(8903),f=o(9865),g=o(2262),y={components:{IonContent:c.W2,IonPage:c._i,IonIcon:c.gu,IonItem:c.Ie,IonLabel:c.Q$,IonInput:c.pK,IonButton:c.YG,IonSpinner:c.PQ,IonNote:c.uN,IonImg:c.Xz},setup(){const e=(0,c.cj)(),l=(0,f.a)(),o=(0,g.iH)(""),n=(0,g.iH)(""),a=(0,g.iH)(""),i=(0,g.iH)(!1),s=(0,g.iH)(!1);(0,c.KA)((()=>{o.value="",n.value="",a.value="",i.value=!1,s.value=!1}));const t=()=>{if(i.value)return;i.value=!0;let s={phone:o.value,password:n.value,serial:a.value?a.value:null};l.login(s).then((async()=>{i.value=!1,e.push("/lectures")})).catch((async e=>{i.value=!1,console.error(e);const l=await c.Cl.create({header:"مشكلة !",message:e.message,buttons:["تمام"],mode:"ios"});await l.present();const{role:o}=await l.onDidDismiss();console.log("onDidDismiss resolved with role",o)}))};return{login:t,callOutline:w.H7N,lockClosedOutline:w.hkI,phone:o,eyeOutline:w.hII,eyeOffOutline:w.qRO,password:n,serial:a,loading:i,showPassword:s}}},h=o(3744);const v=(0,h.Z)(y,[["render",m],["__scopeId","data-v-56008c04"]]);var b=v}}]);
//# sourceMappingURL=446.a0fb787e.js.map