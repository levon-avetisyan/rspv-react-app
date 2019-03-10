(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(7),o=n.n(r),s=(n(22),n(2)),l=n(1),u=n(3),c=n(8),d=n(9),m=n(11),g=n(10),f=n(12),h=(n(23),function(e){return e.isEditing?a.a.createElement("input",{type:"text",value:e.children,onChange:e.handleNameEdits}):a.a.createElement("span",null,e.children)}),E=function(e){return a.a.createElement("li",null,a.a.createElement(h,{isEditing:e.isEditing,handleNameEdits:function(t){return e.setName(t.target.value)}},e.name),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:e.isConfirmed,onChange:e.handleConfirmation})," Confirmed"),a.a.createElement("button",{onClick:e.handleToggleEditing},e.isEditing?"save":"edit"),a.a.createElement("button",{onClick:e.handleRemove},"remove"))},p=function(e){return e.name?a.a.createElement("li",{className:"pending"},a.a.createElement("span",null,e.name)):null},v=function(e){return a.a.createElement("ul",null,a.a.createElement(p,{name:e.pendingGuest}),e.guests.filter(function(t){return!e.isFiltered||t.isConfirmed}).map(function(t,n){return a.a.createElement(E,{name:t.name,key:n,isConfirmed:t.isConfirmed,isEditing:t.isEditing,handleConfirmation:function(){return e.toggleConfirmationAt(n)},handleToggleEditing:function(){return e.toggleEditingAt(n)},setName:function(t){return e.setNameAt(t,n)},handleRemove:function(){return e.removeGuestAt(n)}})}))},b=function(e){return a.a.createElement("table",{className:"counter"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Attending:"),a.a.createElement("td",null,e.numberAttending)),a.a.createElement("tr",null,a.a.createElement("td",null,"Unconfirmed:"),a.a.createElement("td",null,e.numberUnconfirmed)),a.a.createElement("tr",null,a.a.createElement("td",null,"Total:"),a.a.createElement("td",null,e.totalInvited))))},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={isFiltered:!1,pendingGuest:"",guests:[{name:"Treasure",isConfirmed:!1,isEditing:!1},{name:"Nik",isConfirmed:!0,isEditing:!1},{name:"Matt ",isConfirmed:!1,isEditing:!0}]},n.toggleGuestPropertyAt=function(e,t){return n.setState({guests:n.state.guests.map(function(n,i){return i===t?Object(u.a)({},n,Object(l.a)({},e,!n[e])):n})})},n.toggleConfirmationAt=function(e){return n.toggleGuestPropertyAt("isConfirmed",e)},n.removeGuestAt=function(e){return n.setState({guests:[].concat(Object(s.a)(n.state.guests.slice(0,e)),Object(s.a)(n.state.guests.slice(e+1)))})},n.toggleEditingAt=function(e){return n.toggleGuestPropertyAt("isEditing",e)},n.setNameAt=function(e,t){return n.setState({guests:n.state.guests.map(function(n,i){return i===t?Object(u.a)({},n,{name:e}):n})})},n.toggleFilter=function(){return n.setState({isFiltered:!n.state.isFiltered})},n.handleNameInput=function(e){return n.setState({pendingGuest:e.target.value})},n.newGuestSubmitHandler=function(e){e.preventDefault(),n.setState({guests:[{name:n.state.pendingGuest,isConfirmed:!1,isEditing:!1}].concat(Object(s.a)(n.state.guests)),pendingGuest:""})},n.getTotalInvited=function(){return n.state.guests.length},n.getAttendingGuests=function(){return n.state.guests.reduce(function(e,t){return t.isConfirmed?e+1:e},0)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.getTotalInvited(),t=this.getAttendingGuests(),n=e-t;return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null,"RSVP"),a.a.createElement("p",null,"A Treehouse App"),a.a.createElement("form",{onSubmit:this.newGuestSubmitHandler},a.a.createElement("input",{type:"text",onChange:this.handleNameInput,value:this.state.pendingGuest,placeholder:"Invite Someone"}),a.a.createElement("button",{type:"submit",name:"submit",value:"submit"},"Submit"))),a.a.createElement("div",{className:"main"},a.a.createElement("div",null,a.a.createElement("h2",null,"Invitees"),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",onChange:this.toggleFilter,checked:this.state.isFiltered})," Hide those who haven't responded")),a.a.createElement(b,{totalInvited:e,numberAttending:t,numberUnconfirmed:n}),a.a.createElement(v,{guests:this.state.guests,toggleConfirmationAt:this.toggleConfirmationAt,toggleEditingAt:this.toggleEditingAt,setNameAt:this.setNameAt,isFiltered:this.state.isFiltered,removeGuestAt:this.removeGuestAt,pendingGuest:this.state.pendingGuest})))}}]),t}(i.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(a.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rspv-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rspv-react-app","/service-worker.js");A?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.455d8918.chunk.js.map