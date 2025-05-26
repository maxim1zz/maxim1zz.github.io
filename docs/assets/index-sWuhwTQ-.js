(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lp={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),zy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),jy=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),$y=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Tf=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function br(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||ap}br.prototype.isReactComponent={};br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fp(){}fp.prototype=br.prototype;function Wu(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||ap}var ju=Wu.prototype=new fp;ju.constructor=Wu;up(ju,br.prototype);ju.isPureReactComponent=!0;var xf=Array.isArray,dp=Object.prototype.hasOwnProperty,Bu={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function pp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dp.call(e,r)&&!hp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ji,type:t,key:s,ref:o,props:i,_owner:Bu.current}}function Ky(t,e){return{$$typeof:Ji,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ji}function qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nf=/\/+/g;function El(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qy(""+t.key):e.toString(36)}function Ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ji:case zy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+El(o,0):r,xf(i)?(n="",t!=null&&(n=t.replace(Nf,"$&/")+"/"),Ls(i,e,n,"",function(u){return u})):i!=null&&(Hu(i)&&(i=Ky(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+El(s,l);o+=Ls(s,e,n,a,i)}else if(a=Qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+El(s,l++),o+=Ls(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ms(t,e,n){if(t==null)return t;var r=[],i=0;return Ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},Fs={transition:null},Zy={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:Bu};j.Children={map:ms,forEach:function(t,e,n){ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ms(t,function(){e++}),e},toArray:function(t){return ms(t,function(e){return e})||[]},only:function(t){if(!Hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=br;j.Fragment=Uy;j.Profiler=jy;j.PureComponent=Wu;j.StrictMode=Wy;j.Suspense=Vy;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=up({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)dp.call(e,a)&&!hp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ji,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:By,_context:t},t.Consumer=t};j.createElement=pp;j.createFactory=function(t){var e=pp.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:$y,render:t}};j.isValidElement=Hu;j.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:Xy}};j.memo=function(t,e){return{$$typeof:Gy,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Fs.transition;Fs.transition={};try{t()}finally{Fs.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Oe.current.useCallback(t,e)};j.useContext=function(t){return Oe.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};j.useEffect=function(t,e){return Oe.current.useEffect(t,e)};j.useId=function(){return Oe.current.useId()};j.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Oe.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};j.useRef=function(t){return Oe.current.useRef(t)};j.useState=function(t){return Oe.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Oe.current.useTransition()};j.version="18.2.0";lp.exports=j;var ke=lp.exports;const R=op(ke);var ca={},mp={exports:{}},Ge={},gp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var M=T.length;T.push(D);e:for(;0<M;){var se=M-1>>>1,he=T[se];if(0<i(he,D))T[se]=D,T[M]=he,M=se;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],M=T.pop();if(M!==D){T[0]=M;e:for(var se=0,he=T.length,hs=he>>>1;se<hs;){var yn=2*(se+1)-1,wl=T[yn],vn=yn+1,ps=T[vn];if(0>i(wl,M))vn<he&&0>i(ps,wl)?(T[se]=ps,T[vn]=M,se=vn):(T[se]=wl,T[yn]=M,se=yn);else if(vn<he&&0>i(ps,M))T[se]=ps,T[vn]=M,se=vn;else break e}}return D}function i(T,D){var M=T.sortIndex-D.sortIndex;return M!==0?M:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,f=null,c=3,g=!1,_=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function v(T){if(y=!1,m(T),!_)if(n(a)!==null)_=!0,yl(S);else{var D=n(u);D!==null&&vl(v,D.startTime-T)}}function S(T,D){_=!1,y&&(y=!1,p(A),A=-1),g=!0;var M=c;try{for(m(D),f=n(a);f!==null&&(!(f.expirationTime>D)||T&&!le());){var se=f.callback;if(typeof se=="function"){f.callback=null,c=f.priorityLevel;var he=se(f.expirationTime<=D);D=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(a)&&r(a),m(D)}else r(a);f=n(a)}if(f!==null)var hs=!0;else{var yn=n(u);yn!==null&&vl(v,yn.startTime-D),hs=!1}return hs}finally{f=null,c=M,g=!1}}var N=!1,x=null,A=-1,U=5,O=-1;function le(){return!(t.unstable_now()-O<U)}function Gn(){if(x!==null){var T=t.unstable_now();O=T;var D=!0;try{D=x(!0,T)}finally{D?Br():(N=!1,x=null)}}else N=!1}var Br;if(typeof h=="function")Br=function(){h(Gn)};else if(typeof MessageChannel<"u"){var If=new MessageChannel,Fy=If.port2;If.port1.onmessage=Gn,Br=function(){Fy.postMessage(null)}}else Br=function(){k(Gn,0)};function yl(T){x=T,N||(N=!0,Br())}function vl(T,D){A=k(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,yl(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(c){case 1:case 2:case 3:var D=3;break;default:D=c}var M=c;c=D;try{return T()}finally{c=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=c;c=T;try{return D()}finally{c=M}},t.unstable_scheduleCallback=function(T,D,M){var se=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?se+M:se):M=se,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=M+he,T={id:d++,callback:D,priorityLevel:T,startTime:M,expirationTime:he,sortIndex:-1},M>se?(T.sortIndex=M,e(u,T),n(a)===null&&T===n(u)&&(y?(p(A),A=-1):y=!0,vl(v,M-se))):(T.sortIndex=he,e(a,T),_||g||(_=!0,yl(S))),T},t.unstable_shouldYield=le,t.unstable_wrapCallback=function(T){var D=c;return function(){var M=c;c=D;try{return T.apply(this,arguments)}finally{c=M}}}})(_p);gp.exports=_p;var Jy=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=ke,Ve=Jy;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vp=new Set,Si={};function Hn(t,e){Er(t,e),Er(t+"Capture",e)}function Er(t,e){for(Si[t]=e,t=0;t<e.length;t++)vp.add(e[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pf={},Af={};function tv(t){return fa.call(Af,t)?!0:fa.call(Pf,t)?!1:ev.test(t)?Af[t]=!0:(Pf[t]=!0,!1)}function nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rv(t,e,n,r){if(e===null||typeof e>"u"||nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Vu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,Vu);Ee[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,Vu);Ee[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,Vu);Ee[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gu(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rv(e,n,i,r)&&(n=null),r||i===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lt=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),Rf=Symbol.iterator;function Hr(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Cl;function ti(t){if(Cl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+t}var Sl=!1;function kl(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ti(t):""}function iv(t){switch(t.tag){case 5:return ti(t.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return t=kl(t.type,!1),t;case 11:return t=kl(t.type.render,!1),t;case 1:return t=kl(t.type,!0),t;default:return""}}function ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qn:return"Fragment";case Kn:return"Portal";case da:return"Profiler";case Yu:return"StrictMode";case ha:return"Suspense";case pa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ep:return(t.displayName||"Context")+".Consumer";case wp:return(t._context.displayName||"Context")+".Provider";case Qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ku:return e=t.displayName||null,e!==null?e:ma(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return ma(t(e))}catch{}}return null}function sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(e);case 8:return e===Yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=Sp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=ov(t))}function kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ga(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Of(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ip(t,e){e=e.checked,e!=null&&Gu(t,"checked",e,!1)}function _a(t,e){Ip(t,e);var n=ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ya(t,e.type,n):e.hasOwnProperty("defaultValue")&&ya(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ya(t,e,n){(e!=="number"||qs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ni=Array.isArray;function cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function va(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Df(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ln(n)}}function Tp(t,e){var n=ln(e.value),r=ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ys,Np=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ys=ys||document.createElement("div"),ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lv=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(t){lv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oi[e]=oi[t]})});function Pp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oi.hasOwnProperty(t)&&oi[t]?(""+e).trim():e+"px"}function Ap(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var av=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(t,e){if(e){if(av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ca(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ka=null,fr=null,dr=null;function Lf(t){if(t=ns(t)){if(typeof ka!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Vo(e),ka(t.stateNode,t.type,e))}}function Rp(t){fr?dr?dr.push(t):dr=[t]:fr=t}function Op(){if(fr){var t=fr,e=dr;if(dr=fr=null,Lf(t),e)for(t=0;t<e.length;t++)Lf(e[t])}}function bp(t,e){return t(e)}function Dp(){}var Il=!1;function Mp(t,e,n){if(Il)return t(e,n);Il=!0;try{return bp(t,e,n)}finally{Il=!1,(fr!==null||dr!==null)&&(Dp(),Op())}}function Ii(t,e){var n=t.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ia=!1;if(Nt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Ia=!1}function uv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var li=!1,Xs=null,Zs=!1,Ta=null,cv={onError:function(t){li=!0,Xs=t}};function fv(t,e,n,r,i,s,o,l,a){li=!1,Xs=null,uv.apply(cv,arguments)}function dv(t,e,n,r,i,s,o,l,a){if(fv.apply(this,arguments),li){if(li){var u=Xs;li=!1,Xs=null}else throw Error(E(198));Zs||(Zs=!0,Ta=u)}}function $n(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ff(t){if($n(t)!==t)throw Error(E(188))}function hv(t){var e=t.alternate;if(!e){if(e=$n(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ff(i),t;if(s===r)return Ff(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Fp(t){return t=hv(t),t!==null?zp(t):null}function zp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zp(t);if(e!==null)return e;t=t.sibling}return null}var Up=Ve.unstable_scheduleCallback,zf=Ve.unstable_cancelCallback,pv=Ve.unstable_shouldYield,mv=Ve.unstable_requestPaint,oe=Ve.unstable_now,gv=Ve.unstable_getCurrentPriorityLevel,Xu=Ve.unstable_ImmediatePriority,Wp=Ve.unstable_UserBlockingPriority,Js=Ve.unstable_NormalPriority,_v=Ve.unstable_LowPriority,jp=Ve.unstable_IdlePriority,jo=null,yt=null;function yv(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(jo,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Ev,vv=Math.log,wv=Math.LN2;function Ev(t){return t>>>=0,t===0?32:31-(vv(t)/wv|0)|0}var vs=64,ws=4194304;function ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ri(l):(s&=o,s!==0&&(r=ri(s)))}else o=n&~i,o!==0?r=ri(o):s!==0&&(r=ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function Cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Cv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function xa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bp(){var t=vs;return vs<<=1,!(vs&4194240)&&(vs=64),t}function Tl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function Hp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $p,Ju,Vp,Gp,Yp,Na=!1,Es=[],Qt=null,Kt=null,qt=null,Ti=new Map,xi=new Map,$t=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Ti.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(e.pointerId)}}function Vr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Tv(t,e,n,r,i){switch(e){case"focusin":return Qt=Vr(Qt,t,e,n,r,i),!0;case"dragenter":return Kt=Vr(Kt,t,e,n,r,i),!0;case"mouseover":return qt=Vr(qt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ti.set(s,Vr(Ti.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xi.set(s,Vr(xi.get(s)||null,t,e,n,r,i)),!0}return!1}function Qp(t){var e=kn(t.target);if(e!==null){var n=$n(e);if(n!==null){if(e=n.tag,e===13){if(e=Lp(n),e!==null){t.blockedOn=e,Yp(t.priority,function(){Vp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=ns(n),e!==null&&Ju(e),t.blockedOn=n,!1;e.shift()}return!0}function Wf(t,e,n){zs(t)&&n.delete(e)}function xv(){Na=!1,Qt!==null&&zs(Qt)&&(Qt=null),Kt!==null&&zs(Kt)&&(Kt=null),qt!==null&&zs(qt)&&(qt=null),Ti.forEach(Wf),xi.forEach(Wf)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,Na||(Na=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,xv)))}function Ni(t){function e(i){return Gr(i,t)}if(0<Es.length){Gr(Es[0],t);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Gr(Qt,t),Kt!==null&&Gr(Kt,t),qt!==null&&Gr(qt,t),Ti.forEach(e),xi.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Qp(n),n.blockedOn===null&&$t.shift()}var hr=Lt.ReactCurrentBatchConfig,to=!0;function Nv(t,e,n,r){var i=$,s=hr.transition;hr.transition=null;try{$=1,ec(t,e,n,r)}finally{$=i,hr.transition=s}}function Pv(t,e,n,r){var i=$,s=hr.transition;hr.transition=null;try{$=4,ec(t,e,n,r)}finally{$=i,hr.transition=s}}function ec(t,e,n,r){if(to){var i=Pa(t,e,n,r);if(i===null)Ll(t,e,r,no,n),Uf(t,r);else if(Tv(i,t,e,n,r))r.stopPropagation();else if(Uf(t,r),e&4&&-1<Iv.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&$p(s),s=Pa(t,e,n,r),s===null&&Ll(t,e,r,no,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ll(t,e,r,null,n)}}var no=null;function Pa(t,e,n,r){if(no=null,t=qu(r),t=kn(t),t!==null)if(e=$n(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return no=t,null}function Kp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case Xu:return 1;case Wp:return 4;case Js:case _v:return 16;case jp:return 536870912;default:return 16}default:return 16}}var Gt=null,tc=null,Us=null;function qp(){if(Us)return Us;var t,e=tc,n=e.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Us=i.slice(t,1<r?1-r:void 0)}function Ws(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cs(){return!0}function jf(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cs:jf,this.isPropagationStopped=jf,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),e}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Ye(Dr),ts=ne({},Dr,{view:0,detail:0}),Av=Ye(ts),xl,Nl,Yr,Bo=ne({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(xl=t.screenX-Yr.screenX,Nl=t.screenY-Yr.screenY):Nl=xl=0,Yr=t),xl)},movementY:function(t){return"movementY"in t?t.movementY:Nl}}),Bf=Ye(Bo),Rv=ne({},Bo,{dataTransfer:0}),Ov=Ye(Rv),bv=ne({},ts,{relatedTarget:0}),Pl=Ye(bv),Dv=ne({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=Ye(Dv),Lv=ne({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Ye(Lv),zv=ne({},Dr,{data:0}),Hf=Ye(zv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jv[t])?!!e[t]:!1}function rc(){return Bv}var Hv=ne({},ts,{key:function(t){if(t.key){var e=Uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?Ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Ye(Hv),Vv=ne({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=Ye(Vv),Gv=ne({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),Yv=Ye(Gv),Qv=ne({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Ye(Qv),qv=ne({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Ye(qv),Zv=[9,13,27,32],ic=Nt&&"CompositionEvent"in window,ai=null;Nt&&"documentMode"in document&&(ai=document.documentMode);var Jv=Nt&&"TextEvent"in window&&!ai,Xp=Nt&&(!ic||ai&&8<ai&&11>=ai),Vf=" ",Gf=!1;function Zp(t,e){switch(t){case"keyup":return Zv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function e1(t,e){switch(t){case"compositionend":return Jp(e);case"keypress":return e.which!==32?null:(Gf=!0,Vf);case"textInput":return t=e.data,t===Vf&&Gf?null:t;default:return null}}function t1(t,e){if(Xn)return t==="compositionend"||!ic&&Zp(t,e)?(t=qp(),Us=tc=Gt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xp&&e.locale!=="ko"?null:e.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n1[t.type]:e==="textarea"}function em(t,e,n,r){Rp(r),e=ro(e,"onChange"),0<e.length&&(n=new nc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ui=null,Pi=null;function r1(t){fm(t,0)}function Ho(t){var e=er(t);if(kp(e))return t}function i1(t,e){if(t==="change")return e}var tm=!1;if(Nt){var Al;if(Nt){var Rl="oninput"in document;if(!Rl){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Rl=typeof Qf.oninput=="function"}Al=Rl}else Al=!1;tm=Al&&(!document.documentMode||9<document.documentMode)}function Kf(){ui&&(ui.detachEvent("onpropertychange",nm),Pi=ui=null)}function nm(t){if(t.propertyName==="value"&&Ho(Pi)){var e=[];em(e,Pi,t,qu(t)),Mp(r1,e)}}function s1(t,e,n){t==="focusin"?(Kf(),ui=e,Pi=n,ui.attachEvent("onpropertychange",nm)):t==="focusout"&&Kf()}function o1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Pi)}function l1(t,e){if(t==="click")return Ho(e)}function a1(t,e){if(t==="input"||t==="change")return Ho(e)}function u1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:u1;function Ai(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var n=qf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function im(){for(var t=window,e=qs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qs(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c1(t){var e=im(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rm(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xf(n,s);var o=Xf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f1=Nt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Aa=null,ci=null,Ra=!1;function Zf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||Zn==null||Zn!==qs(r)||(r=Zn,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ai(ci,r)||(ci=r,r=ro(Aa,"onSelect"),0<r.length&&(e=new nc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zn)))}function Ss(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},Ol={},sm={};Nt&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function $o(t){if(Ol[t])return Ol[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sm)return Ol[t]=e[n];return t}var om=$o("animationend"),lm=$o("animationiteration"),am=$o("animationstart"),um=$o("transitionend"),cm=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(t,e){cm.set(t,e),Hn(e,[t])}for(var bl=0;bl<Jf.length;bl++){var Dl=Jf[bl],d1=Dl.toLowerCase(),h1=Dl[0].toUpperCase()+Dl.slice(1);mn(d1,"on"+h1)}mn(om,"onAnimationEnd");mn(lm,"onAnimationIteration");mn(am,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(um,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function ed(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dv(r,e,void 0,t),t.currentTarget=null}function fm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ed(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ed(i,l,u),s=a}}}if(Zs)throw t=Ta,Zs=!1,Ta=null,t}function K(t,e){var n=e[La];n===void 0&&(n=e[La]=new Set);var r=t+"__bubble";n.has(r)||(dm(e,t,2,!1),n.add(r))}function Ml(t,e,n){var r=0;e&&(r|=4),dm(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Ri(t){if(!t[ks]){t[ks]=!0,vp.forEach(function(n){n!=="selectionchange"&&(p1.has(n)||Ml(n,!1,t),Ml(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,Ml("selectionchange",!1,e))}}function dm(t,e,n,r){switch(Kp(e)){case 1:var i=Nv;break;case 4:i=Pv;break;default:i=ec}n=i.bind(null,e,n,t),i=void 0,!Ia||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ll(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mp(function(){var u=s,d=qu(n),f=[];e:{var c=cm.get(t);if(c!==void 0){var g=nc,_=t;switch(t){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":g=$v;break;case"focusin":_="focus",g=Pl;break;case"focusout":_="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Yv;break;case om:case lm:case am:g=Mv;break;case um:g=Kv;break;case"scroll":g=Av;break;case"wheel":g=Xv;break;case"copy":case"cut":case"paste":g=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$f}var y=(e&4)!==0,k=!y&&t==="scroll",p=y?c!==null?c+"Capture":null:c;y=[];for(var h=u,m;h!==null;){m=h;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ii(h,p),v!=null&&y.push(Oi(h,v,m)))),k)break;h=h.return}0<y.length&&(c=new g(c,_,null,n,d),f.push({event:c,listeners:y}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",c&&n!==Sa&&(_=n.relatedTarget||n.fromElement)&&(kn(_)||_[Pt]))break e;if((g||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?kn(_):null,_!==null&&(k=$n(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Bf,v="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=$f,v="onPointerLeave",p="onPointerEnter",h="pointer"),k=g==null?c:er(g),m=_==null?c:er(_),c=new y(v,h+"leave",g,n,d),c.target=k,c.relatedTarget=m,v=null,kn(d)===u&&(y=new y(p,h+"enter",_,n,d),y.target=m,y.relatedTarget=k,v=y),k=v,g&&_)t:{for(y=g,p=_,h=0,m=y;m;m=Yn(m))h++;for(m=0,v=p;v;v=Yn(v))m++;for(;0<h-m;)y=Yn(y),h--;for(;0<m-h;)p=Yn(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=Yn(y),p=Yn(p)}y=null}else y=null;g!==null&&td(f,c,g,y,!1),_!==null&&k!==null&&td(f,k,_,y,!0)}}e:{if(c=u?er(u):window,g=c.nodeName&&c.nodeName.toLowerCase(),g==="select"||g==="input"&&c.type==="file")var S=i1;else if(Yf(c))if(tm)S=a1;else{S=o1;var N=s1}else(g=c.nodeName)&&g.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(S=l1);if(S&&(S=S(t,u))){em(f,S,n,d);break e}N&&N(t,c,u),t==="focusout"&&(N=c._wrapperState)&&N.controlled&&c.type==="number"&&ya(c,"number",c.value)}switch(N=u?er(u):window,t){case"focusin":(Yf(N)||N.contentEditable==="true")&&(Zn=N,Aa=u,ci=null);break;case"focusout":ci=Aa=Zn=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Zf(f,n,d);break;case"selectionchange":if(f1)break;case"keydown":case"keyup":Zf(f,n,d)}var x;if(ic)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Xn?Zp(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Xp&&n.locale!=="ko"&&(Xn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Xn&&(x=qp()):(Gt=d,tc="value"in Gt?Gt.value:Gt.textContent,Xn=!0)),N=ro(u,A),0<N.length&&(A=new Hf(A,t,null,n,d),f.push({event:A,listeners:N}),x?A.data=x:(x=Jp(n),x!==null&&(A.data=x)))),(x=Jv?e1(t,n):t1(t,n))&&(u=ro(u,"onBeforeInput"),0<u.length&&(d=new Hf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=x))}fm(f,e)})}function Oi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ii(t,n),s!=null&&r.unshift(Oi(t,s,i)),s=Ii(t,e),s!=null&&r.push(Oi(t,s,i))),t=t.return}return r}function Yn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function td(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ii(n,s),a!=null&&o.unshift(Oi(n,a,l))):i||(a=Ii(n,s),a!=null&&o.push(Oi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var m1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function nd(t){return(typeof t=="string"?t:""+t).replace(m1,`
`).replace(g1,"")}function Is(t,e,n){if(e=nd(e),nd(t)!==e&&n)throw Error(E(425))}function io(){}var Oa=null,ba=null;function Da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(t){return rd.resolve(null).then(t).catch(v1)}:Ma;function v1(t){setTimeout(function(){throw t})}function Fl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ni(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(e)}function Xt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Mr,bi="__reactProps$"+Mr,Pt="__reactContainer$"+Mr,La="__reactEvents$"+Mr,w1="__reactListeners$"+Mr,E1="__reactHandles$"+Mr;function kn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=id(t);t!==null;){if(n=t[mt])return n;t=id(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[mt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Vo(t){return t[bi]||null}var Fa=[],tr=-1;function gn(t){return{current:t}}function X(t){0>tr||(t.current=Fa[tr],Fa[tr]=null,tr--)}function Q(t,e){tr++,Fa[tr]=t.current,t.current=e}var an={},xe=gn(an),Fe=gn(!1),bn=an;function Cr(t,e){var n=t.type.contextTypes;if(!n)return an;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function so(){X(Fe),X(xe)}function sd(t,e,n){if(xe.current!==an)throw Error(E(168));Q(xe,e),Q(Fe,n)}function hm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,sv(t)||"Unknown",i));return ne({},n,r)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,bn=xe.current,Q(xe,t),Q(Fe,Fe.current),!0}function od(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=hm(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,X(Fe),X(xe),Q(xe,t)):X(Fe),Q(Fe,n)}var Ct=null,Go=!1,zl=!1;function pm(t){Ct===null?Ct=[t]:Ct.push(t)}function C1(t){Go=!0,pm(t)}function _n(){if(!zl&&Ct!==null){zl=!0;var t=0,e=$;try{var n=Ct;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ct=null,Go=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(t+1)),Up(Xu,_n),i}finally{$=e,zl=!1}}return null}var nr=[],rr=0,lo=null,ao=0,Ke=[],qe=0,Dn=null,St=1,kt="";function wn(t,e){nr[rr++]=ao,nr[rr++]=lo,lo=t,ao=e}function mm(t,e,n){Ke[qe++]=St,Ke[qe++]=kt,Ke[qe++]=Dn,Dn=t;var r=St;t=kt;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-at(e)+i|n<<i|r,kt=s+t}else St=1<<s|n<<i|r,kt=t}function oc(t){t.return!==null&&(wn(t,1),mm(t,1,0))}function lc(t){for(;t===lo;)lo=nr[--rr],nr[rr]=null,ao=nr[--rr],nr[rr]=null;for(;t===Dn;)Dn=Ke[--qe],Ke[qe]=null,kt=Ke[--qe],Ke[qe]=null,St=Ke[--qe],Ke[qe]=null}var $e=null,He=null,J=!1,it=null;function gm(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ld(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,He=Xt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dn!==null?{id:St,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,He=null,!0):!1;default:return!1}}function za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ua(t){if(J){var e=He;if(e){var n=e;if(!ld(t,e)){if(za(t))throw Error(E(418));e=Xt(n.nextSibling);var r=$e;e&&ld(t,e)?gm(r,n):(t.flags=t.flags&-4097|2,J=!1,$e=t)}}else{if(za(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,$e=t}}}function ad(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function Ts(t){if(t!==$e)return!1;if(!J)return ad(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Da(t.type,t.memoizedProps)),e&&(e=He)){if(za(t))throw _m(),Error(E(418));for(;e;)gm(t,e),e=Xt(e.nextSibling)}if(ad(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=Xt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=$e?Xt(t.stateNode.nextSibling):null;return!0}function _m(){for(var t=He;t;)t=Xt(t.nextSibling)}function Sr(){He=$e=null,J=!1}function ac(t){it===null?it=[t]:it.push(t)}var S1=Lt.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uo=gn(null),co=null,ir=null,uc=null;function cc(){uc=ir=co=null}function fc(t){var e=uo.current;X(uo),t._currentValue=e}function Wa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pr(t,e){co=t,uc=ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(uc!==t)if(t={context:t,memoizedValue:e,next:null},ir===null){if(co===null)throw Error(E(308));ir=t,co.dependencies={lanes:0,firstContext:t}}else ir=ir.next=t;return e}var In=null;function dc(t){In===null?In=[t]:In.push(t)}function ym(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dc(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ht=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,dc(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function js(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}function ud(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fo(t,e,n,r){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,d=u=a=null,l=s;do{var c=l.lane,g=l.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(c=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,c);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,c=typeof _=="function"?_.call(g,f,c):_,c==null)break e;f=ne({},f,c);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[l]:c.push(l))}else g={eventTime:g,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=f):d=d.next=g,o|=c;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;c=l,l=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ln|=o,t.lanes=o,t.memoizedState=f}}function cd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var wm=new yp.Component().refs;function ja(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yo={isMounted:function(t){return(t=t._reactInternals)?$n(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=en(t),s=Tt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ut(e,t,i,r),js(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=en(t),s=Tt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ut(e,t,i,r),js(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=en(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(ut(e,t,r,n),js(e,t,r))}};function fd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,s):!0}function Em(t,e,n){var r=!1,i=an,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=ze(e)?bn:xe.current,r=e.contextTypes,s=(r=r!=null)?Cr(t,i):an),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yo.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=wm,hc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=ze(e)?bn:xe.current,i.context=Cr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ja(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yo.enqueueReplaceState(i,i.state,null),fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===wm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function xs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hd(t){var e=t._init;return e(t._payload)}function Cm(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=tn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,v){return h===null||h.tag!==6?(h=Vl(m,p.mode,v),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,v){var S=m.type;return S===qn?d(p,h,m.props.children,v,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&hd(S)===h.type)?(v=i(h,m.props),v.ref=Qr(p,h,m),v.return=p,v):(v=Ys(m.type,m.key,m.props,null,p.mode,v),v.ref=Qr(p,h,m),v.return=p,v)}function u(p,h,m,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Gl(m,p.mode,v),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,v,S){return h===null||h.tag!==7?(h=Rn(m,p.mode,v,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gs:return m=Ys(h.type,h.key,h.props,null,p.mode,m),m.ref=Qr(p,null,h),m.return=p,m;case Kn:return h=Gl(h,p.mode,m),h.return=p,h;case Bt:var v=h._init;return f(p,v(h._payload),m)}if(ni(h)||Hr(h))return h=Rn(h,p.mode,m,null),h.return=p,h;xs(p,h)}return null}function c(p,h,m,v){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,h,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:return m.key===S?a(p,h,m,v):null;case Kn:return m.key===S?u(p,h,m,v):null;case Bt:return S=m._init,c(p,h,S(m._payload),v)}if(ni(m)||Hr(m))return S!==null?null:d(p,h,m,v,null);xs(p,m)}return null}function g(p,h,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,l(h,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gs:return p=p.get(v.key===null?m:v.key)||null,a(h,p,v,S);case Kn:return p=p.get(v.key===null?m:v.key)||null,u(h,p,v,S);case Bt:var N=v._init;return g(p,h,m,N(v._payload),S)}if(ni(v)||Hr(v))return p=p.get(m)||null,d(h,p,v,S,null);xs(h,v)}return null}function _(p,h,m,v){for(var S=null,N=null,x=h,A=h=0,U=null;x!==null&&A<m.length;A++){x.index>A?(U=x,x=null):U=x.sibling;var O=c(p,x,m[A],v);if(O===null){x===null&&(x=U);break}t&&x&&O.alternate===null&&e(p,x),h=s(O,h,A),N===null?S=O:N.sibling=O,N=O,x=U}if(A===m.length)return n(p,x),J&&wn(p,A),S;if(x===null){for(;A<m.length;A++)x=f(p,m[A],v),x!==null&&(h=s(x,h,A),N===null?S=x:N.sibling=x,N=x);return J&&wn(p,A),S}for(x=r(p,x);A<m.length;A++)U=g(x,p,A,m[A],v),U!==null&&(t&&U.alternate!==null&&x.delete(U.key===null?A:U.key),h=s(U,h,A),N===null?S=U:N.sibling=U,N=U);return t&&x.forEach(function(le){return e(p,le)}),J&&wn(p,A),S}function y(p,h,m,v){var S=Hr(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var N=S=null,x=h,A=h=0,U=null,O=m.next();x!==null&&!O.done;A++,O=m.next()){x.index>A?(U=x,x=null):U=x.sibling;var le=c(p,x,O.value,v);if(le===null){x===null&&(x=U);break}t&&x&&le.alternate===null&&e(p,x),h=s(le,h,A),N===null?S=le:N.sibling=le,N=le,x=U}if(O.done)return n(p,x),J&&wn(p,A),S;if(x===null){for(;!O.done;A++,O=m.next())O=f(p,O.value,v),O!==null&&(h=s(O,h,A),N===null?S=O:N.sibling=O,N=O);return J&&wn(p,A),S}for(x=r(p,x);!O.done;A++,O=m.next())O=g(x,p,A,O.value,v),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?A:O.key),h=s(O,h,A),N===null?S=O:N.sibling=O,N=O);return t&&x.forEach(function(Gn){return e(p,Gn)}),J&&wn(p,A),S}function k(p,h,m,v){if(typeof m=="object"&&m!==null&&m.type===qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:e:{for(var S=m.key,N=h;N!==null;){if(N.key===S){if(S=m.type,S===qn){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&hd(S)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=Qr(p,N,m),h.return=p,p=h;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===qn?(h=Rn(m.props.children,p.mode,v,m.key),h.return=p,p=h):(v=Ys(m.type,m.key,m.props,null,p.mode,v),v.ref=Qr(p,h,m),v.return=p,p=v)}return o(p);case Kn:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Gl(m,p.mode,v),h.return=p,p=h}return o(p);case Bt:return N=m._init,k(p,h,N(m._payload),v)}if(ni(m))return _(p,h,m,v);if(Hr(m))return y(p,h,m,v);xs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Vl(m,p.mode,v),h.return=p,p=h),o(p)):n(p,h)}return k}var kr=Cm(!0),Sm=Cm(!1),rs={},vt=gn(rs),Di=gn(rs),Mi=gn(rs);function Tn(t){if(t===rs)throw Error(E(174));return t}function pc(t,e){switch(Q(Mi,e),Q(Di,t),Q(vt,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wa(e,t)}X(vt),Q(vt,e)}function Ir(){X(vt),X(Di),X(Mi)}function km(t){Tn(Mi.current);var e=Tn(vt.current),n=wa(e,t.type);e!==n&&(Q(Di,t),Q(vt,n))}function mc(t){Di.current===t&&(X(vt),X(Di))}var ee=gn(0);function ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ul=[];function gc(){for(var t=0;t<Ul.length;t++)Ul[t]._workInProgressVersionPrimary=null;Ul.length=0}var Bs=Lt.ReactCurrentDispatcher,Wl=Lt.ReactCurrentBatchConfig,Mn=0,te=null,ue=null,me=null,po=!1,fi=!1,Li=0,k1=0;function Ce(){throw Error(E(321))}function _c(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function yc(t,e,n,r,i,s){if(Mn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bs.current=t===null||t.memoizedState===null?N1:P1,t=n(r,i),fi){s=0;do{if(fi=!1,Li=0,25<=s)throw Error(E(301));s+=1,me=ue=null,e.updateQueue=null,Bs.current=A1,t=n(r,i)}while(fi)}if(Bs.current=mo,e=ue!==null&&ue.next!==null,Mn=0,me=ue=te=null,po=!1,e)throw Error(E(300));return t}function vc(){var t=Li!==0;return Li=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?te.memoizedState=me=t:me=me.next=t,me}function et(){if(ue===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=me===null?te.memoizedState:me.next;if(e!==null)me=e,ue=t;else{if(t===null)throw Error(E(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?te.memoizedState=me=t:me=me.next=t}return me}function Fi(t,e){return typeof e=="function"?e(t):e}function jl(t){var e=et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Mn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,te.lanes|=d,Ln|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ft(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Ln|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bl(t){var e=et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Im(){}function Tm(t,e){var n=te,r=et(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,wc(Pm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,zi(9,Nm.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(E(349));Mn&30||xm(n,e,i)}return i}function xm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nm(t,e,n,r){e.value=n,e.getSnapshot=r,Am(e)&&Rm(t)}function Pm(t,e,n){return n(function(){Am(e)&&Rm(t)})}function Am(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Rm(t){var e=At(t,1);e!==null&&ut(e,t,1,-1)}function pd(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},e.queue=t,t=t.dispatch=x1.bind(null,te,t),[e.memoizedState,t]}function zi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Om(){return et().memoizedState}function Hs(t,e,n,r){var i=ht();te.flags|=t,i.memoizedState=zi(1|e,n,void 0,r===void 0?null:r)}function Qo(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&_c(r,o.deps)){i.memoizedState=zi(e,n,s,r);return}}te.flags|=t,i.memoizedState=zi(1|e,n,s,r)}function md(t,e){return Hs(8390656,8,t,e)}function wc(t,e){return Qo(2048,8,t,e)}function bm(t,e){return Qo(4,2,t,e)}function Dm(t,e){return Qo(4,4,t,e)}function Mm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lm(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4,4,Mm.bind(null,e,t),n)}function Ec(){}function Fm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_c(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_c(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Um(t,e,n){return Mn&21?(ft(n,e)||(n=Bp(),te.lanes|=n,Ln|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function I1(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Wl.transition;Wl.transition={};try{t(!1),e()}finally{$=n,Wl.transition=r}}function Wm(){return et().memoizedState}function T1(t,e,n){var r=en(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jm(t))Bm(e,n);else if(n=ym(t,e,n,r),n!==null){var i=Re();ut(n,t,r,i),Hm(n,e,r)}}function x1(t,e,n){var r=en(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jm(t))Bm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var a=e.interleaved;a===null?(i.next=i,dc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ym(t,e,i,r),n!==null&&(i=Re(),ut(n,t,r,i),Hm(n,e,r))}}function jm(t){var e=t.alternate;return t===te||e!==null&&e===te}function Bm(t,e){fi=po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}var mo={readContext:Je,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},N1={readContext:Je,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:md,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,Mm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=T1.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:pd,useDebugValue:Ec,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=pd(!1),e=t[0];return t=I1.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=ht();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ye===null)throw Error(E(349));Mn&30||xm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,md(Pm.bind(null,r,s,t),[t]),r.flags|=2048,zi(9,Nm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=ye.identifierPrefix;if(J){var n=kt,r=St;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Li++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P1={readContext:Je,useCallback:Fm,useContext:Je,useEffect:wc,useImperativeHandle:Lm,useInsertionEffect:bm,useLayoutEffect:Dm,useMemo:zm,useReducer:jl,useRef:Om,useState:function(){return jl(Fi)},useDebugValue:Ec,useDeferredValue:function(t){var e=et();return Um(e,ue.memoizedState,t)},useTransition:function(){var t=jl(Fi)[0],e=et().memoizedState;return[t,e]},useMutableSource:Im,useSyncExternalStore:Tm,useId:Wm,unstable_isNewReconciler:!1},A1={readContext:Je,useCallback:Fm,useContext:Je,useEffect:wc,useImperativeHandle:Lm,useInsertionEffect:bm,useLayoutEffect:Dm,useMemo:zm,useReducer:Bl,useRef:Om,useState:function(){return Bl(Fi)},useDebugValue:Ec,useDeferredValue:function(t){var e=et();return ue===null?e.memoizedState=t:Um(e,ue.memoizedState,t)},useTransition:function(){var t=Bl(Fi)[0],e=et().memoizedState;return[t,e]},useMutableSource:Im,useSyncExternalStore:Tm,useId:Wm,unstable_isNewReconciler:!1};function Tr(t,e){try{var n="",r=e;do n+=iv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R1=typeof WeakMap=="function"?WeakMap:Map;function $m(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,Ja=r),Ha(t,e)},n}function Vm(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ha(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ha(t,e),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new R1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=V1.bind(null,t,e,n),e.then(t,t))}function _d(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var O1=Lt.ReactCurrentOwner,Me=!1;function Pe(t,e,n,r){e.child=t===null?Sm(e,null,n,r):kr(e,t.child,n,r)}function vd(t,e,n,r,i){n=n.render;var s=e.ref;return pr(e,i),r=yc(t,e,n,r,s,i),n=vc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(J&&n&&oc(e),e.flags|=1,Pe(t,e,r,i),e.child)}function wd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gm(t,e,s,r,i)):(t=Ys(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(o,r)&&t.ref===e.ref)return Rt(t,e,i)}return e.flags|=1,t=tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ai(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,Rt(t,e,i)}return $a(t,e,n,r,i)}function Ym(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(or,Be),Be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(or,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(or,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(or,Be),Be|=r;return Pe(t,e,i,n),e.child}function Qm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $a(t,e,n,r,i){var s=ze(n)?bn:xe.current;return s=Cr(e,s),pr(e,i),n=yc(t,e,n,r,s,i),r=vc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rt(t,e,i)):(J&&r&&oc(e),e.flags|=1,Pe(t,e,n,i),e.child)}function Ed(t,e,n,r,i){if(ze(n)){var s=!0;oo(e)}else s=!1;if(pr(e,i),e.stateNode===null)$s(t,e),Em(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=ze(n)?bn:xe.current,u=Cr(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&dd(e,o,r,u),Ht=!1;var c=e.memoizedState;o.state=c,fo(e,r,o,i),a=e.memoizedState,l!==r||c!==a||Fe.current||Ht?(typeof d=="function"&&(ja(e,n,d,r),a=e.memoizedState),(l=Ht||fd(e,n,l,r,c,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,f=e.pendingProps,c=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=ze(n)?bn:xe.current,a=Cr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||c!==a)&&dd(e,o,r,a),Ht=!1,c=e.memoizedState,o.state=c,fo(e,r,o,i);var _=e.memoizedState;l!==f||c!==_||Fe.current||Ht?(typeof g=="function"&&(ja(e,n,g,r),_=e.memoizedState),(u=Ht||fd(e,n,u,r,c,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return Va(t,e,n,r,s,i)}function Va(t,e,n,r,i,s){Qm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&od(e,n,!1),Rt(t,e,s);r=e.stateNode,O1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=kr(e,t.child,null,s),e.child=kr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&od(e,n,!0),e.child}function Km(t){var e=t.stateNode;e.pendingContext?sd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sd(t,e.context,!1),pc(t,e.containerInfo)}function Cd(t,e,n,r,i){return Sr(),ac(i),e.flags|=256,Pe(t,e,n,r),e.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ya(t){return{baseLanes:t,cachePool:null,transitions:null}}function qm(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ee,i&1),t===null)return Ua(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ya(n),e.memoizedState=Ga,t):Cc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return b1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tn(l,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ya(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ga,r}return s=t.child,t=s.sibling,r=tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cc(t,e){return e=Xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ns(t,e,n,r){return r!==null&&ac(r),kr(e,t.child,null,n),t=Cc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(E(422))),Ns(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&kr(e,t.child,null,o),e.child.memoizedState=Ya(o),e.memoizedState=Ga,s);if(!(e.mode&1))return Ns(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Hl(s,r,void 0),Ns(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),ut(r,t,i,-1))}return Nc(),r=Hl(Error(E(421))),Ns(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=G1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=Xt(i.nextSibling),$e=e,J=!0,it=null,t!==null&&(Ke[qe++]=St,Ke[qe++]=kt,Ke[qe++]=Dn,St=t.id,kt=t.overflow,Dn=e),e=Cc(e,r.children),e.flags|=4096,e)}function Sd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wa(t.return,e,n)}function $l(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sd(t,n,e);else if(t.tag===19)Sd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ln|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D1(t,e,n){switch(e.tag){case 3:Km(e),Sr();break;case 5:km(e);break;case 1:ze(e.type)&&oo(e);break;case 4:pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?qm(t,e,n):(Q(ee,ee.current&1),t=Rt(t,e,n),t!==null?t.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Ym(t,e,n)}return Rt(t,e,n)}var Zm,Qa,Jm,eg;Zm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qa=function(){};Jm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(vt.current);var s=null;switch(n){case"input":i=ga(t,i),r=ga(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=va(t,i),r=va(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=io)}Ea(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Si.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Si.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Kr(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function M1(t,e,n){var r=e.pendingProps;switch(lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return ze(e.type)&&so(),Se(e),null;case 3:return r=e.stateNode,Ir(),X(Fe),X(xe),gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ts(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(nu(it),it=null))),Qa(t,e),Se(e),null;case 5:mc(e);var i=Tn(Mi.current);if(n=e.type,t!==null&&e.stateNode!=null)Jm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Se(e),null}if(t=Tn(vt.current),Ts(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[bi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)K(ii[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Of(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Df(r,s),K("invalid",r)}Ea(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,l,t),i=["children",""+l]):Si.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":_s(r),bf(r,s,!0);break;case"textarea":_s(r),Mf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[bi]=r,Zm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ca(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)K(ii[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Of(t,r),i=ga(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),K("invalid",t);break;case"textarea":Df(t,r),i=va(t,r),K("invalid",t);break;default:i=r}Ea(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ap(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Np(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ki(t,a):typeof a=="number"&&ki(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Si.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&Gu(t,s,a,o))}switch(n){case"input":_s(t),bf(t,r,!1);break;case"textarea":_s(t),Mf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)eg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Tn(Mi.current),Tn(vt.current),Ts(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:Is(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return Se(e),null;case 13:if(X(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&He!==null&&e.mode&1&&!(e.flags&128))_m(),Sr(),e.flags|=98560,s=!1;else if(s=Ts(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[mt]=e}else Sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else it!==null&&(nu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?de===0&&(de=3):Nc())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return Ir(),Qa(t,e),t===null&&Ri(e.stateNode.containerInfo),Se(e),null;case 10:return fc(e.type._context),Se(e),null;case 17:return ze(e.type)&&so(),Se(e),null;case 19:if(X(ee),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Kr(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ho(t),o!==null){for(e.flags|=128,Kr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>xr&&(e.flags|=128,r=!0,Kr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ho(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Se(e),null}else 2*oe()-s.renderingStartTime>xr&&n!==1073741824&&(e.flags|=128,r=!0,Kr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,Q(ee,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return xc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function L1(t,e){switch(lc(e),e.tag){case 1:return ze(e.type)&&so(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),X(Fe),X(xe),gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mc(e),null;case 13:if(X(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ee),null;case 4:return Ir(),null;case 10:return fc(e.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ps=!1,Ie=!1,F1=typeof WeakSet=="function"?WeakSet:Set,I=null;function sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Ka(t,e,n){try{n()}catch(r){re(t,e,r)}}var kd=!1;function z1(t,e){if(Oa=to,t=im(),sc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,f=t,c=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)c=f,f=g;for(;;){if(f===t)break t;if(c===n&&++u===i&&(l=o),c===s&&++d===r&&(a=o),(g=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:t,selectionRange:n},to=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,k=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:nt(e.type,y),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){re(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=kd,kd=!1,_}function di(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ka(e,n,s)}i=i.next}while(i!==r)}}function Ko(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tg(t){var e=t.alternate;e!==null&&(t.alternate=null,tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[bi],delete e[La],delete e[w1],delete e[E1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ng(t){return t.tag===5||t.tag===3||t.tag===4}function Id(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=io));else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}var ve=null,rt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)rg(t,e,n),n=n.sibling}function rg(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:Ie||sr(n,e);case 6:var r=ve,i=rt;ve=null,Wt(t,e,n),ve=r,rt=i,ve!==null&&(rt?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(rt?(t=ve,n=n.stateNode,t.nodeType===8?Fl(t.parentNode,n):t.nodeType===1&&Fl(t,n),Ni(t)):Fl(ve,n.stateNode));break;case 4:r=ve,i=rt,ve=n.stateNode.containerInfo,rt=!0,Wt(t,e,n),ve=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ka(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!Ie&&(sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Wt(t,e,n),Ie=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function Td(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F1),e.forEach(function(r){var i=Y1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,rt=!1;break e;case 3:ve=l.stateNode.containerInfo,rt=!0;break e;case 4:ve=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ve===null)throw Error(E(160));rg(s,o,i),ve=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ig(e,t),e=e.sibling}function ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),dt(t),r&4){try{di(3,t,t.return),Ko(3,t)}catch(y){re(t,t.return,y)}try{di(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:tt(e,t),dt(t),r&512&&n!==null&&sr(n,n.return);break;case 5:if(tt(e,t),dt(t),r&512&&n!==null&&sr(n,n.return),t.flags&32){var i=t.stateNode;try{ki(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ip(i,s),Ca(l,o);var u=Ca(l,s);for(o=0;o<a.length;o+=2){var d=a[o],f=a[o+1];d==="style"?Ap(i,f):d==="dangerouslySetInnerHTML"?Np(i,f):d==="children"?ki(i,f):Gu(i,d,f,u)}switch(l){case"input":_a(i,s);break;case"textarea":Tp(i,s);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?cr(i,!!s.multiple,g,!1):c!==!!s.multiple&&(s.defaultValue!=null?cr(i,!!s.multiple,s.defaultValue,!0):cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[bi]=s}catch(y){re(t,t.return,y)}}break;case 6:if(tt(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(tt(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:tt(e,t),dt(t);break;case 13:tt(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=oe())),r&4&&Td(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,tt(e,t),Ie=u):tt(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(f=I=d;I!==null;){switch(c=I,g=c.child,c.tag){case 0:case 11:case 14:case 15:di(4,c,c.return);break;case 1:sr(c,c.return);var _=c.stateNode;if(typeof _.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:sr(c,c.return);break;case 22:if(c.memoizedState!==null){Nd(f);continue}}g!==null?(g.return=c,I=g):Nd(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Pp("display",o))}catch(y){re(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){re(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tt(e,t),dt(t),r&4&&Td(t);break;case 21:break;default:tt(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ng(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var s=Id(t);Za(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Id(t);Xa(t,l,o);break;default:throw Error(E(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U1(t,e,n){I=t,sg(t)}function sg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Ps;var u=Ie;if(Ps=o,(Ie=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Pd(i):a!==null?(a.return=o,I=a):Pd(i);for(;s!==null;)I=s,sg(s),s=s.sibling;I=i,Ps=l,Ie=u}xd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):xd(t)}}function xd(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Ko(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ie||e.flags&512&&qa(e)}catch(c){re(e,e.return,c)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Nd(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Pd(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ko(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{qa(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{qa(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var W1=Math.ceil,go=Lt.ReactCurrentDispatcher,Sc=Lt.ReactCurrentOwner,Ze=Lt.ReactCurrentBatchConfig,B=0,ye=null,ae=null,we=0,Be=0,or=gn(0),de=0,Ui=null,Ln=0,qo=0,kc=0,hi=null,De=null,Ic=0,xr=1/0,Et=null,_o=!1,Ja=null,Jt=null,As=!1,Yt=null,yo=0,pi=0,eu=null,Vs=-1,Gs=0;function Re(){return B&6?oe():Vs!==-1?Vs:Vs=oe()}function en(t){return t.mode&1?B&2&&we!==0?we&-we:S1.transition!==null?(Gs===0&&(Gs=Bp()),Gs):(t=$,t!==0||(t=window.event,t=t===void 0?16:Kp(t.type)),t):1}function ut(t,e,n,r){if(50<pi)throw pi=0,eu=null,Error(E(185));es(t,n,r),(!(B&2)||t!==ye)&&(t===ye&&(!(B&2)&&(qo|=n),de===4&&Vt(t,we)),Ue(t,r),n===1&&B===0&&!(e.mode&1)&&(xr=oe()+500,Go&&_n()))}function Ue(t,e){var n=t.callbackNode;Sv(t,e);var r=eo(t,t===ye?we:0);if(r===0)n!==null&&zf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zf(n),e===1)t.tag===0?C1(Ad.bind(null,t)):pm(Ad.bind(null,t)),y1(function(){!(B&6)&&_n()}),n=null;else{switch(Hp(r)){case 1:n=Xu;break;case 4:n=Wp;break;case 16:n=Js;break;case 536870912:n=jp;break;default:n=Js}n=hg(n,og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function og(t,e){if(Vs=-1,Gs=0,B&6)throw Error(E(327));var n=t.callbackNode;if(mr()&&t.callbackNode!==n)return null;var r=eo(t,t===ye?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vo(t,r);else{e=r;var i=B;B|=2;var s=ag();(ye!==t||we!==e)&&(Et=null,xr=oe()+500,An(t,e));do try{H1();break}catch(l){lg(t,l)}while(!0);cc(),go.current=s,B=i,ae!==null?e=0:(ye=null,we=0,e=de)}if(e!==0){if(e===2&&(i=xa(t),i!==0&&(r=i,e=tu(t,i))),e===1)throw n=Ui,An(t,0),Vt(t,r),Ue(t,oe()),n;if(e===6)Vt(t,r);else{if(i=t.current.alternate,!(r&30)&&!j1(i)&&(e=vo(t,r),e===2&&(s=xa(t),s!==0&&(r=s,e=tu(t,s))),e===1))throw n=Ui,An(t,0),Vt(t,r),Ue(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:En(t,De,Et);break;case 3:if(Vt(t,r),(r&130023424)===r&&(e=Ic+500-oe(),10<e)){if(eo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ma(En.bind(null,t,De,Et),e);break}En(t,De,Et);break;case 4:if(Vt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){t.timeoutHandle=Ma(En.bind(null,t,De,Et),r);break}En(t,De,Et);break;case 5:En(t,De,Et);break;default:throw Error(E(329))}}}return Ue(t,oe()),t.callbackNode===n?og.bind(null,t):null}function tu(t,e){var n=hi;return t.current.memoizedState.isDehydrated&&(An(t,e).flags|=256),t=vo(t,e),t!==2&&(e=De,De=n,e!==null&&nu(e)),t}function nu(t){De===null?De=t:De.push.apply(De,t)}function j1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~kc,e&=~qo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function Ad(t){if(B&6)throw Error(E(327));mr();var e=eo(t,0);if(!(e&1))return Ue(t,oe()),null;var n=vo(t,e);if(t.tag!==0&&n===2){var r=xa(t);r!==0&&(e=r,n=tu(t,r))}if(n===1)throw n=Ui,An(t,0),Vt(t,e),Ue(t,oe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,En(t,De,Et),Ue(t,oe()),null}function Tc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(xr=oe()+500,Go&&_n())}}function Fn(t){Yt!==null&&Yt.tag===0&&!(B&6)&&mr();var e=B;B|=1;var n=Ze.transition,r=$;try{if(Ze.transition=null,$=1,t)return t()}finally{$=r,Ze.transition=n,B=e,!(B&6)&&_n()}}function xc(){Be=or.current,X(or)}function An(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_1(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Ir(),X(Fe),X(xe),gc();break;case 5:mc(r);break;case 4:Ir();break;case 13:X(ee);break;case 19:X(ee);break;case 10:fc(r.type._context);break;case 22:case 23:xc()}n=n.return}if(ye=t,ae=t=tn(t.current,null),we=Be=e,de=0,Ui=null,kc=qo=Ln=0,De=hi=null,In!==null){for(e=0;e<In.length;e++)if(n=In[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return t}function lg(t,e){do{var n=ae;try{if(cc(),Bs.current=mo,po){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(Mn=0,me=ue=te=null,fi=!1,Li=0,Sc.current=null,n===null||n.return===null){de=1,Ui=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=_d(o);if(g!==null){g.flags&=-257,yd(g,o,l,s,e),g.mode&1&&gd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){gd(s,u,e),Nc();break e}a=Error(E(426))}}else if(J&&l.mode&1){var k=_d(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yd(k,o,l,s,e),ac(Tr(a,l));break e}}s=a=Tr(a,l),de!==4&&(de=2),hi===null?hi=[s]:hi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=$m(s,a,e);ud(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Vm(s,l,e);ud(s,v);break e}}s=s.return}while(s!==null)}cg(n)}catch(S){e=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function ag(){var t=go.current;return go.current=mo,t===null?mo:t}function Nc(){(de===0||de===3||de===2)&&(de=4),ye===null||!(Ln&268435455)&&!(qo&268435455)||Vt(ye,we)}function vo(t,e){var n=B;B|=2;var r=ag();(ye!==t||we!==e)&&(Et=null,An(t,e));do try{B1();break}catch(i){lg(t,i)}while(!0);if(cc(),B=n,go.current=r,ae!==null)throw Error(E(261));return ye=null,we=0,de}function B1(){for(;ae!==null;)ug(ae)}function H1(){for(;ae!==null&&!pv();)ug(ae)}function ug(t){var e=dg(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?cg(t):ae=e,Sc.current=null}function cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L1(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,ae=null;return}}else if(n=M1(n,e,Be),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);de===0&&(de=5)}function En(t,e,n){var r=$,i=Ze.transition;try{Ze.transition=null,$=1,$1(t,e,n,r)}finally{Ze.transition=i,$=r}return null}function $1(t,e,n,r){do mr();while(Yt!==null);if(B&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kv(t,s),t===ye&&(ae=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||As||(As=!0,hg(Js,function(){return mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ze.transition,Ze.transition=null;var o=$;$=1;var l=B;B|=4,Sc.current=null,z1(t,n),ig(n,t),c1(ba),to=!!Oa,ba=Oa=null,t.current=n,U1(n),mv(),B=l,$=o,Ze.transition=s}else t.current=n;if(As&&(As=!1,Yt=t,yo=i),s=t.pendingLanes,s===0&&(Jt=null),yv(n.stateNode),Ue(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=Ja,Ja=null,t;return yo&1&&t.tag!==0&&mr(),s=t.pendingLanes,s&1?t===eu?pi++:(pi=0,eu=t):pi=0,_n(),null}function mr(){if(Yt!==null){var t=Hp(yo),e=Ze.transition,n=$;try{if(Ze.transition=null,$=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,yo=0,B&6)throw Error(E(331));var i=B;for(B|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:di(8,d,s)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var c=d.sibling,g=d.return;if(tg(d),d===u){I=null;break}if(c!==null){c.return=g,I=c;break}I=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:di(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var h=t.current;for(I=h;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=h;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ko(9,l)}}catch(S){re(l,l.return,S)}if(l===o){I=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,I=v;break e}I=l.return}}if(B=i,_n(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(jo,t)}catch{}r=!0}return r}finally{$=n,Ze.transition=e}}return!1}function Rd(t,e,n){e=Tr(n,e),e=$m(t,e,1),t=Zt(t,e,1),e=Re(),t!==null&&(es(t,1,e),Ue(t,e))}function re(t,e,n){if(t.tag===3)Rd(t,t,n);else for(;e!==null;){if(e.tag===3){Rd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){t=Tr(n,t),t=Vm(e,t,1),e=Zt(e,t,1),t=Re(),e!==null&&(es(e,1,t),Ue(e,t));break}}e=e.return}}function V1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>oe()-Ic?An(t,0):kc|=n),Ue(t,e)}function fg(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=Re();t=At(t,e),t!==null&&(es(t,e,n),Ue(t,n))}function G1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fg(t,n)}function Y1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),fg(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,D1(t,e,n);Me=!!(t.flags&131072)}else Me=!1,J&&e.flags&1048576&&mm(e,ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Cr(e,xe.current);pr(e,n),i=yc(null,e,r,t,i,n);var s=vc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(e),i.updater=Yo,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Va(null,e,r,!0,s,n)):(e.tag=0,J&&s&&oc(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K1(r),t=nt(r,t),i){case 0:e=$a(null,e,r,t,n);break e;case 1:e=Ed(null,e,r,t,n);break e;case 11:e=vd(null,e,r,t,n);break e;case 14:e=wd(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),$a(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ed(t,e,r,i,n);case 3:e:{if(Km(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vm(t,e),fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Tr(Error(E(423)),e),e=Cd(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(E(424)),e),e=Cd(t,e,r,n,i);break e}else for(He=Xt(e.stateNode.containerInfo.firstChild),$e=e,J=!0,it=null,n=Sm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){e=Rt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return km(e),t===null&&Ua(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Da(r,i)?o=null:s!==null&&Da(r,s)&&(e.flags|=32),Qm(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&Ua(e),null;case 13:return qm(t,e,n);case 4:return pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=kr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),vd(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(uo,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!Fe.current){e=Rt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Tt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wa(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pr(e,n),i=Je(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),wd(t,e,r,i,n);case 15:return Gm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),$s(t,e),e.tag=1,ze(r)?(t=!0,oo(e)):t=!1,pr(e,n),Em(e,r,i),Ba(e,r,i,n),Va(null,e,r,!0,t,n);case 19:return Xm(t,e,n);case 22:return Ym(t,e,n)}throw Error(E(156,e.tag))};function hg(t,e){return Up(t,e)}function Q1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new Q1(t,e,n,r)}function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K1(t){if(typeof t=="function")return Pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qu)return 11;if(t===Ku)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ys(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qn:return Rn(n.children,i,s,e);case Yu:o=8,i|=8;break;case da:return t=Xe(12,n,e,i|2),t.elementType=da,t.lanes=s,t;case ha:return t=Xe(13,n,e,i),t.elementType=ha,t.lanes=s,t;case pa:return t=Xe(19,n,e,i),t.elementType=pa,t.lanes=s,t;case Cp:return Xo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wp:o=10;break e;case Ep:o=9;break e;case Qu:o=11;break e;case Ku:o=14;break e;case Bt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Xo(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Cp,t.lanes=n,t.stateNode={isHidden:!1},t}function Vl(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Gl(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ac(t,e,n,r,i,s,o,l,a){return t=new q1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(s),t}function X1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pg(t){if(!t)return an;t=t._reactInternals;e:{if($n(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(ze(n))return hm(t,n,e)}return e}function mg(t,e,n,r,i,s,o,l,a){return t=Ac(n,r,!0,t,i,s,o,l,a),t.context=pg(null),n=t.current,r=Re(),i=en(n),s=Tt(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,es(t,i,r),Ue(t,r),t}function Zo(t,e,n,r){var i=e.current,s=Re(),o=en(i);return n=pg(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(ut(t,i,o,s),js(t,i,o)),o}function wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Od(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rc(t,e){Od(t,e),(t=t.alternate)&&Od(t,e)}function Z1(){return null}var gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oc(t){this._internalRoot=t}Jo.prototype.render=Oc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Zo(t,e,null,null)};Jo.prototype.unmount=Oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fn(function(){Zo(null,t,null,null)}),e[Pt]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&Qp(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bd(){}function J1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wo(o);s.call(u)}}var o=mg(e,r,t,0,null,!1,!1,"",bd);return t._reactRootContainer=o,t[Pt]=o.current,Ri(t.nodeType===8?t.parentNode:t),Fn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wo(a);l.call(u)}}var a=Ac(t,0,!1,null,null,!1,!1,"",bd);return t._reactRootContainer=a,t[Pt]=a.current,Ri(t.nodeType===8?t.parentNode:t),Fn(function(){Zo(e,a,n,r)}),a}function tl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=wo(o);l.call(a)}}Zo(e,o,t,i)}else o=J1(n,e,t,i,r);return wo(o)}$p=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ri(e.pendingLanes);n!==0&&(Zu(e,n|1),Ue(e,oe()),!(B&6)&&(xr=oe()+500,_n()))}break;case 13:Fn(function(){var r=At(t,1);if(r!==null){var i=Re();ut(r,t,1,i)}}),Rc(t,1)}};Ju=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Re();ut(e,t,134217728,n)}Rc(t,134217728)}};Vp=function(t){if(t.tag===13){var e=en(t),n=At(t,e);if(n!==null){var r=Re();ut(n,t,e,r)}Rc(t,e)}};Gp=function(){return $};Yp=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};ka=function(t,e,n){switch(e){case"input":if(_a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vo(r);if(!i)throw Error(E(90));kp(r),_a(r,i)}}}break;case"textarea":Tp(t,n);break;case"select":e=n.value,e!=null&&cr(t,!!n.multiple,e,!1)}};bp=Tc;Dp=Fn;var e0={usingClientEntryPoint:!1,Events:[ns,er,Vo,Rp,Op,Tc]},qr={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t0={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fp(t),t===null?null:t.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||Z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{jo=Rs.inject(t0),yt=Rs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(e))throw Error(E(200));return X1(t,e,null,n)};Ge.createRoot=function(t,e){if(!bc(t))throw Error(E(299));var n=!1,r="",i=gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ac(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,Ri(t.nodeType===8?t.parentNode:t),new Oc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Fp(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return Fn(t)};Ge.hydrate=function(t,e,n){if(!el(e))throw Error(E(200));return tl(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!bc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mg(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,Ri(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jo(e)};Ge.render=function(t,e,n){if(!el(e))throw Error(E(200));return tl(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!el(t))throw Error(E(40));return t._reactRootContainer?(Fn(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Tc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!el(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return tl(t,e,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function _g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_g)}catch(t){console.error(t)}}_g(),mp.exports=Ge;var n0=mp.exports,Dd=n0;ca.createRoot=Dd.createRoot,ca.hydrateRoot=Dd.hydrateRoot;const r0=()=>{};var Md={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Lr(e)},Lr=function(t){return new Error("Firebase Database ("+yg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let c=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(c=64)),r.push(n[d],n[f],n[c],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new s0;const c=s<<2|l>>4;if(r.push(c),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wg=function(t){const e=vg(t);return Dc.encodeByteArray(e,!0)},Eo=function(t){return wg(t).replace(/\./g,"")},ru=function(t){try{return Dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){return Eg(void 0,t)}function Eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!l0(n)||(t[n]=Eg(t[n],e[n]));return t}function l0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=()=>a0().__FIREBASE_DEFAULTS__,c0=()=>{if(typeof process>"u"||typeof Md>"u")return;const t=Md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ru(t[1]);return e&&JSON.parse(e)},Cg=()=>{try{return r0()||u0()||c0()||f0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d0=t=>{var e,n;return(n=(e=Cg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},h0=t=>{const e=d0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sg=()=>{var t;return(t=Cg())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return t.endsWith(".cloudworkstations.dev")}async function p0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eo(JSON.stringify(n)),Eo(JSON.stringify(o)),""].join(".")}const mi={};function g0(){const t={prod:[],emulator:[]};for(const e of Object.keys(mi))mi[e]?t.emulator.push(e):t.prod.push(e);return t}function _0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ld=!1;function kg(t,e){if(typeof window>"u"||typeof document>"u"||!Mc(window.location.host)||mi[t]===e||mi[t]||Ld)return;mi[t]=e;function n(c){return`__firebase__banner__${c}`}const r="__firebase__banner",s=g0().prod.length>0;function o(){const c=document.getElementById(r);c&&c.remove()}function l(c){c.style.display="flex",c.style.background="#7faaf0",c.style.position="fixed",c.style.bottom="5px",c.style.left="5px",c.style.padding=".5em",c.style.borderRadius="5px",c.style.alignItems="center"}function a(c,g){c.setAttribute("width","24"),c.setAttribute("id",g),c.setAttribute("height","24"),c.setAttribute("viewBox","0 0 24 24"),c.setAttribute("fill","none"),c.style.marginLeft="-6px"}function u(){const c=document.createElement("span");return c.style.cursor="pointer",c.style.marginLeft="16px",c.style.fontSize="24px",c.innerHTML=" &times;",c.onclick=()=>{Ld=!0,o()},c}function d(c,g){c.setAttribute("id",g),c.innerText="Learn more",c.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",c.setAttribute("target","__blank"),c.style.paddingLeft="5px",c.style.textDecoration="underline"}function f(){const c=_0(r),g=n("text"),_=document.getElementById(g)||document.createElement("span"),y=n("learnmore"),k=document.getElementById(y)||document.createElement("a"),p=n("preprendIcon"),h=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(c.created){const m=c.element;l(m),d(k,y);const v=u();a(h,p),m.append(h,_,k,v),document.body.appendChild(m)}s?(_.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y0())}function v0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tg(){return yg.NODE_ADMIN===!0}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function E0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class is extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=C0,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xg.prototype.create)}}class xg{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?S0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new is(i,l,r)}}function S0(t,e){return t.replace(k0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const k0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(ru(s[0])||""),n=Wi(ru(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},I0=function(t){const e=Ng(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},T0=function(t){const e=Ng(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function So(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zd(s)&&zd(o)){if(!So(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const c=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(c<<1|c>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):f<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const c=(i<<5|i>>>27)+u+a+d+r[f]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=c}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Lc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){return t&&t._delegate?t._delegate:t}class ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(O0(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(t){return t===Cn?void 0:t}function O0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const D0={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},M0=G.INFO,L0={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},F0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=L0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pg{constructor(e){this.name=e,this._logLevel=M0,this._logHandler=F0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const z0=(t,e)=>e.some(n=>t instanceof n);let Ud,Wd;function U0(){return Ud||(Ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,iu=new WeakMap,Rg=new WeakMap,Yl=new WeakMap,Fc=new WeakMap;function j0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,t)}).catch(()=>{}),Fc.set(e,t),e}function B0(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function H0(t){su=t(su)}function $0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return Rg.set(r,e.sort?e.sort():[e]),nn(r)}:W0().includes(t)?function(...e){return t.apply(Ql(this),e),nn(Ag.get(this))}:function(...e){return nn(t.apply(Ql(this),e))}}function V0(t){return typeof t=="function"?$0(t):(t instanceof IDBTransaction&&B0(t),z0(t,U0())?new Proxy(t,su):t)}function nn(t){if(t instanceof IDBRequest)return j0(t);if(Yl.has(t))return Yl.get(t);const e=V0(t);return e!==t&&(Yl.set(t,e),Fc.set(e,t)),e}const Ql=t=>Fc.get(t);function G0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(nn(o.result),a.oldVersion,a.newVersion,nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Y0=["get","getKey","getAll","getAllKeys","count"],Q0=["put","add","delete","clear"],Kl=new Map;function jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kl.get(e))return Kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Q0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Y0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Kl.set(e,s),s}H0(t=>({...t,get:(e,n,r)=>jd(e,n)||t.get(e,n,r),has:(e,n)=>!!jd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function q0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",Bd="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Pg("@firebase/app"),X0="@firebase/app-compat",Z0="@firebase/analytics-compat",J0="@firebase/analytics",ew="@firebase/app-check-compat",tw="@firebase/app-check",nw="@firebase/auth",rw="@firebase/auth-compat",iw="@firebase/database",sw="@firebase/data-connect",ow="@firebase/database-compat",lw="@firebase/functions",aw="@firebase/functions-compat",uw="@firebase/installations",cw="@firebase/installations-compat",fw="@firebase/messaging",dw="@firebase/messaging-compat",hw="@firebase/performance",pw="@firebase/performance-compat",mw="@firebase/remote-config",gw="@firebase/remote-config-compat",_w="@firebase/storage",yw="@firebase/storage-compat",vw="@firebase/firestore",ww="@firebase/vertexai",Ew="@firebase/firestore-compat",Cw="firebase",Sw="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="[DEFAULT]",kw={[ou]:"fire-core",[X0]:"fire-core-compat",[J0]:"fire-analytics",[Z0]:"fire-analytics-compat",[tw]:"fire-app-check",[ew]:"fire-app-check-compat",[nw]:"fire-auth",[rw]:"fire-auth-compat",[iw]:"fire-rtdb",[sw]:"fire-data-connect",[ow]:"fire-rtdb-compat",[lw]:"fire-fn",[aw]:"fire-fn-compat",[uw]:"fire-iid",[cw]:"fire-iid-compat",[fw]:"fire-fcm",[dw]:"fire-fcm-compat",[hw]:"fire-perf",[pw]:"fire-perf-compat",[mw]:"fire-rc",[gw]:"fire-rc-compat",[_w]:"fire-gcs",[yw]:"fire-gcs-compat",[vw]:"fire-fst",[Ew]:"fire-fst-compat",[ww]:"fire-vertex","fire-js":"fire-js",[Cw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,Iw=new Map,au=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Io(t){const e=t.name;if(au.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of ko.values())Hd(n,t);for(const n of Iw.values())Hd(n,t);return!0}function Tw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xw(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new xg("app","Firebase",Nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=Sw;function Og(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Sg()),!n)throw rn.create("no-options");const s=ko.get(i);if(s){if(So(n,s.options)&&So(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new b0(i);for(const a of au.values())o.addComponent(a);const l=new Pw(n,r,o);return ko.set(i,l),l}function Rw(t=lu){const e=ko.get(t);if(!e&&t===lu&&Sg())return Og();if(!e)throw rn.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=kw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(l.join(" "));return}Io(new ji(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebase-heartbeat-database",bw=1,Bi="firebase-heartbeat-store";let ql=null;function bg(){return ql||(ql=G0(Ow,bw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),ql}async function Dw(t){try{const n=(await bg()).transaction(Bi),r=await n.objectStore(Bi).get(Dg(t));return await n.done,r}catch(e){if(e instanceof is)Ot.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function $d(t,e){try{const r=(await bg()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Dg(t)),await r.done}catch(n){if(n instanceof is)Ot.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=1024,Lw=30;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Lw){const o=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vd(),{heartbeatsToSend:r,unsentEntries:i}=zw(this._heartbeatsCache.heartbeats),s=Eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ot.warn(n),""}}}function Vd(){return new Date().toISOString().substring(0,10)}function zw(t,e=Mw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?E0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return Eo(JSON.stringify({version:2,heartbeats:t})).length}function Ww(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){Io(new ji("platform-logger",e=>new K0(e),"PRIVATE")),Io(new ji("heartbeat",e=>new Fw(e),"PRIVATE")),gr(ou,Bd,t),gr(ou,Bd,"esm2017"),gr("fire-js","")}jw("");var Bw="firebase",Hw="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(Bw,Hw,"app");var Yd={};const Qd="@firebase/database",Kd="1.0.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg="";function $w(t){Mg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vw(e)}}catch{}return new Gw},xn=Lg("localStorage"),uu=Lg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Pg("@firebase/database"),Yw=function(){let t=1;return function(){return t++}}(),Fg=function(t){const e=P0(t),n=new N0;n.update(e);const r=n.digest();return Dc.encodeByteArray(r)},ss=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ss.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let On=null,qd=!0;const Qw=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_r.logLevel=G.VERBOSE,On=_r.log.bind(_r),e&&uu.set("logging_enabled",!0)):typeof t=="function"?On=t:(On=null,uu.remove("logging_enabled"))},Te=function(...t){if(qd===!0&&(qd=!1,On===null&&uu.get("logging_enabled")===!0&&Qw(!0)),On){const e=ss.apply(null,t);On(e)}},os=function(t){return function(...e){Te(t,...e)}},cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ss(...t);_r.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${ss(...t)}`;throw _r.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+ss(...t);_r.warn(e)},Kw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pr="[MIN_NAME]",zn="[MAX_NAME]",zr=function(t,e){if(t===e)return 0;if(t===Pr||e===zn)return-1;if(e===Pr||t===zn)return 1;{const n=Xd(t),r=Xd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xw=function(t,e){return t===e?0:t<e?-1:1},Xr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},zc=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=zc(t[e[r]]);return n+="}",n},Ug=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wg=function(t){C(!zg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let f="";for(a=0;a<64;a+=8){let c=parseInt(d.substr(a,8),2).toString(16);c.length===1&&(c="0"+c),f=f+c}return f.toLowerCase()},Zw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tE=new RegExp("^-?(0*)\\d{1,10}$"),nE=-2147483648,rE=2147483647,Xd=function(t){if(tE.test(t)){const e=Number(t);if(e>=nE&&e<=rE)return e}return null},Ur=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},iE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,xw(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="5",jg="v",Bg="s",Hg="r",$g="f",Vg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gg="ls",Yg="p",fu="ac",Qg="websocket",Kg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xg(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Qg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lE(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return o0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl={},Zl={};function Wc(t){const e=t.toString();return Xl[e]||(Xl[e]=new aE),Xl[e]}function uE(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ur(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="start",fE="close",dE="pLPCommand",hE="pRTLPCB",Zg="id",Jg="pw",e_="ser",pE="cb",mE="seg",gE="ts",_E="d",yE="dframe",t_=1870,n_=30,vE=t_-n_,wE=25e3,EE=3e4;class lr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=os(e),this.stats_=Wc(n),this.urlFn=a=>(this.appCheckToken&&(a[fu]=this.appCheckToken),Xg(n,Kg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EE)),qw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zd)this.id=l,this.password=a;else if(o===fE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zd]="t",r[e_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jg]=Uc,this.transportSessionId&&(r[Bg]=this.transportSessionId),this.lastSessionId&&(r[Gg]=this.lastSessionId),this.applicationId&&(r[Yg]=this.applicationId),this.appCheckToken&&(r[fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(r[Hg]=$g);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lr.forceAllow_=!0}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){return lr.forceAllow_?!0:!lr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zw()&&!Jw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wg(n),i=Ug(r,vE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yE]="t",r[Zg]=e,r[Jg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Yw(),window[dE+this.uniqueCallbackIdentifier]=e,window[hE+this.uniqueCallbackIdentifier]=n,this.myIFrame=jc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zg]=this.myID,e[Jg]=this.myPW,e[e_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+n_+r.length<=t_;){const o=this.pendingSegs.shift();r=r+"&"+mE+i+"="+o.seg+"&"+gE+i+"="+o.ts+"&"+_E+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=16384,SE=45e3;let To=null;typeof MozWebSocket<"u"?To=MozWebSocket:typeof WebSocket<"u"&&(To=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=os(this.connId),this.stats_=Wc(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[jg]=Uc,typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(o[Hg]=$g),n&&(o[Bg]=n),r&&(o[Gg]=r),i&&(o[fu]=i),s&&(o[Yg]=s),Xg(e,Qg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let r;Tg(),this.mySock=new To(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&To!==null&&!st.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ug(n,CE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static get ALL_TRANSPORTS(){return[lr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of Hi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=6e4,IE=5e3,TE=10*1024,xE=100*1024,Jl="t",Jd="d",NE="s",eh="r",PE="e",th="o",nh="a",rh="n",ih="p",AE="h";class RE{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=os("c:"+this.id+":"),this.transportManager_=new Hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jl in e){const n=e[Jl];n===nh?this.upgradeIfSecondaryHealthy_():n===eh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===th&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xr("t",e),r=Xr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ih,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xr("t",e),r=Xr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xr(Jl,e);if(Jd in e){const r=e[Jd];if(n===AE){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NE?this.onConnectionShutdown_(r):n===eh?this.onReset_(r):n===PE?cu("Server Error: "+r):n===th?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uc!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ih,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends i_{static getInstance(){return new xo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ig()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=32,oh=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new V("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function un(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function s_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function o_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function l_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return Ae(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function a_(t,e){if(un(t)!==un(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(un(t)>un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bE{constructor(e,n){this.errorPrefix_=n,this.parts_=o_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rl(this.parts_[r]);u_(this)}}function DE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rl(e),u_(t)}function ME(t){const e=t.parts_.pop();t.byteLength_-=rl(e),t.parts_.length>0&&(t.byteLength_-=1)}function u_(t){if(t.byteLength_>oh)throw new Error(t.errorPrefix_+"has a key path longer than "+oh+" bytes ("+t.byteLength_+").");if(t.parts_.length>sh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sh+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends i_{static getInstance(){return new Bc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=1e3,LE=60*5*1e3,lh=30*1e3,FE=1.3,zE=3e4,UE="server_kill",ah=3;class xt extends r_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zr,this.maxReconnectDelay_=LE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Tg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new nl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Nr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||T0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=I0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cu("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zE&&(this.reconnectDelay_=Zr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(f){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,c]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=c&&c.token,l=new RE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(UE)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&We(f),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fd(this.interruptReasons_)&&(this.reconnectDelay_=Zr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>zc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ah&&(this.reconnectDelay_=lh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ah&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mg.replace(/\./g,"-")]=1,Ig()?e["framework.cordova"]=1:v0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return Fd(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(Pr,e),i=new L(Pr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class c_ extends il{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return zr(e.name,n.name)}isDefinedOn(e){throw Lr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(zn,Os)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Os)}toString(){return".key"}}const vr=new c_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class WE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new WE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e){return zr(t.name,e.name)}function Hc(t,e){return zr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;function BE(t){du=t}const f_=function(t){return typeof t=="number"?"number:"+Wg(t):"string:"+t},d_=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else C(t===du||t.isEmpty(),"priority of unexpected type.");C(t===du||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;class pe{static set __childrenNodeConstructor(e){uh=e}static get __childrenNodeConstructor(){return uh}constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),d_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:W(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wg(this.value_):e+=this.value_,this.lazyHash_=Fg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h_,p_;function HE(t){h_=t}function $E(t){p_=t}class VE extends il{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(zn,new pe("[PRIORITY-POST]",p_))}makePost(e,n){const r=h_(e);return new L(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new VE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=Math.log(2);class YE{constructor(e){const n=s=>parseInt(Math.log(s)/GE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const No=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let f,c;if(d===0)return null;if(d===1)return f=t[a],c=n?n(f):f,new ge(c,f.node,ge.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),y=i(g+1,u);return f=t[g],c=n?n(f):f,new ge(c,f.node,ge.BLACK,_,y)}},s=function(a){let u=null,d=null,f=t.length;const c=function(_,y){const k=f-_,p=f;f-=_;const h=i(k+1,p),m=t[k],v=n?n(m):m;g(new ge(v,m.node,y,null,h))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),k=Math.pow(2,a.count-(_+1));y?c(k,ge.BLACK):(c(k,ge.BLACK),c(k,ge.RED))}return d},o=new YE(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const Qn={};class It{static get Default(){return C(Qn&&ie,"ChildrenNode.ts has not been loaded"),ea=ea||new It({".priority":Qn},{".priority":ie}),ea}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Nr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){C(e!==vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=No(r,e.getCompare()):l=Qn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new It(d,u)}addToIndexes(e,n){const r=Co(this.indexes_,(i,s)=>{const o=Nr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Qn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),No(l,o.getCompare())}else return Qn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new It(r,this.indexSet_)}removeFromIndexes(e,n){const r=Co(this.indexes_,i=>{if(i===Qn)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new It(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class b{static get EMPTY_NODE(){return Jr||(Jr=new b(new Le(Hc),null,It.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&d_(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jr}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jr:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Jr:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{C(W(e)!==".priority"||un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f_(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ls?-1:0}withIndex(e){if(e===vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vr?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QE extends b{constructor(){super(new Le(Hc),b.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const ls=new QE;Object.defineProperties(L,{MIN:{value:new L(Pr,b.EMPTY_NODE)},MAX:{value:new L(zn,ls)}});c_.__EMPTY_NODE=b.EMPTY_NODE;pe.__childrenNodeConstructor=b;BE(ls);$E(ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=!0;function _e(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&KE){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return b.EMPTY_NODE;const s=No(n,jE,o=>o.name,Hc);if(r){const o=No(n,ie.getCompare());return new b(s,_e(e),new It({".priority":o},{".priority":ie}))}else return new b(s,_e(e),It.Default)}else{let n=b.EMPTY_NODE;return je(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}HE(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends il{constructor(e){super(),this.indexPath_=e,C(!z(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,ls);return new L(zn,e)}toString(){return o_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE extends il{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=_e(e);return new L(n,r)}toString(){return".value"}}const ZE=new XE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){return{type:"value",snapshotNode:t}}function Ar(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $i(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($i(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ar(n,r)):o.trackChildChange(Vi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange($i(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Vi(i,s,o))}else r.trackChildChange(Ar(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.indexedFilter_=new $c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gi.getStartPost_(e),this.endPost_=Gi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(c,g)=>f(g,c)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const f=l.getImmediateChild(n);let c=i.getChildAfterChild(this.index_,u,this.reverse_);for(;c!=null&&(c.name===n||l.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);const g=c==null?1:o(c,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Vi(n,r,f)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange($i(n,f));const y=l.updateImmediateChild(n,b.EMPTY_NODE);return c!=null&&this.rangedFilter_.matches(c)?(s!=null&&s.trackChildChange(Ar(c.name,c.node)),y.updateImmediateChild(c.name,c.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange($i(u.name,u.node)),s.trackChildChange(Ar(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tC(t){return t.loadsAllData()?new $c(t.getIndex()):t.hasLimit()?new eC(t):new Gi(t)}function ch(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===ZE?n="$value":t.index_===vr?n="$key":(C(t.index_ instanceof qE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends r_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=os("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Po.getListenId_(e,r),l={};this.listens_[o]=l;const a=ch(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Nr(this.listens_,o)===l){let c;u?u===401?c="permission_denied":c="rest_error:"+u:c="ok",i(c,null)}})}unlisten(e,n){const r=Po.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ch(e._queryParams),r=e._path.toString(),i=new nl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+x0(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wi(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return{value:null,children:new Map}}function g_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Ao());const i=t.children.get(r);e=Y(e),g_(i,e,n)}}function hu(t,e,n){t.value!==null?n(e,t.value):rC(t,(r,i)=>{const s=new V(e.toString()+"/"+r);hu(i,s,n)})}function rC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=10*1e3,sC=30*1e3,oC=5*60*1e3;class lC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iC(e);const r=dh+(sC-dh)*Math.random();gi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*oC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function __(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=__()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Ro(H(),n,this.revert)}}else return C(W(this.path)===e,"operationForChild called for unrelated child."),new Ro(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Yi(this.source,H()):new Yi(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return z(this.path)?new Un(this.source,H(),this.snap.getImmediateChild(e)):new Un(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Un(this.source,H(),n.value):new Qi(this.source,H(),n)}else return C(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JE(o.childName,o.snapshotNode))}),ei(t,i,"child_removed",e,r,n),ei(t,i,"child_added",e,r,n),ei(t,i,"child_moved",s,r,n),ei(t,i,"child_changed",e,r,n),ei(t,i,"value",e,r,n),i}function ei(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>fC(t,l,a)),o.forEach(l=>{const a=cC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function cC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fC(t,e,n){if(e.childName==null||n.childName==null)throw Lr("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e){return{eventCache:t,serverCache:e}}function _i(t,e,n,r){return sl(new cn(e,n,r),t.serverCache)}function y_(t,e,n,r){return sl(t.eventCache,new cn(e,n,r))}function Oo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const dC=()=>(ta||(ta=new Le(Xw)),ta);class q{static fromObject(e){let n=new q(null);return je(e,(r,i)=>{n=n.set(new V(r),i)}),n}constructor(e,n=dC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:fe(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new q(null)}}set(e,n){if(z(e))return new q(n,this.children);{const r=W(e),s=(this.children.get(r)||new q(null)).set(Y(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(z(e))return n;{const r=W(e),s=(this.children.get(r)||new q(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),fe(n,i),r):new q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new q(null))}}function yi(t,e,n){if(z(e))return new ct(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function hh(t,e,n){let r=t;return je(n,(i,s)=>{r=yi(r,fe(e,i),s)}),r}function ph(t,e){if(z(e))return ct.empty();{const n=t.writeTree_.setTree(e,new q(null));return new ct(n)}}function pu(t,e){return Vn(t,e)!=null}function Vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function mh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function sn(t,e){if(z(e))return t;{const n=Vn(t,e);return n!=null?new ct(new q(n)):new ct(t.writeTree_.subtree(e))}}function mu(t){return t.writeTree_.isEmpty()}function Rr(t,e){return v_(H(),t.writeTree_,e)}function v_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=v_(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e){return S_(e,t)}function hC(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yi(t.visibleWrites,e,n)),t.lastWriteId=r}function pC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gC(l,r.path)?i=!1:ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return _C(t),!0;if(r.snap)t.visibleWrites=ph(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=ph(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function gC(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(fe(t.path,n),e))return!0;return!1}function _C(t){t.visibleWrites=w_(t.allWrites,yC,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yC(t){return t.visible}function w_(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ot(n,o)?(l=Ae(n,o),r=yi(r,l,s.snap)):ot(o,n)&&(l=Ae(o,n),r=yi(r,H(),s.snap.getChild(l)));else if(s.children){if(ot(n,o))l=Ae(n,o),r=hh(r,l,s.children);else if(ot(o,n))if(l=Ae(o,n),z(l))r=hh(r,H(),s.children);else{const a=Nr(s.children,W(l));if(a){const u=a.getChild(Y(l));r=yi(r,H(),u)}}}else throw Lr("WriteRecord should have .snap or .children")}}return r}function E_(t,e,n,r,i){if(!r&&!i){const s=Vn(t.visibleWrites,e);if(s!=null)return s;{const o=sn(t.visibleWrites,e);if(mu(o))return n;if(n==null&&!pu(o,H()))return null;{const l=n||b.EMPTY_NODE;return Rr(o,l)}}}else{const s=sn(t.visibleWrites,e);if(!i&&mu(s))return n;if(!i&&n==null&&!pu(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},l=w_(t.allWrites,o,e),a=n||b.EMPTY_NODE;return Rr(l,a)}}}function vC(t,e,n){let r=b.EMPTY_NODE;const i=Vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=sn(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=Rr(sn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),mh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=sn(t.visibleWrites,e);return mh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wC(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(pu(t.visibleWrites,s))return null;{const o=sn(t.visibleWrites,s);return mu(o)?i.getChild(n):Rr(o,i.getChild(n))}}function EC(t,e,n,r){const i=fe(e,n),s=Vn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=sn(t.visibleWrites,i);return Rr(o,r.getNode().getImmediateChild(n))}else return null}function CC(t,e){return Vn(t.visibleWrites,e)}function SC(t,e,n,r,i,s,o){let l;const a=sn(t.visibleWrites,e),u=Vn(a,H());if(u!=null)l=u;else if(n!=null)l=Rr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],f=o.getCompare(),c=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=c.getNext();for(;g&&d.length<i;)f(g,r)!==0&&d.push(g),g=c.getNext();return d}else return[]}function kC(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function bo(t,e,n,r){return E_(t.writeTree,t.treePath,e,n,r)}function Qc(t,e){return vC(t.writeTree,t.treePath,e)}function gh(t,e,n,r){return wC(t.writeTree,t.treePath,e,n,r)}function Do(t,e){return CC(t.writeTree,fe(t.treePath,e))}function IC(t,e,n,r,i,s){return SC(t.writeTree,t.treePath,e,n,r,i,s)}function Kc(t,e,n){return EC(t.writeTree,t.treePath,e,n)}function C_(t,e){return S_(fe(t.treePath,e),t.writeTree)}function S_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Vi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$i(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ar(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Vi(r,e.snapshotNode,i.oldSnap));else throw Lr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const k_=new xC;class qc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wn(this.viewCache_),s=IC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){return{filter:t}}function PC(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AC(t,e,n,r,i){const s=new TC;let o,l;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=gu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Mo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=OC(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=_u(t,e,u.path,u.children,r,i,l,s))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=MC(t,e,u.path,r,i,s):o=bC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===lt.LISTEN_COMPLETE)o=DC(t,e,n.path,r,s);else throw Lr("Unknown operation type: "+n.type);const a=s.getChanges();return RC(e,o,a),{viewCache:o,changes:a}}function RC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Oo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(m_(Oo(e)))}}function I_(t,e,n,r,i,s){const o=e.eventCache;if(Do(r,n)!=null)return e;{let l,a;if(z(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Wn(e),d=u instanceof b?u:b.EMPTY_NODE,f=Qc(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=bo(r,Wn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){C(un(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const f=gh(r,n,d,a);f!=null?l=t.filter.updatePriority(d,f):l=o.getNode()}else{const d=Y(n);let f;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const c=gh(r,n,o.getNode(),a);c!=null?f=o.getNode().getImmediateChild(u).updateChild(d,c):f=o.getNode().getImmediateChild(u)}else f=Kc(r,u,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),u,f,d,i,s):l=o.getNode()}}return _i(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Mo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=W(n);if(!a.isCompleteForPath(n)&&un(n)>1)return e;const _=Y(n),k=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),k):u=d.updateChild(a.getNode(),g,k,_,k_,null)}const f=y_(e,u,a.isFullyInitialized()||z(n),d.filtersNodes()),c=new qc(i,f,s);return I_(t,f,n,i,c,l)}function gu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new qc(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=_i(e,u,!0,t.filter.filtersNodes());else{const f=W(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=_i(e,u,l.isFullyInitialized(),l.isFiltered());else{const c=Y(n),g=l.getNode().getImmediateChild(f);let _;if(z(c))_=r;else{const y=d.getCompleteChild(f);y!=null?s_(c)===".priority"&&y.getChild(l_(c)).isEmpty()?_=y:_=y.updateChild(c,r):_=b.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),f,_,c,d,o);a=_i(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function _h(t,e){return t.eventCache.isCompleteForChild(e)}function OC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=fe(n,a);_h(e,W(d))&&(l=gu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=fe(n,a);_h(e,W(d))||(l=gu(t,l,d,u,i,s,o))}),l}function yh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _u(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,c)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=yh(t,g,c);a=Mo(t,a,new V(f),_,i,s,o,l)}}),u.children.inorderTraversal((f,c)=>{const g=!e.serverCache.isCompleteForChild(f)&&c.value===null;if(!d.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),y=yh(t,_,c);a=Mo(t,a,new V(f),y,i,s,o,l)}}),a}function bC(t,e,n,r,i,s,o){if(Do(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Mo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new q(null);return a.getNode().forEachChild(vr,(d,f)=>{u=u.set(new V(d),f)}),_u(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,f)=>{const c=fe(n,d);a.isCompleteForPath(c)&&(u=u.set(d,a.getNode().getChild(c)))}),_u(t,e,n,u,i,s,l,o)}}function DC(t,e,n,r,i){const s=e.serverCache,o=y_(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return I_(t,o,n,r,k_,i)}function MC(t,e,n,r,i,s){let o;if(Do(r,n)!=null)return e;{const l=new qc(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||W(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=bo(r,Wn(e));else{const f=e.serverCache.getNode();C(f instanceof b,"serverChildren would be complete if leaf node"),d=Qc(r,f)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=W(n);let f=Kc(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=a.getImmediateChild(d)),f!=null?u=t.filter.updateChild(a,d,f,Y(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,b.EMPTY_NODE,Y(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(r,Wn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Do(r,H())!=null,_i(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $c(r.getIndex()),s=tC(r);this.processor_=NC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(b.EMPTY_NODE,l.getNode(),null),d=new cn(a,o.isFullyInitialized(),i.filtersNodes()),f=new cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=sl(f,d),this.eventGenerator_=new aC(this.query_)}get query(){return this.query_}}function FC(t){return t.viewCache_.serverCache.getNode()}function zC(t){return Oo(t.viewCache_)}function UC(t,e){const n=Wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function vh(t){return t.eventRegistrations_.length===0}function WC(t,e){t.eventRegistrations_.push(e)}function wh(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Eh(t,e,n,r){e.type===lt.MERGE&&e.source.queryId!==null&&(C(Wn(t.viewCache_),"We should always have a full cache before handling merges"),C(Oo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=AC(t.processor_,i,e,n,r);return PC(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,T_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function jC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Ar(s,o))}),n.isFullyInitialized()&&r.push(m_(n.getNode())),T_(t,r,n.getNode(),e)}function T_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return uC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;class x_{constructor(){this.views=new Map}}function BC(t){C(!Lo,"__referenceConstructor has already been defined"),Lo=t}function HC(){return C(Lo,"Reference.ts has not been loaded"),Lo}function $C(t){return t.views.size===0}function Xc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Eh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Eh(o,e,n,r));return s}}function N_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=bo(n,i?r:null),a=!1;l?a=!0:r instanceof b?(l=Qc(n,r),a=!1):(l=b.EMPTY_NODE,a=!1);const u=sl(new cn(l,a,!1),new cn(r,i,!1));return new LC(e,u)}return o}function VC(t,e,n,r,i,s){const o=N_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WC(o,n),jC(o,n)}function GC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(wh(u,n,r)),vh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(wh(a,n,r)),vh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(HC())(e._repo,e._path)),{removed:s,events:o}}function P_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function on(t,e){let n=null;for(const r of t.views.values())n=n||UC(r,e);return n}function A_(t,e){if(e._queryParams.loadsAllData())return ll(t);{const r=e._queryIdentifier;return t.views.get(r)}}function R_(t,e){return A_(t,e)!=null}function fn(t){return ll(t)!=null}function ll(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;function YC(t){C(!Fo,"__referenceConstructor has already been defined"),Fo=t}function QC(){return C(Fo,"Reference.ts has not been loaded"),Fo}let KC=1;class Ch{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=kC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function O_(t,e,n,r,i){return hC(t.pendingWriteTree_,e,n,r,i),i?us(t,new Un(__(),e,n)):[]}function Nn(t,e,n=!1){const r=pC(t.pendingWriteTree_,e);if(mC(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(H(),!0):je(r.children,o=>{s=s.set(new V(o),!0)}),us(t,new Ro(r.path,s,n))}else return[]}function as(t,e,n){return us(t,new Un(Gc(),e,n))}function qC(t,e,n){const r=q.fromObject(n);return us(t,new Qi(Gc(),e,r))}function XC(t,e){return us(t,new Yi(Gc(),e))}function ZC(t,e,n){const r=Jc(t,n);if(r){const i=ef(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new Yi(Yc(o),l);return tf(t,s,a)}else return[]}function b_(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||R_(o,e))){const a=GC(o,e,n,r);$C(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(c=>c._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(c,g)=>fn(g));if(d&&!f){const c=t.syncPointTree_.subtree(s);if(!c.isEmpty()){const g=nS(c);for(let _=0;_<g.length;++_){const y=g[_],k=y.query,p=F_(t,y);t.listenProvider_.startListening(vi(k),Ki(t,k),p.hashFn,p.onComplete)}}}!f&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(vi(e),null):u.forEach(c=>{const g=t.queryToTagMap.get(al(c));t.listenProvider_.stopListening(vi(c),g)}))}rS(t,u)}return l}function D_(t,e,n,r){const i=Jc(t,r);if(i!=null){const s=ef(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new Un(Yc(l),a,n);return tf(t,o,u)}else return[]}function JC(t,e,n,r){const i=Jc(t,r);if(i){const s=ef(i),o=s.path,l=s.queryId,a=Ae(o,e),u=q.fromObject(n),d=new Qi(Yc(l),a,u);return tf(t,o,d)}else return[]}function eS(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(c,g)=>{const _=Ae(c,i);s=s||on(g,_),o=o||fn(g)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||on(l,H())):(l=new x_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=on(_,H());y&&(s=s.updateImmediateChild(g,y))}));const u=R_(l,e);if(!u&&!e._queryParams.loadsAllData()){const c=al(e);C(!t.queryToTagMap.has(c),"View does not exist, but we have a tag");const g=iS();t.queryToTagMap.set(c,g),t.tagToQueryMap.set(g,c)}const d=ol(t.pendingWriteTree_,i);let f=VC(l,e,n,d,s,a);if(!u&&!o&&!r){const c=A_(l,e);f=f.concat(sS(t,e,c))}return f}function Zc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=on(l,a);if(u)return u});return E_(i,e,s,n,!0)}function tS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const f=Ae(u,n);r=r||on(d,f)});let i=t.syncPointTree_.get(n);i?r=r||on(i,H()):(i=new x_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new cn(r,!0,!1):null,l=ol(t.pendingWriteTree_,e._path),a=N_(i,e,l,s?o.getNode():b.EMPTY_NODE,s);return zC(a)}function us(t,e){return M_(e,t.syncPointTree_,null,ol(t.pendingWriteTree_,H()))}function M_(t,e,n,r){if(z(t.path))return L_(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=on(i,H()));let s=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=C_(r,o);s=s.concat(M_(l,a,u,d))}return i&&(s=s.concat(Xc(i,t,r,n))),s}}function L_(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=on(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=C_(r,o),d=t.operationForChild(o);d&&(s=s.concat(L_(d,l,a,u)))}),i&&(s=s.concat(Xc(i,t,r,n))),s}function F_(t,e){const n=e.query,r=Ki(t,n);return{hashFn:()=>(FC(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZC(t,n._path,r):XC(t,n._path);{const s=eE(i,n);return b_(t,n,null,s)}}}}function Ki(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function Jc(t,e){return t.tagToQueryMap.get(e)}function ef(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function tf(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=ol(t.pendingWriteTree_,e);return Xc(r,n,i,null)}function nS(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[ll(n)];{let i=[];return n&&(i=P_(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QC())(t._repo,t._path):t}function rS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function iS(){return KC++}function sS(t,e,n){const r=e._path,i=Ki(t,e),s=F_(t,n),o=t.listenProvider_.startListening(vi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,f)=>{if(!z(u)&&d&&fn(d))return[ll(d).query];{let c=[];return d&&(c=c.concat(P_(d).map(g=>g.query))),je(f,(g,_)=>{c=c.concat(_)}),c}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(vi(d),Ki(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nf(n)}node(){return this.node_}}class rf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new rf(this.syncTree_,n)}node(){return Zc(this.syncTree_,this.path_)}}const oS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sh=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aS(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},aS=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uS=function(t,e,n,r){return sf(e,new rf(n,t),r)},z_=function(t,e,n){return sf(t,new nf(e),n)};function sf(t,e,n){const r=t.getPriority().val(),i=Sh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Sh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(ie,(l,a)=>{const u=sf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function lf(t,e){let n=e instanceof V?e:new V(e),r=t,i=W(n);for(;i!==null;){const s=Nr(r.node.children,i)||{children:{},childCount:0};r=new of(i,r,s),n=Y(n),i=W(n)}return r}function Wr(t){return t.node.value}function U_(t,e){t.node.value=e,yu(t)}function W_(t){return t.node.childCount>0}function cS(t){return Wr(t)===void 0&&!W_(t)}function ul(t,e){je(t.node.children,(n,r)=>{e(new of(n,t,r))})}function j_(t,e,n,r){n&&!r&&e(t),ul(t,i=>{j_(i,e,!0,r)}),n&&r&&e(t)}function fS(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function cs(t){return new V(t.parent===null?t.name:cs(t.parent)+"/"+t.name)}function yu(t){t.parent!==null&&dS(t.parent,t.name,t)}function dS(t,e,n){const r=cS(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=/[\[\].#$\/\u0000-\u001F\u007F]/,pS=/[\[\].#$\u0000-\u001F\u007F]/,na=10*1024*1024,B_=function(t){return typeof t=="string"&&t.length!==0&&!hS.test(t)},H_=function(t){return typeof t=="string"&&t.length!==0&&!pS.test(t)},mS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),H_(t)},gS=function(t,e,n,r){r&&e===void 0||af(Lc(t,"value"),e,n)},af=function(t,e,n){const r=n instanceof V?new bE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(r)+" with contents = "+e.toString());if(zg(e))throw new Error(t+"contains "+e.toString()+" "+Sn(r));if(typeof e=="string"&&e.length>na/3&&rl(e)>na)throw new Error(t+"contains a string greater than "+na+" utf8 bytes "+Sn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!B_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Sn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DE(r,o),af(t,l,r),ME(r)}),i&&s)throw new Error(t+' contains ".value" child '+Sn(r)+" in addition to actual children.")}},$_=function(t,e,n,r){if(!(r&&n===void 0)&&!H_(n))throw new Error(Lc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_S=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$_(t,e,n,r)},yS=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!B_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mS(n))throw new Error(Lc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function V_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!a_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function wt(t,e,n){V_(t,n),ES(t,r=>ot(r,e)||ot(e,r))}function ES(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(CS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();On&&Te("event: "+n.toString()),Ur(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="repo_interrupt",kS=25;class IS{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ao(),this.transactionQueueTree_=new of,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TS(t,e,n){if(t.stats_=Wc(t.repoInfo_),t.forceRestClient_||iE())t.server_=new Po(t.repoInfo_,(r,i,s,o)=>{kh(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ih(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{kh(t,r,i,s,o)},r=>{Ih(t,r)},r=>{NS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uE(t.repoInfo_,()=>new lC(t.stats_,t.server_)),t.infoData_=new nC,t.infoSyncTree_=new Ch({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=as(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),cf(t,"connected",!1),t.serverSyncTree_=new Ch({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);wt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xS(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uf(t){return oS({timestamp:xS(t)})}function kh(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Co(n,u=>_e(u));o=JC(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=D_(t.serverSyncTree_,s,a,i)}else if(r){const a=Co(n,u=>_e(u));o=qC(t.serverSyncTree_,s,a)}else{const a=_e(n);o=as(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=fl(t,s)),wt(t.eventQueue_,l,o)}function Ih(t,e){cf(t,"connected",e),e===!1&&RS(t)}function NS(t,e){je(e,(n,r)=>{cf(t,n,r)})}function cf(t,e,n){const r=new V("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=as(t.infoSyncTree_,r,i);wt(t.eventQueue_,r,s)}function G_(t){return t.nextWriteId_++}function PS(t,e,n){const r=tS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());eS(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=as(t.serverSyncTree_,e._path,s);else{const l=Ki(t.serverSyncTree_,e);o=D_(t.serverSyncTree_,e._path,s,l)}return wt(t.eventQueue_,e._path,o),b_(t.serverSyncTree_,e,n,null,!0),s},i=>(cl(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function AS(t,e,n,r,i){cl(t,"set",{path:e.toString(),value:n,priority:r});const s=uf(t),o=_e(n,r),l=Zc(t.serverSyncTree_,e),a=z_(o,l,s),u=G_(t),d=O_(t.serverSyncTree_,e,a,u,!0);V_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(c,g)=>{const _=c==="ok";_||We("set at "+e+" failed: "+c);const y=Nn(t.serverSyncTree_,u,!_);wt(t.eventQueue_,e,y),bS(t,i,c,g)});const f=X_(t,e);fl(t,f),wt(t.eventQueue_,f,[])}function RS(t){cl(t,"onDisconnectEvents");const e=uf(t),n=Ao();hu(t.onDisconnect_,H(),(i,s)=>{const o=uS(i,s,t.serverSyncTree_,e);g_(n,i,o)});let r=[];hu(n,H(),(i,s)=>{r=r.concat(as(t.serverSyncTree_,i,s));const o=X_(t,i);fl(t,o)}),t.onDisconnect_=Ao(),wt(t.eventQueue_,H(),r)}function OS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SS)}function cl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function bS(t,e,n,r){e&&Ur(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Y_(t,e,n){return Zc(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function ff(t,e=t.transactionQueueTree_){if(e||dl(t,e),Wr(e)){const n=K_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&DS(t,cs(e),n)}else W_(e)&&ul(e,n=>{ff(t,n)})}function DS(t,e,n){const r=n.map(u=>u.currentWriteId),i=Y_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Ae(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{cl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let c=0;c<n.length;c++)n[c].status=2,d=d.concat(Nn(t.serverSyncTree_,n[c].currentWriteId)),n[c].onComplete&&f.push(()=>n[c].onComplete(null,!0,n[c].currentOutputSnapshotResolved)),n[c].unwatcher();dl(t,lf(t.transactionQueueTree_,e)),ff(t,t.transactionQueueTree_),wt(t.eventQueue_,e,d);for(let c=0;c<f.length;c++)Ur(f[c])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}fl(t,e)}},o)}function fl(t,e){const n=Q_(t,e),r=cs(n),i=K_(t,n);return MS(t,i,r),r}function MS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let d=!1,f;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,f=a.abortReason,i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=kS)d=!0,f="maxretry",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else{const c=Y_(t,a.path,o);a.currentInputSnapshot=c;const g=e[l].update(c.val());if(g!==void 0){af("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Ft(g,".priority")||(_=_.updatePriority(c.getPriority()));const k=a.currentWriteId,p=uf(t),h=z_(_,c,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=G_(t),o.splice(o.indexOf(k),1),i=i.concat(O_(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,k,!0))}else d=!0,f="nodata",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(c){setTimeout(c,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}dl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ur(r[l]);ff(t,t.transactionQueueTree_)}function Q_(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Wr(r)===void 0;)r=lf(r,n),e=Y(e),n=W(e);return r}function K_(t,e){const n=[];return q_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function q_(t,e,n){const r=Wr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ul(e,i=>{q_(t,i,n)})}function dl(t,e){const n=Wr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,U_(e,n.length>0?n:void 0)}ul(e,r=>{dl(t,r)})}function X_(t,e){const n=cs(Q_(t,e)),r=lf(t.transactionQueueTree_,e);return fS(r,i=>{ra(t,i)}),ra(t,r),j_(r,i=>{ra(t,i)}),n}function ra(t,e){const n=Wr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?U_(e,void 0):n.length=s+1,wt(t.eventQueue_,cs(e),i);for(let o=0;o<r.length;o++)Ur(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function FS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Th=function(t,e){const n=zS(t),r=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},zS=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=LS(t.substring(d,f)));const c=FS(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in c&&(s=c.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class WS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:s_(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=fh(this._queryParams),n=zc(e);return n==="{}"?"default":n}get _queryObject(){return fh(this._queryParams)}isEqual(e){if(e=Fr(e),!(e instanceof df))return!1;const n=this._repo===e._repo,r=a_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OE(this._path)}}class zt extends df{constructor(e,n){super(e,n,new Vc,!1)}get parent(){const e=l_(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=vu(this.ref,e);return new qi(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new qi(i,vu(this.ref,r),ie)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function BS(t,e){return t=Fr(t),t._checkNotDeleted("ref"),e!==void 0?vu(t._root,e):t._root}function vu(t,e){return t=Fr(t),W(t._path)===null?_S("child","path",e,!1):$_("child","path",e,!1),new zt(t._repo,fe(t._path,e))}function xh(t,e){t=Fr(t),yS("set",t._path),gS("set",e,t._path,!1);const n=new nl;return AS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function HS(t){t=Fr(t);const e=new jS(()=>{}),n=new hf(e);return PS(t._repo,t,n).then(r=>new qi(r,new zt(t._repo,t._path),t._queryParams.getIndex()))}class hf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new US("value",this,new qi(e.snapshotNode,new zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WS(this,e,n):null}matches(e){return e instanceof hf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}BC(zt);YC(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="FIREBASE_DATABASE_EMULATOR_HOST",wu={};let VS=!1;function GS(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Mc(s);t.repoInfo_=new qg(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function YS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Th(s,i),l=o.repoInfo,a,u;typeof process<"u"&&Yd&&(u=Yd[$S]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Th(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new yr(yr.OWNER):new oE(t.name,t.options,e);vS("Invalid Firebase Database URL",o),z(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KS(l,t,d,new sE(t,n));return new qS(f,t)}function QS(t,e){const n=wu[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),OS(t),delete n[t.key]}function KS(t,e,n,r){let i=wu[e.name];i||(i={},wu[e.name]=i);let s=i[t.toURLString()];return s&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new IS(t,VS,n,r),i[t.toURLString()]=s,s}class qS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,kg("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function XS(t=Rw(),e){const n=Tw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=h0("database");r&&ZS(n,...r)}return n}function ZS(t,e,n,r={}){t=Fr(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&So(r,s.repoInfo_.emulatorOptions))return;bt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new yr(yr.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:m0(r.mockUserToken,t.app.options.projectId);o=new yr(l)}Mc(e)&&(p0(e),kg("Database",!0)),GS(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){$w(Aw),Io(new ji("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return YS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gr(Qd,Kd,t),gr(Qd,Kd,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JS();const ek={apiKey:"AIzaSyBh96beHQhEEi18e2KhSfYKQYKQjReb4xE",authDomain:"livesite-9cddd.firebaseapp.com",databaseURL:"https://livesite-9cddd-default-rtdb.firebaseio.com",projectId:"livesite-9cddd",storageBucket:"livesite-9cddd.firebasestorage.app",messagingSenderId:"566052465081",appId:"1:566052465081:web:e0d6f4f0d002964bf46e68",measurementId:"G-BJ3ZL18V2V"},tk=Og(ek),nk=XS(tk);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function rk(t,e,n){return(e=sk(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nh(Object(n),!0).forEach(function(r){rk(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ik(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sk(t){var e=ik(t,"string");return typeof e=="symbol"?e:e+""}const Ph=()=>{};let pf={},Z_={},J_=null,ey={mark:Ph,measure:Ph};try{typeof window<"u"&&(pf=window),typeof document<"u"&&(Z_=document),typeof MutationObserver<"u"&&(J_=MutationObserver),typeof performance<"u"&&(ey=performance)}catch{}const{userAgent:Ah=""}=pf.navigator||{},dn=pf,Z=Z_,Rh=J_,Ds=ey;dn.document;const Ut=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",ty=~Ah.indexOf("MSIE")||~Ah.indexOf("Trident/");var ok=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,lk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ny={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ak={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ry=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ne="classic",hl="duotone",uk="sharp",ck="sharp-duotone",iy=[Ne,hl,uk,ck],fk={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},dk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},hk=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),pk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},mk=["fak","fa-kit","fakd","fa-kit-duotone"],Oh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gk=["kit"],_k={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yk=["fak","fakd"],vk={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},bh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ms={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wk=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ek=["fak","fa-kit","fakd","fa-kit-duotone"],Ck={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Sk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kk={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Eu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ik=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Cu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...wk,...Ik],Tk=["solid","regular","light","thin","duotone","brands"],sy=[1,2,3,4,5,6,7,8,9,10],xk=sy.concat([11,12,13,14,15,16,17,18,19,20]),Nk=[...Object.keys(kk),...Tk,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ms.GROUP,Ms.SWAP_OPACITY,Ms.PRIMARY,Ms.SECONDARY].concat(sy.map(t=>"".concat(t,"x"))).concat(xk.map(t=>"w-".concat(t))),Pk={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Dt="___FONT_AWESOME___",Su=16,oy="fa",ly="svg-inline--fa",jn="data-fa-i2svg",ku="data-fa-pseudo-element",Ak="data-fa-pseudo-element-pending",mf="data-prefix",gf="data-icon",Dh="fontawesome-i2svg",Rk="async",Ok=["HTML","HEAD","STYLE","SCRIPT"],ay=(()=>{try{return!0}catch{return!1}})();function fs(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ne]}})}const uy=w({},ny);uy[Ne]=w(w(w(w({},{"fa-duotone":"duotone"}),ny[Ne]),Oh.kit),Oh["kit-duotone"]);const bk=fs(uy),Iu=w({},pk);Iu[Ne]=w(w(w(w({},{duotone:"fad"}),Iu[Ne]),bh.kit),bh["kit-duotone"]);const Mh=fs(Iu),Tu=w({},Eu);Tu[Ne]=w(w({},Tu[Ne]),vk.kit);const _f=fs(Tu),xu=w({},Sk);xu[Ne]=w(w({},xu[Ne]),_k.kit);fs(xu);const Dk=ok,cy="fa-layers-text",Mk=lk,Lk=w({},fk);fs(Lk);const Fk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ia=ak,zk=[...gk,...Nk],wi=dn.FontAwesomeConfig||{};function Uk(t){var e=Z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Wk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Z&&typeof Z.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=Wk(Uk(n));i!=null&&(wi[r]=i)});const fy={styleDefault:"solid",familyDefault:Ne,cssPrefix:oy,replacementClass:ly,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wi.familyPrefix&&(wi.cssPrefix=wi.familyPrefix);const Or=w(w({},fy),wi);Or.autoReplaceSvg||(Or.observeMutations=!1);const P={};Object.keys(fy).forEach(t=>{Object.defineProperty(P,t,{enumerable:!0,set:function(e){Or[t]=e,Ei.forEach(n=>n(P))},get:function(){return Or[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Or.cssPrefix=t,Ei.forEach(e=>e(P))},get:function(){return Or.cssPrefix}});dn.FontAwesomeConfig=P;const Ei=[];function jk(t){return Ei.push(t),()=>{Ei.splice(Ei.indexOf(t),1)}}const jt=Su,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bk(t){if(!t||!Ut)return;const e=Z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Z.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Z.head.insertBefore(e,r),t}const Hk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xi(){let t=12,e="";for(;t-- >0;)e+=Hk[Math.random()*62|0];return e}function jr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yf(t){return t.classList?jr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function dy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $k(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(dy(t[n]),'" '),"").trim()}function pl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function vf(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function Vk(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}function Gk(t){let{transform:e,width:n=Su,height:r=Su,startCentered:i=!1}=t,s="";return i&&ty?s+="translate(".concat(e.x/jt-n/2,"em, ").concat(e.y/jt-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/jt,"em), calc(-50% + ").concat(e.y/jt,"em)) "):s+="translate(".concat(e.x/jt,"em, ").concat(e.y/jt,"em) "),s+="scale(".concat(e.size/jt*(e.flipX?-1:1),", ").concat(e.size/jt*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Yk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function hy(){const t=oy,e=ly,n=P.cssPrefix,r=P.replacementClass;let i=Yk;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Lh=!1;function sa(){P.autoAddCss&&!Lh&&(Bk(hy()),Lh=!0)}var Qk={mixout(){return{dom:{css:hy,insertCss:sa}}},hooks(){return{beforeDOMElementCreation(){sa()},beforeI2svg(){sa()}}}};const Mt=dn||{};Mt[Dt]||(Mt[Dt]={});Mt[Dt].styles||(Mt[Dt].styles={});Mt[Dt].hooks||(Mt[Dt].hooks={});Mt[Dt].shims||(Mt[Dt].shims=[]);var _t=Mt[Dt];const py=[],my=function(){Z.removeEventListener("DOMContentLoaded",my),zo=1,py.map(t=>t())};let zo=!1;Ut&&(zo=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),zo||Z.addEventListener("DOMContentLoaded",my));function Kk(t){Ut&&(zo?setTimeout(t,0):py.push(t))}function ds(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?dy(t):"<".concat(e," ").concat($k(n),">").concat(r.map(ds).join(""),"</").concat(e,">")}function Fh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qk=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},oa=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=i!==void 0?qk(n,i):n,a,u,d;for(r===void 0?(a=1,d=e[s[0]]):(a=0,d=r);a<o;a++)u=s[a],d=l(d,e[u],u,e);return d};function Xk(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Nu(t){const e=Xk(t);return e.length===1?e[0].toString(16):null}function Zk(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function zh(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Pu(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=zh(e);typeof _t.hooks.addPack=="function"&&!r?_t.hooks.addPack(t,zh(e)):_t.styles[t]=w(w({},_t.styles[t]||{}),i),t==="fas"&&Pu("fa",e)}const{styles:Zi,shims:Jk}=_t,gy=Object.keys(_f),eI=gy.reduce((t,e)=>(t[e]=Object.keys(_f[e]),t),{});let wf=null,_y={},yy={},vy={},wy={},Ey={};function tI(t){return~zk.indexOf(t)}function nI(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!tI(i)?i:null}const Cy=()=>{const t=r=>oa(Zi,(i,s,o)=>(i[o]=oa(s,r,{}),i),{});_y=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),yy=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),Ey=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in Zi||P.autoFetchSvg,n=oa(Jk,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});vy=n.names,wy=n.unicodes,wf=ml(P.styleDefault,{family:P.familyDefault})};jk(t=>{wf=ml(t.styleDefault,{family:P.familyDefault})});Cy();function Ef(t,e){return(_y[t]||{})[e]}function rI(t,e){return(yy[t]||{})[e]}function Pn(t,e){return(Ey[t]||{})[e]}function Sy(t){return vy[t]||{prefix:null,iconName:null}}function iI(t){const e=wy[t],n=Ef("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function hn(){return wf}const ky=()=>({prefix:null,iconName:null,rest:[]});function sI(t){let e=Ne;const n=gy.reduce((r,i)=>(r[i]="".concat(P.cssPrefix,"-").concat(i),r),{});return iy.forEach(r=>{(t.includes(n[r])||t.some(i=>eI[r].includes(i)))&&(e=r)}),e}function ml(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ne}=e,r=bk[n][t];if(n===hl&&!t)return"fad";const i=Mh[n][t]||Mh[n][r],s=t in _t.styles?t:null;return i||s||null}function oI(t){let e=[],n=null;return t.forEach(r=>{const i=nI(P.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function Uh(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function gl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Cu.concat(Ek),s=Uh(t.filter(f=>i.includes(f))),o=Uh(t.filter(f=>!Cu.includes(f))),l=s.filter(f=>(r=f,!ry.includes(f))),[a=null]=l,u=sI(s),d=w(w({},oI(o)),{},{prefix:ml(a,{family:u})});return w(w(w({},d),cI({values:t,family:u,styles:Zi,config:P,canonical:d,givenPrefix:r})),lI(n,r,d))}function lI(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?Sy(i):{},o=Pn(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!Zi.far&&Zi.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const aI=iy.filter(t=>t!==Ne||t!==hl),uI=Object.keys(Eu).filter(t=>t!==Ne).map(t=>Object.keys(Eu[t])).flat();function cI(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,l=n===hl,a=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(a||u||d)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&aI.includes(n)&&(Object.keys(s).find(c=>uI.includes(c))||o.autoFetchSvg)){const c=hk.get(n).defaultShortPrefixId;r.prefix=c,r.iconName=Pn(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=hn()||"fas"),r}class fI{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=w(w({},this.definitions[s]||{}),i[s]),Pu(s,i[s]);const o=_f[Ne][s];o&&Pu(o,i[s]),Cy()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],a=l[2];e[s]||(e[s]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(e[s][u]=l)}),e[s][o]=l}),e}}let Wh=[],ar={};const wr={},dI=Object.keys(wr);function hI(t,e){let{mixoutsTo:n}=e;return Wh=t,ar={},Object.keys(wr).forEach(r=>{dI.indexOf(r)===-1&&delete wr[r]}),Wh.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ar[o]||(ar[o]=[]),ar[o].push(s[o])})}r.provides&&r.provides(wr)}),n}function Au(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ar[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Bn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ar[t]||[]).forEach(s=>{s.apply(null,n)})}function pn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wr[t]?wr[t].apply(null,e):void 0}function Ru(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||hn();if(e)return e=Pn(n,e)||e,Fh(Iy.definitions,n,e)||Fh(_t.styles,n,e)}const Iy=new fI,pI=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,Bn("noAuto")},mI={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ut?(Bn("beforeI2svg",t),pn("pseudoElements2svg",t),pn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Kk(()=>{_I({autoReplaceSvgRoot:e}),Bn("watch",t)})}},gI={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ml(t[0]);return{prefix:n,iconName:Pn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Dk))){const e=gl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||hn(),iconName:Pn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=hn();return{prefix:e,iconName:Pn(e,t)||t}}}},Qe={noAuto:pI,config:P,dom:mI,parse:gI,library:Iy,findIconDefinition:Ru,toHtml:ds},_I=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Z}=t;(Object.keys(_t.styles).length>0||P.autoFetchSvg)&&Ut&&P.autoReplaceSvg&&Qe.dom.i2svg({node:e})};function _l(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ds(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Ut)return;const n=Z.createElement("div");return n.innerHTML=t.html,n.children}}),t}function yI(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(vf(o)&&n.found&&!r.found){const{width:l,height:a}=n,u={x:l/a/2,y:.5};i.style=pl(w(w({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function vI(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},i),{},{id:o}),children:r}]}]}function Cf(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:a,titleId:u,extra:d,watchable:f=!1}=t,{width:c,height:g}=n.found?n:e,_=yk.includes(r),y=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(S=>d.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(d.classes).join(" ");let k={children:[],attributes:w(w({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(g)})};const p=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(c/g*16*.0625,"em")}:{};f&&(k.attributes[jn]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Xi())},children:[l]}),delete k.attributes.title);const h=w(w({},k),{},{prefix:r,iconName:i,main:e,mask:n,maskId:a,transform:s,symbol:o,styles:w(w({},p),d.styles)}),{children:m,attributes:v}=n.found&&e.found?pn("generateAbstractMask",h)||{children:[],attributes:{}}:pn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=v,o?vI(h):yI(h)}function jh(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,a=w(w(w({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(a[jn]="");const u=w({},o.styles);vf(i)&&(u.transform=Gk({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=pl(u);d.length>0&&(a.style=d);const f=[];return f.push({tag:"span",attributes:a,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function wI(t){const{content:e,title:n,extra:r}=t,i=w(w(w({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=pl(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:la}=_t;function Ou(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ia.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ia.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ia.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const EI={found:!1,width:512,height:512};function CI(t,e){!ay&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bu(t,e){let n=e;return e==="fa"&&P.styleDefault!==null&&(e=hn()),new Promise((r,i)=>{if(n==="fa"){const s=Sy(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&la[e]&&la[e][t]){const s=la[e][t];return r(Ou(s))}CI(t,e),r(w(w({},EI),{},{icon:P.showMissingIcons&&t?pn("missingIconAbstract")||{}:{}}))})}const Bh=()=>{},Du=P.measurePerformance&&Ds&&Ds.mark&&Ds.measure?Ds:{mark:Bh,measure:Bh},si='FA "6.7.2"',SI=t=>(Du.mark("".concat(si," ").concat(t," begins")),()=>Ty(t)),Ty=t=>{Du.mark("".concat(si," ").concat(t," ends")),Du.measure("".concat(si," ").concat(t),"".concat(si," ").concat(t," begins"),"".concat(si," ").concat(t," ends"))};var Sf={begin:SI,end:Ty};const Qs=()=>{};function Hh(t){return typeof(t.getAttribute?t.getAttribute(jn):null)=="string"}function kI(t){const e=t.getAttribute?t.getAttribute(mf):null,n=t.getAttribute?t.getAttribute(gf):null;return e&&n}function II(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function TI(){return P.autoReplaceSvg===!0?Ks.replace:Ks[P.autoReplaceSvg]||Ks.replace}function xI(t){return Z.createElementNS("http://www.w3.org/2000/svg",t)}function NI(t){return Z.createElement(t)}function xy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?xI:NI}=e;if(typeof t=="string")return Z.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(xy(s,{ceFn:n}))}),r}function PI(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ks={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(xy(n),e)}),e.getAttribute(jn)===null&&P.keepOriginalSource){let n=Z.createComment(PI(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~yf(e).indexOf(P.replacementClass))return Ks.replace(t);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===P.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ds(s)).join(`
`);e.setAttribute(jn,""),e.innerHTML=i}};function $h(t){t()}function Ny(t,e){const n=typeof e=="function"?e:Qs;if(t.length===0)n();else{let r=$h;P.mutateApproach===Rk&&(r=dn.requestAnimationFrame||$h),r(()=>{const i=TI(),s=Sf.begin("mutate");t.map(i),s(),n()})}}let kf=!1;function Py(){kf=!0}function Mu(){kf=!1}let Uo=null;function Vh(t){if(!Rh||!P.observeMutations)return;const{treeCallback:e=Qs,nodeCallback:n=Qs,pseudoElementsCallback:r=Qs,observeMutationsRoot:i=Z}=t;Uo=new Rh(s=>{if(kf)return;const o=hn();jr(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Hh(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Hh(l.target)&&~Fk.indexOf(l.attributeName))if(l.attributeName==="class"&&kI(l.target)){const{prefix:a,iconName:u}=gl(yf(l.target));l.target.setAttribute(mf,a||o),u&&l.target.setAttribute(gf,u)}else II(l.target)&&n(l.target)})}),Ut&&Uo.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function AI(){Uo&&Uo.disconnect()}function RI(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function OI(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=gl(yf(t));return i.prefix||(i.prefix=hn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=rI(i.prefix,t.innerText)||Ef(i.prefix,Nu(t.innerText))),!i.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function bI(t){const e=jr(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Xi()):(e["aria-hidden"]="true",e.focusable="false")),e}function DI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=OI(t),s=bI(t),o=Au("parseNodeAttributes",{},t);let l=e.styleParser?RI(t):[];return w({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}const{styles:MI}=_t;function Ay(t){const e=P.autoReplaceSvg==="nest"?Gh(t,{styleParser:!1}):Gh(t);return~e.extra.classes.indexOf(cy)?pn("generateLayersText",t,e):pn("generateSvgReplacementMutation",t,e)}function LI(){return[...mk,...Cu]}function Yh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ut)return Promise.resolve();const n=Z.documentElement.classList,r=d=>n.add("".concat(Dh,"-").concat(d)),i=d=>n.remove("".concat(Dh,"-").concat(d)),s=P.autoFetchSvg?LI():ry.concat(Object.keys(MI));s.includes("fa")||s.push("fa");const o=[".".concat(cy,":not([").concat(jn,"])")].concat(s.map(d=>".".concat(d,":not([").concat(jn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=jr(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Sf.begin("onTree"),u=l.reduce((d,f)=>{try{const c=Ay(f);c&&d.push(c)}catch(c){ay||c.name==="MissingIcon"&&console.error(c)}return d},[]);return new Promise((d,f)=>{Promise.all(u).then(c=>{Ny(c,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),a(),d()})}).catch(c=>{a(),f(c)})})}function FI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ay(t).then(n=>{n&&Ny([n],e)})}function zI(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ru(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ru(i||{})),t(r,w(w({},n),{},{mask:i}))}}const UI=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:a=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:f,iconName:c,icon:g}=t;return _l(w({type:"icon"},t),()=>(Bn("beforeDOMElementCreation",{iconDefinition:t,params:e}),P.autoA11y&&(o?u["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Xi()):(u["aria-hidden"]="true",u.focusable="false")),Cf({icons:{main:Ou(g),mask:i?Ou(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:c,transform:w(w({},gt),n),symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:u,styles:d,classes:a}})))};var WI={mixout(){return{icon:zI(UI)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Yh,t.nodeCallback=FI,t}}},provides(t){t.i2svg=function(e){const{node:n=Z,callback:r=()=>{}}=e;return Yh(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:a,mask:u,maskId:d,extra:f}=n;return new Promise((c,g)=>{Promise.all([bu(r,o),u.iconName?bu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[y,k]=_;c([e,Cf({icons:{main:y,mask:k},prefix:o,iconName:r,transform:l,symbol:a,maskId:d,title:i,titleId:s,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=pl(o);l.length>0&&(r.style=l);let a;return vf(s)&&(a=pn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},jI={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return _l({type:"layer"},()=>{Bn("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},BI={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return _l({type:"counter",content:t},()=>(Bn("beforeDOMElementCreation",{content:t,params:e}),wI({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},HI={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return _l({type:"text",content:t},()=>(Bn("beforeDOMElementCreation",{content:t,params:e}),jh({content:t,transform:w(w({},gt),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(ty){const a=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/a,l=u.height/a}return P.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,jh({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const $I=new RegExp('"',"ug"),Qh=[1105920,1112319],Kh=w(w(w(w({},{FontAwesome:{normal:"fas",400:"fas"}}),dk),Pk),Ck),Lu=Object.keys(Kh).reduce((t,e)=>(t[e.toLowerCase()]=Kh[e],t),{}),VI=Object.keys(Lu).reduce((t,e)=>{const n=Lu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function GI(t){const e=t.replace($I,""),n=Zk(e,0),r=n>=Qh[0]&&n<=Qh[1],i=e.length===2?e[0]===e[1]:!1;return{value:Nu(i?e[0]:e),isSecondary:r||i}}function YI(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Lu[n]||{})[i]||VI[n]}function qh(t,e){const n="".concat(Ak).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=jr(t.children).filter(c=>c.getAttribute(ku)===e)[0],l=dn.getComputedStyle(t,e),a=l.getPropertyValue("font-family"),u=a.match(Mk),d=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const c=l.getPropertyValue("content");let g=YI(a,d);const{value:_,isSecondary:y}=GI(c),k=u[0].startsWith("FontAwesome");let p=Ef(g,_),h=p;if(k){const m=iI(_);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!y&&(!o||o.getAttribute(mf)!==g||o.getAttribute(gf)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const m=DI(),{extra:v}=m;v.attributes[ku]=e,bu(p,g).then(S=>{const N=Cf(w(w({},m),{},{icons:{main:S,mask:ky()},prefix:g,iconName:h,extra:v,watchable:!0})),x=Z.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=N.map(A=>ds(A)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function QI(t){return Promise.all([qh(t,"::before"),qh(t,"::after")])}function KI(t){return t.parentNode!==document.head&&!~Ok.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ku)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xh(t){if(Ut)return new Promise((e,n)=>{const r=jr(t.querySelectorAll("*")).filter(KI).map(QI),i=Sf.begin("searchPseudoElements");Py(),Promise.all(r).then(()=>{i(),Mu(),e()}).catch(()=>{i(),Mu(),n()})})}var qI={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Xh,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Z}=e;P.searchPseudoElements&&Xh(n)}}};let Zh=!1;var XI={mixout(){return{dom:{unwatch(){Py(),Zh=!0}}}},hooks(){return{bootstrap(){Vh(Au("mutationObserverCallbacks",{}))},noAuto(){AI()},watch(t){const{observeMutationsRoot:e}=t;Zh?Mu():Vh(Au("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Jh=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ZI={mixout(){return{parse:{transform:t=>Jh(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Jh(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(a," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},c={outer:o,inner:d,path:f};return{tag:"g",attributes:w({},c.outer),children:[{tag:"g",attributes:w({},c.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:w(w({},n.icon.attributes),c.path)}]}]}}}};const aa={x:0,y:0,width:"100%",height:"100%"};function ep(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function JI(t){return t.tag==="g"?t.children:[t]}var eT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?gl(n.split(" ").map(i=>i.trim())):ky();return r.prefix||(r.prefix=hn()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:a,icon:u}=i,{width:d,icon:f}=s,c=Vk({transform:l,containerWidth:d,iconWidth:a}),g={tag:"rect",attributes:w(w({},aa),{},{fill:"white"})},_=u.children?{children:u.children.map(ep)}:{},y={tag:"g",attributes:w({},c.inner),children:[ep(w({tag:u.tag,attributes:w(w({},u.attributes),c.path)},_))]},k={tag:"g",attributes:w({},c.outer),children:[y]},p="mask-".concat(o||Xi()),h="clip-".concat(o||Xi()),m={tag:"mask",attributes:w(w({},aa),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,k]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:JI(f)},m]};return n.push(v,{tag:"rect",attributes:w({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},aa)}),{children:n,attributes:r}}}},tT={provides(t){let e=!1;dn.matchMedia&&(e=dn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:w(w({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=w(w({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:w(w({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:w(w({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:w(w({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:w(w({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:w(w({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:w(w({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:w(w({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},rT=[Qk,WI,jI,BI,HI,qI,XI,ZI,eT,tT,nT];hI(rT,{mixoutsTo:Qe});Qe.noAuto;Qe.config;Qe.library;Qe.dom;const Fu=Qe.parse;Qe.findIconDefinition;Qe.toHtml;const iT=Qe.icon;Qe.layer;Qe.text;Qe.counter;const sT="/assets/ttpfp-eHgm33lx.jpeg",oT="/assets/ttpfp1-eoIsAf5R.jpeg",lT="/assets/insta-gnW_-jGG.png",aT="/assets/discord-THWl0QPN.png",uT="/assets/forest-IWEOuwBe.jpg",cT="/assets/hearteater--7J6nGtb.mp3",fT="/assets/bannerChrome-Z9Hjq12v.gif";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const tp={prefix:"fas",iconName:"forward-step",icon:[320,512,["step-forward"],"f051","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"]},dT={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},np={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};var Ry={exports:{}},hT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pT=hT,mT=pT;function Oy(){}function by(){}by.resetWarningCache=Oy;var gT=function(){function t(r,i,s,o,l,a){if(a!==mT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:by,resetWarningCache:Oy};return n.PropTypes=n,n};Ry.exports=gT();var _T=Ry.exports;const F=op(_T);function rp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rp(Object(n),!0).forEach(function(r){ur(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wo(t){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wo(t)}function ur(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vT(t,e){if(t==null)return{};var n=yT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zu(t){return wT(t)||ET(t)||CT(t)||ST()}function wT(t){if(Array.isArray(t))return Uu(t)}function ET(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CT(t,e){if(t){if(typeof t=="string")return Uu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(t,e)}}function Uu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ST(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kT(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,a=t.spin,u=t.spinPulse,d=t.spinReverse,f=t.pulse,c=t.fixedWidth,g=t.inverse,_=t.border,y=t.listItem,k=t.flip,p=t.size,h=t.rotation,m=t.pull,v=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":c,"fa-inverse":g,"fa-border":_,"fa-li":y,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ur(e,"fa-".concat(p),typeof p<"u"&&p!==null),ur(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ur(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ur(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(v).map(function(S){return v[S]?S:null}).filter(function(S){return S})}function IT(t){return t=t-0,t===t}function Dy(t){return IT(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var TT=["style"];function xT(t){return t.charAt(0).toUpperCase()+t.slice(1)}function NT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Dy(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[xT(i)]=s:e[i]=s,e},{})}function My(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(a){return My(t,a)}),i=Object.keys(e.attributes||{}).reduce(function(a,u){var d=e.attributes[u];switch(u){case"class":a.attrs.className=d,delete e.attributes.class;break;case"style":a.attrs.style=NT(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?a.attrs[u.toLowerCase()]=d:a.attrs[Dy(u)]=d}return a},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=vT(n,TT);return i.attrs.style=pt(pt({},i.attrs.style),o),t.apply(void 0,[e.tag,pt(pt({},i.attrs),l)].concat(zu(r)))}var Ly=!1;try{Ly=!0}catch{}function PT(){if(!Ly&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ip(t){if(t&&Wo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fu.icon)return Fu.icon(t);if(t===null)return null;if(t&&Wo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ua(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ur({},t,e):{}}var sp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ci=R.forwardRef(function(t,e){var n=pt(pt({},sp),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,a=n.titleId,u=n.maskId,d=ip(r),f=ua("classes",[].concat(zu(kT(n)),zu((o||"").split(" ")))),c=ua("transform",typeof n.transform=="string"?Fu.transform(n.transform):n.transform),g=ua("mask",ip(i)),_=iT(d,pt(pt(pt(pt({},f),c),g),{},{symbol:s,title:l,titleId:a,maskId:u}));if(!_)return PT("Could not find icon",d),null;var y=_.abstract,k={ref:e};return Object.keys(n).forEach(function(p){sp.hasOwnProperty(p)||(k[p]=n[p])}),AT(y[0],k)});Ci.displayName="FontAwesomeIcon";Ci.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};var AT=My.bind(null,R.createElement);function RT(){const[t,e]=ke.useState(0),n=93,[r,i]=ke.useState(!1),[s,o]=ke.useState(!0),[l,a]=ke.useState(!1),[u,d]=ke.useState(""),[f,c]=ke.useState(!1),[g]=ke.useState("|"),[_,y]=ke.useState(0),[k,p]=ke.useState(!0),[h,m]=ke.useState(np),[v,S]=ke.useState(0);ke.useEffect(()=>{const U=setInterval(()=>{k?_<g.length?(d(O=>O+g.charAt(_)),y(O=>O+1)):p(!1):_>=0?(d(O=>O.slice(0,_)),y(O=>O-1)):p(!0)},200);return()=>clearInterval(U)},[g,_,k]),ke.useEffect(()=>{const U=BS(nk,"pageViews");HS(U).then(O=>{if(O.exists()){const le=O.val();S(le+1),xh(U,le+1)}else xh(U,1),S(1)})},[]);function N(U){const O=Math.floor(U/60),le=Math.round(U%60);return`${O}:${le<10?"0":""}${le}`}ke.useEffect(()=>{const U=document.getElementById("audio");r&&l&&i(!0);const O=setInterval(()=>{const le=Math.round(U.currentTime);e(le),le>=n&&(U.currentTime=0,e(0))},1e3);return()=>{clearInterval(O)}},[r,l,n]);const x=()=>{const U=document.getElementById("audio");r?(U.pause(),m(np)):(U.play(),m(dT)),i(!r)},A=()=>{o(!1),a(!0),c(!0)};return R.createElement("div",{className:"app-container"},s&&R.createElement("div",{className:"overlay",onClick:A},R.createElement("p1",{className:"click"},"Click Anywhere (early development)")),R.createElement("div",{className:"alles"},R.createElement("div",{className:`main-container ${f?"entered":""}`},R.createElement("div",{className:"background"},R.createElement("img",{src:uT,alt:""})),R.createElement("div",{className:"upper-container"},R.createElement("img",{src:fT,alt:"banner",className:"banner"}),R.createElement("div",{className:"wrapc"},R.createElement("div",{className:"div1",id:"break"}),R.createElement("img",{src:sT,className:"pfp",alt:"Profile Picture"})),R.createElement("div",{className:"viewcounter"},R.createElement("svg",{className:"eye",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},R.createElement("path",{d:"M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"})),R.createElement("span",null,v)),R.createElement("div",{className:"info"},R.createElement("h1",{className:"name"},"sakuii"),R.createElement("h1",{className:"bio"},"professional trader/dev (und valorant spieler)",u)," "),R.createElement("div",{className:"links"},R.createElement("a",{href:"https://www.instagram.com/maxim._zzz/",target:"_blank",rel:"noopener noreferrer"},R.createElement("img",{src:lT,className:"link5",alt:"Instagram"})),R.createElement("a",{href:"https://discord.com/users/1079862959360184390",target:"_blank",rel:"noopener noreferrer"},R.createElement("img",{src:aT,className:"link5",alt:"Discord"})))),R.createElement("div",{className:"middle-container"},R.createElement("div",{className:"dcContainer"},R.createElement("img",{src:oT,alt:"pfp"}),R.createElement("h2",{className:"ttName"},"@maxim.zy"),R.createElement("a",{href:"https://www.tiktok.com/@maxim.zy?_t=ZN-8vpMCNTw7zK&_r=1",className:"extLink"},"Open in TikTok"))),R.createElement("div",{className:"lower-container"},R.createElement("div",{className:"song"},R.createElement("a",{href:"https://soundcloud.com/trapdailysounds/glokk40spaz-sg-lul-ki-stop-playin-prod-by-khroam",target:"_blank",rel:"noopener noreferrer"}),R.createElement("p1",{className:"songtitle"},"hearteater"),R.createElement("div",{className:"lied"},R.createElement("div",{className:"songinfo"},R.createElement("p1",{className:"album",href:!0})),R.createElement("div",{className:"time-label"},N(t)),R.createElement("div",{className:"timeline"},R.createElement("div",{className:"ball",style:{left:`${t/n*100}%`}}),R.createElement("div",{className:"indicator",style:{width:`${t/n*100}%`}}),R.createElement("div",{className:"staticStripe"})),R.createElement("div",{className:"time-label"},N(n)),R.createElement("div",{className:"song-btn"},R.createElement("button",{className:"reverse-btn"},R.createElement(Ci,{icon:tp})),R.createElement("button",{onClick:x,className:"play-pause-btn",id:"playPauseBtn"},R.createElement(Ci,{icon:h,style:{color:"#ffffff"}})),R.createElement("button",{className:"forward-btn"},R.createElement(Ci,{icon:tp})))),R.createElement("audio",{id:"audio",src:cT}))))))}ca.createRoot(document.getElementById("root")).render(R.createElement(R.StrictMode,null,R.createElement(RT,null)));
