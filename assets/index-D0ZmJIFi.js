(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const m=[{name:"김정민",id:"1",image:"../asset/images/kjm_profile_image.jpeg",description:`1234sdkfjheiwufh
oiefjwoeifjowiejfoijowiejf`},{name:"윤경모",id:"2",image:"https://cdn.pixabay.com/photo/2017/08/07/14/15/woman-2604283_1280.jpg",description:"4567"},{name:"소진오",id:"3",image:"https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg",description:"66789"},{name:"장희수",id:"4",image:"../asset/images/jhs_profile_image.jpeg",description:"899"}];function l(t){return`
    <div class="member-card">
    <div class="member-wrap">
      <div class="member-left">
        <img
          class="card-pic"
          src="${t.image}"
          alt="Profile picture"/>
        <p class="card-name">${t.name}</p>
        <a href="./details.html?id=${t.id}">
          <button class="detail-btn">자세히 보기</button>
        </a>
      </div>
      <div class="member-right">
        <p class="member-desc">${t.description}</p>
      </div>
    </div>
  </div>
    `}const d=document.getElementById("member-section");m.forEach(t=>{d.innerHTML+=l(t)});const a=document.getElementById("member-fold-btn");a.addEventListener("click",p);const f=document.getElementById("comment-fold-btn");f.addEventListener("click",y);const i=document.getElementById("moveToComments");function p(){const t=document.getElementById("member-section"),n=document.getElementById("member-fold-btn");t.style.display==="none"?(t.style.display="flex",n.style.color="#E8344E",i.style.display="block"):(t.style.display="none",n.style.color="rgb(77, 77, 77)",i.style.display="none")}const u=document.getElementById("newcomments");function y(){const t=document.getElementById("comment-fold-btn"),n=document.getElementById("comment-list");n.style.display==="none"?(n.style.display="flex",t.style.color="#E8344E"):(n.style.display="none",t.style.color="rgb(77, 77, 77)")}i.addEventListener("click",()=>{u.scrollIntoView({behavior:"smooth",block:"start"})});
