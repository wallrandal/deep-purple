(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(43)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),r=a.n(i),o=(a(20),a(2)),s=a(3),l=a(5),m=a(4),u=a(6),d=(a(22),a(1)),_=(a(24),a(13)),p=a.n(_),b=(a(39),a(41),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).maskMoney=function(e){return parseFloat(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})},a.responsive={0:{items:1},600:{items:2},1024:{items:3}},a.i=[],a.maskMoney=a.maskMoney.bind(Object(d.a)(Object(d.a)(a))),a.submit=a.submit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"submit",value:function(){alert("Compra Finalizada!")}},{key:"render",value:function(){var e=this,t={currentIndex:0,galleryItems:this.props.sectors.map(function(t){return c.a.createElement("div",{className:"Sector"},c.a.createElement("div",null,"Tipo: ",t.name),c.a.createElement("div",{className:"Sector__quantity"},c.a.createElement("label",{htmlFor:"quantity"},"Qtde:"),c.a.createElement("div",{className:"Sector__quantity__input"},c.a.createElement("input",{type:"number",defaultValue:"0",min:"0",name:"quantity[]"}))),c.a.createElement("div",null,"Valor Unit\xe1rio: ",e.maskMoney(t.value)))})};return c.a.createElement("div",null,c.a.createElement(p.a,{items:t.galleryItems,responsive:this.responsive,buttonsDisabled:!0,fadeOutAnimation:!0,mouseDragEnabled:!0,disableAutoPlayOnAction:!0,infinite:!1}),c.a.createElement("div",{className:"Sector__submit"},c.a.createElement("button",{onClick:this.submit,className:"Sector__submit__button"},"Finalizar Compra")),c.a.createElement("div",{className:"Sector__footer"},c.a.createElement("button",{onClick:this.submit,className:"Sector__submit__button"},"Finalizar Compra")))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){document.getElementById("sectors").scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Description"},c.a.createElement("a",{onClick:this.handleClick},c.a.createElement("button",{className:"Description__button"},"Compre Agora!")),c.a.createElement("div",{className:"Description__local"},c.a.createElement("div",{className:"Description__local_name"},this.props.local),c.a.createElement("div",{className:"Description__local_date"},this.props.date),c.a.createElement("div",{className:"Description__local_time"},this.props.time)),c.a.createElement("div",{className:"Description__sectors",id:"sectors"},c.a.createElement("div",{className:"Description__sectors__title"},"Escolha a Melhor Op\xe7\xe3o!"),c.a.createElement(b,{sectors:this.props.sectors})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={sectors:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("./Band1.json").then(function(e){return e.json()}).then(function(t){return e.setState({logo:t.logo,main_picture:t.main_picture,band_name:t.band_name,local:t.local,date:t.date,time:t.time,sectors:t.sectors})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.logo,a=e.main_picture,n=(e.band_name,e.local),i=e.date,r=e.time,o=e.sectors;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App__background"},c.a.createElement("div",{className:"App__background__content"},c.a.createElement("div",{className:"App__background__content__title"},c.a.createElement("img",{src:t})),c.a.createElement("div",{className:"App__background__content__header"},c.a.createElement("img",{src:a})),c.a.createElement(h,{local:n,date:i,time:r,sectors:o}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.8b66535f.chunk.js.map