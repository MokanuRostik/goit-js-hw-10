import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as l}from"./assets/vendor-992cd48f.js";let s;const e=document.querySelector("button"),m=document.querySelector("span[data-days]"),f=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]");e.disabled=!0;const p=document.getElementById("datetime-picker"),y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<Date.now()?(alert("Please choose a date in the future"),e.disabled=!0,clearInterval(s)):(e.disabled=!1,e.addEventListener("click",()=>{s=setInterval(()=>{const o=n.getTime()-Date.now();if(o<=0){clearInterval(s);return}const{days:c,hours:d,minutes:a,seconds:r}=b(o);m.textContent=c.toString().padStart(2,"0"),f.textContent=d.toString().padStart(2,"0"),S.textContent=a.toString().padStart(2,"0"),h.textContent=r.toString().padStart(2,"0"),e.disabled=!0},1e3)}))}};l(p,y);function b(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),u=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);return{days:a,hours:r,minutes:u,seconds:i}}
//# sourceMappingURL=commonHelpers.js.map
