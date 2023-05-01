// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).str2enum=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,f=r.__lookupGetter__,c=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,n)||c.call(t,n)?(l=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=l):t[n]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,e.get),y&&u&&u.call(t,n,e.set),t};var l=n;function a(t,n,e){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function y(){return p.slice()}var s=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function b(){return s.slice()}function v(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function g(t,n,e){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function d(t){return Object.keys(Object(t))}var m=void 0!==Object.keys;var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return h&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function O(t,n){return null!=t&&_.call(t,n)}var S="function"==typeof Symbol?Symbol.toStringTag:"";var x,E=j()?function(t){var n,e,r;if(null==t)return w.call(t);e=t[S],n=O(t,S);try{t[S]=void 0}catch(n){return w.call(t)}return r=w.call(t),n?t[S]=e:delete t[S],r}:function(t){return w.call(t)};function I(t){return"[object Arguments]"===E(t)}x=function(){return I(arguments)}();var T=x;function P(t){return"string"==typeof t}var A=String.prototype.valueOf;var N=j();function k(t){return"object"==typeof t&&(t instanceof String||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===E(t)))}function B(t){return P(t)||k(t)}function V(t){return"number"==typeof t}a(B,"isPrimitive",P),a(B,"isObject",k);var F=Number,L=F.prototype.toString;var G=j();function Y(t){return"object"==typeof t&&(t instanceof F||(G?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===E(t)))}function C(t){return V(t)||Y(t)}function M(t){return t!=t}function X(t){return V(t)&&M(t)}function H(t){return Y(t)&&M(t.valueOf())}function W(t){return X(t)||H(t)}a(C,"isPrimitive",V),a(C,"isObject",Y),a(W,"isPrimitive",X),a(W,"isObject",H);var D=Number.POSITIVE_INFINITY,R=F.NEGATIVE_INFINITY,U=Math.floor;function q(t){return U(t)===t}function z(t){return t<D&&t>R&&q(t)}function J(t){return V(t)&&z(t)}function K(t){return Y(t)&&z(t.valueOf())}function Q(t){return J(t)||K(t)}a(Q,"isPrimitive",J),a(Q,"isObject",K);var Z=Object.prototype.propertyIsEnumerable;var $=!Z.call("beep","0");function tt(t,n){var e;return null!=t&&(!(e=Z.call(t,n))&&$&&B(t)?!X(n=+n)&&J(n)&&n>=0&&n<t.length:e)}var nt=Array.isArray?Array.isArray:function(t){return"[object Array]"===E(t)};var et=T?I:function(t){return null!==t&&"object"==typeof t&&!nt(t)&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=4294967295&&O(t,"callee")&&!tt(t,"callee")},rt=Array.prototype.slice;function ot(t){return null!==t&&"object"==typeof t}a(ot,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!nt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(ot));var it=tt((function(){}),"prototype"),ut=!tt({toString:null},"toString");function ft(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=9007199254740991}function ct(t,n,e){var r,o;if(!ft(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!J(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(W(n)){for(;o<r;o++)if(W(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var lt=/./;function at(t){return"boolean"==typeof t}var pt=Boolean.prototype.toString;var yt=j();function st(t){return"object"==typeof t&&(t instanceof Boolean||(yt?function(t){try{return pt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===E(t)))}function bt(t){return at(t)||st(t)}function vt(){return new Function("return this;")()}a(bt,"isPrimitive",at),a(bt,"isObject",st);var gt="object"==typeof self?self:null,dt="object"==typeof window?window:null,mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ht="object"==typeof mt?mt:null;var jt=function(t){if(arguments.length){if(!at(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return vt()}if(gt)return gt;if(dt)return dt;if(ht)return ht;throw new Error("unexpected error. Unable to resolve global object.")}(),wt=jt.document&&jt.document.childNodes,_t=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var St=/^\s*function\s*([^(]*)/i;function xt(t){var n,e,r,o;if(("Object"===(e=E(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=St.exec(r.toString()))return n[1]}return ot(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(Ot,"REGEXP",St);var Et="function"==typeof lt||"object"==typeof _t||"function"==typeof wt?function(t){return xt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?xt(t).toLowerCase():n};function It(t){return t.constructor&&t.constructor.prototype===t}var Tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pt="undefined"==typeof window?void 0:window;var At=function(){var t;if("undefined"===Et(Pt))return!1;for(t in Pt)try{-1===ct(Tt,t)&&O(Pt,t)&&null!==Pt[t]&&"object"===Et(Pt[t])&&It(Pt[t])}catch(t){return!0}return!1}(),Nt="undefined"!=typeof window;var kt,Bt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];kt=m?function(){return 2!==(d(arguments)||"").length}(1,2)?function(t){return et(t)?d(rt.call(t)):d(t)}:d:function(t){var n,e,r,o,i,u,f;if(o=[],et(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!O(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!ot(t))return o;e=it&&r}for(i in t)e&&"prototype"===i||!O(t,i)||o.push(String(i));if(ut)for(n=function(t){if(!1===Nt&&!At)return It(t);try{return It(t)}catch(t){return!1}}(t),f=0;f<Bt.length;f++)u=Bt[f],n&&"constructor"===u||!O(t,u)||o.push(String(u));return o};var Vt=kt;a(b,"enum",v),function(t,n){var e,r,o;for(e=Vt(n),o=0;o<e.length;o++)g(t,r=e[o],n[r])}(b,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ft={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Lt(){return{bool:Ft.bool,int8:Ft.int8,uint8:Ft.uint8,uint8c:Ft.uint8c,int16:Ft.int16,uint16:Ft.uint16,int32:Ft.int32,uint32:Ft.uint32,int64:Ft.int64,uint64:Ft.uint64,float32:Ft.float32,float64:Ft.float64,complex64:Ft.complex64,complex128:Ft.complex128,binary:Ft.binary,generic:Ft.generic,notype:Ft.notype,userdefined_type:Ft.userdefined_type}}a(y,"enum",Lt),function(t,n){var e,r,o;for(e=Vt(n),o=0;o<e.length;o++)g(t,r=e[o],n[r])}(y,Lt());var Gt=Lt();return function(t){var n=Gt[t];return"number"==typeof n?n:null}}));
//# sourceMappingURL=browser.js.map
