(this["webpackJsonpcurrent-weather-api"]=this["webpackJsonpcurrent-weather-api"]||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){},13:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(5),r=t.n(i),l=(t(10),t(4),t(11),t(2)),o=t(0);var a=function(){var e=Object(s.useState)(null),c=Object(l.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(null),r=Object(l.a)(i,2),a=(r[0],r[1]),d=Object(s.useState)(null),j=Object(l.a)(d,2),h=j[0],x=j[1],b=Object(s.useState)(!1),u=Object(l.a)(b,2),f=(u[0],u[1]),m=[],p="",O="https://api.ipify.org?format=json";if(new Request(O),Object(s.useEffect)((function(){fetch(O).then((function(e){return e.json()})).then((function(e){console.log("--------------\x3e3333n "+JSON.stringify(e.ip)),p="http://api.weatherapi.com/v1/current.json?key=6fed290694254461ac940949213010&q="+e.ip+"&aqi=no",a(e),f(!0),fetch(p).then((function(e){return e.json()})).then((function(e){n(e)}))}),(function(e){f(!0),x(e)}))}),[]),h)return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("img",{className:"align-self-start mr-3",style:{backgroundColor:"#02898a"}}),Object(o.jsx)("div",{className:"media-body",children:"Data NoT Available"})]})});for(var v in t)"location"===v&&m.push(Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"location-name",children:[t.location.region,", ",t.location.country]}),Object(o.jsx)("div",{class:"d-flex flex-row imageDiv",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("img",{src:t.current.condition.icon,alt:"Weather Picture"})})}),Object(o.jsxs)("div",{class:"d-flex flex-row",children:[Object(o.jsxs)("div",{class:"col temperature for_f",children:[t.current.temp_f," F"]}),Object(o.jsxs)("div",{class:"col temperature for_c",children:[t.current.temp_c," C"]})]}),Object(o.jsx)("div",{class:"d-flex flex-row description-text",children:Object(o.jsx)("div",{className:"col",children:t.current.condition.text})}),Object(o.jsx)("div",{class:"d-flex flex-row updated-text common",children:Object(o.jsxs)("div",{className:"col",children:["Updated as of ",t.location.localtime]})}),Object(o.jsx)("div",{class:"d-flex flex-row humidity common",children:Object(o.jsxs)("div",{className:"col",children:["Humidity ",t.current.humidity]})}),Object(o.jsx)("div",{class:"d-flex flex-row common",children:Object(o.jsxs)("div",{className:"col",children:["Wind ",t.current.wind_mph," mph"]})}),Object(o.jsx)("div",{class:"d-flex flex-row common",children:Object(o.jsxs)("div",{className:"col",children:["Visibility ",t.current.vis_miles," miles"]})}),Object(o.jsx)("div",{class:"d-flex flex-row common feels_like",children:Object(o.jsxs)("div",{className:"col",children:["Feels Like ",t.current.feelslike_f," F - ",t.current.feelslike_c," C"]})}),Object(o.jsxs)("div",{class:"ape-footer",children:[Object(o.jsx)("div",{class:"d-flex flex-row ",children:Object(o.jsx)("div",{class:"col",children:"App Provided By Egerton..."})}),Object(o.jsx)("div",{class:"d-flex flex-row ",children:Object(o.jsx)("div",{class:"col",children:"See these other projects"})}),Object(o.jsx)("div",{class:"d-flex flex-row",children:Object(o.jsxs)("div",{class:"col",children:[Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-wise-spender/",children:"React-Wise-Spender"}),"\xa0 ",Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-todo-list/",children:"React-Todo-List"}),"\xa0 ",Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"http://mason.gmu.edu/~eduring/IT331_PROJECT/index.html",children:"Front End Project"}),"\xa0 ",Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"http://mason.gmu.edu/~eduring/bangladesh/Home.html",children:"Bangladesh Web Project"}),"\xa0 ",Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-api-news/",children:"React-Api-News"}),"\xa0 ",Object(o.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/live-stocks-api/",children:"React-Api-Stocks"})]})})]})]})}));return Object(o.jsx)("div",{children:m})};var d=function(){return Object(o.jsx)("div",{className:"App container",children:Object(o.jsx)(a,{})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.987761a1.chunk.js.map