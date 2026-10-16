var Op=Object.create;var mu=Object.defineProperty;var Ip=Object.getOwnPropertyDescriptor;var Fp=Object.getOwnPropertyNames;var Dp=Object.getPrototypeOf,$p=Object.prototype.hasOwnProperty;var mt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Up=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Fp(t))!$p.call(e,o)&&o!==n&&mu(e,o,{get:()=>t[o],enumerable:!(r=Ip(t,o))||r.enumerable});return e};var $=(e,t,n)=>(n=e!=null?Op(Dp(e)):{},Up(t||!e||!e.__esModule?mu(n,"default",{value:e,enumerable:!0}):n,e));var Eu=mt(F=>{"use strict";var tr=Symbol.for("react.element"),jp=Symbol.for("react.portal"),Bp=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Yp=Symbol.for("react.suspense"),Gp=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),hu=Symbol.iterator;function Zp(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,xu={};function kn(e,t,n){this.props=e,this.context=t,this.refs=xu,this.updater=n||yu}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wu(){}wu.prototype=kn.prototype;function Ri(e,t,n){this.props=e,this.context=t,this.refs=xu,this.updater=n||yu}var Pi=Ri.prototype=new wu;Pi.constructor=Ri;bu(Pi,kn.prototype);Pi.isPureReactComponent=!0;var vu=Array.isArray,ku=Object.prototype.hasOwnProperty,Ti={current:null},Su={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ku.call(t,r)&&!Su.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:tr,type:e,key:i,ref:l,props:o,_owner:Ti.current}}function qp(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Zr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tr:case jp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+zi(l,0):r,vu(o)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),Zr(o,t,n,"",function(c){return c})):o!=null&&(Li(o)&&(o=qp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(gu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",vu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+zi(i,a);l+=Zr(i,t,n,u,o)}else if(u=Zp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+zi(i,a++),l+=Zr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xr(e,t,n){if(e==null)return e;var r=[],o=0;return Zr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ef(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},qr={transition:null},tf={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:qr,ReactCurrentOwner:Ti};function Cu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=kn;F.Fragment=Bp;F.Profiler=Hp;F.PureComponent=Ri;F.StrictMode=Vp;F.Suspense=Yp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;F.act=Cu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ti.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ku.call(t,u)&&!Su.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tr,type:e.type,key:o,ref:i,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:Qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wp,_context:e},e.Consumer=e};F.createElement=Nu;F.createFactory=function(e){var t=Nu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Kp,render:e}};F.isValidElement=Li;F.lazy=function(e){return{$$typeof:Xp,_payload:{_status:-1,_result:e},_init:ef}};F.memo=function(e,t){return{$$typeof:Gp,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};F.unstable_act=Cu;F.useCallback=function(e,t){return we.current.useCallback(e,t)};F.useContext=function(e){return we.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return we.current.useDeferredValue(e)};F.useEffect=function(e,t){return we.current.useEffect(e,t)};F.useId=function(){return we.current.useId()};F.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return we.current.useMemo(e,t)};F.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};F.useRef=function(e){return we.current.useRef(e)};F.useState=function(e){return we.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return we.current.useTransition()};F.version="18.3.1"});var Be=mt((_h,_u)=>{"use strict";_u.exports=Eu()});var Fu=mt(H=>{"use strict";function Ii(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Jr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Xe(e){return e.length===0?null:e[0]}function to(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,a=e[l],u=l+1,c=e[u];if(0>Jr(a,n))u<o&&0>Jr(c,a)?(e[r]=c,e[u]=n,r=u):(e[r]=a,e[l]=n,r=l);else if(u<o&&0>Jr(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function Jr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(zu=performance,H.unstable_now=function(){return zu.now()}):(Mi=Date,Ru=Mi.now(),H.unstable_now=function(){return Mi.now()-Ru});var zu,Mi,Ru,at=[],zt=[],nf=1,Ve=null,me=3,no=!1,tn=!1,rr=!1,Lu=typeof setTimeout=="function"?setTimeout:null,Mu=typeof clearTimeout=="function"?clearTimeout:null,Pu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fi(e){for(var t=Xe(zt);t!==null;){if(t.callback===null)to(zt);else if(t.startTime<=e)to(zt),t.sortIndex=t.expirationTime,Ii(at,t);else break;t=Xe(zt)}}function Di(e){if(rr=!1,Fi(e),!tn)if(Xe(at)!==null)tn=!0,Ui($i);else{var t=Xe(zt);t!==null&&ji(Di,t.startTime-e)}}function $i(e,t){tn=!1,rr&&(rr=!1,Mu(or),or=-1),no=!0;var n=me;try{for(Fi(t),Ve=Xe(at);Ve!==null&&(!(Ve.expirationTime>t)||e&&!Iu());){var r=Ve.callback;if(typeof r=="function"){Ve.callback=null,me=Ve.priorityLevel;var o=r(Ve.expirationTime<=t);t=H.unstable_now(),typeof o=="function"?Ve.callback=o:Ve===Xe(at)&&to(at),Fi(t)}else to(at);Ve=Xe(at)}if(Ve!==null)var i=!0;else{var l=Xe(zt);l!==null&&ji(Di,l.startTime-t),i=!1}return i}finally{Ve=null,me=n,no=!1}}var ro=!1,eo=null,or=-1,Au=5,Ou=-1;function Iu(){return!(H.unstable_now()-Ou<Au)}function Ai(){if(eo!==null){var e=H.unstable_now();Ou=e;var t=!0;try{t=eo(!0,e)}finally{t?nr():(ro=!1,eo=null)}}else ro=!1}var nr;typeof Pu=="function"?nr=function(){Pu(Ai)}:typeof MessageChannel<"u"?(Oi=new MessageChannel,Tu=Oi.port2,Oi.port1.onmessage=Ai,nr=function(){Tu.postMessage(null)}):nr=function(){Lu(Ai,0)};var Oi,Tu;function Ui(e){eo=e,ro||(ro=!0,nr())}function ji(e,t){or=Lu(function(){e(H.unstable_now())},t)}H.unstable_IdlePriority=5;H.unstable_ImmediatePriority=1;H.unstable_LowPriority=4;H.unstable_NormalPriority=3;H.unstable_Profiling=null;H.unstable_UserBlockingPriority=2;H.unstable_cancelCallback=function(e){e.callback=null};H.unstable_continueExecution=function(){tn||no||(tn=!0,Ui($i))};H.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Au=0<e?Math.floor(1e3/e):5};H.unstable_getCurrentPriorityLevel=function(){return me};H.unstable_getFirstCallbackNode=function(){return Xe(at)};H.unstable_next=function(e){switch(me){case 1:case 2:case 3:var t=3;break;default:t=me}var n=me;me=t;try{return e()}finally{me=n}};H.unstable_pauseExecution=function(){};H.unstable_requestPaint=function(){};H.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=me;me=e;try{return t()}finally{me=n}};H.unstable_scheduleCallback=function(e,t,n){var r=H.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:nf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ii(zt,e),Xe(at)===null&&e===Xe(zt)&&(rr?(Mu(or),or=-1):rr=!0,ji(Di,n-r))):(e.sortIndex=o,Ii(at,e),tn||no||(tn=!0,Ui($i))),e};H.unstable_shouldYield=Iu;H.unstable_wrapCallback=function(e){var t=me;return function(){var n=me;me=t;try{return e.apply(this,arguments)}finally{me=n}}}});var $u=mt((Rh,Du)=>{"use strict";Du.exports=Fu()});var Vd=mt(Ue=>{"use strict";var rf=Be(),De=$u();function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qs=new Set,Er={};function hn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(Er[e]=t,e=0;e<t.length;e++)Qs.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},ju={};function lf(e){return cl.call(ju,e)?!0:cl.call(Uu,e)?!1:of.test(e)?ju[e]=!0:(Uu[e]=!0,!1)}function af(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,n,r){if(t===null||typeof t>"u"||af(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var na=/[\-:]([a-z])/g;function ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(na,ra);de[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(na,ra);de[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(na,ra);de[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function oa(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,n,o,r)&&(n=null),r||o===null?lf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),aa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Gs=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Bi;function fr(e){if(Bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bi=t&&t[1]||""}return`
`+Bi+e}var Vi=!1;function Hi(e,t){if(!e||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function sf(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Cn:return"Portal";case dl:return"Profiler";case ia:return"StrictMode";case pl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case la:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case aa:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function cf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function df(e){var t=Xs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=df(e))}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qs(e,t){t=t.checked,t!=null&&oa(e,"checked",t,!1)}function vl(e,t){qs(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(mr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Js(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,tc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pf=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function rc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ff=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(ff[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Dn=null,$n=null;function Ku(e){if(e=Wr(e)){if(typeof Sl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ui(t),Sl(e.stateNode,e.type,t))}}function oc(e){Dn?$n?$n.push(e):$n=[e]:Dn=e}function ic(){if(Dn){var e=Dn,t=$n;if($n=Dn=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function lc(e,t){return e(t)}function ac(){}var Wi=!1;function uc(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return lc(e,t,n)}finally{Wi=!1,(Dn!==null||$n!==null)&&(ac(),ic())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Nl=!1;if(xt)try{Sn={},Object.defineProperty(Sn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Nl=!1}var Sn;function mf(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var yr=!1,Oo=null,Io=!1,Cl=null,hf={onError:function(e){yr=!0,Oo=e}};function vf(e,t,n,r,o,i,l,a,u){yr=!1,Oo=null,mf.apply(hf,arguments)}function gf(e,t,n,r,o,i,l,a,u){if(vf.apply(this,arguments),yr){if(yr){var c=Oo;yr=!1,Oo=null}else throw Error(w(198));Io||(Io=!0,Cl=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yu(e){if(vn(e)!==e)throw Error(w(188))}function yf(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Yu(o),e;if(i===r)return Yu(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function cc(e){return e=yf(e),e!==null?dc(e):null}function dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dc(e);if(t!==null)return t;e=e.sibling}return null}var pc=De.unstable_scheduleCallback,Gu=De.unstable_cancelCallback,bf=De.unstable_shouldYield,xf=De.unstable_requestPaint,te=De.unstable_now,wf=De.unstable_getCurrentPriorityLevel,sa=De.unstable_ImmediatePriority,fc=De.unstable_UserBlockingPriority,Fo=De.unstable_NormalPriority,kf=De.unstable_LowPriority,mc=De.unstable_IdlePriority,oi=null,dt=null;function Sf(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Ef,Nf=Math.log,Cf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(Nf(e)/Cf|0)|0}var ao=64,uo=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function _f(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-tt(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=_f(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hc(){var e=ao;return ao<<=1,(ao&4194240)===0&&(ao=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Rf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function vc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gc,da,yc,bc,xc,_l=!1,so=[],It=null,Ft=null,Dt=null,Rr=new Map,Pr=new Map,Lt=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wr(t),t!==null&&da(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Tf(e,t,n,r,o){switch(t){case"focusin":return It=lr(It,e,t,n,r,o),!0;case"dragenter":return Ft=lr(Ft,e,t,n,r,o),!0;case"mouseover":return Dt=lr(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Rr.set(i,lr(Rr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,lr(Pr.get(i)||null,e,t,n,r,o)),!0}return!1}function wc(e){var t=on(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,xc(e.priority,function(){yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=Wr(n),t!==null&&da(t),e.blockedOn=n,!1;t.shift()}return!0}function Zu(e,t,n){No(e)&&n.delete(t)}function Lf(){_l=!1,It!==null&&No(It)&&(It=null),Ft!==null&&No(Ft)&&(Ft=null),Dt!==null&&No(Dt)&&(Dt=null),Rr.forEach(Zu),Pr.forEach(Zu)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Lf)))}function Tr(e){function t(o){return ar(o,e)}if(0<so.length){ar(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&ar(It,e),Ft!==null&&ar(Ft,e),Dt!==null&&ar(Dt,e),Rr.forEach(t),Pr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)wc(n),n.blockedOn===null&&Lt.shift()}var Un=Nt.ReactCurrentBatchConfig,$o=!0;function Mf(e,t,n,r){var o=V,i=Un.transition;Un.transition=null;try{V=1,pa(e,t,n,r)}finally{V=o,Un.transition=i}}function Af(e,t,n,r){var o=V,i=Un.transition;Un.transition=null;try{V=4,pa(e,t,n,r)}finally{V=o,Un.transition=i}}function pa(e,t,n,r){if($o){var o=zl(e,t,n,r);if(o===null)Ji(e,t,r,Uo,n),Xu(e,r);else if(Tf(o,e,t,n,r))r.stopPropagation();else if(Xu(e,r),t&4&&-1<Pf.indexOf(e)){for(;o!==null;){var i=Wr(o);if(i!==null&&gc(i),i=zl(e,t,n,r),i===null&&Ji(e,t,r,Uo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ji(e,t,r,null,n)}}var Uo=null;function zl(e,t,n,r){if(Uo=null,e=ua(r),e=on(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case sa:return 1;case fc:return 4;case Fo:case kf:return 16;case mc:return 536870912;default:return 16}default:return 16}}var At=null,fa=null,Co=null;function Sc(){if(Co)return Co;var e,t=fa,n=t.length,r,o="value"in At?At.value:At.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Co=o.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function qu(){return!1}function $e(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?co:qu,this.isPropagationStopped=qu,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=$e(Xn),Hr=J({},Xn,{view:0,detail:0}),Of=$e(Hr),Ki,Yi,ur,ii=J({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Ki=e.screenX-ur.screenX,Yi=e.screenY-ur.screenY):Yi=Ki=0,ur=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),Ju=$e(ii),If=J({},ii,{dataTransfer:0}),Ff=$e(If),Df=J({},Hr,{relatedTarget:0}),Gi=$e(Df),$f=J({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=$e($f),jf=J({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=$e(jf),Vf=J({},Xn,{data:0}),es=$e(Vf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qf[e])?!!t[e]:!1}function ha(){return Kf}var Yf=J({},Hr,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=$e(Yf),Xf=J({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=$e(Xf),Zf=J({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),qf=$e(Zf),Jf=J({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),em=$e(Jf),tm=J({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=$e(tm),rm=[9,13,27,32],va=xt&&"CompositionEvent"in window,br=null;xt&&"documentMode"in document&&(br=document.documentMode);var om=xt&&"TextEvent"in window&&!br,Nc=xt&&(!va||br&&8<br&&11>=br),ns=" ",rs=!1;function Cc(e,t){switch(e){case"keyup":return rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function im(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(rs=!0,ns);case"textInput":return e=t.data,e===ns&&rs?null:e;default:return null}}function lm(e,t){if(_n)return e==="compositionend"||!va&&Cc(e,t)?(e=Sc(),Co=fa=At=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function _c(e,t,n,r){oc(r),t=jo(t,"onChange"),0<t.length&&(n=new ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Lr=null;function um(e){Dc(e,0)}function li(e){var t=Pn(e);if(Zs(t))return e}function sm(e,t){if(e==="change")return t}var zc=!1;xt&&(xt?(fo="oninput"in document,fo||(Xi=document.createElement("div"),Xi.setAttribute("oninput","return;"),fo=typeof Xi.oninput=="function"),po=fo):po=!1,zc=po&&(!document.documentMode||9<document.documentMode));var po,fo,Xi;function is(){xr&&(xr.detachEvent("onpropertychange",Rc),Lr=xr=null)}function Rc(e){if(e.propertyName==="value"&&li(Lr)){var t=[];_c(t,Lr,e,ua(e)),uc(um,t)}}function cm(e,t,n){e==="focusin"?(is(),xr=t,Lr=n,xr.attachEvent("onpropertychange",Rc)):e==="focusout"&&is()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Lr)}function pm(e,t){if(e==="click")return li(t)}function fm(e,t){if(e==="input"||e==="change")return li(t)}function mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:mm;function Mr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ls(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hm(e){var t=Tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=as(n,i);var l=as(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=xt&&"documentMode"in document&&11>=document.documentMode,zn=null,Rl=null,wr=null,Pl=!1;function us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||zn==null||zn!==Ao(r)||(r=zn,"selectionStart"in r&&ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Mr(wr,r)||(wr=r,r=jo(Rl,"onSelect"),0<r.length&&(t=new ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Zi={},Lc={};xt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ai(e){if(Zi[e])return Zi[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return Zi[e]=t[n];return e}var Mc=ai("animationend"),Ac=ai("animationiteration"),Oc=ai("animationstart"),Ic=ai("transitionend"),Fc=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Fc.set(e,t),hn(t,[e])}for(ho=0;ho<ss.length;ho++)vo=ss[ho],cs=vo.toLowerCase(),ds=vo[0].toUpperCase()+vo.slice(1),Qt(cs,"on"+ds);var vo,cs,ds,ho;Qt(Mc,"onAnimationEnd");Qt(Ac,"onAnimationIteration");Qt(Oc,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Ic,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function ps(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gf(r,t,void 0,e),e.currentTarget=null}function Dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;ps(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;ps(o,a,c),i=u}}}if(Io)throw e=Cl,Io=!1,Cl=null,e}function K(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||($c(t,e,2,!1),n.add(r))}function qi(e,t,n){var r=0;t&&(r|=4),$c(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[go]){e[go]=!0,Qs.forEach(function(n){n!=="selectionchange"&&(gm.has(n)||qi(n,!1,e),qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,qi("selectionchange",!1,t))}}function $c(e,t,n,r){switch(kc(t)){case 1:var o=Mf;break;case 4:o=Af;break;default:o=pa}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ji(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=on(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}uc(function(){var c=i,f=ua(n),h=[];e:{var m=Fc.get(e);if(m!==void 0){var g=ma,v=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":g=Gf;break;case"focusin":v="focus",g=Gi;break;case"focusout":v="blur",g=Gi;break;case"beforeblur":case"afterblur":g=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qf;break;case Mc:case Ac:case Oc:g=Uf;break;case Ic:g=em;break;case"scroll":g=Of;break;case"wheel":g=nm;break;case"copy":case"cut":case"paste":g=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ts}var b=(t&4)!==0,E=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var s=c,p;s!==null;){p=s;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=zr(s,d),y!=null&&b.push(Or(s,y,p)))),E)break;s=s.return}0<b.length&&(m=new g(m,v,null,n,f),h.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==kl&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[wt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?on(v):null,v!==null&&(E=vn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(b=Ju,y="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(b=ts,y="onPointerLeave",d="onPointerEnter",s="pointer"),E=g==null?m:Pn(g),p=v==null?m:Pn(v),m=new b(y,s+"leave",g,n,f),m.target=E,m.relatedTarget=p,y=null,on(f)===c&&(b=new b(d,s+"enter",v,n,f),b.target=p,b.relatedTarget=E,y=b),E=y,g&&v)t:{for(b=g,d=v,s=0,p=b;p;p=Nn(p))s++;for(p=0,y=d;y;y=Nn(y))p++;for(;0<s-p;)b=Nn(b),s--;for(;0<p-s;)d=Nn(d),p--;for(;s--;){if(b===d||d!==null&&b===d.alternate)break t;b=Nn(b),d=Nn(d)}b=null}else b=null;g!==null&&fs(h,m,g,b,!1),v!==null&&E!==null&&fs(h,E,v,b,!0)}}e:{if(m=c?Pn(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var N=sm;else if(os(m))if(zc)N=fm;else{N=dm;var k=cm}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=pm);if(N&&(N=N(e,c))){_c(h,N,n,f);break e}k&&k(e,m,c),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&gl(m,"number",m.value)}switch(k=c?Pn(c):window,e){case"focusin":(os(k)||k.contentEditable==="true")&&(zn=k,Rl=c,wr=null);break;case"focusout":wr=Rl=zn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,us(h,n,f);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":us(h,n,f)}var S;if(va)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else _n?Cc(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Nc&&n.locale!=="ko"&&(_n||x!=="onCompositionStart"?x==="onCompositionEnd"&&_n&&(S=Sc()):(At=f,fa="value"in At?At.value:At.textContent,_n=!0)),k=jo(c,x),0<k.length&&(x=new es(x,e,null,n,f),h.push({event:x,listeners:k}),S?x.data=S:(S=Ec(n),S!==null&&(x.data=S)))),(S=om?im(e,n):lm(e,n))&&(c=jo(c,"onBeforeInput"),0<c.length&&(f=new es("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=S))}Dc(h,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=zr(e,n),i!=null&&r.unshift(Or(e,i,o)),i=zr(e,t),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=zr(n,i),u!=null&&l.unshift(Or(n,u,a))):o||(u=zr(n,i),u!=null&&l.push(Or(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ym=/\r\n?/g,bm=/\u0000|\uFFFD/g;function ms(e){return(typeof e=="string"?e:""+e).replace(ym,`
`).replace(bm,"")}function yo(e,t,n){if(t=ms(t),ms(e)!==t&&n)throw Error(w(425))}function Bo(){}var Tl=null,Ll=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,xm=typeof clearTimeout=="function"?clearTimeout:void 0,hs=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof hs<"u"?function(e){return hs.resolve(null).then(e).catch(km)}:Al;function km(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Tr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Zn,Ir="__reactProps$"+Zn,wt="__reactContainer$"+Zn,Ol="__reactEvents$"+Zn,Sm="__reactListeners$"+Zn,Nm="__reactHandles$"+Zn;function on(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vs(e);e!==null;){if(n=e[ct])return n;e=vs(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[ct]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ui(e){return e[Ir]||null}var Il=[],Tn=-1;function Kt(e){return{current:e}}function Y(e){0>Tn||(e.current=Il[Tn],Il[Tn]=null,Tn--)}function W(e,t){Tn++,Il[Tn]=e.current,e.current=t}var Wt={},ye=Kt(Wt),ze=Kt(!1),cn=Wt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function Vo(){Y(ze),Y(ye)}function gs(e,t,n){if(ye.current!==Wt)throw Error(w(168));W(ye,t),W(ze,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,cf(e)||"Unknown",o));return J({},n,r)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,cn=ye.current,W(ye,e),W(ze,ze.current),!0}function ys(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Uc(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Y(ze),Y(ye),W(ye,e)):Y(ze),W(ze,n)}var vt=null,si=!1,tl=!1;function jc(e){vt===null?vt=[e]:vt.push(e)}function Cm(e){si=!0,jc(e)}function Yt(){if(!tl&&vt!==null){tl=!0;var e=0,t=V;try{var n=vt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,si=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),pc(sa,Yt),o}finally{V=t,tl=!1}}return null}var Ln=[],Mn=0,Wo=null,Qo=0,He=[],We=0,dn=null,gt=1,yt="";function nn(e,t){Ln[Mn++]=Qo,Ln[Mn++]=Wo,Wo=e,Qo=t}function Bc(e,t,n){He[We++]=gt,He[We++]=yt,He[We++]=dn,dn=e;var r=gt;e=yt;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var i=32-tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-tt(t)+o|n<<o|r,yt=i+e}else gt=1<<i|n<<o|r,yt=e}function ya(e){e.return!==null&&(nn(e,1),Bc(e,1,0))}function ba(e){for(;e===Wo;)Wo=Ln[--Mn],Ln[Mn]=null,Qo=Ln[--Mn],Ln[Mn]=null;for(;e===dn;)dn=He[--We],He[We]=null,yt=He[--We],He[We]=null,gt=He[--We],He[We]=null}var Fe=null,Ie=null,X=!1,et=null;function Vc(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ie=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ie=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(X){var t=Ie;if(t){var n=t;if(!bs(e,t)){if(Fl(e))throw Error(w(418));t=$t(n.nextSibling);var r=Fe;t&&bs(e,t)?Vc(r,n):(e.flags=e.flags&-4097|2,X=!1,Fe=e)}}else{if(Fl(e))throw Error(w(418));e.flags=e.flags&-4097|2,X=!1,Fe=e}}}function xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function bo(e){if(e!==Fe)return!1;if(!X)return xs(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Ie)){if(Fl(e))throw Hc(),Error(w(418));for(;t;)Vc(e,t),t=$t(t.nextSibling)}if(xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Fe?$t(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=Ie;e;)e=$t(e.nextSibling)}function Wn(){Ie=Fe=null,X=!1}function xa(e){et===null?et=[e]:et.push(e)}var Em=Nt.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ws(e){var t=e._init;return t(e._payload)}function Wc(e){function t(d,s){if(e){var p=d.deletions;p===null?(d.deletions=[s],d.flags|=16):p.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function o(d,s){return d=Vt(d,s),d.index=0,d.sibling=null,d}function i(d,s,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<s?(d.flags|=2,s):p):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,p,y){return s===null||s.tag!==6?(s=ul(p,d.mode,y),s.return=d,s):(s=o(s,p),s.return=d,s)}function u(d,s,p,y){var N=p.type;return N===En?f(d,s,p.props.children,y,p.key):s!==null&&(s.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&ws(N)===s.type)?(y=o(s,p.props),y.ref=sr(d,s,p),y.return=d,y):(y=Mo(p.type,p.key,p.props,null,d.mode,y),y.ref=sr(d,s,p),y.return=d,y)}function c(d,s,p,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=sl(p,d.mode,y),s.return=d,s):(s=o(s,p.children||[]),s.return=d,s)}function f(d,s,p,y,N){return s===null||s.tag!==7?(s=sn(p,d.mode,y,N),s.return=d,s):(s=o(s,p),s.return=d,s)}function h(d,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ul(""+s,d.mode,p),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case oo:return p=Mo(s.type,s.key,s.props,null,d.mode,p),p.ref=sr(d,null,s),p.return=d,p;case Cn:return s=sl(s,d.mode,p),s.return=d,s;case Pt:var y=s._init;return h(d,y(s._payload),p)}if(mr(s)||ir(s))return s=sn(s,d.mode,p,null),s.return=d,s;xo(d,s)}return null}function m(d,s,p,y){var N=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(d,s,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oo:return p.key===N?u(d,s,p,y):null;case Cn:return p.key===N?c(d,s,p,y):null;case Pt:return N=p._init,m(d,s,N(p._payload),y)}if(mr(p)||ir(p))return N!==null?null:f(d,s,p,y,null);xo(d,p)}return null}function g(d,s,p,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(s,d,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:return d=d.get(y.key===null?p:y.key)||null,u(s,d,y,N);case Cn:return d=d.get(y.key===null?p:y.key)||null,c(s,d,y,N);case Pt:var k=y._init;return g(d,s,p,k(y._payload),N)}if(mr(y)||ir(y))return d=d.get(p)||null,f(s,d,y,N,null);xo(s,y)}return null}function v(d,s,p,y){for(var N=null,k=null,S=s,x=s=0,I=null;S!==null&&x<p.length;x++){S.index>x?(I=S,S=null):I=S.sibling;var R=m(d,S,p[x],y);if(R===null){S===null&&(S=I);break}e&&S&&R.alternate===null&&t(d,S),s=i(R,s,x),k===null?N=R:k.sibling=R,k=R,S=I}if(x===p.length)return n(d,S),X&&nn(d,x),N;if(S===null){for(;x<p.length;x++)S=h(d,p[x],y),S!==null&&(s=i(S,s,x),k===null?N=S:k.sibling=S,k=S);return X&&nn(d,x),N}for(S=r(d,S);x<p.length;x++)I=g(S,d,x,p[x],y),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?x:I.key),s=i(I,s,x),k===null?N=I:k.sibling=I,k=I);return e&&S.forEach(function(j){return t(d,j)}),X&&nn(d,x),N}function b(d,s,p,y){var N=ir(p);if(typeof N!="function")throw Error(w(150));if(p=N.call(p),p==null)throw Error(w(151));for(var k=N=null,S=s,x=s=0,I=null,R=p.next();S!==null&&!R.done;x++,R=p.next()){S.index>x?(I=S,S=null):I=S.sibling;var j=m(d,S,R.value,y);if(j===null){S===null&&(S=I);break}e&&S&&j.alternate===null&&t(d,S),s=i(j,s,x),k===null?N=j:k.sibling=j,k=j,S=I}if(R.done)return n(d,S),X&&nn(d,x),N;if(S===null){for(;!R.done;x++,R=p.next())R=h(d,R.value,y),R!==null&&(s=i(R,s,x),k===null?N=R:k.sibling=R,k=R);return X&&nn(d,x),N}for(S=r(d,S);!R.done;x++,R=p.next())R=g(S,d,x,R.value,y),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?x:R.key),s=i(R,s,x),k===null?N=R:k.sibling=R,k=R);return e&&S.forEach(function(Ae){return t(d,Ae)}),X&&nn(d,x),N}function E(d,s,p,y){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case oo:e:{for(var N=p.key,k=s;k!==null;){if(k.key===N){if(N=p.type,N===En){if(k.tag===7){n(d,k.sibling),s=o(k,p.props.children),s.return=d,d=s;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&ws(N)===k.type){n(d,k.sibling),s=o(k,p.props),s.ref=sr(d,k,p),s.return=d,d=s;break e}n(d,k);break}else t(d,k);k=k.sibling}p.type===En?(s=sn(p.props.children,d.mode,y,p.key),s.return=d,d=s):(y=Mo(p.type,p.key,p.props,null,d.mode,y),y.ref=sr(d,s,p),y.return=d,d=y)}return l(d);case Cn:e:{for(k=p.key;s!==null;){if(s.key===k)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){n(d,s.sibling),s=o(s,p.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=sl(p,d.mode,y),s.return=d,d=s}return l(d);case Pt:return k=p._init,E(d,s,k(p._payload),y)}if(mr(p))return v(d,s,p,y);if(ir(p))return b(d,s,p,y);xo(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(n(d,s.sibling),s=o(s,p),s.return=d,d=s):(n(d,s),s=ul(p,d.mode,y),s.return=d,d=s),l(d)):n(d,s)}return E}var Qn=Wc(!0),Qc=Wc(!1),Ko=Kt(null),Yo=null,An=null,wa=null;function ka(){wa=An=Yo=null}function Sa(e){var t=Ko.current;Y(Ko),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Yo=e,wa=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(_e=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(wa!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Yo===null)throw Error(w(308));An=e,Yo.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var ln=null;function Na(e){ln===null?ln=[e]:ln.push(e)}function Kc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Na(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,Na(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ca(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var o=e.updateQueue;Tt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;l=0,f=c=u=null,a=i;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,b=a;switch(m=t,g=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(g,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,m=typeof v=="function"?v.call(g,h,m):v,m==null)break e;h=J({},h,m);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,u=h):f=f.next=g,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=h}}function Ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var Qr={},pt=Kt(Qr),Fr=Kt(Qr),Dr=Kt(Qr);function an(e){if(e===Qr)throw Error(w(174));return e}function Ea(e,t){switch(W(Dr,t),W(Fr,e),W(pt,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}Y(pt),W(pt,t)}function Kn(){Y(pt),Y(Fr),Y(Dr)}function Gc(e){an(Dr.current);var t=an(pt.current),n=bl(t,e.type);t!==n&&(W(Fr,e),W(pt,n))}function _a(e){Fr.current===e&&(Y(pt),Y(Fr))}var Z=Kt(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function za(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var zo=Nt.ReactCurrentDispatcher,rl=Nt.ReactCurrentBatchConfig,pn=0,q=null,ie=null,ae=null,Zo=!1,kr=!1,$r=0,_m=0;function he(){throw Error(w(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Pa(e,t,n,r,o,i){if(pn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?Tm:Lm,e=n(r,o),kr){i=0;do{if(kr=!1,$r=0,25<=i)throw Error(w(301));i+=1,ae=ie=null,t.updateQueue=null,zo.current=Mm,e=n(r,o)}while(kr)}if(zo.current=qo,t=ie!==null&&ie.next!==null,pn=0,ae=ie=q=null,Zo=!1,t)throw Error(w(300));return e}function Ta(){var e=$r!==0;return $r=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=e:ae=ae.next=e,ae}function Ge(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?q.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(w(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?q.memoizedState=ae=e:ae=ae.next=e}return ae}function Ur(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=Ge(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var f=c.lane;if((pn&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,q.lanes|=f,fn|=f}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,rt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Ge(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);rt(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xc(){}function Zc(e,t){var n=q,r=Ge(),o=t(),i=!rt(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,La(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,jr(9,Jc.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(w(349));(pn&30)!==0||qc(n,t,o)}return o}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function nd(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function Ns(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,q,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return Ge().memoizedState}function Ro(e,t,n,r){var o=st();q.flags|=e,o.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function ci(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Ra(r,l.deps)){o.memoizedState=jr(t,n,i,r);return}}q.flags|=e,o.memoizedState=jr(1|t,n,i,r)}function Cs(e,t){return Ro(8390656,8,e,t)}function La(e,t){return ci(2048,8,e,t)}function od(e,t){return ci(4,2,e,t)}function id(e,t){return ci(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ad(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,ld.bind(null,t,e),n)}function Ma(){}function ud(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cd(e,t,n){return(pn&21)===0?(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n):(rt(n,t)||(n=hc(),q.lanes|=n,fn|=n,e.baseState=!0),t)}function zm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{V=n,rl.transition=r}}function dd(){return Ge().memoizedState}function Rm(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pd(e))fd(t,n);else if(n=Kc(e,t,n,r),n!==null){var o=Se();nt(n,e,r,o),md(n,t,r)}}function Pm(e,t,n){var r=Bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pd(e))fd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,rt(a,l)){var u=t.interleaved;u===null?(o.next=o,Na(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=Kc(e,t,o,r),n!==null&&(o=Se(),nt(n,e,r,o),md(n,t,r))}}function pd(e){var t=e.alternate;return e===q||t!==null&&t===q}function fd(e,t){kr=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ca(e,n)}}var qo={readContext:Ye,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Tm={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Ns,useDebugValue:Ma,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=zm.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=st();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ue===null)throw Error(w(349));(pn&30)!==0||qc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cs(ed.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,Jc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=st(),t=ue.identifierPrefix;if(X){var n=yt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:Ye,useCallback:ud,useContext:Ye,useEffect:La,useImperativeHandle:ad,useInsertionEffect:od,useLayoutEffect:id,useMemo:sd,useReducer:ol,useRef:rd,useState:function(){return ol(Ur)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ge();return cd(t,ie.memoizedState,e)},useTransition:function(){var e=ol(Ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:dd,unstable_isNewReconciler:!1},Mm={readContext:Ye,useCallback:ud,useContext:Ye,useEffect:La,useImperativeHandle:ad,useInsertionEffect:od,useLayoutEffect:id,useMemo:sd,useReducer:il,useRef:rd,useState:function(){return il(Ur)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:cd(t,ie.memoizedState,e)},useTransition:function(){var e=il(Ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:dd,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Bt(e),i=bt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(nt(t,e,o,r),_o(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Bt(e),i=bt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(nt(t,e,o,r),_o(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Bt(e),o=bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(nt(t,e,r,n),_o(t,e,r))}};function Es(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(o,i):!0}function hd(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Re(t)?cn:ye.current,r=t.contextTypes,i=(r=r!=null)?Hn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ca(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Re(t)?cn:ye.current,o.context=Hn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ul(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),Go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=sf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Am=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ei||(ei=!0,ql=r),Bl(e,t)},n}function gd(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Am;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ym.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ps(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Om=Nt.ReactCurrentOwner,_e=!1;function ke(e,t,n,r){t.child=e===null?Qc(t,null,n,r):Qn(t,e.child,n,r)}function Ts(e,t,n,r,o){n=n.render;var i=t.ref;return jn(t,o),r=Pa(e,t,n,r,i,o),n=Ta(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&n&&ya(t),t.flags|=1,ke(e,t,r,o),t.child)}function Ls(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ja(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yd(e,t,i,r,o)):(e=Mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,St(e,t,o)}return Vl(e,t,n,r,o)}function bd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(In,Oe),Oe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(In,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(In,Oe),Oe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(In,Oe),Oe|=r;return ke(e,t,o,n),t.child}function xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var i=Re(n)?cn:ye.current;return i=Hn(t,i),jn(t,o),n=Pa(e,t,n,r,i,o),r=Ta(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&r&&ya(t),t.flags|=1,ke(e,t,n,o),t.child)}function Ms(e,t,n,r,o){if(Re(n)){var i=!0;Ho(t)}else i=!1;if(jn(t,o),t.stateNode===null)Po(e,t),hd(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ye(c):(c=Re(n)?cn:ye.current,c=Hn(t,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&_s(t,l,r,c),Tt=!1;var m=t.memoizedState;l.state=m,Go(t,r,l,o),u=t.memoizedState,a!==r||m!==u||ze.current||Tt?(typeof f=="function"&&(Ul(t,n,f,r),u=t.memoizedState),(a=Tt||Es(t,n,a,r,m,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:qe(t.type,a),l.props=c,h=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=Re(n)?cn:ye.current,u=Hn(t,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==u)&&_s(t,l,r,u),Tt=!1,m=t.memoizedState,l.state=m,Go(t,r,l,o);var v=t.memoizedState;a!==h||m!==v||ze.current||Tt?(typeof g=="function"&&(Ul(t,n,g,r),v=t.memoizedState),(c=Tt||Es(t,n,c,r,m,v,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,i,o)}function Hl(e,t,n,r,o,i){xd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ys(t,n,!1),St(e,t,i);r=t.stateNode,Om.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&ys(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gs(e,t.context,!1),Ea(e,t.containerInfo)}function As(e,t,n,r,o){return Wn(),xa(o),t.flags|=256,ke(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Z,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=mi(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ql(n),t.memoizedState=Wl,e):Aa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Im(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vt(a,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ql(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&xa(r),Qn(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Im(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(w(422))),wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=mi({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Qn(t,e.child,null,l),t.child.memoizedState=Ql(l),t.memoizedState=Wl,i);if((t.mode&1)===0)return wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=ll(i,r,void 0),wo(e,t,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),nt(r,e,o,-1))}return Ua(),r=ll(Error(w(421))),wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Gm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=$t(o.nextSibling),Fe=t,X=!0,et=null,e!==null&&(He[We++]=gt,He[We++]=yt,He[We++]=dn,gt=e.id,yt=e.overflow,dn=t),t=Aa(t,r.children),t.flags|=4096,t)}function Os(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function al(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,n,t);else if(e.tag===19)Os(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Z,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),al(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}al(t,!0,n,null,i);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fm(e,t,n){switch(t.tag){case 3:wd(t),Wn();break;case 5:Gc(t);break;case 1:Re(t.type)&&Ho(t);break;case 4:Ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Ko,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Z,Z.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?kd(e,t,n):(W(Z,Z.current&1),e=St(e,t,n),e!==null?e.sibling:null);W(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,n)}return St(e,t,n)}var Nd,Kl,Cd,Ed;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};Cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(pt.current);var i=null;switch(n){case"input":o=hl(e,o),r=hl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=yl(e,o),r=yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}xl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o?.[c],r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&K("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dm(e,t,n){var r=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Re(t.type)&&Vo(),ve(t),null;case 3:return r=t.stateNode,Kn(),Y(ze),Y(ye),za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,et!==null&&(ta(et),et=null))),Kl(e,t),ve(t),null;case 5:_a(t);var o=an(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ve(t),null}if(e=an(pt.current),bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ct]=t,r[Ir]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)K(vr[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Vu(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Wu(r,i),K("invalid",r)}xl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,e),o=["children",""+a]):Er.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":io(r),Hu(r,i,!0);break;case"textarea":io(r),Qu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ec(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ct]=t,e[Ir]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=wl(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)K(vr[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Vu(e,r),o=hl(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),K("invalid",e);break;case"textarea":Wu(e,r),o=yl(e,r),K("invalid",e);break;default:o=r}xl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?rc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_r(e,u):typeof u=="number"&&_r(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?u!=null&&i==="onScroll"&&K("scroll",e):u!=null&&oa(e,i,u,l))}switch(n){case"input":io(e),Hu(e,r,!1);break;case"textarea":io(e),Qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=an(Dr.current),an(pt.current),bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ie!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hc(),Wn(),t.flags|=98560,i=!1;else if(i=bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[ct]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else et!==null&&(ta(et),et=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Z.current&1)!==0?le===0&&(le=3):Ua())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Kn(),Kl(e,t),e===null&&Ar(t.stateNode.containerInfo),ve(t),null;case 10:return Sa(t.type._context),ve(t),null;case 17:return Re(t.type)&&Vo(),ve(t),null;case 19:if(Y(Z),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)cr(i,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Xo(e),l!==null){for(t.flags|=128,cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Gn&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return ve(t),null}else 2*te()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Z.current,W(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return $a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Oe&1073741824)!==0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function $m(e,t){switch(ba(t),t.tag){case 1:return Re(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),Y(ze),Y(ye),za(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _a(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return Kn(),null;case 10:return Sa(t.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var ko=!1,ge=!1,Um=typeof WeakSet=="function"?WeakSet:Set,C=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Is=!1;function jm(e,t){if(Tl=$o,e=Tc(),ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,f=0,h=e,m=null;t:for(;;){for(var g;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++f===r&&(u=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},$o=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,E=v.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:qe(t.type,b),E);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=Is,Is=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yl(t,n,i)}o=o.next}while(o!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function _d(e){var t=e.alternate;t!==null&&(e.alternate=null,_d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Ir],delete t[Ol],delete t[Sm],delete t[Nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var se=null,Je=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:ge||On(n,t);case 6:var r=se,o=Je;se=null,Rt(e,t,n),se=r,Je=o,se!==null&&(Je?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Je?(e=se,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),Tr(e)):el(se,n.stateNode));break;case 4:r=se,o=Je,se=n.stateNode.containerInfo,Je=!0,Rt(e,t,n),se=r,Je=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Yl(n,t,l),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!ge&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Rt(e,t,n),ge=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Um),t.forEach(function(r){var o=Xm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Je=!1;break e;case 3:se=a.stateNode.containerInfo,Je=!0;break e;case 4:se=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(se===null)throw Error(w(160));Rd(i,l,o),se=null,Je=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ut(e),r&4){try{Sr(3,e,e.return),pi(3,e)}catch(b){ee(e,e.return,b)}try{Sr(5,e,e.return)}catch(b){ee(e,e.return,b)}}break;case 1:Ze(t,e),ut(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ze(t,e),ut(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(b){ee(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&qs(o,i),wl(a,l);var c=wl(a,i);for(l=0;l<u.length;l+=2){var f=u[l],h=u[l+1];f==="style"?rc(o,h):f==="dangerouslySetInnerHTML"?tc(o,h):f==="children"?_r(o,h):oa(o,f,h,c)}switch(a){case"input":vl(o,i);break;case"textarea":Js(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Fn(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Fn(o,!!i.multiple,i.defaultValue,!0):Fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ir]=i}catch(b){ee(e,e.return,b)}}break;case 6:if(Ze(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){ee(e,e.return,b)}}break;case 3:if(Ze(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(b){ee(e,e.return,b)}break;case 4:Ze(t,e),ut(e);break;case 13:Ze(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Fa=te())),r&4&&Ds(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||f,Ze(t,e),ge=c):Ze(t,e),ut(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&(e.mode&1)!==0)for(C=e,f=e.child;f!==null;){for(h=C=f;C!==null;){switch(m=C,g=m.child,m.tag){case 0:case 11:case 14:case 15:Sr(4,m,m.return);break;case 1:On(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ee(r,n,b)}}break;case 5:On(m,m.return);break;case 22:if(m.memoizedState!==null){Us(h);continue}}g!==null?(g.return=m,C=g):Us(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=nc("display",l))}catch(b){ee(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(b){ee(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ze(t,e),ut(e),r&4&&Ds(e);break;case 21:break;default:Ze(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_r(o,""),r.flags&=-33);var i=Fs(e);Zl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Fs(e);Xl(e,a,l);break;default:throw Error(w(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bm(e,t,n){C=e,Td(e,t,n)}function Td(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ko;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ge;a=ko;var c=ge;if(ko=l,(ge=u)&&!c)for(C=o;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?js(o):u!==null?(u.return=l,C=u):js(o);for(;i!==null;)C=i,Td(i,t,n),i=i.sibling;C=o,ko=a,ge=c}$s(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,C=i):$s(e,t,n)}}function $s(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ge||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ss(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ss(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Tr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ge||t.flags&512&&Gl(t)}catch(m){ee(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Us(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function js(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{Gl(t)}catch(u){ee(t,i,u)}break;case 5:var l=t.return;try{Gl(t)}catch(u){ee(t,l,u)}}}catch(u){ee(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Vm=Math.ceil,Jo=Nt.ReactCurrentDispatcher,Oa=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,U=0,ue=null,ne=null,ce=0,Oe=0,In=Kt(0),le=0,Br=null,fn=0,fi=0,Ia=0,Nr=null,Ee=null,Fa=0,Gn=1/0,ht=null,ei=!1,ql=null,jt=null,So=!1,Ot=null,ti=0,Cr=0,Jl=null,To=-1,Lo=0;function Se(){return(U&6)!==0?te():To!==-1?To:To=te()}function Bt(e){return(e.mode&1)===0?1:(U&2)!==0&&ce!==0?ce&-ce:Em.transition!==null?(Lo===0&&(Lo=hc()),Lo):(e=V,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e)}function nt(e,t,n,r){if(50<Cr)throw Cr=0,Jl=null,Error(w(185));Vr(e,n,r),((U&2)===0||e!==ue)&&(e===ue&&((U&2)===0&&(fi|=n),le===4&&Mt(e,ce)),Pe(e,r),n===1&&U===0&&(t.mode&1)===0&&(Gn=te()+500,si&&Yt()))}function Pe(e,t){var n=e.callbackNode;zf(e,t);var r=Do(e,e===ue?ce:0);if(r===0)n!==null&&Gu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gu(n),t===1)e.tag===0?Cm(Bs.bind(null,e)):jc(Bs.bind(null,e)),wm(function(){(U&6)===0&&Yt()}),n=null;else{switch(vc(r)){case 1:n=sa;break;case 4:n=fc;break;case 16:n=Fo;break;case 536870912:n=mc;break;default:n=Fo}n=$d(n,Ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ld(e,t){if(To=-1,Lo=0,(U&6)!==0)throw Error(w(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Do(e,e===ue?ce:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ni(e,r);else{t=r;var o=U;U|=2;var i=Ad();(ue!==e||ce!==t)&&(ht=null,Gn=te()+500,un(e,t));do try{Qm();break}catch(a){Md(e,a)}while(!0);ka(),Jo.current=i,U=o,ne!==null?t=0:(ue=null,ce=0,t=le)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=ea(e,o))),t===1)throw n=Br,un(e,0),Mt(e,r),Pe(e,te()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Hm(o)&&(t=ni(e,r),t===2&&(i=El(e),i!==0&&(r=i,t=ea(e,i))),t===1))throw n=Br,un(e,0),Mt(e,r),Pe(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:rn(e,Ee,ht);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Fa+500-te(),10<t)){if(Do(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Al(rn.bind(null,e,Ee,ht),t);break}rn(e,Ee,ht);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vm(r/1960))-r,10<r){e.timeoutHandle=Al(rn.bind(null,e,Ee,ht),r);break}rn(e,Ee,ht);break;case 5:rn(e,Ee,ht);break;default:throw Error(w(329))}}}return Pe(e,te()),e.callbackNode===n?Ld.bind(null,e):null}function ea(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=ni(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ta(t)),e}function ta(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Hm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Ia,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Bs(e){if((U&6)!==0)throw Error(w(327));Bn();var t=Do(e,0);if((t&1)===0)return Pe(e,te()),null;var n=ni(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=Br,un(e,0),Mt(e,t),Pe(e,te()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ee,ht),Pe(e,te()),null}function Da(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Gn=te()+500,si&&Yt())}}function mn(e){Ot!==null&&Ot.tag===0&&(U&6)===0&&Bn();var t=U;U|=1;var n=Ke.transition,r=V;try{if(Ke.transition=null,V=1,e)return e()}finally{V=r,Ke.transition=n,U=t,(U&6)===0&&Yt()}}function $a(){Oe=In.current,Y(In)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xm(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:Kn(),Y(ze),Y(ye),za();break;case 5:_a(r);break;case 4:Kn();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:Sa(r.type._context);break;case 22:case 23:$a()}n=n.return}if(ue=e,ne=e=Vt(e.current,null),ce=Oe=t,le=0,Br=null,Ia=fi=fn=0,Ee=Nr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}ln=null}return e}function Md(e,t){do{var n=ne;try{if(ka(),zo.current=qo,Zo){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Zo=!1}if(pn=0,ae=ie=q=null,kr=!1,$r=0,Oa.current=null,n===null||n.return===null){le=1,Br=t,ne=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ce,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Rs(l);if(g!==null){g.flags&=-257,Ps(g,l,a,i,t),g.mode&1&&zs(i,c,t),t=g,u=c;var v=t.updateQueue;if(v===null){var b=new Set;b.add(u),t.updateQueue=b}else v.add(u);break e}else{if((t&1)===0){zs(i,c,t),Ua();break e}u=Error(w(426))}}else if(X&&a.mode&1){var E=Rs(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Ps(E,l,a,i,t),xa(Yn(u,a));break e}}i=u=Yn(u,a),le!==4&&(le=2),Nr===null?Nr=[i]:Nr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=vd(i,u,t);ks(i,d);break e;case 1:a=u;var s=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jt===null||!jt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=gd(i,a,t);ks(i,y);break e}}i=i.return}while(i!==null)}Id(n)}catch(N){t=N,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Ad(){var e=Jo.current;return Jo.current=qo,e===null?qo:e}function Ua(){(le===0||le===3||le===2)&&(le=4),ue===null||(fn&268435455)===0&&(fi&268435455)===0||Mt(ue,ce)}function ni(e,t){var n=U;U|=2;var r=Ad();(ue!==e||ce!==t)&&(ht=null,un(e,t));do try{Wm();break}catch(o){Md(e,o)}while(!0);if(ka(),U=n,Jo.current=r,ne!==null)throw Error(w(261));return ue=null,ce=0,le}function Wm(){for(;ne!==null;)Od(ne)}function Qm(){for(;ne!==null&&!bf();)Od(ne)}function Od(e){var t=Dd(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Id(e):ne=t,Oa.current=null}function Id(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Dm(n,t,Oe),n!==null){ne=n;return}}else{if(n=$m(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ne=null;return}}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);le===0&&(le=5)}function rn(e,t,n){var r=V,o=Ke.transition;try{Ke.transition=null,V=1,Km(e,t,n,r)}finally{Ke.transition=o,V=r}return null}function Km(e,t,n,r){do Bn();while(Ot!==null);if((U&6)!==0)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Rf(e,i),e===ue&&(ne=ue=null,ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||So||(So=!0,$d(Fo,function(){return Bn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ke.transition,Ke.transition=null;var l=V;V=1;var a=U;U|=4,Oa.current=null,jm(e,n),Pd(n,e),hm(Ll),$o=!!Tl,Ll=Tl=null,e.current=n,Bm(n,e,o),xf(),U=a,V=l,Ke.transition=i}else e.current=n;if(So&&(So=!1,Ot=e,ti=o),i=e.pendingLanes,i===0&&(jt=null),Sf(n.stateNode,r),Pe(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ei)throw ei=!1,e=ql,ql=null,e;return(ti&1)!==0&&e.tag!==0&&Bn(),i=e.pendingLanes,(i&1)!==0?e===Jl?Cr++:(Cr=0,Jl=e):Cr=0,Yt(),null}function Bn(){if(Ot!==null){var e=vc(ti),t=Ke.transition,n=V;try{if(Ke.transition=null,V=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,ti=0,(U&6)!==0)throw Error(w(331));var o=U;for(U|=4,C=e.current;C!==null;){var i=C,l=i.child;if((C.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:Sr(8,f,i)}var h=f.child;if(h!==null)h.return=f,C=h;else for(;C!==null;){f=C;var m=f.sibling,g=f.return;if(_d(f),f===c){C=null;break}if(m!==null){m.return=g,C=m;break}C=g}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}C=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var s=e.current;for(C=s;C!==null;){l=C;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,C=p;else e:for(l=s;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(N){ee(a,a.return,N)}if(a===l){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(U=o,Yt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{V=n,Ke.transition=t}}return!1}function Vs(e,t,n){t=Yn(n,t),t=vd(e,t,1),e=Ut(e,t,1),t=Se(),e!==null&&(Vr(e,1,t),Pe(e,t))}function ee(e,t,n){if(e.tag===3)Vs(e,e,n);else for(;t!==null;){if(t.tag===3){Vs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=Yn(n,e),e=gd(t,e,1),t=Ut(t,e,1),e=Se(),t!==null&&(Vr(t,1,e),Pe(t,e));break}}t=t.return}}function Ym(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(ce&n)===n&&(le===4||le===3&&(ce&130023424)===ce&&500>te()-Fa?un(e,0):Ia|=n),Pe(e,t)}function Fd(e,t){t===0&&((e.mode&1)===0?t=1:(t=uo,uo<<=1,(uo&130023424)===0&&(uo=4194304)));var n=Se();e=kt(e,t),e!==null&&(Vr(e,t,n),Pe(e,n))}function Gm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fd(e,n)}function Xm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Fd(e,n)}var Dd;Dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)_e=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return _e=!1,Fm(e,t,n);_e=(e.flags&131072)!==0}else _e=!1,X&&(t.flags&1048576)!==0&&Bc(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var o=Hn(t,ye.current);jn(t,n),o=Pa(null,t,r,e,o,n);var i=Ta();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,Ho(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ca(t),o.updater=di,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=Hl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&ya(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qm(r),e=qe(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=Ms(null,t,r,e,n);break e;case 11:t=Ts(null,t,r,e,n);break e;case 14:t=Ls(null,t,r,qe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ms(e,t,r,o,n);case 3:e:{if(wd(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Yc(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yn(Error(w(423)),t),t=As(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(w(424)),t),t=As(e,t,r,n,o);break e}else for(Ie=$t(t.stateNode.containerInfo.firstChild),Fe=t,X=!0,et=null,n=Qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=St(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Gc(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ml(r,o)?l=null:i!==null&&Ml(r,i)&&(t.flags|=32),xd(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return kd(e,t,n);case 4:return Ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ts(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Ko,r._currentValue),r._currentValue=l,i!==null)if(rt(i.value,l)){if(i.children===o.children&&!ze.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=bt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),$l(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),$l(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Ye(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),Ls(e,t,r,o,n);case 15:return yd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Po(e,t),t.tag=1,Re(r)?(e=!0,Ho(t)):e=!1,jn(t,n),hd(t,r,o),jl(t,r,o,n),Hl(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return bd(e,t,n)}throw Error(w(156,t.tag))};function $d(e,t){return pc(e,t)}function Zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Zm(e,t,n,r)}function ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===la)return 11;if(e===aa)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ja(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return sn(n.children,o,i,t);case ia:l=8,o|=8;break;case dl:return e=Qe(12,n,t,o|2),e.elementType=dl,e.lanes=i,e;case pl:return e=Qe(13,n,t,o),e.elementType=pl,e.lanes=i,e;case fl:return e=Qe(19,n,t,o),e.elementType=fl,e.lanes=i,e;case Gs:return mi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:l=10;break e;case Ys:l=9;break e;case la:l=11;break e;case aa:l=14;break e;case Pt:l=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Gs,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ba(e,t,n,r,o,i,l,a,u){return e=new Jm(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(i),e}function eh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ud(e){if(!e)return Wt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Re(n))return Uc(e,n,t)}return t}function jd(e,t,n,r,o,i,l,a,u){return e=Ba(n,r,!0,e,o,i,l,a,u),e.context=Ud(null),n=e.current,r=Se(),o=Bt(n),i=bt(r,o),i.callback=t??null,Ut(n,i,o),e.current.lanes=o,Vr(e,o,r),Pe(e,r),e}function hi(e,t,n,r){var o=t.current,i=Se(),l=Bt(o);return n=Ud(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,l),e!==null&&(nt(e,o,l,i),_o(e,o,l)),l}function ri(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Hs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Va(e,t){Hs(e,t),(e=e.alternate)&&Hs(e,t)}function th(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ha(e){this._internalRoot=e}vi.prototype.render=Ha.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));hi(e,t,null,null)};vi.prototype.unmount=Ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){hi(null,e,null,null)}),t[wt]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&wc(e)}};function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function nh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ri(l);i.call(c)}}var l=jd(t,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=l,e[wt]=l.current,Ar(e.nodeType===8?e.parentNode:e),mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ri(u);a.call(c)}}var u=Ba(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=u,e[wt]=u.current,Ar(e.nodeType===8?e.parentNode:e),mn(function(){hi(t,u,n,r)}),u}function yi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=ri(l);a.call(u)}}hi(t,l,e,o)}else l=nh(n,t,e,o,r);return ri(l)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(ca(t,n|1),Pe(t,te()),(U&6)===0&&(Gn=te()+500,Yt()))}break;case 13:mn(function(){var r=kt(e,1);if(r!==null){var o=Se();nt(r,e,1,o)}}),Va(e,1)}};da=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Se();nt(t,e,134217728,n)}Va(e,134217728)}};yc=function(e){if(e.tag===13){var t=Bt(e),n=kt(e,t);if(n!==null){var r=Se();nt(n,e,t,r)}Va(e,t)}};bc=function(){return V};xc=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Sl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ui(r);if(!o)throw Error(w(90));Zs(r),vl(r,o)}}}break;case"textarea":Js(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};lc=Da;ac=mn;var rh={usingClientEntryPoint:!1,Events:[Wr,Pn,ui,oc,ic,Da]},dr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oh={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cc(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||th,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(pr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!pr.isDisabled&&pr.supportsFiber))try{oi=pr.inject(oh),dt=pr}catch{}var pr;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wa(t))throw Error(w(200));return eh(e,t,null,n)};Ue.createRoot=function(e,t){if(!Wa(e))throw Error(w(299));var n=!1,r="",o=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ba(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Ha(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=cc(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return mn(e)};Ue.hydrate=function(e,t,n){if(!gi(t))throw Error(w(200));return yi(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!Wa(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Bd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jd(t,null,e,1,n??null,o,!1,i,l),e[wt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vi(t)};Ue.render=function(e,t,n){if(!gi(t))throw Error(w(200));return yi(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!gi(e))throw Error(w(40));return e._reactRootContainer?(mn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ue.unstable_batchedUpdates=Da;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return yi(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426"});var Qd=mt((Th,Wd)=>{"use strict";function Hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd)}catch(e){console.error(e)}}Hd(),Wd.exports=Vd()});var Yd=mt(Qa=>{"use strict";var Kd=Qd();Qa.createRoot=Kd.createRoot,Qa.hydrateRoot=Kd.hydrateRoot;var Lh});var ep=mt(bi=>{"use strict";var uh=Be(),sh=Symbol.for("react.element"),ch=Symbol.for("react.fragment"),dh=Object.prototype.hasOwnProperty,ph=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fh={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dh.call(t,r)&&!fh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sh,type:e,key:i,ref:l,props:o,_owner:ph.current}}bi.Fragment=ch;bi.jsx=Jd;bi.jsxs=Jd});var G=mt((Fh,tp)=>{"use strict";tp.exports=ep()});var T=$(Be());var Te=$(Be(),1),Gd=$(Yd(),1),Xd=Te.createContext(null);function ih(){let e=Te.useContext(Xd);if(!e)throw new Error("RenderContext not found");return e}function lh(){return ih().model}function Le(e){let t=lh(),n=Te.useSyncExternalStore(o=>(t.on(`change:${e}`,o),()=>t.off(`change:${e}`,o)),()=>t.get(e)),r=Te.useCallback(o=>{t.set(e,typeof o=="function"?o(t.get(e)):o),t.save_changes()},[t,e]);return[n,r]}function Zd(e){return({el:t,model:n,experimental:r})=>{let o=Gd.createRoot(t);return o.render(Te.createElement(Te.StrictMode,null,Te.createElement(Xd.Provider,{value:{model:n,experimental:r}},Te.createElement(e)))),()=>o.unmount()}}var ft=$(Be());var qd=`/* Rule builder widget \u2014 histogram-first (Variation B), evolved from rs-/rd- DNA */

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
`;var ot=$(Be());var je=$(G()),np="Importance estimates how useful each attribute is for predicting the outcome, derived from a tree-based model trained on the data. Higher = more predictive potential. It is a ranking aid, not a guarantee \u2014 the exact method is still being finalized.";function xi({kind:e}){return(0,je.jsx)("span",{className:`rb-typebadge ${e}`,title:e==="num"?"Numerical":"Categorical",children:e==="num"?"123":"abc"})}function rp({value:e}){return(0,je.jsx)("span",{className:"rb-imp",title:`Importance ${e.toFixed(2)}`,children:(0,je.jsx)("span",{className:"rb-imp-fill",style:{width:`${e*100}%`,display:"block"}})})}function wi({children:e,align:t}){return(0,je.jsxs)("span",{className:`rb-info${t==="right"?" rb-info-right":""}`,children:[(0,je.jsx)("button",{type:"button",className:"rb-info-btn","aria-label":"What does importance mean?",children:"i"}),(0,je.jsx)("span",{className:"rb-info-pop",role:"tooltip",children:e})]})}function op(){return(0,je.jsxs)("span",{className:"rb-legend",title:"Histogram colors: green = cases where the outcome is positive (rule should catch these), blue = all other cases",children:[(0,je.jsx)("i",{className:"rb-legend-pos"}),"outcome\xA0\u2295",(0,je.jsx)("i",{className:"rb-legend-all"}),"other"]})}function Ka({options:e,value:t,onChange:n}){return(0,je.jsx)("div",{className:"rb-seg",children:e.map(r=>(0,je.jsx)("button",{type:"button",className:t===r.v?"rb-on":"",onClick:()=>n(r.v),children:r.label},r.v))})}var Gt=$(G());function mh(e,t,n){let r=[e.label];if(e.family!=="other"){let o=e.sources.length?` \xB7 ${e.sources.join(", ")}`:"";r.push(`${e.familyLabel}${o}`)}return n?(r.push("Forbidden \u2014 the optimizer will not use it, and it cannot be added by hand"),r.push("\u20E0 to allow it again")):r.push(t?"Already in the rule":"Click or drag to add to the rule"),r.join(`
`)}function ki({attr:e,used:t,forbidden:n,onAdd:r,onUnforbid:o}){let i=t||n;return(0,Gt.jsxs)("div",{className:`rb-attr${t?" rb-used":""}${n?" rb-forbidden":""}`,draggable:!i,onDragStart:i?void 0:l=>{l.dataTransfer.setData("text/plain",e.id),l.dataTransfer.effectAllowed="copy"},onClick:i?void 0:()=>r(e.id),title:mh(e,t,n),children:[(0,Gt.jsx)(xi,{kind:e.kind}),(0,Gt.jsx)("span",{className:"rb-attr-name",children:e.label}),n?(0,Gt.jsx)("button",{type:"button",className:"rb-attr-unforbid",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${e.label}`,onClick:l=>{l.stopPropagation(),o(e.id)},children:"\u20E0"}):t?(0,Gt.jsx)("span",{className:"rb-attr-check",children:"\u2713"}):(0,Gt.jsx)(rp,{value:e.importance})]})}var hh="No source",Ya={query:"",kind:"all",minImportance:0,hideUsed:!1,families:new Set,sources:new Set};function lp(e){return(e.kind!=="all"?1:0)+(e.minImportance>0?1:0)+(e.hideUsed?1:0)+(e.families.size>0?1:0)+(e.sources.size>0?1:0)}function ap(e,t,n){let r=t.query.trim().toLowerCase(),o=new Set(n);return e.filter(i=>!(r&&!i.label.toLowerCase().includes(r)||t.kind!=="all"&&i.kind!==t.kind||i.importance<t.minImportance||t.hideUsed&&o.has(i.id)||t.families.size>0&&!t.families.has(i.family)||t.sources.size>0&&!i.sources.some(l=>t.sources.has(l))))}function up(e,t){if(t==="none")return e.length?[{key:"",label:"",attrs:e}]:[];let n=new Map,r=(o,i,l)=>{let a=n.get(o);a?a.attrs.push(l):n.set(o,{key:o,label:i,attrs:[l]})};for(let o of e)if(t==="family")r(o.family,o.familyLabel,o);else if(o.sources.length===0)r("",hh,o);else for(let i of o.sources)r(i,i,o);return[...n.values()].sort((o,i)=>{if(o.key==="")return 1;if(i.key==="")return-1;let l=ip(i.attrs)-ip(o.attrs);return l!==0?l:o.label.localeCompare(i.label)})}function ip(e){return e.reduce((t,n)=>Math.max(t,n.importance),0)}function Ga(e,t){let n=new Map,r=(o,i)=>{let l=n.get(o);l?l.count+=1:n.set(o,{key:o,label:i,count:1})};for(let o of e)if(t==="family")r(o.family,o.familyLabel);else for(let i of o.sources)r(i,i);return[...n.values()].sort((o,i)=>i.count-o.count||o.label.localeCompare(i.label))}var z=$(G()),vh=[{v:"none",label:"none"},{v:"family",label:"family"},{v:"source",label:"source"}],gh=[{v:"all",label:"all"},{v:"num",label:"123"},{v:"cat",label:"abc"}];function Xa(e,t){let n=new Set(e);return n.delete(t)||n.add(t),n}function sp({label:e,options:t,selected:n,onToggle:r}){return(0,z.jsxs)("div",{className:"rb-rail-facet",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:e}),(0,z.jsx)("div",{className:"rb-chip-list",children:t.map(o=>(0,z.jsxs)("button",{type:"button",className:`rb-chip${n.has(o.key)?" rb-on":""}`,"aria-pressed":n.has(o.key),title:`${o.label} \u2014 ${o.count} attribute${o.count===1?"":"s"}`,onClick:()=>r(o.key),children:[(0,z.jsx)("span",{className:"rb-chip-label",children:o.label}),(0,z.jsx)("span",{className:"rb-chip-n",children:o.count})]},o.key))})]})}function Za({attributes:e,usedIds:t,forbidden:n,onAdd:r,onUnforbid:o,width:i}){let[l,a]=(0,ot.useState)(Ya),[u,c]=(0,ot.useState)("none"),[f,h]=(0,ot.useState)(new Set),[m,g]=(0,ot.useState)(!1),v=x=>a(I=>({...I,...x})),b=(0,ot.useMemo)(()=>[...e].sort((x,I)=>I.importance-x.importance),[e]),E=(0,ot.useMemo)(()=>ap(b,l,t),[b,l,t]),d=(0,ot.useMemo)(()=>up(E,u),[E,u]),s=(0,ot.useMemo)(()=>Ga(b,"family"),[b]),p=(0,ot.useMemo)(()=>Ga(b,"source"),[b]),y=p.length>0||s.length>1,N=lp(l),k=l.query.trim()!=="",S=()=>a(Ya);return(0,z.jsxs)("div",{className:"rb-rail",style:{width:i},children:[(0,z.jsxs)("div",{className:"rb-rail-head",children:[(0,z.jsx)("span",{children:"Attributes"}),(0,z.jsxs)("small",{children:["by importance ",(0,z.jsx)(wi,{align:"right",children:np})]})]}),(0,z.jsxs)("div",{className:"rb-rail-toolbar",children:[(0,z.jsxs)("div",{className:"rb-rail-search-wrap",children:[(0,z.jsx)("input",{type:"search",className:"rb-rail-search",placeholder:"Search attributes\u2026","aria-label":"Search attributes",value:l.query,onChange:x=>v({query:x.target.value})}),k?(0,z.jsx)("button",{type:"button",className:"rb-rail-search-clear",title:"Clear search","aria-label":"Clear search",onClick:()=>v({query:""}),children:"\xD7"}):null]}),y?(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Group"}),(0,z.jsx)(Ka,{options:vh,value:u,onChange:c})]}):null,(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsxs)("button",{type:"button",className:`rb-rail-filter-btn${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>g(x=>!x),children:[(0,z.jsx)("span",{className:"rb-group-caret",children:m?"\u25BE":"\u25B8"}),"Filters",N>0?(0,z.jsx)("span",{className:"rb-rail-filter-badge",children:N}):null]}),(0,z.jsxs)("span",{className:"rb-rail-count",children:[E.length," of ",e.length]})]}),m?(0,z.jsxs)("div",{className:"rb-rail-panel",children:[(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Type"}),(0,z.jsx)(Ka,{options:gh,value:l.kind,onChange:x=>v({kind:x})})]}),(0,z.jsxs)("div",{className:"rb-rail-row",children:[(0,z.jsx)("span",{className:"rb-rail-label",children:"Min. imp."}),(0,z.jsx)("input",{type:"range",className:"rb-rail-slider",min:0,max:1,step:.05,value:l.minImportance,"aria-label":"Minimum importance",onChange:x=>v({minImportance:Number(x.target.value)})}),(0,z.jsx)("span",{className:"rb-rail-value",children:l.minImportance.toFixed(2)})]}),(0,z.jsxs)("label",{className:"rb-rail-check",children:[(0,z.jsx)("input",{type:"checkbox",checked:l.hideUsed,onChange:x=>v({hideUsed:x.target.checked})}),"Hide attributes already in the rule"]}),s.length>1?(0,z.jsx)(sp,{label:"Family",options:s,selected:l.families,onToggle:x=>v({families:Xa(l.families,x)})}):null,p.length>0?(0,z.jsx)(sp,{label:"Source",options:p,selected:l.sources,onToggle:x=>v({sources:Xa(l.sources,x)})}):null,N>0||k?(0,z.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:S,children:"Reset filters"}):null]}):null]}),(0,z.jsx)("div",{className:"rb-rail-list",children:E.length===0?(0,z.jsx)("div",{className:"rb-rail-empty",children:e.length===0?"No attributes available.":(0,z.jsxs)(z.Fragment,{children:["No attribute matches these filters.",(0,z.jsx)("button",{type:"button",className:"rb-rail-reset",onClick:S,children:"Reset filters"})]})}):u==="none"?E.map(x=>(0,z.jsx)(ki,{attr:x,used:t.includes(x.id),forbidden:n.has(x.id),onAdd:r,onUnforbid:o},x.id)):d.map(x=>{let I=`${u}|${x.key}`,R=!k&&f.has(I);return(0,z.jsxs)("div",{className:"rb-group",children:[(0,z.jsxs)("button",{type:"button",className:"rb-group-head","aria-expanded":!R,onClick:()=>h(j=>Xa(j,I)),children:[(0,z.jsx)("span",{className:"rb-group-caret",children:R?"\u25B8":"\u25BE"}),(0,z.jsx)("span",{className:"rb-group-label",title:x.label,children:x.label}),(0,z.jsx)("span",{className:"rb-group-count",children:x.attrs.length})]}),R?null:x.attrs.map(j=>(0,z.jsx)(ki,{attr:j,used:t.includes(j.id),forbidden:n.has(j.id),onAdd:r,onUnforbid:o},`${x.key}|${j.id}`))]},I)})})]})}var Ci=$(Be());function gn(e,t,n){return Math.max(t,Math.min(n,e))}function cp(e,t){if(e.isInt)return Math.round(t);let n=e.max-e.min,o=10**(n>=20?0:n>=2?1:2);return Math.round(t*o)/o}function dp(e){if(e.kind==="num")return{attr:e.id,op:"range",lo:e.min,hi:e.max};let t=e.categories[0];return{attr:e.id,op:"==",value:t?t.value:""}}function pp(e,t){return e.filter(n=>t[n.attr]!=null).map(n=>{let r=t[n.attr];if(r.kind!=="num")return n;let o=r;return n.op===">="?{attr:n.attr,op:"range",lo:n.value,hi:o.max}:n.op==="<="?{attr:n.attr,op:"range",lo:o.min,hi:n.value}:n})}function qa(e,t,n){let r=t<=e.min,o=n>=e.max;return r&&o?{text:`${e.id}: any value`,any:!0}:!r&&!o?{text:`${t} \u2264 ${e.id} \u2264 ${n}`,any:!1}:r?{text:`${e.id} \u2264 ${n}`,any:!1}:{text:`${e.id} \u2265 ${t}`,any:!1}}function fp(e,t){if(e.kind==="num"){let{lo:n,hi:r}=qn(e,t),o=e;return qa(o,n??o.min,r??o.max).text}return t.op==="range"?`${e.id}: any value`:`${e.id} ${t.op} ${t.value}`}function Me(e,t){return`${e}\0${t}`}function qn(e,t){let n,r;if(t.op==="range")n=t.lo,r=t.hi;else if(t.op===">=")n=t.value,r=e.max;else if(t.op==="<=")n=e.min,r=t.value;else return{lo:null,hi:null};return{lo:n>e.min?n:null,hi:r<e.max?r:null}}function Si(e,t,n,r){let o=[],i=[];for(let l of e){let a=t[l.attr];if(!a)continue;n.has(l.attr)&&o.push(a.label);let u=[];if(a.kind==="num"){let{lo:c,hi:f}=qn(a,l);c!==null&&r.has(Me(l.attr,"lo"))&&u.push(`\u2265 ${c}`),f!==null&&r.has(Me(l.attr,"hi"))&&u.push(`\u2264 ${f}`)}else l.op==="=="&&r.has(Me(l.attr,"val"))&&u.push(`== ${l.value}`);u.length&&i.push(`${a.label} ${u.join(", ")}`)}return{kept:o,held:i}}function Ja(e,t,n){let r=t<=e.min,o=n>=e.max;return!r&&!o?{attr:e.id,op:"range",lo:t,hi:n}:r?o?{attr:e.id,op:"range",lo:t,hi:n}:{attr:e.id,op:"<=",value:n}:{attr:e.id,op:">=",value:t}}var hp=$(G()),tu=232,Ni=160,eu=520,yh=300,mp=16;function nu({width:e,onResize:t,onDraggingChange:n}){let r=(0,Ci.useRef)(null),[o,i]=(0,Ci.useState)(!1),l=()=>{let c=r.current?.parentElement,f=c?c.getBoundingClientRect().width-yh:eu;return Math.max(Ni,Math.min(eu,f))},a=c=>{c.preventDefault();let f=c.clientX,h=e,m=l();i(!0),n(!0);let g=b=>{t(gn(h+b.clientX-f,Ni,m))},v=()=>{i(!1),n(!1),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",v)};window.addEventListener("pointermove",g),window.addEventListener("pointerup",v)},u=c=>{let f=c.key==="ArrowLeft"?-mp:c.key==="ArrowRight"?mp:0;f!==0&&(c.preventDefault(),t(gn(e+f,Ni,l())))};return(0,hp.jsx)("div",{ref:r,className:`rb-splitter${o?" rb-dragging":""}`,role:"separator","aria-orientation":"vertical","aria-label":"Resize the attribute list","aria-valuenow":Math.round(e),"aria-valuemin":Ni,"aria-valuemax":eu,tabIndex:0,title:"Drag to resize \xB7 double-click to reset",onPointerDown:a,onDoubleClick:()=>t(tu),onKeyDown:u})}var yn=$(Be());function vp(e){let t=Number(e);return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}function it(e){let t=Number(e);return Number.isFinite(t)?t:0}function Jn(e){let t=Number(e);return Number.isFinite(t)?Math.abs(t)>=1e3?t.toFixed(0):Math.abs(t)>=100?t.toFixed(1):t.toFixed(2):"-"}var re=$(G());function gp({value:e,min:t,max:n,isInt:r,label:o,title:i,onCommit:l}){let[a,u]=(0,yn.useState)(String(e));(0,yn.useEffect)(()=>{u(String(e))},[e]);let c=f=>{let h=Number.parseFloat(f);if(!Number.isFinite(h)){u(String(e));return}l(h)};return(0,re.jsxs)("label",{className:"rb-bound-field",title:i,children:[(0,re.jsx)("span",{className:"rb-bound-op",children:o}),(0,re.jsx)("input",{className:"rb-bound-input",type:"number",inputMode:r?"numeric":"decimal",value:a,min:t,max:n,step:r?1:"any",onChange:f=>u(f.target.value),onBlur:f=>c(f.target.value),onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}})]})}function ru({attr:e,lo:t,hi:n,onChange:r}){let o=(0,yn.useRef)(null),[i,l]=(0,yn.useState)(null),a=e.max-e.min||1,u=g=>(g-e.min)/a*100,c=e.bins.length-1,f=g=>{let v=o.current;if(!v)return e.min;let b=v.getBoundingClientRect(),E=gn((g-b.left)/b.width,0,1);return cp(e,e.min+E*a)},h=g=>v=>{v.preventDefault(),l(g);let b=d=>{let s=f(d.clientX);r(g==="lo"?{lo:Math.min(s,n)}:{hi:Math.max(s,t)})},E=()=>{l(null),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",E)};window.addEventListener("pointermove",b),window.addEventListener("pointerup",E)},m=g=>{let v=e.bins[g];if(e.isDiscrete)return`Value ${Jn(v.lo)}: Count ${v.n} (exact-value frequency), Positives: ${v.pos}`;let b=g===c?"]":")";return`Bin ${g+1}: [${Jn(v.lo)}, ${Jn(v.hi)}${b}, Count: ${v.n}, Positives: ${v.pos}`};return(0,re.jsxs)("div",{className:"rb-rhist-wrap",children:[(0,re.jsxs)("div",{className:"rb-rhist",ref:o,children:[(0,re.jsx)("div",{className:"rb-hist",children:e.bins.map((g,v)=>{let b=g.hi<t||g.lo>n,E=e.maxN>0?g.n/e.maxN*100:0,d=e.maxN>0?g.pos/e.maxN*100:0;return(0,re.jsxs)("div",{className:`rb-bin${b?" rb-out":""}`,title:m(v),children:[(0,re.jsx)("div",{className:"rb-bin-fill",style:{height:`${E}%`}}),(0,re.jsx)("div",{className:"rb-bin-pos",style:{height:`${d}%`}})]},v)})}),(0,re.jsx)("div",{className:"rb-rhist-sel",style:{left:`${u(t)}%`,width:`${u(n)-u(t)}%`}}),(0,re.jsx)("div",{className:`rb-handle${i==="lo"?" rb-dragging":""}`,style:{left:`${u(t)}%`},onPointerDown:h("lo"),title:"Drag lower boundary"}),(0,re.jsx)("div",{className:`rb-handle${i==="hi"?" rb-dragging":""}`,style:{left:`${u(n)}%`},onPointerDown:h("hi"),title:"Drag upper boundary"})]}),(0,re.jsxs)("div",{className:"rb-hist-axis",children:[(0,re.jsx)("span",{children:Jn(e.min)}),(0,re.jsx)("span",{children:Jn(e.max)})]}),(0,re.jsxs)("div",{className:"rb-bound-inputs",children:[(0,re.jsx)(gp,{value:t,min:e.min,max:n,isInt:e.isInt,label:"\u2265",title:"Lower boundary \u2014 type an exact value",onCommit:g=>r({lo:gn(g,e.min,n)})}),(0,re.jsx)(gp,{value:n,min:t,max:e.max,isInt:e.isInt,label:"\u2264",title:"Upper boundary \u2014 type an exact value",onCommit:g=>r({hi:gn(g,t,e.max)})})]})]})}var Ct=$(G());function ou({attr:e,value:t,onChange:n}){return(0,Ct.jsx)("div",{className:"rb-cats",children:e.categories.map(r=>{let o=t===r.value,i=e.maxN>0?r.pos/e.maxN*100:0,l=e.maxN>0?(r.n-r.pos)/e.maxN*100:0;return(0,Ct.jsxs)("button",{type:"button",className:`rb-cat-row${o?" rb-sel":""}`,onClick:()=>n(r.value),title:`${r.value}: ${r.n} cases, ${r.pos} outcome-positive`,children:[(0,Ct.jsx)("span",{className:"rb-cat-label",children:r.value}),(0,Ct.jsxs)("span",{className:"rb-cat-bar",children:[(0,Ct.jsx)("span",{className:"rb-cat-pos",style:{width:`${i}%`}}),(0,Ct.jsx)("span",{className:"rb-cat-rest",style:{width:`${l}%`}})]}),(0,Ct.jsx)("span",{className:"rb-cat-n",children:r.n})]},r.value)})})}var bn=$(Be());var Xt=$(Be());var O=$(G());function iu({attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,onClose:u,onRun:c,canRun:f,isOptimizing:h}){let[m,g]=(0,Xt.useState)(!1),[v,b]=(0,Xt.useState)(""),{kept:E,held:d}=(0,Xt.useMemo)(()=>Si(n,t,r,o),[n,t,r,o]),s=(0,Xt.useMemo)(()=>new Set(n.map(k=>k.attr)),[n]),p=(0,Xt.useMemo)(()=>{let k=v.trim().toLowerCase();return e.filter(S=>!i.has(S.id)&&(!k||S.label.toLowerCase().includes(k)))},[e,i,v]),y=(0,Xt.useMemo)(()=>e.filter(k=>i.has(k.id)),[e,i]),N=k=>{l(k),b(""),g(!1)};return(0,O.jsxs)("div",{className:"rb-popover rb-popover-left",role:"dialog","aria-label":"Optimizer constraints",children:[(0,O.jsxs)("div",{className:"rb-popover-head",children:[(0,O.jsx)("span",{className:"rb-popover-title",children:"Optimize under these constraints"}),(0,O.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:u,children:"\xD7"})]}),(0,O.jsxs)("div",{className:"rb-popover-section",children:[(0,O.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F4CC}"}),(0,O.jsxs)("div",{className:"rb-constraint-body",children:[(0,O.jsx)("div",{className:"rb-constraint-name",children:"Keep in the rule"}),(0,O.jsx)("div",{className:`rb-constraint-value${E.length?"":" rb-empty"}`,children:E.length?E.join(", "):"nothing pinned \u2014 the optimizer may drop any condition"})]}),(0,O.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,O.jsxs)("div",{className:"rb-popover-section",children:[(0,O.jsx)("span",{className:"rb-constraint-glyph",children:"\u{1F512}"}),(0,O.jsxs)("div",{className:"rb-constraint-body",children:[(0,O.jsx)("div",{className:"rb-constraint-name",children:"Hold these boundaries"}),(0,O.jsx)("div",{className:`rb-constraint-value${d.length?"":" rb-empty"}`,children:d.length?d.join(" \xB7 "):"no boundary held \u2014 all ranges may move"})]}),(0,O.jsx)("span",{className:"rb-constraint-where",children:"on card"})]}),(0,O.jsxs)("div",{className:"rb-popover-section rb-forbid-section",children:[(0,O.jsxs)("div",{className:"rb-forbid-head",children:[(0,O.jsx)("span",{className:"rb-constraint-glyph rb-forbid-glyph",children:"\u20E0"}),(0,O.jsx)("span",{className:"rb-constraint-name",children:"Never use"}),(0,O.jsxs)("span",{className:"rb-constraint-where",children:[y.length," ",y.length===1?"attribute":"attributes"]})]}),(0,O.jsxs)("div",{className:"rb-forbid-chips",children:[y.map(k=>(0,O.jsxs)("span",{className:"rb-forbid-chip",title:k.label,children:[(0,O.jsx)("span",{className:"rb-forbid-chip-name",children:k.label}),(0,O.jsx)("button",{type:"button",className:"rb-forbid-chip-x",title:"Allow the optimizer to use this attribute again","aria-label":`Stop forbidding ${k.label}`,onClick:()=>a(k.id),children:"\xD7"})]},k.id)),(0,O.jsx)("button",{type:"button",className:`rb-forbid-add${m?" rb-on":""}`,"aria-expanded":m,onClick:()=>g(k=>!k),children:"\uFF0B add attribute"})]}),m?(0,O.jsxs)("div",{className:"rb-forbid-search",children:[(0,O.jsx)("input",{type:"search",className:"rb-forbid-search-input",placeholder:"Search attributes to forbid\u2026","aria-label":"Search attributes to forbid",autoFocus:!0,value:v,onChange:k=>b(k.target.value)}),(0,O.jsx)("div",{className:"rb-forbid-options",children:p.length===0?(0,O.jsx)("div",{className:"rb-forbid-none",children:"No matches."}):p.map(k=>(0,O.jsxs)("button",{type:"button",className:"rb-forbid-option",onClick:()=>N(k.id),children:[(0,O.jsx)("span",{className:"rb-forbid-option-name",children:k.label}),(0,O.jsx)("span",{className:"rb-forbid-option-hint",children:s.has(k.id)?"in rule \u2014 will be removed":`importance ${k.importance.toFixed(2)}`})]},k.id))})]}):null]}),(0,O.jsxs)("div",{className:"rb-popover-foot",children:[(0,O.jsx)("span",{className:"rb-popover-scope",children:"Applies to this rule only"}),(0,O.jsx)("button",{type:"button",className:"rb-run-btn",disabled:!f||h,title:f?"Re-derive the rule with RIPPER under these constraints":"Pin an attribute or forbid one first \u2014 an unconstrained run is just rule induction",onClick:c,children:h?"\u23F3 Optimizing\u2026":"\u26A1 Run optimize"})]})]})}var yp=$(Be());var lt=$(G());function lu({attrMap:e,conds:t,note:n,onNoteChange:r,onClose:o,onStore:i}){let l=(0,yp.useMemo)(()=>{let a=t.map(u=>{let c=e[u.attr];return c?fp(c,u):null}).filter(u=>u!==null);return a.length?a.join("  AND  "):"No conditions yet."},[t,e]);return(0,lt.jsxs)("div",{className:"rb-popover rb-popover-right",role:"dialog","aria-label":"Store this rule",children:[(0,lt.jsxs)("div",{className:"rb-popover-head",children:[(0,lt.jsx)("span",{className:"rb-popover-title",children:"Store this rule"}),(0,lt.jsx)("button",{type:"button",className:"rb-popover-close",title:"Close",onClick:o,children:"\xD7"})]}),(0,lt.jsxs)("div",{className:"rb-popover-section rb-store-section",children:[(0,lt.jsx)("div",{className:"rb-store-summary",children:l}),(0,lt.jsx)("textarea",{className:"rb-note-input",value:n,onChange:a=>r(a.target.value),placeholder:"Note (optional) \u2014 why store this rule?",rows:3,autoFocus:!0})]}),(0,lt.jsx)("div",{className:"rb-popover-foot rb-store-foot",children:(0,lt.jsx)("button",{type:"button",className:"rb-store-confirm",onClick:i,children:"Store rule"})})]})}var Zt={blue:"#0969da",green:"#2da44e",hist:"#8bb8ec",histPos:"#2ea043",tpRemoved:"#f66a0a",fpRemoved:"#0366d6"};var B=$(G());function bp({label:e,value:t,color:n}){let r=t==null?null:Math.round(t*100);return(0,B.jsxs)("div",{className:"rb-metric",children:[(0,B.jsxs)("div",{className:"rb-metric-top",children:[(0,B.jsx)("span",{className:"rb-metric-val",children:r==null?"\u2013":`${r}%`}),(0,B.jsx)("span",{className:"rb-metric-label",children:e})]}),(0,B.jsx)("div",{className:"rb-metric-bar",children:(0,B.jsx)("div",{className:"rb-metric-fill",style:{width:`${r||0}%`,background:n}})})]})}var bh=[{key:"tp",label:"TP",word:"explains"},{key:"fp",label:"FP",word:"wrongly claims"},{key:"fn",label:"FN",word:"remaining"},{key:"tn",label:"TN",word:"left alone"}];function xh({res:e,stale:t,poolLabel:n}){return e?(0,B.jsxs)("div",{className:`rb-metrics${t?" rb-stale-dim":""}`,children:[(0,B.jsx)(bp,{label:"Precision",value:e.precision,color:Zt.blue}),(0,B.jsx)(bp,{label:"Recall",value:e.recall,color:Zt.green}),(0,B.jsx)("div",{className:"rb-counts",children:bh.map(({key:r,label:o,word:i})=>(0,B.jsxs)("span",{className:"rb-count",title:`${o}: ${i}`,children:[o," ",(0,B.jsx)("b",{children:e[r]??0})]},r))}),e.total!=null?(0,B.jsxs)("span",{className:"rb-scope",title:"Cases this rule was evaluated against",children:["of ",(0,B.jsx)("b",{children:e.total})," ",n]}):null,t?(0,B.jsx)("span",{className:"rb-stale-badge",children:"rule changed \u2014 out of date"}):null]}):(0,B.jsx)("span",{className:"rb-noeval",children:"Add attributes to the rule, then evaluate."})}function au({attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,res:u,stale:c,poolLabel:f,toast:h,note:m,onNoteChange:g,onEvaluate:v,onStore:b,onOptimize:E,onClear:d,canClear:s,isOptimizing:p}){let y=n.length>0,N=!!u&&!c&&y,k=r.size>0||i.size>0,[S,x]=(0,bn.useState)(null);(0,bn.useEffect)(()=>{if(S===null)return;let Ce=Jt=>{Jt.key==="Escape"&&x(null)};return window.addEventListener("keydown",Ce),()=>window.removeEventListener("keydown",Ce)},[S]),(0,bn.useEffect)(()=>{S==="store"&&!N&&x(null)},[S,N]);let{kept:I,held:R}=(0,bn.useMemo)(()=>Si(n,t,r,o),[n,t,r,o]),j=[];I.length&&j.push(`${I.length} kept`),R.length&&j.push(`${R.length} bounded`),i.size&&j.push(`${i.size} forbidden`);let Ae=()=>{x(null),E()},qt=()=>{x(null),b()};return(0,B.jsxs)("div",{className:"rb-footer",children:[(0,B.jsxs)("button",{type:"button",className:`rb-optimize-btn${S==="optimize"?" rb-on":""}`,"aria-expanded":S==="optimize",onClick:()=>x(Ce=>Ce==="optimize"?null:"optimize"),title:"Show what the optimizer may and may not use",children:[p?"\u23F3 Optimizing\u2026":"\u26A1 Optimize",(0,B.jsx)("span",{className:"rb-btn-caret",children:S==="optimize"?"\u25BE":"\u25B4"})]}),(0,B.jsx)("button",{type:"button",className:`rb-eval-btn${c?" rb-stale":""}`,disabled:!y,onClick:v,children:c?"\u21BB Re-evaluate":"\u25B8 Evaluate"}),(0,B.jsx)("button",{type:"button",className:"rb-clear-btn",disabled:!s,onClick:d,title:"Remove all conditions, pins and locks",children:"Clear"}),j.length?(0,B.jsx)("span",{className:"rb-constraint-summary",title:"Constraints the next optimize run will honour",children:j.join(" \xB7 ")}):null,(0,B.jsx)(xh,{res:u,stale:c,poolLabel:f}),(0,B.jsxs)("div",{className:"rb-footer-right",children:[h?(0,B.jsx)("span",{className:"rb-toast",children:h}):null,(0,B.jsxs)("button",{type:"button",className:"rb-store-btn",disabled:!N,"aria-expanded":S==="store",onClick:()=>x(Ce=>Ce==="store"?null:"store"),children:["Store rule",(0,B.jsx)("span",{className:"rb-btn-caret",children:S==="store"?"\u25BE":"\u25B4"})]})]}),S==="optimize"?(0,B.jsx)(iu,{attributes:e,attrMap:t,conds:n,pinnedAttrs:r,pinnedPreds:o,forbidden:i,onForbid:l,onUnforbid:a,onClose:()=>x(null),onRun:Ae,canRun:k,isOptimizing:p}):null,S==="store"?(0,B.jsx)(lu,{attrMap:t,conds:n,note:m,onNoteChange:g,onClose:()=>x(null),onStore:qt}):null]})}var pe=$(G()),xp="Unique removal impact shows what each condition keeps out: the cases the rest of the rule covers but this condition rejects. Many FPs removed and few TPs removed means the condition is pulling its weight; the reverse means it is mostly costing recall. A condition left at 'any value' constrains nothing, so it removes nothing. Computed on evaluation, alongside the overall metrics.";function uu({children:e,stale:t}){return(0,pe.jsxs)("div",{className:`rb-impact${t?" rb-impact-stale":""}`,children:[(0,pe.jsx)("div",{className:"rb-impact-head",children:"Unique removal impact"}),e]})}function su({impact:e,maxTotalRemoved:t,constrains:n,stale:r}){if(!n)return(0,pe.jsx)(uu,{children:(0,pe.jsx)("span",{className:"rb-impact-none",children:"Set a boundary \u2014 \u201Cany value\u201D excludes no case, so it removes none."})});if(!e)return(0,pe.jsx)(uu,{children:(0,pe.jsx)("span",{className:"rb-impact-none",children:"Evaluate the rule to compute it."})});let o=e.tp_removed+e.fp_removed,i=Math.max(0,Math.min(100,o/Math.max(1,t)*100)),l=o>0?e.tp_removed/o*100:0,a=o>0?e.fp_removed/o*100:0;return(0,pe.jsxs)(uu,{stale:r,children:[(0,pe.jsxs)("div",{className:"rb-impact-values",children:[(0,pe.jsxs)("span",{style:{color:Zt.tpRemoved},children:["TP removed ",e.tp_removed]}),(0,pe.jsxs)("span",{style:{color:Zt.fpRemoved},children:["FP removed ",e.fp_removed]})]}),(0,pe.jsx)("div",{className:"rb-impact-track",title:`Dropping this condition would additionally cover ${e.tp_removed} positive and ${e.fp_removed} negative cases`,children:(0,pe.jsxs)("div",{className:"rb-impact-bar",style:{width:`${i}%`},children:[(0,pe.jsx)("div",{className:"rb-impact-seg",style:{background:Zt.tpRemoved,width:`${l}%`}}),(0,pe.jsx)("div",{className:"rb-impact-seg",style:{background:Zt.fpRemoved,width:`${a}%`}})]})}),o===0?(0,pe.jsx)("span",{className:"rb-impact-note",children:"Redundant here \u2014 the other conditions already exclude these cases."}):null]})}var L=$(G());function cu({title:e,outcomeName:t,attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onAdd:u,onUpdate:c,onRemove:f,onClear:h,onTogglePin:m,onTogglePredPin:g,onForbid:v,onUnforbid:b,res:E,stale:d,poolLabel:s,toast:p,note:y,onNoteChange:N,onEvaluate:k,onStore:S,onOptimize:x,isOptimizing:I}){let[R,j]=(0,ft.useState)(!1),[Ae,qt]=(0,ft.useState)(!1),[Ce,Jt]=(0,ft.useState)(tu),[xn,Kr]=(0,ft.useState)(!1),Yr=o.map(D=>D.attr),en=(0,ft.useMemo)(()=>{let D={};for(let be of E?.importance??[])D[be.attr]=be;return D},[E]),er=(0,ft.useMemo)(()=>(E?.importance??[]).reduce((D,be)=>Math.max(D,be.tp_removed+be.fp_removed),0),[E]),Gr={onDragOver:D=>{D.preventDefault(),D.dataTransfer.dropEffect="copy",j(!0)},onDragLeave:()=>j(!1),onDrop:D=>{D.preventDefault(),j(!1);let be=D.dataTransfer.getData("text/plain");be&&u(be)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("style",{children:qd}),(0,L.jsxs)("div",{className:"rb-root rb-v2",children:[(0,L.jsxs)("div",{className:"rb-header",children:[(0,L.jsx)("span",{className:"rb-title",children:e}),(0,L.jsxs)("span",{className:"rb-outcome",children:["predicts: ",t]}),(0,L.jsx)(op,{}),(0,L.jsx)("span",{className:"rb-header-hint",children:"click or drag an attribute \xB7 drag handles to set boundaries"}),(0,L.jsxs)("button",{type:"button",className:`rb-impact-btn${Ae?" rb-on":""}`,disabled:o.length===0,"aria-pressed":Ae,title:Ae?"Hide attribute importance":"Show how much each condition contributes to the rule",onClick:()=>qt(D=>!D),children:[(0,L.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,L.jsx)("path",{d:"M3 3v18h18M7 15l4-6 3 3 5-8"})}),"Attribute importance"]}),(0,L.jsx)(wi,{align:"right",children:xp})]}),(0,L.jsxs)("div",{className:`rb-body${xn?" rb-resizing":""}`,children:[(0,L.jsx)(Za,{attributes:n,usedIds:Yr,forbidden:a,onAdd:u,onUnforbid:b,width:Ce}),(0,L.jsx)(nu,{width:Ce,onResize:Jt,onDraggingChange:Kr}),(0,L.jsx)("div",{className:`rb-canvas${R?" rb-dragover":""}`,...Gr,children:o.length===0?(0,L.jsxs)("div",{className:"rb-dropzone",children:[(0,L.jsx)("b",{children:"Drop an attribute here"}),(0,L.jsx)("span",{children:"set boundaries directly on its distribution"})]}):o.map((D,be)=>{let xe=r[D.attr];if(!xe)return null;let Et=i.has(D.attr),fe=[];if(xe.kind==="num"){let{lo:Q,hi:_t}=qn(xe,D);Q!==null&&fe.push({bound:"lo",glyph:"\u2265",what:`lower bound (\u2265 ${Q})`}),_t!==null&&fe.push({bound:"hi",glyph:"\u2264",what:`upper bound (\u2264 ${_t})`})}else D.op==="=="&&fe.push({bound:"val",glyph:"==",what:`value (== ${D.value})`});let wn=fe.some(Q=>l.has(Me(D.attr,Q.bound)));return(0,L.jsxs)(ft.Fragment,{children:[be>0?(0,L.jsx)("span",{className:"rb-and",children:"AND"}):null,(0,L.jsxs)("div",{className:`rb-cond${Et?" rb-pinned":""}${wn?" rb-pred-pinned":""}`,children:[(0,L.jsxs)("div",{className:"rb-cond-head",children:[(0,L.jsx)(xi,{kind:xe.kind}),(0,L.jsx)("span",{className:"rb-cond-name",children:xe.label}),Et?fe.map(Q=>{let _t=l.has(Me(D.attr,Q.bound));return(0,L.jsxs)("button",{type:"button",className:`rb-pin rb-pin-pred${_t?" rb-pinned":""}`,title:_t?`Unpin ${Q.what} \u2014 let the optimizer choose it`:`Pin ${Q.what} \u2014 keep it fixed in the optimized rule`,onClick:()=>g(D.attr,Q.bound),children:[(0,L.jsx)("span",{className:"rb-pin-side",children:Q.glyph}),_t?"\u{1F512}":"\u{1F513}"]},Q.bound)}):null,(0,L.jsx)("button",{type:"button",className:`rb-pin${Et?" rb-pinned":""}`,title:Et?"Unpin attribute":"Pin attribute (keep in optimized rule)",onClick:()=>m(D.attr),children:"\u{1F4CC}"}),(0,L.jsx)("button",{type:"button",className:"rb-remove",title:"Remove condition",onClick:()=>f(be),children:"\xD7"})]}),(0,L.jsxs)("div",{className:"rb-cond-body",children:[xe.kind==="num"&&D.op==="range"?(0,L.jsxs)(L.Fragment,{children:[(()=>{let Q=qa(xe,D.lo,D.hi);return(0,L.jsx)("span",{className:`rb-pred-readout${Q.any?" rb-any":""}`,children:Q.text})})(),(0,L.jsx)(ru,{attr:xe,lo:D.lo,hi:D.hi,onChange:Q=>c(be,Q)})]}):xe.kind==="cat"&&D.op==="=="?(0,L.jsx)(ou,{attr:xe,value:D.value,onChange:Q=>c(be,{value:Q})}):null,Ae?(0,L.jsx)(su,{impact:en[D.attr]??null,maxTotalRemoved:er,constrains:xe.kind!=="num"||fe.length>0,stale:d}):null]})]})]},D.attr)})})]}),(0,L.jsx)(au,{attributes:n,attrMap:r,conds:o,pinnedAttrs:i,pinnedPreds:l,forbidden:a,onForbid:v,onUnforbid:b,res:E,stale:d,poolLabel:s,toast:p,note:y,onNoteChange:N,onEvaluate:k,onStore:S,onOptimize:x,onClear:h,canClear:o.length>0||i.size>0,isOptimizing:I})]})]})}function du(e){let t=Number(e);return Number.isFinite(t)?t:null}function wh(e,t){let n=Array.isArray(t.bin_counts)?t.bin_counts:[],r=Array.isArray(t.outcome_positive_bin_counts)?t.outcome_positive_bin_counts:[],o=Array.isArray(t.bin_edges)?t.bin_edges.map(Number):[],i=t.kind==="numeric_discrete",l=n.map((g,v)=>{let b=Number(o[v]),E=Number(i?o[v]:o[v+1]);return{n:Math.max(0,it(g)),pos:Math.max(0,it(r[v])),lo:Number.isFinite(b)?b:0,hi:Number.isFinite(E)?E:0}}),a=l.length?l[0].lo:0,u=l.length?l[l.length-1].hi:0,c=du(t.min)??a,f=du(t.max)??u,h=du(t.median)??c,m=l.reduce((g,v)=>Math.max(g,v.n),0);return{...e,kind:"num",min:c,max:f>c?f:c,median:Math.min(Math.max(h,c),f),isInt:Number.isInteger(c)&&Number.isInteger(f),isDiscrete:i,bins:l,maxN:m,total:Math.max(0,it(t.total_count)),outcomePositiveTotal:Math.max(0,it(t.outcome_positive_total)),missing:Math.max(0,it(t.missing_count))}}function kh(e,t){let r=(Array.isArray(t.categories)?t.categories:[]).map(i=>({value:String(i&&i.value!=null?i.value:""),n:Math.max(0,it(i&&i.count)),pos:Math.max(0,it(i&&i.outcome_positive_count))}));r.sort((i,l)=>l.n-i.n);let o=r.reduce((i,l)=>Math.max(i,l.n),0);return{...e,kind:"cat",categories:r,maxN:o,total:Math.max(0,it(t.total_count)),outcomePositiveTotal:Math.max(0,it(t.outcome_positive_total)),missing:Math.max(0,it(t.missing_count))}}function wp(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!="object")continue;let r=String(n.id??"");if(!r)continue;let o=n.summary&&typeof n.summary=="object"?n.summary:{},i={id:r,label:String(n.label??r),importance:vp(n.importance),family:String(n.family??"other"),familyLabel:String(n.family_label??"Other"),sources:Array.isArray(n.sources)?n.sources.map(String).filter(Boolean):[]};n.kind==="num"?t.push(wh(i,o)):t.push(kh(i,o))}return t}function kp(e){let t={};for(let n of e)t[n.id]=n;return t}var Sp=$(G()),Sh=2600;function Nh(){let[e]=Le("title"),[t]=Le("outcome_name"),[n]=Le("pool_label"),[r]=Le("attributes"),[o]=Le("flash"),[,i]=Le("eval_request"),[l]=Le("eval_result"),[,a]=Le("store_trigger"),[u]=Le("store_result"),[,c]=Le("store_note"),[,f]=Le("optimize_request"),[h]=Le("optimize_result"),[m]=Le("loaded_rule"),g=T.useMemo(()=>wp(r),[r]),v=T.useMemo(()=>kp(g),[g]),[b,E]=T.useState([]),[d,s]=T.useState(null),[p,y]=T.useState(null),[N,k]=T.useState(""),[S,x]=T.useState(new Set),[I,R]=T.useState(new Set),[j,Ae]=T.useState(new Set),[qt,Ce]=T.useState(!1),Jt=T.useRef(""),xn=T.useRef(0),Kr=T.useRef(null),Yr=T.useRef(null),en=T.useRef(null),er=T.useRef(0),Gr=T.useRef(null),D=T.useRef(null),be=JSON.stringify(b),xe=d!==null&&d.key!==be,Et=d?d.res:null,fe=T.useCallback(_=>{y(_),en.current&&clearTimeout(en.current),en.current=setTimeout(()=>y(null),Sh)},[]),wn=T.useCallback(_=>{let P=pp(_,v);if(E(P),s(null),P.length===0)return;let A=P.map(M=>M.op==="range"?Ja(v[M.attr],M.lo,M.hi):M);Jt.current=JSON.stringify(P),xn.current+=1,i({conditions:A,request_id:xn.current})},[v,i]);T.useEffect(()=>{!l||l.eval_id==null||l.eval_id!==Kr.current&&(Kr.current=l.eval_id,s({key:Jt.current,res:l}))},[l]),T.useEffect(()=>{o&&fe(o)},[o,fe]),T.useEffect(()=>{if(!u||u.store_id==null||u.store_id===Yr.current)return;Yr.current=u.store_id;let _=u.precision!=null?Math.round(u.precision*100):null,P=u.recall!=null?Math.round(u.recall*100):null,A=_!=null&&P!=null?`  P ${_}% \xB7 R ${P}%`:"";fe(`Stored \u2713${A}`),E([]),s(null),k(""),x(new Set),R(new Set),Ae(new Set),Ce(!1)},[u,fe]),T.useEffect(()=>()=>{en.current&&clearTimeout(en.current)},[]),T.useEffect(()=>{if(!h||h.request_id==null||h.request_id!==er.current||h.request_id===Gr.current)return;if(Gr.current=h.request_id,Ce(!1),h.error){fe(`Optimize failed \u2014 ${h.error}`);return}let _=h.conditions??[];if(_.length===0){fe("Optimize found no rule under these constraints");return}wn(_)},[h,wn,fe]),T.useEffect(()=>{if(!m||m.load_id==null||m.load_id===D.current)return;D.current=m.load_id,k(""),x(new Set),R(new Set),Ae(new Set),Ce(!1),wn(m.conditions??[]);let _=m.label?` ${m.label}`:"";fe(`Loaded${_} \u2014 adjust and evaluate`)},[m,wn,fe]);let Q=T.useCallback(_=>{R(P=>{let A=[Me(_,"lo"),Me(_,"hi"),Me(_,"val")];if(!A.some(oe=>P.has(oe)))return P;let M=new Set(P);for(let oe of A)M.delete(oe);return M})},[]),_t=T.useCallback(_=>{Ae(P=>P.has(_)?P:new Set(P).add(_)),E(P=>P.some(A=>A.attr===_)?P.filter(A=>A.attr!==_):P),x(P=>{if(!P.has(_))return P;let A=new Set(P);return A.delete(_),A}),Q(_)},[Q]),Np=T.useCallback(_=>{Ae(P=>{if(!P.has(_))return P;let A=new Set(P);return A.delete(_),A})},[]),Cp=T.useCallback(_=>{x(P=>{let A=new Set(P);return A.has(_)?(A.delete(_),Q(_)):A.add(_),A})},[Q]),Ep=T.useCallback((_,P)=>{let A=Me(_,P);R(M=>{let oe=new Set(M);return oe.has(A)?oe.delete(A):oe.add(A),oe}),x(M=>M.has(_)?M:new Set(M).add(_))},[]),_p=T.useCallback(()=>{if(S.size===0&&j.size===0||qt)return;let _=[];for(let M of b){let oe=v[M.attr];if(oe)if(oe.kind==="num"){let Ap=oe,{lo:Ei,hi:_i}=qn(Ap,M),pu=Ei!==null&&I.has(Me(M.attr,"lo")),fu=_i!==null&&I.has(Me(M.attr,"hi"));pu&&fu?_.push({attr:M.attr,op:"range",lo:Ei,hi:_i}):pu?_.push({attr:M.attr,op:">=",value:Ei}):fu&&_.push({attr:M.attr,op:"<=",value:_i})}else M.op==="=="&&I.has(Me(M.attr,"val"))&&_.push(M)}let P=new Set(_.map(M=>M.attr)),A=Array.from(S).filter(M=>!P.has(M));Ce(!0),er.current+=1,f({fixed_attributes:A,fixed_predicates:_,forbidden_attributes:Array.from(j),request_id:er.current})},[S,I,j,b,v,qt,f]),zp=T.useCallback(_=>{let P=v[_];P&&(j.has(_)||E(A=>A.some(M=>M.attr===_)?A:[...A,dp(P)]))},[v,j]),Rp=T.useCallback((_,P)=>{E(A=>A.map((M,oe)=>oe===_?{...M,...P}:M))},[]),Pp=T.useCallback(_=>{E(P=>{let A=P[_];return A&&(x(M=>{if(!M.has(A.attr))return M;let oe=new Set(M);return oe.delete(A.attr),oe}),Q(A.attr)),P.filter((M,oe)=>oe!==_)})},[Q]),Tp=T.useCallback(()=>{E([]),s(null),k(""),x(new Set),R(new Set)},[]),Lp=T.useCallback(()=>{if(b.length===0)return;let _=b.map(P=>P.op==="range"?Ja(v[P.attr],P.lo,P.hi):P);Jt.current=JSON.stringify(b),xn.current+=1,i({conditions:_,request_id:xn.current})},[b,v,i]),Mp=T.useCallback(()=>{!Et||xe||(c(N),a(_=>(_??0)+1))},[Et,xe,N,c,a]);return(0,Sp.jsx)(cu,{title:e||"Rule builder",outcomeName:t||"outcome",attributes:g,attrMap:v,conds:b,pinnedAttrs:S,pinnedPreds:I,forbidden:j,onAdd:zp,onUpdate:Rp,onRemove:Pp,onClear:Tp,onTogglePin:Cp,onTogglePredPin:Ep,onForbid:_t,onUnforbid:Np,res:Et,stale:xe,poolLabel:n||"cases",toast:p,note:N,onNoteChange:k,onEvaluate:Lp,onStore:Mp,onOptimize:_p,isOptimizing:qt})}var zv={render:Zd(Nh)};export{zv as default};
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
