(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(147),o=t(146),c=(t(435),t(143)),s=t(138),d=s.b.a.withConfig({displayName:"linkIcon__LinkIcon",componentId:"cblwre-0"})(["display:inline-block;padding:0.5rem;margin-bottom:1rem;align-items:center;height:1rem;:hover{span{opacity:1;}}span{font-family:'Oxygen',sans-serif;font-size:0.9rem;opacity:0;transition:ease-in 0.25s;margin:0 0.5rem;vertical-align:0.2rem;@media screen and (max-width:360px){opacity:1;}}"]),l=s.b.div.withConfig({displayName:"linkIconsWrapper__LinkIconsWrapper",componentId:"sc-1iv13d5-0"})(["display:flex;position:absolute;bottom:0.5rem;justify-content:space-around;@media screen and (max-width:480px){bottom:1rem;left:2rem;}"]),m=s.b.div.withConfig({displayName:"project__Project",componentId:"l9li13-0"})(["width:260px;height:170px;padding:0.5rem;position:relative;margin:0 0 1rem;::after{content:'';background-image:",";background-size:cover;background-repeat:no-repeat;background-position:center;background-color:#f3f3f399;background-blend-mode:screen;transition:0.25s ease-in;opacity:0;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}:hover::after,:active::after{opacity:1;}@media screen and (max-width:480px){width:100%;height:225px;padding:1.5rem;::after{opacity:0.7;background-size:cover;background-position:top;}}p{font-size:1rem;:last-of-type{font-size:0.8rem;}}h2{font-size:1.3rem;font-weight:normal;}"],function(e){return"url("+e.img+")"}),p=function(e){var n=e.name,t=e.repo,a=e.demo,r=e.desc,o=e.stack,s=e.img;return i.a.createElement(m,{img:s},i.a.createElement("h2",null,n),i.a.createElement("p",null,r),i.a.createElement("p",null,o),i.a.createElement(l,null,i.a.createElement(d,{href:"https://github.com/koko57/"+t,target:"blank"},i.a.createElement(c.Code,{size:16}),i.a.createElement("span",null,"Code")),i.a.createElement(d,{href:a,target:"_blank"},i.a.createElement(c.Link,{size:16}),i.a.createElement("span",null,"Demo"))))},u=t(150),f=t(145),h=s.b.div.withConfig({displayName:"projectList__ProjectList",componentId:"sc-5hlm4q-0"})(["width:100%;height:80%;display:flex;justify-content:space-around;align-items:center;margin:6rem auto;flex-wrap:wrap;@media screen and (max-width:810px){margin:3rem auto;}@media screen and (max-width:480px){margin:2rem auto;}"]),g=t(142),b=s.b.a.withConfig({displayName:"styledText__StyledText",componentId:"sc-1u6pdwa-0"})(["span{","}@media (hover:hover){:hover span::after{width:80%;}}@media screen and (max-width:480px){font-size:1rem;}"],g.a),y=t(436),w=t.n(y),v=t(437),x=t.n(v),k=t(438),E=t.n(k);n.default=function(){return i.a.createElement(r.a,null,i.a.createElement(f.a,null,"my works"),i.a.createElement(h,null,i.a.createElement(p,{name:"Evnt",repo:"Evnt",demo:"https://evnt57.herokuapp.com/welcome",desc:"Event planner app.",stack:"React / Redux / Node.js / MongoDB",img:x.a}),i.a.createElement(p,{name:"MemoryGame",repo:"MemoryGame",demo:"https://koko57.github.io/MemoryGame/",desc:"Simple VanillaJS card matching game.",stack:"VanillaJS",img:w.a}),i.a.createElement(p,{name:"Wro",repo:"wro",demo:"https://koko57.github.io/wro/",desc:"List of best spots in Wroclaw.",stack:"React / Google Maps API / Foursquare API",img:E.a}),i.a.createElement(u.a,{align:"center",margin:"2rem"},i.a.createElement(b,{href:"https://github.com/koko57",target:"_blank"},"More on ",i.a.createElement("span",null,"GitHub")))),i.a.createElement(o.a,null))}},140:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return u});var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(139),s=t.n(c);t.d(n,"Link",function(){return s.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var d=t(141),l=t.n(d);t.d(n,"PageRenderer",function(){return l.a});var m=t(33);t.d(n,"parsePath",function(){return m.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,n,t){var a;e.exports=(a=t(144))&&a.default||a},142:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=function(){return"\n  font-family: 'Playfair Display', serif;\n  position: relative;\n  ::after {\n    position: absolute;\n    content: '';\n    height: 2px;\n    border-radius: 15px;\n    bottom: -2px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    width: 0;\n    background: linear-gradient(\n      111.7deg,\n      rgba(80, 177, 225, 1) 20%,\n      rgba(165, 41, 185, 1) 95%\n    );\n    transition: ease-in-out 0.25s;\n  }\n"}},144:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(48),s=t(2),d=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=d},145:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=t(138).b.h1.withConfig({displayName:"title__Title",componentId:"sc-2bg81k-0"})(["font-size:",";text-transform:uppercase;font-weight:normal;cursor:default;width:100%;text-align:left;@media screen and (max-width:480px){text-align:",";font-size:",";}"],function(e){return e.main?"7rem":"2rem"},function(e){return e.main?"left":"center"},function(e){return e.main?"5rem":"2rem"})},146:function(e,n,t){"use strict";var a=t(7),i=t.n(a),r=t(0),o=t.n(r),c=t(138),s=c.b.nav.withConfig({displayName:"nav__Nav",componentId:"sc-8jpz30-0"})(["width:100%;position:fixed;left:0;bottom:0;padding-bottom:5rem;background:rgba(248,248,248,0.75);@media screen and (max-width:810px){top:0;background:",";height:",";padding-top:5.5rem;padding-bottom:2rem;}@media screen and (max-width:480px){padding-top:1rem;height:",";}@media screen and (max-height:480px){padding-top:2rem;height:",";}"],function(e){var n=e.scrolled,t=e.opened;return n||t?"rgba(248, 248, 248, 0.75)":"none"},function(e){return e.opened?"auto":"15vh"},function(e){return e.opened?"auto":"10vh"},function(e){return e.opened?"auto":"10vh"}),d=c.b.div.withConfig({displayName:"navWrapper__NavWrapper",componentId:"sc-1sloi61-0"})(["margin:auto;width:80%;max-width:1000px;display:flex;justify-content:flex-end;font-size:1.3rem;@media screen and (max-width:810px){flex-direction:column;align-items:flex-end;justify-content:space-around;}"]),l=c.b.div.withConfig({displayName:"hamburger__Hamburger",componentId:"mtv4vp-0"})(["display:none;@media screen and (max-width:810px){display:block;position:relative;}& > .show{opacity:1;position:absolute;top:0;right:0;transition:ease-in-out 0.4s;}& > .hide{opacity:0;}"]),m=c.b.div.withConfig({displayName:"navLinksWrapper__NavLinksWrapper",componentId:"sc-69xlni-0"})(["width:100%;position:relative;display:flex;justify-content:flex-end;@media screen and (max-width:810px){display:none;flex-direction:column;align-items:flex-end;padding-bottom:2rem;&.show{display:flex;}}"]),p=t(140),u=t(142),f=Object(c.b)(p.Link).withConfig({displayName:"styledLink__StyledLink",componentId:"g8y0pq-0"})([""," margin:0 1rem;:active,&.current{opacity:0.5;transition:ease-out 0.25s;::after{width:15%;}}@media (hover:hover){:hover::after{width:80%;}}"],u.a),h=Object(c.b)(f).withConfig({displayName:"navLink__NavLink",componentId:"lk215c-0"})(["@media screen and (max-width:810px){margin:1rem 0;font-size:1.1rem;}"]),g=t(143),b=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleClick=function(){t.setState({opened:!t.state.opened})},t.state={scrolled:!1,opened:!1},t}i()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){window.pageYOffset>50?e.setState({scrolled:!0}):e.setState({scrolled:!1})})},t.render=function(){var e=this.state,n=e.opened,t=e.scrolled;return o.a.createElement(s,{id:"nav",scrolled:t,opened:n},o.a.createElement(d,{className:"wrapper"},o.a.createElement(l,{onClick:this.handleClick},o.a.createElement(g.X,{className:n?"show":"hide"}),o.a.createElement(g.Menu,{className:n?"hide":"show"})),o.a.createElement(m,{className:n?"show":null},o.a.createElement(h,{to:"/",activeClassName:"current",className:n?"show":null},"About"),o.a.createElement(h,{to:"/works",activeClassName:"current",className:n?"show":null},"My Works"),o.a.createElement(h,{to:"/contact",activeClassName:"current",className:n?"show":null},"Contact"))))},n}(r.Component);n.a=b},147:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(148),s=t.n(c),d=t(140),l=t(149),m=t.n(l),p=t(138);function u(){var e=m()(["\n@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Oxygen');\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    background-color: #f8f8f8;\n  }\n  h1, h2 {\n    font-family: 'Playfair Display', serif;\n  }\n  p {\n    font-family: 'Oxygen';\n    font-weight: normal;\n    margin: 1rem auto;\n  }\n  a {\n    text-decoration: none;\n    color: #303030;\n    &:visited, &:active {\n      color: #303030;\n    }\n  }\n"]);return u=function(){return e},e}var f=Object(p.a)(u()),h=p.b.div.withConfig({displayName:"page__Page",componentId:"sc-4rv3ot-0"})(["width:100%;color:#303030;position:relative;"]),g=p.b.div.withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1rgtmu2-0"})(["height:100%;max-width:1000px;margin:0 auto;padding:5rem 4rem;display:flex;flex-direction:column;@media screen and (max-width:480px){padding:1rem 0;}@media screen and (max-height:480px){padding:1.5rem 0;}"]),b=function(e){var n=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Agata Kosior",meta:[{name:"description",content:"Portfolio page"},{name:"keywords",content:"portfolio, web developer"}],link:[{rel:"icon",type:"image/png",href:""+Object(d.withPrefix)("favicon.ico")}]}),i.a.createElement(f,null),i.a.createElement(h,null,i.a.createElement(g,null,n)))};b.propTypes={children:o.a.node.isRequired};n.a=b},150:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=t(138).b.div.withConfig({displayName:"text__Text",componentId:"vqi88k-0"})(["text-align:",";margin:",";width:100%;font-size:1rem;line-height:1.8rem;@media screen and (max-width:480px){font-size:0.8rem;line-height:1.5rem;}"],function(e){var n=e.align;return n||"left"},function(e){var n=e.margin;return n||"0"})},435:function(e,n,t){var a=t(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||t(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},436:function(e,n,t){e.exports=t.p+"static/memory-eb440b8f97d924bbc71b99ca530b7d47.png"},437:function(e,n,t){e.exports=t.p+"static/evnt-7b8f42951d8ede1d09dc69af9d603d3b.png"},438:function(e,n,t){e.exports=t.p+"static/wro-1e45df1abbbf5cc9f88849b0fcf5ae77.png"}}]);
//# sourceMappingURL=component---src-pages-works-js-36d1be9319dcf499617b.js.map