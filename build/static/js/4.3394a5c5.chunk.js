(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(41);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},36:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(35);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},37:function(t,e,r){"use strict";var n=r(36),o=r(38),a=r.n(o),c=r(39),i=r(34),u=r(0);function s(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(u.useReducer)(s,{status:e?"pending":null,data:null,error:null}),o=Object(i.a)(r,2),f=o[0],l=o[1],h=Object(u.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"SEND"}),e.prev=1,e.next=4,t(r);case 4:n=e.sent,l({type:"SUCCESS",responseData:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.a)({sendRequest:h},f)}},38:function(t,e,r){t.exports=r(43)},39:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},40:function(t,e,r){"use strict";r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return v})),r.d(e,"c",(function(){return b}));var n=r(38),o=r.n(n),a=r(36),c=r(39),i="https://fir-72c12-default-rtdb.firebaseio.com";function u(){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(o.a.mark((function t(){var e,r,n,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,e.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quotes.");case 8:for(c in n=[],r)u=Object(a.a)({id:c},r[c]),n.push(u);return t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(o.a.mark((function t(e){var r,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,r.ok){t.next=8;break}throw new Error(n.message||"Could not fetch quote.");case 8:return c=Object(a.a)({id:e},n),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,r.ok){t.next=8;break}throw new Error(n.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,r.ok){t.next=8;break}throw new Error(n.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:n.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(o.a.mark((function t(e){var r,n,c,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/comments/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,r.ok){t.next=8;break}throw new Error(n.message||"Could not get comments.");case 8:for(u in c=[],n)s=Object(a.a)({id:u},n[u]),c.push(s);return t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/quotes/").concat(e,"/.json"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,r.ok){t.next=8;break}throw new Error(n.message||"An Error Has Occured");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},41:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(42);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},42:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},43:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new S(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function b(){}var j={};u(j,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&n.call(w,a)&&(j=w);var O=b.prototype=v.prototype=Object.create(j);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,c,i){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,i)}))}i(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=b,u(O,"constructor",b),u(b,"constructor",m),m.displayName=u(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,i,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(O),u(O,i,"Generator"),u(O,a,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},61:function(t,e,r){t.exports={card:"Card_card__Uur1-"}},62:function(t,e,r){t.exports={form:"QuoteForm_form__jxj7j",loading:"QuoteForm_loading__3gjZy",invalidInput:"QuoteForm_invalidInput__1UkD7",control:"QuoteForm_control__2j2Js",actions:"QuoteForm_actions__3of8T"}},75:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return v}));var n=r(0),o=r(34),a=r(2),c=r(61),i=r.n(c),u=r(1),s=function(t){return Object(u.jsx)("div",{className:i.a.card,children:t.children})},f=r(13),l=r(62),h=r.n(l),p=function(t){var e=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useState)(!0),i=Object(o.a)(c,2),l=i[0],p=i[1],d=Object(n.useState)(!1),y=Object(o.a)(d,2),v=y[0],m=y[1],b=v&&!l||!l?h.a.invalidInput:"";var j=function(t){m(!0),""===t.target.value.trim()&&v&&p(!1)},g=function(){m(!0),p(!0)};return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(a.a,{when:v&&!l,message:"Are you sure you want to leave this page"}),Object(u.jsx)(s,{children:Object(u.jsxs)("form",{className:h.a.form,onSubmit:l?function(n){n.preventDefault();var o=e.current.value,a=r.current.value;o&&a?t.onAddQuote({author:o,text:a}):p(!1)}:null,children:[t.isLoading&&Object(u.jsx)("div",{className:h.a.loading,children:Object(u.jsx)(f.a,{})}),Object(u.jsxs)("div",{className:h.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:e,onBlur:j,onFocus:g,className:b})]}),Object(u.jsxs)("div",{className:h.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:r,onBlur:j,onFocus:g,className:b})]}),Object(u.jsx)("div",{className:h.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Quote"})}),!l&&Object(u.jsx)("h3",{children:"Please enter a valid input"})]})})]})},d=r(37),y=r(40);function v(){var t=Object(d.a)(y.b),e=t.sendRequest,r=t.status,o=Object(a.h)();Object(n.useEffect)((function(){"completed"===r&&o.push("/quotes")}),[r,o]);return Object(u.jsx)("div",{children:Object(u.jsx)(p,{isLoading:"pending"===r,onAddQuote:function(t){e(t)}})})}}}]);
//# sourceMappingURL=4.3394a5c5.chunk.js.map