(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),u=a(3),c=a(5),o=a(4),i=a(6),s=a(13),m=a(14),h=a(42),b=a.n(h),p=a(12),d=a.n(p),v=d.a.create({baseURL:"https://3ecologies-seedbank.com"});v.interceptors.response.use(function(e){return e},function(e){var t=b()(e,["response","data","err"]);return Promise.reject(t||e.message)});var g=v;var E=a(15),f=a(8),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={eventname:"",sponges:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.submit=a.submit.bind(Object(f.a)(a)),a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),d.a.post("/api/events",{name:this.state.eventname,sponges:this.state.sponges}).then(function(e){console.log("Created event: "+e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("label",null,"Create an event",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"eventname",placeholder:"name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"sponges",placeholder:"sponges",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Create"}))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).state={events:[]},e}return Object(i.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/events").then(function(t){e.setState({events:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.events;return l.a.createElement("div",null,l.a.createElement("p",null,"Events:"),l.a.createElement("ul",null,e.map(function(e){var t=e.id,a=e.name,n=e.data;return l.a.createElement("li",{key:t.toString()},a," ",n)})))}}]),t}(n.Component),y=function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(j,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.login=a.login.bind(Object(f.a)(a)),a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),d.a.post("/api/auth/login",{email:this.state.email,password:this.state.password}).then(function(e){200===e.status&&localStorage.setItem("token",e.data.token)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login},l.a.createElement("label",null,"Login",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.signup=a.signup.bind(Object(f.a)(a)),a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){e.preventDefault(),d.a.post("/api/auth/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then(function(e){200===e.status&&localStorage.setItem("token",e.data.token)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("label",null,"Need to signup?",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).logout=a.logout.bind(Object(f.a)(a)),a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"logout",value:function(e){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.logout},l.a.createElement("input",{type:"submit",value:"Logout"})))}}]),t}(n.Component),S=function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w,null))},x=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"o0Oo0o 3ntryw4y o0oO0o"),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/events"},"Go to events"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/auth"},"Login or signup"))},D=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/auth",component:S}),l.a.createElement(m.b,{exact:!0,path:"/events",component:(e=y,function(t){function a(){var e;return Object(r.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).state={loading:!0,redirect:!1},e}return Object(i.a)(a,t),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={authorization:"Bearer "+localStorage.getItem("token")};g.get("/api/auth/verify",{headers:t}).then(function(t){200===t.status?e.setState({loading:!1}):e.setState({loading:!1,redirect:!0})}).catch(function(t){e.setState({loading:!1,redirect:!0})})}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?l.a.createElement(m.a,{to:"/auth"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(e,this.props))}}]),a}(n.Component))}),l.a.createElement(m.b,{exact:!0,path:"/",component:x}));var e}}]),t}(n.Component),L=a(45);a.n(L).a.render(l.a.createElement(s.a,null,l.a.createElement(D,null)),document.getElementById("root"))},46:function(e,t,a){e.exports=a(113)}},[[46,1,2]]]);
//# sourceMappingURL=main.3e6f342d.chunk.js.map