(this["webpackJsonp01-firebase-react"]=this["webpackJsonp01-firebase-react"]||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),u=(a(29),a(13)),o=a(2),i=a(20),s=(a(35),i.initializeApp({apiKey:"AIzaSyAMtZa_T7v3ZXspkVB7bbdXzjE2ymZsZj4",authDomain:"fir-react-auth-8ee30.firebaseapp.com",databaseURL:"https://fir-react-auth-8ee30.firebaseio.com",projectId:"fir-react-auth-8ee30",storageBucket:"fir-react-auth-8ee30.appspot.com",messagingSenderId:"785008082425",appId:"1:785008082425:web:38282fc89b919dc080d128"}));var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home"),r.a.createElement("button",{onClick:function(){return s.auth().signOut()}},"Sign Out"))},p=a(8),b=a.n(p),f=a(10),E=a(22),h=r.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(E.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){s.auth().onAuthStateChanged(u)}),[]),r.a.createElement(h.Provider,{value:{currentUser:l}},t)};var v=Object(o.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(f.a)(b.a.mark((function e(a){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,c=n.password,e.prev=2,e.next=5,s.auth().signInWithEmailAndPassword(r.value,c.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(h).currentUser?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{type:"submit"},"Log in")))}));var w=Object(o.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(f.a)(b.a.mark((function e(a){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,c=n.password,e.prev=2,e.next=5,s.auth().createUserWithEmailAndPassword(r.value,c.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{type:"submit"},"Sign Up")))})),g=a(23),j=function(e){var t=e.component,a=Object(g.a)(e,["component"]),c=Object(n.useContext)(h).currentUser;return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(o.a,{to:"login"})}}))};var O=function(){return r.a.createElement(d,null,r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(j,{exact:!0,path:"/",component:m}),r.a.createElement(o.b,{exact:!0,path:"/login",component:v}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:w}))))};l.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f8feddda.chunk.js.map