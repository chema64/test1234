!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(e,t){let n=[0],r=[];for(var o=1;o<=e;o++)r=[],n.forEach(function(e){for(var n=1;n<=t;n++)r.push(e+n)}),n=r;return n}function r(e){let t=[];return e.forEach(function(e){t[e]?t[e]+=1:t[e]=1}),t}function o(e,t,n,r="Results"){let o=document.createElement("table"),c=document.createElement("tr"),i=document.createElement("th");i.colSpan=4,i.innerHTML=r,c.appendChild(i),o.insertAdjacentElement("afterbegin",c),t.appendChild(o);let u=0,l=0;e.forEach(function(e){u+=e,l<e&&(l=e)}),e.forEach(function(e,t){const r=function(e,t,n,r,o){var c,i=document.createElement("tr"),u=document.createElement("td");u.innerHTML=e,i.appendChild(u),(c=document.createElement("td")).innerHTML=t+"/"+r,i.appendChild(c),(c=document.createElement("td")).innerHTML=Math.round(t/r*1e3)/10+"%",i.appendChild(c);var l=document.createElement("td"),a=function(e){const t=document.createElement("div");return t.style.width=e+"em",t}(t),d=t/n*o;return a.style.width=d+"px",l.appendChild(a),i.appendChild(l),i}(t,e,l,u,n);o.appendChild(r)})}function c(e){let t=[];const n=RegExp(/^([1-9][0-9]?)(d)([1-9][0-9]?)$/i);if("string"!=typeof e)return!1;e=e.trim().toLowerCase();let r=n.exec(e);return!!r&&(t[0]=parseInt(r[1],10),t[1]=parseInt(r[3],10),t)}e.exports={graph:function(e,t,i=400){let u=[],l="",a=[],d=[];if(!(u=c(e)))throw"input dice roll string is invalid: "+u;if(!(l=function(e){let t="";return"string"==typeof e?(t=e.trim(),document.querySelector(t)):e instanceof HTMLElement&&e}(t)))throw"specified element not found: "+t;l.innerHTML="",o(d=r(a=n(u[0],u[1])),l,i,e)},possibleRolls:n,compactResults:r,parseRollString:c}},function(e,t,n){n(0).graph("5d5","#results",100)}]);