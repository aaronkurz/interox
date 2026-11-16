var Kp=Object.create;var bs=Object.defineProperty;var Yp=Object.getOwnPropertyDescriptor;var Gp=Object.getOwnPropertyNames;var Xp=Object.getPrototypeOf,qp=Object.prototype.hasOwnProperty;var St=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Zp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Gp(t))!qp.call(e,o)&&o!==n&&bs(e,o,{get:()=>t[o],enumerable:!(r=Yp(t,o))||r.enumerable});return e};var F=(e,t,n)=>(n=e!=null?Kp(Xp(e)):{},Zp(t||!e||!e.__esModule?bs(n,"default",{value:e,enumerable:!0}):n,e));var Ps=St($=>{"use strict";var ar=Symbol.for("react.element"),Jp=Symbol.for("react.portal"),ef=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),of=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),ys=Symbol.iterator;function cf(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,Ns={};function Rn(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||ks}Rn.prototype.isReactComponent={};Rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=Rn.prototype;function Di(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||ks}var Li=Di.prototype=new Cs;Li.constructor=Di;Ss(Li,Rn.prototype);Li.isPureReactComponent=!0;var xs=Array.isArray,Es=Object.prototype.hasOwnProperty,Mi={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Es.call(t,r)&&!_s.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ar,type:e,key:i,ref:l,props:o,_owner:Mi.current}}function df(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function pf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ws=/\/+/g;function Ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pf(""+e.key):t.toString(36)}function eo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ar:case Jp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ti(l,0):r,xs(o)?(n="",e!=null&&(n=e.replace(ws,"$&/")+"/"),eo(o,t,n,"",function(u){return u})):o!=null&&(Ai(o)&&(o=df(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ws,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",xs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ti(i,a);l+=eo(i,t,n,s,o)}else if(s=cf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ti(i,a++),l+=eo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return eo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ff(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},to={transition:null},mf={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:to,ReactCurrentOwner:Mi};function Rs(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!Ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Rn;$.Fragment=ef;$.Profiler=nf;$.PureComponent=Di;$.StrictMode=tf;$.Suspense=af;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf;$.act=Rs;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Mi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Es.call(t,s)&&!_s.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ar,type:e.type,key:o,ref:i,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rf,_context:e},e.Consumer=e};$.createElement=zs;$.createFactory=function(e){var t=zs.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:lf,render:e}};$.isValidElement=Ai;$.lazy=function(e){return{$$typeof:uf,_payload:{_status:-1,_result:e},_init:ff}};$.memo=function(e,t){return{$$typeof:sf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=to.transition;to.transition={};try{e()}finally{to.transition=t}};$.unstable_act=Rs;$.useCallback=function(e,t){return Ce.current.useCallback(e,t)};$.useContext=function(e){return Ce.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ce.current.useEffect(e,t)};$.useId=function(){return Ce.current.useId()};$.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ce.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};$.useRef=function(e){return Ce.current.useRef(e)};$.useState=function(e){return Ce.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ce.current.useTransition()};$.version="18.3.1"});var Fe=St((Hh,Ts)=>{"use strict";Ts.exports=Ps()});var js=St(Q=>{"use strict";function $i(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<no(o,t))e[r]=t,e[n]=o,n=r;else break e}}function nt(e){return e.length===0?null:e[0]}function oo(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,a=e[l],s=l+1,u=e[s];if(0>no(a,n))s<o&&0>no(u,a)?(e[r]=u,e[s]=n,r=s):(e[r]=a,e[l]=n,r=l);else if(s<o&&0>no(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function no(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ds=performance,Q.unstable_now=function(){return Ds.now()}):(Oi=Date,Ls=Oi.now(),Q.unstable_now=function(){return Oi.now()-Ls});var Ds,Oi,Ls,mt=[],Ut=[],hf=1,Qe=null,be=3,io=!1,dn=!1,ur=!1,Os=typeof setTimeout=="function"?setTimeout:null,Is=typeof clearTimeout=="function"?clearTimeout:null,Ms=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ui(e){for(var t=nt(Ut);t!==null;){if(t.callback===null)oo(Ut);else if(t.startTime<=e)oo(Ut),t.sortIndex=t.expirationTime,$i(mt,t);else break;t=nt(Ut)}}function ji(e){if(ur=!1,Ui(e),!dn)if(nt(mt)!==null)dn=!0,Hi(Bi);else{var t=nt(Ut);t!==null&&Vi(ji,t.startTime-e)}}function Bi(e,t){dn=!1,ur&&(ur=!1,Is(cr),cr=-1),io=!0;var n=be;try{for(Ui(t),Qe=nt(mt);Qe!==null&&(!(Qe.expirationTime>t)||e&&!Us());){var r=Qe.callback;if(typeof r=="function"){Qe.callback=null,be=Qe.priorityLevel;var o=r(Qe.expirationTime<=t);t=Q.unstable_now(),typeof o=="function"?Qe.callback=o:Qe===nt(mt)&&oo(mt),Ui(t)}else oo(mt);Qe=nt(mt)}if(Qe!==null)var i=!0;else{var l=nt(Ut);l!==null&&Vi(ji,l.startTime-t),i=!1}return i}finally{Qe=null,be=n,io=!1}}var lo=!1,ro=null,cr=-1,Fs=5,$s=-1;function Us(){return!(Q.unstable_now()-$s<Fs)}function Ii(){if(ro!==null){var e=Q.unstable_now();$s=e;var t=!0;try{t=ro(!0,e)}finally{t?sr():(lo=!1,ro=null)}}else lo=!1}var sr;typeof Ms=="function"?sr=function(){Ms(Ii)}:typeof MessageChannel<"u"?(Fi=new MessageChannel,As=Fi.port2,Fi.port1.onmessage=Ii,sr=function(){As.postMessage(null)}):sr=function(){Os(Ii,0)};var Fi,As;function Hi(e){ro=e,lo||(lo=!0,sr())}function Vi(e,t){cr=Os(function(){e(Q.unstable_now())},t)}Q.unstable_IdlePriority=5;Q.unstable_ImmediatePriority=1;Q.unstable_LowPriority=4;Q.unstable_NormalPriority=3;Q.unstable_Profiling=null;Q.unstable_UserBlockingPriority=2;Q.unstable_cancelCallback=function(e){e.callback=null};Q.unstable_continueExecution=function(){dn||io||(dn=!0,Hi(Bi))};Q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fs=0<e?Math.floor(1e3/e):5};Q.unstable_getCurrentPriorityLevel=function(){return be};Q.unstable_getFirstCallbackNode=function(){return nt(mt)};Q.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var n=be;be=t;try{return e()}finally{be=n}};Q.unstable_pauseExecution=function(){};Q.unstable_requestPaint=function(){};Q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=be;be=e;try{return t()}finally{be=n}};Q.unstable_scheduleCallback=function(e,t,n){var r=Q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:hf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,$i(Ut,e),nt(mt)===null&&e===nt(Ut)&&(ur?(Is(cr),cr=-1):ur=!0,Vi(ji,n-r))):(e.sortIndex=o,$i(mt,e),dn||io||(dn=!0,Hi(Bi))),e};Q.unstable_shouldYield=Us;Q.unstable_wrapCallback=function(e){var t=be;return function(){var n=be;be=t;try{return e.apply(this,arguments)}finally{be=n}}}});var Hs=St((Wh,Bs)=>{"use strict";Bs.exports=js()});var Kd=St(Ve=>{"use strict";var gf=Fe(),Be=Hs();function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xu=new Set,Dr={};function Nn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},Ws={};function bf(e){return fl.call(Ws,e)?!0:fl.call(Vs,e)?!1:vf.test(e)?Ws[e]=!0:(Vs[e]=!0,!1)}function yf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,t,n,r){if(t===null||typeof t>"u"||yf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function la(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,la);he[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,la);he[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,la);he[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xf(t,n,o,r)&&(n=null),r||o===null?bf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Zu=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Ju=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Wi;function yr(e){if(Wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||""}return`
`+Wi+e}var Qi=!1;function Ki(e,t){if(!e||Qi)return"";Qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function wf(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Dn:return"Portal";case ml:return"Profiler";case sa:return"StrictMode";case hl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zu:return(e.displayName||"Context")+".Consumer";case qu:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ca:return t=e.displayName||null,t!==null?t:vl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return vl(e(t))}catch{}}return null}function kf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(t);case 8:return t===sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sf(e){var t=ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=Sf(e))}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nc(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function yl(e,t){nc(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(xr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function rc(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,ic=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nf=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Nf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function lc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=lc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Wn=null,Qn=null;function qs(e){if(e=qr(e)){if(typeof El!="function")throw Error(x(280));var t=e.stateNode;t&&(t=di(t),El(e.stateNode,e.type,t))}}function sc(e){Wn?Qn?Qn.push(e):Qn=[e]:Wn=e}function uc(){if(Wn){var e=Wn,t=Qn;if(Qn=Wn=null,qs(e),t)for(e=0;e<t.length;e++)qs(t[e])}}function cc(e,t){return e(t)}function dc(){}var Yi=!1;function pc(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return cc(e,t,n)}finally{Yi=!1,(Wn!==null||Qn!==null)&&(dc(),uc())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var _l=!1;if(Rt)try{Pn={},Object.defineProperty(Pn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{_l=!1}var Pn;function Ef(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Nr=!1,Fo=null,$o=!1,zl=null,_f={onError:function(e){Nr=!0,Fo=e}};function zf(e,t,n,r,o,i,l,a,s){Nr=!1,Fo=null,Ef.apply(_f,arguments)}function Rf(e,t,n,r,o,i,l,a,s){if(zf.apply(this,arguments),Nr){if(Nr){var u=Fo;Nr=!1,Fo=null}else throw Error(x(198));$o||($o=!0,zl=u)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(Cn(e)!==e)throw Error(x(188))}function Pf(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zs(o),e;if(i===r)return Zs(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function mc(e){return e=Pf(e),e!==null?hc(e):null}function hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hc(e);if(t!==null)return t;e=e.sibling}return null}var gc=Be.unstable_scheduleCallback,Js=Be.unstable_cancelCallback,Tf=Be.unstable_shouldYield,Df=Be.unstable_requestPaint,re=Be.unstable_now,Lf=Be.unstable_getCurrentPriorityLevel,pa=Be.unstable_ImmediatePriority,vc=Be.unstable_UserBlockingPriority,Uo=Be.unstable_NormalPriority,Mf=Be.unstable_LowPriority,bc=Be.unstable_IdlePriority,ai=null,bt=null;function Af(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Ff,Of=Math.log,If=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(Of(e)/If|0)|0}var co=64,po=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=wr(a):(i&=l,i!==0&&(r=wr(i)))}else l=n&~o,l!==0?r=wr(l):i!==0&&(r=wr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function $f(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-at(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=$f(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=co;return co<<=1,(co&4194240)===0&&(co=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function xc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wc,ma,kc,Sc,Nc,Pl=!1,fo=[],Yt=null,Gt=null,Xt=null,Ar=new Map,Or=new Map,Vt=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hf(e,t,n,r,o){switch(t){case"focusin":return Yt=pr(Yt,e,t,n,r,o),!0;case"dragenter":return Gt=pr(Gt,e,t,n,r,o),!0;case"mouseover":return Xt=pr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ar.set(i,pr(Ar.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,pr(Or.get(i)||null,e,t,n,r,o)),!0}return!1}function Cc(e){var t=mn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=fc(n),t!==null){e.blockedOn=t,Nc(e.priority,function(){kc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=qr(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function tu(e,t,n){_o(e)&&n.delete(t)}function Vf(){Pl=!1,Yt!==null&&_o(Yt)&&(Yt=null),Gt!==null&&_o(Gt)&&(Gt=null),Xt!==null&&_o(Xt)&&(Xt=null),Ar.forEach(tu),Or.forEach(tu)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Vf)))}function Ir(e){function t(o){return fr(o,e)}if(0<fo.length){fr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&fr(Yt,e),Gt!==null&&fr(Gt,e),Xt!==null&&fr(Xt,e),Ar.forEach(t),Or.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Cc(n),n.blockedOn===null&&Vt.shift()}var Kn=Lt.ReactCurrentBatchConfig,Bo=!0;function Wf(e,t,n,r){var o=H,i=Kn.transition;Kn.transition=null;try{H=1,ha(e,t,n,r)}finally{H=o,Kn.transition=i}}function Qf(e,t,n,r){var o=H,i=Kn.transition;Kn.transition=null;try{H=4,ha(e,t,n,r)}finally{H=o,Kn.transition=i}}function ha(e,t,n,r){if(Bo){var o=Tl(e,t,n,r);if(o===null)nl(e,t,r,Ho,n),eu(e,r);else if(Hf(o,e,t,n,r))r.stopPropagation();else if(eu(e,r),t&4&&-1<Bf.indexOf(e)){for(;o!==null;){var i=qr(o);if(i!==null&&wc(i),i=Tl(e,t,n,r),i===null&&nl(e,t,r,Ho,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Ho=null;function Tl(e,t,n,r){if(Ho=null,e=da(r),e=mn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case pa:return 1;case vc:return 4;case Uo:case Mf:return 16;case bc:return 536870912;default:return 16}default:return 16}}var Qt=null,ga=null,zo=null;function _c(){if(zo)return zo;var e,t=ga,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function nu(){return!1}function He(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:nu,this.isPropagationStopped=nu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=He(rr),Xr=te({},rr,{view:0,detail:0}),Kf=He(Xr),Xi,qi,mr,si=te({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(Xi=e.screenX-mr.screenX,qi=e.screenY-mr.screenY):qi=Xi=0,mr=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),ru=He(si),Yf=te({},si,{dataTransfer:0}),Gf=He(Yf),Xf=te({},Xr,{relatedTarget:0}),Zi=He(Xf),qf=te({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=He(qf),Jf=te({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=He(Jf),tm=te({},rr,{data:0}),ou=He(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function ba(){return im}var lm=te({},Xr,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=He(lm),sm=te({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=He(sm),um=te({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),cm=He(um),dm=te({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=He(dm),fm=te({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=He(fm),hm=[9,13,27,32],ya=Rt&&"CompositionEvent"in window,Cr=null;Rt&&"documentMode"in document&&(Cr=document.documentMode);var gm=Rt&&"TextEvent"in window&&!Cr,zc=Rt&&(!ya||Cr&&8<Cr&&11>=Cr),lu=" ",au=!1;function Rc(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function vm(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(au=!0,lu);case"textInput":return e=t.data,e===lu&&au?null:e;default:return null}}function bm(e,t){if(Mn)return e==="compositionend"||!ya&&Rc(e,t)?(e=_c(),zo=ga=Qt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function Tc(e,t,n,r){sc(r),t=Vo(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Fr=null;function xm(e){Bc(e,0)}function ui(e){var t=In(e);if(tc(t))return e}function wm(e,t){if(e==="change")return t}var Dc=!1;Rt&&(Rt?(go="oninput"in document,go||(Ji=document.createElement("div"),Ji.setAttribute("oninput","return;"),go=typeof Ji.oninput=="function"),ho=go):ho=!1,Dc=ho&&(!document.documentMode||9<document.documentMode));var ho,go,Ji;function uu(){Er&&(Er.detachEvent("onpropertychange",Lc),Fr=Er=null)}function Lc(e){if(e.propertyName==="value"&&ui(Fr)){var t=[];Tc(t,Fr,e,da(e)),pc(xm,t)}}function km(e,t,n){e==="focusin"?(uu(),Er=t,Fr=n,Er.attachEvent("onpropertychange",Lc)):e==="focusout"&&uu()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Fr)}function Nm(e,t){if(e==="click")return ui(t)}function Cm(e,t){if(e==="input"||e==="change")return ui(t)}function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Em;function $r(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fl.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ac(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _m(e){var t=Ac(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=du(n,i);var l=du(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zm=Rt&&"documentMode"in document&&11>=document.documentMode,An=null,Dl=null,_r=null,Ll=!1;function pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||An==null||An!==Io(r)||(r=An,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&$r(_r,r)||(_r=r,r=Vo(Dl,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},el={},Oc={};Rt&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ci(e){if(el[e])return el[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oc)return el[e]=t[n];return e}var Ic=ci("animationend"),Fc=ci("animationiteration"),$c=ci("animationstart"),Uc=ci("transitionend"),jc=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){jc.set(e,t),Nn(t,[e])}for(bo=0;bo<fu.length;bo++)yo=fu[bo],mu=yo.toLowerCase(),hu=yo[0].toUpperCase()+yo.slice(1),on(mu,"on"+hu);var yo,mu,hu,bo;on(Ic,"onAnimationEnd");on(Fc,"onAnimationIteration");on($c,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Uc,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rf(r,t,void 0,e),e.currentTarget=null}function Bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;gu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;gu(o,a,u),i=s}}}if($o)throw e=zl,$o=!1,zl=null,e}function G(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Hc(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),Hc(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[xo]){e[xo]=!0,Xu.forEach(function(n){n!=="selectionchange"&&(Rm.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,tl("selectionchange",!1,t))}}function Hc(e,t,n,r){switch(Ec(t)){case 1:var o=Wf;break;case 4:o=Qf;break;default:o=ha}n=o.bind(null,t,n,e),o=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=mn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}pc(function(){var u=i,f=da(n),h=[];e:{var m=jc.get(e);if(m!==void 0){var g=va,v=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=am;break;case"focusin":v="focus",g=Zi;break;case"focusout":v="blur",g=Zi;break;case"beforeblur":case"afterblur":g=Zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cm;break;case Ic:case Fc:case $c:g=Zf;break;case Uc:g=pm;break;case"scroll":g=Kf;break;case"wheel":g=mm;break;case"copy":case"cut":case"paste":g=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=iu}var b=(t&4)!==0,E=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Mr(c,d),y!=null&&b.push(jr(c,y,p)))),E)break;c=c.return}0<b.length&&(m=new g(m,v,null,n,f),h.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Cl&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[Pt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?mn(v):null,v!==null&&(E=Cn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(b=ru,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=iu,y="onPointerLeave",d="onPointerEnter",c="pointer"),E=g==null?m:In(g),p=v==null?m:In(v),m=new b(y,c+"leave",g,n,f),m.target=E,m.relatedTarget=p,y=null,mn(f)===u&&(b=new b(d,c+"enter",v,n,f),b.target=p,b.relatedTarget=E,y=b),E=y,g&&v)t:{for(b=g,d=v,c=0,p=b;p;p=Tn(p))c++;for(p=0,y=d;y;y=Tn(y))p++;for(;0<c-p;)b=Tn(b),c--;for(;0<p-c;)d=Tn(d),p--;for(;c--;){if(b===d||d!==null&&b===d.alternate)break t;b=Tn(b),d=Tn(d)}b=null}else b=null;g!==null&&vu(h,m,g,b,!1),v!==null&&E!==null&&vu(h,E,v,b,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=wm;else if(su(m))if(Dc)S=Cm;else{S=Sm;var w=km}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Nm);if(S&&(S=S(e,u))){Tc(h,S,n,f);break e}w&&w(e,m,u),e==="focusout"&&(w=m._wrapperState)&&w.controlled&&m.type==="number"&&xl(m,"number",m.value)}switch(w=u?In(u):window,e){case"focusin":(su(w)||w.contentEditable==="true")&&(An=w,Dl=u,_r=null);break;case"focusout":_r=Dl=An=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,pu(h,n,f);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":pu(h,n,f)}var N;if(ya)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Mn?Rc(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(zc&&n.locale!=="ko"&&(Mn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Mn&&(N=_c()):(Qt=f,ga="value"in Qt?Qt.value:Qt.textContent,Mn=!0)),w=Vo(u,k),0<w.length&&(k=new ou(k,e,null,n,f),h.push({event:k,listeners:w}),N?k.data=N:(N=Pc(n),N!==null&&(k.data=N)))),(N=gm?vm(e,n):bm(e,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(f=new ou("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=N))}Bc(h,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mr(e,n),i!=null&&r.unshift(jr(e,i,o)),i=Mr(e,t),i!=null&&r.push(jr(e,i,o))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Mr(n,i),s!=null&&l.unshift(jr(n,s,a))):o||(s=Mr(n,i),s!=null&&l.push(jr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Pm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace(Tm,"")}function wo(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(x(425))}function Wo(){}var Ml=null,Al=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,yu=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof yu<"u"?function(e){return yu.resolve(null).then(e).catch(Mm)}:Il;function Mm(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ir(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),vt="__reactFiber$"+or,Br="__reactProps$"+or,Pt="__reactContainer$"+or,Fl="__reactEvents$"+or,Am="__reactListeners$"+or,Om="__reactHandles$"+or;function mn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xu(e);e!==null;){if(n=e[vt])return n;e=xu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[vt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function di(e){return e[Br]||null}var $l=[],Fn=-1;function ln(e){return{current:e}}function X(e){0>Fn||(e.current=$l[Fn],$l[Fn]=null,Fn--)}function K(e,t){Fn++,$l[Fn]=e.current,e.current=t}var rn={},ke=ln(rn),Te=ln(!1),yn=rn;function qn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Qo(){X(Te),X(ke)}function wu(e,t,n){if(ke.current!==rn)throw Error(x(168));K(ke,t),K(Te,n)}function Vc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,kf(e)||"Unknown",o));return te({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,yn=ke.current,K(ke,e),K(Te,Te.current),!0}function ku(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Vc(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,X(Te),X(ke),K(ke,e)):X(Te),K(Te,n)}var Ct=null,pi=!1,ol=!1;function Wc(e){Ct===null?Ct=[e]:Ct.push(e)}function Im(e){pi=!0,Wc(e)}function an(){if(!ol&&Ct!==null){ol=!0;var e=0,t=H;try{var n=Ct;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,pi=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),gc(pa,an),o}finally{H=t,ol=!1}}return null}var $n=[],Un=0,Yo=null,Go=0,Ke=[],Ye=0,xn=null,Et=1,_t="";function pn(e,t){$n[Un++]=Go,$n[Un++]=Yo,Yo=e,Go=t}function Qc(e,t,n){Ke[Ye++]=Et,Ke[Ye++]=_t,Ke[Ye++]=xn,xn=e;var r=Et;e=_t;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-at(t)+o|n<<o|r,_t=i+e}else Et=1<<i|n<<o|r,_t=e}function wa(e){e.return!==null&&(pn(e,1),Qc(e,1,0))}function ka(e){for(;e===Yo;)Yo=$n[--Un],$n[Un]=null,Go=$n[--Un],$n[Un]=null;for(;e===xn;)xn=Ke[--Ye],Ke[Ye]=null,_t=Ke[--Ye],Ke[Ye]=null,Et=Ke[--Ye],Ke[Ye]=null}var je=null,Ue=null,Z=!1,lt=null;function Kc(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ue=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Et,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ue=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Z){var t=Ue;if(t){var n=t;if(!Su(e,t)){if(Ul(e))throw Error(x(418));t=qt(n.nextSibling);var r=je;t&&Su(e,t)?Kc(r,n):(e.flags=e.flags&-4097|2,Z=!1,je=e)}}else{if(Ul(e))throw Error(x(418));e.flags=e.flags&-4097|2,Z=!1,je=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function ko(e){if(e!==je)return!1;if(!Z)return Nu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=Ue)){if(Ul(e))throw Yc(),Error(x(418));for(;t;)Kc(e,t),t=qt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=je?qt(e.stateNode.nextSibling):null;return!0}function Yc(){for(var e=Ue;e;)e=qt(e.nextSibling)}function Zn(){Ue=je=null,Z=!1}function Sa(e){lt===null?lt=[e]:lt.push(e)}var Fm=Lt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function Gc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=tn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=dl(p,d.mode,y),c.return=d,c):(c=o(c,p),c.return=d,c)}function s(d,c,p,y){var S=p.type;return S===Ln?f(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Cu(S)===c.type)?(y=o(c,p.props),y.ref=hr(d,c,p),y.return=d,y):(y=Oo(p.type,p.key,p.props,null,d.mode,y),y.ref=hr(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=pl(p,d.mode,y),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,y,S){return c===null||c.tag!==7?(c=bn(p,d.mode,y,S),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=dl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ao:return p=Oo(c.type,c.key,c.props,null,d.mode,p),p.ref=hr(d,null,c),p.return=d,p;case Dn:return c=pl(c,d.mode,p),c.return=d,c;case Bt:var y=c._init;return h(d,y(c._payload),p)}if(xr(c)||dr(c))return c=bn(c,d.mode,p,null),c.return=d,c;So(d,c)}return null}function m(d,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ao:return p.key===S?s(d,c,p,y):null;case Dn:return p.key===S?u(d,c,p,y):null;case Bt:return S=p._init,m(d,c,S(p._payload),y)}if(xr(p)||dr(p))return S!==null?null:f(d,c,p,y,null);So(d,p)}return null}function g(d,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ao:return d=d.get(y.key===null?p:y.key)||null,s(c,d,y,S);case Dn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,S);case Bt:var w=y._init;return g(d,c,p,w(y._payload),S)}if(xr(y)||dr(y))return d=d.get(p)||null,f(c,d,y,S,null);So(c,y)}return null}function v(d,c,p,y){for(var S=null,w=null,N=c,k=c=0,M=null;N!==null&&k<p.length;k++){N.index>k?(M=N,N=null):M=N.sibling;var z=m(d,N,p[k],y);if(z===null){N===null&&(N=M);break}e&&N&&z.alternate===null&&t(d,N),c=i(z,c,k),w===null?S=z:w.sibling=z,w=z,N=M}if(k===p.length)return n(d,N),Z&&pn(d,k),S;if(N===null){for(;k<p.length;k++)N=h(d,p[k],y),N!==null&&(c=i(N,c,k),w===null?S=N:w.sibling=N,w=N);return Z&&pn(d,k),S}for(N=r(d,N);k<p.length;k++)M=g(N,d,k,p[k],y),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?k:M.key),c=i(M,c,k),w===null?S=M:w.sibling=M,w=M);return e&&N.forEach(function(U){return t(d,U)}),Z&&pn(d,k),S}function b(d,c,p,y){var S=dr(p);if(typeof S!="function")throw Error(x(150));if(p=S.call(p),p==null)throw Error(x(151));for(var w=S=null,N=c,k=c=0,M=null,z=p.next();N!==null&&!z.done;k++,z=p.next()){N.index>k?(M=N,N=null):M=N.sibling;var U=m(d,N,z.value,y);if(U===null){N===null&&(N=M);break}e&&N&&U.alternate===null&&t(d,N),c=i(U,c,k),w===null?S=U:w.sibling=U,w=U,N=M}if(z.done)return n(d,N),Z&&pn(d,k),S;if(N===null){for(;!z.done;k++,z=p.next())z=h(d,z.value,y),z!==null&&(c=i(z,c,k),w===null?S=z:w.sibling=z,w=z);return Z&&pn(d,k),S}for(N=r(d,N);!z.done;k++,z=p.next())z=g(N,d,k,z.value,y),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?k:z.key),c=i(z,c,k),w===null?S=z:w.sibling=z,w=z);return e&&N.forEach(function(oe){return t(d,oe)}),Z&&pn(d,k),S}function E(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ao:e:{for(var S=p.key,w=c;w!==null;){if(w.key===S){if(S=p.type,S===Ln){if(w.tag===7){n(d,w.sibling),c=o(w,p.props.children),c.return=d,d=c;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&Cu(S)===w.type){n(d,w.sibling),c=o(w,p.props),c.ref=hr(d,w,p),c.return=d,d=c;break e}n(d,w);break}else t(d,w);w=w.sibling}p.type===Ln?(c=bn(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Oo(p.type,p.key,p.props,null,d.mode,y),y.ref=hr(d,c,p),y.return=d,d=y)}return l(d);case Dn:e:{for(w=p.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=pl(p,d.mode,y),c.return=d,d=c}return l(d);case Bt:return w=p._init,E(d,c,w(p._payload),y)}if(xr(p))return v(d,c,p,y);if(dr(p))return b(d,c,p,y);So(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=dl(p,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return E}var Jn=Gc(!0),Xc=Gc(!1),Xo=ln(null),qo=null,jn=null,Na=null;function Ca(){Na=jn=qo=null}function Ea(e){var t=Xo.current;X(Xo),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){qo=e,Na=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(qo===null)throw Error(x(308));jn=e,qo.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var hn=null;function _a(e){hn===null?hn=[e]:hn.push(e)}function qc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_a(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,_a(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}function Eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var o=e.updateQueue;Ht=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,f=u=s=null,a=i;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,b=a;switch(m=t,g=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(g,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,m=typeof v=="function"?v.call(g,h,m):v,m==null)break e;h=te({},h,m);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,s=h):f=f.next=g,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=h}}function _u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Zr={},yt=ln(Zr),Hr=ln(Zr),Vr=ln(Zr);function gn(e){if(e===Zr)throw Error(x(174));return e}function Ra(e,t){switch(K(Vr,t),K(Hr,e),K(yt,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}X(yt),K(yt,t)}function er(){X(yt),X(Hr),X(Vr)}function Jc(e){gn(Vr.current);var t=gn(yt.current),n=kl(t,e.type);t!==n&&(K(Hr,e),K(yt,n))}function Pa(e){Hr.current===e&&(X(yt),X(Hr))}var J=ln(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Ta(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var To=Lt.ReactCurrentDispatcher,ll=Lt.ReactCurrentBatchConfig,wn=0,ee=null,se=null,ce=null,ei=!1,zr=!1,Wr=0,$m=0;function ye(){throw Error(x(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function La(e,t,n,r,o,i){if(wn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Hm:Vm,e=n(r,o),zr){i=0;do{if(zr=!1,Wr=0,25<=i)throw Error(x(301));i+=1,ce=se=null,t.updateQueue=null,To.current=Wm,e=n(r,o)}while(zr)}if(To.current=ti,t=se!==null&&se.next!==null,wn=0,ce=se=ee=null,ei=!1,t)throw Error(x(300));return e}function Ma(){var e=Wr!==0;return Wr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ee.memoizedState=ce=e:ce=ce.next=e,ce}function Ze(){if(se===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?ee.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(x(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?ee.memoizedState=ce=e:ce=ce.next=e}return ce}function Qr(e,t){return typeof t=="function"?t(e):t}function al(e){var t=Ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((wn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ee.lanes|=f,kn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,ut(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ut(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ed(){}function td(e,t){var n=ee,r=Ze(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,Aa(od.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Kr(9,rd.bind(null,n,r,o,t),void 0,null),de===null)throw Error(x(349));(wn&30)!==0||nd(n,t,o)}return o}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rd(e,t,n,r){t.value=n,t.getSnapshot=r,id(t)&&ld(e)}function od(e,t,n){return n(function(){id(t)&&ld(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function ld(e){var t=Tt(e,1);t!==null&&st(t,e,1,-1)}function zu(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,ee,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ad(){return Ze().memoizedState}function Do(e,t,n,r){var o=gt();ee.flags|=e,o.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=Kr(t,n,i,r);return}}ee.flags|=e,o.memoizedState=Kr(1|t,n,i,r)}function Ru(e,t){return Do(8390656,8,e,t)}function Aa(e,t){return fi(2048,8,e,t)}function sd(e,t){return fi(4,2,e,t)}function ud(e,t){return fi(4,4,e,t)}function cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,cd.bind(null,t,e),n)}function Oa(){}function pd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function md(e,t,n){return(wn&21)===0?(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n):(ut(n,t)||(n=yc(),ee.lanes|=n,kn|=n,e.baseState=!0),t)}function Um(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{H=n,ll.transition=r}}function hd(){return Ze().memoizedState}function jm(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gd(e))vd(t,n);else if(n=qc(e,t,n,r),n!==null){var o=_e();st(n,e,r,o),bd(n,t,r)}}function Bm(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(e))vd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ut(a,l)){var s=t.interleaved;s===null?(o.next=o,_a(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=qc(e,t,o,r),n!==null&&(o=_e(),st(n,e,r,o),bd(n,t,r))}}function gd(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function vd(e,t){zr=ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}var ti={readContext:qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Hm={readContext:qe,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jm.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:Oa,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=Um.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=gt();if(Z){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),de===null)throw Error(x(349));(wn&30)!==0||nd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ru(od.bind(null,r,i,e),[e]),r.flags|=2048,Kr(9,rd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=de.identifierPrefix;if(Z){var n=_t,r=Et;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vm={readContext:qe,useCallback:pd,useContext:qe,useEffect:Aa,useImperativeHandle:dd,useInsertionEffect:sd,useLayoutEffect:ud,useMemo:fd,useReducer:al,useRef:ad,useState:function(){return al(Qr)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ze();return md(t,se.memoizedState,e)},useTransition:function(){var e=al(Qr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:hd,unstable_isNewReconciler:!1},Wm={readContext:qe,useCallback:pd,useContext:qe,useEffect:Aa,useImperativeHandle:dd,useInsertionEffect:sd,useLayoutEffect:ud,useMemo:fd,useReducer:sl,useRef:ad,useState:function(){return sl(Qr)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ze();return se===null?t.memoizedState=e:md(t,se.memoizedState,e)},useTransition:function(){var e=sl(Qr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:hd,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mi={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=en(e),i=zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(st(t,e,o,r),Po(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=en(e),i=zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(st(t,e,o,r),Po(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=en(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(st(t,e,r,n),Po(t,e,r))}};function Pu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(o,i):!0}function yd(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(o=De(t)?yn:ke.current,r=t.contextTypes,i=(r=r!=null)?qn(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},za(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=qe(i):(i=De(t)?yn:ke.current,o.context=qn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&mi.enqueueReplaceState(o,o.state,null),Zo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=wf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function xd(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ri||(ri=!0,ta=r),Wl(e,t)},n}function wd(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lh.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Km=Lt.ReactCurrentOwner,Pe=!1;function Ee(e,t,n,r){t.child=e===null?Xc(t,null,n,r):Jn(t,e.child,n,r)}function Au(e,t,n,r,o){n=n.render;var i=t.ref;return Yn(t,o),r=La(e,t,n,r,i,o),n=Ma(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(Z&&n&&wa(t),t.flags|=1,Ee(e,t,r,o),t.child)}function Ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Va(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,kd(e,t,i,r,o)):(e=Oo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function kd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return Ql(e,t,n,r,o)}function Sd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Hn,$e),$e|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Hn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Hn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Hn,$e),$e|=r;return Ee(e,t,o,n),t.child}function Nd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,o){var i=De(n)?yn:ke.current;return i=qn(t,i),Yn(t,o),n=La(e,t,n,r,i,o),r=Ma(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(Z&&r&&wa(t),t.flags|=1,Ee(e,t,n,o),t.child)}function Iu(e,t,n,r,o){if(De(n)){var i=!0;Ko(t)}else i=!1;if(Yn(t,o),t.stateNode===null)Lo(e,t),yd(t,n,r),Vl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=De(n)?yn:ke.current,u=qn(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Tu(t,l,r,u),Ht=!1;var m=t.memoizedState;l.state=m,Zo(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Te.current||Ht?(typeof f=="function"&&(Hl(t,n,f,r),s=t.memoizedState),(a=Ht||Pu(t,n,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Zc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ot(t.type,a),l.props=u,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=qe(s):(s=De(n)?yn:ke.current,s=qn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Tu(t,l,r,s),Ht=!1,m=t.memoizedState,l.state=m,Zo(t,r,l,o);var v=t.memoizedState;a!==h||m!==v||Te.current||Ht?(typeof g=="function"&&(Hl(t,n,g,r),v=t.memoizedState),(u=Ht||Pu(t,n,u,r,m,v,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,i,o)}function Kl(e,t,n,r,o,i){Nd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ku(t,n,!1),Dt(e,t,i);r=t.stateNode,Km.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,a,i)):Ee(e,t,a,i),t.memoizedState=r.state,o&&ku(t,n,!0),t.child}function Cd(e){var t=e.stateNode;t.pendingContext?wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wu(e,t.context,!1),Ra(e,t.containerInfo)}function Fu(e,t,n,r,o){return Zn(),Sa(o),t.flags|=256,Ee(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ed(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=vi(l,r,0,null),e=bn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Gl(n),t.memoizedState=Yl,e):Ia(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ym(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=tn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=tn(a,i):(i=bn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Gl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ia(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&Sa(r),Jn(t,e.child,null,n),e=Ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(x(422))),No(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=vi({mode:"visible",children:r.children},o,0,null),i=bn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Jn(t,e.child,null,l),t.child.memoizedState=Gl(l),t.memoizedState=Yl,i);if((t.mode&1)===0)return No(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=ul(i,r,void 0),No(e,t,l,r)}if(a=(l&e.childLanes)!==0,Pe||a){if(r=de,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),st(r,e,o,-1))}return Ha(),r=ul(Error(x(421))),No(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ue=qt(o.nextSibling),je=t,Z=!0,lt=null,e!==null&&(Ke[Ye++]=Et,Ke[Ye++]=_t,Ke[Ye++]=xn,Et=e.id,_t=e.overflow,xn=t),t=Ia(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function cl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function _d(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ee(e,t,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),cl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t,n){switch(t.tag){case 3:Cd(t),Zn();break;case 5:Jc(t);break;case 1:De(t.type)&&Ko(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Xo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ed(e,t,n):(K(J,J.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return _d(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Sd(e,t,n)}return Dt(e,t,n)}var zd,Xl,Rd,Pd;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};Rd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(yt.current);var i=null;switch(n){case"input":o=bl(e,o),r=bl(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=wl(e,o),r=wl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}Sl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Pd=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xm(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return De(t.type)&&Qo(),xe(t),null;case 3:return r=t.stateNode,er(),X(Te),X(ke),Ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lt!==null&&(oa(lt),lt=null))),Xl(e,t),xe(t),null;case 5:Pa(t);var o=gn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Rd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return xe(t),null}if(e=gn(yt.current),ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[Br]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<kr.length;o++)G(kr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Ks(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Gs(r,i),G("invalid",r)}Sl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&wo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&wo(r.textContent,a,e),o=["children",""+a]):Dr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":so(r),Ys(r,i,!0);break;case"textarea":so(r),Xs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[Br]=r,zd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Nl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<kr.length;o++)G(kr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Ks(e,r),o=bl(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":Gs(e,r),o=wl(e,r),G("invalid",e);break;default:o=r}Sl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ac(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ic(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Lr(e,s):typeof s=="number"&&Lr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&aa(e,i,s,l))}switch(n){case"input":so(e),Ys(e,r,!1);break;case"textarea":so(e),Xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Pd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=gn(Vr.current),gn(yt.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return xe(t),null;case 13:if(X(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Yc(),Zn(),t.flags|=98560,i=!1;else if(i=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[vt]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else lt!==null&&(oa(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(J.current&1)!==0?ue===0&&(ue=3):Ha())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return er(),Xl(e,t),e===null&&Ur(t.stateNode.containerInfo),xe(t),null;case 10:return Ea(t.type._context),xe(t),null;case 17:return De(t.type)&&Qo(),xe(t),null;case 19:if(X(J),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)gr(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Jo(e),l!==null){for(t.flags|=128,gr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>nr&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return xe(t),null}else 2*re()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,gr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?($e&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function qm(e,t){switch(ka(t),t.tag){case 1:return De(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),X(Te),X(ke),Ta(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return er(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return Ba(),null;case 24:return null;default:return null}}var Co=!1,we=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,C=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Uu=!1;function Jm(e,t){if(Ml=Bo,e=Ac(),xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var g;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++f===r&&(s=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},Bo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,E=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:ot(t.type,b),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){ne(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=Uu,Uu=!1,v}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ql(t,n,i)}o=o.next}while(o!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Br],delete t[Fl],delete t[Am],delete t[Om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}var fe=null,it=!1;function jt(e,t,n){for(n=n.child;n!==null;)Ld(e,t,n),n=n.sibling}function Ld(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 5:we||Bn(n,t);case 6:var r=fe,o=it;fe=null,jt(e,t,n),fe=r,it=o,fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Ir(e)):rl(fe,n.stateNode));break;case 4:r=fe,o=it,fe=n.stateNode.containerInfo,it=!0,jt(e,t,n),fe=r,it=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&ql(n,t,l),o=o.next}while(o!==r)}jt(e,t,n);break;case 1:if(!we&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,jt(e,t,n),we=r):jt(e,t,n);break;default:jt(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zm),t.forEach(function(r){var o=sh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,it=!1;break e;case 3:fe=a.stateNode.containerInfo,it=!0;break e;case 4:fe=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(fe===null)throw Error(x(160));Ld(i,l,o),fe=null,it=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ht(e),r&4){try{Rr(3,e,e.return),hi(3,e)}catch(b){ne(e,e.return,b)}try{Rr(5,e,e.return)}catch(b){ne(e,e.return,b)}}break;case 1:rt(t,e),ht(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(rt(t,e),ht(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Lr(o,"")}catch(b){ne(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&nc(o,i),Nl(a,l);var u=Nl(a,i);for(l=0;l<s.length;l+=2){var f=s[l],h=s[l+1];f==="style"?ac(o,h):f==="dangerouslySetInnerHTML"?ic(o,h):f==="children"?Lr(o,h):aa(o,f,h,u)}switch(a){case"input":yl(o,i);break;case"textarea":rc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Vn(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Vn(o,!!i.multiple,i.defaultValue,!0):Vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Br]=i}catch(b){ne(e,e.return,b)}}break;case 6:if(rt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ne(e,e.return,b)}}break;case 3:if(rt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(b){ne(e,e.return,b)}break;case 4:rt(t,e),ht(e);break;case 13:rt(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ua=re())),r&4&&Bu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||f,rt(t,e),we=u):rt(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(C=e,f=e.child;f!==null;){for(h=C=f;C!==null;){switch(m=C,g=m.child,m.tag){case 0:case 11:case 14:case 15:Rr(4,m,m.return);break;case 1:Bn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ne(r,n,b)}}break;case 5:Bn(m,m.return);break;case 22:if(m.memoizedState!==null){Vu(h);continue}}g!==null?(g.return=m,C=g):Vu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=lc("display",l))}catch(b){ne(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){ne(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rt(t,e),ht(e),r&4&&Bu(e);break;case 21:break;default:rt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dd(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lr(o,""),r.flags&=-33);var i=ju(e);ea(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ju(e);Jl(e,a,l);break;default:throw Error(x(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eh(e,t,n){C=e,Ad(e,t,n)}function Ad(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Co;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||we;a=Co;var u=we;if(Co=l,(we=s)&&!u)for(C=o;C!==null;)l=C,s=l.child,l.tag===22&&l.memoizedState!==null?Wu(o):s!==null?(s.return=l,C=s):Wu(o);for(;i!==null;)C=i,Ad(i,t,n),i=i.sibling;C=o,Co=a,we=u}Hu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,C=i):Hu(e,t,n)}}function Hu(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:we||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_u(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_u(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}we||t.flags&512&&Zl(t)}catch(m){ne(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Vu(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Wu(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ne(t,o,s)}}var i=t.return;try{Zl(t)}catch(s){ne(t,i,s)}break;case 5:var l=t.return;try{Zl(t)}catch(s){ne(t,l,s)}}}catch(s){ne(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var th=Math.ceil,ni=Lt.ReactCurrentDispatcher,Fa=Lt.ReactCurrentOwner,Xe=Lt.ReactCurrentBatchConfig,B=0,de=null,ie=null,me=0,$e=0,Hn=ln(0),ue=0,Yr=null,kn=0,gi=0,$a=0,Pr=null,Re=null,Ua=0,nr=1/0,Nt=null,ri=!1,ta=null,Jt=null,Eo=!1,Kt=null,oi=0,Tr=0,na=null,Mo=-1,Ao=0;function _e(){return(B&6)!==0?re():Mo!==-1?Mo:Mo=re()}function en(e){return(e.mode&1)===0?1:(B&2)!==0&&me!==0?me&-me:Fm.transition!==null?(Ao===0&&(Ao=yc()),Ao):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e)}function st(e,t,n,r){if(50<Tr)throw Tr=0,na=null,Error(x(185));Gr(e,n,r),((B&2)===0||e!==de)&&(e===de&&((B&2)===0&&(gi|=n),ue===4&&Wt(e,me)),Le(e,r),n===1&&B===0&&(t.mode&1)===0&&(nr=re()+500,pi&&an()))}function Le(e,t){var n=e.callbackNode;Uf(e,t);var r=jo(e,e===de?me:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?Im(Qu.bind(null,e)):Wc(Qu.bind(null,e)),Lm(function(){(B&6)===0&&an()}),n=null;else{switch(xc(r)){case 1:n=pa;break;case 4:n=vc;break;case 16:n=Uo;break;case 536870912:n=bc;break;default:n=Uo}n=Hd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Mo=-1,Ao=0,(B&6)!==0)throw Error(x(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=jo(e,e===de?me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ii(e,r);else{t=r;var o=B;B|=2;var i=Fd();(de!==e||me!==t)&&(Nt=null,nr=re()+500,vn(e,t));do try{oh();break}catch(a){Id(e,a)}while(!0);Ca(),ni.current=i,B=o,ie!==null?t=0:(de=null,me=0,t=ue)}if(t!==0){if(t===2&&(o=Rl(e),o!==0&&(r=o,t=ra(e,o))),t===1)throw n=Yr,vn(e,0),Wt(e,r),Le(e,re()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!nh(o)&&(t=ii(e,r),t===2&&(i=Rl(e),i!==0&&(r=i,t=ra(e,i))),t===1))throw n=Yr,vn(e,0),Wt(e,r),Le(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:fn(e,Re,Nt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ua+500-re(),10<t)){if(jo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Il(fn.bind(null,e,Re,Nt),t);break}fn(e,Re,Nt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*th(r/1960))-r,10<r){e.timeoutHandle=Il(fn.bind(null,e,Re,Nt),r);break}fn(e,Re,Nt);break;case 5:fn(e,Re,Nt);break;default:throw Error(x(329))}}}return Le(e,re()),e.callbackNode===n?Od.bind(null,e):null}function ra(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=ii(e,t),e!==2&&(t=Re,Re=n,t!==null&&oa(t)),e}function oa(e){Re===null?Re=e:Re.push.apply(Re,e)}function nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~$a,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Qu(e){if((B&6)!==0)throw Error(x(327));Gn();var t=jo(e,0);if((t&1)===0)return Le(e,re()),null;var n=ii(e,t);if(e.tag!==0&&n===2){var r=Rl(e);r!==0&&(t=r,n=ra(e,r))}if(n===1)throw n=Yr,vn(e,0),Wt(e,t),Le(e,re()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Re,Nt),Le(e,re()),null}function ja(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(nr=re()+500,pi&&an())}}function Sn(e){Kt!==null&&Kt.tag===0&&(B&6)===0&&Gn();var t=B;B|=1;var n=Xe.transition,r=H;try{if(Xe.transition=null,H=1,e)return e()}finally{H=r,Xe.transition=n,B=t,(B&6)===0&&an()}}function Ba(){$e=Hn.current,X(Hn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:er(),X(Te),X(ke),Ta();break;case 5:Pa(r);break;case 4:er();break;case 13:X(J);break;case 19:X(J);break;case 10:Ea(r.type._context);break;case 22:case 23:Ba()}n=n.return}if(de=e,ie=e=tn(e.current,null),me=$e=t,ue=0,Yr=null,$a=gi=kn=0,Re=Pr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function Id(e,t){do{var n=ie;try{if(Ca(),To.current=ti,ei){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ei=!1}if(wn=0,ce=se=ee=null,zr=!1,Wr=0,Fa.current=null,n===null||n.return===null){ue=1,Yr=t,ie=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Lu(l);if(g!==null){g.flags&=-257,Mu(g,l,a,i,t),g.mode&1&&Du(i,u,t),t=g,s=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(s),t.updateQueue=b}else v.add(s);break e}else{if((t&1)===0){Du(i,u,t),Ha();break e}s=Error(x(426))}}else if(Z&&a.mode&1){var E=Lu(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Mu(E,l,a,i,t),Sa(tr(s,a));break e}}i=s=tr(s,a),ue!==4&&(ue=2),Pr===null?Pr=[i]:Pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=xd(i,s,t);Eu(i,d);break e;case 1:a=s;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jt===null||!Jt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=wd(i,a,t);Eu(i,y);break e}}i=i.return}while(i!==null)}Ud(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Fd(){var e=ni.current;return ni.current=ti,e===null?ti:e}function Ha(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||(kn&268435455)===0&&(gi&268435455)===0||Wt(de,me)}function ii(e,t){var n=B;B|=2;var r=Fd();(de!==e||me!==t)&&(Nt=null,vn(e,t));do try{rh();break}catch(o){Id(e,o)}while(!0);if(Ca(),B=n,ni.current=r,ie!==null)throw Error(x(261));return de=null,me=0,ue}function rh(){for(;ie!==null;)$d(ie)}function oh(){for(;ie!==null&&!Tf();)$d(ie)}function $d(e){var t=Bd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Ud(e):ie=t,Fa.current=null}function Ud(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Xm(n,t,$e),n!==null){ie=n;return}}else{if(n=qm(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function fn(e,t,n){var r=H,o=Xe.transition;try{Xe.transition=null,H=1,ih(e,t,n,r)}finally{Xe.transition=o,H=r}return null}function ih(e,t,n,r){do Gn();while(Kt!==null);if((B&6)!==0)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jf(e,i),e===de&&(ie=de=null,me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Eo||(Eo=!0,Hd(Uo,function(){return Gn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var l=H;H=1;var a=B;B|=4,Fa.current=null,Jm(e,n),Md(n,e),_m(Al),Bo=!!Ml,Al=Ml=null,e.current=n,eh(n,e,o),Df(),B=a,H=l,Xe.transition=i}else e.current=n;if(Eo&&(Eo=!1,Kt=e,oi=o),i=e.pendingLanes,i===0&&(Jt=null),Af(n.stateNode,r),Le(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ri)throw ri=!1,e=ta,ta=null,e;return(oi&1)!==0&&e.tag!==0&&Gn(),i=e.pendingLanes,(i&1)!==0?e===na?Tr++:(Tr=0,na=e):Tr=0,an(),null}function Gn(){if(Kt!==null){var e=xc(oi),t=Xe.transition,n=H;try{if(Xe.transition=null,H=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,oi=0,(B&6)!==0)throw Error(x(331));var o=B;for(B|=4,C=e.current;C!==null;){var i=C,l=i.child;if((C.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:Rr(8,f,i)}var h=f.child;if(h!==null)h.return=f,C=h;else for(;C!==null;){f=C;var m=f.sibling,g=f.return;if(Td(f),f===u){C=null;break}if(m!==null){m.return=g,C=m;break}C=g}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}C=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){l=C;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,C=p;else e:for(l=c;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:hi(9,a)}}catch(S){ne(a,a.return,S)}if(a===l){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(B=o,an(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{H=n,Xe.transition=t}}return!1}function Ku(e,t,n){t=tr(n,t),t=xd(e,t,1),e=Zt(e,t,1),t=_e(),e!==null&&(Gr(e,1,t),Le(e,t))}function ne(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=tr(n,e),e=wd(t,e,1),t=Zt(t,e,1),e=_e(),t!==null&&(Gr(t,1,e),Le(t,e));break}}t=t.return}}function lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-Ua?vn(e,0):$a|=n),Le(e,t)}function jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=po,po<<=1,(po&130023424)===0&&(po=4194304)));var n=_e();e=Tt(e,t),e!==null&&(Gr(e,t,n),Le(e,n))}function ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function sh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),jd(e,n)}var Bd;Bd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pe=!1,Gm(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,Z&&(t.flags&1048576)!==0&&Qc(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var o=qn(t,ke.current);Yn(t,n),o=La(null,t,r,e,o,n);var i=Ma();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Ko(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=mi,t.stateNode=o,o._reactInternals=t,Vl(t,r,e,n),t=Kl(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&wa(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ch(r),e=ot(r,e),o){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,ot(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Ql(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Iu(e,t,r,o,n);case 3:e:{if(Cd(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zc(e,t),Zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(x(423)),t),t=Fu(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(x(424)),t),t=Fu(e,t,r,n,o);break e}else for(Ue=qt(t.stateNode.containerInfo.firstChild),je=t,Z=!0,lt=null,n=Xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=Dt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Jc(t),e===null&&jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ol(r,o)?l=null:i!==null&&Ol(r,i)&&(t.flags|=32),Nd(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Ed(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Au(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(Xo,r._currentValue),r._currentValue=l,i!==null)if(ut(i.value,l)){if(i.children===o.children&&!Te.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=zt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Bl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Bl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yn(t,n),o=qe(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=ot(r,t.pendingProps),o=ot(r.type,o),Ou(e,t,r,o,n);case 15:return kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Lo(e,t),t.tag=1,De(r)?(e=!0,Ko(t)):e=!1,Yn(t,n),yd(t,r,o),Vl(t,r,o,n),Kl(null,t,r,!0,e,n);case 19:return _d(e,t,n);case 22:return Sd(e,t,n)}throw Error(x(156,t.tag))};function Hd(e,t){return gc(e,t)}function uh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new uh(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ch(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===ca)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Va(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return bn(n.children,o,i,t);case sa:l=8,o|=8;break;case ml:return e=Ge(12,n,t,o|2),e.elementType=ml,e.lanes=i,e;case hl:return e=Ge(13,n,t,o),e.elementType=hl,e.lanes=i,e;case gl:return e=Ge(19,n,t,o),e.elementType=gl,e.lanes=i,e;case Ju:return vi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qu:l=10;break e;case Zu:l=9;break e;case ua:l=11;break e;case ca:l=14;break e;case Bt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Ju,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wa(e,t,n,r,o,i,l,a,s){return e=new dh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function ph(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vd(e){if(!e)return rn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(De(n))return Vc(e,n,t)}return t}function Wd(e,t,n,r,o,i,l,a,s){return e=Wa(n,r,!0,e,o,i,l,a,s),e.context=Vd(null),n=e.current,r=_e(),o=en(n),i=zt(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,Gr(e,o,r),Le(e,r),e}function bi(e,t,n,r){var o=t.current,i=_e(),l=en(o);return n=Vd(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,l),e!==null&&(st(e,o,l,i),Po(e,o,l)),l}function li(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qa(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function fh(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}yi.prototype.render=Ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));bi(e,t,null,null)};yi.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){bi(null,e,null,null)}),t[Pt]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Cc(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function mh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=li(l);i.call(u)}}var l=Wd(t,r,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=l,e[Pt]=l.current,Ur(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=li(s);a.call(u)}}var s=Wa(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=s,e[Pt]=s.current,Ur(e.nodeType===8?e.parentNode:e),Sn(function(){bi(t,s,n,r)}),s}function wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=li(l);a.call(s)}}bi(t,l,e,o)}else l=mh(n,t,e,o,r);return li(l)}wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(fa(t,n|1),Le(t,re()),(B&6)===0&&(nr=re()+500,an()))}break;case 13:Sn(function(){var r=Tt(e,1);if(r!==null){var o=_e();st(r,e,1,o)}}),Qa(e,1)}};ma=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=_e();st(t,e,134217728,n)}Qa(e,134217728)}};kc=function(e){if(e.tag===13){var t=en(e),n=Tt(e,t);if(n!==null){var r=_e();st(n,e,t,r)}Qa(e,t)}};Sc=function(){return H};Nc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};El=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(x(90));tc(r),yl(r,o)}}}break;case"textarea":rc(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};cc=ja;dc=Sn;var hh={usingClientEntryPoint:!1,Events:[qr,In,di,sc,uc,ja]},vr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mc(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||fh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(br=__REACT_DEVTOOLS_GLOBAL_HOOK__,!br.isDisabled&&br.supportsFiber))try{ai=br.inject(gh),bt=br}catch{}var br;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(t))throw Error(x(200));return ph(e,t,null,n)};Ve.createRoot=function(e,t){if(!Ya(e))throw Error(x(299));var n=!1,r="",o=Qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wa(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Ka(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=mc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Sn(e)};Ve.hydrate=function(e,t,n){if(!xi(t))throw Error(x(200));return wi(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Ya(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Qd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wd(t,null,e,1,n??null,o,!1,i,l),e[Pt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yi(t)};Ve.render=function(e,t,n){if(!xi(t))throw Error(x(200));return wi(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!xi(e))throw Error(x(40));return e._reactRootContainer?(Sn(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Ve.unstable_batchedUpdates=ja;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return wi(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426"});var Xd=St((Kh,Gd)=>{"use strict";function Yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)}catch(e){console.error(e)}}Yd(),Gd.exports=Kd()});var Zd=St(Ga=>{"use strict";var qd=Xd();Ga.createRoot=qd.createRoot,Ga.hydrateRoot=qd.hydrateRoot;var Yh});var op=St(ki=>{"use strict";var xh=Fe(),wh=Symbol.for("react.element"),kh=Symbol.for("react.fragment"),Sh=Object.prototype.hasOwnProperty,Nh=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ch={key:!0,ref:!0,__self:!0,__source:!0};function rp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Sh.call(t,r)&&!Ch.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wh,type:e,key:i,ref:l,props:o,_owner:Nh.current}}ki.Fragment=kh;ki.jsx=rp;ki.jsxs=rp});var V=St((Jh,ip)=>{"use strict";ip.exports=op()});var T=F(Fe());var Me=F(Fe(),1),Jd=F(Zd(),1),ep=Me.createContext(null);function vh(){let e=Me.useContext(ep);if(!e)throw new Error("RenderContext not found");return e}function bh(){return vh().model}function pe(e){let t=bh(),n=Me.useSyncExternalStore(o=>(t.on(`change:${e}`,o),()=>t.off(`change:${e}`,o)),()=>t.get(e)),r=Me.useCallback(o=>{t.set(e,typeof o=="function"?o(t.get(e)):o),t.save_changes()},[t,e]);return[n,r]}function tp(e){return({el:t,model:n,experimental:r})=>{let o=Jd.createRoot(t);return o.render(Me.createElement(Me.StrictMode,null,Me.createElement(ep.Provider,{value:{model:n,experimental:r}},Me.createElement(e)))),()=>o.unmount()}}var wt=F(Fe());var np=`/* Rule builder widget \u2014 histogram-first (Variation B), evolved from rs-/rd- DNA */

.rb-root {
    --rb-border: #e1e4e8;
    --rb-muted: #f6f8fa;
    --rb-text: #24292e;
    --rb-subtle: #6a737d;
    --rb-empty: #ebedf0;
    --rb-blue: #0969da;
    --rb-blue-soft: rgba(9, 105, 218, 0.08);
    --rb-green: #2da44e;
    --rb-red: #cf222e;
    --rb-amber: #9a6700;
    --rb-amber-bg: #fff8c5;
    --rb-hist: #8bb8ec;
    --rb-hist-pos: #2ea043;
    --rb-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: var(--rb-text);
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 640px;
    max-height: 80vh;
    overflow: hidden;
}

.rb-root *, .rb-root *::before, .rb-root *::after { box-sizing: border-box; }

.rb-root button { font-family: inherit; }

/* ---------- header ---------- */

.rb-header {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--rb-border);
    flex: none;
}

.rb-title { font-size: 14px; font-weight: 700; }

.rb-outcome {
    font-family: var(--rb-mono);
    font-size: 11px;
    white-space: nowrap;
    background: var(--rb-blue-soft);
    color: var(--rb-blue);
    border: 1px solid rgba(9, 105, 218, 0.25);
    border-radius: 4px;
    padding: 2px 7px;
}

.rb-header-hint {
    margin-left: auto;
    font-size: 11px;
    color: var(--rb-subtle);
}

.rb-legend {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--rb-subtle);
    white-space: nowrap;
}

.rb-legend i {
    width: 9px;
    height: 9px;
    border-radius: 2px;
    flex: none;
}

.rb-legend .rb-legend-pos { background: var(--rb-hist-pos); }
.rb-legend .rb-legend-all { background: var(--rb-hist); }

/* ---------- attribute importance toggle ---------- */

.rb-impact-btn {
    align-self: center;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: none;
    padding: 5px 10px;
    font-size: 11.5px;
    font-weight: 600;
    color: var(--rb-subtle);
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
}

.rb-impact-btn:hover:not(:disabled) { color: var(--rb-text); background: var(--rb-muted); }
.rb-impact-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.rb-impact-btn.rb-on {
    color: var(--rb-blue);
    background: var(--rb-blue-soft);
    border-color: rgba(9, 105, 218, 0.35);
}

/* ---------- info tip ---------- */

.rb-info {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}

.rb-info-btn {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid var(--rb-border);
    background: white;
    color: var(--rb-subtle);
    font-size: 9px;
    font-weight: 700;
    font-style: italic;
    font-family: Georgia, serif;
    line-height: 1;
    padding: 0;
    cursor: help;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: border-color 100ms ease, color 100ms ease;
}

.rb-info:hover .rb-info-btn, .rb-info-btn:focus { border-color: var(--rb-blue); color: var(--rb-blue); outline: none; }

.rb-info-pop {
    position: absolute;
    top: calc(100% + 6px);
    left: -8px;
    width: 218px;
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    box-shadow: 0 4px 14px rgba(27, 31, 36, 0.16);
    padding: 8px 10px;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.45;
    color: var(--rb-text);
    text-transform: none;
    letter-spacing: 0;
    z-index: 20;
    display: none;
    text-wrap: pretty;
}

.rb-info:hover .rb-info-pop, .rb-info-btn:focus + .rb-info-pop { display: block; }

.rb-info-right .rb-info-pop { left: auto; right: -8px; }

/* ---------- body layout ---------- */

.rb-body {
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
}

/* ---------- attribute rail ---------- */

.rb-rail {
    /* Width is driven inline by the splitter; this is the initial value. */
    width: 232px;
    flex: none;
    min-width: 0;
    border-right: 1px solid var(--rb-border);
    background: var(--rb-muted);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.rb-rail-head {
    flex: none;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 10px 12px 6px;
    font-size: 11px;
    font-weight: 600;
    color: var(--rb-subtle);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.rb-rail-head small {
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
    font-size: 10px;
}

/* ---------- rail toolbar: search, grouping, filters ---------- */

.rb-rail-toolbar {
    flex: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 10px 8px;
    border-bottom: 1px solid var(--rb-border);
}

.rb-rail-search-wrap { position: relative; display: flex; }

.rb-rail-search {
    width: 100%;
    padding: 5px 22px 5px 8px;
    font-size: 12px;
    font-family: inherit;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    color: var(--rb-text);
    background: white;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
}

.rb-rail-search::-webkit-search-cancel-button { display: none; }
.rb-rail-search:focus { border-color: var(--rb-blue); box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.15); }

.rb-rail-search-clear {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 22px;
    border: none;
    background: none;
    color: var(--rb-subtle);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
}

.rb-rail-search-clear:hover { color: var(--rb-text); }

/* Wraps rather than overflows: at the narrowest rail width the segmented
   control drops onto its own line instead of spilling past the rail edge. */
.rb-rail-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.rb-rail-row .rb-seg { flex: 1 1 140px; min-width: 0; }
.rb-rail-row .rb-seg button { min-width: 0; }

.rb-rail-label {
    flex: none;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: var(--rb-subtle);
}

.rb-rail-filter-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    background: white;
    color: var(--rb-subtle);
    font-size: 11px;
    font-weight: 600;
    padding: 3px 7px;
    cursor: pointer;
}

.rb-rail-filter-btn:hover, .rb-rail-filter-btn.rb-on { color: var(--rb-text); border-color: var(--rb-blue); }

.rb-rail-filter-badge {
    font-family: var(--rb-mono);
    font-size: 9px;
    line-height: 1;
    padding: 2px 4px;
    border-radius: 8px;
    background: var(--rb-blue);
    color: white;
}

.rb-rail-count {
    margin-left: auto;
    font-size: 10px;
    color: var(--rb-subtle);
    white-space: nowrap;
}

.rb-rail-panel {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 8px;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    background: white;
    /* Rows wrap as the rail narrows, so the panel has to be capped or it pushes
       the attribute list out of the (overflow-hidden) rail entirely. */
    max-height: 260px;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: #d0d7de transparent;
}

.rb-rail-slider { flex: 1; min-width: 0; accent-color: var(--rb-blue); }

.rb-rail-value {
    flex: none;
    font-family: var(--rb-mono);
    font-size: 10px;
    color: var(--rb-subtle);
}

.rb-rail-check {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--rb-subtle);
    cursor: pointer;
}

.rb-rail-check input { accent-color: var(--rb-blue); margin: 0; }

.rb-rail-facet { display: flex; flex-direction: column; gap: 4px; }

.rb-chip-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
    max-height: 110px;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: #d0d7de transparent;
}

.rb-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    min-width: 0;
    border: 1px solid var(--rb-border);
    border-radius: 10px;
    background: var(--rb-muted);
    color: var(--rb-subtle);
    font-size: 10.5px;
    padding: 2px 7px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
}

/* An activity name can be far wider than the rail \u2014 truncate the label, never
   the count (the full name is in the chip's own tooltip). */
.rb-chip-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }

.rb-chip:hover { color: var(--rb-text); border-color: var(--rb-blue); }

.rb-chip.rb-on {
    background: var(--rb-blue-soft);
    border-color: var(--rb-blue);
    color: var(--rb-blue);
    font-weight: 600;
}

.rb-chip-n { flex: none; font-family: var(--rb-mono); font-size: 9px; opacity: 0.7; }

.rb-rail-reset {
    align-self: flex-start;
    border: none;
    background: none;
    padding: 0;
    color: var(--rb-blue);
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
}

/* ---------- rail list ---------- */

.rb-rail-list {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px 10px 12px;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: #d0d7de transparent;
}

.rb-rail-list::-webkit-scrollbar { width: 6px; }
.rb-rail-list::-webkit-scrollbar-thumb { background: #d0d7de; border-radius: 3px; }

.rb-rail-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 16px 8px;
    font-size: 11px;
    color: var(--rb-subtle);
    text-align: center;
}

/* ---------- attribute groups ---------- */

.rb-group { display: flex; flex-direction: column; gap: 6px; }

.rb-group-head {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    border: none;
    background: var(--rb-muted);
    padding: 4px 0;
    font-size: 10.5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: var(--rb-subtle);
    cursor: pointer;
}

.rb-group-head:hover { color: var(--rb-text); }

.rb-group-caret { flex: none; font-size: 9px; }

.rb-group-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}

.rb-group-count {
    margin-left: auto;
    flex: none;
    font-family: var(--rb-mono);
    font-size: 10px;
    font-weight: 400;
    text-transform: none;
}

/* ---------- rail / canvas splitter ---------- */

.rb-splitter {
    /* A 5px hit target straddling the rail's 1px border: the negative margins
       keep it from taking any layout space of its own. */
    flex: none;
    width: 5px;
    margin: 0 -2px;
    position: relative;
    z-index: 2;
    cursor: ew-resize;
    touch-action: none;
    background: transparent;
}

.rb-splitter::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2px;
    right: 2px;
    background: transparent;
    transition: background 120ms ease;
}

.rb-splitter:hover::after,
.rb-splitter:focus-visible::after,
.rb-splitter.rb-dragging::after { background: var(--rb-blue); }

.rb-splitter:focus { outline: none; }

/* The pointer leaves the 5px strip constantly while dragging \u2014 without this the
   cursor flickers and text elsewhere in the widget gets selected. */
.rb-body.rb-resizing, .rb-body.rb-resizing * { cursor: ew-resize !important; user-select: none; }

.rb-attr {
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    padding: 7px 9px;
    cursor: grab;
    user-select: none;
    box-shadow: 0 1px 2px rgba(27, 31, 36, 0.04);
    transition: border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease;
}

.rb-attr:hover {
    border-color: var(--rb-blue);
    box-shadow: 0 2px 6px rgba(27, 31, 36, 0.10);
}

.rb-attr:active { cursor: grabbing; }

.rb-attr.rb-used {
    opacity: 0.5;
    cursor: default;
    box-shadow: none;
}

.rb-attr.rb-used:hover { border-color: var(--rb-border); }

/* Forbidden outranks used: the row stays legible and in place, but reads as
   struck from the search rather than merely spent. */
.rb-attr.rb-forbidden {
    opacity: 1;
    cursor: not-allowed;
    background: rgba(207, 34, 46, 0.04);
    border-color: rgba(207, 34, 46, 0.28);
    box-shadow: none;
}

.rb-attr.rb-forbidden:hover { border-color: rgba(207, 34, 46, 0.28); box-shadow: none; }

.rb-attr.rb-forbidden .rb-attr-name {
    color: var(--rb-red);
    text-decoration: line-through;
    font-weight: 500;
}

.rb-attr.rb-forbidden .rb-typebadge {
    background: rgba(207, 34, 46, 0.1);
    color: var(--rb-red);
    border-color: rgba(207, 34, 46, 0.2);
}

.rb-attr-unforbid {
    flex: none;
    border: 1px solid rgba(207, 34, 46, 0.3);
    border-radius: 4px;
    background: white;
    color: var(--rb-red);
    font-size: 11px;
    line-height: 1;
    padding: 3px 5px;
    cursor: pointer;
    transition: background 100ms ease;
}

.rb-attr-unforbid:hover { background: rgba(207, 34, 46, 0.08); }

.rb-attr-name {
    font-weight: 600;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
}

.rb-attr-check {
    color: var(--rb-green);
    font-size: 11px;
    font-weight: 700;
    flex: none;
}

.rb-typebadge {
    flex: none;
    font-family: var(--rb-mono);
    font-size: 9px;
    font-weight: 600;
    line-height: 1;
    padding: 3px 4px;
    border-radius: 3px;
    border: 1px solid var(--rb-border);
    color: var(--rb-subtle);
    background: var(--rb-muted);
}

.rb-typebadge.num { color: #8250df; background: rgba(130, 80, 223, 0.08); border-color: rgba(130, 80, 223, 0.25); }
.rb-typebadge.cat { color: #bc4c00; background: rgba(188, 76, 0, 0.08); border-color: rgba(188, 76, 0, 0.25); }

.rb-imp {
    flex: none;
    width: 52px;
    height: 6px;
    background: var(--rb-empty);
    border-radius: 3px;
    overflow: hidden;
}

.rb-imp-fill {
    height: 100%;
    background: var(--rb-blue);
    border-radius: 3px;
    opacity: 0.75;
}

/* ---------- rule canvas ---------- */

.rb-canvas {
    flex: 1;
    min-width: 0;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    overflow-y: auto;
    transition: background 120ms ease;
}

.rb-canvas.rb-dragover { background: var(--rb-blue-soft); }

.rb-dropzone {
    flex: 1;
    align-self: stretch;
    border: 1.5px dashed var(--rb-border);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: var(--rb-subtle);
    font-size: 12px;
    min-height: 180px;
    transition: border-color 120ms ease, color 120ms ease;
}

.rb-canvas.rb-dragover .rb-dropzone { border-color: var(--rb-blue); color: var(--rb-blue); }

.rb-dropzone b { font-size: 13px; }

.rb-and {
    align-self: center;
    font-family: var(--rb-mono);
    font-size: 10px;
    font-weight: 700;
    color: var(--rb-subtle);
    background: var(--rb-muted);
    border: 1px solid var(--rb-border);
    border-radius: 10px;
    padding: 3px 8px;
    letter-spacing: 0.5px;
    flex: none;
}

/* ---------- condition card ---------- */

.rb-cond {
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(27, 31, 36, 0.07);
    width: 268px;
    flex: none;
    overflow: hidden;
    transition: border-color 120ms ease;
}

.rb-cond.rb-pinned { border-color: rgba(154, 103, 0, 0.45); }
.rb-cond.rb-pinned .rb-cond-head { background: rgba(255, 248, 197, 0.6); }
.rb-cond.rb-pred-pinned { border-color: rgba(154, 103, 0, 0.7); }
.rb-cond.rb-pred-pinned .rb-cond-head { background: rgba(255, 248, 197, 0.9); }

.rb-cond-head {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 10px;
    background: var(--rb-muted);
    border-bottom: 1px solid var(--rb-border);
}

.rb-cond-name { font-weight: 600; font-size: 12px; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.rb-remove {
    flex: none;
    border: none;
    background: none;
    color: var(--rb-subtle);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 4px;
}

.rb-remove:hover { color: var(--rb-red); background: rgba(207, 34, 46, 0.08); }

.rb-pin {
    flex: none;
    border: 1px solid transparent;
    background: none;
    font-size: 11px;
    line-height: 1;
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 4px;
    opacity: 0.35;
    transition: opacity 120ms ease, background 120ms ease, border-color 120ms ease;
}

.rb-pin:hover { opacity: 1; background: var(--rb-amber-bg); border-color: rgba(154, 103, 0, 0.3); }
.rb-pin.rb-pinned { opacity: 1; background: var(--rb-amber-bg); border-color: rgba(154, 103, 0, 0.4); }

/* predicate lock: shown only for an already-pinned attribute. Numeric
   conditions expose two (one per bound), each labelled with its side glyph. */
.rb-pin-pred { font-size: 10px; opacity: 0.5; display: inline-flex; align-items: center; gap: 1px; }
.rb-pin-pred.rb-pinned { opacity: 1; }
.rb-pin-side { font-size: 10px; font-weight: 600; color: var(--rb-amber); }

.rb-cond-body { padding: 10px; display: flex; flex-direction: column; gap: 9px; }

/* ---------- removal impact (attribute importance) ---------- */

/* Sits at the foot of a condition card, bleeding into the card's padding so it
   reads as a drawer rather than another control. */
.rb-impact {
    margin: 1px -10px -10px;
    padding: 9px 10px 10px;
    background: var(--rb-muted);
    border-top: 1px solid var(--rb-border);
    transition: opacity 120ms ease;
}

.rb-impact.rb-impact-stale { opacity: 0.4; }

.rb-impact-head {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--rb-subtle);
    margin-bottom: 7px;
}

.rb-impact-values {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-family: var(--rb-mono);
    font-size: 10.5px;
    font-weight: 600;
    margin-bottom: 5px;
    white-space: nowrap;
}

.rb-impact-track {
    width: 100%;
    height: 8px;
    background: var(--rb-empty);
    border-radius: 4px;
    overflow: hidden;
}

.rb-impact-bar { height: 100%; display: flex; transition: width 250ms ease; }

.rb-impact-seg { height: 100%; }

.rb-impact-none { font-size: 11px; color: var(--rb-subtle); }

/* A condition that constrains cases but removes none: the bar is empty, so say why. */
.rb-impact-note { display: block; margin-top: 6px; font-size: 10.5px; color: var(--rb-subtle); }

/* ---------- segmented control ---------- */

.rb-seg {
    display: flex;
    gap: 2px;
    background: var(--rb-muted);
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    padding: 2px;
}

.rb-seg button {
    flex: 1;
    border: 1px solid transparent;
    background: none;
    font-family: var(--rb-mono);
    font-size: 11px;
    font-weight: 600;
    color: var(--rb-subtle);
    padding: 3px 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;
}

.rb-seg button:hover { color: var(--rb-text); }

.rb-seg button.rb-on {
    background: white;
    color: var(--rb-text);
    border-color: var(--rb-border);
    box-shadow: 0 1px 2px rgba(27, 31, 36, 0.08);
}

/* ---------- histogram ---------- */

.rb-hist {
    display: flex;
    align-items: stretch;
    gap: 2px;
    position: relative;
    height: 30px;
}

.rb-bin {
    flex: 1;
    min-width: 2px;
    position: relative;
    border-radius: 2px 2px 0 0;
    background: var(--rb-empty);
    overflow: hidden;
    transition: opacity 120ms ease;
}

.rb-bin .rb-bin-fill {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    background: var(--rb-hist);
    border-radius: 2px 2px 0 0;
}

.rb-bin .rb-bin-pos {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    background: var(--rb-hist-pos);
    border-radius: 2px 2px 0 0;
    z-index: 1;
}

.rb-bin.rb-out { opacity: 0.28; }

.rb-hist-axis {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    font-family: var(--rb-mono);
    color: var(--rb-subtle);
    margin-top: 2px;
}

/* ---------- range hist ---------- */

.rb-rhist-wrap { display: flex; flex-direction: column; gap: 3px; }

.rb-rhist {
    position: relative;
    height: 56px;
    touch-action: none;
    padding-top: 8px;
}

.rb-rhist .rb-hist { height: 100%; }

.rb-rhist-sel {
    position: absolute;
    top: 0; bottom: 0;
    background: rgba(9, 105, 218, 0.07);
    border-left: 2px solid var(--rb-blue);
    border-right: 2px solid var(--rb-blue);
    z-index: 2;
    pointer-events: none;
}

.rb-handle {
    position: absolute;
    top: 0;
    bottom: -2px;
    width: 18px;
    margin-left: -9px;
    z-index: 3;
    cursor: ew-resize;
    display: flex;
    justify-content: center;
}

.rb-handle::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: var(--rb-blue);
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(27, 31, 36, 0.3);
    position: absolute;
    top: -3px;
}

.rb-handle:hover::after, .rb-handle.rb-dragging::after { transform: scale(1.25); }

.rb-pred-readout {
    font-family: var(--rb-mono);
    font-size: 11.5px;
    color: var(--rb-blue);
    background: var(--rb-blue-soft);
    border-radius: 4px;
    padding: 3px 7px;
    align-self: flex-start;
}

.rb-pred-readout.rb-any { color: var(--rb-subtle); background: var(--rb-muted); }

/* ---------- manual boundary inputs ---------- */

.rb-bound-inputs {
    display: flex;
    gap: 8px;
    margin-top: 2px;
}

.rb-bound-field {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
}

.rb-bound-op {
    font-family: var(--rb-mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--rb-subtle);
    flex: none;
}

.rb-bound-input {
    flex: 1;
    min-width: 0;
    width: 100%;
    font-family: var(--rb-mono);
    font-size: 11.5px;
    color: var(--rb-text);
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 4px;
    padding: 3px 6px;
    -moz-appearance: textfield;
}

.rb-bound-input::-webkit-outer-spin-button,
.rb-bound-input::-webkit-inner-spin-button { margin: 0; }

.rb-bound-input:hover { border-color: #d0d7de; }

.rb-bound-input:focus {
    outline: none;
    border-color: var(--rb-blue);
    box-shadow: 0 0 0 2px var(--rb-blue-soft);
}

/* ---------- category bars ---------- */

.rb-cats {
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 148px;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding-right: 2px;
    scrollbar-width: thin;
    scrollbar-color: #d0d7de transparent;
}

.rb-cats::-webkit-scrollbar { width: 6px; }
.rb-cats::-webkit-scrollbar-thumb { background: #d0d7de; border-radius: 3px; }

.rb-cat-row {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 3px 6px;
    cursor: pointer;
    background: none;
    width: 100%;
    text-align: left;
    transition: background 100ms ease, border-color 100ms ease;
}

.rb-cat-row:hover { background: var(--rb-muted); }

.rb-cat-row.rb-sel { border-color: var(--rb-blue); background: var(--rb-blue-soft); }


.rb-cat-label { font-size: 11.5px; width: 86px; flex: none; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.rb-cat-bar { flex: 1; height: 8px; background: var(--rb-empty); border-radius: 4px; overflow: hidden; display: flex; }

.rb-cat-bar .rb-cat-pos { height: 100%; background: var(--rb-hist-pos); }
.rb-cat-bar .rb-cat-rest { height: 100%; background: var(--rb-hist); }

.rb-cat-n { font-size: 10px; font-family: var(--rb-mono); color: var(--rb-subtle); width: 30px; text-align: right; flex: none; }

/* ---------- footer / evaluation ---------- */

.rb-footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--rb-border);
    background: var(--rb-muted);
    flex: none;
    min-height: 64px;
    /* Anchor for the two popovers, which open upward over the canvas. */
    position: relative;
}

.rb-eval-btn {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--rb-green);
    border: 1px solid #2c9248;
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    flex: none;
    transition: background 120ms ease;
}

.rb-eval-btn:hover:not(:disabled) { background: #2c9448; }
.rb-eval-btn:disabled { opacity: 0.45; cursor: not-allowed; }

.rb-eval-btn.rb-stale {
    background: var(--rb-amber-bg);
    color: var(--rb-amber);
    border-color: rgba(154, 103, 0, 0.4);
}

.rb-optimize-btn {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 600;
    color: var(--rb-amber);
    background: var(--rb-amber-bg);
    border: 1px solid rgba(154, 103, 0, 0.4);
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    flex: none;
    transition: background 120ms ease;
}

.rb-optimize-btn:hover:not(:disabled) { background: #fef3c7; }
.rb-optimize-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.rb-optimize-btn.rb-on { background: #fef3c7; border-color: var(--rb-amber); }

.rb-btn-caret { font-size: 9px; margin-left: 5px; opacity: 0.75; }

.rb-clear-btn {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    color: var(--rb-subtle);
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    flex: none;
    transition: background 120ms ease;
}

.rb-clear-btn:hover:not(:disabled) { background: var(--rb-muted); color: var(--rb-text); }
.rb-clear-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.rb-store-btn {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--rb-blue);
    border: 1px solid #0860ca;
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    flex: none;
}

.rb-store-btn:hover:not(:disabled) { background: #0860ca; }
.rb-store-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.rb-footer-right { margin-left: auto; display: flex; align-items: center; gap: 10px; flex: 0 0 auto; }

.rb-note-input {
    width: 220px;
    min-height: 32px;
    max-height: 96px;
    resize: vertical;
    box-sizing: border-box;
    padding: 6px 8px;
    font-size: 12px;
    font-family: inherit;
    line-height: 1.4;
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    color: var(--rb-text, #24292e);
    background: white;
    outline: none;
}

.rb-note-input:focus { border-color: var(--rb-blue); box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.15); }
.rb-note-input:disabled { opacity: 0.5; cursor: not-allowed; background: var(--rb-muted); }

.rb-metrics {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    row-gap: 4px;
    flex: 1 1 auto;
    min-width: 0;
}

.rb-metrics.rb-stale-dim .rb-metric,
.rb-metrics.rb-stale-dim .rb-counts,
.rb-metrics.rb-stale-dim .rb-scope { opacity: 0.4; }

.rb-scope {
    font-size: 11px;
    color: var(--rb-subtle);
    white-space: nowrap;
}

.rb-scope b { font-family: var(--rb-mono); color: var(--rb-text); font-weight: 600; }

.rb-metric { display: flex; flex-direction: column; gap: 2px; width: 110px; }

.rb-metric-top { display: flex; align-items: baseline; gap: 6px; }

.rb-metric-val { font-size: 17px; font-weight: 700; font-variant-numeric: tabular-nums; }

.rb-metric-label { font-size: 11px; color: var(--rb-subtle); font-weight: 600; }

.rb-metric-bar { height: 7px; background: var(--rb-empty); border-radius: 4px; overflow: hidden; }

.rb-metric-fill { height: 100%; border-radius: 4px; transition: width 250ms ease; }

.rb-counts { display: flex; gap: 5px; }

.rb-count {
    font-family: var(--rb-mono);
    font-size: 10.5px;
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid var(--rb-border);
    background: white;
    color: var(--rb-subtle);
    white-space: nowrap;
}

.rb-count b { color: var(--rb-text); font-weight: 600; }

.rb-stale-badge {
    font-size: 11px;
    font-weight: 600;
    color: var(--rb-amber);
    background: var(--rb-amber-bg);
    border: 1px solid rgba(154, 103, 0, 0.35);
    border-radius: 4px;
    padding: 3px 8px;
    white-space: nowrap;
}

.rb-noeval { font-size: 12px; color: var(--rb-subtle); }

.rb-toast {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--rb-green);
    background: rgba(45, 164, 78, 0.1);
    border: 1px solid rgba(45, 164, 78, 0.35);
    border-radius: 4px;
    padding: 3px 9px;
    white-space: nowrap;
    animation: rb-toast-in 180ms ease;
}

@keyframes rb-toast-in {
    from { opacity: 0; transform: translateY(3px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ---------- footer popovers (optimizer constraints \xB7 store rule) ---------- */

/* Both open upward from the footer, over the canvas. \`.rb-root\` clips its
   children, so opening downward would put them outside the widget. */
.rb-popover {
    position: absolute;
    bottom: calc(100% + 8px);
    background: white;
    border: 1px solid var(--rb-border);
    border-radius: 8px;
    box-shadow: 0 8px 28px rgba(27, 31, 36, 0.18);
    z-index: 30;
    /* Rounded corners clip their content on x; on y the popover scrolls instead,
       because a long forbidden list would otherwise grow past the top of the
       widget, where \`.rb-root\`'s own overflow would cut it off. */
    overflow: hidden auto;
    max-height: min(500px, 62vh);
    animation: rb-toast-in 140ms ease;
}

.rb-popover-left { left: 16px; width: 420px; }
.rb-popover-right { right: 16px; width: 340px; }

.rb-popover-head {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px 9px;
}

.rb-popover-title { flex: 1; font-size: 12.5px; font-weight: 700; }

.rb-popover-close {
    flex: none;
    border: 0;
    background: none;
    color: var(--rb-subtle);
    font-size: 14px;
    line-height: 1;
    padding: 2px 4px;
    cursor: pointer;
}

.rb-popover-close:hover { color: var(--rb-text); }

.rb-popover-section {
    display: flex;
    gap: 9px;
    align-items: flex-start;
    padding: 10px 12px;
    border-top: 1px solid var(--rb-border);
}

.rb-constraint-glyph { flex: none; font-size: 11px; line-height: 1.5; }

.rb-constraint-glyph.rb-forbid-glyph { color: var(--rb-red); font-size: 12px; }

.rb-constraint-body { flex: 1; min-width: 0; }

.rb-constraint-name { font-size: 12px; font-weight: 650; }

.rb-constraint-value {
    font-family: var(--rb-mono);
    font-size: 11px;
    color: var(--rb-text);
    line-height: 1.45;
    margin-top: 3px;
    word-break: break-word;
}

.rb-constraint-value.rb-empty { font-family: inherit; color: var(--rb-subtle); }

.rb-constraint-where { flex: none; font-size: 10.5px; color: var(--rb-subtle); }

/* ---------- "never use" editor ---------- */

.rb-forbid-section { flex-direction: column; gap: 9px; background: rgba(207, 34, 46, 0.02); }

.rb-forbid-head { display: flex; align-items: center; gap: 9px; width: 100%; }

.rb-forbid-head .rb-constraint-name { flex: 1; }

.rb-forbid-chips { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }

.rb-forbid-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 100%;
    background: rgba(207, 34, 46, 0.06);
    border: 1px solid rgba(207, 34, 46, 0.25);
    border-radius: 999px;
    padding: 3px 5px 3px 9px;
    font-family: var(--rb-mono);
    font-size: 10.5px;
    color: var(--rb-red);
}

.rb-forbid-chip-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.rb-forbid-chip-x {
    flex: none;
    border: 0;
    background: none;
    color: var(--rb-red);
    opacity: 0.6;
    font-size: 12px;
    line-height: 1;
    padding: 0 2px;
    cursor: pointer;
}

.rb-forbid-chip-x:hover { opacity: 1; }

.rb-forbid-add {
    border: 1px dashed var(--rb-border);
    border-radius: 999px;
    background: white;
    color: var(--rb-subtle);
    font-size: 10.5px;
    padding: 4px 11px;
    cursor: pointer;
    transition: border-color 100ms ease, color 100ms ease;
}

.rb-forbid-add:hover, .rb-forbid-add.rb-on { border-color: var(--rb-red); color: var(--rb-red); }

.rb-forbid-search {
    border: 1px solid var(--rb-border);
    border-radius: 6px;
    overflow: hidden;
    background: white;
}

.rb-forbid-search-input {
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid var(--rb-border);
    padding: 7px 9px;
    font-family: inherit;
    font-size: 11.5px;
    color: var(--rb-text);
    outline: none;
}

.rb-forbid-options { max-height: 150px; overflow-y: auto; }

.rb-forbid-option {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    border: 0;
    background: none;
    text-align: left;
    padding: 6px 9px;
    cursor: pointer;
}

.rb-forbid-option:hover { background: var(--rb-muted); }

.rb-forbid-option-name {
    flex: 1;
    min-width: 0;
    font-family: var(--rb-mono);
    font-size: 11px;
    color: var(--rb-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.rb-forbid-option-hint { flex: none; font-size: 10px; color: var(--rb-subtle); }

.rb-forbid-none { padding: 8px 9px; font-size: 11px; color: var(--rb-subtle); }

.rb-forbid-note { font-size: 10.5px; line-height: 1.45; color: var(--rb-subtle); text-wrap: pretty; }

/* ---------- popover footers ---------- */

.rb-popover-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    border-top: 1px solid var(--rb-border);
    background: var(--rb-muted);
}

.rb-popover-scope { font-size: 10.5px; color: var(--rb-subtle); }

.rb-run-btn {
    padding: 6px 13px;
    font-size: 12px;
    font-weight: 600;
    color: var(--rb-amber);
    background: var(--rb-amber-bg);
    border: 1px solid rgba(154, 103, 0, 0.4);
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 120ms ease;
}

.rb-run-btn:hover:not(:disabled) { background: #fef3c7; }
.rb-run-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.rb-store-section { flex-direction: column; gap: 9px; }

/* The note is no longer a fixed-width sliver in the footer \u2014 inside the popover
   it gets the full width and room for a few lines. */
.rb-store-section .rb-note-input { width: 100%; min-height: 64px; max-height: 160px; }

.rb-store-summary {
    font-family: var(--rb-mono);
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--rb-subtle);
    word-break: break-word;
}

.rb-store-foot { justify-content: flex-end; }

.rb-store-confirm {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--rb-blue);
    border: 1px solid #0860ca;
    border-radius: 6px;
    cursor: pointer;
}

.rb-store-confirm:hover { background: #0860ca; }

.rb-constraint-summary {
    font-size: 11px;
    color: var(--rb-subtle);
    white-space: nowrap;
    flex: none;
}

/* Draw mode: the four counts are buttons, and the drawn case opens over the
   canvas like the other two popovers. */
button.rb-count {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-style: dashed;
    cursor: pointer;
}

button.rb-count:disabled {
    cursor: default;
}

.rb-draw-pop {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 16px;
    right: 16px;
    max-width: 640px;
    margin: 0 auto;
    z-index: 30;
}
`;var ct=F(Fe());var We=F(V()),lp="Importance estimates how useful each attribute is for predicting the outcome, derived from a tree-based model trained on the data. Higher = more predictive potential. It is a ranking aid, not a guarantee \u2014 the exact method is still being finalized.";function Si({kind:e}){return(0,We.jsx)("span",{className:`rb-typebadge ${e}`,title:e==="num"?"Numerical":"Categorical",children:e==="num"?"123":"abc"})}function ap({value:e}){return(0,We.jsx)("span",{className:"rb-imp",title:`Importance ${e.toFixed(2)}`,children:(0,We.jsx)("span",{className:"rb-imp-fill",style:{width:`${e*100}%`,display:"block"}})})}function Ni({children:e,align:t,context:n}){return(0,We.jsxs)("span",{className:`rb-info${t==="right"?" rb-info-right":""}`,"data-cd-context":n?"":void 0,children:[(0,We.jsx)("button",{type:"button",className:"rb-info-btn","aria-label":"What does importance mean?",children:"i"}),(0,We.jsx)("span",{className:"rb-info-pop",role:"tooltip",children:e})]})}function sp(){return(0,We.jsxs)("span",{className:"rb-legend","data-cd-context":"",title:"Histogram colors: green = cases where the outcome is positive (rule should catch these), blue = all other cases",children:[(0,We.jsx)("i",{className:"rb-legend-pos"}),"outcome\xA0\u2295",(0,We.jsx)("i",{className:"rb-legend-all"}),"other"]})}function Xa({options:e,value:t,onChange:n}){return(0,We.jsx)("div",{className:"rb-seg",children:e.map(r=>(0,We.jsx)("button",{type:"button",className:t===r.v?"rb-on":"",onClick:()=>n(r.v),children:r.label},r.v))})}var sn=F(V());function Eh(e,t,n){let r=[e.label];if(e.family!=="other"){let o=e.sources.length?` \xB7 ${e.sources.join(", ")}`:"";r.push(`${e.familyLabel}${o}`)}return n?(r.push("Forbidden \u2014 the optimizer will not use it, and it cannot be added by hand"),r.push("\u20E0 to allow it again")):r.push(t?"Already in the rule":"Click or drag to add to the rule"),r.join(`
`)}function Ci({attr:e,used:t,forbidden:n,onAdd:r,onUnforbid:o}){let i=t||n;return(0,sn.jsxs)("div",{className:`rb-attr${t?" rb-used":""}${n?" rb-forbidden":""}`,draggable:!i,onDragStart:i?void 0:l=>{l.dataTransfer.setData("text/plain",e.id),l.dataTransfer.effectAllowed="copy"},onClick:i?void 0:()=>r(e.id),title:Eh(e,t,n),children:[(0,sn.jsx)(Si,{kind:e.kind}),(0,sn.jsx)("span",{className:"rb-attr-name",children:e.label}),n?(0,sn.jsx)("button",{type:"button",className:"rb-attr-unforbid",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${e.label}`,onClick:l=>{l.stopPropagation(),o(e.id)},children:"\u20E0"}):t?(0,sn.jsx)("span",{className:"rb-attr-check",children:"\u2713"}):(0,sn.jsx)(ap,{value:e.importance})]})}var _h="No source",qa={query:"",kind:"all",minImportance:0,hideUsed:!1,families:new Set,sources:new Set};function cp(e){return(e.kind!=="all"?1:0)+(e.minImportance>0?1:0)+(e.hideUsed?1:0)+(e.families.size>0?1:0)+(e.sources.size>0?1:0)}function dp(e,t,n){let r=t.query.trim().toLowerCase(),o=new Set(n);return e.filter(i=>!(r&&!i.label.toLowerCase().includes(r)||t.kind!=="all"&&i.kind!==t.kind||i.importance<t.minImportance||t.hideUsed&&o.has(i.id)||t.families.size>0&&!t.families.has(i.family)||t.sources.size>0&&!i.sources.some(l=>t.sources.has(l))))}function pp(e,t){if(t==="none")return e.length?[{key:"",label:"",attrs:e}]:[];let n=new Map,r=(o,i,l)=>{let a=n.get(o);a?a.attrs.push(l):n.set(o,{key:o,label:i,attrs:[l]})};for(let o of e)if(t==="family")r(o.family,o.familyLabel,o);else if(o.sources.length===0)r("",_h,o);else for(let i of o.sources)r(i,i,o);return[...n.values()].sort((o,i)=>{if(o.key==="")return 1;if(i.key==="")return-1;let l=up(i.attrs)-up(o.attrs);return l!==0?l:o.label.localeCompare(i.label)})}function up(e){return e.reduce((t,n)=>Math.max(t,n.importance),0)}function Za(e,t){let n=new Map,r=(o,i)=>{let l=n.get(o);l?l.count+=1:n.set(o,{key:o,label:i,count:1})};for(let o of e)if(t==="family")r(o.family,o.familyLabel);else for(let i of o.sources)r(i,i);return[...n.values()].sort((o,i)=>i.count-o.count||o.label.localeCompare(i.label))}var R=F(V()),zh=[{v:"none",label:"none"},{v:"family",label:"family"},{v:"source",label:"source"}],Rh=[{v:"all",label:"all"},{v:"num",label:"123"},{v:"cat",label:"abc"}];function Ja(e,t){let n=new Set(e);return n.delete(t)||n.add(t),n}function fp({label:e,options:t,selected:n,onToggle:r}){return(0,R.jsxs)("div",{className:"rb-rail-facet",children:[(0,R.jsx)("span",{className:"rb-rail-label",children:e}),(0,R.jsx)("div",{className:"rb-chip-list",children:t.map(o=>(0,R.jsxs)("button",{type:"button",className:`rb-chip${n.has(o.key)?" rb-on":""}`,"aria-pressed":n.has(o.key),title:`${o.label} \u2014 ${o.count} attribute${o.count===1?"":"s"}`,onClick:()=>r(o.key),children:[(0,R.jsx)("span",{className:"rb-chip-label",children:o.label}),(0,R.jsx)("span",{className:"rb-chip-n",children:o.count})]},o.key))})]})}function es({attributes:e,usedIds:t,forbidden:n,onAdd:r,onUnforbid:o,width:i}){let[l,a]=(0,ct.useState)(qa),[s,u]=(0,ct.useState)("none"),[f,h]=(0,ct.useState)(new Set),[m,g]=(0,ct.useState)(!1),v=k=>a(M=>({...M,...k})),b=(0,ct.useMemo)(()=>[...e].sort((k,M)=>M.importance-k.importance),[e]),E=(0,ct.useMemo)(()=>dp(b,l,t),[b,l,t]),d=(0,ct.useMemo)(()=>pp(E,s),[E,s]),c=(0,ct.useMemo)(()=>Za(b,"family"),[b]),p=(0,ct.useMemo)(()=>Za(b,"source"),[b]),y=p.length>0||c.length>1,S=cp(l),w=l.query.trim()!=="",N=()=>a(qa);return(0,R.jsxs)("div",{className:"rb-rail",style:{width:i},children:[(0,R.jsxs)("div",{className:"rb-rail-head",children:[(0,R.jsx)("span",{children:"Attributes"}),(0,R.jsxs)("small",{children:["by importance ",(0,R.jsx)(Ni,{align:"right",children:lp})]})]}),(0,R.jsxs)("div",{className:"rb-rail-toolbar",children:[(0,R.jsxs)("div",{className:"rb-rail-search-wrap",children:[(0,R.jsx)("input",{type:"search",className:"rb-rail-search",placeholder:"Search attributes\u2026","aria-label":"Search attributes",value:l.query,onChange:k=>v({query:k.target.value})}),w?(0,R.jsx)("button",{type:"button",className:"rb-rail-search-clear",title:"Clear search","aria-label":"Clear search",onClick:()=>v({query:""}),children:"\xD7"}):null]}),y?(0,R.jsxs)("div",{className:"rb-rail-row",children:[(0,R.jsx)("span",{className:"rb-rail-label",children:"Group"}),(0,R.jsx)(Xa,{options:zh,value:s,onChange:u})]}):null,(0,R.jsxs)("div",{className:"rb-rail-row",children:[(0,R.jsxs)("button",{type:"button",className:`rb-rail-filter-btn${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>g(k=>!k),children:[(0,R.jsx)("span",{className:"rb-group-caret",children:m?"\u25BE":"\u25B8"}),"Filters",S>0?(0,R.jsx)("span",{className:"rb-rail-filter-badge",children:S}):null]}),(0,R.jsxs)("span",{className:"rb-rail-count",children:[E.length," of ",e.length]})]}),m?(0,R.jsxs)("div",{className:"rb-rail-panel",children:[(0,R.jsxs)("div",{className:"rb-rail-row",children:[(0,R.jsx)("span",{className:"rb-rail-label",children:"Type"}),(0,R.jsx)(Xa,{options:Rh,value:l.kind,onChange:k=>v({kind:k})})]}),(0,R.jsxs)("div",{className:"rb-rail-row",children:[(0,R.jsx)("span",{className:"rb-rail-label",children:"Min. imp."}),(0,R.jsx)("input",{type:"range",className:"rb-rail-slider",min:0,max:1,step:.05,value:l.minImportance,"aria-label":"Minimum importance",onChange:k=>v({minImportance:Number(k.target.value)})}),(0,R.jsx)("span",{className:"rb-rail-value",children:l.minImportance.toFixed(2)})]}),(0,R.jsxs)("label",{className:"rb-rail-check",children:[(0,R.jsx)("input",{type:"checkbox",checked:l.hideUsed,onChange:k=>v({hideUsed:k.target.checked})}),"Hide attributes already in the rule"]}),c.length>1?(0,R.jsx)(fp,{label:"Family",options:c,selected:l.families,onToggle:k=>v({families:Ja(l.families,k)})}):null,p.length>0?(0,R.jsx)(fp,{label:"Source",options:p,selected:l.sources,onToggle:k=>v({sources:Ja(l.sources,k)})}):null,S>0||w?(0,R.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:N,children:"Reset filters"}):null]}):null]}),(0,R.jsx)("div",{className:"rb-rail-list",children:E.length===0?(0,R.jsx)("div",{className:"rb-rail-empty",children:e.length===0?"No attributes available.":(0,R.jsxs)(R.Fragment,{children:["No attribute matches these filters.",(0,R.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:N,children:"Reset filters"})]})}):s==="none"?E.map(k=>(0,R.jsx)(Ci,{attr:k,used:t.includes(k.id),forbidden:n.has(k.id),onAdd:r,onUnforbid:o},k.id)):d.map(k=>{let M=`${s}|${k.key}`,z=!w&&f.has(M);return(0,R.jsxs)("div",{className:"rb-group",children:[(0,R.jsxs)("button",{type:"button",className:"rb-group-head","aria-expanded":!z,onClick:()=>h(U=>Ja(U,M)),children:[(0,R.jsx)("span",{className:"rb-group-caret",children:z?"\u25B8":"\u25BE"}),(0,R.jsx)("span",{className:"rb-group-label",title:k.label,children:k.label}),(0,R.jsx)("span",{className:"rb-group-count",children:k.attrs.length})]}),z?null:k.attrs.map(U=>(0,R.jsx)(Ci,{attr:U,used:t.includes(U.id),forbidden:n.has(U.id),onAdd:r,onUnforbid:o},`${k.key}|${U.id}`))]},M)})})]})}var zi=F(Fe());function En(e,t,n){return Math.max(t,Math.min(n,e))}function mp(e,t){if(e.isInt)return Math.round(t);let n=e.max-e.min,o=10**(n>=20?0:n>=2?1:2);return Math.round(t*o)/o}function hp(e){if(e.kind==="num")return{attr:e.id,op:"range",lo:e.min,hi:e.max};let t=e.categories[0];return{attr:e.id,op:"==",value:t?t.value:""}}function gp(e,t){return e.filter(n=>t[n.attr]!=null).map(n=>{let r=t[n.attr];if(r.kind!=="num")return n;let o=r;return n.op===">="?{attr:n.attr,op:"range",lo:n.value,hi:o.max}:n.op==="<="?{attr:n.attr,op:"range",lo:o.min,hi:n.value}:n})}function ts(e,t,n){let r=t<=e.min,o=n>=e.max;return r&&o?{text:`${e.id}: any value`,any:!0}:!r&&!o?{text:`${t} \u2264 ${e.id} \u2264 ${n}`,any:!1}:r?{text:`${e.id} \u2264 ${n}`,any:!1}:{text:`${e.id} \u2265 ${t}`,any:!1}}function vp(e,t){if(e.kind==="num"){let{lo:n,hi:r}=ir(e,t),o=e;return ts(o,n??o.min,r??o.max).text}return t.op==="range"?`${e.id}: any value`:`${e.id} ${t.op} ${t.value}`}function Ae(e,t){return`${e}\0${t}`}function ir(e,t){let n,r;if(t.op==="range")n=t.lo,r=t.hi;else if(t.op===">=")n=t.value,r=e.max;else if(t.op==="<=")n=e.min,r=t.value;else return{lo:null,hi:null};return{lo:n>e.min?n:null,hi:r<e.max?r:null}}function Ei(e,t,n,r){let o=[],i=[];for(let l of e){let a=t[l.attr];if(!a)continue;n.has(l.attr)&&o.push(a.label);let s=[];if(a.kind==="num"){let{lo:u,hi:f}=ir(a,l);u!==null&&r.has(Ae(l.attr,"lo"))&&s.push(`\u2265 ${u}`),f!==null&&r.has(Ae(l.attr,"hi"))&&s.push(`\u2264 ${f}`)}else l.op==="=="&&r.has(Ae(l.attr,"val"))&&s.push(`== ${l.value}`);s.length&&i.push(`${a.label} ${s.join(", ")}`)}return{kept:o,held:i}}function ns(e,t,n){let r=t<=e.min,o=n>=e.max;return!r&&!o?{attr:e.id,op:"range",lo:t,hi:n}:r?o?{attr:e.id,op:"range",lo:t,hi:n}:{attr:e.id,op:"<=",value:n}:{attr:e.id,op:">=",value:t}}var yp=F(V()),os=232,_i=160,rs=520,Ph=300,bp=16;function is({width:e,onResize:t,onDraggingChange:n}){let r=(0,zi.useRef)(null),[o,i]=(0,zi.useState)(!1),l=()=>{let u=r.current?.parentElement,f=u?u.getBoundingClientRect().width-Ph:rs;return Math.max(_i,Math.min(rs,f))},a=u=>{u.preventDefault();let f=u.clientX,h=e,m=l();i(!0),n(!0);let g=b=>{t(En(h+b.clientX-f,_i,m))},v=()=>{i(!1),n(!1),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",v)};window.addEventListener("pointermove",g),window.addEventListener("pointerup",v)},s=u=>{let f=u.key==="ArrowLeft"?-bp:u.key==="ArrowRight"?bp:0;f!==0&&(u.preventDefault(),t(En(e+f,_i,l())))};return(0,yp.jsx)("div",{ref:r,className:`rb-splitter${o?" rb-dragging":""}`,role:"separator","aria-orientation":"vertical","aria-label":"Resize the attribute list","aria-valuenow":Math.round(e),"aria-valuemin":_i,"aria-valuemax":rs,tabIndex:0,title:"Drag to resize \xB7 double-click to reset",onPointerDown:a,onDoubleClick:()=>t(os),onKeyDown:s})}var _n=F(Fe());function xp(e){let t=Number(e);return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}function dt(e){let t=Number(e);return Number.isFinite(t)?t:0}function lr(e){let t=Number(e);return Number.isFinite(t)?Math.abs(t)>=1e3?t.toFixed(0):Math.abs(t)>=100?t.toFixed(1):t.toFixed(2):"-"}var le=F(V());function wp({value:e,min:t,max:n,isInt:r,label:o,title:i,onCommit:l}){let[a,s]=(0,_n.useState)(String(e));(0,_n.useEffect)(()=>{s(String(e))},[e]);let u=f=>{let h=Number.parseFloat(f);if(!Number.isFinite(h)){s(String(e));return}l(h)};return(0,le.jsxs)("label",{className:"rb-bound-field",title:i,children:[(0,le.jsx)("span",{className:"rb-bound-op",children:o}),(0,le.jsx)("input",{className:"rb-bound-input",type:"number",inputMode:r?"numeric":"decimal",value:a,min:t,max:n,step:r?1:"any",onChange:f=>s(f.target.value),onBlur:f=>u(f.target.value),onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}})]})}function ls({attr:e,lo:t,hi:n,onChange:r}){let o=(0,_n.useRef)(null),[i,l]=(0,_n.useState)(null),a=e.max-e.min||1,s=g=>(g-e.min)/a*100,u=e.bins.length-1,f=g=>{let v=o.current;if(!v)return e.min;let b=v.getBoundingClientRect(),E=En((g-b.left)/b.width,0,1);return mp(e,e.min+E*a)},h=g=>v=>{v.preventDefault(),l(g);let b=d=>{let c=f(d.clientX);r(g==="lo"?{lo:Math.min(c,n)}:{hi:Math.max(c,t)})},E=()=>{l(null),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",E)};window.addEventListener("pointermove",b),window.addEventListener("pointerup",E)},m=g=>{let v=e.bins[g];if(e.isDiscrete)return`Value ${lr(v.lo)}: Count ${v.n} (exact-value frequency), Positives: ${v.pos}`;let b=g===u?"]":")";return`Bin ${g+1}: [${lr(v.lo)}, ${lr(v.hi)}${b}, Count: ${v.n}, Positives: ${v.pos}`};return(0,le.jsxs)("div",{className:"rb-rhist-wrap",children:[(0,le.jsxs)("div",{className:"rb-rhist",ref:o,children:[(0,le.jsx)("div",{className:"rb-hist",children:e.bins.map((g,v)=>{let b=g.hi<t||g.lo>n,E=e.maxN>0?g.n/e.maxN*100:0,d=e.maxN>0?g.pos/e.maxN*100:0;return(0,le.jsxs)("div",{className:`rb-bin${b?" rb-out":""}`,title:m(v),children:[(0,le.jsx)("div",{className:"rb-bin-fill",style:{height:`${E}%`}}),(0,le.jsx)("div",{className:"rb-bin-pos",style:{height:`${d}%`}})]},v)})}),(0,le.jsx)("div",{className:"rb-rhist-sel",style:{left:`${s(t)}%`,width:`${s(n)-s(t)}%`}}),(0,le.jsx)("div",{className:`rb-handle${i==="lo"?" rb-dragging":""}`,style:{left:`${s(t)}%`},onPointerDown:h("lo"),title:"Drag lower boundary"}),(0,le.jsx)("div",{className:`rb-handle${i==="hi"?" rb-dragging":""}`,style:{left:`${s(n)}%`},onPointerDown:h("hi"),title:"Drag upper boundary"})]}),(0,le.jsxs)("div",{className:"rb-hist-axis",children:[(0,le.jsx)("span",{children:lr(e.min)}),(0,le.jsx)("span",{children:lr(e.max)})]}),(0,le.jsxs)("div",{className:"rb-bound-inputs",children:[(0,le.jsx)(wp,{value:t,min:e.min,max:n,isInt:e.isInt,label:"\u2265",title:"Lower boundary \u2014 type an exact value",onCommit:g=>r({lo:En(g,e.min,n)})}),(0,le.jsx)(wp,{value:n,min:t,max:e.max,isInt:e.isInt,label:"\u2264",title:"Upper boundary \u2014 type an exact value",onCommit:g=>r({hi:En(g,t,e.max)})})]})]})}var Mt=F(V());function as({attr:e,value:t,onChange:n}){return(0,Mt.jsx)("div",{className:"rb-cats",children:e.categories.map(r=>{let o=t===r.value,i=e.maxN>0?r.pos/e.maxN*100:0,l=e.maxN>0?(r.n-r.pos)/e.maxN*100:0;return(0,Mt.jsxs)("button",{type:"button",className:`rb-cat-row${o?" rb-sel":""}`,onClick:()=>n(r.value),title:`${r.value}: ${r.n} cases, ${r.pos} outcome-positive`,children:[(0,Mt.jsx)("span",{className:"rb-cat-label",children:r.value}),(0,Mt.jsxs)("span",{className:"rb-cat-bar",children:[(0,Mt.jsx)("span",{className:"rb-cat-pos",style:{width:`${i}%`}}),(0,Mt.jsx)("span",{className:"rb-cat-rest",style:{width:`${l}%`}})]}),(0,Mt.jsx)("span",{className:"rb-cat-n",children:r.n})]},r.value)})})}var xt=F(Fe());var un=F(Fe());var I=F(V());function ss({attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,onClose:s,onRun:u,canRun:f,isOptimizing:h}){let[m,g]=(0,un.useState)(!1),[v,b]=(0,un.useState)(""),{kept:E,held:d}=(0,un.useMemo)(()=>Ei(n,t,r,o),[n,t,r,o]),c=(0,un.useMemo)(()=>new Set(n.map(w=>w.attr)),[n]),p=(0,un.useMemo)(()=>{let w=v.trim().toLowerCase();return e.filter(N=>!i.has(N.id)&&(!w||N.label.toLowerCase().includes(w)))},[e,i,v]),y=(0,un.useMemo)(()=>e.filter(w=>i.has(w.id)),[e,i]),S=w=>{l(w),b(""),g(!1)};return(0,I.jsxs)("div",{className:"rb-popover rb-popover-left",role:"dialog","aria-label":"Optimizer constraints",children:[(0,I.jsxs)("div",{className:"rb-popover-head",children:[(0,I.jsx)("span",{className:"rb-popover-title",children:"Optimize under these constraints"}),(0,I.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:s,children:"\xD7"})]}),(0,I.jsxs)("div",{className:"rb-popover-section",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F4CC}"}),(0,I.jsxs)("div",{className:"rb-constraint-body",children:[(0,I.jsx)("div",{className:"rb-constraint-name",children:"Keep in the rule"}),(0,I.jsx)("div",{className:`rb-constraint-value${E.length?"":" rb-empty"}`,children:E.length?E.join(", "):"nothing pinned \u2014 the optimizer may drop any condition"})]}),(0,I.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,I.jsxs)("div",{className:"rb-popover-section",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F512}"}),(0,I.jsxs)("div",{className:"rb-constraint-body",children:[(0,I.jsx)("div",{className:"rb-constraint-name",children:"Hold these boundaries"}),(0,I.jsx)("div",{className:`rb-constraint-value${d.length?"":" rb-empty"}`,children:d.length?d.join(" \xB7 "):"no boundary held \u2014 all ranges may move"})]}),(0,I.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,I.jsxs)("div",{className:"rb-popover-section rb-forbid-section",children:[(0,I.jsxs)("div",{className:"rb-forbid-head",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph rb-forbid-glyph",children:"\u20E0"}),(0,I.jsx)("span",{className:"rb-constraint-name",children:"Never use"}),(0,I.jsxs)("span",{className:"rb-constraint-where",children:[y.length," ",y.length===1?"attribute":"attributes"]})]}),(0,I.jsxs)("div",{className:"rb-forbid-chips",children:[y.map(w=>(0,I.jsxs)("span",{className:"rb-forbid-chip",title:w.label,children:[(0,I.jsx)("span",{className:"rb-forbid-chip-name",children:w.label}),(0,I.jsx)("button",{type:"button",className:"rb-forbid-chip-x",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${w.label}`,onClick:()=>a(w.id),children:"\xD7"})]},w.id)),(0,I.jsx)("button",{type:"button",className:`rb-forbid-add${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>g(w=>!w),children:"\uFF0B add attribute"})]}),m?(0,I.jsxs)("div",{className:"rb-forbid-search",children:[(0,I.jsx)("input",{type:"search",className:"rb-forbid-search-input",placeholder:"Search attributes to forbid\u2026","aria-label":"Search attributes to forbid",autoFocus:!0,value:v,onChange:w=>b(w.target.value)}),(0,I.jsx)("div",{className:"rb-forbid-options",children:p.length===0?(0,I.jsx)("div",{className:"rb-forbid-none",children:"No matches."}):p.map(w=>(0,I.jsxs)("button",{type:"button",className:"rb-forbid-option",onClick:()=>S(w.id),children:[(0,I.jsx)("span",{className:"rb-forbid-option-name",children:w.label}),(0,I.jsx)("span",{className:"rb-forbid-option-hint",children:c.has(w.id)?"in rule \u2014 will be removed":`importance ${w.importance.toFixed(2)}`})]},w.id))})]}):null]}),(0,I.jsxs)("div",{className:"rb-popover-foot",children:[(0,I.jsx)("span",{className:"rb-popover-scope",children:"Applies to this rule only"}),(0,I.jsx)("button",{type:"button",className:"rb-run-btn",disabled:!f||h,title:f?"Re-derive the rule with RIPPER under these constraints":"Pin an attribute or forbid one first \u2014 an unconstrained run is just rule induction",onClick:u,children:h?"\u23F3 Optimizing\u2026":"\u26A1 Run optimize"})]})]})}var kp=F(Fe());var pt=F(V());function us({attrMap:e,conds:t,note:n,onNoteChange:r,onClose:o,onStore:i}){let l=(0,kp.useMemo)(()=>{let a=t.map(s=>{let u=e[s.attr];return u?vp(u,s):null}).filter(s=>s!==null);return a.length?a.join("  AND  "):"No conditions yet."},[t,e]);return(0,pt.jsxs)("div",{className:"rb-popover rb-popover-right",role:"dialog","aria-label":"Store this rule",children:[(0,pt.jsxs)("div",{className:"rb-popover-head",children:[(0,pt.jsx)("span",{className:"rb-popover-title",children:"Store this rule"}),(0,pt.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:o,children:"\xD7"})]}),(0,pt.jsxs)("div",{className:"rb-popover-section rb-store-section",children:[(0,pt.jsx)("div",{className:"rb-store-summary",children:l}),(0,pt.jsx)("textarea",{className:"rb-note-input",value:n,onChange:a=>r(a.target.value),placeholder:"Note (optional) \u2014 why store this rule?",rows:3,autoFocus:!0})]}),(0,pt.jsx)("div",{className:"rb-popover-foot rb-store-foot",children:(0,pt.jsx)("button",{type:"button",className:"rb-store-confirm",onClick:i,children:"Store rule"})})]})}var At={blue:"#0969da",green:"#2da44e",hist:"#8bb8ec",histPos:"#2ea043",tpRemoved:"#f66a0a",fpRemoved:"#0366d6"};var q=F(Fe());var Sp=`/* Shared by every widget that can draw a case (common/caseDraw.tsx). */

/* Dim only unrelated regions, never an ancestor of a target or popover. */
[data-cd-mode] [data-cd-context] {
    opacity: 0.32;
}

.cd-hint {
    font-size: 12px;
    color: #57606a;
}

.cd-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 11px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    background: #ffffff;
    color: #57606a;
    cursor: pointer;
    white-space: nowrap;
}

.cd-toggle:hover:not(:disabled) {
    border-color: #57606a;
    color: #24292f;
}

.cd-toggle:disabled {
    opacity: 0.45;
    cursor: default;
}

.cd-toggle--on,
.cd-toggle--on:hover:not(:disabled) {
    border-color: #0969da;
    background: #ddf4ff;
    color: #0550ae;
    font-weight: 600;
}

.cd-toggle--compact {
    padding: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
}

.cd-dice {
    flex: none;
}

/* A count that hands out a case when clicked. */
.cd-target {
    font-family: inherit;
    border: 1px dashed #afb8c1;
    border-radius: 5px;
    background: transparent;
    cursor: pointer;
}

.cd-target:hover:not(:disabled) {
    border-color: #0969da;
    background: #f1f8ff;
}

.cd-target:disabled {
    cursor: default;
    opacity: 0.5;
}

.cd-target--on,
.cd-target--on:hover:not(:disabled) {
    border-color: #0969da;
    background: #ddf4ff;
}

.cd-pop {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 10px;
    box-sizing: border-box;
    padding: 8px 10px 8px 12px;
    border: 1px solid #d0d7de;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 6px 18px rgba(31, 35, 40, 0.12);
    font-size: 12px;
    color: #24292f;
    white-space: normal;
    text-align: left;
}

.cd-chip {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    border-radius: 10px;
    padding: 2px 8px;
    white-space: nowrap;
}

.cd-id {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 16px;
    font-weight: 600;
    user-select: all;
    overflow-wrap: anywhere;
}

.cd-pos {
    color: #57606a;
}

.cd-tag {
    font-size: 11px;
    color: #57606a;
    border: 1px solid #d0d7de;
    border-radius: 10px;
    padding: 1px 7px;
    white-space: nowrap;
}

.cd-error {
    color: #9a6700;
}

.cd-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
}

.cd-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid #d0d7de;
    background: #f6f8fa;
    font-family: inherit;
    font-size: 12px;
    color: #24292f;
    cursor: pointer;
    white-space: nowrap;
}

.cd-btn:hover:not(:disabled) {
    border-color: #57606a;
}

.cd-btn:disabled {
    opacity: 0.5;
    cursor: default;
}

.cd-close {
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #57606a;
    font-size: 13px;
    cursor: pointer;
}

.cd-close:hover {
    background: #f6f8fa;
    color: #24292f;
}
`;var W=F(V()),Dh={tp:"Explained (TP)",fp:"Wrongly claimed (FP)",fn:"Remaining (FN)",tn:"Left alone (TN)"};function Np(e,t){return!!e&&!!t&&e.category===t.category&&e.ruleId===t.ruleId}function Cp(e,t,n=null){return Np(e.target,{category:t,ruleId:n})}function Ep(e,t=!0){let[n,r]=(0,q.useState)(!1),o=(0,q.useRef)(null),i=(0,q.useCallback)(()=>{o.current?.querySelector(".cd-toggle")?.focus()},[]),l=(0,q.useCallback)(()=>{let f=o.current?.getRootNode(),h=f instanceof ShadowRoot?f.activeElement:o.current?.ownerDocument.activeElement,m=o.current?.hasAttribute("data-cd-mode")&&!!h&&o.current.contains(h);r(!1),e?.(),m&&i()},[e,i]),a=()=>{n?l():t&&(r(!0),i())};(0,q.useEffect)(()=>{n&&!t&&l()},[n,t,l]),(0,q.useLayoutEffect)(()=>{let f="button, input, select, textarea, a[href], [tabindex], [draggable]";for(let h of o.current?.querySelectorAll("[data-cd-context]")??[]){h instanceof HTMLElement&&h.matches(f)&&(h.inert=n);for(let m of h.querySelectorAll(f))m.inert=n}});let s=f=>{n&&f.target instanceof Element&&f.target.closest("[data-cd-context]")&&(f.preventDefault(),f.stopPropagation())};return{on:n,toggle:a,exit:l,focusToggle:i,rootProps:{ref:o,"data-cd-widget":"","data-cd-mode":n?"":void 0,onKeyDownCapture:f=>{n&&f.key==="Escape"?(f.preventDefault(),f.stopPropagation(),l()):s(f)},onClickCapture:s,onDoubleClickCapture:s,onPointerDownCapture:s,onDragStartCapture:s,onDragOverCapture:s,onDropCapture:s}}}function _p(){let[,e]=pe("draw_request"),[t]=pe("draw_result"),[n]=pe("can_open_case"),[r,o]=(0,q.useState)(null),[i,l]=(0,q.useState)(null),[a,s]=(0,q.useState)(null),u=(0,q.useRef)(null),f=(0,q.useRef)(0),h=(0,q.useCallback)(E=>{f.current+=1;let d=`${Date.now()}-${f.current}`;return e({...E,request_id:d}),d},[e]),m=(0,q.useCallback)((E,d=null)=>{let c={category:E,ruleId:d};Np(r,c)||l(null),o(c),s(null),u.current=h({kind:"draw",category:E,iox_rule_id:d})},[h,r]),g=(0,q.useCallback)(()=>{r&&m(r.category,r.ruleId)},[r,m]),v=(0,q.useCallback)(()=>{h({kind:"open"})},[h]),b=(0,q.useCallback)(()=>{u.current=null,o(null),l(null),s(null)},[]);return(0,q.useEffect)(()=>{if(!(!t||t.request_id==null)&&t.request_id===u.current){if(u.current=null,t.error||t.case_id==null||!t.category){s(t.error||"No case could be drawn."),l(null);return}l({category:t.category,ruleId:t.iox_rule_id??null,caseId:t.case_id,position:t.position??1,total:t.total??1,shared:t.shared??null})}},[t]),{target:r,pick:i,error:a,canOpen:!!n,draw:m,another:g,open:v,close:b}}async function Lh(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function zp(){return(0,W.jsx)("style",{children:Sp})}function cs({size:e=14}){return(0,W.jsxs)("svg",{className:"cd-dice",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,W.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),(0,W.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.3",fill:"currentColor"}),(0,W.jsx)("circle",{cx:"12",cy:"12",r:"1.3",fill:"currentColor"}),(0,W.jsx)("circle",{cx:"15.5",cy:"15.5",r:"1.3",fill:"currentColor"})]})}function Rp({on:e,onToggle:t,compact:n,disabled:r,hint:o}){return(0,W.jsxs)("button",{type:"button",className:`cd-toggle${e?" cd-toggle--on":""}${n?" cd-toggle--compact":""}`,"aria-pressed":e,"aria-label":n?e?"Exit draw mode":"Draw a case":void 0,disabled:!e&&r,title:e?"Exit draw mode (Esc)":`Draw a case: click ${o} to get the id of one case behind it`,onClick:t,children:[(0,W.jsx)(cs,{}),n?null:e?"Exit draw mode":"Draw a case"]})}function Pp({draw:e,color:t,scope:n,className:r,style:o,children:i}){let{target:l,pick:a,error:s}=e,[u,f]=(0,q.useState)(null),[h,m]=(0,q.useState)(!1);(0,q.useEffect)(()=>{f(null),m(!1)},[a?.caseId,a?.category,a?.ruleId]);let{close:g}=e;if(!l)return null;let v=async()=>{a&&f(await Lh(a.caseId)?"yes":"failed")};return(0,W.jsxs)("div",{className:`cd-pop${r?` ${r}`:""}`,style:o,role:"status",children:[i,(0,W.jsx)("span",{className:"cd-chip",style:{background:t},children:Dh[l.category]}),s?(0,W.jsx)("span",{className:"cd-error",children:s}):a?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("span",{className:"cd-id",title:"Case id",children:a.caseId}),(0,W.jsxs)("span",{className:"cd-pos",children:[a.position," of ",a.total,n?` ${n}`:""]}),a.shared===null?null:(0,W.jsx)("span",{className:"cd-tag",title:a.shared?"At least one other rule of this ruleset fires on this case too":"No other rule of this ruleset fires on this case",children:a.shared?"shared with other rules":"only this rule"})]}):(0,W.jsx)("span",{className:"cd-pos",children:"Drawing\u2026"}),(0,W.jsxs)("span",{className:"cd-actions",children:[a&&!s?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("button",{type:"button",className:"cd-btn",onClick:v,children:u==="yes"?"Copied":u==="failed"?"Copy failed":"Copy id"}),(0,W.jsx)("button",{type:"button",className:"cd-btn",disabled:a.total<=1,title:a.total<=1?"This is the only case here":"Draw the next case",onClick:e.another,children:"Another"}),e.canOpen?(0,W.jsx)("button",{type:"button",className:"cd-btn",title:"Show this case in the notebook's case view",onClick:()=>{e.open(),m(!0)},children:h?"Shown in case view":"Show in case view"}):null]}):null,(0,W.jsx)("button",{type:"button",className:"cd-close","aria-label":"Close",onClick:b=>{g(),b.currentTarget.closest("[data-cd-widget]")?.querySelector(".cd-toggle")?.focus()},children:"\u2715"})]})]})}var j=F(V()),Mh={tp:At.histPos,fp:"#da3633",fn:"#57606a",tn:"#6e7781"};function Tp({label:e,value:t,color:n}){let r=t==null?null:Math.round(t*100);return(0,j.jsxs)("div",{className:"rb-metric","data-cd-context":"",children:[(0,j.jsxs)("div",{className:"rb-metric-top",children:[(0,j.jsx)("span",{className:"rb-metric-val",children:r==null?"\u2013":`${r}%`}),(0,j.jsx)("span",{className:"rb-metric-label",children:e})]}),(0,j.jsx)("div",{className:"rb-metric-bar",children:(0,j.jsx)("div",{className:"rb-metric-fill",style:{width:`${r||0}%`,background:n}})})]})}var Ah=[{key:"tp",label:"TP",word:"explains"},{key:"fp",label:"FP",word:"wrongly claims"},{key:"fn",label:"FN",word:"remaining"},{key:"tn",label:"TN",word:"left alone"}];function Oh({res:e,stale:t,poolLabel:n,drill:r,onToggleDrill:o,draw:i}){return e?(0,j.jsxs)("div",{className:`rb-metrics${t?" rb-stale-dim":""}`,children:[(0,j.jsx)(Tp,{label:"Precision",value:e.precision,color:At.blue}),(0,j.jsx)(Tp,{label:"Recall",value:e.recall,color:At.green}),(0,j.jsx)("div",{className:"rb-counts",children:Ah.map(({key:l,label:a,word:s})=>{let u=e[l]??0;return r?(0,j.jsxs)("button",{type:"button",className:`rb-count cd-target${i&&Cp(i,l)?" cd-target--on":""}`,disabled:!i||u===0,"aria-label":`Draw a ${a} case`,title:`${a}: ${s} \u2014 draw one of these cases`,onClick:()=>i?.draw(l),children:[a," ",(0,j.jsx)("b",{children:u})," ",(0,j.jsx)(cs,{size:10})]},l):(0,j.jsxs)("span",{className:"rb-count",title:`${a}: ${s}`,children:[a," ",(0,j.jsx)("b",{children:u})]},l)})}),(0,j.jsx)(Rp,{on:r,onToggle:o,disabled:t,compact:!0,hint:"TP, FP, FN or TN"}),e.total!=null?(0,j.jsxs)("span",{className:"rb-scope",title:"Cases this rule was evaluated against","data-cd-context":"",children:["of ",(0,j.jsx)("b",{children:e.total})," ",n]}):null,t?(0,j.jsx)("span",{className:"rb-stale-badge",children:r?"rule changed \u2014 re-evaluate to draw":"rule changed \u2014 out of date"}):null]}):(0,j.jsx)("span",{className:"rb-noeval",children:"Add attributes to the rule, then evaluate."})}function ds({drill:e,onToggleDrill:t,onExitDrill:n,attributes:r,attrMap:o,conds:i,pinnedAttrs:l,pinnedPreds:a,forbidden:s,onForbid:u,onUnforbid:f,res:h,stale:m,poolLabel:g,toast:v,note:b,onNoteChange:E,onEvaluate:d,onStore:c,onOptimize:p,onClear:y,canClear:S,isOptimizing:w}){let N=i.length>0,k=!!h&&!m&&N,M=l.size>0||s.size>0,[z,U]=(0,xt.useState)(null),oe=_p(),Oe=oe.close,Ot=h?.eval_id??null;(0,xt.useEffect)(()=>{Oe(),n()},[m,Ot,Oe,n]),(0,xt.useEffect)(()=>{z!==null&&Oe()},[z,Oe]),(0,xt.useEffect)(()=>{e?U(null):Oe()},[e,Oe]);let It=()=>{t()},Je={...oe,draw:(Ie,L)=>{U(null),oe.draw(Ie,L)}};(0,xt.useEffect)(()=>{if(z===null)return;let Ie=L=>{L.key==="Escape"&&U(null)};return window.addEventListener("keydown",Ie),()=>window.removeEventListener("keydown",Ie)},[z]),(0,xt.useEffect)(()=>{z==="store"&&!k&&U(null)},[z,k]);let{kept:et,held:tt}=(0,xt.useMemo)(()=>Ei(i,o,l,a),[i,o,l,a]),ft=[];et.length&&ft.push(`${et.length} kept`),tt.length&&ft.push(`${tt.length} bounded`),s.size&&ft.push(`${s.size} forbidden`);let kt=()=>{U(null),p()},cn=()=>{U(null),c()};return(0,j.jsxs)("div",{className:"rb-footer",children:[(0,j.jsxs)("button",{type:"button","data-cd-context":"",className:`rb-optimize-btn${z==="optimize"?" rb-on":""}`,"aria-expanded":z==="optimize",onClick:()=>U(Ie=>Ie==="optimize"?null:"optimize"),title:"Show what the optimizer may and may not use",children:[w?"\u23F3 Optimizing\u2026":"\u26A1 Optimize",(0,j.jsx)("span",{className:"rb-btn-caret",children:z==="optimize"?"\u25BE":"\u25B4"})]}),(0,j.jsx)("button",{type:"button",className:`rb-eval-btn${m?" rb-stale":""}`,"data-cd-context":"",disabled:!N,onClick:d,children:m?"\u21BB Re-evaluate":"\u25B8 Evaluate"}),(0,j.jsx)("button",{type:"button",className:"rb-clear-btn","data-cd-context":"",disabled:!S,onClick:y,title:"Remove all conditions, pins and locks",children:"Clear"}),ft.length?(0,j.jsx)("span",{className:"rb-constraint-summary","data-cd-context":"",title:"Constraints the next optimize run will honour",children:ft.join(" \xB7 ")}):null,(0,j.jsx)(Oh,{res:h,stale:m,poolLabel:g,drill:e,onToggleDrill:It,draw:e&&h&&!m?Je:null}),(0,j.jsxs)("div",{className:"rb-footer-right","data-cd-context":"",children:[v?(0,j.jsx)("span",{className:"rb-toast",children:v}):null,(0,j.jsxs)("button",{type:"button",className:"rb-store-btn",disabled:!k,"aria-expanded":z==="store",onClick:()=>U(Ie=>Ie==="store"?null:"store"),children:["Store rule",(0,j.jsx)("span",{className:"rb-btn-caret",children:z==="store"?"\u25BE":"\u25B4"})]})]}),oe.target?(0,j.jsx)(Pp,{draw:oe,color:Mh[oe.target.category],scope:"for this rule",className:"rb-draw-pop"}):null,z==="optimize"?(0,j.jsx)(ss,{attributes:r,attrMap:o,conds:i,pinnedAttrs:l,pinnedPreds:a,forbidden:s,onForbid:u,onUnforbid:f,onClose:()=>U(null),onRun:kt,canRun:M,isOptimizing:w}):null,z==="store"?(0,j.jsx)(us,{attrMap:o,conds:i,note:b,onNoteChange:E,onClose:()=>U(null),onStore:cn}):null]})}var ge=F(V()),Dp="Unique removal impact shows what each condition keeps out: the cases the rest of the rule covers but this condition rejects. Many FPs removed and few TPs removed means the condition is pulling its weight; the reverse means it is mostly costing recall. A condition left at 'any value' constrains nothing, so it removes nothing. Computed on evaluation, alongside the overall metrics.";function ps({children:e,stale:t}){return(0,ge.jsxs)("div",{className:`rb-impact${t?" rb-impact-stale":""}`,children:[(0,ge.jsx)("div",{className:"rb-impact-head",children:"Unique removal impact"}),e]})}function fs({impact:e,maxTotalRemoved:t,constrains:n,stale:r}){if(!n)return(0,ge.jsx)(ps,{children:(0,ge.jsx)("span",{className:"rb-impact-none",children:"Set a boundary \u2014 \u201Cany value\u201D excludes no case, so it removes none."})});if(!e)return(0,ge.jsx)(ps,{children:(0,ge.jsx)("span",{className:"rb-impact-none",children:"Evaluate the rule to compute it."})});let o=e.tp_removed+e.fp_removed,i=Math.max(0,Math.min(100,o/Math.max(1,t)*100)),l=o>0?e.tp_removed/o*100:0,a=o>0?e.fp_removed/o*100:0;return(0,ge.jsxs)(ps,{stale:r,children:[(0,ge.jsxs)("div",{className:"rb-impact-values",children:[(0,ge.jsxs)("span",{style:{color:At.tpRemoved},children:["TP removed ",e.tp_removed]}),(0,ge.jsxs)("span",{style:{color:At.fpRemoved},children:["FP removed ",e.fp_removed]})]}),(0,ge.jsx)("div",{className:"rb-impact-track",title:`Dropping this condition would additionally cover ${e.tp_removed} positive and ${e.fp_removed} negative cases`,children:(0,ge.jsxs)("div",{className:"rb-impact-bar",style:{width:`${i}%`},children:[(0,ge.jsx)("div",{className:"rb-impact-seg",style:{background:At.tpRemoved,width:`${l}%`}}),(0,ge.jsx)("div",{className:"rb-impact-seg",style:{background:At.fpRemoved,width:`${a}%`}})]})}),o===0?(0,ge.jsx)("span",{className:"rb-impact-note",children:"Redundant here \u2014 the other conditions already exclude these cases."}):null]})}var D=F(V());function ms({title:e,outcomeName:t,attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onAdd:s,onUpdate:u,onRemove:f,onClear:h,onTogglePin:m,onTogglePredPin:g,onForbid:v,onUnforbid:b,res:E,stale:d,poolLabel:c,toast:p,note:y,onNoteChange:S,onEvaluate:w,onStore:N,onOptimize:k,isOptimizing:M}){let[z,U]=(0,wt.useState)(!1),[oe,Oe]=(0,wt.useState)(!1),[Ot,It]=(0,wt.useState)(os),[Je,et]=(0,wt.useState)(!1),tt=Ep(void 0,!!E&&!d&&!M),ft=o.map(L=>L.attr),kt=(0,wt.useMemo)(()=>{let L={};for(let Se of E?.importance??[])L[Se.attr]=Se;return L},[E]),cn=(0,wt.useMemo)(()=>(E?.importance??[]).reduce((L,Se)=>Math.max(L,Se.tp_removed+Se.fp_removed),0),[E]),Ie={onDragOver:L=>{L.preventDefault(),L.dataTransfer.dropEffect="copy",U(!0)},onDragLeave:()=>U(!1),onDrop:L=>{L.preventDefault(),U(!1);let Se=L.dataTransfer.getData("text/plain");Se&&s(Se)}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("style",{children:np}),(0,D.jsx)(zp,{}),(0,D.jsxs)("div",{className:"rb-root rb-v2",...tt.rootProps,children:[(0,D.jsxs)("div",{className:"rb-header",children:[(0,D.jsx)("span",{className:"rb-title","data-cd-context":"",children:e}),(0,D.jsxs)("span",{className:"rb-outcome","data-cd-context":"",children:["predicts: ",t]}),(0,D.jsx)(sp,{}),(0,D.jsx)("span",{className:"rb-header-hint",children:tt.on?"Draw mode: click TP, FP, FN or TN \xB7 Esc to exit":"click or drag an attribute \xB7 drag handles to set boundaries"}),(0,D.jsxs)("button",{type:"button","data-cd-context":"",className:`rb-impact-btn${oe?" rb-on":""}`,disabled:o.length===0,"aria-pressed":oe,title:oe?"Hide attribute importance":"Show how much each condition contributes to the rule",onClick:()=>Oe(L=>!L),children:[(0,D.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,D.jsx)("path",{d:"M3 3v18h18M7 15l4-6 3 3 5-8"})}),"Attribute importance"]}),(0,D.jsx)(Ni,{align:"right",context:!0,children:Dp})]}),(0,D.jsxs)("div",{className:`rb-body${Je?" rb-resizing":""}`,"data-cd-context":"",children:[(0,D.jsx)(es,{attributes:n,usedIds:ft,forbidden:a,onAdd:s,onUnforbid:b,width:Ot}),(0,D.jsx)(is,{width:Ot,onResize:It,onDraggingChange:et}),(0,D.jsx)("div",{className:`rb-canvas${z?" rb-dragover":""}`,...Ie,children:o.length===0?(0,D.jsxs)("div",{className:"rb-dropzone",children:[(0,D.jsx)("b",{children:"Drop an attribute here"}),(0,D.jsx)("span",{children:"set boundaries directly on its distribution"})]}):o.map((L,Se)=>{let Ne=r[L.attr];if(!Ne)return null;let Ft=i.has(L.attr),ve=[];if(Ne.kind==="num"){let{lo:Y,hi:$t}=ir(Ne,L);Y!==null&&ve.push({bound:"lo",glyph:"\u2265",what:`lower bound (\u2265 ${Y})`}),$t!==null&&ve.push({bound:"hi",glyph:"\u2264",what:`upper bound (\u2264 ${$t})`})}else L.op==="=="&&ve.push({bound:"val",glyph:"==",what:`value (== ${L.value})`});let zn=ve.some(Y=>l.has(Ae(L.attr,Y.bound)));return(0,D.jsxs)(wt.Fragment,{children:[Se>0?(0,D.jsx)("span",{className:"rb-and",children:"AND"}):null,(0,D.jsxs)("div",{className:`rb-cond${Ft?" rb-pinned":""}${zn?" rb-pred-pinned":""}`,children:[(0,D.jsxs)("div",{className:"rb-cond-head",children:[(0,D.jsx)(Si,{kind:Ne.kind}),(0,D.jsx)("span",{className:"rb-cond-name",children:Ne.label}),Ft?ve.map(Y=>{let $t=l.has(Ae(L.attr,Y.bound));return(0,D.jsxs)("button",{type:"button",className:`rb-pin rb-pin-pred${$t?" rb-pinned":""}`,title:$t?`Unpin ${Y.what} \u2014 let the optimizer choose it`:`Pin ${Y.what} \u2014 keep it fixed in the optimized rule`,onClick:()=>g(L.attr,Y.bound),children:[(0,D.jsx)("span",{className:"rb-pin-side",children:Y.glyph}),$t?"\u{1F512}":"\u{1F513}"]},Y.bound)}):null,(0,D.jsx)("button",{type:"button",className:`rb-pin${Ft?" rb-pinned":""}`,title:Ft?"Unpin attribute":"Pin attribute (keep in optimized rule)",onClick:()=>m(L.attr),children:"\u{1F4CC}"}),(0,D.jsx)("button",{type:"button",className:"rb-remove",title:"Remove condition",onClick:()=>f(Se),children:"\xD7"})]}),(0,D.jsxs)("div",{className:"rb-cond-body",children:[Ne.kind==="num"&&L.op==="range"?(0,D.jsxs)(D.Fragment,{children:[(()=>{let Y=ts(Ne,L.lo,L.hi);return(0,D.jsx)("span",{className:`rb-pred-readout${Y.any?" rb-any":""}`,children:Y.text})})(),(0,D.jsx)(ls,{attr:Ne,lo:L.lo,hi:L.hi,onChange:Y=>u(Se,Y)})]}):Ne.kind==="cat"&&L.op==="=="?(0,D.jsx)(as,{attr:Ne,value:L.value,onChange:Y=>u(Se,{value:Y})}):null,oe?(0,D.jsx)(fs,{impact:kt[L.attr]??null,maxTotalRemoved:cn,constrains:Ne.kind!=="num"||ve.length>0,stale:d}):null]})]})]},L.attr)})})]}),(0,D.jsx)(ds,{drill:tt.on,onToggleDrill:tt.toggle,onExitDrill:tt.exit,attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onForbid:v,onUnforbid:b,res:E,stale:d,poolLabel:c,toast:p,note:y,onNoteChange:S,onEvaluate:w,onStore:N,onOptimize:k,onClear:h,canClear:o.length>0||i.size>0,isOptimizing:M})]})]})}function hs(e){let t=Number(e);return Number.isFinite(t)?t:null}function Ih(e,t){let n=Array.isArray(t.bin_counts)?t.bin_counts:[],r=Array.isArray(t.outcome_positive_bin_counts)?t.outcome_positive_bin_counts:[],o=Array.isArray(t.bin_edges)?t.bin_edges.map(Number):[],i=t.kind==="numeric_discrete",l=n.map((g,v)=>{let b=Number(o[v]),E=Number(i?o[v]:o[v+1]);return{n:Math.max(0,dt(g)),pos:Math.max(0,dt(r[v])),lo:Number.isFinite(b)?b:0,hi:Number.isFinite(E)?E:0}}),a=l.length?l[0].lo:0,s=l.length?l[l.length-1].hi:0,u=hs(t.min)??a,f=hs(t.max)??s,h=hs(t.median)??u,m=l.reduce((g,v)=>Math.max(g,v.n),0);return{...e,kind:"num",min:u,max:f>u?f:u,median:Math.min(Math.max(h,u),f),isInt:Number.isInteger(u)&&Number.isInteger(f),isDiscrete:i,bins:l,maxN:m,total:Math.max(0,dt(t.total_count)),outcomePositiveTotal:Math.max(0,dt(t.outcome_positive_total)),missing:Math.max(0,dt(t.missing_count))}}function Fh(e,t){let r=(Array.isArray(t.categories)?t.categories:[]).map(i=>({value:String(i&&i.value!=null?i.value:""),n:Math.max(0,dt(i&&i.count)),pos:Math.max(0,dt(i&&i.outcome_positive_count))}));r.sort((i,l)=>l.n-i.n);let o=r.reduce((i,l)=>Math.max(i,l.n),0);return{...e,kind:"cat",categories:r,maxN:o,total:Math.max(0,dt(t.total_count)),outcomePositiveTotal:Math.max(0,dt(t.outcome_positive_total)),missing:Math.max(0,dt(t.missing_count))}}function Lp(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!="object")continue;let r=String(n.id??"");if(!r)continue;let o=n.summary&&typeof n.summary=="object"?n.summary:{},i={id:r,label:String(n.label??r),importance:xp(n.importance),family:String(n.family??"other"),familyLabel:String(n.family_label??"Other"),sources:Array.isArray(n.sources)?n.sources.map(String).filter(Boolean):[]};n.kind==="num"?t.push(Ih(i,o)):t.push(Fh(i,o))}return t}function Mp(e){let t={};for(let n of e)t[n.id]=n;return t}var Ap=F(V()),$h=2600;function Uh(){let[e]=pe("title"),[t]=pe("outcome_name"),[n]=pe("pool_label"),[r]=pe("attributes"),[o]=pe("flash"),[i,l]=pe("eval_request"),[a]=pe("eval_result"),[,s]=pe("store_trigger"),[u]=pe("store_result"),[,f]=pe("store_note"),[,h]=pe("optimize_request"),[m]=pe("optimize_result"),[g]=pe("loaded_rule"),v=T.useMemo(()=>Lp(r),[r]),b=T.useMemo(()=>Mp(v),[v]),[E,d]=T.useState([]),[c,p]=T.useState(null),[y,S]=T.useState(null),[w,N]=T.useState(""),[k,M]=T.useState(new Set),[z,U]=T.useState(new Set),[oe,Oe]=T.useState(new Set),[Ot,It]=T.useState(!1),Je=T.useRef(null),et=T.useRef(typeof i?.request_id=="number"?i.request_id:0),tt=T.useRef(null),ft=T.useRef(null),kt=T.useRef(null),cn=T.useRef(0),Ie=T.useRef(null),L=T.useRef(null),Se=JSON.stringify(E),Ne=c!==null&&c.key!==Se,Ft=c?c.res:null,ve=T.useCallback(_=>{S(_),kt.current&&clearTimeout(kt.current),kt.current=setTimeout(()=>S(null),$h)},[]),zn=T.useCallback(_=>{let P=gp(_,b);if(d(P),p(null),Je.current=null,P.length===0)return;let O=P.map(A=>A.op==="range"?ns(b[A.attr],A.lo,A.hi):A);et.current+=1,Je.current={requestId:et.current,key:JSON.stringify(P)},l({conditions:O,request_id:et.current})},[b,l]);T.useEffect(()=>{if(!a||a.eval_id==null)return;let _=Je.current;!_||a.request_id!==_.requestId||a.eval_id!==tt.current&&(tt.current=a.eval_id,Je.current=null,p({key:_.key,res:a}))},[a]),T.useEffect(()=>{o&&ve(o)},[o,ve]),T.useEffect(()=>{if(!u||u.store_id==null||u.store_id===ft.current)return;ft.current=u.store_id;let _=u.precision!=null?Math.round(u.precision*100):null,P=u.recall!=null?Math.round(u.recall*100):null,O=_!=null&&P!=null?`  P ${_}% \xB7 R ${P}%`:"";ve(`Stored \u2713${O}`),d([]),p(null),Je.current=null,N(""),M(new Set),U(new Set),Oe(new Set),It(!1)},[u,ve]),T.useEffect(()=>()=>{kt.current&&clearTimeout(kt.current)},[]),T.useEffect(()=>{if(!m||m.request_id==null||m.request_id!==cn.current||m.request_id===Ie.current)return;if(Ie.current=m.request_id,It(!1),m.error){ve(`Optimize failed \u2014 ${m.error}`);return}let _=m.conditions??[];if(_.length===0){ve("Optimize found no rule under these constraints");return}zn(_)},[m,zn,ve]),T.useEffect(()=>{if(!g||g.load_id==null||g.load_id===L.current)return;L.current=g.load_id,N(""),M(new Set),U(new Set),Oe(new Set),It(!1),zn(g.conditions??[]);let _=g.label?` ${g.label}`:"";ve(`Loaded${_} \u2014 adjust and evaluate`)},[g,zn,ve]);let Y=T.useCallback(_=>{U(P=>{let O=[Ae(_,"lo"),Ae(_,"hi"),Ae(_,"val")];if(!O.some(ae=>P.has(ae)))return P;let A=new Set(P);for(let ae of O)A.delete(ae);return A})},[]),$t=T.useCallback(_=>{Oe(P=>P.has(_)?P:new Set(P).add(_)),d(P=>P.some(O=>O.attr===_)?P.filter(O=>O.attr!==_):P),M(P=>{if(!P.has(_))return P;let O=new Set(P);return O.delete(_),O}),Y(_)},[Y]),Op=T.useCallback(_=>{Oe(P=>{if(!P.has(_))return P;let O=new Set(P);return O.delete(_),O})},[]),Ip=T.useCallback(_=>{M(P=>{let O=new Set(P);return O.has(_)?(O.delete(_),Y(_)):O.add(_),O})},[Y]),Fp=T.useCallback((_,P)=>{let O=Ae(_,P);U(A=>{let ae=new Set(A);return ae.has(O)?ae.delete(O):ae.add(O),ae}),M(A=>A.has(_)?A:new Set(A).add(_))},[]),$p=T.useCallback(()=>{if(k.size===0&&oe.size===0||Ot)return;let _=[];for(let A of E){let ae=b[A.attr];if(ae)if(ae.kind==="num"){let Qp=ae,{lo:Ri,hi:Pi}=ir(Qp,A),gs=Ri!==null&&z.has(Ae(A.attr,"lo")),vs=Pi!==null&&z.has(Ae(A.attr,"hi"));gs&&vs?_.push({attr:A.attr,op:"range",lo:Ri,hi:Pi}):gs?_.push({attr:A.attr,op:">=",value:Ri}):vs&&_.push({attr:A.attr,op:"<=",value:Pi})}else A.op==="=="&&z.has(Ae(A.attr,"val"))&&_.push(A)}let P=new Set(_.map(A=>A.attr)),O=Array.from(k).filter(A=>!P.has(A));It(!0),cn.current+=1,h({fixed_attributes:O,fixed_predicates:_,forbidden_attributes:Array.from(oe),request_id:cn.current})},[k,z,oe,E,b,Ot,h]),Up=T.useCallback(_=>{let P=b[_];P&&(oe.has(_)||d(O=>O.some(A=>A.attr===_)?O:[...O,hp(P)]))},[b,oe]),jp=T.useCallback((_,P)=>{d(O=>O.map((A,ae)=>ae===_?{...A,...P}:A))},[]),Bp=T.useCallback(_=>{d(P=>{let O=P[_];return O&&(M(A=>{if(!A.has(O.attr))return A;let ae=new Set(A);return ae.delete(O.attr),ae}),Y(O.attr)),P.filter((A,ae)=>ae!==_)})},[Y]),Hp=T.useCallback(()=>{d([]),p(null),Je.current=null,N(""),M(new Set),U(new Set)},[]),Vp=T.useCallback(()=>{if(E.length===0)return;let _=E.map(P=>P.op==="range"?ns(b[P.attr],P.lo,P.hi):P);p(null),et.current+=1,Je.current={requestId:et.current,key:JSON.stringify(E)},l({conditions:_,request_id:et.current})},[E,b,l]),Wp=T.useCallback(()=>{!Ft||Ne||(f(w),s(_=>(_??0)+1))},[Ft,Ne,w,f,s]);return(0,Ap.jsx)(ms,{title:e||"Rule builder",outcomeName:t||"outcome",attributes:v,attrMap:b,conds:E,pinnedAttrs:k,pinnedPreds:z,forbidden:oe,onAdd:Up,onUpdate:jp,onRemove:Bp,onClear:Hp,onTogglePin:Ip,onTogglePredPin:Fp,onForbid:$t,onUnforbid:Op,res:Ft,stale:Ne,poolLabel:n||"cases",toast:y,note:w,onNoteChange:N,onEvaluate:Vp,onStore:Wp,onOptimize:$p,isOptimizing:Ot})}var Xg={render:tp(Uh)};export{Xg as default};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
