(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(8),o=s.n(i),r=(s(14),s(6)),c=s(1),m=s(2),u=s(4),l=s(3),h=s(5),p=(s(16),function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return a.a.createElement("main",{className:"main"},a.a.createElement("div",{className:"time-desc"},a.a.createElement("span",{className:"time-text"},"Hour "),a.a.createElement("span",{className:"time-text"},"Minute "),a.a.createElement("span",{className:"time-text"},"Second")),a.a.createElement("div",{className:"time-btn"},a.a.createElement("button",{className:"btn",onClick:this.props.startStopTime},this.props.btnName?"Stop":"Start"),a.a.createElement("button",{className:"btn",onClick:this.props.resetTime},"Reset")))}}]),e}(n.Component)),b=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return a.a.createElement("main",{className:"main"},a.a.createElement("div",{className:"time"},this.props.hours<10?"0"+this.props.hours:this.props.hours,":",this.props.minutes<10?"0"+this.props.minutes:this.props.minutes,":",this.props.seconds<10?"0"+this.props.seconds:this.props.seconds))}}]),e}(a.a.Component),d=function(t){function e(t){var s;return Object(c.a)(this,e),(s=Object(u.a)(this,Object(l.a)(e).call(this,t))).interval={},s.Timer=function(){s.interval=setInterval(function(){s.state.btnName&&(60==s.state.seconds?s.setState({seconds:0,minutes:s.state.minutes+1}):s.setState({seconds:s.state.seconds+1}),60==s.state.minutes&&s.setState({minutes:0,hours:s.state.hours+1}))},1e3)},s.stopTime=function(){s.setState({btnName:!s.state.btnName}),clearInterval(s.interval)},s.startStopTime=function(){s.stopTime(),s.Timer()},s.resetTime=function(){s.setState({minutes:0,hours:0,seconds:0})},s.state={seconds:0,minutes:0,hours:0,btnName:!1},s}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t;return a.a.createElement("div",{className:"App"},a.a.createElement(b,(t={hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds},Object(r.a)(t,"hours",this.state.hours),Object(r.a)(t,"minutes",this.state.minutes),Object(r.a)(t,"seconds",this.state.seconds),t)),a.a.createElement(p,{resetTime:this.resetTime,startStopTime:this.startStopTime,btnName:this.state.btnName}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,s){t.exports=s(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.c3f8fae0.chunk.js.map