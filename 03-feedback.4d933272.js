!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,x="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=x||O||Function("return this")(),j=Object.prototype.toString,h=Math.max,w=Math.min,S=function(){return _.Date.now()};function M(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,a=setTimeout(b,t),c?v(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=S();if(y(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?w(r,i-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function x(){var e=S(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(b,t),v(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=T(t)||0,I(r)&&(c=!!r.leading,i=(s="maxWait"in r)?h(T(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},x.flush=function(){return void 0===a?u:g(S())},x}function I(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(I(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=I(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):m.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return I(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),M(e,t,{leading:n,maxWait:t,trailing:o})};var k,N={form:document.querySelector(".feedback-form"),emailInput:document.querySelector(".feedback-form input"),textareaInput:document.querySelector(".feedback-form textarea")},A={};(k=localStorage.getItem("feedback-form-state"))&&(k=JSON.parse(k),Object.entries(k).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];A[n]=o})),N.emailInput.value=k.email,N.textareaInput.value=k.message),N.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(A),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),N.form.addEventListener("input",e(s)((function(e){A[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(A)),console.log(A)}),500))}();
//# sourceMappingURL=03-feedback.4d933272.js.map
