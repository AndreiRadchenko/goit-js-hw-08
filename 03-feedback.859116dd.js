function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,a,i,f,c,u=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,u=t,i=e.apply(a,n)}function h(e){return u=e,f=setTimeout(T,t),l?b(e):i}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-u>=a}function T(){var e=v();if(w(e))return j(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?m(n,a-(e-u)):n}(e))}function j(e){return f=void 0,g&&r?b(e):(r=o=void 0,i)}function O(){var e=v(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,t),b(c)}return void 0===f&&(f=setTimeout(T,t)),i}return t=y(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),u=0,r=c=o=f=void 0},O.flush=function(){return void 0===f?i:j(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var b={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}};const h=document.querySelector(".feedback-form");h.addEventListener("input",e(t)((function(e){const t=new FormData(e.target.closest(".feedback-form")),n={};t.forEach(((e,t)=>{n[t]=e})),b.save("feedback-form-state",n)}),500)),h.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.currentTarget),n={};t.forEach(((e,t)=>{n[t]=e})),n.email?n.message?(console.log(n),b.remove("feedback-form-state"),e.currentTarget.reset()):alert("Please fill message"):alert("Please fill email")})),function(e){const t=b.load("feedback-form-state");if(!t)return;const{elements:{email:n,message:r}}=e;n.value=t.email,r.value=t.message}(h);
//# sourceMappingURL=03-feedback.859116dd.js.map
