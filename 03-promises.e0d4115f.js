function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var l=i("7Y9D8");const r=document.querySelector("form");r.addEventListener("submit",(function(e){e.preventDefault();let t=Number(s.value),n=Number(d.value);for(let e=1;e<=Number(a.value);e++)u=e,f(u,t),t+=n}));let u=null;const{delay:s,step:d,amount:a}=r.elements;function f(t,n){const o=Math.random()>.3;new Promise(((e,i)=>{setTimeout((()=>{o?e({position:t,delay:n}):i({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}
//# sourceMappingURL=03-promises.e0d4115f.js.map
