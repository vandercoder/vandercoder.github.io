(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"04b7":function(t,e,n){"use strict";var a=n("6025"),s=n("e126"),i=n("2877"),o=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"0566":function(t,e,n){t.exports=n.p+"img/temangawe-web.0503da61.png"},"4be6":function(t,e,n){},"4d7a":function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gradient-to-r from-black-200 to-black-100 py-4 min-h-screen"},[n("section",{staticClass:"lg:flex px-10 py-16 font-montserrat text-white leading-relaxed"},[n("TheSideBar",{attrs:{currentPage:t.currentPage},on:{"change-page":t.changePage}}),n("div",{staticClass:"lg:pl-32 lg:w-1/2",attrs:{id:"content"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n(t.currentPage,{tag:"component",on:{"go-to-page":t.changePage}})],1)],1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"absolute z-30 block lg:hidden top-0 right-0 p-8"},[n("div",{staticClass:"container",class:{active:t.openSideBar},on:{click:t.toggleSideBar}},[n("div",{staticClass:"bar1"}),n("div",{staticClass:"bar2"}),n("div",{staticClass:"bar3"})])]),n("nav",{staticClass:"h-screen transition-width duration-300 fixed z-10 top-0 right-0 text-lg py-32 w-0 font-montserrat shadow-xl bg-black-100 lg:w-1/2 lg:bg-transparent lg:shadow-none lg:block lg:pl-24 lg:flex-grow lg:pt-40",class:{"w-3/5":t.openSideBar},attrs:{id:"menu"}},[n("h3",{staticClass:"text-xl px-8  text-gray-300 font-bold"},[t._v("Menu")]),t._l(t.pages,(function(e){return n("div",{key:e.id,staticClass:"block mt-4 px-8 font-semibold transition-opacity duration-300 hover:opacity-50 cursor-pointer",class:{"text-red-pink":t.isActivePage(e)},on:{click:function(n){return t.$emit("change-page",e.name)}}},[n("font-awesome-icon",{attrs:{icon:[t.getIconFamily(e),t.getIconName(e)],"fixed-width":""}}),t._v(" "+t._s(e.name)+" ")],1)}))],2)])},r=[],c=(n("b0c0"),n("ac1f"),n("1276"),{name:"TheSidebar",props:["currentPage"],data:function(){return{openSideBar:!1,pages:[{id:1,icon:"fas-home",name:"Home"},{id:2,icon:"far-file-code",name:"Stacks"},{id:3,icon:"far-sticky-note",name:"Portfolio"},{id:4,icon:"far-question-circle",name:"Questions"}]}},methods:{isActivePage:function(t){var e="Page"+t.name,n=!1;return this.currentPage===e&&(n=!0),n},toggleSideBar:function(){this.openSideBar=!this.openSideBar},getIconFamily:function(t){return t.icon.split("-")[0]},getIconName:function(t){return t.icon.split(/-(.+)/)[1]}}}),l=c,u=(n("e5b3"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"5626955a",null),m=d.exports,f=n("04b7"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{attrs:{id:"content"}},t._l(t.fields,(function(e,a){return n("div",{key:e.id},[n("h2",{staticClass:"text-xl text-left sm:text-2xl font-semibold",class:{"mt-10":0!==a}},[t._v(" "+t._s(e.area)+" ")]),t._l(e.stacks,(function(e,a){return n("h3",{key:e.name,staticClass:"sm:inline-block text-lg sm:text-xl text-gray-400 font-semibold tracking-wide mt-4 sm:mt-2",class:{"sm:pl-12":0!==a,"opacity-25":!e.active}},[e.icon?n("font-awesome-icon",{attrs:{icon:["fab",e.icon],"fixed-width":""}}):t._e(),t._v(" "+t._s(e.name)+" ")],1)}))],2)})),0),t._m(1)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("h1",{staticClass:"text-4xl text-left sm:text-5xl font-semibold"},[t._v(" My Stacks ")]),n("div",{staticClass:"text-lg sm:text-xl text-gray-300 font-thin tracking-wide"},[t._v(" Technologies that I use for my projects ")]),n("hr",{staticClass:"border-2 opacity-75 my-4"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-right text-gray-300 mt-4"},[n("div",{staticClass:"bg-gray-400 h-2 w-2 inline-block"}),t._v(" in touch "),n("div",{staticClass:"bg-gray-400 h-2 w-2 inline-block opacity-25 ml-2"}),t._v(" not in touch ")])}],h={name:"PageStacks",data:function(){return{fields:[{id:1,area:"Programming Languages",stacks:[{name:"Python",icon:"python",active:!0},{name:"Javascript",icon:"js-square",active:!0},{name:"Ruby, Java, C++",icon:"",active:!1}]},{id:2,area:"Front-End Web Development",stacks:[{name:"Vue.js",icon:"vuejs",active:!0},{name:"TailwindCSS",icon:"css3-alt",active:!0},{name:"Bulma, Bootstrap",icon:"",active:!1}]},{id:3,area:"Back-End Web Development",stacks:[{name:"Ruby on Rails",icon:"",active:!0},{name:"Django",icon:"",active:!0},{name:"Flask",icon:"",active:!1}]},{id:4,area:"QA Test Automation",stacks:[{name:"Appium",icon:"",active:!0},{name:"Selenium",icon:"",active:!0},{name:"Katalon",icon:"",active:!1}]}]}}},v=h,b=Object(u["a"])(v,p,g,!1,null,"b5831d40",null),x=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{attrs:{id:"content"}},t._l(t.projects,(function(e){return n("a",{key:e.id,staticClass:"overflow-hidden relative flex cursor-pointer transition-opacity duration-300 py-4 sm:py-6 hover:opacity-75",attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"w-1/2 h-full background-transparent shadow-lg rounded-lg opacity-75",attrs:{src:e.image,alt:e.name}}),n("div",{staticClass:"flex items-center rounded-lg pl-4 sm:pl-6"},[n("div",[n("p",{staticClass:"text-base sm:text-lg font-semibold text-white"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"text-sm sm:text-base font-light text-gray-300"},[t._v(t._s(e.desc))])])])])})),0),t._m(1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("h1",{staticClass:"text-4xl text-left sm:text-5xl font-semibold"},[t._v(" Showcase ")]),n("p",{staticClass:"text-lg sm:text-xl text-gray-300 font-thin tracking-wide"},[t._v(" Web design ")]),n("hr",{staticClass:"border-2 opacity-75 my-4 "})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-base sm:text-lg text-gray-300 mt-4"},[t._v(' "Wait this is it?" '),n("a",{staticClass:"hvr-bounce-to-top",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://andika.xyz"}},[t._v("Old portfolio")])])}],_=n("d70c"),k=n.n(_),C=n("0566"),P=n.n(C),S={name:"PagePortfolio",data:function(){return{projects:[{id:1,name:"Cleanprof.id",desc:"Retailer Website | 2020",link:"https://www.cleanprof.id/",image:k.a},{id:2,name:"TemanGawe.com",desc:"Coffe Shop Website | 2020",link:"https://www.temangawe.com/",image:P.a}]}}},A=S,j=Object(u["a"])(A,w,y,!1,null,null,null),O=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{attrs:{id:"content"}},t._l(t.questions,(function(e){return n("div",{key:e.id,staticClass:"py-4 question-transition"},[n("div",{staticClass:"flex justify-between items-center cursor-pointer",on:{click:function(n){return t.toggleAnswer(e)}}},[n("h2",{staticClass:"w-11/12 text-lg text-left sm:text-xl font-semibold",domProps:{innerHTML:t._s(e.ask)}}),n("font-awesome-icon",{staticClass:"transition-tranform duration-500",class:{"transform rotate-180":e.showAnswer},attrs:{icon:["fas","chevron-down"],"fixed-width":""}})],1),n("transition",{attrs:{name:"slide-fade"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.showAnswer,expression:"question.showAnswer"}],staticClass:"text-lg sm:text-xl text-gray-300 font-light tracking-wide py-2",domProps:{innerHTML:t._s(e.answer)}})])],1)})),0)])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("h1",{staticClass:"text-4xl text-left sm:text-5xl font-semibold"},[t._v(" Quick Questions ")]),n("p",{staticClass:"text-lg sm:text-xl text-gray-300 font-thin tracking-wide"},[t._v(" Not frequently asked per se, but I have had people ask these questions. ")]),n("hr",{staticClass:"border-2 opacity-75 my-4 "})])}],$={name:"PageQuestions",data:function(){return{questions:[{id:1,ask:'"So uh.. what should I call you?"',answer:"People usually call me <span class=\"italic\">'Dika'</span> in \n          Indonesia. Though it usually doesn't sound good in English. \n          So you can call me <span class=\"italic\">'Andy'</span> as well.",showAnswer:!1},{id:2,ask:'"Are you a self-learned developer or did study CS in a University?"',answer:"Yes to both. I think most developers learned their stuff outside of Uni.",showAnswer:!1},{id:3,ask:'"Oh, so which University did you go into?"',answer:"I went to UGM in Yogyakarta, Indonesia.",showAnswer:!1},{id:4,ask:"\"So you like reading? Isn't that like everyone's fake hobby? \n              You know like travelling or hiking..\"",answer:'Yeah, but it is what it is. Check out my \n              <a href="https://www.goodreads.com/andiwilliam" \n              class="hvr-bounce-to-top">goodreads</a>, \n              maybe we have some common book interests.',showAnswer:!1},{id:5,ask:'"Can you hack Facebook?"',answer:"No..",showAnswer:!1}]}},methods:{toggleAnswer:function(t){t.showAnswer=!t.showAnswer},toggleArrow:function(t){var e="chevron-down";return t&&(e="chevron-up"),e}}},B=$,T=(n("aea8"),Object(u["a"])(B,E,I,!1,null,"6f9781ac",null)),M=T.exports,q={name:"App",components:{TheSideBar:m,PageHome:f["default"],PageStacks:x,PagePortfolio:O,PageQuestions:M},data:function(){return{currentPage:"PageHome"}},methods:{changePage:function(t){console.log(t),this.currentPage="Page"+t}}},W=q,Q=(n("034f"),Object(u["a"])(W,s,i,!1,null,null,null)),F=Q.exports,H=(n("ba8c"),n("ecee")),J=n("c074"),D=n("f2d1"),N=n("b702"),Y=n("ad3d");H["c"].add(J["c"],J["a"],J["b"],N["a"],N["c"],N["b"],D["d"],D["b"],D["c"],D["e"],D["a"]),a["a"].component("font-awesome-icon",Y["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(F)}}).$mount("#app")},6025:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-5xl text-left sm:text-5xl font-semibold"},[t._v(" Hi there. ")]),t._m(0),t._m(1),n("p",{staticClass:"text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8"},[t._v(" For more on the technologies that I've used, check out my "),n("span",{staticClass:"hvr-bounce-to-top cursor-pointer pb-1",on:{click:function(e){return t.$emit("go-to-page","Stacks")}}},[t._v(" stacks")]),t._v(". You can also check out my other works on my "),n("a",{staticClass:"hvr-bounce-to-top pb-1",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/andikawilliam"}},[t._v("Github. ")])]),n("p",{staticClass:"text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8"},[t._v(" Besides programming and helping around the house, I spend my time reading books (no really), running, and learning the guitar. ")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-2xl text-left sm:text-3xl font-semibold mt-2 sm:mt-6"},[t._v(" My name is "),n("span",{staticClass:"whitespace-no-wrap"},[t._v("Andika William.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8"},[t._v(" I'm a Web Developer from Jakarta with experience in writing "),n("span",{staticClass:"font-semibold"},[t._v(" Python ")]),t._v(" / "),n("span",{staticClass:"font-semibold"},[t._v("Javascript")]),t._v(" and using "),n("span",{staticClass:"font-semibold"},[t._v("Vue.js")]),t._v(". Also I'm a former QA Engineer who worked on test automation using "),n("span",{staticClass:"font-semibold"},[t._v("Appium")]),t._v(" / "),n("span",{staticClass:"font-semibold"},[t._v("Selenium")]),t._v(". ")])}]},"85ec":function(t,e,n){},aea8:function(t,e,n){"use strict";var a=n("afda"),s=n.n(a);s.a},afda:function(t,e,n){},ba8c:function(t,e,n){},d70c:function(t,e,n){t.exports=n.p+"img/cleanprof-web.4ea38047.png"},e126:function(t,e,n){"use strict";var a=n("4d7a"),s=n.n(a);e["default"]=s.a},e5b3:function(t,e,n){"use strict";var a=n("4be6"),s=n.n(a);s.a}});
//# sourceMappingURL=app.8d49f062.js.map