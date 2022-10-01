// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n){return r[n]}function y(r,n){return r.get(n)}function v(r,n,t){r[n]=t}function p(r,n,t){r.set(t,n)}function s(r){var n=Boolean(r.get&&r.set);return{data:r,accessors:n,getter:n?y:l,setter:n?p:v}}function b(r){var n;return(n=s(r)).accessors?function(r){var n,t,e,o,u;for(n=r.data,o=r.getter,e=n.length,t=[],u=0;u<e;u++)t.push(o(n,u));return t}(n):function(r){var n,t,e;for(t=r.length,n=[],e=0;e<t;e++)n.push(r[e]);return n}(r)}function h(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}function w(r,n,t){var e,o;for(e=[],o=0;o<r;o++)e.push(n.call(t,o));return e}var A=Math.ceil;function _(r,n,t){var e,o,u;if((o=A((n-r)/t))<=1)return[r];for(e=[r],u=1;u<o;u++)e.push(r+t*u);return e}function d(r,n,t){var e,o,u,i;if(0===t)return[];for(u=(n-r)/(o=t-1),e=[r],i=1;i<o;i++)e.push(r+u*i);return e.push(n),e}function m(r){return r!=r}var g=Math.floor;function U(r){return g(r)===r}function j(r){return U(r/2)}function I(r){return j(r>0?r-1:r+1)}var O=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY;function N(r){return r===O||r===S}var E=Math.sqrt;function F(r){return Math.abs(r)}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var T=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;var P="function"==typeof Symbol?Symbol.toStringTag:"";var L=H&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return T.call(r);t=r[P],u=P,n=null!=(o=r)&&G.call(o,u);try{r[P]=void 0}catch(n){return T.call(r)}return e=T.call(r),n?r[P]=t:delete r[P],e}:function(r){return T.call(r)},M="function"==typeof Uint32Array;var V="function"==typeof Uint32Array?Uint32Array:null;var W,k="function"==typeof Uint32Array?Uint32Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===L(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x=W,B="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null;var q,z="function"==typeof Float64Array?Float64Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),t=n,r=(B&&t instanceof Float64Array||"[object Float64Array]"===L(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var C=q,D="function"==typeof Uint8Array;var J="function"==typeof Uint8Array?Uint8Array:null;var K,Q="function"==typeof Uint8Array?Uint8Array:void 0;K=function(){var r,n,t;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,256,257]),t=n,r=(D&&t instanceof Uint8Array||"[object Uint8Array]"===L(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var R=K,X="function"==typeof Uint16Array;var Z="function"==typeof Uint16Array?Uint16Array:null;var $,rr="function"==typeof Uint16Array?Uint16Array:void 0;$=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(X&&t instanceof Uint16Array||"[object Uint16Array]"===L(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr={uint16:$,uint8:R};(nr=new tr.uint16(1))[0]=4660;var er,or,ur=52===new tr.uint8(nr.buffer)[0];!0===ur?(er=1,or=0):(er=0,or=1);var ir={HIGH:er,LOW:or},fr=new C(1),ar=new x(fr.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,n){return fr[0]=n,r[0]=ar[cr],r[1]=ar[lr],r}function vr(r,n){return 1===arguments.length?yr([0,0],r):yr(r,n)}var pr=!0===ur?0:1,sr=new C(1),br=new x(sr.buffer);function hr(r,n){return sr[0]=r,br[pr]=n>>>0,sr[0]}function wr(r){return 0|r}var Ar,_r,dr=!0===ur?1:0,mr=new C(1),gr=new x(mr.buffer);function Ur(r){return mr[0]=r,gr[dr]}!0===ur?(Ar=1,_r=0):(Ar=0,_r=1);var jr={HIGH:Ar,LOW:_r},Ir=new C(1),Or=new x(Ir.buffer),Sr=jr.HIGH,Nr=jr.LOW;function Er(r,n){return Or[Sr]=r,Or[Nr]=n,Ir[0]}var Fr=[0,0];function Hr(r,n){var t,e;return vr(Fr,r),t=Fr[0],t&=2147483647,e=Ur(n),Er(t|=e&=2147483648,Fr[1])}var Tr=!0===ur?1:0,Gr=new C(1),Pr=new x(Gr.buffer);function Lr(r,n){return Gr[0]=r,Pr[Tr]=n>>>0,Gr[0]}var Mr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8];function kr(r,n){return m(n)||N(n)?(r[0]=n,r[1]=0,r):0!==n&&F(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var xr=[0,0],Br=[0,0];function Yr(r,n){var t,e;return 0===n||0===r||m(r)||N(r)?r:(function(r,n){1===arguments.length?kr([0,0],r):kr(r,n)}(xr,r),n+=xr[1],n+=function(r){var n=Ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=xr[0]),n<-1074?Hr(0,r):n>1023?r<0?S:O:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vr(Br,r),t=Br[0],t&=2148532223,e*Er(t|=n+1023<<20,Br[1])))}var qr=1e300,zr=1e-300,Cr=[0,0],Dr=[0,0];function Jr(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,s,b;if(m(r)||m(n))return NaN;if(vr(Cr,n),i=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return E(r);if(-.5===n)return 1/E(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(N(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:F(r)<1==(n===O)?0:O}(r,n)}if(vr(Cr,r),u=Cr[0],0===Cr[1]){if(0===u)return function(r,n){return n===S?O:n===O?0:n>0?I(n)?r:0:I(n)?Hr(O,r):O}(r,n);if(1===r)return 1;if(-1===r&&I(n))return-1;if(N(r))return r===S?Jr(-0,-n):n<0?0:O}if(r<0&&!1===U(n))return(r-r)/(r-r);if(o=F(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&I(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*qr*qr:f*zr*zr;if(t>1072693248)return 0===a?f*qr*qr:f*zr*zr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=hr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Dr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,s,b,h,w,A,_,d,m,g,U;return d=0,t<1048576&&(d-=53,t=Ur(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?g=0:m<767610?g=1:(g=0,d+=1,t-=1048576),i=hr(o=(A=(n=Lr(n,t))-(c=Mr[g]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=g<<18),w=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=hr(a=3+(u=i*i)+(w+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=hr(y=(A=i*a)+(_=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+Wr[g])-((s=hr(s=(v=.9617967009544373*y)+p+(l=Vr[g])+(h=d),0))-h-l-v),r[0]=s,r[1]=b,r}(Dr,o,t);if(y=(n-(c=hr(n,0)))*v[0]+n*v[1],l=c*v[0],vr(Cr,p=y+l),s=wr(Cr[0]),b=wr(Cr[1]),s>=1083179008){if(0!=(s-1083179008|b))return f*qr*qr;if(y+8008566259537294e-32>p-l)return f*qr*qr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return f*zr*zr;if(y<=p-l)return f*zr*zr}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Lr(0,e)),r=wr(r=Ur(c=1-((c=(i=.6931471824645996*(u=hr(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Yr(c,l):Lr(c,r)}(s,l,y),f*p}function Kr(r,n,t){var e,o,u,i;if(0===t)return[];for(u=(n-r)/(o=t-1),e=[Jr(10,r)],i=1;i<o;i++)e.push(Jr(10,r+u*i));return e.push(Jr(10,n)),e}function Qr(r){return h(1,r)}function Rr(r,n){var t,e,o;if((e=n-r)<=1)return[r];for(t=[r],o=1;o<e;o++)t.push(r+o);return t}function Xr(r){return h(0,r)}var Zr={};c(Zr,"arraylike2object",s),c(Zr,"copy",b),c(Zr,"filled",h),c(Zr,"filledBy",w),c(Zr,"incrspace",_),c(Zr,"linspace",d),c(Zr,"logspace",Kr),c(Zr,"ones",Qr),c(Zr,"unitspace",Rr),c(Zr,"zeros",Xr);export{s as arraylike2object,b as copy,Zr as default,h as filled,w as filledBy,_ as incrspace,d as linspace,Kr as logspace,Qr as ones,Rr as unitspace,Xr as zeros};
//# sourceMappingURL=mod.js.map
