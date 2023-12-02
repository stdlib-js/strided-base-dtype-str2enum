// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(t){return"number"==typeof t}function r(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function i(t,e,n){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,r,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,u=parseInt(r,10),!isFinite(u)){if(!n(r))throw new Error("invalid integer. Value: "+r);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(r=(-u).toString(e),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=u.toString(e),u||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===a.call(t.specifier)?a.call(r):o.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,v=/(\..*[^0])0*e/;function w(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=p.call(r,v,"$1e"),r=p.call(r,m,"e"),r=p.call(r,h,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=p.call(r,g,"e+0$1"),r=p.call(r,y,"e-0$1"),t.alternate&&(r=p.call(r,d,"$1."),r=p.call(r,b,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===s.call(t.specifier)?s.call(r):f.call(r)}function x(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function j(t,e,n){var r=e-t.length;return r<0?t:t=n?t+x(r):x(r)+t}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function O(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function k(t){var e,n,r,o,a,l,f,s,p;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,s=0;s<t.length;s++)if(c(r=t[s]))l+=r;else{if(e=void 0!==r.precision,!(r=O(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+r+"`.");for(r.mapping&&(f=r.mapping),n=r.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[f],10),f+=1,S(r.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[f],10),f+=1,S(r.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[f],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=u(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!S(r.arg)){if((a=parseInt(r.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=S(a)?String(r.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=w(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=j(r.arg,r.width,r.padRight)),l+=r.arg||"",f+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function A(t){var e,n,r,i;for(n=[],i=0,r=T.exec(t);r;)(e=t.slice(i,T.lastIndex-r[0].length)).length&&n.push(e),n.push(I(r)),i=T.lastIndex,r=T.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function V(t){return"string"==typeof t}function P(t){var e,n,r;if(!V(t))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=A(t),(n=new Array(arguments.length))[0]=e,r=1;r<n.length;r++)n[r]=arguments[r];return k.apply(null,n)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,n){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===$.call(n))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(t,e)||R.call(t,e)?(r=t.__proto__,t.__proto__=N,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(t,e,n.get),a&&B&&B.call(t,e,n.set),t};var G=F;function W(t,e,n){G(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var X=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Z(){return X.slice()}var M={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Y(){var t;return 0===arguments.length?M.all.slice():(t=M[arguments[0]])?t.slice():[]}function U(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function H(t,e,n){G(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function z(t){return Object.keys(Object(t))}var D=void 0!==Object.keys,q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return q&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty;function tt(t,e){return null!=t&&Q.call(t,e)}var et,nt="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof nt?nt.toStringTag:"",it=J()?function(t){var e,n,r;if(null==t)return K.call(t);n=t[rt],e=tt(t,rt);try{t[rt]=void 0}catch(e){return K.call(t)}return r=K.call(t),e?t[rt]=n:delete t[rt],r}:function(t){return K.call(t)};function ot(t){return"[object Arguments]"===it(t)}et=function(){return ot(arguments)}();var at=et;function ut(t){return"string"==typeof t}var ct=String.prototype.valueOf,lt=J();function ft(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===it(t)))}function st(t){return ut(t)||ft(t)}function pt(t){return"number"==typeof t}W(st,"isPrimitive",ut),W(st,"isObject",ft);var gt=Number,yt=gt.prototype.toString,dt=J();function bt(t){return"object"==typeof t&&(t instanceof gt||(dt?function(t){try{return yt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===it(t)))}function ht(t){return pt(t)||bt(t)}function mt(t){return t!=t}function vt(t){return pt(t)&&mt(t)}function wt(t){return bt(t)&&mt(t.valueOf())}function xt(t){return vt(t)||wt(t)}W(ht,"isPrimitive",pt),W(ht,"isObject",bt),W(xt,"isPrimitive",vt),W(xt,"isObject",wt);var jt=Number.POSITIVE_INFINITY,_t=gt.NEGATIVE_INFINITY,St=Math.floor;function Et(t){return St(t)===t}function Ot(t){return t<jt&&t>_t&&Et(t)}function kt(t){return pt(t)&&Ot(t)}function Tt(t){return bt(t)&&Ot(t.valueOf())}function It(t){return kt(t)||Tt(t)}W(It,"isPrimitive",kt),W(It,"isObject",Tt);var At=Object.prototype.propertyIsEnumerable,Vt=!At.call("beep","0");function Pt(t,e){var n;return null!=t&&(!(n=At.call(t,e))&&Vt&&st(t)?!vt(e=+e)&&kt(e)&&e>=0&&e<t.length:n)}var Ft=Array.isArray?Array.isArray:function(t){return"[object Array]"===it(t)},Nt=at?ot:function(t){return null!==t&&"object"==typeof t&&!Ft(t)&&"number"==typeof t.length&&Et(t.length)&&t.length>=0&&t.length<=4294967295&&tt(t,"callee")&&!Pt(t,"callee")},$t=Array.prototype.slice;function Ct(t){return null!==t&&"object"==typeof t}W(Ct,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Ft(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Ct));var Bt=Pt((function(){}),"prototype"),Lt=!Pt({toString:null},"toString");function Rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Et(t.length)&&t.length>=0&&t.length<=9007199254740991}function Gt(t,e,n){var r,i;if(!Rt(t)&&!ut(t))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!kt(n))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(xt(e)){for(;i<r;i++)if(xt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Wt=/./;function Xt(t){return"boolean"==typeof t}var Zt=Boolean,Mt=Boolean.prototype.toString,Yt=J();function Ut(t){return"object"==typeof t&&(t instanceof Zt||(Yt?function(t){try{return Mt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===it(t)))}function Ht(t){return Xt(t)||Ut(t)}function zt(){return new Function("return this;")()}W(Ht,"isPrimitive",Xt),W(Ht,"isObject",Ut);var Dt="object"==typeof self?self:null,qt="object"==typeof window?window:null,Jt="object"==typeof globalThis?globalThis:null,Kt=function(t){if(arguments.length){if(!Xt(t))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return zt()}if(Jt)return Jt;if(Dt)return Dt;if(qt)return qt;throw new Error("unexpected error. Unable to resolve global object.")}(),Qt=Kt.document&&Kt.document.childNodes,te=Int8Array;function ee(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function re(t){var e,n,r,i;if(("Object"===(n=it(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=ne.exec(r.toString()))return e[1]}return Ct(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}W(ee,"REGEXP",ne);var ie="function"==typeof Wt||"object"==typeof te||"function"==typeof Qt?function(t){return re(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?re(t).toLowerCase():e};function oe(t){return t.constructor&&t.constructor.prototype===t}var ae,ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window,le=function(){var t;if("undefined"===ie(ce))return!1;for(t in ce)try{-1===Gt(ue,t)&&tt(ce,t)&&null!==ce[t]&&"object"===ie(ce[t])&&oe(ce[t])}catch(t){return!0}return!1}(),fe="undefined"!=typeof window,se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ae=D?function(){return 2!==(z(arguments)||"").length}(1,2)?function(t){return Nt(t)?z($t.call(t)):z(t)}:z:function(t){var e,n,r,i,o,a,u;if(i=[],Nt(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!tt(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(0==(r="function"==typeof t)&&!Ct(t))return i;n=Bt&&r}for(o in t)n&&"prototype"===o||!tt(t,o)||i.push(String(o));if(Lt)for(e=function(t){if(!1===fe&&!le)return oe(t);try{return oe(t)}catch(t){return!1}}(t),u=0;u<se.length;u++)a=se[u],e&&"constructor"===a||!tt(t,a)||i.push(String(a));return i};var pe=ae;W(Y,"enum",U),function(t,e){var n,r,i;for(n=pe(e),i=0;i<n.length;i++)H(t,r=n[i],e[r])}(Y,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var ge={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ye(){return{bool:ge.bool,int8:ge.int8,uint8:ge.uint8,uint8c:ge.uint8c,int16:ge.int16,uint16:ge.uint16,int32:ge.int32,uint32:ge.uint32,int64:ge.int64,uint64:ge.uint64,float32:ge.float32,float64:ge.float64,complex64:ge.complex64,complex128:ge.complex128,binary:ge.binary,generic:ge.generic,notype:ge.notype,userdefined_type:ge.userdefined_type}}W(Z,"enum",ye),function(t,e){var n,r,i;for(n=pe(e),i=0;i<n.length;i++)H(t,r=n[i],e[r])}(Z,ye());var de=ye();return function(t){var e=de[t];return"number"==typeof e?e:null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).str2enum=e();
//# sourceMappingURL=browser.js.map
