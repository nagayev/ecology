(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);a(77),a(102);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=a(20),o=a.n(i),m=a(25),s=a(26),u=a(28),d=a(27),E=a(29),p=a(1),f=(a(125),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(p.Panel,{id:t},c.a.createElement(p.PanelHeader,null,"Example"),n&&c.a.createElement(p.Group,{title:"User Data Fetched with VK Connect"},c.a.createElement(p.ListItem,{before:n.photo_200?c.a.createElement(p.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(p.Group,{title:"Navigation Example"},c.a.createElement(p.Div,null,c.a.createElement(p.Button,{size:"xl",level:"2",onClick:a,"data-to":"planet"},"Show me the Persik, please"))))}),g=(a(126),function(e){return c.a.createElement("div",{id:"header_earth"},e.text)}),h=(a(127),function(e){return c.a.createElement("p",{id:"header_tasks"},e.text)}),b={PACKET_TYPE:"packet",LAMP_TYPE:"lamp",getTask:function(e,t){return e===b.PACKET_TYPE?"\u0423\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c ".concat(t," \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u0430 "):e===b.LAMP_TYPE?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0443 ".concat(t," \u043b\u0430\u043c\u043f\u043e\u0447\u043a\u0443 "):"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u0442\u0440\u043e\u043b\u043b\u0438\u043d\u0433"}},A=b,v=(a(128),function(e){return c.a.createElement("button",{className:"progress",onClick:e.go,"data-to":"quest"},A.getTask(e.type,e.count),c.a.createElement("div",{className:"line"}),c.a.createElement("span",{className:"bold"},"0/",e.count))}),w=a(67),x=a.n(w),P=a(68),k=a.n(P),_=(a(129),function(e){return c.a.createElement(p.Panel,{id:e.id},c.a.createElement("div",{id:"content"},c.a.createElement(g,{text:"recycle."}),c.a.createElement("div",{id:"div_earth",onClick:e.go,"data-to":"problem"},c.a.createElement("img",{src:x.a,id:"img_earth0",alt:""}),c.a.createElement("img",{src:k.a,id:"img_earth1",alt:"Failed to load planet 1"})),c.a.createElement(h,{text:"\u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),c.a.createElement(v,{go:e.go,type:A.PACKET_TYPE,count:"2"}),c.a.createElement(v,{go:e.go,type:A.LAMP_TYPE,count:"1"}),c.a.createElement(v,{go:e.go,type:A.PACKET_TYPE,count:"5"})))}),y=a(75),C=(a(130),a(69)),T=a.n(C),M=function(e){return c.a.createElement("p",{onClick:e.go,"data-to":"planet",id:"arrow"},c.a.createElement("img",{src:T.a,height:"20",width:"32",alt:"<-"}))},N=(a(131),function(e){return c.a.createElement("div",{className:"fact"},e.text)}),j=(a(132),function(e){return c.a.createElement("div",{className:"fact2"},e.text)}),O=function(e){return c.a.createElement("div",null,c.a.createElement(N,{text:"5%"}),c.a.createElement(j,{text:"\u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u0438\u0434\u0435\u0442 \u043d\u0430 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0443"}),c.a.createElement(N,{text:"80%"}),c.a.createElement(j,{text:"\u043c\u0443\u0441\u043e\u0440\u0430 \u0432 \u041c\u0438\u0440\u043e\u0432\u043e\u043c \u043e\u043a\u0435\u0430\u043d\u0435 \u2013 \u044d\u0442\u043e \u043d\u0435 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a"}),c.a.createElement(N,{text:"100 00"}),c.a.createElement(j,{text:"\u043c\u043e\u0440\u0441\u043a\u0438\u0445 \u0436\u0438\u0432\u044b\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432 \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e \u043f\u043e\u0433\u0438\u0431\u0430\u0435\u0442 \u043e\u0442 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430"}),c.a.createElement(N,{text:"~ 10%"}),c.a.createElement(j,{text:"\u043f\u043b\u044f\u0436\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f \u2013 \u044d\u0442\u043e \u043f\u043b\u0430\u0441\u0442\u0438\u043a"}))},U=(a(133),function(e){return c.a.createElement("div",{id:"div_fix"},c.a.createElement("div",{id:"header_fix"},e.header),c.a.createElement("div",{id:"content_fix"},e.text))}),I=a(40),Y=(a(150),a(151),a(70)),B=a.n(Y),V=function(e){var t=c.a.useState([]),a=Object(y.a)(t,2),n=a[0],r=a[1];return c.a.createElement(p.Panel,{id:e.id},c.a.createElement(M,{go:e.go}),c.a.createElement("div",{id:"content"},c.a.createElement("img",{id:"img",src:B.a,alt:"Failed to load background"}),c.a.createElement("p",{id:"header_main"},"\u0427\u0435\u043c \u0432\u0440\u0435\u0434\u0435\u043d \u043f\u043b\u0430\u0441\u0442\u0438\u043a?"),c.a.createElement(O,null),c.a.createElement("br",null),c.a.createElement(U,{header:"\u041a\u0430\u043a \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u043b\u0430\u0441\u0442\u0438\u043a? ",text:"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043b\u0430\u0441\u0442\u0438\u043a \u043d\u0443\u0436\u043d\u043e\u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u0432 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0443\u043d\u043a\u0442\u043e\u0432 \u043f\u0440\u0438\u0435\u043c\u0430."}),c.a.createElement("br",null),c.a.createElement(I.Map,{id:"map",onAPIAvailable:function(){fetch("https://nagaevmt49.000webhostapp.com/recycle/server.php",{method:"GET"}).then(function(e){return e.json()}).then(function(e){return function(e){for(var t=Object.values(e),a=0;a<t.length;a++)t[a].lon=parseFloat(t[a].lng),t[a].lat=parseFloat(t[a].lat);r(t)}(e)})},center:[53.12,45],zoom:13},n.map(function(e){return c.a.createElement(I.Marker,{key:e.id,lat:e.lat,lon:e.lon})}))))},F=a(71),G=a.n(F),K={soil:["\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043a\u0438 \u043f\u043e\u0440\u0442\u044f\u0442 \u043f\u043e\u0447\u0432\u0443, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043e \u0433\u0438\u0431\u043d\u0435\u0442 \u0444\u043b\u043e\u0440\u0430.","\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043a\u0438 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u0432 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0443\u043d\u043a\u0442\u043e\u0432 \u043f\u0440\u0438\u0435\u043c\u0430."],water:["\u0412 \u043b\u0430\u043c\u043f\u043e\u0447\u043a\u0430\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0420\u0442\u0443\u0442\u044c, \u043e\u043d\u0430 \u043f\u0440\u043e\u043d\u0438\u043a\u0430\u0435\u0442 \u0432 \u0433\u0440\u0443\u043d\u0442\u043e\u0432\u044b\u0435 \u0432\u043e\u0434\u044b, \u0433\u0434\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0437\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043e\u0431\u0438\u0442\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043b\u0430\u043d\u0435\u0442\u044b.","\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043b\u0430\u043c\u043f\u043e\u0447\u043a\u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0441\u0434\u0430\u0442\u044c \u0432 \u043f\u0443\u043d\u043a\u0442 \u043f\u0440\u0438\u0435\u043c\u0430."],atmos:["\u041f\u0440\u0438 \u0441\u043e\u0436\u0436\u0435\u043d\u0438\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u0432 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0443 \u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044f\u0434\u043e\u0432\u0438\u0442\u043e\u0433\u043e \u0434\u044b\u043c\u0430.","\u041f\u0440\u0438 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u0432\u0440\u0435\u0434\u043d\u044b\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430 \u0432 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0443 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442."]};var L=function(e){return K[e]},Q=(a(152),a(153),a(72)),S=a.n(Q),q=a(73),D=a.n(q),H=a(74),R=a.n(H);var J=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(G.a,{organicArrows:!1},c.a.createElement("div",{"data-src":S.a},c.a.createElement("p",{className:"header_main"},"\u041f\u043e\u0447\u0432\u0430")),c.a.createElement("div",{"data-src":D.a},c.a.createElement("p",{className:"header_main"},"\u0412\u043e\u0434\u0430")),c.a.createElement("div",{"data-src":R.a},c.a.createElement("p",{className:"header_main"},"\u0410\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430")))}},{key:"componentDidMount",value:function(){for(var e=document.querySelectorAll(".aws-sld__bullets button"),t=["soil","water","atmos"],a=function(a){e[a].addEventListener("click",function(){var e;e=t[a],window.current=e,console.log("updateDOM",window.current),document.getElementsByClassName("text")[0].innerHTML=L(window.current)[0],document.getElementsByClassName("text")[1].innerHTML=L(window.current)[1]})},n=0;n<e.length;n++)a(n)}}]),t}(c.a.Component),W=(a(154),function(e){return window.current="soil",c.a.createElement(p.Panel,{id:e.id},c.a.createElement(M,{go:e.go}),c.a.createElement(J,null),c.a.createElement("p",{id:"header_problem"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430")," ",c.a.createElement("br",null),c.a.createElement("p",{className:"text"},L(window.current)[0]),c.a.createElement("p",{id:"header_decision"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435")," ",c.a.createElement("br",null),c.a.createElement("p",{className:"text"},L(window.current)[1]),c.a.createElement("button",{id:"button_help",onClick:e.go,"data-to":"quest"},"\u041f\u043e\u043c\u043e\u0433\u0438 \u043f\u043b\u0430\u043d\u0435\u0442\u0435"))}),z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":console.log("Get info about user"),e.setState({fetchedUser:t.detail.data});break;default:console.log("[Debug] ".concat(t.detail.type))}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(p.View,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(_,{id:"planet",go:this.go}),c.a.createElement(V,{id:"quest",go:this.go}),c.a.createElement(W,{id:"problem",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(z,null),document.getElementById("react"))},67:function(e,t,a){e.exports=a.p+"static/media/planet0.28ed19b3.png"},68:function(e,t,a){e.exports=a.p+"static/media/planet1.06fa902f.png"},69:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAA2ElEQVRIS2NkIAIsWbKE79evX/xJSUmPiVBOkhJGQqrnzp0bxsjI2M/AwPCJjY3NPCYm5hMhPaTI43UAkuUwMy2oHQo4HYBu+f///wuTk5NXkeI7YtRidQC9LAc5EMMB9LQcwwH0thzFAQNhOdwBWCxfxcLCQvUEhy1RMs6bN0+WgYHhBDEplhZqGKGl3HVaGE6MmeBcgB4FjIyMq/79+0efKIC5ckAT4UA6YnAVRAMREoOzMsIVEmxsbJp0bQ+gZVFQQ8SNbu0B5EIEVFqysbF9pLbvQXYAAGs9iL/d1mFUAAAAAElFTkSuQmCC"},70:function(e,t,a){e.exports=a.p+"static/media/bgplastic.79c8bc3a.png"},72:function(e,t,a){e.exports=a.p+"static/media/bgsoil.b5761aba.png"},73:function(e,t,a){e.exports=a.p+"static/media/bgwater.74e1bb9d.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/bgatmos.e107b5e4.png"},76:function(e,t,a){e.exports=a(155)}},[[76,1,2]]]);
//# sourceMappingURL=main.38560af6.chunk.js.map