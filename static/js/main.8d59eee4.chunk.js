(this.webpackJsonptasks_cb=this.webpackJsonptasks_cb||[]).push([[0],{16:function(e,t,a){e.exports=a(35)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(4),s=a.n(l),o=a(1),i=a(11),m=a.n(i),u=function(e,t){e=Math.abs(e);var a=t.split("|"),n=a[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]],c=n||a[1];return c||""},d=function(e){var t=e.count;return t>0&&r.a.createElement(r.a.Fragment,null,"/"," ",t," ",u(t,"item|items"))},f=Object(c.createContext)({tasks:[],addTask:function(){},editTask:function(){},removeTask:function(){}}),b=function(e){return function(t){return c.createElement(f.Consumer,null,(function(a){return c.createElement(e,Object.assign({},t,a))}))}},E=a(3),v=a.n(E),k=Object(c.memo)((function(e){var t=e.title,a=e.onClick,n=e.className;return r.a.createElement("button",{type:"button",className:v()("d-flex align-items-center btn btn-icon",[n]),"aria-label":t,onClick:a},r.a.createElement("span",null,t),r.a.createElement("svg",{className:"svg-icon ml-2","aria-hidden":"true",viewBox:"0 0 52 52"},r.a.createElement("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2 s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2 S39.604,28,38.5,28z"})))})),p=b((function(e){var t=e.tasks,a=e.setIsOpenTaskModal;return Object(c.useMemo)((function(){return r.a.createElement("header",{className:"task-info mb-md-5"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-xs p-3 pt-md-5 pl-md-4"},r.a.createElement("h5",{className:"task-info__title"},"Task list ",r.a.createElement(d,{count:t.length}))),r.a.createElement("div",{className:"col-xs p-3 pt-md-5 pr-md-4"},r.a.createElement(k,{className:"p-0 task-info__btn",title:"Create new",onClick:function(){return a(!0)}}))))}),[t.length])})),N=a(14),O=a(2),h=function(e,t){(e||t)&&localStorage.setItem(e,t)};!function(e){e.ADD_TASK="ADD_TASK",e.EDIT_TASK="EDIT_TASK",e.REMOVE_TASK="REMOVE_TASK"}(n||(n={}));var T=function(e,t){switch(t.type){case n.ADD_TASK:return Object(O.a)({},e,{tasks:[].concat(Object(N.a)(e.tasks),[t.task])});case n.EDIT_TASK:return Object(O.a)({},e,{tasks:e.tasks.map((function(e){return e.id!==t.task.id?e:Object(O.a)({},e,{},t.task)}))});case n.REMOVE_TASK:return Object(O.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.taskId}))});default:return e}},_=function(e){var t=e.children,a=e.getDefaultProps,l=Object(c.useContext)(f),s=Object(c.useReducer)(T,Object(O.a)({},l,{addTask:function(e){return u({type:n.ADD_TASK,task:e})},editTask:function(e){return u({type:n.EDIT_TASK,task:e})},removeTask:function(e){return u({type:n.REMOVE_TASK,taskId:e})}},a())),i=Object(o.a)(s,2),m=i[0],u=i[1];return h("tasks",JSON.stringify(m.tasks)),r.a.createElement(f.Provider,{value:Object(O.a)({},m,{},a())},t)};_.defaultProps={getDefaultProps:function(){return{}}};var w=_,j=Object(c.memo)((function(e){var t=e.title,a=e.onClick,n=e.className;return r.a.createElement("button",{type:"button",className:v()("d-inline-flex align-items-center btn btn-icon p-0",[n]),"aria-label":t,onClick:a},r.a.createElement("svg",{className:"svg-icon","aria-hidden":"true",viewBox:"0 0 348.333 348.334"},r.a.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))})),g=a(6),S=a(12),C=a.n(S),x=(a(33),Object(c.memo)((function(e){var t=e.children,a=Object(g.a)(e,["children"]);return r.a.createElement(C.a,Object.assign({ariaHideApp:!1,overlayClassName:"modal show",className:"modal-dialog",bodyOpenClassName:"modal-open",closeTimeoutMS:500},a),t)}))),D=function(e,t){return Object(O.a)({},e,{},t)},y=function(e){return Object.values(e).some((function(e){return null===e||void 0===e||0===e.length}))},A=b((function(e){var t=e.title,a=e.task,r=e.action,l=e.addTask,s=e.editTask,i=e.closeTaskModal,m=Object(g.a)(e,["title","task","action","addTask","editTask","closeTaskModal"]),u=Object(c.useState)(a),d=Object(o.a)(u,2),f=d[0],b=d[1],E=Object(c.useState)(!1),k=Object(o.a)(E,2),p=k[0],N=k[1];Object(c.useEffect)((function(){return m.isOpen&&b(a),function(){return N(!1)}}),[a,m.isOpen]);var O=function(e,t){e.preventDefault(),y(f)?N(!0):(!function(e,t){e===n.ADD_TASK&&l(t),e===n.EDIT_TASK&&s(t)}(r,t),N(!1),i())};return Object(c.useMemo)((function(){return c.createElement(x,m,c.createElement("div",{className:"modal-content"},c.createElement("div",{className:"modal-header"},c.createElement("h5",{className:"modal-title"},t),c.createElement("button",{onClick:i,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.createElement("div",{className:"modal-body"},c.createElement("form",{autoComplete:"off",onSubmit:function(e){return O(e,f)},className:v()("",{"was-validated":p}),id:"task-form",noValidate:!0},c.createElement("div",{className:"form-group"},c.createElement("label",{htmlFor:"task-name",className:"col-form-label"},"Name:"),c.createElement("input",{type:"text",className:"form-control",id:"task-name",placeholder:"Enter Name",value:f.name,onChange:function(e){var t=e.target;b(D(f,{name:t.value}))},required:!0}),c.createElement("div",{className:"invalid-feedback"},"Please provide a valid name.")),c.createElement("div",{className:"form-group"},c.createElement("label",{htmlFor:"task-description",className:"col-form-label"},"Description:"),c.createElement("textarea",{className:"form-control",id:"task-description",placeholder:"Enter Description",value:f.description,onChange:function(e){var t=e.target;b(D(f,{description:t.value}))},required:!0}),c.createElement("div",{className:"invalid-feedback"},"Please provide a valid description.")))),c.createElement("div",{className:"modal-footer"},c.createElement("button",{type:"button",className:"btn btn-secondary",onClick:i},"Cancel"),c.createElement("button",{type:"submit",form:"task-form",className:"btn btn-primary"},"Save"))))}),[m,t,p])})),M=a(13),K=function(e){var t=e.children,a=e.delay,n=e.className,l=Object(c.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1];return Object(c.useEffect)((function(){return setTimeout((function(){m(!0)}),a),function(){return m(!1)}}),[]),r.a.createElement(M.a,{in:i,timeout:500,classNames:n},t)},I=b((function(e){var t=e.task,a=e.index,l=e.isFirstRender,s=e.removeTask,i=Object(c.useState)(!1),m=Object(o.a)(i,2),u=m[0],d=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{delay:function(e){return e?50*a:0}(l),className:"fade-down"},r.a.createElement("div",{className:"d-flex table-row fade-down"},r.a.createElement("div",{className:"table-row__column text-center"},r.a.createElement("span",null,a,".")),r.a.createElement("div",{className:"table-row__column text-center"},r.a.createElement("svg",{"aria-hidden":"true",className:"svg-icon",viewBox:"0 0 511.626 511.626"},r.a.createElement("g",null,r.a.createElement("path",{d:"M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099 c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277 c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569 c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852 c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116 c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679 c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974 C26.169,159.743,37.307,170.736,49.106,178.729z"}),r.a.createElement("path",{d:"M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699 c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287 c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699 c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265 c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265 V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"})))),r.a.createElement("div",{className:"table-row__column text-nowrap overflow-hidden table-row__name",onClick:function(){return d(!0)}},t.name),r.a.createElement("div",{className:"table-row__column flex-grow-1 text-nowrap overflow-hidden"},t.description),r.a.createElement("div",{className:"table-row__column text-center"},r.a.createElement(j,{title:"Delete",onClick:function(){return s(t.id)}})))),r.a.createElement(A,{isOpen:u,title:"Edit Task",task:t,action:n.EDIT_TASK,onRequestClose:function(){return d(!1)},closeTaskModal:function(){return d(!1)}}))})),R=b((function(e){var t=e.tasks,a=(e.setIsOpenTaskModal,Object(c.useState)(!0)),n=Object(o.a)(a,2),l=n[0],s=n[1];return Object(c.useEffect)((function(){s(!1)}),[]),Object(c.useMemo)((function(){return r.a.createElement("main",{className:"table"},r.a.createElement(K,{delay:100,className:"fade-up"},r.a.createElement("div",{className:"d-flex font-weight-bold table-row"},r.a.createElement("div",{className:"table-row__column text-center"},"#"),r.a.createElement("div",{className:"table-row__column text-center"}),r.a.createElement("div",{className:"table-row__column"},"Name"),r.a.createElement("div",{className:"table-row__column flex-grow-1 text-nowrap"},"Description"),r.a.createElement("div",{className:"table-row__column text-center"},"Delete"))),t.map((function(e,t){return r.a.createElement(I,{isFirstRender:l,key:e.id,task:e,index:t+1})})))}),[t])})),V=function(e,t){var a=localStorage.getItem(e);return a?JSON.parse(a):t},P=Object(c.memo)((function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"container task-wrap"},r.a.createElement(w,{getDefaultProps:function(){return{tasks:V("tasks",[])}}},r.a.createElement(K,{delay:0,className:"fade-up"},r.a.createElement(p,{setIsOpenTaskModal:l})),r.a.createElement(R,{setIsOpenTaskModal:l}),r.a.createElement(A,{isOpen:a,title:"New Task",action:n.ADD_TASK,task:{id:m()(),name:"",description:""},onRequestClose:function(){return l(!1)},closeTaskModal:function(){return l(!1)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(34);s.a.render(r.a.createElement(P,null),document.getElementById("task-list")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d59eee4.chunk.js.map