(this["webpackJsonpnrohan09-cloud.github.io"]=this["webpackJsonpnrohan09-cloud.github.io"]||[]).push([[0],{142:function(e,n,t){},162:function(e,n,t){var r={"./G.A.N.png":[171,4],"./malar-ai.png":[172,5],"./self driving car simulator.png":[173,6],"./smart car.jpeg":[174,7]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=162,e.exports=c},169:function(e,n,t){"use strict";t.r(n);var r,c=t(0),a=t.n(c),i=t(67),o=t.n(i),s=(t(142),t(7)),l=t(61),u=t(11),d=t(10),h={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"dark",accent:"#3586ff",background:"#000",text:"#ffffff"}}},p={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"light",accent:"#104dbe",background:"#ececec",text:"#000"}}};window.data={accent:"",background:""};var j=Object(s.b)(r||(r=Object(d.a)([" \n\n  body{\n    color: ",";\n    background: ",";\n    transition: background 300ms ease-out;\n  }\n\n  a{\n    color: ",";\n    text-decoration: none;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n\n"])),(function(e){return e.theme.colors.main.text}),(function(e){return window.data.accent=e.theme.colors.main.accent,window.data.background=e.theme.colors.main.background,e.theme.colors.main.background}),(function(e){return e.theme.colors.main.accent}));function b(e,n){switch(n.type){case"darkmode":return h;case"lightmode":return p;case"updatehw":return Object(u.a)(Object(u.a)({},e),{},{width:window.innerWidth,height:window.innerHeight});case"toggle":return"dark"===e.colors.main.type?p:h;default:return h}}var m=window.matchMedia("(prefers-color-scheme: dark)");var f=t(19),x=t.n(f),g=t(43),O=t(64),y=t.n(O),v="https://evve.herokuapp.com/api/notion/rohan";function w(){return(w=Object(g.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/general");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(g.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/projects");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(g.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/experience");case 2:return n=e.sent,t=n.data,e.abrupt("return",t.reverse());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(g.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/skills");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(g.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/education");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,n){switch(n.type){case"general":return Object(u.a)(Object(u.a)({},e),{},{general:n.payload});case"experience":return Object(u.a)(Object(u.a)({},e),{},{experiences:n.payload});case"projects":return Object(u.a)(Object(u.a)({},e),{},{projects:n.payload});case"education":return Object(u.a)(Object(u.a)({},e),{},{educations:n.payload});case"skills":return Object(u.a)(Object(u.a)({},e),{},{skills:n.payload})}}var E={general:{},experiences:{},projects:{},educations:{},skills:{},error:!1,getProjectById:function(){}};function F(){var e=Object(c.useReducer)(I,E),n=Object(l.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),s=o[0],d=o[1];return Object(c.useEffect)((function(){(function(){return w.apply(this,arguments)})().then((function(e){return a({type:"general",payload:e})})).catch((function(){return d(!0)})),function(){return k.apply(this,arguments)}().then(function(){var e=Object(g.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,Promise.all(n.map(function(){var e=Object(g.a)(x.a.mark((function e(n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(162)("./"+n.image);case 3:return r=e.sent.default,e.abrupt("return",Object(u.a)(Object(u.a)({},n),{},{image:r}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Object(u.a)(Object(u.a)({},n),{},{image:null}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()));case 3:e.t1=e.sent,e.t2={type:"projects",payload:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),function(){return N.apply(this,arguments)}().then((function(e){return a({type:"experience",payload:e})})),function(){return M.apply(this,arguments)}().then((function(e){return a({type:"skills",payload:e})})),function(){return C.apply(this,arguments)}().then((function(e){return a({type:"education",payload:e})}))}),[]),Object(c.useMemo)((function(){return{rohan:Object(u.a)(Object(u.a)({},r),{},{error:s,getProjectById:function(e){if(r.projects.find)return r.projects.find((function(n){return window.btoa(n.title)===e}))}})}}),[r,s])}var P=t(2),z=Object(c.createContext)({});function D(e){var n,t=e.children,r=function(){var e=Object(c.useReducer)(b,localStorage.getItem("theme")?"dark"===localStorage.getItem("theme")?h:p:m.matches?h:p),n=Object(l.a)(e,2),t=n[0],r=n[1];Object(c.useEffect)((function(){r({type:"updatehw"})}),[]);var a=Object(c.useCallback)((function(){r({type:"toggle"})}),[]);return Object(c.useEffect)((function(){localStorage.setItem("theme",t.colors.main.type)}),[t]),Object(c.useMemo)((function(){return{theme:t,Global:j,toggle:a,dispatch:r}}),[t,a])}(),a=F().rohan;return n=r.theme,Object(c.useEffect)((function(){n&&(console.clear(),console.log("%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/nrohan09-cloud/nrohan09-cloud.github.io","color:".concat(n.colors.main.accent,";font-size:2rem;background:").concat(n.colors.main.background),"color:".concat(n.colors.main.text,";font-size:0.8rem;background:").concat(n.colors.main.background)))}),[n]),Object(P.jsx)(z.Provider,{value:{themer:r,rohan:a},children:Object(P.jsxs)(s.a,{theme:r.theme,children:[Object(P.jsx)(j,{}),t]})})}var S,W,B,L,T,H=t(189),_=t(194),A=t(193),G=t.p+"static/media/default-profile.d5ffa6c3.webp",J=t(126),R=t.n(J),U=t(131),$=t.n(U),q=s.c.div(S||(S=Object(d.a)(["\n  position: fixed;\n  height: ","px;\n  width: ","px;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background 300ms ease-out, color 300ms ease-out;\n\n  & > div {\n    display: flex;\n    align-items: center;\n  }\n  .details {\n    margin-left: 20px;\n    position: relative;\n    h2 {\n      font-weight: 400;\n      line-height: 2rem;\n    }\n    p {\n      line-height: 1.6rem;\n    }\n  }\n"])),(function(e){return e.theme.height}),(function(e){return e.theme.width}));function K(){var e=Object(c.useContext)(z).rohan;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(q,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(V,{err:e.error,loading:!e.general.name}),!!e.general.name&&!e.error&&Object(P.jsxs)(H.a.div,{initial:{opacity:0,y:-10,width:0},animate:{opacity:1,y:0,width:210},className:"details",children:[Object(P.jsx)("h2",{children:e.general.name}),Object(P.jsx)("p",{children:e.general.subtitle}),Object(P.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.general.resume,children:"resume"}),Object(P.jsx)(te,{})]})]})})})}var Q=s.c.div(W||(W=Object(d.a)(["\n  border-radius: 50%;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  border: 1px solid ",";\n  animation: ",";\n  animation: ",";\n\n  @keyframes loading {\n    0%,\n    100% {\n      box-shadow: 0 0 10px 1px ",";\n    }\n    50% {\n      box-shadow: 0 0 0px 0px transparent;\n    }\n  }\n\n  img {\n    width: 120px;\n    height: 120px;\n    object-fit: cover;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.l?"loading 1s infinite":""}),(function(e){return e.err?"loading 1s infinite":""}),(function(e){return e.theme.colors.main.accent}));function V(e){var n=e.loading,t=e.err,r=Object(_.a)();return Object(P.jsx)(Q,{err:t,l:n,children:Object(P.jsx)(H.a.img,{initial:{opacity:0,filter:"blur(10px)"},animate:r,src:G,onLoad:function(){return r.start({opacity:1,filter:"blur(0)"})},alt:"profilephoto"})})}var X,Y,Z=Object(s.c)(H.a.div)(B||(B=Object(d.a)(["\n  display: inline-block;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: ",";\n"])),(function(e){return e.theme.colors.main.accent})),ee=Object(s.c)(Object(H.a)(R.a))(L||(L=Object(d.a)(["\n  cursor: pointer;\n  user-select: none;\n"]))),ne=Object(s.c)(Object(H.a)($.a))(T||(T=Object(d.a)(["\n  cursor: pointer;\n  user-select: none;\n"])));function te(){var e=Object(c.useContext)(z).themer,n=e.theme,t=e.toggle;return Object(P.jsx)(Z,{children:Object(P.jsx)(H.a.div,{whileTap:{x:10},onTap:function(){return t()},className:"theme-toggle",children:Object(P.jsx)(A.a,{children:"dark"===n.colors.main.type?Object(P.jsx)(ee,{exit:{opacity:0,x:10}}):Object(P.jsx)(ne,{exit:{opacity:0,x:10}})})})})}var re=Object(s.c)(H.a.div)(X||(X=Object(d.a)(["\n  background: ",";\n  color: ",";\n  padding: 2rem;\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  border-radius: 20px 20px 0 0;\n\n  h2 {\n    line-height: 2rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function ce(){var e=Object(c.useContext)(z).rohan;return Object(P.jsx)(P.Fragment,{children:!!e.general.name&&!e.error&&Object(P.jsxs)(re,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"About me"}),Object(P.jsx)("p",{children:e.general.aboutme}),Object(P.jsx)("h2",{children:"skills"}),e.skills.length>0&&Object(P.jsx)(ie,{skills:e.skills})]})})}var ae=Object(s.c)(H.a.div)(Y||(Y=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 10px;\n  .skill {\n    background: ",";\n    color: ",";\n    font-weight: 600;\n    border-radius: 1.6rem;\n    padding: 0.5rem 1rem;\n    /* border: 1px solid ","; */\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.accent}));function ie(e){var n=e.skills;return Object(P.jsx)(ae,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:n.map((function(e,n){return Object(P.jsx)(oe,{skill:e},n)}))})}function oe(e){var n=e.skill;return Object(P.jsx)(H.a.div,{className:"skill",children:Object(P.jsx)("span",{children:n.title})})}var se,le,ue=t(190),de=Object(s.c)(H.a.div)(se||(se=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  padding: 2rem;\n  padding-top: 0;\n  h2 {\n    line-height: 2rem;\n    margin-bottom: 10px;\n  }\n  .experience {\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function he(){var e=Object(c.useContext)(z).rohan;return Object(P.jsx)(P.Fragment,{children:!!e.experiences.length&&!e.error&&Object(P.jsxs)(de,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Experience"}),Object(P.jsx)("div",{className:"experience",children:e.experiences.map((function(e){return Object(P.jsx)(me,{exp:e},window.btoa(e.role+e.title))}))})]})})}var pe,je,be=s.c.div(le||(le=Object(d.a)(["\n  background: ",";\n  color: ",";\n  padding: 1.5rem;\n  border-radius: 20px;\n  margin-bottom: 10px;\n\n  .exp-title {\n    font-weight: 600;\n  }\n  .exp-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.accent}));function me(e){var n=e.exp;return Object(P.jsxs)(be,{children:[Object(P.jsx)("p",{className:"exp-date",children:Object(ue.a)(new Date(n.date.start),"MMM yyyy")+" - "+Object(ue.a)(new Date(n.date.end),"MMM yyyy")}),Object(P.jsx)("h2",{className:"exp-title",children:n.title}),Object(P.jsx)("p",{className:"exp-role",children:n.role}),Object(P.jsx)("p",{className:"exp-description",children:n.description}),Object(P.jsx)("div",{className:"links",children:n.links.map((function(e){return Object(P.jsx)("a",{href:e.link,children:e.label},e.link)}))})]})}var fe=Object(s.c)(H.a.div)(pe||(pe=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  padding: 2rem;\n  padding-top: 0;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  h2 {\n    line-height: 2rem;\n    margin-bottom: 10px;\n  }\n  .education {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-gap: 2rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function xe(){var e=Object(c.useContext)(z).rohan;return Object(P.jsx)(P.Fragment,{children:!!e.educations.length&&!e.error&&Object(P.jsxs)(fe,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Education"}),Object(P.jsx)("div",{className:"education",children:e.educations.map((function(e){return Object(P.jsx)(Oe,{edu:e},window.btoa(e.subtitle+e.title))}))})]})})}var ge=s.c.div(je||(je=Object(d.a)(["\n  /* background: ","; */\n  color: ",";\n  /* padding: 1.5rem; */\n  border-radius: 20px;\n\n  .edu-title {\n    font-weight: 600;\n  }\n  .edu-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .edu-description {\n    font-size: 1.2rem;\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.background}));function Oe(e){var n=e.edu;return Object(P.jsxs)(ge,{children:[Object(P.jsx)("p",{className:"exp-date",children:Object(ue.a)(new Date(n.date.start),"MMM yyyy")+" - "+Object(ue.a)(new Date(n.date.end),"MMM yyyy")}),Object(P.jsx)("h2",{className:"edu-title",children:n.title}),Object(P.jsx)("p",{className:"edu-role",children:n.subtitle}),Object(P.jsx)("p",{className:"edu-description",children:n.description})]})}var ye,ve,we=t(80),ke=Object(s.c)(H.a.div)(ye||(ye=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  padding: 2rem;\n  padding-top: 0;\n\n  h2 {\n    line-height: 2rem;\n  }\n  .project {\n    padding-top: 1rem;\n    display: flex;\n\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function Ne(){var e=Object(c.useContext)(z).rohan,n=e.projects&&e.projects.length>0&&e.projects.map((function(e){return Object(P.jsx)(Ie,{pro:e},window.btoa(e.title))}));return Object(P.jsx)(P.Fragment,{children:!!e.projects.length&&!e.error&&Object(P.jsxs)(ke,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Projects"}),Object(P.jsx)("div",{className:"project",children:n})]})})}var Me,Ce=s.c.div(ve||(ve=Object(d.a)(["\n  /* background: ","; */\n  font-size: 1.2rem;\n  /* padding: 1rem; */\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  .pro-title {\n    color: ",";\n    font-weight: 600;\n    text-align: center;\n    font-size: 1.2rem;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    padding: 0.5rem;\n    width: 100%;\n    padding-top: 100px;\n    background: linear-gradient(\n      to top,\n      ",",\n      transparent\n    );\n  }\n  .pro-image {\n    will-change: opacity;\n    width: 200px;\n    height: 200px;\n    @media (max-width: 500px) {\n      width: 100%;\n      object-fit: cover;\n    }\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  /* .pro-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  } */\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.accent}));function Ie(e){var n=e.pro,t=Object(_.a)(),r=window.innerWidth<500;return Object(P.jsx)(we.b,{to:{pathname:"/project/"+window.btoa(n.title),state:Object(u.a)({},n)},children:Object(P.jsxs)(Ce,{onMouseEnter:function(){return!r&&t.start({opacity:1})},onMouseLeave:function(){return!r&&t.start({opacity:0})},children:[Object(P.jsx)(A.a,{children:Object(P.jsx)(H.a.div,{layout:"position",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pro-image",layoutId:"img-"+n.title,children:n.image&&Object(P.jsx)("img",{src:n.image,alt:""})})}),Object(P.jsx)(H.a.h2,{layout:"position",layoutId:n.title,initial:r?{opacity:1}:{opacity:0},animate:t,className:"pro-title",children:n.title})]})})}var Ee=s.c.div(Me||(Me=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  .gap {\n    height: ","px;\n    pointer-events: none;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.height-100}));function Fe(){return Object(P.jsxs)(Ee,{children:[Object(P.jsx)(K,{}),Object(P.jsx)("div",{className:"gap"}),Object(P.jsx)(ce,{}),Object(P.jsx)(Ne,{}),Object(P.jsx)(xe,{}),Object(P.jsx)(he,{})]})}var Pe,ze=t(12),De=t(132),Se=t.n(De),We=t(133),Be=t.n(We),Le=t(191),Te=s.c.div(Pe||(Pe=Object(d.a)(["\n  .pro-image {\n    will-change: opacity;\n    width: 100%;\n    max-height: 300px;\n    @media (max-width: 500px) {\n      max-height: 500px;\n    }\n    overflow-y: hidden;\n    img {\n      width: 100%;\n    }\n  }\n  .header {\n    font-size: 2rem;\n    padding: 1.5rem;\n    padding-bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .details {\n    padding: 1.5rem;\n    font-size: 1.5rem;\n  }\n  .pro-desc {\n    line-height: 2rem;\n  }\n  svg {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.main.text}));function He(){var e=F().rohan,n=Object(ze.g)(),t=Object(ze.f)(),r=Object(c.useState)(t.location.state||null),a=Object(l.a)(r,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){!i&&o(e.getProjectById(n.id)||null)}),[i,n,e]),Object(P.jsx)(Te,{children:i&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(A.a,{children:Object(P.jsx)(H.a.div,{layout:"position",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pro-image",layoutId:"img-"+i.title,children:i.image&&Object(P.jsx)("img",{src:i.image,alt:""})})}),Object(P.jsxs)("div",{className:"header",children:[Object(P.jsx)(H.a.h2,{layout:"position",layoutId:i.title,className:"project-title",children:i.title}),Object(P.jsxs)("div",{className:"actions",children:[Object(P.jsx)(Le.a,{onClick:function(){return t.push("/")},children:Object(P.jsx)(Se.a,{})}),window.innerWidth<=500&&Object(P.jsx)(Le.a,{onClick:function(){navigator.share&&navigator.share({url:window.location.href,title:i.title,text:i.title})},children:Object(P.jsx)(Be.a,{})})]})]}),Object(P.jsxs)(H.a.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.5},className:"details",children:[Object(P.jsx)("p",{className:"pro-desc",children:i.description}),Object(P.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:i.github,children:"view on github"})]})]})})}var _e=t(192);function Ae(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(ze.c,{children:Object(P.jsxs)(_e.a,{type:"switch",children:[Object(P.jsx)(ze.a,{exact:!0,path:"/",children:Object(P.jsx)(Fe,{})}),Object(P.jsx)(ze.a,{path:"/project/:id",children:Object(P.jsx)(He,{})})]})})})}function Ge(){return Object(P.jsx)(we.a,{children:Object(P.jsx)(D,{children:Object(P.jsx)(Ae,{})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,195)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(Ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Je()}},[[169,1,2]]]);
//# sourceMappingURL=main.febb3ab9.chunk.js.map