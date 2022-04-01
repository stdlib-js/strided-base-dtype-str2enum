// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l,v=function(t,r,e){var n,l,v,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),v="get"in e,p="set"in e,l&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t},p=n,s=v,y=(l=e()?p:s,l);var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},g=b,m=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var d=function(){return m.slice()},h=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var j=function(){return h.slice()};var _=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},w=l;var O=function(t,r,e){w(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},S=O;var P=function(t){return Object.keys(Object(t))},E=P;var x=function(){return function(){return 2!==(E(arguments)||"").length}(1,2)},I=void 0!==Object.keys;var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return T&&"symbol"==typeof Symbol.toStringTag},k=Object.prototype.toString,N=k;var B=function(t){return N.call(t)},V=Object.prototype.hasOwnProperty;var F=function(t,r){return null!=t&&V.call(t,r)},G="function"==typeof Symbol?Symbol.toStringTag:"",L=F,M=G,X=k;var Y=B,C=function(t){var r,e,n;if(null==t)return X.call(t);e=t[M],r=L(t,M);try{t[M]=void 0}catch(r){return X.call(t)}return n=X.call(t),r?t[M]=e:delete t[M],n},D=A()?C:Y,H=D;var R=function(t){return"[object Arguments]"===H(t)},W=R;var z=function(){return W(arguments)}();var U=function(t){return"string"==typeof t},q=String.prototype.valueOf;var J=D,K=function(t){try{return q.call(t),!0}catch(t){return!1}},Q=A();var Z=function(t){return"object"==typeof t&&(t instanceof String||(Q?K(t):"[object String]"===J(t)))},$=U,tt=Z;var rt=g,et=function(t){return $(t)||tt(t)},nt=Z;rt(et,"isPrimitive",U),rt(et,"isObject",nt);var ot=et;var it=function(t){return"number"==typeof t},ut=Number,ct=ut.prototype.toString;var at=D,ft=ut,lt=function(t){try{return ct.call(t),!0}catch(t){return!1}},vt=A();var pt=function(t){return"object"==typeof t&&(t instanceof ft||(vt?lt(t):"[object Number]"===at(t)))},st=it,yt=pt;var bt=g,gt=function(t){return st(t)||yt(t)},mt=pt;bt(gt,"isPrimitive",it),bt(gt,"isObject",mt);var dt=gt;var ht=function(t){return t!=t},jt=dt.isPrimitive,_t=ht;var wt=function(t){return jt(t)&&_t(t)},Ot=dt.isObject,St=ht;var Pt=function(t){return Ot(t)&&St(t.valueOf())},Et=wt,xt=Pt;var It=g,Tt=function(t){return Et(t)||xt(t)},At=Pt;It(Tt,"isPrimitive",wt),It(Tt,"isObject",At);var kt=Tt,Nt=Number.POSITIVE_INFINITY,Bt=ut.NEGATIVE_INFINITY,Vt=Math.floor;var Ft=function(t){return Vt(t)===t},Gt=Nt,Lt=Bt,Mt=Ft;var Xt=function(t){return t<Gt&&t>Lt&&Mt(t)},Yt=dt.isPrimitive,Ct=Xt;var Dt=function(t){return Yt(t)&&Ct(t)},Ht=dt.isObject,Rt=Xt;var Wt=function(t){return Ht(t)&&Rt(t.valueOf())},zt=Dt,Ut=Wt;var qt=g,Jt=function(t){return zt(t)||Ut(t)},Kt=Wt;qt(Jt,"isPrimitive",Dt),qt(Jt,"isObject",Kt);var Qt,Zt=Jt,$t=Object.prototype.propertyIsEnumerable;Qt=!$t.call("beep","0");var tr=ot,rr=kt.isPrimitive,er=Zt.isPrimitive,nr=$t,or=Qt;var ir=function(t,r){var e;return null!=t&&(!(e=nr.call(t,r))&&or&&tr(t)?!rr(r=+r)&&er(r)&&r>=0&&r<t.length:e)},ur=ir,cr=D;var ar=Array.isArray?Array.isArray:function(t){return"[object Array]"===cr(t)},fr=F,lr=ur,vr=ar,pr=Ft;var sr=z?R:function(t){return null!==t&&"object"==typeof t&&!vr(t)&&"number"==typeof t.length&&pr(t.length)&&t.length>=0&&t.length<=4294967295&&fr(t,"callee")&&!lr(t,"callee")},yr=sr,br=P,gr=Array.prototype.slice;var mr=function(t){return yr(t)?br(gr.call(t)):br(t)},dr=ar;var hr=function(t){return null!==t&&"object"==typeof t};g(hr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!dr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(hr));var jr=hr;var _r=ur((function(){}),"prototype"),wr=!ur({toString:null},"toString"),Or=Ft;var Sr=kt,Pr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Or(t.length)&&t.length>=0&&t.length<=9007199254740991},Er=ot.isPrimitive,xr=Zt.isPrimitive;var Ir=function(t,r,e){var n,o;if(!Pr(t)&&!Er(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!xr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Sr(r)){for(;o<n;o++)if(Sr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Tr=/./;var Ar=function(t){return"boolean"==typeof t},kr=Boolean.prototype.toString;var Nr=D,Br=function(t){try{return kr.call(t),!0}catch(t){return!1}},Vr=A();var Fr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Vr?Br(t):"[object Boolean]"===Nr(t)))},Gr=Ar,Lr=Fr;var Mr=g,Xr=function(t){return Gr(t)||Lr(t)},Yr=Fr;Mr(Xr,"isPrimitive",Ar),Mr(Xr,"isObject",Yr);var Cr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Hr=Xr.isPrimitive,Rr=function(){return new Function("return this;")()},Wr=Cr,zr=Dr,Ur=t(Object.freeze({__proto__:null}));var qr=function(t){if(arguments.length){if(!Hr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Rr()}if(Wr)return Wr;if(zr)return zr;if(Ur)return Ur;throw new Error("unexpected error. Unable to resolve global object.")},Jr=qr(),Kr=Jr.document&&Jr.document.childNodes,Qr=Int8Array,Zr=Tr,$r=Kr,te=Qr;var re=function(){return"function"==typeof Zr||"object"==typeof te||"function"==typeof $r};var ee=function(){return/^\s*function\s*([^(]*)/i},ne=ee;g(ne,"REGEXP",ee());var oe=jr;var ie=D,ue=ne.REGEXP,ce=function(t){return oe(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ae=function(t){var r,e,n;if(("Object"===(e=ie(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return ce(t)?"Buffer":e},fe=ae;var le=ae;var ve=function(t){var r;return null===t?"null":"object"===(r=typeof t)?fe(t).toLowerCase():r},pe=function(t){return le(t).toLowerCase()},se=re()?pe:ve;var ye,be=function(t){return t.constructor&&t.constructor.prototype===t},ge="undefined"==typeof window?void 0:window,me=F,de=Ir,he=se,je=be,_e=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we=ge;ye=function(){var t;if("undefined"===he(we))return!1;for(t in we)try{-1===de(_e,t)&&me(we,t)&&null!==we[t]&&"object"===he(we[t])&&je(we[t])}catch(t){return!0}return!1}();var Oe="undefined"!=typeof window,Se=ye,Pe=be,Ee=Oe;var xe=jr,Ie=F,Te=sr,Ae=_r,ke=wr,Ne=function(t){if(!1===Ee&&!Se)return Pe(t);try{return Pe(t)}catch(t){return!1}},Be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ve=P,Fe=mr,Ge=function(t){var r,e,n,o,i,u,c;if(o=[],Te(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Ie(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof t)&&!xe(t))return o;e=Ae&&n}for(i in t)e&&"prototype"===i||!Ie(t,i)||o.push(String(i));if(ke)for(r=Ne(t),c=0;c<Be.length;c++)u=Be[c],r&&"constructor"===u||!Ie(t,u)||o.push(String(u));return o},Le=I?x()?Fe:Ve:Ge,Me=S,Xe=Le;var Ye=function(t,r){var e,n,o;for(e=Xe(r),o=0;o<e.length;o++)n=e[o],Me(t,n,r[n]);return t},Ce=j,De=_,He=Ye;g(Ce,"enum",De),He(Ce,De());var Re=(0,Ce.enum)();var We=S,ze=Le;var Ue=function(t,r){var e,n,o;for(e=ze(r),o=0;o<e.length;o++)n=e[o],We(t,n,r[n]);return t},qe=d,Je=function(){return{bool:Re.bool,int8:Re.int8,uint8:Re.uint8,uint8c:Re.uint8c,int16:Re.int16,uint16:Re.uint16,int32:Re.int32,uint32:Re.uint32,int64:Re.int64,uint64:Re.uint64,float32:Re.float32,float64:Re.float64,complex64:Re.complex64,complex128:Re.complex128,binary:Re.binary,generic:Re.generic,notype:Re.notype,userdefined_type:Re.userdefined_type}},Ke=Ue;g(qe,"enum",Je),Ke(qe,Je());var Qe=(0,qe.enum)();var Ze=function(t){var r=Qe[t];return"number"==typeof r?r:null};export{Ze as default};
//# sourceMappingURL=mod.js.map
