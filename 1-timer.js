import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as S,i as m}from"./assets/vendor-BbSUbo7J.js";const r=document.querySelector("button[data-start]"),c=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),q=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let i=null,u=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(m.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(u=t,r.disabled=!1)}};S(c,D);r.addEventListener("click",()=>{u&&(r.disabled=!0,c.disabled=!0,i=setInterval(()=>{const t=u-new Date;if(t<=0)clearInterval(i),l(0,0,0,0),m.success({title:"Success",message:"Countdown completed!"}),c.disabled=!1;else{const{days:n,hours:o,minutes:d,seconds:a}=E(t);l(n,o,d,a)}},1e3))});function E(e){const a=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:f,minutes:h,seconds:y}}function l(e,t,n,o){p.textContent=s(e),b.textContent=s(t),q.textContent=s(n),C.textContent=s(o)}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
