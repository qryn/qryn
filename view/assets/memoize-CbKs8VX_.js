import{g as T}from"./react-B8DbRJ_3.js";var q=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function U(f,n){return!!(f===n||q(f)&&q(n))}function G(f,n){if(f.length!==n.length)return!1;for(var e=0;e<f.length;e++)if(!U(f[e],n[e]))return!1;return!0}function K(f,n){n===void 0&&(n=G);var e=null;function u(){for(var a=[],p=0;p<arguments.length;p++)a[p]=arguments[p];if(e&&e.lastThis===this&&n(a,e.lastArgs))return e.lastResult;var c=f.apply(this,a);return e={lastResult:c,lastArgs:a,lastThis:this},c}return u.clear=function(){e=null},u}var z=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)};function J(f,n){function e(u,a){if(f(u,a))return!0;if(Array.isArray(u))return!(!Array.isArray(a)||u.length!==a.length||!u.every(function(h,y){return e(h,a[y])}));if(Array.isArray(a))return!1;if(typeof u=="object"){if(typeof a!="object")return!1;var p=u===null,c=a===null;if(p||c)return p===c;var v=Object.keys(u),d=Object.keys(a);if(v.length!==d.length)return!1;var m=n?e:f;return!!v.every(function(h){return z(u,h)&&z(a,h)&&m(u[h],a[h])})}return!1}return e}var L=function(n,e){for(var u=0;u<n.length;u++)if(e(n[u]))return u;return-1};function Q(f,n){var e=[];function u(p){var c=L(e,function(d){return n(p,d.key)});if(c>-1){var v=e[c];return c>0&&(e.splice(c,1),e.unshift(v)),v.value}}function a(p,c){u(p)||(e.unshift({key:p,value:c}),e.length>f&&e.pop())}return{get:u,put:a}}function W(f){var n;return{get:function(u){if(n&&f(u,n.key))return n.value},put:function(u,a){n={key:u,value:a}}}}function X(f,n){return f===1?W(n):Q(f,n)}function Z(f,n){var e=n?J(f,n):f;return function(u,a){if(u.length!==a.length)return!1;for(var p=0;p<u.length;p+=1)if(!e(u[p],a[p]))return!1;return!0}}function B(){for(var f=1,n=function(d,m){return d===m},e=!1,u=arguments.length,a=new Array(u),p=0;p<u;p++)a[p]=arguments[p];typeof a[0]=="number"&&(f=a.shift()),typeof a[0]=="function"?n=a.shift():typeof a[0]>"u"&&a.shift(),typeof a[0]=="boolean"&&(e=a[0]);var c=X(f,Z(n,e));return function(v){return function(){for(var d=arguments.length,m=new Array(d),h=0;h<d;h++)m[h]=arguments[h];var y=c.get(m);return y===void 0&&(y=v.apply(v,m),c.put(m,y)),y}}}var O=function f(n){return Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){n.hasOwnProperty(e)&&n[e]!==null&&(typeof n[e]=="object"||typeof n[e]=="function")&&!Object.isFrozen(n[e])&&f(n[e])}),n};const k=T(O);var A={exports:{}};(function(f,n){Object.defineProperty(n,"__esModule",{value:!0});function e(t){return typeof t=="object"&&!("toString"in t)?Object.prototype.toString.call(t).slice(8,-1):t}var u=typeof process=="object"&&!0;function a(t,r){if(!t)throw u?new Error("Invariant failed"):new Error(r())}n.invariant=a;var p=Object.prototype.hasOwnProperty,c=Array.prototype.splice,v=Object.prototype.toString;function d(t){return v.call(t).slice(8,-1)}var m=Object.assign||function(t,r){return h(r).forEach(function(i){p.call(r,i)&&(t[i]=r[i])}),t},h=typeof Object.getOwnPropertySymbols=="function"?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function y(t){return Array.isArray(t)?m(t.constructor(t.length),t):d(t)==="Map"?new Map(t):d(t)==="Set"?new Set(t):t&&typeof t=="object"?m(Object.create(Object.getPrototypeOf(t)),t):t}var S=function(){function t(){this.commands=m({},N),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(r,i){return r===i},this.update.newContext=function(){return new t().update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(r){this.update.isEquals=r},enumerable:!0,configurable:!0}),t.prototype.extend=function(r,i){this.commands[r]=i},t.prototype.update=function(r,i){var s=this,o=typeof i=="function"?{$apply:i}:i;Array.isArray(r)&&Array.isArray(o)||a(!Array.isArray(o),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),a(typeof o=="object"&&o!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(s.commands).join(", ")+".")});var l=r;return h(o).forEach(function(g){if(p.call(s.commands,g)){var H=r===l;l=s.commands[g](o[g],l,o,r),H&&s.isEquals(l,r)&&(l=r)}else{var w=d(r)==="Map"?s.update(r.get(g),o[g]):s.update(r[g],o[g]),Y=d(l)==="Map"?l.get(g):l[g];(!s.isEquals(w,Y)||typeof w>"u"&&!p.call(r,g))&&(l===r&&(l=y(r)),d(l)==="Map"?l.set(g,w):l[g]=w)}}),l},t}();n.Context=S;var N={$push:function(t,r,i){return P(r,i,"$push"),t.length?r.concat(t):r},$unshift:function(t,r,i){return P(r,i,"$unshift"),t.length?t.concat(r):r},$splice:function(t,r,i,s){return D(r,i),t.forEach(function(o){C(o),r===s&&o.length&&(r=y(s)),c.apply(r,o)}),r},$set:function(t,r,i){return I(i),t},$toggle:function(t,r){$(t,"$toggle");var i=t.length?y(r):r;return t.forEach(function(s){i[s]=!r[s]}),i},$unset:function(t,r,i,s){return $(t,"$unset"),t.forEach(function(o){Object.hasOwnProperty.call(r,o)&&(r===s&&(r=y(s)),delete r[o])}),r},$add:function(t,r,i,s){return M(r,"$add"),$(t,"$add"),d(r)==="Map"?t.forEach(function(o){var l=o[0],g=o[1];r===s&&r.get(l)!==g&&(r=y(s)),r.set(l,g)}):t.forEach(function(o){r===s&&!r.has(o)&&(r=y(s)),r.add(o)}),r},$remove:function(t,r,i,s){return M(r,"$remove"),$(t,"$remove"),t.forEach(function(o){r===s&&r.has(o)&&(r=y(s)),r.delete(o)}),r},$merge:function(t,r,i,s){return R(r,t),h(t).forEach(function(o){t[o]!==r[o]&&(r===s&&(r=y(s)),r[o]=t[o])}),r},$apply:function(t,r){return F(t),t(r)}},E=new S;n.isEquals=E.update.isEquals,n.extend=E.extend,n.default=E.update,n.default.default=f.exports=m(n.default,n);function P(t,r,i){a(Array.isArray(t),function(){return"update(): expected target of "+e(i)+" to be an array; got "+e(t)+"."}),$(r[i],i)}function $(t,r){a(Array.isArray(t),function(){return"update(): expected spec of "+e(r)+" to be an array; got "+e(t)+". Did you forget to wrap your parameter in an array?"})}function D(t,r){a(Array.isArray(t),function(){return"Expected $splice target to be an array; got "+e(t)}),C(r.$splice)}function C(t){a(Array.isArray(t),function(){return"update(): expected spec of $splice to be an array of arrays; got "+e(t)+". Did you forget to wrap your parameters in an array?"})}function F(t){a(typeof t=="function",function(){return"update(): expected spec of $apply to be a function; got "+e(t)+"."})}function I(t){a(Object.keys(t).length===1,function(){return"Cannot have more than one key in an object with $set"})}function R(t,r){a(r&&typeof r=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+e(r)}),a(t&&typeof t=="object",function(){return"update(): $merge expects a target of type 'object'; got "+e(t)})}function M(t,r){var i=d(t);a(i==="Map"||i==="Set",function(){return"update(): "+e(r)+" expects a target of type Set or Map; got "+e(i)})}})(A,A.exports);var _=A.exports;const b=T(_);export{B as a,k as d,K as m,b as u};