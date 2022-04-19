/*! For license information please see SamplePage.1650352742312.ce750bae019bc0c0de33.js.LICENSE.txt */
(self.webpackChunkapp_studio_docs=self.webpackChunkapp_studio_docs||[]).push([[807],{3754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(5418);const a=n.n(r)().createContext("light")},4748:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(5418),a=n.n(r),l=n(4184),c=n.n(l),i=n(8216),o=n(3754),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},p=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};const u=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,r=void 0===n?{}:n,l=e.children,i=e.className,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","params","children","className"]),m=function(){var e,n,a;if(null===(a=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===a?void 0:a.store){var l=window.insights.chrome.$internal.store.getState();if(t&&l)return t.split("/").reduce((function(e,t){var n,a;return 0===t.indexOf(":")?e.dynamic=s(s({},e.dynamic),((n={})["data-".concat((a=t.substr(1),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[t.substr(1)],n)):e.staticPart=p(p([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[l.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=m.dynamic,d=m.staticPart;return a().createElement(o.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var n=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:a().createElement("section",s({},u,f,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),a().Children.map(l,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))),light:a().createElement("section",s({},u,f,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section"))}),l)}[e]}))}))},8117:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(5418),a=n.n(r),l=n(6359),c=n(8067),i=n(4748),o=n(4184),s=n.n(o),p=n(3754),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)};const m=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),l=s()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(p.Z.Consumer,null,(function(e){var t,c;void 0===e&&(e="light");var i=s()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((c={})["pf-m-light"]="light"===e,c));return a().createElement("section",u({},r,{className:"".concat(l," ").concat(i),"widget-type":"InsightsPageHeader"}),n)}))},f=function(e){var t=e.className,n=e.title,r=s()(t);return a().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},n)};var d=(0,r.lazy)((function(){return n.e(721).then(n.bind(n,8721))}));const h=function(){return(0,r.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"sample-page")}),[]),a().createElement(a().Fragment,null,a().createElement(m,null,a().createElement(f,{title:"This app was boostraped with CLI tool!"}),a().createElement("p",null," This is page header text ")),a().createElement(i.Z,null,a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,null,a().createElement(r.Suspense,{fallback:a().createElement(c.Spinner,null)},a().createElement(d,null))),a().createElement(c.StackItem,null,a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,null,a().createElement(c.Title,{headingLevel:"h2",size:"3xl"}," ","Links"," ")),a().createElement(c.StackItem,null,a().createElement(l.Link,{to:"/oops"}," How to handle 500s in app ")),a().createElement(c.StackItem,null,a().createElement(l.Link,{to:"/no-permissions"}," How to handle 403s in app ")))))))}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=../sourcemaps/SamplePage.5e8e698a13c88176a5a49f48725752f8.js.map