var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))n.call(t,a)&&l(e,a,t[a]);return e},d=(e,s)=>t(e,a(s));import{o as r,c,w as u,a as p,u as f,D as v,N as k,S as m,b as h,t as _,d as y,e as b,p as g,f as w,g as T,r as O,h as x,i as I,j as E,B as j,k as D,l as N,m as S,n as F,q as C,s as P,v as U,x as L,y as R,z,A as B,C as J,E as M,F as q,G as A,H as G,I as H,J as K,K as W}from"./vendor.1f069845.js";const Q=h("完成"),V=h("删除"),X={props:{task:Object,taskIndex:Number},emits:["delete","edit","finish"],setup(e,{emit:t}){const a=e=>{const{activeIndex:a}=e;2===a?(t("delete"),e.destroy()):0===a&&(t("finish"),e.destroy())},s=e=>{t("edit")};return(t,i)=>(r(),c(f(b),{class:"task-item-wrapper"},{prefix:u((()=>[p(f(k),{size:"16"},{default:u((()=>[p(f(v))])),_:1})])),default:u((()=>[p(f(y),{"initial-slide":1,"slides-per-view":1,"resistance-ratio":.75,speed:200,onTransitionEnd:a},{default:u((()=>[p(f(m),{class:"finish-slide"},{default:u((()=>[Q])),_:1}),p(f(m),{class:"content-slide",onClick:s},{default:u((()=>[h(_(e.task.content),1)])),_:1}),p(f(m),{class:"delete-slide"},{default:u((()=>[V])),_:1})])),_:1},8,["resistance-ratio"])])),_:1}))}};const Y=C();g("data-v-22e5678c");const Z=h(" 请添加待办任务 "),$={class:"extra"},ee=h(" 添加 "),te=p("div",null,"添加任务",-1),ae=h("添加"),se=p("div",null,"编辑任务",-1),ie=h("确定");w();const ne={setup(e){const t={content:"",status:"INCOMPLETE"},a=P(),s=T((()=>a.state.list));let i=O(!1),n=O(!1),l=O(t.content),u=O(t.content),v=O(0);const k=()=>{a.commit("addTask",d(o({},t),{id:U(),content:l.value})),i.value=!1,l.value=""},m=()=>{let e=d(o({},t),{id:U(),content:u.value});a.commit("updateTask",{idx:v.value,task:e}),n.value=!1};return(e,t)=>(r(),c("div",null,[p(f(N),{vertical:""},{default:Y((()=>[f(s).length?(r(),c(f(x),{key:0},{default:Y((()=>[p(f(I),{list:f(s),onStart:t[1]||(t[1]=t=>e.drag=!0),onEnd:t[2]||(t[2]=t=>e.drag=!1),"item-key":"id"},{item:Y((({index:e,element:t})=>[p(X,{taskIndex:e,task:t,onDelete:()=>(e=>{a.commit("deleteTask",e)})(e),onFinish:()=>(e=>{a.commit("finishTask",e)})(e),onEdit:()=>{return a=e,s=t.content,n.value=!0,u.value=s,void(v.value=a);var a,s}},null,8,["taskIndex","task","onDelete","onFinish","onEdit"])])),_:1},8,["list"])])),_:1})):(r(),c(f(E),{key:1},{default:Y((()=>[Z])),_:1})),p("div",$,[p(f(j),{onClick:t[3]||(t[3]=e=>D(i)?i.value=!0:i=!0)},{default:Y((()=>[ee])),_:1})])])),_:1}),p(f(F),{show:f(i),"onUpdate:show":t[5]||(t[5]=e=>D(i)?i.value=e:i=e),preset:"dialog",title:"Dialog","show-icon":!1},{header:Y((()=>[te])),action:Y((()=>[p(f(j),{onClick:k},{default:Y((()=>[ae])),_:1})])),default:Y((()=>[p("div",null,[p(f(S),{value:f(l),"onUpdate:value":t[4]||(t[4]=e=>D(l)?l.value=e:l=e),type:"input",placeholder:"请填写任务信息..."},null,8,["value"])])])),_:1},8,["show"]),p(f(F),{show:f(n),"onUpdate:show":t[7]||(t[7]=e=>D(n)?n.value=e:n=e),preset:"dialog",title:"Dialog","show-icon":!1},{header:Y((()=>[se])),action:Y((()=>[p(f(j),{onClick:m},{default:Y((()=>[ie])),_:1})])),default:Y((()=>[p("div",null,[p(f(S),{value:f(u),"onUpdate:value":t[6]||(t[6]=e=>D(u)?u.value=e:u=e),type:"input",placeholder:"请填写任务信息..."},null,8,["value"])])])),_:1},8,["show"])]))},__scopeId:"data-v-22e5678c"};const le=h("回档"),oe=h("回档"),de={props:{task:Object,taskIndex:Number},emits:["back"],setup(e,{emit:t}){const a=e=>{const{activeIndex:a}=e;(2===a||0===a)&&(t("back"),e.destroy())};return(t,s)=>(r(),c(f(b),{class:"task-item-wrapper"},{prefix:u((()=>[p(f(k),{size:"16"},{default:u((()=>[p(f(v))])),_:1})])),default:u((()=>[p(f(y),{"initial-slide":1,"slides-per-view":1,"resistance-ratio":.75,speed:200,onTransitionEnd:a},{default:u((()=>[p(f(m),{class:"back-slide"},{default:u((()=>[le])),_:1}),p(f(m),{class:"content-slide"},{default:u((()=>[h(_(e.task.content),1)])),_:1}),p(f(m),{class:"back1-slide"},{default:u((()=>[oe])),_:1})])),_:1},8,["resistance-ratio"])])),_:1}))}};const re=C(),ce={setup(e){const t=P(),a=T((()=>t.state.finish));return(e,s)=>(r(),c(f(N),{vertical:""},{default:re((()=>[f(a).length?(r(),c(f(x),{key:0},{default:re((()=>[p(f(I),{list:f(a),onStart:s[1]||(s[1]=t=>e.drag=!0),onEnd:s[2]||(s[2]=t=>e.drag=!1),"item-key":"id"},{item:re((({index:e,element:a})=>[p(de,{taskIndex:e,task:a,onBack:()=>(e=>{t.commit("backTask",e)})(e)},null,8,["taskIndex","task","onBack"])])),_:1},8,["list"])])),_:1})):L("",!0)])),_:1}))},__scopeId:"data-v-4b7697da"};var ue=R({history:z(),routes:[{path:"/",name:"main",component:ne},{path:"/archive",name:"archive",component:ce},{path:"/:pathMatch(.*)",redirect:"/"}]});const pe=B({state:()=>({list:[],finish:[]}),mutations:{addTask(e,t){e.list.unshift(t)},updateTask(e,t){e.list[t.idx]=t.task},updateTasks(e,t){console.log(t),e.list=t},updateFinishTasks(e,t){console.log(t),e.finish=t},deleteTask(e,t){e.list.splice(t,1)},finishTask(e,t){e.finish.unshift(e.list[t]),pe.commit("deleteTask",t)},backTask(e,t){e.list.unshift(e.finish[t]),pe.commit("deleteFinishTask",t)},deleteFinishTask(e,t){e.finish.splice(t,1)}}});const fe=C();g("data-v-468c60c3");const ve={id:"app"},ke=p("h1",null,"mini TO-DO",-1),me=h("首页"),he=h("归档页");w();const _e={setup(e){const t=P();return J((()=>{let e=localStorage.getItem("myData");e&&(e=JSON.parse(e),t.commit("updateTasks",e[0]),t.commit("updateFinishTasks",e[1]))})),window.onbeforeunload=e=>{let a=[t.state.list,t.state.finish];localStorage.setItem("myData",JSON.stringify(a))},(e,t)=>{const a=G("router-link"),s=G("router-view");return r(),c("div",ve,[p(f(A),null,{default:fe((()=>[p(f(M),null,{default:fe((()=>[ke,p(a,{to:"/"},{default:fe((()=>[p(f(j),null,{default:fe((()=>[me])),_:1})])),_:1}),p(a,{to:"/archive"},{default:fe((()=>[p(f(j),null,{default:fe((()=>[he])),_:1})])),_:1})])),_:1}),p(f(q),null,{default:fe((()=>[p(s)])),_:1})])),_:1})])}},__scopeId:"data-v-468c60c3"};!function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:s}=e;let i,n;if("serviceWorker"in navigator){i=new H("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate||null==s||s()}));{const e=()=>{null==a||a()};i.addEventListener("waiting",e),i.addEventListener("externalwaiting",e)}i.register({immediate:t}).then((e=>n=e))}}({onNeedRefresh(){},onOfflineReady(){}}),W(_e).use(ue).use(pe).mount("#app");
