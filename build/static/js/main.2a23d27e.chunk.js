(this["webpackJsonpblueriddle-extension"]=this["webpackJsonpblueriddle-extension"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/icon.26b30d31.png"},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(7),c=a.n(r),i=(a(13),a(2)),s=a(3),o=a(4),h=a(5),d=(a(14),a(15),function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={windowUrl:"",selection:"",asin:"",response:{verdict:!1,evidence:{qas:[],reviews:[]}}},l}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(t){e.setState({windowUrl:t[0].url}),alert(e.state.windowUrl);var a=e.state.windowUrl.split("/")[4];a&&e.setState({asin:""+a}),alert(e.state.asin);var l=new URL(e.state.windowUrl).origin;alert(l);var n="https://fdaf1c184814.ngrok.io/product/"+"".concat(e.state.asin)+"?urlOrigin="+l;alert(n),fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({response:t.body}),console.log("this.state",e.state.response)})).catch((function(e){alert("error",e)}))}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.state.response.verdict?n.a.createElement("div",{style:{color:"red",paddingLeft:"20px"}},n.a.createElement("h3",null,n.a.createElement("strong",null," WARNING "))):n.a.createElement("div",null),n.a.createElement("div",{style:{width:"300px"},class:"boxes"},this.state.response.evidence.qas?this.state.response.evidence.qas.map((function(e,t){return n.a.createElement("div",{class:"box"},n.a.createElement("h2",null,e.question),n.a.createElement("p",null,e.answer),n.a.createElement("div",{class:"svg"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},n.a.createElement("g",{fill:"none"},n.a.createElement("path",{fill:"#676E74",d:"M56.842 7.158c-9.526-9.563-24.902-9.525-34.428 0-8.025 8.026-9.45 20.44-3.525 30.003l-2.513 2.55-1.356 6.144 4.214 4.214 5.093-2.408 2.512-2.55a24.254 24.254 0 0030.003-3.525c9.563-9.526 9.525-24.902 0-34.428z"}),n.a.createElement("path",{fill:"#474F54",d:"M24.327 47.661l2.512-2.55a24.254 24.254 0 0030.003-3.525c9.563-9.526 9.525-24.902 0-34.428l-40.26 40.26 2.652 2.651 5.093-2.408z"}),n.a.createElement("path",{fill:"#64E1DC",d:"M54.213 9.787a20.56 20.56 0 00-14.585-6.041C28.236 3.746 19 12.98 19 24.372a20.564 20.564 0 006.041 14.586 20.564 20.564 0 0014.586 6.04c11.392 0 20.626-9.234 20.626-20.626a20.56 20.56 0 00-6.041-14.585z"}),n.a.createElement("path",{fill:"#00C8C8",d:"M60.254 24.372a20.56 20.56 0 00-6.041-14.585l-29.17 29.17A20.564 20.564 0 0039.627 45c11.392 0 20.626-9.235 20.626-20.627z"}),n.a.createElement("path",{fill:"#EFEFF4",d:"M56.239 23.41c-.184-.307-2.98-4.914-7.281-8.368-2.63-2.113-5.822-3.796-9.33-3.796-9.242 0-16.314 11.669-16.61 12.165l-.576.961.575.961c.184.309 2.98 4.916 7.28 8.37 2.631 2.112 5.823 3.795 9.33 3.795 9.243 0 16.315-11.668 16.612-12.165l.574-.96-.574-.962z"}),n.a.createElement("path",{fill:"#DADAE5",d:"M56.239 25.333l.574-.96-.574-.962c-.184-.308-2.98-4.915-7.281-8.369l-18.66 18.66c2.63 2.113 5.822 3.796 9.33 3.796 9.242 0 16.314-11.668 16.61-12.165z"}),n.a.createElement("path",{fill:"#64E1DC",d:"M43.604 20.396a5.607 5.607 0 00-3.976-1.65 5.632 5.632 0 00-5.626 5.626c0 1.551.631 2.958 1.65 3.976a5.609 5.609 0 003.976 1.65 5.632 5.632 0 005.625-5.626c0-1.55-.63-2.957-1.649-3.976z"}),n.a.createElement("path",{fill:"#00C8C8",d:"M45.253 24.372c0-1.55-.63-2.957-1.649-3.976l-7.952 7.952a5.608 5.608 0 003.976 1.65 5.632 5.632 0 005.625-5.626z"}),n.a.createElement("path",{fill:"#676E74",d:"M40.954 23.046a1.876 1.876 0 10-1.326 3.2 1.876 1.876 0 001.326-3.2z"}),n.a.createElement("path",{fill:"#474F54",d:"M41.503 24.372c0-.517-.21-.986-.55-1.326l-2.65 2.652a1.876 1.876 0 003.2-1.326z"}),n.a.createElement("path",{fill:"#575C60",d:"M20.333 43.667l-3.957-3.957L0 56.049l3.975 3.976L7.951 64l16.376-16.339z"}),n.a.createElement("path",{fill:"#333637",d:"M24.327 47.661l-3.994-3.994L3.975 60.025 7.951 64z"})))))})):n.a.createElement("div",null),this.state.response.evidence.reviews?this.state.response.evidence.reviews.map((function(e,t){return n.a.createElement("div",{class:"box"},n.a.createElement("h2",null,e.title),n.a.createElement("p",null,e.text),n.a.createElement("div",{class:"svg"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},n.a.createElement("g",{fill:"none"},n.a.createElement("path",{fill:"#EFEFF4",d:"M64 14.454v41.788H0V14.454l3.75-3.787h56.5z"}),n.a.createElement("path",{fill:"#DADAE5",d:"M64 14.454v41.788H32V10.667h28.25z"}),n.a.createElement("path",{fill:"#474F54",d:"M0 0h64v15.515H0z"}),n.a.createElement("path",{fill:"#32393F",d:"M32 0h32v15.515H32z"}),n.a.createElement("g",{fill:"#FF637B"},n.a.createElement("path",{d:"M7.758 5.818h3.685v3.879H7.758zM15.128 5.818h3.685v3.879h-3.685zM22.497 5.818h3.685v3.879h-3.685z"})),n.a.createElement("path",{fill:"#FF637B",d:"M45.576 42.245V64H34.355v-3.71h-3.74V64H19.394V42.245l11.37-9.275h3.105z"}),n.a.createElement("path",{fill:"#DADAE5",d:"M11.636 22.303h41.697v3.879H11.636z"}),n.a.createElement("path",{fill:"#C9C9D3",d:"M32 22.303h20.364v3.879H32z"}),n.a.createElement("path",{fill:"#E63950",d:"M45.576 42.245V64H33.939v-3.71H32V32.97h1.435z"}),n.a.createElement("path",{fill:"#EFEFF4",d:"M30.061 45.576h3.878v3.879h-3.878z"}),n.a.createElement("path",{fill:"#DADAE5",d:"M32 45.576h1.939v3.879H32z"}),n.a.createElement("path",{fill:"#676E74",d:"M50.424 45.779l-2.452 2.706-15.487-13.526-15.488 13.526-2.452-2.706 17.94-15.718z"}),n.a.createElement("path",{fill:"#474F54",d:"M32 30.061l18.424 15.718-2.518 2.706L32 34.959z"})))))})):n.a.createElement("div",null)))}}]),a}(l.Component)),m=(a(18),a(19),function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("h1",{style:{textAlign:"center"}},"Blueriddle"),n.a.createElement("div",{class:"topProgress"},n.a.createElement("div",{class:"topProgress-bar"})),n.a.createElement("h2",null,"Know where your Amazon products come from")),n.a.createElement(d,null))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2a23d27e.chunk.js.map