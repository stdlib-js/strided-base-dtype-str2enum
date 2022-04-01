// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).str2enum=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;var l,p=function(t,r,e){var n,l,p,v;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),v&&f&&f.call(t,r,e.set),t},v=n,s=p,y=(l=e()?v:s,l);var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},g=b,m=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var d=function(){return m.slice()},h=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var j=function(){return h.slice()};var w=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},_=l;var O=function(t,r,e){_(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},S=O;var P=function(t){return Object.keys(Object(t))},E=P;var x=function(){return function(){return 2!==(E(arguments)||"").length}(1,2)},I=void 0!==Object.keys;var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return T&&"symbol"==typeof Symbol.toStringTag},k=Object.prototype.toString,N=k;var B=function(t){return N.call(t)},V=Object.prototype.hasOwnProperty;var F=function(t,r){return null!=t&&V.call(t,r)},G="function"==typeof Symbol?Symbol.toStringTag:"",L=F,M=G,X=k;var Y=B,C=function(t){var r,e,n;if(null==t)return X.call(t);e=t[M],r=L(t,M);try{t[M]=void 0}catch(r){return X.call(t)}return n=X.call(t),r?t[M]=e:delete t[M],n},D=A()?C:Y,H=D;var R,W=function(t){return"[object Arguments]"===H(t)},z=W;R=function(){return z(arguments)}();var U=R;var q=function(t){return"string"==typeof t},J=String.prototype.valueOf;var K=D,Q=function(t){try{return J.call(t),!0}catch(t){return!1}},Z=A();var $=function(t){return"object"==typeof t&&(t instanceof String||(Z?Q(t):"[object String]"===K(t)))},tt=q,rt=$;var et=g,nt=function(t){return tt(t)||rt(t)},ot=$;et(nt,"isPrimitive",q),et(nt,"isObject",ot);var it=nt;var ut=function(t){return"number"==typeof t},ft=Number,ct=ft.prototype.toString;var at=D,lt=ft,pt=function(t){try{return ct.call(t),!0}catch(t){return!1}},vt=A();var st=function(t){return"object"==typeof t&&(t instanceof lt||(vt?pt(t):"[object Number]"===at(t)))},yt=ut,bt=st;var gt=g,mt=function(t){return yt(t)||bt(t)},dt=st;gt(mt,"isPrimitive",ut),gt(mt,"isObject",dt);var ht=mt;var jt=function(t){return t!=t},wt=ht.isPrimitive,_t=jt;var Ot=function(t){return wt(t)&&_t(t)},St=ht.isObject,Pt=jt;var Et=function(t){return St(t)&&Pt(t.valueOf())},xt=Ot,It=Et;var Tt=g,At=function(t){return xt(t)||It(t)},kt=Et;Tt(At,"isPrimitive",Ot),Tt(At,"isObject",kt);var Nt=At,Bt=Number.POSITIVE_INFINITY,Vt=ft.NEGATIVE_INFINITY,Ft=Math.floor;var Gt=function(t){return Ft(t)===t},Lt=Bt,Mt=Vt,Xt=Gt;var Yt=function(t){return t<Lt&&t>Mt&&Xt(t)},Ct=ht.isPrimitive,Dt=Yt;var Ht=function(t){return Ct(t)&&Dt(t)},Rt=ht.isObject,Wt=Yt;var zt=function(t){return Rt(t)&&Wt(t.valueOf())},Ut=Ht,qt=zt;var Jt=g,Kt=function(t){return Ut(t)||qt(t)},Qt=zt;Jt(Kt,"isPrimitive",Ht),Jt(Kt,"isObject",Qt);var Zt,$t=Kt,tr=Object.prototype.propertyIsEnumerable;Zt=!tr.call("beep","0");var rr=it,er=Nt.isPrimitive,nr=$t.isPrimitive,or=tr,ir=Zt;var ur=function(t,r){var e;return null!=t&&(!(e=or.call(t,r))&&ir&&rr(t)?!er(r=+r)&&nr(r)&&r>=0&&r<t.length:e)},fr=ur,cr=D;var ar=Array.isArray?Array.isArray:function(t){return"[object Array]"===cr(t)},lr=F,pr=fr,vr=ar,sr=Gt;var yr=U?W:function(t){return null!==t&&"object"==typeof t&&!vr(t)&&"number"==typeof t.length&&sr(t.length)&&t.length>=0&&t.length<=4294967295&&lr(t,"callee")&&!pr(t,"callee")},br=yr,gr=P,mr=Array.prototype.slice;var dr=function(t){return br(t)?gr(mr.call(t)):gr(t)},hr=ar;var jr=function(t){return null!==t&&"object"==typeof t};g(jr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!hr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(jr));var wr=jr;var _r=fr((function(){}),"prototype"),Or=!fr({toString:null},"toString"),Sr=Gt;var Pr=Nt,Er=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Sr(t.length)&&t.length>=0&&t.length<=9007199254740991},xr=it.isPrimitive,Ir=$t.isPrimitive;var Tr=function(t,r,e){var n,o;if(!Er(t)&&!xr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Ir(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Pr(r)){for(;o<n;o++)if(Pr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Ar=Tr,kr=/./;var Nr=function(t){return"boolean"==typeof t},Br=Boolean.prototype.toString;var Vr=D,Fr=function(t){try{return Br.call(t),!0}catch(t){return!1}},Gr=A();var Lr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Gr?Fr(t):"[object Boolean]"===Vr(t)))},Mr=Nr,Xr=Lr;var Yr=g,Cr=function(t){return Mr(t)||Xr(t)},Dr=Lr;Yr(Cr,"isPrimitive",Nr),Yr(Cr,"isObject",Dr);var Hr=Cr;var Rr=function(){return new Function("return this;")()},Wr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},qr="object"==typeof Ur?Ur:null;module.exports=qr;var Jr=Hr.isPrimitive,Kr=Rr,Qr=Wr,Zr=zr,$r=t(Object.freeze({__proto__:null}));var te=function(t){if(arguments.length){if(!Jr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Kr()}if(Qr)return Qr;if(Zr)return Zr;if($r)return $r;throw new Error("unexpected error. Unable to resolve global object.")},re=te(),ee=re.document&&re.document.childNodes,ne=Int8Array,oe=kr,ie=ee,ue=ne;var fe=function(){return"function"==typeof oe||"object"==typeof ue||"function"==typeof ie};var ce=function(){return/^\s*function\s*([^(]*)/i},ae=ce;g(ae,"REGEXP",ce());var le=wr;var pe=D,ve=ae.REGEXP,se=function(t){return le(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ye=function(t){var r,e,n;if(("Object"===(e=pe(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ve.exec(n.toString()))return r[1]}return se(t)?"Buffer":e},be=ye;var ge=ye;var me=function(t){var r;return null===t?"null":"object"===(r=typeof t)?be(t).toLowerCase():r},de=function(t){return ge(t).toLowerCase()},he=fe()?de:me;var je,we=function(t){return t.constructor&&t.constructor.prototype===t},_e="undefined"==typeof window?void 0:window,Oe=F,Se=Ar,Pe=he,Ee=we,xe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ie=_e;je=function(){var t;if("undefined"===Pe(Ie))return!1;for(t in Ie)try{-1===Se(xe,t)&&Oe(Ie,t)&&null!==Ie[t]&&"object"===Pe(Ie[t])&&Ee(Ie[t])}catch(t){return!0}return!1}();var Te="undefined"!=typeof window,Ae=je,ke=we,Ne=Te;var Be=wr,Ve=F,Fe=yr,Ge=_r,Le=Or,Me=function(t){if(!1===Ne&&!Ae)return ke(t);try{return ke(t)}catch(t){return!1}},Xe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ye=P,Ce=dr,De=function(t){var r,e,n,o,i,u,f;if(o=[],Fe(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!Ve(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!Be(t))return o;e=Ge&&n}for(i in t)e&&"prototype"===i||!Ve(t,i)||o.push(String(i));if(Le)for(r=Me(t),f=0;f<Xe.length;f++)u=Xe[f],r&&"constructor"===u||!Ve(t,u)||o.push(String(u));return o},He=I?x()?Ce:Ye:De,Re=S,We=He;var ze=function(t,r){var e,n,o;for(e=We(r),o=0;o<e.length;o++)n=e[o],Re(t,n,r[n]);return t},Ue=j,qe=w,Je=ze;g(Ue,"enum",qe),Je(Ue,qe());var Ke=(0,Ue.enum)();var Qe=S,Ze=He;var $e=function(t,r){var e,n,o;for(e=Ze(r),o=0;o<e.length;o++)n=e[o],Qe(t,n,r[n]);return t},tn=d,rn=function(){return{bool:Ke.bool,int8:Ke.int8,uint8:Ke.uint8,uint8c:Ke.uint8c,int16:Ke.int16,uint16:Ke.uint16,int32:Ke.int32,uint32:Ke.uint32,int64:Ke.int64,uint64:Ke.uint64,float32:Ke.float32,float64:Ke.float64,complex64:Ke.complex64,complex128:Ke.complex128,binary:Ke.binary,generic:Ke.generic,notype:Ke.notype,userdefined_type:Ke.userdefined_type}},en=$e;g(tn,"enum",rn),en(tn,rn());var nn=(0,tn.enum)();return function(t){var r=nn[t];return"number"==typeof r?r:null}}));
//# sourceMappingURL=bundle.js.map
