(this["webpackJsonpnrohan09-cloud.github.io"]=this["webpackJsonpnrohan09-cloud.github.io"]||[]).push([[0],{147:function(e,n,t){},167:function(e,n,t){var r={"./G.A.N.png":[176,4],"./malar-ai.png":[177,5],"./self driving car simulator.png":[178,6],"./smart car.jpeg":[179,7]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=167,e.exports=a},174:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),i=t(67),o=t.n(i),s=(t(147),t(6)),l=t(62),u=t(11),d=t(9),h={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"dark",accent:"#3586ff",background:"#000",text:"#ffffff"}}},j={width:window.innerWidth,height:window.innerHeight,colors:{main:{type:"light",accent:"#104dbe",background:"#ececec",text:"#000"}}};window.data={accent:"",background:""};var p=Object(s.b)(r||(r=Object(d.a)([" \n\n  body{\n    color: ",";\n    background: ",";\n    \n    transition: background 300ms ease-out;\n  }\n\n  a{\n    color: ",";\n    text-decoration: none;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n\n"])),(function(e){return e.theme.colors.main.text}),(function(e){return window.data.accent=e.theme.colors.main.accent,window.data.background=e.theme.colors.main.background,e.theme.colors.main.background}),(function(e){return e.theme.colors.main.accent}));function b(e,n){switch(n.type){case"darkmode":return h;case"lightmode":return j;case"updatehw":return Object(u.a)(Object(u.a)({},e),{},{width:window.innerWidth,height:window.innerHeight});case"toggle":return"dark"===e.colors.main.type?j:h;default:return h}}var m=window.matchMedia("(prefers-color-scheme: dark)");var g=t(19),x=t.n(g),f=t(46),O=t(65),y=t.n(O),v="https://evve.herokuapp.com/api/notion/rohan";function w(){return(w=Object(f.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/general");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/projects");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(f.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/experience");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(f.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/skills");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(f.a)(x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(v+"/education");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,n){switch(n.type){case"general":return Object(u.a)(Object(u.a)({},e),{},{general:n.payload});case"experience":return Object(u.a)(Object(u.a)({},e),{},{experiences:n.payload});case"projects":return Object(u.a)(Object(u.a)({},e),{},{projects:n.payload});case"education":return Object(u.a)(Object(u.a)({},e),{},{educations:n.payload});case"skills":return Object(u.a)(Object(u.a)({},e),{},{skills:n.payload})}}var I={general:{},experiences:{},projects:{},educations:{},skills:{},error:!1,getProjectById:function(){}};function E(){var e=Object(a.useReducer)(F,I),n=Object(l.a)(e,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),s=o[0],d=o[1];return Object(a.useEffect)((function(){(function(){return w.apply(this,arguments)})().then((function(e){return c({type:"general",payload:e})})).catch((function(){return d(!0)})),function(){return k.apply(this,arguments)}().then(function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,Promise.all(n.map(function(){var e=Object(f.a)(x.a.mark((function e(n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(167)("./"+n.image);case 3:return r=e.sent.default,e.abrupt("return",Object(u.a)(Object(u.a)({},n),{},{image:r}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Object(u.a)(Object(u.a)({},n),{},{image:null}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()));case 3:e.t1=e.sent,e.t2={type:"projects",payload:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),function(){return N.apply(this,arguments)}().then((function(e){return c({type:"experience",payload:e})})),function(){return M.apply(this,arguments)}().then((function(e){return c({type:"skills",payload:e})})),function(){return C.apply(this,arguments)}().then((function(e){return c({type:"education",payload:e})}))}),[]),Object(a.useMemo)((function(){return{rohan:Object(u.a)(Object(u.a)({},r),{},{error:s,getProjectById:function(e){if(r.projects.find)return r.projects.find((function(n){return window.btoa(n.title)+"-rohan"===e}))}})}}),[r,s])}var P=t(2),_=Object(a.createContext)({});function z(e){var n,t=e.children,r=function(){var e=Object(a.useReducer)(b,localStorage.getItem("theme")?"dark"===localStorage.getItem("theme")?h:j:m.matches?h:j),n=Object(l.a)(e,2),t=n[0],r=n[1];Object(a.useEffect)((function(){r({type:"updatehw"})}),[]);var c=Object(a.useCallback)((function(){r({type:"toggle"})}),[]);return Object(a.useEffect)((function(){localStorage.setItem("theme",t.colors.main.type)}),[t]),Object(a.useMemo)((function(){return{theme:t,Global:p,toggle:c,dispatch:r}}),[t,c])}(),c=E().rohan;return n=r.theme,Object(a.useEffect)((function(){n&&(console.clear(),console.log("%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/nrohan09-cloud/nrohan09-cloud.github.io","color:".concat(n.colors.main.accent,";font-size:2rem;background:").concat(n.colors.main.background),"color:".concat(n.colors.main.text,";font-size:0.8rem;background:").concat(n.colors.main.background)))}),[n]),Object(P.jsx)(_.Provider,{value:{themer:r,rohan:c},children:Object(P.jsxs)(s.a,{theme:r.theme,children:[Object(P.jsx)(p,{}),t]})})}var D,S,W,B,T,L=t(193),H=t(198),A=t(197),G=t.p+"static/media/default-profile.d5ffa6c3.webp",J=t(128),R=t.n(J),U=t(133),$=t.n(U),q=s.c.div(D||(D=Object(d.a)(["\n  position: fixed;\n  height: ","px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: background 300ms ease-out, color 300ms ease-out;\n\n  & > div {\n    display: flex;\n    align-items: center;\n  }\n  .details {\n    margin-left: 20px;\n    position: relative;\n    h2 {\n      font-weight: 400;\n      line-height: 2rem;\n    }\n    p {\n      line-height: 1.6rem;\n    }\n  }\n  .contact {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    a {\n      margin: 0 1rem;\n    }\n  }\n"])),(function(e){return e.theme.height}));function K(){var e=Object(a.useContext)(_).rohan;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(q,{children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(X,{err:e.error,loading:!e.general.name}),!!e.general.name&&!e.error&&Object(P.jsxs)(L.a.div,{initial:{opacity:0,y:-10,width:0},animate:{opacity:1,y:0,width:210},className:"details",children:[Object(P.jsx)("h2",{children:e.general.name}),Object(P.jsx)("p",{children:e.general.subtitle}),Object(P.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.general.resume,children:"resume"}),Object(P.jsx)(ne,{})]})]}),!!e.general.name&&Object(P.jsx)(Q,{})]})})}function Q(){var e=Object(a.useContext)(_).rohan;return Object(P.jsxs)("div",{className:"contact",children:[Object(P.jsx)("a",{href:e.general.linkedin,target:"_blank",rel:"noreferrer",children:"linkedin"}),Object(P.jsx)("a",{href:e.general.facebook,target:"_blank",rel:"noreferrer",children:"facebook"}),Object(P.jsx)("a",{href:e.general.github,target:"_blank",rel:"noreferrer",children:"github"}),Object(P.jsx)("a",{href:e.general.instagram,target:"_blank",rel:"noreferrer",children:"instagram"})]})}var V=s.c.div(S||(S=Object(d.a)(["\n  border-radius: 50%;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  border: 1px solid ",";\n  animation: ",";\n  animation: ",";\n\n  @keyframes loading {\n    0%,\n    100% {\n      box-shadow: 0 0 10px 1px ",";\n    }\n    50% {\n      box-shadow: 0 0 0px 0px transparent;\n    }\n  }\n\n  img {\n    width: 120px;\n    height: 120px;\n    object-fit: cover;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.l?"loading 1s infinite":""}),(function(e){return e.err?"loading 1s infinite":""}),(function(e){return e.theme.colors.main.accent}));function X(e){var n=e.loading,t=e.err,r=Object(H.a)();return Object(P.jsx)(V,{err:t,l:n,children:Object(P.jsx)(L.a.img,{initial:{opacity:0,filter:"blur(10px)"},animate:r,src:G,onLoad:function(){return r.start({opacity:1,filter:"blur(0)"})},alt:"profilephoto"})})}var Y=Object(s.c)(L.a.div)(W||(W=Object(d.a)(["\n  display: inline-block;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: ",";\n"])),(function(e){return e.theme.colors.main.accent})),Z=Object(s.c)(Object(L.a)(R.a))(B||(B=Object(d.a)(["\n  cursor: pointer;\n  user-select: none;\n"]))),ee=Object(s.c)(Object(L.a)($.a))(T||(T=Object(d.a)(["\n  cursor: pointer;\n  user-select: none;\n"])));function ne(){var e=Object(a.useContext)(_).themer,n=e.theme,t=e.toggle;return Object(P.jsx)(Y,{children:Object(P.jsx)(L.a.div,{whileTap:{x:10},onTap:function(){return t()},className:"theme-toggle",children:Object(P.jsx)(A.a,{children:"dark"===n.colors.main.type?Object(P.jsx)(Z,{exit:{opacity:0,x:10}}):Object(P.jsx)(ee,{exit:{opacity:0,x:10}})})})})}var te,re,ae=t(199),ce=Object(s.c)(L.a.div)(te||(te=Object(d.a)(["\n  background: ",";\n  color: ",";\n  padding: 2rem;\n  padding-bottom: 0;\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  border-radius: 20px 20px 0 0;\n\n  h2 {\n    line-height: 2rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function ie(){var e=Object(a.useContext)(_).rohan;return Object(P.jsx)(P.Fragment,{children:!e.error&&Object(P.jsxs)(ce,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"About me"}),e.general.name?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("p",{children:e.general.aboutme}),Object(P.jsx)("h2",{children:"skills"}),e.skills.length>0&&Object(P.jsx)(se,{skills:e.skills})]}):Object(P.jsx)(ae.a,{})]})})}var oe=Object(s.c)(L.a.div)(re||(re=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 10px;\n  .skill {\n    background: ",";\n    color: ",";\n    font-weight: 600;\n    border-radius: 1.6rem;\n    padding: 0.5rem 1rem;\n    /* border: 1px solid ","; */\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.accent}));function se(e){var n=e.skills;return Object(P.jsx)(oe,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:n.map((function(e,n){return Object(P.jsx)(le,{skill:e},n)}))})}function le(e){var n=e.skill;return Object(P.jsx)(L.a.div,{className:"skill",children:Object(P.jsx)("span",{children:n.title})})}var ue,de,he=t(194),je=Object(s.c)(L.a.div)(ue||(ue=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  padding: 2rem;\n  padding-top: 0;\n  h2 {\n    line-height: 2rem;\n    margin-bottom: 10px;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function pe(){var e=Object(a.useContext)(_).rohan;return Object(P.jsx)(P.Fragment,{children:e.error?Object(P.jsx)(P.Fragment,{}):Object(P.jsxs)(je,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Experience"}),e.experiences.length?Object(P.jsx)("div",{className:"experience",children:e.experiences.map((function(e){return Object(P.jsx)(xe,{exp:e},window.btoa(e.role+e.title))}))}):Object(P.jsx)(ae.a,{})]})})}var be,me,ge=s.c.div(de||(de=Object(d.a)(["\n  background: ",";\n  color: ",";\n  padding: 1.5rem;\n  border-radius: 20px;\n  margin-bottom: 10px;\n\n  .exp-title {\n    font-weight: 600;\n  }\n  .exp-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.accent}));function xe(e){var n=e.exp;return Object(P.jsxs)(ge,{children:[Object(P.jsx)("p",{className:"exp-date",children:Object(he.a)(new Date(n.date.start),"MMM yyyy")+" - "+Object(he.a)(new Date(n.date.end),"MMM yyyy")}),Object(P.jsx)("h2",{className:"exp-title",children:n.title}),Object(P.jsx)("p",{className:"exp-role",children:n.role}),Object(P.jsx)("p",{className:"exp-description",children:n.description}),Object(P.jsx)("div",{className:"links",children:n.links.map((function(e){return Object(P.jsx)("a",{href:e.link,children:e.label},e.link)}))})]})}var fe=Object(s.c)(L.a.div)(be||(be=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  padding: 2rem;\n  padding-top: 0;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  h2 {\n    line-height: 2rem;\n    margin-bottom: 10px;\n  }\n  .education {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-gap: 2rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function Oe(){var e=Object(a.useContext)(_).rohan;return Object(P.jsx)(P.Fragment,{children:!!e.educations.length&&!e.error&&Object(P.jsxs)(fe,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Education"}),Object(P.jsx)("div",{className:"education",children:e.educations.map((function(e){return Object(P.jsx)(ve,{edu:e},window.btoa(e.subtitle+e.title))}))})]})})}var ye=s.c.div(me||(me=Object(d.a)(["\n  /* background: ","; */\n  color: ",";\n  /* padding: 1.5rem; */\n  border-radius: 20px;\n\n  .edu-title {\n    font-weight: 600;\n  }\n  .edu-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .edu-description {\n    font-size: 1.2rem;\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.background}));function ve(e){var n=e.edu;return Object(P.jsxs)(ye,{children:[Object(P.jsx)("p",{className:"exp-date",children:Object(he.a)(new Date(n.date.start),"MMM yyyy")+" - "+Object(he.a)(new Date(n.date.end),"MMM yyyy")}),Object(P.jsx)("h2",{className:"edu-title",children:n.title}),Object(P.jsx)("p",{className:"edu-role",children:n.subtitle}),Object(P.jsx)("p",{className:"edu-description",children:n.description})]})}var we,ke,Ne=t(81),Me=Object(s.c)(L.a.div)(we||(we=Object(d.a)(["\n  background: ",";\n  color: ",";\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  padding: 2rem;\n  /* padding-top: 0; */\n\n  h2 {\n    line-height: 2rem;\n  }\n  .project {\n    padding-top: 1rem;\n    display: flex;\n\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function Ce(){var e=Object(a.useContext)(_).rohan,n=e.projects&&e.projects.length>0&&e.projects.map((function(e){return Object(P.jsx)(Ee,{pro:e},window.btoa(e.title))}));return Object(P.jsx)(P.Fragment,{children:e.error?Object(P.jsx)(P.Fragment,{}):Object(P.jsxs)(Me,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},children:[Object(P.jsx)("h2",{children:"Projects"}),e.projects.length?Object(P.jsx)("div",{className:"project",children:n}):Object(P.jsx)(ae.a,{})]})})}var Fe,Ie=s.c.div(ke||(ke=Object(d.a)(["\n  /* background: ","; */\n  font-size: 1.2rem;\n  /* padding: 1rem; */\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  .pro-title {\n    color: ",";\n    font-weight: 600;\n    text-align: center;\n    font-size: 1.2rem;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    padding: 0.5rem;\n    width: 100%;\n    padding-top: 100px;\n    background: linear-gradient(\n      to top,\n      ",",\n      transparent\n    );\n  }\n  .pro-image {\n    will-change: opacity;\n    width: 200px;\n    height: 200px;\n    @media (max-width: 500px) {\n      width: 100%;\n    }\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  /* .pro-role {\n    font-weight: 600;\n    color: ",";\n  }\n  .links {\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n  } */\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.text}),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.colors.main.accent}));function Ee(e){var n=e.pro,t=Object(H.a)(),r=window.innerWidth<500;return Object(P.jsx)(Ne.b,{to:{pathname:"/project/"+window.btoa(n.title)+"-rohan",state:Object(u.a)({},n)},children:Object(P.jsxs)(Ie,{onMouseEnter:function(){return!r&&t.start({opacity:1})},onMouseLeave:function(){return!r&&t.start({opacity:0})},children:[Object(P.jsx)(A.a,{children:Object(P.jsx)(L.a.div,{layout:"position",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pro-image",layoutId:"img-"+n.title,children:n.image&&Object(P.jsx)("img",{src:n.image,alt:""})})}),Object(P.jsx)(L.a.h2,{layout:"position",layoutId:n.title,initial:r?{opacity:1}:{opacity:0},animate:t,className:"pro-title",children:n.title})]})})}var Pe,_e=Object(s.c)(L.a.div)(Fe||(Fe=Object(d.a)(["\n  background: ",";\n  color: ",";\n  padding: 2rem;\n  padding-top: 0;\n  line-height: 1.6rem;\n  transition: background 300ms ease-out, color 300ms ease-out;\n  p {\n    text-align: center;\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.main.accent}),(function(e){return e.theme.colors.main.background}));function ze(){var e=Object(a.useContext)(_).rohan;return Object(P.jsx)(P.Fragment,{children:!e.error&&Object(P.jsx)(_e,{initial:{opacity:0,y:100},animate:{opacity:.99999,y:0},onClick:function(){window.scrollTo(0,0)},children:Object(P.jsx)("p",{children:"scroll to top"})})})}var De=s.c.div(Pe||(Pe=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  .gap {\n    height: ","px;\n    pointer-events: none;\n  }\n"])),(function(e){return e.theme.colors.main.background}),(function(e){return e.theme.height-100}));function Se(){return Object(P.jsxs)(De,{children:[Object(P.jsx)(K,{}),Object(P.jsx)("div",{className:"gap"}),Object(P.jsx)(ie,{}),Object(P.jsx)(Ce,{}),Object(P.jsx)(Oe,{}),Object(P.jsx)(pe,{}),Object(P.jsx)(ze,{})]})}var We,Be=t(12),Te=t(134),Le=t.n(Te),He=t(135),Ae=t.n(He),Ge=t(195),Je=s.c.div(We||(We=Object(d.a)(["\n  .pro-image {\n    will-change: opacity;\n    width: 100%;\n    max-height: 300px;\n    @media (max-width: 500px) {\n      max-height: 500px;\n    }\n    overflow-y: hidden;\n    img {\n      width: 100%;\n    }\n  }\n  .header {\n    font-size: 2rem;\n    padding: 1.5rem;\n    padding-bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .details {\n    padding: 1.5rem;\n    font-size: 1.5rem;\n  }\n  .pro-desc {\n    line-height: 2rem;\n  }\n  svg {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.main.text}));function Re(){var e=E().rohan,n=Object(Be.g)(),t=Object(Be.f)(),r=Object(a.useState)(t.location.state||null),c=Object(l.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){e.projects&&n.id&&!i&&o(e.getProjectById(n.id)||null)}),[i,n,e]),Object(P.jsx)(Je,{children:i&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(A.a,{children:Object(P.jsx)(L.a.div,{layout:"position",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pro-image",layoutId:"img-"+i.title,children:i.image&&Object(P.jsx)("img",{src:i.image,alt:""})})}),Object(P.jsxs)("div",{className:"header",children:[Object(P.jsx)(L.a.h2,{layout:"position",layoutId:i.title,className:"project-title",children:i.title}),Object(P.jsxs)("div",{className:"actions",children:[Object(P.jsx)(Ge.a,{onClick:function(){return t.push("/")},children:Object(P.jsx)(Le.a,{})}),window.innerWidth<=500&&Object(P.jsx)(Ge.a,{onClick:function(){navigator.share&&navigator.share({url:window.location.href,title:i.title,text:i.title})},children:Object(P.jsx)(Ae.a,{})})]})]}),Object(P.jsxs)(L.a.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.5},className:"details",children:[Object(P.jsx)("p",{className:"pro-desc",children:i.description}),Object(P.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:i.github,children:"view on github"})]})]})})}var Ue=t(196);function $e(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(Be.c,{children:Object(P.jsxs)(Ue.a,{type:"switch",children:[Object(P.jsx)(Be.a,{exact:!0,path:"/",children:Object(P.jsx)(Se,{})}),Object(P.jsx)(Be.a,{path:"/project/:id",children:Object(P.jsx)(Re,{})})]})})})}function qe(){return Object(P.jsx)(Ne.a,{children:Object(P.jsx)(z,{children:Object(P.jsx)($e,{})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,201)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(qe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Ke()}},[[174,1,2]]]);
//# sourceMappingURL=main.a85557a5.chunk.js.map