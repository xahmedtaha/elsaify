"use strict";(self["webpackChunkelsaify"]=self["webpackChunkelsaify"]||[]).push([[374],{2933:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var o=s(6252),a=s(9963),n=s(3577);const r={key:0,class:"wrapper"},i={key:1,class:"courses-wrapper"},l=(0,o.Uk)("السناتر"),u=(0,o.Uk)("الأونلاين"),d={key:0},c={key:1},m={key:2,class:"error-wrapper"},p=(0,o.Uk)("ممكن تكون فاصل نت أو موقع الصيفي مش متاح"),g=(0,o.Uk)("حاول تاني");function h(e,t,s,h,w,f){const k=(0,o.up)("ion-img"),y=(0,o.up)("ion-spinner"),W=(0,o.up)("ion-label"),v=(0,o.up)("ion-segment-button"),C=(0,o.up)("ion-segment"),b=(0,o.up)("ion-card"),_=(0,o.up)("ion-badge"),I=(0,o.up)("ion-item"),x=(0,o.up)("ion-avatar"),D=(0,o.up)("ion-list"),B=(0,o.up)("ion-accordion"),A=(0,o.up)("ion-accordion-group"),L=(0,o.up)("course-tile"),T=(0,o.up)("ion-text"),U=(0,o.up)("ion-button"),P=(0,o.up)("ion-content"),Q=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o._)("main",null,[(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(k,{class:"logo",src:"/assets/img/amr.png"}),(0,o.Wm)(y,{color:"primary",name:"crescent"})])):e.error?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(k,{src:"/assets/img/amr.png"}),(0,o.Wm)(T,{color:"danger"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(U,{size:"small",style:{"margin-top":"15px","--box-shadow":"none"},onClick:f.getCourses},{default:(0,o.w5)((()=>[g])),_:1},8,["onClick"])])):((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(k,{class:"logo",src:"/assets/img/amr.png"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,{value:e.segment,onIonChange:t[0]||(t[0]=e=>f.segmentChanged(e))},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{value:"lectures"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1}),(0,o.Wm)(v,{value:"homeworks"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:1})])),_:1},8,["value"])])),_:1}),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>["lectures"===e.segment?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(A,{expand:"inset"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.groupBy(this.lectures,"parentName"),((t,s,a)=>((0,o.wg)(),(0,o.j4)(B,{key:a},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{lines:"none",slot:"header"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(s),1)])),_:2},1024),(0,o.Wm)(_,{class:"number-badge",mode:"ios",color:"light",slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.length),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(D,{slot:"content"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t,(t=>((0,o.wg)(),(0,o.j4)(I,{onClick:e=>f.isLectureAvailable(t)?f.goToLecture(t):f.showPurchaseActions(t),key:t.id,button:"",detail:"","detail-icon":f.isLectureAvailable(t)?e.chevronBack:e.lockClosed,lines:"none",class:"lecture"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{src:"https://elsaify.elameed.education/elsefy/"+t.img},null,8,["src"])])),_:2},1024),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["onClick","detail-icon"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])):"homeworks"===e.segment?((0,o.wg)(),(0,o.iD)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.homeworks.sort(f.sortCourses),(e=>((0,o.wg)(),(0,o.j4)(L,{"is-lecture":"",dense:"",invert:"",package:"",class:"course",course:e,key:e.id},null,8,["course"])))),128))])):(0,o.kq)("",!0)])),_:1})]))])),_:1})])])),_:1})])),_:1})}var w=s(9490),f=s(8903),k=s(9669),y=s.n(k),W=s(2319),v=s(9865);const C=s(276);var b={mounted(){this.getCourses()},data:()=>({loading:!0,homeworks:[],lectures:[],homeworksError:!1,lecturesError:!1,error:!1,sortWords:["الاول","الأول","الثاني","الثانى","الثالث","الرابع","الخامس"],lockClosed:f.Ml6,chevronBack:f.Mny,segment:"lectures"}),methods:{groupBy:C,segmentChanged(e){e.preventDefault(),this.segment=e.detail.value},sortCourses(e,t){return this.sortWords.findIndex((t=>e.text.includes(t)))-this.sortWords.findIndex((e=>t.text.includes(e)))},isLectureAvailable(e){return e.countC>0||"0.00"==e.money},async showPurchaseActions(e){const t=await w.BO.create({subHeader:"اختار طريقة التفعيل",header:"تفعيل: "+e.title,buttons:[{text:"رصيد المحفظة",icon:f.gUi,handler:()=>{this.useWallet(e)}},{text:"الكيو ار",icon:f.Vf3,handler:()=>{this.useQR(e)}}]});await t.present()},async useWallet(e){const t=await w.G0.create({message:"استنى نفعل من المحفظة"});await t.present();const s=y().create({headers:{Authentication:"Bearer "+(0,v.a)().token}});s.get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseWallet?courseId="+e.id,{crossdomain:!0}).then((s=>{200==s.data.code?this.goToLecture(e):w.Cl.create({header:"مشكلة !",message:"رصيد محفظتك مش كفاية",buttons:["تمام"],mode:"ios"}).then((e=>{e.present()})),t.dismiss()})).catch((e=>{console.error(e),w.Cl.create({header:"مشكلة !",message:"رصيد محفظتك مش كفاية",buttons:["تمام"],mode:"ios"}).then((e=>{e.present()})),t.dismiss()}))},async useQR(e){const t=await w.Cl.create({header:e.title,message:"اعمل اسكان للكيو ار بتليفونك و دخل الكود اللي طلع هنا",inputs:[{name:"code",placeholder:"كود الكيو ار",type:"text"}],buttons:[{text:"الغاء",role:"cancel",cssClass:"secondary"},{text:"تأكيد",handler:async t=>{const s=await w.G0.create({message:"استنى نفعل الكود"});await s.present();const o=y().create({headers:{Authentication:"Bearer "+(0,v.a)().token}});o.get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseCode?courseId="+e.id+"&code="+t.code,{crossdomain:!0}).then((t=>{200==t.data.code?this.goToLecture(e):w.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((t=>{t.present(),t.onDidDismiss().then((()=>{this.useQR(e)}))})),s.dismiss()})).catch((t=>{console.error(t),w.Cl.create({header:"مشكلة !",message:"الكود مش مظبوط",buttons:["تمام"],mode:"ios"}).then((t=>{t.present(),t.onDidDismiss().then((()=>{this.useQR(e)}))})),s.dismiss()}))}}],mode:"ios"});await t.present();const{role:s}=await t.onDidDismiss();console.log("onDidDismiss resolved with role",s)},getCourses(){this.error=!1,this.loading=!0,Promise.all([y().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=1&sub=0&type=0",{crossdomain:!0}),y().get("https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=0",{crossdomain:!0})]).then((e=>{console.log(e),200==e[0].data.code?this.homeworks=e[0].data.data:this.homeworksError=!0,200==e[1].data.code?this.lectures=e[1].data.data:this.lecturesError=!0,this.loading=!1})).catch((e=>{console.error(e),this.error=!0,this.loading=!1}))},goToLecture(e){this.$router.push({path:"/lecture",query:{id:e.id,title:e.title,type:e.type}})}},components:{IonContent:w.W2,IonPage:w._i,CourseTile:W.Z,IonSpinner:w.PQ,IonImg:w.Xz,IonText:w.yW,IonButton:w.YG,IonSegment:w.cJ,IonSegmentButton:w.GO,IonCard:w.PM,IonAccordion:w.We,IonAccordionGroup:w.eh,IonItem:w.Ie,IonLabel:w.Q$,IonBadge:w.yp,IonAvatar:w.BJ,IonList:w.q_}},_=s(3744);const I=(0,_.Z)(b,[["render",h],["__scopeId","data-v-1632befa"]]);var x=I}}]);
//# sourceMappingURL=374.233d5aad.js.map