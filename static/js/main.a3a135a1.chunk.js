(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{182:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(3),c=n(57),s=n.n(c),o=(n(65),n(8)),i=n(9),u=n(11),l=n(10),d=n(1),p=n.n(d),h=n(4),f=n(14),b=n.n(f),j="https://covid19.mathdro.id/api",v=function(){var t=Object(h.a)(p.a.mark((function t(){var e,n,a,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(j);case 2:return e=t.sent,n=e.data,a=n.confirmed,r=n.deaths,c=n.lastUpdate,t.abrupt("return",{confirmed:a,deaths:r,lastUpdate:c});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(h.a)(p.a.mark((function t(){var e,n,a,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(j,"/daily"));case 2:for(e=t.sent,n=e.data,a=[],r=0;r<n.length;r++)c={confirmed:n[r].totalConfirmed,deaths:n[r].deaths.total,lastUpdate:n[r].reportDate},a.push(c);return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(h.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(j,"/countries/").concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",{confirmed:a.confirmed.value,deaths:a.deaths.value,lastUpdate:a.lastUpdate});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(h.a)(p.a.mark((function t(){var e,n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(j,"/countries"));case 2:return e=t.sent,n=e.data,a=n.countries.map((function(t){return t.name})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=n(58),g=n.n(m),k=function(t){var e=t.type,n=t.color,r=t.number,c=t.report;return Object(a.jsx)("div",{className:g.a.container,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{style:{color:n},children:e}),Object(a.jsx)("h3",{children:r.toLocaleString()}),Object(a.jsx)("h2",{children:new Date(c).toDateString()}),Object(a.jsx)("p",{children:"Number of active cases from COVID-19."}),Object(a.jsx)("div",{style:{backgroundColor:"".concat(n),width:"100%",height:"20px",position:"absolute",bottom:"0"}})]})})},w=n(32),C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},loading:!0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.props.country){t.next=9;break}return t.t0=this,t.next=4,y(this.props.country);case 4:t.t1=t.sent,t.t2={data:t.t1},t.t0.setState.call(t.t0,t.t2),t.next=15;break;case 9:return t.t3=this,t.next=12,x();case 12:t.t4=t.sent,t.t5={data:t.t4},t.t3.setState.call(t.t3,t.t5);case 15:this.setState({loading:!1});case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUpdate",value:function(){var t=Object(h.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.country==e.country){t.next=7;break}return t.t0=this,t.next=4,y(e.country);case 4:t.t1=t.sent,t.t2={data:t.t1},t.t0.setState.call(t.t0,t.t2);case 7:console.log(e);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("h2",{children:"Loading"}):this.props.country?Object(a.jsx)(w.Bar,{data:{labels:["Infected","Deaths"],datasets:[{label:"People",backgroundColor:["red","black"],data:[this.state.data.confirmed,this.state.data.deaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(this.props.country)}}}):Object(a.jsx)(w.Line,{data:{labels:this.state.data.map((function(t){return new Date(t.lastUpdate).toLocaleDateString()})),datasets:[{data:this.state.data.map((function(t){return t.confirmed})),label:"Infected",borderColor:"red",fill:!0},{data:this.state.data.map((function(t){return t.deaths})),label:"Deaths",borderColor:"black",backgroundColor:"black",fill:!0}]}})}}]),n}(r.Component),S=function(t){var e=t.name,n=t.setCountry;return Object(a.jsx)("div",{onClick:function(){return n(e)},style:{cursor:"pointer"},children:Object(a.jsx)("h2",{children:e})})},_=n(59),D=n.n(_),U=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={list:["USA"],search:"",loading:!0,show:!1},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,O();case 3:t.t1=t.sent,t.t2={list:t.t1},t.t0.setState.call(t.t0,t.t2),this.setState({loading:!1});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=[];this.state.list.forEach((function(n){n.toLowerCase().includes(t.state.search.toLowerCase())&&e.push(n)}));var n=[];if(!this.state.loading)for(var r=0;r<3;r++){var c=e[r];n.push(Object(a.jsx)(S,{name:c,setCountry:this.props.setCountry},c))}return Object(a.jsxs)("div",{className:D.a.input,children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){var n=e.target.value;t.setState({search:n})},onClick:function(){return t.setState({show:!0})}}),Object(a.jsx)("div",{children:this.state.show?n:null})]})}}]),n}(r.Component),A=n(21),L=n.n(A),N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},loading:!0,country:""},t.setCountry=function(e){t.setState({country:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;v().then((function(e){t.setState({data:e}),t.setState({loading:!1})}))}},{key:"render",value:function(){var t=this;return this.state.loading?Object(a.jsx)("h2",{children:"Loading"}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:L.a.container,children:[Object(a.jsx)(k,{type:"Infected",color:"red",number:this.state.data.confirmed.value,report:this.state.data.lastUpdate}),Object(a.jsx)("div",{className:L.a.top,children:Object(a.jsx)("h2",{children:this.state.country})}),Object(a.jsx)(k,{type:"Deaths",color:"black",number:this.state.data.deaths.value,report:this.state.data.lastUpdate})]}),Object(a.jsx)(U,{setCountry:function(e){return t.setCountry(e)}}),Object(a.jsx)("div",{className:L.a.chart,children:Object(a.jsx)(C,{country:this.state.country})})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))},21:function(t,e,n){t.exports={container:"App_container__3Q2k1",top:"App_top__DlJCD",chart:"App_chart__20WRI"}},58:function(t,e,n){t.exports={container:"Card_container__1N3GM"}},59:function(t,e,n){t.exports={input:"Country_input__3kCkH"}},65:function(t,e,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.a3a135a1.chunk.js.map