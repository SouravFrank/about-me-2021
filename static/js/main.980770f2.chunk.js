(this["webpackJsonpabout-me"]=this["webpackJsonpabout-me"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(9),s=n.n(a),r=(n(36),n(14)),l=n(15),o=n(30),j=n(29),d={fileName:"cv.pdf",fileLink:"https://drive.google.com/uc?export=download&id=1kjqseWcyDFxluUQKq46Hfonj1hc5B_Mo"},u=[{title:"React JS",src:"ReactLogo",description:"Front end library for live UI"},{title:"React Native",src:"ReactLogo",description:" JavaScript framework for writing real, natively rendering mobile applications for iOS and Android"},{title:"Node JS",src:"NodeLogo",description:"open-source, cross-platform, back-end JavaScript runtime environment"},{title:"Redux",src:"ReduxLogo",description:"JavaScript library for managing application state in front end"},{title:"Material UI",src:"MaterialUILogo",description:"features React components that implement Google's Material Design"},{title:"Swagger",src:"SwaggerLogo",description:"An Interface Description Language for describing RESTful APIs expressed using JSON."},{title:"HTML",src:"HtmlLogo",description:"Backbone of webpages"},{title:"CSS",src:"CssLogo",description:"Paint brush of webpages"},{title:"Linux",src:"LinuxLogo",description:"a family of open-source Unix-like operating systems based on the Linux kernel"},{title:"Git",src:"GitIcon",description:"open source distributed version control system "}],b=[{title:"Home",click:"#"},{title:"About Me",click:"#journey"},{title:"Download Resume ",click:"#resume"},{title:"Skills ",click:"#skills"},{title:"Projects ",click:"#projects"},{title:"Contact Me",click:"#ContactMe"}],f=[{title:"Email",value:"ssadhukhan990@gmail.com"},{title:"Call",value:"+91 9038516950"},{title:"Location",value:"Howrah, West Bengal, India"}],m=(n(37),n(0)),x=function(e){var t=e.item,n=t.title,c=t.click;return Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)("a",{href:c,children:n})})},p=function(){return Object(m.jsx)("div",{className:"header-route-container",children:Object(m.jsx)("ul",{className:"header-route-ul",children:b.map((function(e){return Object(m.jsx)(x,{item:e},e.title)}))})})},O=n.p+"static/media/sourav-pic.33d0dd9e.jpeg",h=(n(39),function(e){return Object(m.jsx)("div",{className:"image-conatainer",children:Object(m.jsx)("img",{src:O,className:"myPic",alt:"my-pic"})})});n(40);var g=function(e){return Object(m.jsx)("div",{style:{position:"absolute",right:"10vw",top:"40vh"},children:Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"intro-text",id:"changeSalutation",style:{display:"block",fontSize:36,fontWeight:"bold",color:"#2a2a2a",margin:0,zIndex:1}}),Object(m.jsx)("p",{className:"intro-text",id:"changeHeader",style:{display:"block",fontSize:48,fontWeight:"bold",color:"#2a2a2a",margin:"-10px 0px -5px 0px",zIndex:1}}),Object(m.jsx)("div",{className:"meter",children:Object(m.jsx)("span",{})}),Object(m.jsx)("p",{className:"intro-text",id:"changeDesc",style:{display:"block",fontSize:26,color:"#2a2a2a",width:450,margin:0}})]})})},v=n(5),y=n(16),k=n.n(y),w=function(){var e=document.documentElement.scrollTop;return e>300||!(e<=300)&&void 0};n(41);var N=function(e){var t=Object(c.useState)(!1),n=Object(v.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(!1),r=Object(v.a)(s,2),l=r[0],o=r[1];return window.addEventListener("scroll",(function(){a(w()),!w()&&o(!1)})),Object(m.jsx)("div",{style:{display:i?"inline":"none"},className:"nav-container",children:Object(m.jsxs)("div",{id:"circularMenu1",class:"".concat(l?"active":""," circular-menu circular-menu-left"),children:[Object(m.jsx)("a",{class:"floating-btn",onClick:function(){o(!l)},children:Object(m.jsx)(k.a,{color:"primary",class:"iconSize"})}),Object(m.jsxs)("menu",{class:"items-wrapper",children:[Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-home"}),Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-user"}),Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-pie-chart"}),Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-cog"}),Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-pie-chart"}),Object(m.jsx)("a",{href:"#",class:"menu-item fa fa-cog"})]})]})})},L=n.p+"static/media/react.19465659.svg",S=n.p+"static/media/nodejs-icon.cc3d45a1.svg",C=n.p+"static/media/redux.546485b8.svg",E=n.p+"static/media/material-ui.6c640e0e.svg",M=n.p+"static/media/swagger.b1602036.svg",I=n.p+"static/media/html-5.04ad4ab8.svg",B=n.p+"static/media/css-3.92661138.svg",D=n.p+"static/media/linux-tux.32a9bcd0.svg",T=n.p+"static/media/git-icon.8497c3c4.svg",R=(n(47),n(12),function(e){var t=e.text,n=Object(c.useRef)(null),i=t,a=0;function s(){var e=i[a].split("");!function t(){if(!(e.length>0))return function(){var e=i[a].split("");!function t(){if(!(e.length>0))return i.length>a+1?a++:a=0,s(),!1;e.pop(),n.current.innerHTML=e.join(""),setTimeout(t,110)}()}(),!1;n.current.innerHTML+=e.shift(),setTimeout(t,300)}()}return Object(c.useEffect)((function(){s()}),[]),Object(m.jsxs)("div",{id:"typewriter",children:[Object(m.jsx)("div",{id:"text",ref:n}),Object(m.jsx)("div",{id:"cursor"})]})}),H={ReactLogo:L,NodeLogo:S,ReduxLogo:C,MaterialUILogo:E,SwaggerLogo:M,HtmlLogo:I,CssLogo:B,LinuxLogo:D,GitIcon:T},A=function(e){var t=e.props,n=t.title,c=t.src,i=t.description;return Object(m.jsxs)("div",{className:"skillBox",children:[Object(m.jsx)("div",{className:"skillIconBall",children:Object(m.jsx)("img",{class:"skillSVG",alt:n,src:H[c]})}),Object(m.jsxs)("div",{className:"SkillDesc",children:[Object(m.jsx)("span",{className:"SkillDescTitle",children:n}),Object(m.jsx)("span",{className:"SkillDescText",children:i})]})]})},_=function(){return Object(m.jsxs)("div",{id:"skills",className:"skillsContainer",children:[Object(m.jsx)(R,{text:["Checkout my Skills..."]}),Object(m.jsx)("div",{className:"showSkill",children:u.map((function(e){return Object(m.jsx)(A,{props:e},e.title)}))})]})};n(48);var J,P,z,F,G,U,W,q,V,Y,K,Q,X,Z,$,ee,te=n(7),ne=n(13),ce=n(18),ie=n.n(ce),ae=n(19),se=n.n(ae),re=n(20),le=n.n(re),oe=[{title:"Birth",description:"Desc 1",date:"23 June 1998",icon:"cake"},{title:"10th",description:"Desc.",date:"2 March 1994",icon:"study"},{title:"12th",description:"Desc 3",date:"2 March 1995",icon:"study"},{title:"B.Tech",description:"Desc 4",date:"2 March 1996",icon:"study"},{title:"TCS",description:"Desc 5",date:"2 March 1997",icon:"study"},{title:"DevOps",description:"Desc 6",date:"2 March 1998",icon:"work"}],je=(n(49),{cake:ie.a,work:se.a,study:le.a}),de=function(e){var t=e.props;if("undefined"!==typeof je[t.icon])return i.a.createElement(je[t.icon],{className:"pointIcon"})},ue=function(e){var t=e.te,n=e.idx;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"card animate ".concat(n%2===0?"slide_from_left":"slide_from_right"),children:[Object(m.jsx)("p",{className:"title",children:t.title}),Object(m.jsx)("p",{className:"date",children:t.date}),Object(m.jsx)("p",{className:"desc",children:t.description})]}),Object(m.jsx)("div",{className:"pointContainer",children:Object(m.jsx)(de,{props:t})})]})})},be=function(){var e=oe,t=function(e,t){var n=1e3,c=0,i=t*n;t|=1,e.classList.contains("slide_from_left")?(c=-1e3,i=0):e.classList.contains("slide_from_right")&&(c=n,i=0),te.a.fromTo(e,{x:c,y:i,autoAlpha:0},{duration:1.25,x:0,y:0,autoAlpha:1,ease:"expo",overwrite:"auto"})},n=function(e){te.a.set(e,{autoAlpha:0})};return Object(c.useEffect)((function(){te.a.registerPlugin(ne.a),te.a.utils.toArray(".animate").forEach((function(e){n(e),ne.a.create({trigger:e,onEnter:function(){t(e)},onEnterBack:function(){t(e,-1)},onLeave:function(){n(e)}})}))}),[]),Object(m.jsxs)("div",{id:"journey",children:[Object(m.jsx)(R,{text:["Journey So Far..."]}),Object(m.jsx)("div",{className:"timeline",children:Object(m.jsx)("ul",{children:e.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)(ue,{te:e,idx:t})},"".concat(e.title,"_").concat(e.date))}))})})]})};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xe(e,t){var n=e.title,i=e.titleId,a=me(e,["title","titleId"]);return c.createElement("svg",fe({fill:"current",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490 490",style:{enableBackground:"new 0 0 490 490"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},a),n?c.createElement("title",{id:i},n):null,J||(J=c.createElement("g",null,c.createElement("path",{d:"M0,235.564v254.047l245-235.564l245,235.564V235.564L245,0.389L0,235.564z M459.375,417.684L245,211.549L30.625,417.684 v-169.08L245,42.827l214.375,205.777V417.684z"}),c.createElement("polygon",{points:"72.734,321.622 204.638,194.796 245.004,155.984 285.369,194.796 417.266,321.62 417.266,267.167 245.003,101.805  72.734,267.167  "}))),P||(P=c.createElement("g",null)),z||(z=c.createElement("g",null)),F||(F=c.createElement("g",null)),G||(G=c.createElement("g",null)),U||(U=c.createElement("g",null)),W||(W=c.createElement("g",null)),q||(q=c.createElement("g",null)),V||(V=c.createElement("g",null)),Y||(Y=c.createElement("g",null)),K||(K=c.createElement("g",null)),Q||(Q=c.createElement("g",null)),X||(X=c.createElement("g",null)),Z||(Z=c.createElement("g",null)),$||($=c.createElement("g",null)),ee||(ee=c.createElement("g",null)))}var pe=c.forwardRef(xe),Oe=(n.p,n(50),function(){var e=Object(c.useState)(!1),t=Object(v.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),s=Object(v.a)(a,2),r=s[0],l=s[1];window.addEventListener("scroll",(function(){var e=w();i(e),!e&&r&&l(!1)}));var o=function(){return Object(m.jsx)("div",{className:"normal-container",children:Object(m.jsx)(pe,{id:"upArrow",fill:"#afdaff"})})},j=function(){return Object(m.jsxs)("div",{className:"onHover-container",children:[Object(m.jsx)(pe,{id:"upArrow",fill:"#aaa0ff"}),Object(m.jsx)("span",{id:"Back",children:"Back"}),Object(m.jsx)("span",{id:"top",children:"to top"}),Object(m.jsx)("span",{id:"qus",children:"?"})]})};return Object(m.jsx)("div",{style:{position:"fixed",float:"right",right:10,bottom:0},children:Object(m.jsx)("div",{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"},children:r?Object(m.jsx)(j,{}):Object(m.jsx)(o,{})})})}),he=n(10),ge=(n(51),function(e){var t=e.checked,n=e.setchecked,c=e.downloadResumeConfig.fileLink;return Object(m.jsx)("div",{id:"ms-container",children:Object(m.jsx)("label",{for:"ms-download",children:Object(m.jsx)("div",{class:"ms-content",children:Object(m.jsxs)("div",{class:"ms-content-inside",children:[Object(m.jsx)("input",{onChange:function(){t||(window.location=c),n(!t)},value:t,type:"checkbox",id:"ms-download"}),Object(m.jsx)("div",{class:"ms-line-down-container",children:Object(m.jsx)("div",{class:"ms-line-down"})}),Object(m.jsx)("div",{class:"ms-line-point"})]})})})})}),ve=function(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n={checked:t[0],setchecked:t[1],downloadResumeConfig:d};return Object(m.jsxs)("div",{id:"resume",style:{margin:"100px",position:"relative"},children:[Object(m.jsx)(R,{text:["Here is my Resume...","Click to download..."]}),Object(m.jsx)("div",{style:{position:"relative",margin:100,paddingBottom:280},children:Object(m.jsx)(ge,Object(he.a)({},n))})]})},ye=function(){return Object(m.jsx)("div",{className:"headerBg"})},ke=function(){return Object(m.jsx)("div",{className:"footerBg"})},we=(n(52),n(21)),Ne=n.n(we),Le=n(22),Se=n.n(Le),Ce=n(23),Ee=n.n(Ce),Me=n(24),Ie=n.n(Me),Be=n(25),De=n.n(Be),Te=function(){return Object(m.jsxs)("div",{class:"social-btns",children:[Object(m.jsx)("a",{class:"btn facebook",href:"#",children:Object(m.jsx)(Ne.a,{class:"fa fa-facebook"})}),Object(m.jsx)("a",{class:"btn instagram",href:"#",children:Object(m.jsx)(Se.a,{class:"fa fa-instagram"})}),Object(m.jsx)("a",{class:"btn github",href:"#",children:Object(m.jsx)(Ee.a,{class:"fa fa-github"})}),Object(m.jsx)("a",{class:"btn linkedin",href:"#",children:Object(m.jsx)(Ie.a,{class:"fa fa-linkedin"})}),Object(m.jsx)("a",{class:"btn whatsapp",href:"#",children:Object(m.jsx)(De.a,{class:"fa fa-whatsapp"})})]})},Re=n(26),He=n.n(Re),Ae=n(27),_e=n.n(Ae),Je=n(28),Pe=n.n(Je),ze=(n(53),{Email:He.a,Call:_e.a,Location:Pe.a}),Fe=function(e){var t=e.icon;if("undefined"!==typeof ze[t])return i.a.createElement(ze[t],{className:"iamIcon"})},Ge=function(e){var t=e.title,n=e.value;return Object(m.jsxs)("div",{className:"showInfoBox",children:[Object(m.jsx)(Fe,{icon:t}),Object(m.jsxs)("div",{className:"showMoreInfoBox",children:[Object(m.jsx)("span",{id:"title",children:t}),Object(m.jsx)("span",{id:"value",children:n})]})]})},Ue=function(){return Object(m.jsxs)("div",{className:"pInfoContainer",children:[Object(m.jsx)("div",{className:"pInfoDetails",children:f.map((function(e){return Object(m.jsx)(Ge,Object(he.a)({},e))}))}),Object(m.jsx)("div",{className:"pInfoGMapContainer"})]})},We=(n(54),function(e){var t=e.title,n=e.onChange,c=e.value,i=e.type,a=e.placeholder,s=function(e){n(e.target.value)};return Object(m.jsxs)("div",{className:"inputContainer",children:[Object(m.jsx)("p",{className:"contactTitle",children:t}),"textarea"===i?Object(m.jsx)("textarea",{className:"formTextArea",value:c,onChange:s}):Object(m.jsx)("input",{className:"formInput",placeholder:a,value:c,onChange:s})]})}),qe=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(v.a)(a,2),r=s[0],l=s[1],o=Object(c.useState)(""),j=Object(v.a)(o,2),d=j[0],u=j[1];return Object(m.jsxs)("div",{className:"formContainer",children:[Object(m.jsxs)("div",{className:"nameContainer",children:[Object(m.jsx)(We,{title:"Your Name",placeholder:"What's your name?",value:n,onChange:i}),Object(m.jsx)(We,{title:"Your Contact",placeholder:"Your contact info",value:r,onChange:l})]}),Object(m.jsx)(We,{title:"Message",placeholder:"Enter your message",value:d,type:"textarea",onChange:u}),Object(m.jsx)("div",{class:"wrapper",children:Object(m.jsx)("a",{href:"#",class:"button",children:"Send Me"})})]})},Ve=function(){return Object(m.jsxs)("div",{id:"ContactMe",className:"contactMeContainer",children:[Object(m.jsx)(R,{text:["Contact Me"]}),Object(m.jsx)("p",{className:"subHeading",children:"Send me a message!"}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(m.jsx)(Te,{}),Object(m.jsx)(qe,{}),Object(m.jsx)(Ue,{})]})]})},Ye=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsx)(ye,{}),Object(m.jsx)(p,{}),Object(m.jsx)(h,{}),Object(m.jsx)(g,{}),Object(m.jsx)(be,{}),Object(m.jsx)(ve,{}),Object(m.jsx)(_,{}),Object(m.jsx)(Oe,{}),Object(m.jsx)(Ve,{}),Object(m.jsx)(ke,{})]})}}]),n}(c.Component),Ke=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(Ye,{})})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Ke,{})}),document.getElementById("root")),Qe()}],[[56,1,2]]]);
//# sourceMappingURL=main.980770f2.chunk.js.map