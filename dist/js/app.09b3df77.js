(function(){"use strict";var e={9676:function(e,t,n){var r={};n.r(r),n.d(r,{IconArrow:function(){return G},IconArrowSlider:function(){return Me},IconClose:function(){return be},IconFork:function(){return re},IconHome:function(){return N},IconLoading:function(){return Oe},IconSignout:function(){return we},IconStar:function(){return de}});var o=n(9242),i=n(7139),s=(n(8858),n(1318),n(3228),n(1076));const a="https://api.github.com",c=({url:e,method:t="get",data:n={},headers:r={}})=>(0,s.Z)({url:e,method:t,data:n,baseURL:a,headers:r}),l=e=>e<10?`0${e}`:e,d=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),o=[r.getFullYear(),l(r.getMonth()+1),l(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${o}`),c({url:`/search/repositories?${t}`}).then((e=>(console.log("Response:",e),e))).catch((e=>{throw console.error("Error:",e),e}))},u=e=>c({url:`/repos/${e}/readme`,headers:{Accept:"application/vnd.github.v3.html+json"}}).then((e=>(console.log("Response:",e),e))).catch((e=>{throw console.error("Error:",e),e})),p={namespaced:!0,state:{data:{},loading:!1,error:""},mutations:{setItemsData(e,t){e.data=t},setLoading(e,t){e.loading=t},setError(e,t){e.error=t},setReadme(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},actions:{async fetchTrendings(e){e.commit("setLoading",!0);try{const{data:t}=await d();this.data=t.items,e.commit("setItemsData",t.items),e.commit("setError","")}catch(t){e.commit("setError",t)}finally{e.commit("setLoading",!1)}},async fetchReadme(e,{id:t,fullName:n}){const r=e.getters.getRepoById(t);if(!r.readme){e.commit("setLoading",!0);try{const{data:r}=await u(n);e.commit("setReadme",{id:t,content:r}),e.commit("setError","")}catch(o){e.commit("setReadme",{id:t,content:""}),e.commit("setError",o)}finally{e.commit("setLoading",!1)}}}}};var m=(0,i.MT)({state:{currentSlide:0},getters:{},mutations:{setCurrentSlide(e,t){e.currentSlide=t}},actions:{setCurrentSlide(e,t){e.commit("setCurrentSlide",t)}},modules:{trendings:p}}),v=n(3396);function g(e,t,n,r,o,i){const s=(0,v.up)("router-view");return(0,v.wg)(),(0,v.j4)(s)}var C={name:"App"},w=n(89);const h=(0,w.Z)(C,[["render",g]]);var f=h,L=n(2483);const _=e=>((0,v.dD)("data-v-ca964d48"),e=e(),(0,v.Cn)(),e),S={class:"icons"},y=_((()=>(0,v._)("div",{class:"avatar"},null,-1))),b={class:"stories"},I={class:"g-container"},D={key:0,class:"preload"};function k(e,t,n,r,o,i){const s=(0,v.up)("LogoView"),a=(0,v.up)("IconView"),c=(0,v.up)("StoryUserItem"),l=(0,v.up)("TopLine"),d=(0,v.up)("RepositoryPreview"),u=(0,v.up)("PostPreview");return(0,v.wg)(),(0,v.iD)("div",null,[(0,v.Wm)(l,null,{headline:(0,v.w5)((()=>[(0,v.Wm)(s),(0,v._)("div",S,[(0,v.Wm)(a,{name:"IconHome"}),y,(0,v.Wm)(a,{name:"IconSignout"})])])),content:(0,v.w5)((()=>[(0,v._)("ul",b,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(e.trendings.data,((e,t)=>((0,v.wg)(),(0,v.iD)("li",{class:"stories-item",key:e.id},[(0,v.Wm)(c,{avatar:e.owner.avatar_url,username:e.owner.login,onOnClick:e=>i.handleUserItemClick(t)},null,8,["avatar","username","onOnClick"])])))),128))])])),_:1}),(0,v._)("div",I,[e.trendings.loading?((0,v.wg)(),(0,v.iD)("div",D,"Loading...")):Object.keys(e.trendings.data).length?((0,v.wg)(!0),(0,v.iD)(v.HY,{key:1},(0,v.Ko)(e.trendings.data,(e=>((0,v.wg)(),(0,v.iD)("div",{class:"posts-list",key:e.id},[(0,v.Wm)(u,{avatar:e.owner.avatar_url,username:e.owner.login,date:e.created_at},{repository:(0,v.w5)((()=>[(0,v.Wm)(d,{title:e.name,description:e.description,starCount:e.stargazers_count,forkCount:e.forks},null,8,["title","description","starCount","forkCount"])])),_:2},1032,["avatar","username","date"])])))),128)):(0,v.kq)("",!0)])])}n(560);var Z=n(2268);const V={class:"g-container"},x={class:"headline"},O={key:0,class:"content"};function P(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("div",{class:(0,Z.C_)(["c-topline",{transparent:n.transparent}])},[(0,v._)("div",V,[(0,v._)("div",x,[(0,v.WI)(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?((0,v.wg)(),(0,v.iD)("div",O,[(0,v.WI)(e.$slots,"content",{},void 0,!0)])):(0,v.kq)("",!0)])],2)}var T={name:"TopLine",props:{transparent:{type:Boolean,default:!1}}};const B=(0,w.Z)(T,[["render",P],["__scopeId","data-v-6a5bd8ee"]]);var R=B;function W(e,t,n,r,o,i){return(0,v.wg)(),(0,v.j4)((0,v.LL)(n.name),{class:"icon"})}const H={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M=(0,v._)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),j=[M];function $(e,t){return(0,v.wg)(),(0,v.iD)("svg",H,j)}const q={},A=(0,w.Z)(q,[["render",$]]);var N=A;const F={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U=(0,v._)("path",{d:"M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033 10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966 9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814 9.9568 12.7996 10.2603Z",fill:"currentColor"},null,-1),z=[U];function E(e,t){return(0,v.wg)(),(0,v.iD)("svg",F,z)}const Y={},K=(0,w.Z)(Y,[["render",E]]);var G=K;const X={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J=(0,v._)("g",{id:"repo-forked"},[(0,v._)("path",{id:"Vector","fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z",fill:"currentColor"})],-1),Q=[J];function ee(e,t){return(0,v.wg)(),(0,v.iD)("svg",X,Q)}const te={},ne=(0,w.Z)(te,[["render",ee]]);var re=ne;const oe={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ie=(0,v._)("g",{id:"star"},[(0,v._)("path",{id:"Vector","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"currentColor"})],-1),se=[ie];function ae(e,t){return(0,v.wg)(),(0,v.iD)("svg",oe,se)}const ce={},le=(0,w.Z)(ce,[["render",ae]]);var de=le;const ue={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=(0,v._)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),me=[pe];function ve(e,t){return(0,v.wg)(),(0,v.iD)("svg",ue,me)}const ge={},Ce=(0,w.Z)(ge,[["render",ve]]);var we=Ce;const he={preserveAspectRatio:"none",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fe=(0,v._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),Le=[fe];function _e(e,t){return(0,v.wg)(),(0,v.iD)("svg",he,Le)}const Se={},ye=(0,w.Z)(Se,[["render",_e]]);var be=ye;const Ie={viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},De=(0,v._)("g",{id:"icon"},[(0,v._)("path",{id:"Icon","fill-rule":"evenodd","clip-rule":"evenodd",d:"M49.4296 31.0006C49.4296 20.8225 41.1787 12.5715 31.0005 12.5715C30.1721 12.5715 29.5005 11.9 29.5005 11.0715C29.5005 10.2431 30.1721 9.57153 31.0005 9.57153C42.8355 9.57153 52.4296 19.1657 52.4296 31.0006C52.4296 42.8356 42.8355 52.4298 31.0005 52.4298C19.1656 52.4298 9.57143 42.8356 9.57143 31.0006C9.57143 30.1722 10.243 29.5006 11.0714 29.5006C11.8999 29.5006 12.5714 30.1722 12.5714 31.0006C12.5714 41.1788 20.8224 49.4298 31.0005 49.4298C41.1787 49.4298 49.4296 41.1788 49.4296 31.0006Z",fill:"currentColor"})],-1),ke=[De];function Ze(e,t){return(0,v.wg)(),(0,v.iD)("svg",Ie,ke)}const Ve={},xe=(0,w.Z)(Ve,[["render",Ze]]);var Oe=xe;const Pe={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=(0,v._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),Be=[Te];function Re(e,t){return(0,v.wg)(),(0,v.iD)("svg",Pe,Be)}const We={},He=(0,w.Z)(We,[["render",Re]]);var Me=He,je={name:"IconView",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const $e=(0,w.Z)(je,[["render",W],["__scopeId","data-v-b8239832"]]);var qe=$e;const Ae={class:"avatar"},Ne={class:"img-wrapper"},Fe=["src"],Ue={class:"username"};function ze(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("button",{class:"c-story-user-item",onClick:t[0]||(t[0]=t=>e.$emit("onClick"))},[(0,v._)("div",Ae,[(0,v._)("div",Ne,[(0,v._)("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,Fe)])]),(0,v._)("div",Ue,(0,Z.zw)(n.username),1)])}var Ee={name:"StoryUserItem",props:{avatar:{type:String,required:!0},username:{type:String,required:!0}},emits:["onClick"]};const Ye=(0,w.Z)(Ee,[["render",ze],["__scopeId","data-v-4afd5cf3"]]);var Ke=Ye;const Ge={class:"c-post"},Xe={class:"date"};function Je(e,t,n,r,o,i){const s=(0,v.up)("UserItem"),a=(0,v.up)("CommentsList");return(0,v.wg)(),(0,v.iD)("div",Ge,[(0,v.Wm)(s,{avatar:n.avatar,username:n.username},null,8,["avatar","username"]),(0,v.WI)(e.$slots,"repository",{},void 0,!0),n.comments?((0,v.wg)(),(0,v.j4)(a,{key:0,comments:n.comments},null,8,["comments"])):(0,v.kq)("",!0),(0,v._)("div",Xe,(0,Z.zw)(i.formattedDate),1)])}const Qe={class:"c-comments"},et={key:0,class:"comments-list"},tt={class:"username"},nt={class:"text"};function rt(e,t,n,r,o,i){const s=(0,v.up)("TogglerButton");return(0,v.wg)(),(0,v.iD)("div",Qe,[(0,v.Wm)(s,{onOnToggle:i.toggle},null,8,["onOnToggle"]),o.shown?((0,v.wg)(),(0,v.iD)("ul",et,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(n.comments,(e=>((0,v.wg)(),(0,v.iD)("li",{class:"comment",key:e.id},[(0,v._)("span",tt,(0,Z.zw)(e.username),1),(0,v._)("span",nt,(0,Z.zw)(e.text),1)])))),128))])):(0,v.kq)("",!0)])}const ot={class:"text"},it={class:"icon"};function st(e,t,n,r,o,i){const s=(0,v.up)("IconView");return(0,v.wg)(),(0,v.iD)("button",{class:(0,Z.C_)(["toggler",{active:o.isOpened}]),onClick:t[0]||(t[0]=(...e)=>i.toggle&&i.toggle(...e))},[(0,v._)("span",ot,(0,Z.zw)(o.isOpened?"Hide":"Show")+" issues",1),(0,v._)("span",it,[(0,v.Wm)(s,{name:"IconArrow"})])],2)}var at={name:"TogglerButton",components:{IconView:qe},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const ct=(0,w.Z)(at,[["render",st],["__scopeId","data-v-91e21796"]]);var lt=ct,dt={components:{TogglerButton:lt},props:{comments:{type:Object}},data(){return{shown:!1}},methods:{toggle(e){this.shown=e}}};const ut=(0,w.Z)(dt,[["render",rt],["__scopeId","data-v-63e7a143"]]);var pt=ut;const mt={class:"avatar"},vt={class:"img-wrapper"},gt=["src"],Ct={class:"username"};function wt(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("div",{class:(0,Z.C_)(["c-user-item",{small:n.isSmall}])},[(0,v._)("div",mt,[(0,v._)("div",vt,[(0,v._)("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,gt)])]),(0,v._)("div",Ct,(0,Z.zw)(n.username),1)],2)}var ht={name:"UserItem",props:{avatar:{type:String,required:!0},username:{type:String,required:!0},isSmall:{type:Boolean}}};const ft=(0,w.Z)(ht,[["render",wt],["__scopeId","data-v-168af242"]]);var Lt=ft,_t={name:"PostPreview",props:{avatar:{type:String,required:!0},username:{type:String,required:!0},comments:{type:Array},date:{type:String}},components:{CommentsList:pt,UserItem:Lt},computed:{formattedDate(){return this.formatDateString(this.date)}},methods:{formatDateString(e){const t={day:"numeric",month:"long"},n=new Date(e);return n.toLocaleDateString("en-US",t)}}};const St=(0,w.Z)(_t,[["render",Je],["__scopeId","data-v-32144265"]]);var yt=St;const bt={class:"c-repository"},It={class:"title"},Dt={class:"description"},kt={class:"details-container"};function Zt(e,t,n,r,o,i){const s=(0,v.up)("PostStats");return(0,v.wg)(),(0,v.iD)("div",bt,[(0,v._)("h2",It,(0,Z.zw)(n.title),1),(0,v._)("p",Dt,(0,Z.zw)(n.description),1),(0,v._)("div",kt,[(0,v.Wm)(s,{label:"Star",iconName:"IconStar",count:n.starCount},null,8,["count"]),(0,v.Wm)(s,{label:"Fork",iconName:"IconFork",count:n.forkCount},null,8,["count"])])])}const Vt={class:"count-button"},xt={class:"button"},Ot={class:"count"};function Pt(e,t,n,r,o,i){const s=(0,v.up)("IconView");return(0,v.wg)(),(0,v.iD)("div",Vt,[(0,v._)("div",xt,[n.iconName?((0,v.wg)(),(0,v.j4)(s,{key:0,name:n.iconName},null,8,["name"])):(0,v.kq)("",!0),(0,v._)("span",null,(0,Z.zw)(n.label),1)]),(0,v._)("div",Ot,(0,Z.zw)(n.count),1)])}var Tt={name:"PostStats",components:{IconView:qe},props:{label:{type:String,required:!0},iconName:{type:String},count:{type:[String,Number],default:0}}};const Bt=(0,w.Z)(Tt,[["render",Pt],["__scopeId","data-v-42b96ccc"]]);var Rt=Bt,Wt={name:"RepositoryPreview",components:{PostStats:Rt},props:{title:{type:String,required:!0},description:{type:String,default:""},starCount:{type:[String,Number],default:0},forkCount:{type:[String,Number],default:0}}};const Ht=(0,w.Z)(Wt,[["render",Zt],["__scopeId","data-v-365a3310"]]);var Mt=Ht;function jt(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("h1",{class:(0,Z.C_)(["logo",{white:n.white}])},"Gitogram /",2)}var $t={props:{white:{type:Boolean}}};const qt=(0,w.Z)($t,[["render",jt],["__scopeId","data-v-52d0f47a"]]);var At=qt,Nt={name:"HomeFeedsPage",components:{TopLine:R,IconView:qe,StoryUserItem:Ke,PostPreview:yt,RepositoryPreview:Mt,LogoView:At},computed:{...(0,i.rn)({trendings:e=>e.trendings,currentSlide:e=>e.currentSlide})},methods:{...(0,i.nv)({fetchTrendings:"trendings/fetchTrendings",setCurrentSlide:"setCurrentSlide"}),async handleUserItemClick(e){this.setCurrentSlide(e),this.$router.push({name:"stories"})}},async created(){this.fetchTrendings()}};const Ft=(0,w.Z)(Nt,[["render",k],["__scopeId","data-v-ca964d48"]]);var Ut=Ft;const zt={class:"wrapper"},Et={class:"close-btn"},Yt={class:"content"};function Kt(e,t,n,r,o,i){const s=(0,v.up)("LogoView"),a=(0,v.up)("IconView"),c=(0,v.up)("TopLine"),l=(0,v.up)("StoriesSlider");return(0,v.wg)(),(0,v.iD)("div",zt,[(0,v.Wm)(c,{transparent:""},{headline:(0,v.w5)((()=>[(0,v._)("button",{class:"logo",onClick:t[0]||(t[0]=(...e)=>i.redirectToHome&&i.redirectToHome(...e))},[(0,v.Wm)(s,{white:!0})]),(0,v._)("button",Et,[(0,v.Wm)(a,{name:"IconClose",onClick:i.redirectToHome},null,8,["onClick"])])])),_:1}),(0,v._)("div",Yt,[(0,v.Wm)(l,{initSlide:Number(n.initSlide)},null,8,["initSlide"])])])}const Gt={class:"c-stories-slider"},Xt={class:"stories-container",ref:"slider"};function Jt(e,t,n,r,o,i){const s=(0,v.up)("SliderItem");return(0,v.wg)(),(0,v.iD)("div",Gt,[(0,v._)("div",Xt,[((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(e.trendings.data,((t,n)=>((0,v.wg)(),(0,v.j4)(s,{data:t,key:t.id,active:e.currentSlide==n,btnsShown:i.activeBtns,onOnNextSlide:e=>i.handleSlide(n+1),onOnPrevSlide:e=>i.handleSlide(n-1)},null,8,["data","active","btnsShown","onOnNextSlide","onOnPrevSlide"])))),128))],512)])}const Qt={class:"top-container"},en={class:"user-wrapper"},tn={class:"middle-container"},nn={class:"content-wrapper"},rn={key:0,class:"loader"},on=["innerHTML"],sn={class:"bottom-container"},an={class:"button-wrapper"},cn={key:0,class:"buttons"},ln={class:"slider-icon"},dn={class:"slider-icon"};function un(e,t,n,r,o,i){const s=(0,v.up)("ProgressBar"),a=(0,v.up)("UserItem"),c=(0,v.up)("SpinnerView"),l=(0,v.up)("PlaceholderView"),d=(0,v.up)("DefaultButton"),u=(0,v.up)("IconView");return(0,v.wg)(),(0,v.iD)("div",{class:(0,Z.C_)(["c-slider-item",{active:n.active}])},[(0,v._)("div",Qt,[(0,v.Wm)(s,{active:n.active},null,8,["active"]),(0,v._)("div",en,[(0,v.Wm)(a,{avatar:n.data.owner?.avatar_url,username:n.data.owner?.login,isSmall:!0},null,8,["avatar","username"])])]),(0,v._)("div",tn,[(0,v._)("div",nn,[n.loading?((0,v.wg)(),(0,v.iD)("div",rn,[(0,v.Wm)(c)])):(0,v.kq)("",!0),n.data.readme&&!n.loading?((0,v.wg)(),(0,v.iD)("div",{key:1,innerHTML:n.data.readme,class:"content"},null,8,on)):((0,v.wg)(),(0,v.j4)(l,{key:2,paragraphs:2}))])]),(0,v._)("div",sn,[(0,v._)("div",an,[(0,v.Wm)(d)])]),n.active?((0,v.wg)(),(0,v.iD)("div",cn,[n.btnsShown.includes("prev")?((0,v.wg)(),(0,v.iD)("button",{key:0,class:"btn btn-left",onClick:t[0]||(t[0]=t=>e.$emit("onPrevSlide"))},[(0,v._)("span",ln,[(0,v.Wm)(u,{name:"IconArrowSlider"})])])):(0,v.kq)("",!0),n.btnsShown.includes("next")?((0,v.wg)(),(0,v.iD)("button",{key:1,class:"btn btn-right",onClick:t[1]||(t[1]=t=>e.$emit("onNextSlide"))},[(0,v._)("span",dn,[(0,v.Wm)(u,{name:"IconArrowSlider"})])])):(0,v.kq)("",!0)])):(0,v.kq)("",!0)],2)}const pn={class:"c-button"};function mn(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("button",pn,(0,Z.zw)(n.textContent||"Follow"),1)}var vn={name:"DefaultButton",props:{textContent:{type:String}}};const gn=(0,w.Z)(vn,[["render",mn],["__scopeId","data-v-f56292c2"]]);var Cn=gn;const wn={ref:"progressLine",class:"progress-line"};function hn(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("div",{class:(0,Z.C_)(["c-progressbar",{active:o.active}])},[(0,v._)("div",wn,null,512)],2)}var fn={name:"ProgressBar",data(){return{active:!1}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){this.$refs.progressLine.addEventListener("transitionend",this.emitOnFinish),this.$nextTick((()=>{this.active=!0}))},beforeUnmount(){this.$refs.progressLine.removeEventListener("transitionend",this.emitOnFinish)}};const Ln=(0,w.Z)(fn,[["render",hn],["__scopeId","data-v-1baebaf6"]]);var _n=Ln;const Sn=e=>((0,v.dD)("data-v-a2be20ca"),e=e(),(0,v.Cn)(),e),yn={class:"c-placeholder"},bn=Sn((()=>(0,v._)("div",{class:"image-placeholder"},null,-1))),In=Sn((()=>(0,v._)("div",{class:"string"},null,-1))),Dn=Sn((()=>(0,v._)("div",{class:"string"},null,-1))),kn=Sn((()=>(0,v._)("div",{class:"string"},null,-1))),Zn=[In,Dn,kn];function Vn(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("div",yn,[bn,((0,v.wg)(!0),(0,v.iD)(v.HY,null,(0,v.Ko)(n.paragraphs,((e,t)=>((0,v.wg)(),(0,v.iD)("div",{key:t,class:"paragraph-placeholder"},Zn)))),128))])}var xn={name:"PlaceholderView",props:{paragraphs:{type:[Number,String],default:1}}};const On=(0,w.Z)(xn,[["render",Vn],["__scopeId","data-v-a2be20ca"]]);var Pn=On;const Tn={class:"c-spinner"};function Bn(e,t,n,r,o,i){return(0,v.wg)(),(0,v.iD)("div",Tn)}var Rn={name:"SpinnerView"};const Wn=(0,w.Z)(Rn,[["render",Bn]]);var Hn=Wn,Mn={name:"SliderItem",components:{SpinnerView:Hn,DefaultButton:Cn,UserItem:Lt,ProgressBar:_n,PlaceholderView:Pn,IconView:qe},props:{active:Boolean,loading:Boolean,btnsShown:{type:Array,default:()=>["prev","next"],validator(e){return e.every((e=>"next"===e||"prev"===e))}},data:{type:Object,default:()=>({})}}};const jn=(0,w.Z)(Mn,[["render",un],["__scopeId","data-v-005d07bd"]]);var $n=jn,qn={name:"StoriesSlider",components:{SliderItem:$n},data(){return{}},computed:{...(0,i.rn)({trendings:e=>e.trendings,currentSlide:e=>e.currentSlide}),activeBtns(){return 0===this.currentSlide?["next"]:this.currentSlide===this.trendings.data.length-1?["prev"]:["prev","next"]}},methods:{...(0,i.nv)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme",setCurrentSlide:"setCurrentSlide"}),async fetchReadmeForActiveSlide(){const e=this.trendings.data[this.currentSlide]?.full_name,t=this.trendings.data[this.currentSlide]?.id;await this.fetchReadme({id:t,fullName:e})},async handleSlide(e){this.setCurrentSlide(e);const{slider:t}=this.$refs,n=388;this.sliderPosition=-n*e,t.style.transform=`translateX(${this.sliderPosition}px)`,await this.loadReadme()},async loadReadme(){await this.fetchReadmeForActiveSlide()}},async created(){await this.fetchTrendings()},async mounted(){await this.handleSlide(this.currentSlide)}};const An=(0,w.Z)(qn,[["render",Jt],["__scopeId","data-v-01f6bbfe"]]);var Nn=An,Fn={name:"StoriesPage",components:{IconView:qe,LogoView:At,StoriesSlider:Nn,TopLine:R},props:{initSlide:{type:[Number,String],default:0}},methods:{redirectToHome(){this.$router.push("/")}}};const Un=(0,w.Z)(Fn,[["render",Kt],["__scopeId","data-v-5ae2c0cb"]]);var zn=Un,En=[{path:"/",component:Ut,name:"home"},{path:"/stories",component:zn,name:"stories",props:e=>({initSlide:e.query.initSlide})}],Yn=(0,L.p7)({history:(0,L.r5)(),routes:En});const Kn=(0,o.ri)(f);Kn.use(Yn),Kn.use(m),Kn.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkvue_gitogram"]=self["webpackChunkvue_gitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9676)}));r=n.O(r)})();
//# sourceMappingURL=app.09b3df77.js.map