var Wp=Object.create;var vs=Object.defineProperty;var Qp=Object.getOwnPropertyDescriptor;var Kp=Object.getOwnPropertyNames;var Yp=Object.getPrototypeOf,Gp=Object.prototype.hasOwnProperty;var wt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Xp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Kp(t))!Gp.call(e,o)&&o!==n&&vs(e,o,{get:()=>t[o],enumerable:!(r=Qp(t,o))||r.enumerable});return e};var F=(e,t,n)=>(n=e!=null?Wp(Yp(e)):{},Xp(t||!e||!e.__esModule?vs(n,"default",{value:e,enumerable:!0}):n,e));var Rs=wt($=>{"use strict";var lr=Symbol.for("react.element"),qp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),af=Symbol.for("react.lazy"),bs=Symbol.iterator;function sf(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,Ss={};function zn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=zn.prototype;function Ti(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}var Li=Ti.prototype=new Ns;Li.constructor=Ti;ks(Li,zn.prototype);Li.isPureReactComponent=!0;var ys=Array.isArray,Cs=Object.prototype.hasOwnProperty,Di={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Cs.call(t,r)&&!Es.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:lr,type:e,key:i,ref:l,props:o,_owner:Di.current}}function uf(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function cf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xs=/\/+/g;function Pi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):t.toString(36)}function Jr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lr:case qp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Pi(l,0):r,ys(o)?(n="",e!=null&&(n=e.replace(xs,"$&/")+"/"),Jr(o,t,n,"",function(u){return u})):o!=null&&(Mi(o)&&(o=uf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ys(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Pi(i,a);l+=Jr(i,t,n,s,o)}else if(s=sf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Pi(i,a++),l+=Jr(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zr(e,t,n){if(e==null)return e;var r=[],o=0;return Jr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},eo={transition:null},pf={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Di};function zs(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=zn;$.Fragment=Zp;$.Profiler=ef;$.PureComponent=Ti;$.StrictMode=Jp;$.Suspense=of;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;$.act=zs;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Di.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cs.call(t,s)&&!Es.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:lr,type:e.type,key:o,ref:i,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};$.createElement=_s;$.createFactory=function(e){var t=_s.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:rf,render:e}};$.isValidElement=Mi;$.lazy=function(e){return{$$typeof:af,_payload:{_status:-1,_result:e},_init:df}};$.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};$.unstable_act=zs;$.useCallback=function(e,t){return Ee.current.useCallback(e,t)};$.useContext=function(e){return Ee.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ee.current.useEffect(e,t)};$.useId=function(){return Ee.current.useId()};$.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ee.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};$.useRef=function(e){return Ee.current.useRef(e)};$.useState=function(e){return Ee.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ee.current.useTransition()};$.version="18.3.1"});var Ie=wt((jh,Ps)=>{"use strict";Ps.exports=Rs()});var Us=wt(Q=>{"use strict";function Fi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<to(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ze(e){return e.length===0?null:e[0]}function ro(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,a=e[l],s=l+1,u=e[s];if(0>to(a,n))s<o&&0>to(u,a)?(e[r]=u,e[s]=n,r=s):(e[r]=a,e[l]=n,r=l);else if(s<o&&0>to(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function to(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ts=performance,Q.unstable_now=function(){return Ts.now()}):(Ai=Date,Ls=Ai.now(),Q.unstable_now=function(){return Ai.now()-Ls});var Ts,Ai,Ls,ct=[],Ot=[],ff=1,We=null,be=3,oo=!1,cn=!1,sr=!1,As=typeof setTimeout=="function"?setTimeout:null,Os=typeof clearTimeout=="function"?clearTimeout:null,Ds=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $i(e){for(var t=Ze(Ot);t!==null;){if(t.callback===null)ro(Ot);else if(t.startTime<=e)ro(Ot),t.sortIndex=t.expirationTime,Fi(ct,t);else break;t=Ze(Ot)}}function Ui(e){if(sr=!1,$i(e),!cn)if(Ze(ct)!==null)cn=!0,Bi(ji);else{var t=Ze(Ot);t!==null&&Vi(Ui,t.startTime-e)}}function ji(e,t){cn=!1,sr&&(sr=!1,Os(ur),ur=-1),oo=!0;var n=be;try{for($i(t),We=Ze(ct);We!==null&&(!(We.expirationTime>t)||e&&!$s());){var r=We.callback;if(typeof r=="function"){We.callback=null,be=We.priorityLevel;var o=r(We.expirationTime<=t);t=Q.unstable_now(),typeof o=="function"?We.callback=o:We===Ze(ct)&&ro(ct),$i(t)}else ro(ct);We=Ze(ct)}if(We!==null)var i=!0;else{var l=Ze(Ot);l!==null&&Vi(Ui,l.startTime-t),i=!1}return i}finally{We=null,be=n,oo=!1}}var io=!1,no=null,ur=-1,Is=5,Fs=-1;function $s(){return!(Q.unstable_now()-Fs<Is)}function Oi(){if(no!==null){var e=Q.unstable_now();Fs=e;var t=!0;try{t=no(!0,e)}finally{t?ar():(io=!1,no=null)}}else io=!1}var ar;typeof Ds=="function"?ar=function(){Ds(Oi)}:typeof MessageChannel<"u"?(Ii=new MessageChannel,Ms=Ii.port2,Ii.port1.onmessage=Oi,ar=function(){Ms.postMessage(null)}):ar=function(){As(Oi,0)};var Ii,Ms;function Bi(e){no=e,io||(io=!0,ar())}function Vi(e,t){ur=As(function(){e(Q.unstable_now())},t)}Q.unstable_IdlePriority=5;Q.unstable_ImmediatePriority=1;Q.unstable_LowPriority=4;Q.unstable_NormalPriority=3;Q.unstable_Profiling=null;Q.unstable_UserBlockingPriority=2;Q.unstable_cancelCallback=function(e){e.callback=null};Q.unstable_continueExecution=function(){cn||oo||(cn=!0,Bi(ji))};Q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Is=0<e?Math.floor(1e3/e):5};Q.unstable_getCurrentPriorityLevel=function(){return be};Q.unstable_getFirstCallbackNode=function(){return Ze(ct)};Q.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var n=be;be=t;try{return e()}finally{be=n}};Q.unstable_pauseExecution=function(){};Q.unstable_requestPaint=function(){};Q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=be;be=e;try{return t()}finally{be=n}};Q.unstable_scheduleCallback=function(e,t,n){var r=Q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:ff++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Fi(Ot,e),Ze(ct)===null&&e===Ze(Ot)&&(sr?(Os(ur),ur=-1):sr=!0,Vi(Ui,n-r))):(e.sortIndex=o,Fi(ct,e),cn||oo||(cn=!0,Bi(ji))),e};Q.unstable_shouldYield=$s;Q.unstable_wrapCallback=function(e){var t=be;return function(){var n=be;be=t;try{return e.apply(this,arguments)}finally{be=n}}}});var Bs=wt((Vh,js)=>{"use strict";js.exports=Us()});var Qd=wt(Ve=>{"use strict";var mf=Ie(),je=Bs();function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gu=new Set,Tr={};function Sn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Gu.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},Hs={};function gf(e){return pl.call(Hs,e)?!0:pl.call(Vs,e)?!1:hf.test(e)?Hs[e]=!0:(Vs[e]=!0,!1)}function vf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bf(e,t,n,r){if(t===null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oa,ia);he[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oa,ia);he[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oa,ia);he[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function la(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bf(t,n,o,r)&&(n=null),r||o===null?gf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),sa=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Zu=Symbol.for("react.offscreen"),Ws=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Hi;function br(e){if(Hi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hi=t&&t[1]||""}return`
`+Hi+e}var Wi=!1;function Qi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?br(e):""}function yf(e){switch(e.tag){case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return e=Qi(e.type,!1),e;case 11:return e=Qi(e.type.render,!1),e;case 1:return e=Qi(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Tn:return"Portal";case fl:return"Profiler";case aa:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qu:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ua:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wf(e){var t=Ju(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=wf(e))}function ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ju(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tc(e,t){t=t.checked,t!=null&&la(e,"checked",t,!1)}function bl(e,t){tc(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(yr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function nc(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,oc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){kf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sf=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(Sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,Hn=null,Wn=null;function Xs(e){if(e=Xr(e)){if(typeof Cl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ci(t),Cl(e.stateNode,e.type,t))}}function ac(e){Hn?Wn?Wn.push(e):Wn=[e]:Hn=e}function sc(){if(Hn){var e=Hn,t=Wn;if(Wn=Hn=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function uc(e,t){return e(t)}function cc(){}var Ki=!1;function dc(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return uc(e,t,n)}finally{Ki=!1,(Hn!==null||Wn!==null)&&(cc(),sc())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var El=!1;if(_t)try{Rn={},Object.defineProperty(Rn,"passive",{get:function(){El=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{El=!1}var Rn;function Nf(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Sr=!1,Io=null,Fo=!1,_l=null,Cf={onError:function(e){Sr=!0,Io=e}};function Ef(e,t,n,r,o,i,l,a,s){Sr=!1,Io=null,Nf.apply(Cf,arguments)}function _f(e,t,n,r,o,i,l,a,s){if(Ef.apply(this,arguments),Sr){if(Sr){var u=Io;Sr=!1,Io=null}else throw Error(w(198));Fo||(Fo=!0,_l=u)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qs(e){if(Nn(e)!==e)throw Error(w(188))}function zf(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qs(o),e;if(i===r)return qs(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function fc(e){return e=zf(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mc(e);if(t!==null)return t;e=e.sibling}return null}var hc=je.unstable_scheduleCallback,Zs=je.unstable_cancelCallback,Rf=je.unstable_shouldYield,Pf=je.unstable_requestPaint,ne=je.unstable_now,Tf=je.unstable_getCurrentPriorityLevel,da=je.unstable_ImmediatePriority,gc=je.unstable_UserBlockingPriority,$o=je.unstable_NormalPriority,Lf=je.unstable_LowPriority,vc=je.unstable_IdlePriority,li=null,mt=null;function Df(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Of,Mf=Math.log,Af=Math.LN2;function Of(e){return e>>>=0,e===0?32:31-(Mf(e)/Af|0)|0}var uo=64,co=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=xr(a):(i&=l,i!==0&&(r=xr(i)))}else l=n&~o,l!==0?r=xr(l):i!==0&&(r=xr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function If(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rt(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=If(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function $f(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function yc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xc,fa,wc,kc,Sc,Rl=!1,po=[],Ht=null,Wt=null,Qt=null,Mr=new Map,Ar=new Map,Ut=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Js(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xr(t),t!==null&&fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jf(e,t,n,r,o){switch(t){case"focusin":return Ht=dr(Ht,e,t,n,r,o),!0;case"dragenter":return Wt=dr(Wt,e,t,n,r,o),!0;case"mouseover":return Qt=dr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mr.set(i,dr(Mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ar.set(i,dr(Ar.get(i)||null,e,t,n,r,o)),!0}return!1}function Nc(e){var t=fn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=pc(n),t!==null){e.blockedOn=t,Sc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nl=r,n.target.dispatchEvent(r),Nl=null}else return t=Xr(n),t!==null&&fa(t),e.blockedOn=n,!1;t.shift()}return!0}function eu(e,t,n){Eo(e)&&n.delete(t)}function Bf(){Rl=!1,Ht!==null&&Eo(Ht)&&(Ht=null),Wt!==null&&Eo(Wt)&&(Wt=null),Qt!==null&&Eo(Qt)&&(Qt=null),Mr.forEach(eu),Ar.forEach(eu)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Bf)))}function Or(e){function t(o){return pr(o,e)}if(0<po.length){pr(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&pr(Ht,e),Wt!==null&&pr(Wt,e),Qt!==null&&pr(Qt,e),Mr.forEach(t),Ar.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Nc(n),n.blockedOn===null&&Ut.shift()}var Qn=Tt.ReactCurrentBatchConfig,jo=!0;function Vf(e,t,n,r){var o=V,i=Qn.transition;Qn.transition=null;try{V=1,ma(e,t,n,r)}finally{V=o,Qn.transition=i}}function Hf(e,t,n,r){var o=V,i=Qn.transition;Qn.transition=null;try{V=4,ma(e,t,n,r)}finally{V=o,Qn.transition=i}}function ma(e,t,n,r){if(jo){var o=Pl(e,t,n,r);if(o===null)tl(e,t,r,Bo,n),Js(e,r);else if(jf(o,e,t,n,r))r.stopPropagation();else if(Js(e,r),t&4&&-1<Uf.indexOf(e)){for(;o!==null;){var i=Xr(o);if(i!==null&&xc(i),i=Pl(e,t,n,r),i===null&&tl(e,t,r,Bo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var Bo=null;function Pl(e,t,n,r){if(Bo=null,e=ca(r),e=fn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case da:return 1;case gc:return 4;case $o:case Lf:return 16;case vc:return 536870912;default:return 16}default:return 16}}var Bt=null,ha=null,_o=null;function Ec(){if(_o)return _o;var e,t=ha,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return _o=o.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function tu(){return!1}function Be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fo:tu,this.isPropagationStopped=tu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=Be(nr),Gr=ee({},nr,{view:0,detail:0}),Wf=Be(Gr),Gi,Xi,fr,ai=ee({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Gi=e.screenX-fr.screenX,Xi=e.screenY-fr.screenY):Xi=Gi=0,fr=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),nu=Be(ai),Qf=ee({},ai,{dataTransfer:0}),Kf=Be(Qf),Yf=ee({},Gr,{relatedTarget:0}),qi=Be(Yf),Gf=ee({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=Be(Gf),qf=ee({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Be(qf),Jf=ee({},nr,{data:0}),ru=Be(Jf),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function va(){return rm}var om=ee({},Gr,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Be(om),lm=ee({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=Be(lm),am=ee({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),sm=Be(am),um=ee({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Be(um),dm=ee({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=Be(dm),fm=[9,13,27,32],ba=_t&&"CompositionEvent"in window,Nr=null;_t&&"documentMode"in document&&(Nr=document.documentMode);var mm=_t&&"TextEvent"in window&&!Nr,_c=_t&&(!ba||Nr&&8<Nr&&11>=Nr),iu=" ",lu=!1;function zc(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function hm(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(lu=!0,iu);case"textInput":return e=t.data,e===iu&&lu?null:e;default:return null}}function gm(e,t){if(Dn)return e==="compositionend"||!ba&&zc(e,t)?(e=Ec(),_o=ha=Bt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Pc(e,t,n,r){ac(r),t=Vo(t,"onChange"),0<t.length&&(n=new ga("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Ir=null;function bm(e){jc(e,0)}function si(e){var t=On(e);if(ec(t))return e}function ym(e,t){if(e==="change")return t}var Tc=!1;_t&&(_t?(ho="oninput"in document,ho||(Zi=document.createElement("div"),Zi.setAttribute("oninput","return;"),ho=typeof Zi.oninput=="function"),mo=ho):mo=!1,Tc=mo&&(!document.documentMode||9<document.documentMode));var mo,ho,Zi;function su(){Cr&&(Cr.detachEvent("onpropertychange",Lc),Ir=Cr=null)}function Lc(e){if(e.propertyName==="value"&&si(Ir)){var t=[];Pc(t,Ir,e,ca(e)),dc(bm,t)}}function xm(e,t,n){e==="focusin"?(su(),Cr=t,Ir=n,Cr.attachEvent("onpropertychange",Lc)):e==="focusout"&&su()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(Ir)}function km(e,t){if(e==="click")return si(t)}function Sm(e,t){if(e==="input"||e==="change")return si(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Nm;function Fr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!pl.call(t,o)||!it(e[o],t[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function Dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=Mc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dc(n.ownerDocument.documentElement,n)){if(r!==null&&ya(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cu(n,i);var l=cu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=_t&&"documentMode"in document&&11>=document.documentMode,Mn=null,Tl=null,Er=null,Ll=!1;function du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||Mn==null||Mn!==Oo(r)||(r=Mn,"selectionStart"in r&&ya(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Fr(Er,r)||(Er=r,r=Vo(Tl,"onSelect"),0<r.length&&(t=new ga("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},Ji={},Ac={};_t&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function ui(e){if(Ji[e])return Ji[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return Ji[e]=t[n];return e}var Oc=ui("animationend"),Ic=ui("animationiteration"),Fc=ui("animationstart"),$c=ui("transitionend"),Uc=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Uc.set(e,t),Sn(t,[e])}for(vo=0;vo<pu.length;vo++)bo=pu[vo],fu=bo.toLowerCase(),mu=bo[0].toUpperCase()+bo.slice(1),en(fu,"on"+mu);var bo,fu,mu,vo;en(Oc,"onAnimationEnd");en(Ic,"onAnimationIteration");en(Fc,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en($c,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_f(r,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;hu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;hu(o,a,u),i=s}}}if(Fo)throw e=_l,Fo=!1,_l=null,e}function G(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Bc(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),Bc(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[yo]){e[yo]=!0,Gu.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,el("selectionchange",!1,t))}}function Bc(e,t,n,r){switch(Cc(t)){case 1:var o=Vf;break;case 4:o=Hf;break;default:o=ma}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=fn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}dc(function(){var u=i,f=ca(n),h=[];e:{var m=Uc.get(e);if(m!==void 0){var v=ga,g=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":v=im;break;case"focusin":g="focus",v=qi;break;case"focusout":g="blur",v=qi;break;case"beforeblur":case"afterblur":v=qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sm;break;case Oc:case Ic:case Fc:v=Xf;break;case $c:v=cm;break;case"scroll":v=Wf;break;case"wheel":v=pm;break;case"copy":case"cut":case"paste":v=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ou}var b=(t&4)!==0,E=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Dr(c,d),y!=null&&b.push(Ur(c,y,p)))),E)break;c=c.return}0<b.length&&(m=new v(m,g,null,n,f),h.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Nl&&(g=n.relatedTarget||n.fromElement)&&(fn(g)||g[zt]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?fn(g):null,g!==null&&(E=Nn(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(b=nu,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=ou,y="onPointerLeave",d="onPointerEnter",c="pointer"),E=v==null?m:On(v),p=g==null?m:On(g),m=new b(y,c+"leave",v,n,f),m.target=E,m.relatedTarget=p,y=null,fn(f)===u&&(b=new b(d,c+"enter",g,n,f),b.target=p,b.relatedTarget=E,y=b),E=y,v&&g)t:{for(b=v,d=g,c=0,p=b;p;p=Pn(p))c++;for(p=0,y=d;y;y=Pn(y))p++;for(;0<c-p;)b=Pn(b),c--;for(;0<p-c;)d=Pn(d),p--;for(;c--;){if(b===d||d!==null&&b===d.alternate)break t;b=Pn(b),d=Pn(d)}b=null}else b=null;v!==null&&gu(h,m,v,b,!1),g!==null&&E!==null&&gu(h,E,g,b,!0)}}e:{if(m=u?On(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var N=ym;else if(au(m))if(Tc)N=Sm;else{N=wm;var k=xm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=km);if(N&&(N=N(e,u))){Pc(h,N,n,f);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&yl(m,"number",m.value)}switch(k=u?On(u):window,e){case"focusin":(au(k)||k.contentEditable==="true")&&(Mn=k,Tl=u,Er=null);break;case"focusout":Er=Tl=Mn=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,du(h,n,f);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":du(h,n,f)}var S;if(ba)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Dn?zc(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(_c&&n.locale!=="ko"&&(Dn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Dn&&(S=Ec()):(Bt=f,ha="value"in Bt?Bt.value:Bt.textContent,Dn=!0)),k=Vo(u,x),0<k.length&&(x=new ru(x,e,null,n,f),h.push({event:x,listeners:k}),S?x.data=S:(S=Rc(n),S!==null&&(x.data=S)))),(S=mm?hm(e,n):gm(e,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(f=new ru("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=S))}jc(h,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Dr(e,n),i!=null&&r.unshift(Ur(e,i,o)),i=Dr(e,t),i!=null&&r.push(Ur(e,i,o))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Dr(n,i),s!=null&&l.unshift(Ur(n,s,a))):o||(s=Dr(n,i),s!=null&&l.push(Ur(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(Rm,"")}function xo(e,t,n){if(t=vu(t),vu(e)!==t&&n)throw Error(w(425))}function Ho(){}var Dl=null,Ml=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(Lm)}:Ol;function Lm(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),ft="__reactFiber$"+rr,jr="__reactProps$"+rr,zt="__reactContainer$"+rr,Il="__reactEvents$"+rr,Dm="__reactListeners$"+rr,Mm="__reactHandles$"+rr;function fn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[ft])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[ft]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ci(e){return e[jr]||null}var Fl=[],In=-1;function tn(e){return{current:e}}function X(e){0>In||(e.current=Fl[In],Fl[In]=null,In--)}function K(e,t){In++,Fl[In]=e.current,e.current=t}var Jt={},ke=tn(Jt),Le=tn(!1),bn=Jt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Wo(){X(Le),X(ke)}function xu(e,t,n){if(ke.current!==Jt)throw Error(w(168));K(ke,t),K(Le,n)}function Vc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,xf(e)||"Unknown",o));return ee({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,bn=ke.current,K(ke,e),K(Le,Le.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Vc(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,X(Le),X(ke),K(ke,e)):X(Le),K(Le,n)}var St=null,di=!1,rl=!1;function Hc(e){St===null?St=[e]:St.push(e)}function Am(e){di=!0,Hc(e)}function nn(){if(!rl&&St!==null){rl=!0;var e=0,t=V;try{var n=St;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,di=!1}catch(o){throw St!==null&&(St=St.slice(e+1)),hc(da,nn),o}finally{V=t,rl=!1}}return null}var Fn=[],$n=0,Ko=null,Yo=0,Qe=[],Ke=0,yn=null,Nt=1,Ct="";function dn(e,t){Fn[$n++]=Yo,Fn[$n++]=Ko,Ko=e,Yo=t}function Wc(e,t,n){Qe[Ke++]=Nt,Qe[Ke++]=Ct,Qe[Ke++]=yn,yn=e;var r=Nt;e=Ct;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-rt(t)+o|n<<o|r,Ct=i+e}else Nt=1<<i|n<<o|r,Ct=e}function xa(e){e.return!==null&&(dn(e,1),Wc(e,1,0))}function wa(e){for(;e===Ko;)Ko=Fn[--$n],Fn[$n]=null,Yo=Fn[--$n],Fn[$n]=null;for(;e===yn;)yn=Qe[--Ke],Qe[Ke]=null,Ct=Qe[--Ke],Qe[Ke]=null,Nt=Qe[--Ke],Qe[Ke]=null}var Ue=null,$e=null,q=!1,nt=null;function Qc(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,$e=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:Nt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,$e=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(q){var t=$e;if(t){var n=t;if(!ku(e,t)){if($l(e))throw Error(w(418));t=Kt(n.nextSibling);var r=Ue;t&&ku(e,t)?Qc(r,n):(e.flags=e.flags&-4097|2,q=!1,Ue=e)}}else{if($l(e))throw Error(w(418));e.flags=e.flags&-4097|2,q=!1,Ue=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function wo(e){if(e!==Ue)return!1;if(!q)return Su(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=$e)){if($l(e))throw Kc(),Error(w(418));for(;t;)Qc(e,t),t=Kt(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ue?Kt(e.stateNode.nextSibling):null;return!0}function Kc(){for(var e=$e;e;)e=Kt(e.nextSibling)}function qn(){$e=Ue=null,q=!1}function ka(e){nt===null?nt=[e]:nt.push(e)}var Om=Tt.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function Yc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=qt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=cl(p,d.mode,y),c.return=d,c):(c=o(c,p),c.return=d,c)}function s(d,c,p,y){var N=p.type;return N===Ln?f(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Nu(N)===c.type)?(y=o(c,p.props),y.ref=mr(d,c,p),y.return=d,y):(y=Ao(p.type,p.key,p.props,null,d.mode,y),y.ref=mr(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=dl(p,d.mode,y),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,y,N){return c===null||c.tag!==7?(c=vn(p,d.mode,y,N),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=cl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lo:return p=Ao(c.type,c.key,c.props,null,d.mode,p),p.ref=mr(d,null,c),p.return=d,p;case Tn:return c=dl(c,d.mode,p),c.return=d,c;case Ft:var y=c._init;return h(d,y(c._payload),p)}if(yr(c)||cr(c))return c=vn(c,d.mode,p,null),c.return=d,c;ko(d,c)}return null}function m(d,c,p,y){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lo:return p.key===N?s(d,c,p,y):null;case Tn:return p.key===N?u(d,c,p,y):null;case Ft:return N=p._init,m(d,c,N(p._payload),y)}if(yr(p)||cr(p))return N!==null?null:f(d,c,p,y,null);ko(d,p)}return null}function v(d,c,p,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:return d=d.get(y.key===null?p:y.key)||null,s(c,d,y,N);case Tn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,N);case Ft:var k=y._init;return v(d,c,p,k(y._payload),N)}if(yr(y)||cr(y))return d=d.get(p)||null,f(c,d,y,N,null);ko(c,y)}return null}function g(d,c,p,y){for(var N=null,k=null,S=c,x=c=0,A=null;S!==null&&x<p.length;x++){S.index>x?(A=S,S=null):A=S.sibling;var P=m(d,S,p[x],y);if(P===null){S===null&&(S=A);break}e&&S&&P.alternate===null&&t(d,S),c=i(P,c,x),k===null?N=P:k.sibling=P,k=P,S=A}if(x===p.length)return n(d,S),q&&dn(d,x),N;if(S===null){for(;x<p.length;x++)S=h(d,p[x],y),S!==null&&(c=i(S,c,x),k===null?N=S:k.sibling=S,k=S);return q&&dn(d,x),N}for(S=r(d,S);x<p.length;x++)A=v(S,d,x,p[x],y),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?x:A.key),c=i(A,c,x),k===null?N=A:k.sibling=A,k=A);return e&&S.forEach(function(j){return t(d,j)}),q&&dn(d,x),N}function b(d,c,p,y){var N=cr(p);if(typeof N!="function")throw Error(w(150));if(p=N.call(p),p==null)throw Error(w(151));for(var k=N=null,S=c,x=c=0,A=null,P=p.next();S!==null&&!P.done;x++,P=p.next()){S.index>x?(A=S,S=null):A=S.sibling;var j=m(d,S,P.value,y);if(j===null){S===null&&(S=A);break}e&&S&&j.alternate===null&&t(d,S),c=i(j,c,x),k===null?N=j:k.sibling=j,k=j,S=A}if(P.done)return n(d,S),q&&dn(d,x),N;if(S===null){for(;!P.done;x++,P=p.next())P=h(d,P.value,y),P!==null&&(c=i(P,c,x),k===null?N=P:k.sibling=P,k=P);return q&&dn(d,x),N}for(S=r(d,S);!P.done;x++,P=p.next())P=v(S,d,x,P.value,y),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?x:P.key),c=i(P,c,x),k===null?N=P:k.sibling=P,k=P);return e&&S.forEach(function(pe){return t(d,pe)}),q&&dn(d,x),N}function E(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lo:e:{for(var N=p.key,k=c;k!==null;){if(k.key===N){if(N=p.type,N===Ln){if(k.tag===7){n(d,k.sibling),c=o(k,p.props.children),c.return=d,d=c;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Nu(N)===k.type){n(d,k.sibling),c=o(k,p.props),c.ref=mr(d,k,p),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}p.type===Ln?(c=vn(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Ao(p.type,p.key,p.props,null,d.mode,y),y.ref=mr(d,c,p),y.return=d,d=y)}return l(d);case Tn:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=dl(p,d.mode,y),c.return=d,d=c}return l(d);case Ft:return k=p._init,E(d,c,k(p._payload),y)}if(yr(p))return g(d,c,p,y);if(cr(p))return b(d,c,p,y);ko(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=cl(p,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return E}var Zn=Yc(!0),Gc=Yc(!1),Go=tn(null),Xo=null,Un=null,Sa=null;function Na(){Sa=Un=Xo=null}function Ca(e){var t=Go.current;X(Go),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){Xo=e,Sa=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Te=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(Xo===null)throw Error(w(308));Un=e,Xo.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var mn=null;function Ea(e){mn===null?mn=[e]:mn.push(e)}function Xc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ea(t)):(n.next=o.next,o.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ea(r)):(t.next=o.next,o.next=t),r.interleaved=t,Rt(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,f=u=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,b=a;switch(m=t,v=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){h=g.call(v,h,m);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,m=typeof g=="function"?g.call(v,h,m):g,m==null)break e;h=ee({},h,m);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,s=h):f=f.next=v,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);wn|=l,e.lanes=l,e.memoizedState=h}}function Eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var qr={},ht=tn(qr),Br=tn(qr),Vr=tn(qr);function hn(e){if(e===qr)throw Error(w(174));return e}function za(e,t){switch(K(Vr,t),K(Br,e),K(ht,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}X(ht),K(ht,t)}function Jn(){X(ht),X(Br),X(Vr)}function Zc(e){hn(Vr.current);var t=hn(ht.current),n=wl(t,e.type);t!==n&&(K(Br,e),K(ht,n))}function Ra(e){Br.current===e&&(X(ht),X(Br))}var Z=tn(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function Pa(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var Po=Tt.ReactCurrentDispatcher,il=Tt.ReactCurrentBatchConfig,xn=0,J=null,le=null,ue=null,Jo=!1,_r=!1,Hr=0,Im=0;function ye(){throw Error(w(321))}function Ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function La(e,t,n,r,o,i){if(xn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?jm:Bm,e=n(r,o),_r){i=0;do{if(_r=!1,Hr=0,25<=i)throw Error(w(301));i+=1,ue=le=null,t.updateQueue=null,Po.current=Vm,e=n(r,o)}while(_r)}if(Po.current=ei,t=le!==null&&le.next!==null,xn=0,ue=le=J=null,Jo=!1,t)throw Error(w(300));return e}function Da(){var e=Hr!==0;return Hr=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(w(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Wr(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=qe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((xn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,J.lanes|=f,wn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,it(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=qe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);it(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Jc(){}function ed(e,t){var n=J,r=qe(),o=t(),i=!it(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Ma(rd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Qr(9,nd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(w(349));(xn&30)!==0||td(n,t,o)}return o}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,r){t.value=n,t.getSnapshot=r,od(t)&&id(e)}function rd(e,t,n){return n(function(){od(t)&&id(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function id(e){var t=Rt(e,1);t!==null&&ot(t,e,1,-1)}function _u(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Um.bind(null,J,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ld(){return qe().memoizedState}function To(e,t,n,r){var o=pt();J.flags|=e,o.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&Ta(r,l.deps)){o.memoizedState=Qr(t,n,i,r);return}}J.flags|=e,o.memoizedState=Qr(1|t,n,i,r)}function zu(e,t){return To(8390656,8,e,t)}function Ma(e,t){return pi(2048,8,e,t)}function ad(e,t){return pi(4,2,e,t)}function sd(e,t){return pi(4,4,e,t)}function ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,ud.bind(null,t,e),n)}function Aa(){}function dd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fd(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n):(it(n,t)||(n=bc(),J.lanes|=n,wn|=n,e.baseState=!0),t)}function Fm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=il.transition;il.transition={};try{e(!1),t()}finally{V=n,il.transition=r}}function md(){return qe().memoizedState}function $m(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hd(e))gd(t,n);else if(n=Xc(e,t,n,r),n!==null){var o=ze();ot(n,e,r,o),vd(n,t,r)}}function Um(e,t,n){var r=Xt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hd(e))gd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,it(a,l)){var s=t.interleaved;s===null?(o.next=o,Ea(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}n=Xc(e,t,o,r),n!==null&&(o=ze(),ot(n,e,r,o),vd(n,t,r))}}function hd(e){var t=e.alternate;return e===J||t!==null&&t===J}function gd(e,t){_r=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}var ei={readContext:Xe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},jm={readContext:Xe,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$m.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:Aa,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=Fm.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=pt();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ce===null)throw Error(w(349));(xn&30)!==0||td(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,zu(rd.bind(null,r,i,e),[e]),r.flags|=2048,Qr(9,nd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=pt(),t=ce.identifierPrefix;if(q){var n=Ct,r=Nt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bm={readContext:Xe,useCallback:dd,useContext:Xe,useEffect:Ma,useImperativeHandle:cd,useInsertionEffect:ad,useLayoutEffect:sd,useMemo:pd,useReducer:ll,useRef:ld,useState:function(){return ll(Wr)},useDebugValue:Aa,useDeferredValue:function(e){var t=qe();return fd(t,le.memoizedState,e)},useTransition:function(){var e=ll(Wr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1},Vm={readContext:Xe,useCallback:dd,useContext:Xe,useEffect:Ma,useImperativeHandle:cd,useInsertionEffect:ad,useLayoutEffect:sd,useMemo:pd,useReducer:al,useRef:ld,useState:function(){return al(Wr)},useDebugValue:Aa,useDeferredValue:function(e){var t=qe();return le===null?t.memoizedState=e:fd(t,le.memoizedState,e)},useTransition:function(){var e=al(Wr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Xt(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(ot(t,e,o,r),Ro(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Xt(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(ot(t,e,o,r),Ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Xt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yt(e,o,r),t!==null&&(ot(t,e,r,n),Ro(t,e,r))}};function Ru(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(o,i):!0}function bd(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=De(t)?bn:ke.current,r=t.contextTypes,i=(r=r!=null)?Xn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},_a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=De(t)?bn:ke.current,o.context=Xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fi.enqueueReplaceState(o,o.state,null),qo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var n="",r=t;do n+=yf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hm=typeof WeakMap=="function"?WeakMap:Map;function yd(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,ea=r),Hl(e,t)},n}function xd(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=oh.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Du(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Wm=Tt.ReactCurrentOwner,Te=!1;function _e(e,t,n,r){t.child=e===null?Gc(t,null,n,r):Zn(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var i=t.ref;return Kn(t,o),r=La(e,t,n,r,i,o),n=Da(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(q&&n&&xa(t),t.flags|=1,_e(e,t,r,o),t.child)}function Au(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Va(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wd(e,t,i,r,o)):(e=Ao(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return Pt(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Pt(e,t,o)}return Wl(e,t,n,r,o)}function kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Bn,Fe),Fe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Bn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Bn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Bn,Fe),Fe|=r;return _e(e,t,o,n),t.child}function Sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var i=De(n)?bn:ke.current;return i=Xn(t,i),Kn(t,o),n=La(e,t,n,r,i,o),r=Da(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(q&&r&&xa(t),t.flags|=1,_e(e,t,n,o),t.child)}function Ou(e,t,n,r,o){if(De(n)){var i=!0;Qo(t)}else i=!1;if(Kn(t,o),t.stateNode===null)Lo(e,t),bd(t,n,r),Vl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=De(n)?bn:ke.current,u=Xn(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pu(t,l,r,u),$t=!1;var m=t.memoizedState;l.state=m,qo(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Le.current||$t?(typeof f=="function"&&(Bl(t,n,f,r),s=t.memoizedState),(a=$t||Ru(t,n,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,qc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:et(t.type,a),l.props=u,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xe(s):(s=De(n)?bn:ke.current,s=Xn(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Pu(t,l,r,s),$t=!1,m=t.memoizedState,l.state=m,qo(t,r,l,o);var g=t.memoizedState;a!==h||m!==g||Le.current||$t?(typeof v=="function"&&(Bl(t,n,v,r),g=t.memoizedState),(u=$t||Ru(t,n,u,r,m,g,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ql(e,t,n,r,i,o)}function Ql(e,t,n,r,o,i){Sd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&wu(t,n,!1),Pt(e,t,i);r=t.stateNode,Wm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Zn(t,e.child,null,i),t.child=Zn(t,null,a,i)):_e(e,t,a,i),t.memoizedState=r.state,o&&wu(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),za(e,t.containerInfo)}function Iu(e,t,n,r,o){return qn(),ka(o),t.flags|=256,_e(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cd(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(Z,o&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=gi(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yl(n),t.memoizedState=Kl,e):Oa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Qm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=qt(a,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Yl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oa(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&ka(r),Zn(t,e.child,null,n),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(w(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gi({mode:"visible",children:r.children},o,0,null),i=vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Zn(t,e.child,null,l),t.child.memoizedState=Yl(l),t.memoizedState=Kl,i);if((t.mode&1)===0)return So(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=sl(i,r,void 0),So(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Rt(e,o),ot(r,e,o,-1))}return Ba(),r=sl(Error(w(421))),So(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ih.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,$e=Kt(o.nextSibling),Ue=t,q=!0,nt=null,e!==null&&(Qe[Ke++]=Nt,Qe[Ke++]=Ct,Qe[Ke++]=yn,Nt=e.id,Ct=e.overflow,yn=t),t=Oa(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function ul(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ed(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ul(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ul(t,!0,n,null,i);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Km(e,t,n){switch(t.tag){case 3:Nd(t),qn();break;case 5:Zc(t);break;case 1:De(t.type)&&Qo(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Go,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Cd(e,t,n):(K(Z,Z.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ed(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return Pt(e,t,n)}var _d,Gl,zd,Rd;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};zd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(ht.current);var i=null;switch(n){case"input":o=vl(e,o),r=vl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=xl(e,o),r=xl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ho)}kl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Rd=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ym(e,t,n){var r=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return De(t.type)&&Wo(),xe(t),null;case 3:return r=t.stateNode,Jn(),X(Le),X(ke),Pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nt!==null&&(ra(nt),nt=null))),Gl(e,t),xe(t),null;case 5:Ra(t);var o=hn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)zd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return xe(t),null}if(e=hn(ht.current),wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)G(wr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Qs(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Ys(r,i),G("invalid",r)}kl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",""+a]):Tr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":ao(r),Ks(r,i,!0);break;case"textarea":ao(r),Gs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ho)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[jr]=r,_d(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)G(wr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Qs(e,r),o=vl(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Ys(e,r),o=xl(e,r),G("invalid",e);break;default:o=r}kl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?lc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&oc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Lr(e,s):typeof s=="number"&&Lr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&la(e,i,s,l))}switch(n){case"input":ao(e),Ks(e,r,!1);break;case"textarea":ao(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=hn(Vr.current),hn(ht.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return xe(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&$e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Kc(),qn(),t.flags|=98560,i=!1;else if(i=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[ft]=t}else qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else nt!==null&&(ra(nt),nt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Z.current&1)!==0?ae===0&&(ae=3):Ba())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Jn(),Gl(e,t),e===null&&$r(t.stateNode.containerInfo),xe(t),null;case 10:return Ca(t.type._context),xe(t),null;case 17:return De(t.type)&&Wo(),xe(t),null;case 19:if(X(Z),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)hr(i,!1);else{if(ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Zo(e),l!==null){for(t.flags|=128,hr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>tr&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!q)return xe(t),null}else 2*ne()-i.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Fe&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Gm(e,t){switch(wa(t),t.tag){case 1:return De(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),X(Le),X(ke),Pa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ra(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return Jn(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var No=!1,we=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,C=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){te(e,t,r)}}var $u=!1;function qm(e,t){if(Dl=jo,e=Mc(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var v;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++f===r&&(s=l),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},jo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,E=g.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:et(t.type,b),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return g=$u,$u=!1,g}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Xl(t,n,i)}o=o.next}while(o!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[jr],delete t[Il],delete t[Dm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var fe=null,tt=!1;function It(e,t,n){for(n=n.child;n!==null;)Ld(e,t,n),n=n.sibling}function Ld(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:we||jn(n,t);case 6:var r=fe,o=tt;fe=null,It(e,t,n),fe=r,tt=o,fe!==null&&(tt?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(tt?(e=fe,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),Or(e)):nl(fe,n.stateNode));break;case 4:r=fe,o=tt,fe=n.stateNode.containerInfo,tt=!0,It(e,t,n),fe=r,tt=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Xl(n,t,l),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!we&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,It(e,t,n),we=r):It(e,t,n);break;default:It(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xm),t.forEach(function(r){var o=lh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,tt=!1;break e;case 3:fe=a.stateNode.containerInfo,tt=!0;break e;case 4:fe=a.stateNode.containerInfo,tt=!0;break e}a=a.return}if(fe===null)throw Error(w(160));Ld(i,l,o),fe=null,tt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),dt(e),r&4){try{zr(3,e,e.return),mi(3,e)}catch(b){te(e,e.return,b)}try{zr(5,e,e.return)}catch(b){te(e,e.return,b)}}break;case 1:Je(t,e),dt(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Je(t,e),dt(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var o=e.stateNode;try{Lr(o,"")}catch(b){te(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&tc(o,i),Sl(a,l);var u=Sl(a,i);for(l=0;l<s.length;l+=2){var f=s[l],h=s[l+1];f==="style"?lc(o,h):f==="dangerouslySetInnerHTML"?oc(o,h):f==="children"?Lr(o,h):la(o,f,h,u)}switch(a){case"input":bl(o,i);break;case"textarea":nc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Vn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Vn(o,!!i.multiple,i.defaultValue,!0):Vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(b){te(e,e.return,b)}}break;case 6:if(Je(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){te(e,e.return,b)}}break;case 3:if(Je(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(b){te(e,e.return,b)}break;case 4:Je(t,e),dt(e);break;case 13:Je(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||($a=ne())),r&4&&ju(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||f,Je(t,e),we=u):Je(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(C=e,f=e.child;f!==null;){for(h=C=f;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:zr(4,m,m.return);break;case 1:jn(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){te(r,n,b)}}break;case 5:jn(m,m.return);break;case 22:if(m.memoizedState!==null){Vu(h);continue}}v!==null?(v.return=m,C=v):Vu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ic("display",l))}catch(b){te(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){te(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Je(t,e),dt(e),r&4&&ju(e);break;case 21:break;default:Je(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lr(o,""),r.flags&=-33);var i=Uu(e);Jl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Uu(e);Zl(e,a,l);break;default:throw Error(w(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zm(e,t,n){C=e,Md(e,t,n)}function Md(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||No;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||we;a=No;var u=we;if(No=l,(we=s)&&!u)for(C=o;C!==null;)l=C,s=l.child,l.tag===22&&l.memoizedState!==null?Hu(o):s!==null?(s.return=l,C=s):Hu(o);for(;i!==null;)C=i,Md(i,t,n),i=i.sibling;C=o,No=a,we=u}Bu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,C=i):Bu(e,t,n)}}function Bu(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:we||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Eu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}we||t.flags&512&&ql(t)}catch(m){te(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Vu(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Hu(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{ql(t)}catch(s){te(t,i,s)}break;case 5:var l=t.return;try{ql(t)}catch(s){te(t,l,s)}}}catch(s){te(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Jm=Math.ceil,ti=Tt.ReactCurrentDispatcher,Ia=Tt.ReactCurrentOwner,Ge=Tt.ReactCurrentBatchConfig,B=0,ce=null,re=null,me=0,Fe=0,Bn=tn(0),ae=0,Kr=null,wn=0,hi=0,Fa=0,Rr=null,Pe=null,$a=0,tr=1/0,kt=null,ni=!1,ea=null,Gt=null,Co=!1,Vt=null,ri=0,Pr=0,ta=null,Do=-1,Mo=0;function ze(){return(B&6)!==0?ne():Do!==-1?Do:Do=ne()}function Xt(e){return(e.mode&1)===0?1:(B&2)!==0&&me!==0?me&-me:Om.transition!==null?(Mo===0&&(Mo=bc()),Mo):(e=V,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e)}function ot(e,t,n,r){if(50<Pr)throw Pr=0,ta=null,Error(w(185));Yr(e,n,r),((B&2)===0||e!==ce)&&(e===ce&&((B&2)===0&&(hi|=n),ae===4&&jt(e,me)),Me(e,r),n===1&&B===0&&(t.mode&1)===0&&(tr=ne()+500,di&&nn()))}function Me(e,t){var n=e.callbackNode;Ff(e,t);var r=Uo(e,e===ce?me:0);if(r===0)n!==null&&Zs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zs(n),t===1)e.tag===0?Am(Wu.bind(null,e)):Hc(Wu.bind(null,e)),Tm(function(){(B&6)===0&&nn()}),n=null;else{switch(yc(r)){case 1:n=da;break;case 4:n=gc;break;case 16:n=$o;break;case 536870912:n=vc;break;default:n=$o}n=Bd(n,Ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ad(e,t){if(Do=-1,Mo=0,(B&6)!==0)throw Error(w(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=Uo(e,e===ce?me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=oi(e,r);else{t=r;var o=B;B|=2;var i=Id();(ce!==e||me!==t)&&(kt=null,tr=ne()+500,gn(e,t));do try{nh();break}catch(a){Od(e,a)}while(!0);Na(),ti.current=i,B=o,re!==null?t=0:(ce=null,me=0,t=ae)}if(t!==0){if(t===2&&(o=zl(e),o!==0&&(r=o,t=na(e,o))),t===1)throw n=Kr,gn(e,0),jt(e,r),Me(e,ne()),n;if(t===6)jt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!eh(o)&&(t=oi(e,r),t===2&&(i=zl(e),i!==0&&(r=i,t=na(e,i))),t===1))throw n=Kr,gn(e,0),jt(e,r),Me(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:pn(e,Pe,kt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=$a+500-ne(),10<t)){if(Uo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ol(pn.bind(null,e,Pe,kt),t);break}pn(e,Pe,kt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-rt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jm(r/1960))-r,10<r){e.timeoutHandle=Ol(pn.bind(null,e,Pe,kt),r);break}pn(e,Pe,kt);break;case 5:pn(e,Pe,kt);break;default:throw Error(w(329))}}}return Me(e,ne()),e.callbackNode===n?Ad.bind(null,e):null}function na(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=oi(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&ra(t)),e}function ra(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function eh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!it(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Fa,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Wu(e){if((B&6)!==0)throw Error(w(327));Yn();var t=Uo(e,0);if((t&1)===0)return Me(e,ne()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=na(e,r))}if(n===1)throw n=Kr,gn(e,0),jt(e,t),Me(e,ne()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Pe,kt),Me(e,ne()),null}function Ua(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(tr=ne()+500,di&&nn())}}function kn(e){Vt!==null&&Vt.tag===0&&(B&6)===0&&Yn();var t=B;B|=1;var n=Ge.transition,r=V;try{if(Ge.transition=null,V=1,e)return e()}finally{V=r,Ge.transition=n,B=t,(B&6)===0&&nn()}}function ja(){Fe=Bn.current,X(Bn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Jn(),X(Le),X(ke),Pa();break;case 5:Ra(r);break;case 4:Jn();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Ca(r.type._context);break;case 22:case 23:ja()}n=n.return}if(ce=e,re=e=qt(e.current,null),me=Fe=t,ae=0,Kr=null,Fa=hi=wn=0,Pe=Rr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}mn=null}return e}function Od(e,t){do{var n=re;try{if(Na(),Po.current=ei,Jo){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Jo=!1}if(xn=0,ue=le=J=null,_r=!1,Hr=0,Ia.current=null,n===null||n.return===null){ae=1,Kr=t,re=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Lu(l);if(v!==null){v.flags&=-257,Du(v,l,a,i,t),v.mode&1&&Tu(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var b=new Set;b.add(s),t.updateQueue=b}else g.add(s);break e}else{if((t&1)===0){Tu(i,u,t),Ba();break e}s=Error(w(426))}}else if(q&&a.mode&1){var E=Lu(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Du(E,l,a,i,t),ka(er(s,a));break e}}i=s=er(s,a),ae!==4&&(ae=2),Rr===null?Rr=[i]:Rr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=yd(i,s,t);Cu(i,d);break e;case 1:a=s;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gt===null||!Gt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=xd(i,a,t);Cu(i,y);break e}}i=i.return}while(i!==null)}$d(n)}catch(N){t=N,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Id(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Ba(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||(wn&268435455)===0&&(hi&268435455)===0||jt(ce,me)}function oi(e,t){var n=B;B|=2;var r=Id();(ce!==e||me!==t)&&(kt=null,gn(e,t));do try{th();break}catch(o){Od(e,o)}while(!0);if(Na(),B=n,ti.current=r,re!==null)throw Error(w(261));return ce=null,me=0,ae}function th(){for(;re!==null;)Fd(re)}function nh(){for(;re!==null&&!Rf();)Fd(re)}function Fd(e){var t=jd(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?$d(e):re=t,Ia.current=null}function $d(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ym(n,t,Fe),n!==null){re=n;return}}else{if(n=Gm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function pn(e,t,n){var r=V,o=Ge.transition;try{Ge.transition=null,V=1,rh(e,t,n,r)}finally{Ge.transition=o,V=r}return null}function rh(e,t,n,r){do Yn();while(Vt!==null);if((B&6)!==0)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($f(e,i),e===ce&&(re=ce=null,me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Co||(Co=!0,Bd($o,function(){return Yn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var l=V;V=1;var a=B;B|=4,Ia.current=null,qm(e,n),Dd(n,e),Cm(Ml),jo=!!Dl,Ml=Dl=null,e.current=n,Zm(n,e,o),Pf(),B=a,V=l,Ge.transition=i}else e.current=n;if(Co&&(Co=!1,Vt=e,ri=o),i=e.pendingLanes,i===0&&(Gt=null),Df(n.stateNode,r),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ni)throw ni=!1,e=ea,ea=null,e;return(ri&1)!==0&&e.tag!==0&&Yn(),i=e.pendingLanes,(i&1)!==0?e===ta?Pr++:(Pr=0,ta=e):Pr=0,nn(),null}function Yn(){if(Vt!==null){var e=yc(ri),t=Ge.transition,n=V;try{if(Ge.transition=null,V=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,ri=0,(B&6)!==0)throw Error(w(331));var o=B;for(B|=4,C=e.current;C!==null;){var i=C,l=i.child;if((C.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:zr(8,f,i)}var h=f.child;if(h!==null)h.return=f,C=h;else for(;C!==null;){f=C;var m=f.sibling,v=f.return;if(Pd(f),f===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var g=i.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}C=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){l=C;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,C=p;else e:for(l=c;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(N){te(a,a.return,N)}if(a===l){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(B=o,nn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{V=n,Ge.transition=t}}return!1}function Qu(e,t,n){t=er(n,t),t=yd(e,t,1),e=Yt(e,t,1),t=ze(),e!==null&&(Yr(e,1,t),Me(e,t))}function te(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=er(n,e),e=xd(t,e,1),t=Yt(t,e,1),e=ze(),t!==null&&(Yr(t,1,e),Me(t,e));break}}t=t.return}}function oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(ae===4||ae===3&&(me&130023424)===me&&500>ne()-$a?gn(e,0):Fa|=n),Me(e,t)}function Ud(e,t){t===0&&((e.mode&1)===0?t=1:(t=co,co<<=1,(co&130023424)===0&&(co=4194304)));var n=ze();e=Rt(e,t),e!==null&&(Yr(e,t,n),Me(e,n))}function ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ud(e,n)}function lh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Ud(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Te=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Te=!1,Km(e,t,n);Te=(e.flags&131072)!==0}else Te=!1,q&&(t.flags&1048576)!==0&&Wc(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var o=Xn(t,ke.current);Kn(t,n),o=La(null,t,r,e,o,n);var i=Da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Qo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,_a(t),o.updater=fi,t.stateNode=o,o._reactInternals=t,Vl(t,r,e,n),t=Ql(null,t,r,!0,i,n)):(t.tag=0,q&&i&&xa(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=sh(r),e=et(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=Ou(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=Au(null,t,r,et(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Ou(e,t,r,o,n);case 3:e:{if(Nd(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,qc(e,t),qo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=er(Error(w(423)),t),t=Iu(e,t,r,n,o);break e}else if(r!==o){o=er(Error(w(424)),t),t=Iu(e,t,r,n,o);break e}else for($e=Kt(t.stateNode.containerInfo.firstChild),Ue=t,q=!0,nt=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===o){t=Pt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Zc(t),e===null&&Ul(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Al(r,o)?l=null:i!==null&&Al(r,i)&&(t.flags|=32),Sd(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return Cd(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Mu(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(Go,r._currentValue),r._currentValue=l,i!==null)if(it(i.value,l)){if(i.children===o.children&&!Le.current){t=Pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),jl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kn(t,n),o=Xe(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=et(r,t.pendingProps),o=et(r.type,o),Au(e,t,r,o,n);case 15:return wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Lo(e,t),t.tag=1,De(r)?(e=!0,Qo(t)):e=!1,Kn(t,n),bd(t,r,o),Vl(t,r,o,n),Ql(null,t,r,!0,e,n);case 19:return Ed(e,t,n);case 22:return kd(e,t,n)}throw Error(w(156,t.tag))};function Bd(e,t){return hc(e,t)}function ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new ah(e,t,n,r)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sh(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sa)return 11;if(e===ua)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Va(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return vn(n.children,o,i,t);case aa:l=8,o|=8;break;case fl:return e=Ye(12,n,t,o|2),e.elementType=fl,e.lanes=i,e;case ml:return e=Ye(13,n,t,o),e.elementType=ml,e.lanes=i,e;case hl:return e=Ye(19,n,t,o),e.elementType=hl,e.lanes=i,e;case Zu:return gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:l=10;break e;case qu:l=9;break e;case sa:l=11;break e;case ua:l=14;break e;case Ft:l=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ye(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Zu,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ha(e,t,n,r,o,i,l,a,s){return e=new uh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(i),e}function ch(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vd(e){if(!e)return Jt;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(De(n))return Vc(e,n,t)}return t}function Hd(e,t,n,r,o,i,l,a,s){return e=Ha(n,r,!0,e,o,i,l,a,s),e.context=Vd(null),n=e.current,r=ze(),o=Xt(n),i=Et(r,o),i.callback=t??null,Yt(n,i,o),e.current.lanes=o,Yr(e,o,r),Me(e,r),e}function vi(e,t,n,r){var o=t.current,i=ze(),l=Xt(o);return n=Vd(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(o,t,l),e!==null&&(ot(e,o,l,i),Ro(e,o,l)),l}function ii(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wa(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function dh(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qa(e){this._internalRoot=e}bi.prototype.render=Qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));vi(e,t,null,null)};bi.prototype.unmount=Qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){vi(null,e,null,null)}),t[zt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Nc(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function ph(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ii(l);i.call(u)}}var l=Hd(t,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=l,e[zt]=l.current,$r(e.nodeType===8?e.parentNode:e),kn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ii(s);a.call(u)}}var s=Ha(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=s,e[zt]=s.current,$r(e.nodeType===8?e.parentNode:e),kn(function(){vi(t,s,n,r)}),s}function xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ii(l);a.call(s)}}vi(t,l,e,o)}else l=ph(n,t,e,o,r);return ii(l)}xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(pa(t,n|1),Me(t,ne()),(B&6)===0&&(tr=ne()+500,nn()))}break;case 13:kn(function(){var r=Rt(e,1);if(r!==null){var o=ze();ot(r,e,1,o)}}),Wa(e,1)}};fa=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=ze();ot(t,e,134217728,n)}Wa(e,134217728)}};wc=function(e){if(e.tag===13){var t=Xt(e),n=Rt(e,t);if(n!==null){var r=ze();ot(n,e,t,r)}Wa(e,t)}};kc=function(){return V};Sc=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Cl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ci(r);if(!o)throw Error(w(90));ec(r),bl(r,o)}}}break;case"textarea":nc(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};uc=Ua;cc=kn;var fh={usingClientEntryPoint:!1,Events:[Xr,On,ci,ac,sc,Ua]},gr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mh={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fc(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vr.isDisabled&&vr.supportsFiber))try{li=vr.inject(mh),mt=vr}catch{}var vr;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(w(200));return ch(e,t,null,n)};Ve.createRoot=function(e,t){if(!Ka(e))throw Error(w(299));var n=!1,r="",o=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ha(e,1,!1,null,null,n,!1,r,o),e[zt]=t.current,$r(e.nodeType===8?e.parentNode:e),new Qa(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=fc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return kn(e)};Ve.hydrate=function(e,t,n){if(!yi(t))throw Error(w(200));return xi(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Hd(t,null,e,1,n??null,o,!1,i,l),e[zt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bi(t)};Ve.render=function(e,t,n){if(!yi(t))throw Error(w(200));return xi(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!yi(e))throw Error(w(40));return e._reactRootContainer?(kn(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ua;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return xi(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426"});var Gd=wt((Wh,Yd)=>{"use strict";function Kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd)}catch(e){console.error(e)}}Kd(),Yd.exports=Qd()});var qd=wt(Ya=>{"use strict";var Xd=Gd();Ya.createRoot=Xd.createRoot,Ya.hydrateRoot=Xd.hydrateRoot;var Qh});var rp=wt(wi=>{"use strict";var bh=Ie(),yh=Symbol.for("react.element"),xh=Symbol.for("react.fragment"),wh=Object.prototype.hasOwnProperty,kh=bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sh={key:!0,ref:!0,__self:!0,__source:!0};function np(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)wh.call(t,r)&&!Sh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:yh,type:e,key:i,ref:l,props:o,_owner:kh.current}}wi.Fragment=xh;wi.jsx=np;wi.jsxs=np});var H=wt((qh,op)=>{"use strict";op.exports=rp()});var T=F(Ie());var Ae=F(Ie(),1),Zd=F(qd(),1),Jd=Ae.createContext(null);function hh(){let e=Ae.useContext(Jd);if(!e)throw new Error("RenderContext not found");return e}function gh(){return hh().model}function de(e){let t=gh(),n=Ae.useSyncExternalStore(o=>(t.on(`change:${e}`,o),()=>t.off(`change:${e}`,o)),()=>t.get(e)),r=Ae.useCallback(o=>{t.set(e,typeof o=="function"?o(t.get(e)):o),t.save_changes()},[t,e]);return[n,r]}function ep(e){return({el:t,model:n,experimental:r})=>{let o=Zd.createRoot(t);return o.render(Ae.createElement(Ae.StrictMode,null,Ae.createElement(Jd.Provider,{value:{model:n,experimental:r}},Ae.createElement(e)))),()=>o.unmount()}}var vt=F(Ie());var tp=`/* Rule builder widget \u2014 histogram-first (Variation B), evolved from rs-/rd- DNA */

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
`;var lt=F(Ie());var He=F(H()),ip="Importance estimates how useful each attribute is for predicting the outcome, derived from a tree-based model trained on the data. Higher = more predictive potential. It is a ranking aid, not a guarantee \u2014 the exact method is still being finalized.";function ki({kind:e}){return(0,He.jsx)("span",{className:`rb-typebadge ${e}`,title:e==="num"?"Numerical":"Categorical",children:e==="num"?"123":"abc"})}function lp({value:e}){return(0,He.jsx)("span",{className:"rb-imp",title:`Importance ${e.toFixed(2)}`,children:(0,He.jsx)("span",{className:"rb-imp-fill",style:{width:`${e*100}%`,display:"block"}})})}function Si({children:e,align:t}){return(0,He.jsxs)("span",{className:`rb-info${t==="right"?" rb-info-right":""}`,children:[(0,He.jsx)("button",{type:"button",className:"rb-info-btn","aria-label":"What does importance mean?",children:"i"}),(0,He.jsx)("span",{className:"rb-info-pop",role:"tooltip",children:e})]})}function ap(){return(0,He.jsxs)("span",{className:"rb-legend",title:"Histogram colors: green = cases where the outcome is positive (rule should catch these), blue = all other cases",children:[(0,He.jsx)("i",{className:"rb-legend-pos"}),"outcome\xA0\u2295",(0,He.jsx)("i",{className:"rb-legend-all"}),"other"]})}function Ga({options:e,value:t,onChange:n}){return(0,He.jsx)("div",{className:"rb-seg",children:e.map(r=>(0,He.jsx)("button",{type:"button",className:t===r.v?"rb-on":"",onClick:()=>n(r.v),children:r.label},r.v))})}var rn=F(H());function Nh(e,t,n){let r=[e.label];if(e.family!=="other"){let o=e.sources.length?` \xB7 ${e.sources.join(", ")}`:"";r.push(`${e.familyLabel}${o}`)}return n?(r.push("Forbidden \u2014 the optimizer will not use it, and it cannot be added by hand"),r.push("\u20E0 to allow it again")):r.push(t?"Already in the rule":"Click or drag to add to the rule"),r.join(`
`)}function Ni({attr:e,used:t,forbidden:n,onAdd:r,onUnforbid:o}){let i=t||n;return(0,rn.jsxs)("div",{className:`rb-attr${t?" rb-used":""}${n?" rb-forbidden":""}`,draggable:!i,onDragStart:i?void 0:l=>{l.dataTransfer.setData("text/plain",e.id),l.dataTransfer.effectAllowed="copy"},onClick:i?void 0:()=>r(e.id),title:Nh(e,t,n),children:[(0,rn.jsx)(ki,{kind:e.kind}),(0,rn.jsx)("span",{className:"rb-attr-name",children:e.label}),n?(0,rn.jsx)("button",{type:"button",className:"rb-attr-unforbid",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${e.label}`,onClick:l=>{l.stopPropagation(),o(e.id)},children:"\u20E0"}):t?(0,rn.jsx)("span",{className:"rb-attr-check",children:"\u2713"}):(0,rn.jsx)(lp,{value:e.importance})]})}var Ch="No source",Xa={query:"",kind:"all",minImportance:0,hideUsed:!1,families:new Set,sources:new Set};function up(e){return(e.kind!=="all"?1:0)+(e.minImportance>0?1:0)+(e.hideUsed?1:0)+(e.families.size>0?1:0)+(e.sources.size>0?1:0)}function cp(e,t,n){let r=t.query.trim().toLowerCase(),o=new Set(n);return e.filter(i=>!(r&&!i.label.toLowerCase().includes(r)||t.kind!=="all"&&i.kind!==t.kind||i.importance<t.minImportance||t.hideUsed&&o.has(i.id)||t.families.size>0&&!t.families.has(i.family)||t.sources.size>0&&!i.sources.some(l=>t.sources.has(l))))}function dp(e,t){if(t==="none")return e.length?[{key:"",label:"",attrs:e}]:[];let n=new Map,r=(o,i,l)=>{let a=n.get(o);a?a.attrs.push(l):n.set(o,{key:o,label:i,attrs:[l]})};for(let o of e)if(t==="family")r(o.family,o.familyLabel,o);else if(o.sources.length===0)r("",Ch,o);else for(let i of o.sources)r(i,i,o);return[...n.values()].sort((o,i)=>{if(o.key==="")return 1;if(i.key==="")return-1;let l=sp(i.attrs)-sp(o.attrs);return l!==0?l:o.label.localeCompare(i.label)})}function sp(e){return e.reduce((t,n)=>Math.max(t,n.importance),0)}function qa(e,t){let n=new Map,r=(o,i)=>{let l=n.get(o);l?l.count+=1:n.set(o,{key:o,label:i,count:1})};for(let o of e)if(t==="family")r(o.family,o.familyLabel);else for(let i of o.sources)r(i,i);return[...n.values()].sort((o,i)=>i.count-o.count||o.label.localeCompare(i.label))}var z=F(H()),Eh=[{v:"none",label:"none"},{v:"family",label:"family"},{v:"source",label:"source"}],_h=[{v:"all",label:"all"},{v:"num",label:"123"},{v:"cat",label:"abc"}];function Za(e,t){let n=new Set(e);return n.delete(t)||n.add(t),n}function pp({label:e,options:t,selected:n,onToggle:r}){return(0,z.jsxs)("div",{className:"rb-rail-facet",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:e}),(0,z.jsx)("div",{className:"rb-chip-list",children:t.map(o=>(0,z.jsxs)("button",{type:"button",className:`rb-chip${n.has(o.key)?" rb-on":""}`,"aria-pressed":n.has(o.key),title:`${o.label} \u2014 ${o.count} attribute${o.count===1?"":"s"}`,onClick:()=>r(o.key),children:[(0,z.jsx)("span",{className:"rb-chip-label",children:o.label}),(0,z.jsx)("span",{className:"rb-chip-n",children:o.count})]},o.key))})]})}function Ja({attributes:e,usedIds:t,forbidden:n,onAdd:r,onUnforbid:o,width:i}){let[l,a]=(0,lt.useState)(Xa),[s,u]=(0,lt.useState)("none"),[f,h]=(0,lt.useState)(new Set),[m,v]=(0,lt.useState)(!1),g=x=>a(A=>({...A,...x})),b=(0,lt.useMemo)(()=>[...e].sort((x,A)=>A.importance-x.importance),[e]),E=(0,lt.useMemo)(()=>cp(b,l,t),[b,l,t]),d=(0,lt.useMemo)(()=>dp(E,s),[E,s]),c=(0,lt.useMemo)(()=>qa(b,"family"),[b]),p=(0,lt.useMemo)(()=>qa(b,"source"),[b]),y=p.length>0||c.length>1,N=up(l),k=l.query.trim()!=="",S=()=>a(Xa);return(0,z.jsxs)("div",{className:"rb-rail",style:{width:i},children:[(0,z.jsxs)("div",{className:"rb-rail-head",children:[(0,z.jsx)("span",{children:"Attributes"}),(0,z.jsxs)("small",{children:["by importance ",(0,z.jsx)(Si,{align:"right",children:ip})]})]}),(0,z.jsxs)("div",{className:"rb-rail-toolbar",children:[(0,z.jsxs)("div",{className:"rb-rail-search-wrap",children:[(0,z.jsx)("input",{type:"search",className:"rb-rail-search",placeholder:"Search attributes\u2026","aria-label":"Search attributes",value:l.query,onChange:x=>g({query:x.target.value})}),k?(0,z.jsx)("button",{type:"button",className:"rb-rail-search-clear",title:"Clear search","aria-label":"Clear search",onClick:()=>g({query:""}),children:"\xD7"}):null]}),y?(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Group"}),(0,z.jsx)(Ga,{options:Eh,value:s,onChange:u})]}):null,(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsxs)("button",{type:"button",className:`rb-rail-filter-btn${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>v(x=>!x),children:[(0,z.jsx)("span",{className:"rb-group-caret",children:m?"\u25BE":"\u25B8"}),"Filters",N>0?(0,z.jsx)("span",{className:"rb-rail-filter-badge",children:N}):null]}),(0,z.jsxs)("span",{className:"rb-rail-count",children:[E.length," of ",e.length]})]}),m?(0,z.jsxs)("div",{className:"rb-rail-panel",children:[(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Type"}),(0,z.jsx)(Ga,{options:_h,value:l.kind,onChange:x=>g({kind:x})})]}),(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Min. imp."}),(0,z.jsx)("input",{type:"range",className:"rb-rail-slider",min:0,max:1,step:.05,value:l.minImportance,"aria-label":"Minimum importance",onChange:x=>g({minImportance:Number(x.target.value)})}),(0,z.jsx)("span",{className:"rb-rail-value",children:l.minImportance.toFixed(2)})]}),(0,z.jsxs)("label",{className:"rb-rail-check",children:[(0,z.jsx)("input",{type:"checkbox",checked:l.hideUsed,onChange:x=>g({hideUsed:x.target.checked})}),"Hide attributes already in the rule"]}),c.length>1?(0,z.jsx)(pp,{label:"Family",options:c,selected:l.families,onToggle:x=>g({families:Za(l.families,x)})}):null,p.length>0?(0,z.jsx)(pp,{label:"Source",options:p,selected:l.sources,onToggle:x=>g({sources:Za(l.sources,x)})}):null,N>0||k?(0,z.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:S,children:"Reset filters"}):null]}):null]}),(0,z.jsx)("div",{className:"rb-rail-list",children:E.length===0?(0,z.jsx)("div",{className:"rb-rail-empty",children:e.length===0?"No attributes available.":(0,z.jsxs)(z.Fragment,{children:["No attribute matches these filters.",(0,z.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:S,children:"Reset filters"})]})}):s==="none"?E.map(x=>(0,z.jsx)(Ni,{attr:x,used:t.includes(x.id),forbidden:n.has(x.id),onAdd:r,onUnforbid:o},x.id)):d.map(x=>{let A=`${s}|${x.key}`,P=!k&&f.has(A);return(0,z.jsxs)("div",{className:"rb-group",children:[(0,z.jsxs)("button",{type:"button",className:"rb-group-head","aria-expanded":!P,onClick:()=>h(j=>Za(j,A)),children:[(0,z.jsx)("span",{className:"rb-group-caret",children:P?"\u25B8":"\u25BE"}),(0,z.jsx)("span",{className:"rb-group-label",title:x.label,children:x.label}),(0,z.jsx)("span",{className:"rb-group-count",children:x.attrs.length})]}),P?null:x.attrs.map(j=>(0,z.jsx)(Ni,{attr:j,used:t.includes(j.id),forbidden:n.has(j.id),onAdd:r,onUnforbid:o},`${x.key}|${j.id}`))]},A)})})]})}var _i=F(Ie());function Cn(e,t,n){return Math.max(t,Math.min(n,e))}function fp(e,t){if(e.isInt)return Math.round(t);let n=e.max-e.min,o=10**(n>=20?0:n>=2?1:2);return Math.round(t*o)/o}function mp(e){if(e.kind==="num")return{attr:e.id,op:"range",lo:e.min,hi:e.max};let t=e.categories[0];return{attr:e.id,op:"==",value:t?t.value:""}}function hp(e,t){return e.filter(n=>t[n.attr]!=null).map(n=>{let r=t[n.attr];if(r.kind!=="num")return n;let o=r;return n.op===">="?{attr:n.attr,op:"range",lo:n.value,hi:o.max}:n.op==="<="?{attr:n.attr,op:"range",lo:o.min,hi:n.value}:n})}function es(e,t,n){let r=t<=e.min,o=n>=e.max;return r&&o?{text:`${e.id}: any value`,any:!0}:!r&&!o?{text:`${t} \u2264 ${e.id} \u2264 ${n}`,any:!1}:r?{text:`${e.id} \u2264 ${n}`,any:!1}:{text:`${e.id} \u2265 ${t}`,any:!1}}function gp(e,t){if(e.kind==="num"){let{lo:n,hi:r}=or(e,t),o=e;return es(o,n??o.min,r??o.max).text}return t.op==="range"?`${e.id}: any value`:`${e.id} ${t.op} ${t.value}`}function Oe(e,t){return`${e}\0${t}`}function or(e,t){let n,r;if(t.op==="range")n=t.lo,r=t.hi;else if(t.op===">=")n=t.value,r=e.max;else if(t.op==="<=")n=e.min,r=t.value;else return{lo:null,hi:null};return{lo:n>e.min?n:null,hi:r<e.max?r:null}}function Ci(e,t,n,r){let o=[],i=[];for(let l of e){let a=t[l.attr];if(!a)continue;n.has(l.attr)&&o.push(a.label);let s=[];if(a.kind==="num"){let{lo:u,hi:f}=or(a,l);u!==null&&r.has(Oe(l.attr,"lo"))&&s.push(`\u2265 ${u}`),f!==null&&r.has(Oe(l.attr,"hi"))&&s.push(`\u2264 ${f}`)}else l.op==="=="&&r.has(Oe(l.attr,"val"))&&s.push(`== ${l.value}`);s.length&&i.push(`${a.label} ${s.join(", ")}`)}return{kept:o,held:i}}function ts(e,t,n){let r=t<=e.min,o=n>=e.max;return!r&&!o?{attr:e.id,op:"range",lo:t,hi:n}:r?o?{attr:e.id,op:"range",lo:t,hi:n}:{attr:e.id,op:"<=",value:n}:{attr:e.id,op:">=",value:t}}var bp=F(H()),rs=232,Ei=160,ns=520,zh=300,vp=16;function os({width:e,onResize:t,onDraggingChange:n}){let r=(0,_i.useRef)(null),[o,i]=(0,_i.useState)(!1),l=()=>{let u=r.current?.parentElement,f=u?u.getBoundingClientRect().width-zh:ns;return Math.max(Ei,Math.min(ns,f))},a=u=>{u.preventDefault();let f=u.clientX,h=e,m=l();i(!0),n(!0);let v=b=>{t(Cn(h+b.clientX-f,Ei,m))},g=()=>{i(!1),n(!1),window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",g)};window.addEventListener("pointermove",v),window.addEventListener("pointerup",g)},s=u=>{let f=u.key==="ArrowLeft"?-vp:u.key==="ArrowRight"?vp:0;f!==0&&(u.preventDefault(),t(Cn(e+f,Ei,l())))};return(0,bp.jsx)("div",{ref:r,className:`rb-splitter${o?" rb-dragging":""}`,role:"separator","aria-orientation":"vertical","aria-label":"Resize the attribute list","aria-valuenow":Math.round(e),"aria-valuemin":Ei,"aria-valuemax":ns,tabIndex:0,title:"Drag to resize \xB7 double-click to reset",onPointerDown:a,onDoubleClick:()=>t(rs),onKeyDown:s})}var En=F(Ie());function yp(e){let t=Number(e);return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}function at(e){let t=Number(e);return Number.isFinite(t)?t:0}function ir(e){let t=Number(e);return Number.isFinite(t)?Math.abs(t)>=1e3?t.toFixed(0):Math.abs(t)>=100?t.toFixed(1):t.toFixed(2):"-"}var oe=F(H());function xp({value:e,min:t,max:n,isInt:r,label:o,title:i,onCommit:l}){let[a,s]=(0,En.useState)(String(e));(0,En.useEffect)(()=>{s(String(e))},[e]);let u=f=>{let h=Number.parseFloat(f);if(!Number.isFinite(h)){s(String(e));return}l(h)};return(0,oe.jsxs)("label",{className:"rb-bound-field",title:i,children:[(0,oe.jsx)("span",{className:"rb-bound-op",children:o}),(0,oe.jsx)("input",{className:"rb-bound-input",type:"number",inputMode:r?"numeric":"decimal",value:a,min:t,max:n,step:r?1:"any",onChange:f=>s(f.target.value),onBlur:f=>u(f.target.value),onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}})]})}function is({attr:e,lo:t,hi:n,onChange:r}){let o=(0,En.useRef)(null),[i,l]=(0,En.useState)(null),a=e.max-e.min||1,s=v=>(v-e.min)/a*100,u=e.bins.length-1,f=v=>{let g=o.current;if(!g)return e.min;let b=g.getBoundingClientRect(),E=Cn((v-b.left)/b.width,0,1);return fp(e,e.min+E*a)},h=v=>g=>{g.preventDefault(),l(v);let b=d=>{let c=f(d.clientX);r(v==="lo"?{lo:Math.min(c,n)}:{hi:Math.max(c,t)})},E=()=>{l(null),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",E)};window.addEventListener("pointermove",b),window.addEventListener("pointerup",E)},m=v=>{let g=e.bins[v];if(e.isDiscrete)return`Value ${ir(g.lo)}: Count ${g.n} (exact-value frequency), Positives: ${g.pos}`;let b=v===u?"]":")";return`Bin ${v+1}: [${ir(g.lo)}, ${ir(g.hi)}${b}, Count: ${g.n}, Positives: ${g.pos}`};return(0,oe.jsxs)("div",{className:"rb-rhist-wrap",children:[(0,oe.jsxs)("div",{className:"rb-rhist",ref:o,children:[(0,oe.jsx)("div",{className:"rb-hist",children:e.bins.map((v,g)=>{let b=v.hi<t||v.lo>n,E=e.maxN>0?v.n/e.maxN*100:0,d=e.maxN>0?v.pos/e.maxN*100:0;return(0,oe.jsxs)("div",{className:`rb-bin${b?" rb-out":""}`,title:m(g),children:[(0,oe.jsx)("div",{className:"rb-bin-fill",style:{height:`${E}%`}}),(0,oe.jsx)("div",{className:"rb-bin-pos",style:{height:`${d}%`}})]},g)})}),(0,oe.jsx)("div",{className:"rb-rhist-sel",style:{left:`${s(t)}%`,width:`${s(n)-s(t)}%`}}),(0,oe.jsx)("div",{className:`rb-handle${i==="lo"?" rb-dragging":""}`,style:{left:`${s(t)}%`},onPointerDown:h("lo"),title:"Drag lower boundary"}),(0,oe.jsx)("div",{className:`rb-handle${i==="hi"?" rb-dragging":""}`,style:{left:`${s(n)}%`},onPointerDown:h("hi"),title:"Drag upper boundary"})]}),(0,oe.jsxs)("div",{className:"rb-hist-axis",children:[(0,oe.jsx)("span",{children:ir(e.min)}),(0,oe.jsx)("span",{children:ir(e.max)})]}),(0,oe.jsxs)("div",{className:"rb-bound-inputs",children:[(0,oe.jsx)(xp,{value:t,min:e.min,max:n,isInt:e.isInt,label:"\u2265",title:"Lower boundary \u2014 type an exact value",onCommit:v=>r({lo:Cn(v,e.min,n)})}),(0,oe.jsx)(xp,{value:n,min:t,max:e.max,isInt:e.isInt,label:"\u2264",title:"Upper boundary \u2014 type an exact value",onCommit:v=>r({hi:Cn(v,t,e.max)})})]})]})}var Lt=F(H());function ls({attr:e,value:t,onChange:n}){return(0,Lt.jsx)("div",{className:"rb-cats",children:e.categories.map(r=>{let o=t===r.value,i=e.maxN>0?r.pos/e.maxN*100:0,l=e.maxN>0?(r.n-r.pos)/e.maxN*100:0;return(0,Lt.jsxs)("button",{type:"button",className:`rb-cat-row${o?" rb-sel":""}`,onClick:()=>n(r.value),title:`${r.value}: ${r.n} cases, ${r.pos} outcome-positive`,children:[(0,Lt.jsx)("span",{className:"rb-cat-label",children:r.value}),(0,Lt.jsxs)("span",{className:"rb-cat-bar",children:[(0,Lt.jsx)("span",{className:"rb-cat-pos",style:{width:`${i}%`}}),(0,Lt.jsx)("span",{className:"rb-cat-rest",style:{width:`${l}%`}})]}),(0,Lt.jsx)("span",{className:"rb-cat-n",children:r.n})]},r.value)})})}var gt=F(Ie());var on=F(Ie());var I=F(H());function as({attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,onClose:s,onRun:u,canRun:f,isOptimizing:h}){let[m,v]=(0,on.useState)(!1),[g,b]=(0,on.useState)(""),{kept:E,held:d}=(0,on.useMemo)(()=>Ci(n,t,r,o),[n,t,r,o]),c=(0,on.useMemo)(()=>new Set(n.map(k=>k.attr)),[n]),p=(0,on.useMemo)(()=>{let k=g.trim().toLowerCase();return e.filter(S=>!i.has(S.id)&&(!k||S.label.toLowerCase().includes(k)))},[e,i,g]),y=(0,on.useMemo)(()=>e.filter(k=>i.has(k.id)),[e,i]),N=k=>{l(k),b(""),v(!1)};return(0,I.jsxs)("div",{className:"rb-popover rb-popover-left",role:"dialog","aria-label":"Optimizer constraints",children:[(0,I.jsxs)("div",{className:"rb-popover-head",children:[(0,I.jsx)("span",{className:"rb-popover-title",children:"Optimize under these constraints"}),(0,I.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:s,children:"\xD7"})]}),(0,I.jsxs)("div",{className:"rb-popover-section",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F4CC}"}),(0,I.jsxs)("div",{className:"rb-constraint-body",children:[(0,I.jsx)("div",{className:"rb-constraint-name",children:"Keep in the rule"}),(0,I.jsx)("div",{className:`rb-constraint-value${E.length?"":" rb-empty"}`,children:E.length?E.join(", "):"nothing pinned \u2014 the optimizer may drop any condition"})]}),(0,I.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,I.jsxs)("div",{className:"rb-popover-section",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F512}"}),(0,I.jsxs)("div",{className:"rb-constraint-body",children:[(0,I.jsx)("div",{className:"rb-constraint-name",children:"Hold these boundaries"}),(0,I.jsx)("div",{className:`rb-constraint-value${d.length?"":" rb-empty"}`,children:d.length?d.join(" \xB7 "):"no boundary held \u2014 all ranges may move"})]}),(0,I.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,I.jsxs)("div",{className:"rb-popover-section rb-forbid-section",children:[(0,I.jsxs)("div",{className:"rb-forbid-head",children:[(0,I.jsx)("span",{className:"rb-constraint-glyph rb-forbid-glyph",children:"\u20E0"}),(0,I.jsx)("span",{className:"rb-constraint-name",children:"Never use"}),(0,I.jsxs)("span",{className:"rb-constraint-where",children:[y.length," ",y.length===1?"attribute":"attributes"]})]}),(0,I.jsxs)("div",{className:"rb-forbid-chips",children:[y.map(k=>(0,I.jsxs)("span",{className:"rb-forbid-chip",title:k.label,children:[(0,I.jsx)("span",{className:"rb-forbid-chip-name",children:k.label}),(0,I.jsx)("button",{type:"button",className:"rb-forbid-chip-x",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${k.label}`,onClick:()=>a(k.id),children:"\xD7"})]},k.id)),(0,I.jsx)("button",{type:"button",className:`rb-forbid-add${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>v(k=>!k),children:"\uFF0B add attribute"})]}),m?(0,I.jsxs)("div",{className:"rb-forbid-search",children:[(0,I.jsx)("input",{type:"search",className:"rb-forbid-search-input",placeholder:"Search attributes to forbid\u2026","aria-label":"Search attributes to forbid",autoFocus:!0,value:g,onChange:k=>b(k.target.value)}),(0,I.jsx)("div",{className:"rb-forbid-options",children:p.length===0?(0,I.jsx)("div",{className:"rb-forbid-none",children:"No matches."}):p.map(k=>(0,I.jsxs)("button",{type:"button",className:"rb-forbid-option",onClick:()=>N(k.id),children:[(0,I.jsx)("span",{className:"rb-forbid-option-name",children:k.label}),(0,I.jsx)("span",{className:"rb-forbid-option-hint",children:c.has(k.id)?"in rule \u2014 will be removed":`importance ${k.importance.toFixed(2)}`})]},k.id))})]}):null]}),(0,I.jsxs)("div",{className:"rb-popover-foot",children:[(0,I.jsx)("span",{className:"rb-popover-scope",children:"Applies to this rule only"}),(0,I.jsx)("button",{type:"button",className:"rb-run-btn",disabled:!f||h,title:f?"Re-derive the rule with RIPPER under these constraints":"Pin an attribute or forbid one first \u2014 an unconstrained run is just rule induction",onClick:u,children:h?"\u23F3 Optimizing\u2026":"\u26A1 Run optimize"})]})]})}var wp=F(Ie());var st=F(H());function ss({attrMap:e,conds:t,note:n,onNoteChange:r,onClose:o,onStore:i}){let l=(0,wp.useMemo)(()=>{let a=t.map(s=>{let u=e[s.attr];return u?gp(u,s):null}).filter(s=>s!==null);return a.length?a.join("  AND  "):"No conditions yet."},[t,e]);return(0,st.jsxs)("div",{className:"rb-popover rb-popover-right",role:"dialog","aria-label":"Store this rule",children:[(0,st.jsxs)("div",{className:"rb-popover-head",children:[(0,st.jsx)("span",{className:"rb-popover-title",children:"Store this rule"}),(0,st.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:o,children:"\xD7"})]}),(0,st.jsxs)("div",{className:"rb-popover-section rb-store-section",children:[(0,st.jsx)("div",{className:"rb-store-summary",children:l}),(0,st.jsx)("textarea",{className:"rb-note-input",value:n,onChange:a=>r(a.target.value),placeholder:"Note (optional) \u2014 why store this rule?",rows:3,autoFocus:!0})]}),(0,st.jsx)("div",{className:"rb-popover-foot rb-store-foot",children:(0,st.jsx)("button",{type:"button",className:"rb-store-confirm",onClick:i,children:"Store rule"})})]})}var Dt={blue:"#0969da",green:"#2da44e",hist:"#8bb8ec",histPos:"#2ea043",tpRemoved:"#f66a0a",fpRemoved:"#0366d6"};var se=F(Ie());var kp=`/* Shared by every widget that can draw a case (common/caseDraw.tsx). */

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
`;var W=F(H()),Ph={tp:"Explained (TP)",fp:"Wrongly claimed (FP)",fn:"Remaining (FN)",tn:"Left alone (TN)"};function Sp(e,t){return!!e&&!!t&&e.category===t.category&&e.ruleId===t.ruleId}function Np(e,t,n=null){return Sp(e.target,{category:t,ruleId:n})}function Cp(){let[,e]=de("draw_request"),[t]=de("draw_result"),[n]=de("can_open_case"),[r,o]=(0,se.useState)(null),[i,l]=(0,se.useState)(null),[a,s]=(0,se.useState)(null),u=(0,se.useRef)(null),f=(0,se.useRef)(0),h=(0,se.useCallback)(E=>{f.current+=1;let d=`${Date.now()}-${f.current}`;return e({...E,request_id:d}),d},[e]),m=(0,se.useCallback)((E,d=null)=>{let c={category:E,ruleId:d};o(p=>(Sp(p,c)||l(null),c)),s(null),u.current=h({kind:"draw",category:E,iox_rule_id:d})},[h]),v=(0,se.useCallback)(()=>{r&&m(r.category,r.ruleId)},[r,m]),g=(0,se.useCallback)(()=>{h({kind:"open"})},[h]),b=(0,se.useCallback)(()=>{u.current=null,o(null),l(null),s(null)},[]);return(0,se.useEffect)(()=>{if(!(!t||t.request_id==null)&&t.request_id===u.current){if(u.current=null,t.error||t.case_id==null||!t.category){s(t.error||"No case could be drawn."),l(null);return}l({category:t.category,ruleId:t.iox_rule_id??null,caseId:t.case_id,position:t.position??1,total:t.total??1,shared:t.shared??null})}},[t]),{target:r,pick:i,error:a,canOpen:!!n,draw:m,another:v,open:g,close:b}}async function Th(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function Ep(){return(0,W.jsx)("style",{children:kp})}function us({size:e=14}){return(0,W.jsxs)("svg",{className:"cd-dice",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,W.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),(0,W.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.3",fill:"currentColor"}),(0,W.jsx)("circle",{cx:"12",cy:"12",r:"1.3",fill:"currentColor"}),(0,W.jsx)("circle",{cx:"15.5",cy:"15.5",r:"1.3",fill:"currentColor"})]})}function _p({on:e,onToggle:t,compact:n,disabled:r,hint:o}){return(0,W.jsxs)("button",{type:"button",className:`cd-toggle${e?" cd-toggle--on":""}${n?" cd-toggle--compact":""}`,"aria-pressed":e,"aria-label":n?"Draw a case":void 0,disabled:r,title:`Draw a case: click ${o} to get the id of one case behind it`,onClick:t,children:[(0,W.jsx)(us,{}),n?null:"Draw a case"]})}function zp({draw:e,color:t,scope:n,className:r,style:o,children:i}){let{target:l,pick:a,error:s}=e,[u,f]=(0,se.useState)(null),[h,m]=(0,se.useState)(!1);(0,se.useEffect)(()=>{f(null),m(!1)},[a?.caseId,a?.category,a?.ruleId]);let{close:v}=e;if((0,se.useEffect)(()=>{if(!l)return;let b=E=>{E.key==="Escape"&&v()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[l,v]),!l)return null;let g=async()=>{a&&f(await Th(a.caseId)?"yes":"failed")};return(0,W.jsxs)("div",{className:`cd-pop${r?` ${r}`:""}`,style:o,role:"status",children:[i,(0,W.jsx)("span",{className:"cd-chip",style:{background:t},children:Ph[l.category]}),s?(0,W.jsx)("span",{className:"cd-error",children:s}):a?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("span",{className:"cd-id",title:"Case id",children:a.caseId}),(0,W.jsxs)("span",{className:"cd-pos",children:[a.position," of ",a.total,n?` ${n}`:""]}),a.shared===null?null:(0,W.jsx)("span",{className:"cd-tag",title:a.shared?"At least one other rule of this ruleset fires on this case too":"No other rule of this ruleset fires on this case",children:a.shared?"shared with other rules":"only this rule"})]}):(0,W.jsx)("span",{className:"cd-pos",children:"Drawing\u2026"}),(0,W.jsxs)("span",{className:"cd-actions",children:[a&&!s?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("button",{type:"button",className:"cd-btn",onClick:g,children:u==="yes"?"Copied":u==="failed"?"Copy failed":"Copy id"}),(0,W.jsx)("button",{type:"button",className:"cd-btn",disabled:a.total<=1,title:a.total<=1?"This is the only case here":"Draw the next case",onClick:e.another,children:"Another"}),e.canOpen?(0,W.jsx)("button",{type:"button",className:"cd-btn",title:"Show this case in the notebook's case view",onClick:()=>{e.open(),m(!0)},children:h?"Shown in case view":"Show in case view"}):null]}):null,(0,W.jsx)("button",{type:"button",className:"cd-close","aria-label":"Close",onClick:v,children:"\u2715"})]})]})}var U=F(H()),Lh={tp:Dt.histPos,fp:"#da3633",fn:"#57606a",tn:"#6e7781"};function Rp({label:e,value:t,color:n}){let r=t==null?null:Math.round(t*100);return(0,U.jsxs)("div",{className:"rb-metric",children:[(0,U.jsxs)("div",{className:"rb-metric-top",children:[(0,U.jsx)("span",{className:"rb-metric-val",children:r==null?"\u2013":`${r}%`}),(0,U.jsx)("span",{className:"rb-metric-label",children:e})]}),(0,U.jsx)("div",{className:"rb-metric-bar",children:(0,U.jsx)("div",{className:"rb-metric-fill",style:{width:`${r||0}%`,background:n}})})]})}var Dh=[{key:"tp",label:"TP",word:"explains"},{key:"fp",label:"FP",word:"wrongly claims"},{key:"fn",label:"FN",word:"remaining"},{key:"tn",label:"TN",word:"left alone"}];function Mh({res:e,stale:t,poolLabel:n,drill:r,onToggleDrill:o,draw:i}){return e?(0,U.jsxs)("div",{className:`rb-metrics${t?" rb-stale-dim":""}`,children:[(0,U.jsx)(Rp,{label:"Precision",value:e.precision,color:Dt.blue}),(0,U.jsx)(Rp,{label:"Recall",value:e.recall,color:Dt.green}),(0,U.jsx)("div",{className:"rb-counts",children:Dh.map(({key:l,label:a,word:s})=>{let u=e[l]??0;return r?(0,U.jsxs)("button",{type:"button",className:`rb-count cd-target${i&&Np(i,l)?" cd-target--on":""}`,disabled:!i||u===0,"aria-label":`Draw a ${a} case`,title:`${a}: ${s} \u2014 draw one of these cases`,onClick:()=>i?.draw(l),children:[a," ",(0,U.jsx)("b",{children:u})," ",(0,U.jsx)(us,{size:10})]},l):(0,U.jsxs)("span",{className:"rb-count",title:`${a}: ${s}`,children:[a," ",(0,U.jsx)("b",{children:u})]},l)})}),(0,U.jsx)(_p,{on:r,onToggle:o,compact:!0,hint:"TP, FP, FN or TN"}),e.total!=null?(0,U.jsxs)("span",{className:"rb-scope",title:"Cases this rule was evaluated against",children:["of ",(0,U.jsx)("b",{children:e.total})," ",n]}):null,t?(0,U.jsx)("span",{className:"rb-stale-badge",children:r?"rule changed \u2014 re-evaluate to draw":"rule changed \u2014 out of date"}):null]}):(0,U.jsx)("span",{className:"rb-noeval",children:"Add attributes to the rule, then evaluate."})}function cs({attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,res:s,stale:u,poolLabel:f,toast:h,note:m,onNoteChange:v,onEvaluate:g,onStore:b,onOptimize:E,onClear:d,canClear:c,isOptimizing:p}){let y=n.length>0,N=!!s&&!u&&y,k=r.size>0||i.size>0,[S,x]=(0,gt.useState)(null),[A,P]=(0,gt.useState)(!1),j=Cp(),pe=j.close,ln=s?.eval_id??null;(0,gt.useEffect)(()=>{pe()},[u,ln,pe]),(0,gt.useEffect)(()=>{S!==null&&pe()},[S,pe]);let bt=()=>{A&&pe(),P(Se=>!Se)},an={...j,draw:(Se,D)=>{x(null),j.draw(Se,D)}};(0,gt.useEffect)(()=>{if(S===null)return;let Se=D=>{D.key==="Escape"&&x(null)};return window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)},[S]),(0,gt.useEffect)(()=>{S==="store"&&!N&&x(null)},[S,N]);let{kept:yt,held:sn}=(0,gt.useMemo)(()=>Ci(n,t,r,o),[n,t,r,o]),ut=[];yt.length&&ut.push(`${yt.length} kept`),sn.length&&ut.push(`${sn.length} bounded`),i.size&&ut.push(`${i.size} forbidden`);let xt=()=>{x(null),E()},un=()=>{x(null),b()};return(0,U.jsxs)("div",{className:"rb-footer",children:[(0,U.jsxs)("button",{type:"button",className:`rb-optimize-btn${S==="optimize"?" rb-on":""}`,"aria-expanded":S==="optimize",onClick:()=>x(Se=>Se==="optimize"?null:"optimize"),title:"Show what the optimizer may and may not use",children:[p?"\u23F3 Optimizing\u2026":"\u26A1 Optimize",(0,U.jsx)("span",{className:"rb-btn-caret",children:S==="optimize"?"\u25BE":"\u25B4"})]}),(0,U.jsx)("button",{type:"button",className:`rb-eval-btn${u?" rb-stale":""}`,disabled:!y,onClick:g,children:u?"\u21BB Re-evaluate":"\u25B8 Evaluate"}),(0,U.jsx)("button",{type:"button",className:"rb-clear-btn",disabled:!c,onClick:d,title:"Remove all conditions, pins and locks",children:"Clear"}),ut.length?(0,U.jsx)("span",{className:"rb-constraint-summary",title:"Constraints the next optimize run will honour",children:ut.join(" \xB7 ")}):null,(0,U.jsx)(Mh,{res:s,stale:u,poolLabel:f,drill:A,onToggleDrill:bt,draw:A&&s&&!u?an:null}),(0,U.jsxs)("div",{className:"rb-footer-right",children:[h?(0,U.jsx)("span",{className:"rb-toast",children:h}):null,(0,U.jsxs)("button",{type:"button",className:"rb-store-btn",disabled:!N,"aria-expanded":S==="store",onClick:()=>x(Se=>Se==="store"?null:"store"),children:["Store rule",(0,U.jsx)("span",{className:"rb-btn-caret",children:S==="store"?"\u25BE":"\u25B4"})]})]}),j.target?(0,U.jsx)(zp,{draw:j,color:Lh[j.target.category],scope:"for this rule",className:"rb-draw-pop"}):null,S==="optimize"?(0,U.jsx)(as,{attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,onClose:()=>x(null),onRun:xt,canRun:k,isOptimizing:p}):null,S==="store"?(0,U.jsx)(ss,{attrMap:t,conds:n,note:m,onNoteChange:v,onClose:()=>x(null),onStore:un}):null]})}var ge=F(H()),Pp="Unique removal impact shows what each condition keeps out: the cases the rest of the rule covers but this condition rejects. Many FPs removed and few TPs removed means the condition is pulling its weight; the reverse means it is mostly costing recall. A condition left at 'any value' constrains nothing, so it removes nothing. Computed on evaluation, alongside the overall metrics.";function ds({children:e,stale:t}){return(0,ge.jsxs)("div",{className:`rb-impact${t?" rb-impact-stale":""}`,children:[(0,ge.jsx)("div",{className:"rb-impact-head",children:"Unique removal impact"}),e]})}function ps({impact:e,maxTotalRemoved:t,constrains:n,stale:r}){if(!n)return(0,ge.jsx)(ds,{children:(0,ge.jsx)("span",{className:"rb-impact-none",children:"Set a boundary \u2014 \u201Cany value\u201D excludes no case, so it removes none."})});if(!e)return(0,ge.jsx)(ds,{children:(0,ge.jsx)("span",{className:"rb-impact-none",children:"Evaluate the rule to compute it."})});let o=e.tp_removed+e.fp_removed,i=Math.max(0,Math.min(100,o/Math.max(1,t)*100)),l=o>0?e.tp_removed/o*100:0,a=o>0?e.fp_removed/o*100:0;return(0,ge.jsxs)(ds,{stale:r,children:[(0,ge.jsxs)("div",{className:"rb-impact-values",children:[(0,ge.jsxs)("span",{style:{color:Dt.tpRemoved},children:["TP removed ",e.tp_removed]}),(0,ge.jsxs)("span",{style:{color:Dt.fpRemoved},children:["FP removed ",e.fp_removed]})]}),(0,ge.jsx)("div",{className:"rb-impact-track",title:`Dropping this condition would additionally cover ${e.tp_removed} positive and ${e.fp_removed} negative cases`,children:(0,ge.jsxs)("div",{className:"rb-impact-bar",style:{width:`${i}%`},children:[(0,ge.jsx)("div",{className:"rb-impact-seg",style:{background:Dt.tpRemoved,width:`${l}%`}}),(0,ge.jsx)("div",{className:"rb-impact-seg",style:{background:Dt.fpRemoved,width:`${a}%`}})]})}),o===0?(0,ge.jsx)("span",{className:"rb-impact-note",children:"Redundant here \u2014 the other conditions already exclude these cases."}):null]})}var L=F(H());function fs({title:e,outcomeName:t,attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onAdd:s,onUpdate:u,onRemove:f,onClear:h,onTogglePin:m,onTogglePredPin:v,onForbid:g,onUnforbid:b,res:E,stale:d,poolLabel:c,toast:p,note:y,onNoteChange:N,onEvaluate:k,onStore:S,onOptimize:x,isOptimizing:A}){let[P,j]=(0,vt.useState)(!1),[pe,ln]=(0,vt.useState)(!1),[bt,an]=(0,vt.useState)(rs),[yt,sn]=(0,vt.useState)(!1),ut=o.map(D=>D.attr),xt=(0,vt.useMemo)(()=>{let D={};for(let Ne of E?.importance??[])D[Ne.attr]=Ne;return D},[E]),un=(0,vt.useMemo)(()=>(E?.importance??[]).reduce((D,Ne)=>Math.max(D,Ne.tp_removed+Ne.fp_removed),0),[E]),Se={onDragOver:D=>{D.preventDefault(),D.dataTransfer.dropEffect="copy",j(!0)},onDragLeave:()=>j(!1),onDrop:D=>{D.preventDefault(),j(!1);let Ne=D.dataTransfer.getData("text/plain");Ne&&s(Ne)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("style",{children:tp}),(0,L.jsx)(Ep,{}),(0,L.jsxs)("div",{className:"rb-root rb-v2",children:[(0,L.jsxs)("div",{className:"rb-header",children:[(0,L.jsx)("span",{className:"rb-title",children:e}),(0,L.jsxs)("span",{className:"rb-outcome",children:["predicts: ",t]}),(0,L.jsx)(ap,{}),(0,L.jsx)("span",{className:"rb-header-hint",children:"click or drag an attribute \xB7 drag handles to set boundaries"}),(0,L.jsxs)("button",{type:"button",className:`rb-impact-btn${pe?" rb-on":""}`,disabled:o.length===0,"aria-pressed":pe,title:pe?"Hide attribute importance":"Show how much each condition contributes to the rule",onClick:()=>ln(D=>!D),children:[(0,L.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,L.jsx)("path",{d:"M3 3v18h18M7 15l4-6 3 3 5-8"})}),"Attribute importance"]}),(0,L.jsx)(Si,{align:"right",children:Pp})]}),(0,L.jsxs)("div",{className:`rb-body${yt?" rb-resizing":""}`,children:[(0,L.jsx)(Ja,{attributes:n,usedIds:ut,forbidden:a,onAdd:s,onUnforbid:b,width:bt}),(0,L.jsx)(os,{width:bt,onResize:an,onDraggingChange:sn}),(0,L.jsx)("div",{className:`rb-canvas${P?" rb-dragover":""}`,...Se,children:o.length===0?(0,L.jsxs)("div",{className:"rb-dropzone",children:[(0,L.jsx)("b",{children:"Drop an attribute here"}),(0,L.jsx)("span",{children:"set boundaries directly on its distribution"})]}):o.map((D,Ne)=>{let Ce=r[D.attr];if(!Ce)return null;let Mt=i.has(D.attr),ve=[];if(Ce.kind==="num"){let{lo:Y,hi:At}=or(Ce,D);Y!==null&&ve.push({bound:"lo",glyph:"\u2265",what:`lower bound (\u2265 ${Y})`}),At!==null&&ve.push({bound:"hi",glyph:"\u2264",what:`upper bound (\u2264 ${At})`})}else D.op==="=="&&ve.push({bound:"val",glyph:"==",what:`value (== ${D.value})`});let _n=ve.some(Y=>l.has(Oe(D.attr,Y.bound)));return(0,L.jsxs)(vt.Fragment,{children:[Ne>0?(0,L.jsx)("span",{className:"rb-and",children:"AND"}):null,(0,L.jsxs)("div",{className:`rb-cond${Mt?" rb-pinned":""}${_n?" rb-pred-pinned":""}`,children:[(0,L.jsxs)("div",{className:"rb-cond-head",children:[(0,L.jsx)(ki,{kind:Ce.kind}),(0,L.jsx)("span",{className:"rb-cond-name",children:Ce.label}),Mt?ve.map(Y=>{let At=l.has(Oe(D.attr,Y.bound));return(0,L.jsxs)("button",{type:"button",className:`rb-pin rb-pin-pred${At?" rb-pinned":""}`,title:At?`Unpin ${Y.what} \u2014 let the optimizer choose it`:`Pin ${Y.what} \u2014 keep it fixed in the optimized rule`,onClick:()=>v(D.attr,Y.bound),children:[(0,L.jsx)("span",{className:"rb-pin-side",children:Y.glyph}),At?"\u{1F512}":"\u{1F513}"]},Y.bound)}):null,(0,L.jsx)("button",{type:"button",className:`rb-pin${Mt?" rb-pinned":""}`,title:Mt?"Unpin attribute":"Pin attribute (keep in optimized rule)",onClick:()=>m(D.attr),children:"\u{1F4CC}"}),(0,L.jsx)("button",{type:"button",className:"rb-remove",title:"Remove condition",onClick:()=>f(Ne),children:"\xD7"})]}),(0,L.jsxs)("div",{className:"rb-cond-body",children:[Ce.kind==="num"&&D.op==="range"?(0,L.jsxs)(L.Fragment,{children:[(()=>{let Y=es(Ce,D.lo,D.hi);return(0,L.jsx)("span",{className:`rb-pred-readout${Y.any?" rb-any":""}`,children:Y.text})})(),(0,L.jsx)(is,{attr:Ce,lo:D.lo,hi:D.hi,onChange:Y=>u(Ne,Y)})]}):Ce.kind==="cat"&&D.op==="=="?(0,L.jsx)(ls,{attr:Ce,value:D.value,onChange:Y=>u(Ne,{value:Y})}):null,pe?(0,L.jsx)(ps,{impact:xt[D.attr]??null,maxTotalRemoved:un,constrains:Ce.kind!=="num"||ve.length>0,stale:d}):null]})]})]},D.attr)})})]}),(0,L.jsx)(cs,{attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onForbid:g,onUnforbid:b,res:E,stale:d,poolLabel:c,toast:p,note:y,onNoteChange:N,onEvaluate:k,onStore:S,onOptimize:x,onClear:h,canClear:o.length>0||i.size>0,isOptimizing:A})]})]})}function ms(e){let t=Number(e);return Number.isFinite(t)?t:null}function Ah(e,t){let n=Array.isArray(t.bin_counts)?t.bin_counts:[],r=Array.isArray(t.outcome_positive_bin_counts)?t.outcome_positive_bin_counts:[],o=Array.isArray(t.bin_edges)?t.bin_edges.map(Number):[],i=t.kind==="numeric_discrete",l=n.map((v,g)=>{let b=Number(o[g]),E=Number(i?o[g]:o[g+1]);return{n:Math.max(0,at(v)),pos:Math.max(0,at(r[g])),lo:Number.isFinite(b)?b:0,hi:Number.isFinite(E)?E:0}}),a=l.length?l[0].lo:0,s=l.length?l[l.length-1].hi:0,u=ms(t.min)??a,f=ms(t.max)??s,h=ms(t.median)??u,m=l.reduce((v,g)=>Math.max(v,g.n),0);return{...e,kind:"num",min:u,max:f>u?f:u,median:Math.min(Math.max(h,u),f),isInt:Number.isInteger(u)&&Number.isInteger(f),isDiscrete:i,bins:l,maxN:m,total:Math.max(0,at(t.total_count)),outcomePositiveTotal:Math.max(0,at(t.outcome_positive_total)),missing:Math.max(0,at(t.missing_count))}}function Oh(e,t){let r=(Array.isArray(t.categories)?t.categories:[]).map(i=>({value:String(i&&i.value!=null?i.value:""),n:Math.max(0,at(i&&i.count)),pos:Math.max(0,at(i&&i.outcome_positive_count))}));r.sort((i,l)=>l.n-i.n);let o=r.reduce((i,l)=>Math.max(i,l.n),0);return{...e,kind:"cat",categories:r,maxN:o,total:Math.max(0,at(t.total_count)),outcomePositiveTotal:Math.max(0,at(t.outcome_positive_total)),missing:Math.max(0,at(t.missing_count))}}function Tp(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!="object")continue;let r=String(n.id??"");if(!r)continue;let o=n.summary&&typeof n.summary=="object"?n.summary:{},i={id:r,label:String(n.label??r),importance:yp(n.importance),family:String(n.family??"other"),familyLabel:String(n.family_label??"Other"),sources:Array.isArray(n.sources)?n.sources.map(String).filter(Boolean):[]};n.kind==="num"?t.push(Ah(i,o)):t.push(Oh(i,o))}return t}function Lp(e){let t={};for(let n of e)t[n.id]=n;return t}var Dp=F(H()),Ih=2600;function Fh(){let[e]=de("title"),[t]=de("outcome_name"),[n]=de("pool_label"),[r]=de("attributes"),[o]=de("flash"),[,i]=de("eval_request"),[l]=de("eval_result"),[,a]=de("store_trigger"),[s]=de("store_result"),[,u]=de("store_note"),[,f]=de("optimize_request"),[h]=de("optimize_result"),[m]=de("loaded_rule"),v=T.useMemo(()=>Tp(r),[r]),g=T.useMemo(()=>Lp(v),[v]),[b,E]=T.useState([]),[d,c]=T.useState(null),[p,y]=T.useState(null),[N,k]=T.useState(""),[S,x]=T.useState(new Set),[A,P]=T.useState(new Set),[j,pe]=T.useState(new Set),[ln,bt]=T.useState(!1),an=T.useRef(""),yt=T.useRef(0),sn=T.useRef(null),ut=T.useRef(null),xt=T.useRef(null),un=T.useRef(0),Se=T.useRef(null),D=T.useRef(null),Ne=JSON.stringify(b),Ce=d!==null&&d.key!==Ne,Mt=d?d.res:null,ve=T.useCallback(_=>{y(_),xt.current&&clearTimeout(xt.current),xt.current=setTimeout(()=>y(null),Ih)},[]),_n=T.useCallback(_=>{let R=hp(_,g);if(E(R),c(null),R.length===0)return;let O=R.map(M=>M.op==="range"?ts(g[M.attr],M.lo,M.hi):M);an.current=JSON.stringify(R),yt.current+=1,i({conditions:O,request_id:yt.current})},[g,i]);T.useEffect(()=>{!l||l.eval_id==null||l.eval_id!==sn.current&&(sn.current=l.eval_id,c({key:an.current,res:l}))},[l]),T.useEffect(()=>{o&&ve(o)},[o,ve]),T.useEffect(()=>{if(!s||s.store_id==null||s.store_id===ut.current)return;ut.current=s.store_id;let _=s.precision!=null?Math.round(s.precision*100):null,R=s.recall!=null?Math.round(s.recall*100):null,O=_!=null&&R!=null?`  P ${_}% \xB7 R ${R}%`:"";ve(`Stored \u2713${O}`),E([]),c(null),k(""),x(new Set),P(new Set),pe(new Set),bt(!1)},[s,ve]),T.useEffect(()=>()=>{xt.current&&clearTimeout(xt.current)},[]),T.useEffect(()=>{if(!h||h.request_id==null||h.request_id!==un.current||h.request_id===Se.current)return;if(Se.current=h.request_id,bt(!1),h.error){ve(`Optimize failed \u2014 ${h.error}`);return}let _=h.conditions??[];if(_.length===0){ve("Optimize found no rule under these constraints");return}_n(_)},[h,_n,ve]),T.useEffect(()=>{if(!m||m.load_id==null||m.load_id===D.current)return;D.current=m.load_id,k(""),x(new Set),P(new Set),pe(new Set),bt(!1),_n(m.conditions??[]);let _=m.label?` ${m.label}`:"";ve(`Loaded${_} \u2014 adjust and evaluate`)},[m,_n,ve]);let Y=T.useCallback(_=>{P(R=>{let O=[Oe(_,"lo"),Oe(_,"hi"),Oe(_,"val")];if(!O.some(ie=>R.has(ie)))return R;let M=new Set(R);for(let ie of O)M.delete(ie);return M})},[]),At=T.useCallback(_=>{pe(R=>R.has(_)?R:new Set(R).add(_)),E(R=>R.some(O=>O.attr===_)?R.filter(O=>O.attr!==_):R),x(R=>{if(!R.has(_))return R;let O=new Set(R);return O.delete(_),O}),Y(_)},[Y]),Mp=T.useCallback(_=>{pe(R=>{if(!R.has(_))return R;let O=new Set(R);return O.delete(_),O})},[]),Ap=T.useCallback(_=>{x(R=>{let O=new Set(R);return O.has(_)?(O.delete(_),Y(_)):O.add(_),O})},[Y]),Op=T.useCallback((_,R)=>{let O=Oe(_,R);P(M=>{let ie=new Set(M);return ie.has(O)?ie.delete(O):ie.add(O),ie}),x(M=>M.has(_)?M:new Set(M).add(_))},[]),Ip=T.useCallback(()=>{if(S.size===0&&j.size===0||ln)return;let _=[];for(let M of b){let ie=g[M.attr];if(ie)if(ie.kind==="num"){let Hp=ie,{lo:zi,hi:Ri}=or(Hp,M),hs=zi!==null&&A.has(Oe(M.attr,"lo")),gs=Ri!==null&&A.has(Oe(M.attr,"hi"));hs&&gs?_.push({attr:M.attr,op:"range",lo:zi,hi:Ri}):hs?_.push({attr:M.attr,op:">=",value:zi}):gs&&_.push({attr:M.attr,op:"<=",value:Ri})}else M.op==="=="&&A.has(Oe(M.attr,"val"))&&_.push(M)}let R=new Set(_.map(M=>M.attr)),O=Array.from(S).filter(M=>!R.has(M));bt(!0),un.current+=1,f({fixed_attributes:O,fixed_predicates:_,forbidden_attributes:Array.from(j),request_id:un.current})},[S,A,j,b,g,ln,f]),Fp=T.useCallback(_=>{let R=g[_];R&&(j.has(_)||E(O=>O.some(M=>M.attr===_)?O:[...O,mp(R)]))},[g,j]),$p=T.useCallback((_,R)=>{E(O=>O.map((M,ie)=>ie===_?{...M,...R}:M))},[]),Up=T.useCallback(_=>{E(R=>{let O=R[_];return O&&(x(M=>{if(!M.has(O.attr))return M;let ie=new Set(M);return ie.delete(O.attr),ie}),Y(O.attr)),R.filter((M,ie)=>ie!==_)})},[Y]),jp=T.useCallback(()=>{E([]),c(null),k(""),x(new Set),P(new Set)},[]),Bp=T.useCallback(()=>{if(b.length===0)return;let _=b.map(R=>R.op==="range"?ts(g[R.attr],R.lo,R.hi):R);an.current=JSON.stringify(b),yt.current+=1,i({conditions:_,request_id:yt.current})},[b,g,i]),Vp=T.useCallback(()=>{!Mt||Ce||(u(N),a(_=>(_??0)+1))},[Mt,Ce,N,u,a]);return(0,Dp.jsx)(fs,{title:e||"Rule builder",outcomeName:t||"outcome",attributes:v,attrMap:g,conds:b,pinnedAttrs:S,pinnedPreds:A,forbidden:j,onAdd:Fp,onUpdate:$p,onRemove:Up,onClear:jp,onTogglePin:Ap,onTogglePredPin:Op,onForbid:At,onUnforbid:Mp,res:Mt,stale:Ce,poolLabel:n||"cases",toast:p,note:N,onNoteChange:k,onEvaluate:Bp,onStore:Vp,onOptimize:Ip,isOptimizing:ln})}var Yg={render:ep(Fh)};export{Yg as default};
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
