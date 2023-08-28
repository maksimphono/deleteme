(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="/assets/javascript-8dac5379.svg",l="/vite.svg";function a(){return new Worker("/assets/multiplyWorker-6bcbdf08.js")}function u(s){let o=0;const n=r=>{o=r,s.innerHTML=`count is ${o}`};if(window.Worker){const r=new a,e=document.getElementById("mul");r.onmessage=function(t){console.timeEnd("Worker timer"),n(t.data)},e.addEventListener("click",()=>{console.time("Worker timer"),r.postMessage(o)})}else console.log("Worker is not supported");s.addEventListener("click",()=>n(o+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${l}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="mul" type="button"></button>
      </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;u(document.querySelector("#counter"));
