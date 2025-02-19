import"./modulepreload-polyfill-B5Qt9EMX.js";const o=[{name:"김정민",id:"1",image:"../asset/images/kjm_profile_image.jpeg",description:`1234sdkfjheiwufh
oiefjwoeifjowiejfoijowiejf`},{name:"윤경모",id:"2",image:"https://cdn.pixabay.com/photo/2017/08/07/14/15/woman-2604283_1280.jpg",description:"4567"},{name:"소진오",id:"3",image:"https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg",description:"66789"},{name:"장희수",id:"4",image:"../asset/images/jhs_profile_image.jpeg",description:"899"}];function m(e){return`
    <div class="member-card">
    <div class="member-wrap">
      <div class="member-left">
        <img
          class="card-pic"
          src="${e.image}"
          alt="Profile picture"/>
        <p class="card-name">${e.name}</p>
        <a href="./details.html?id=${e.id}">
          <button class="detail-btn">자세히 보기</button>
        </a>
      </div>
      <div class="member-right">
        <p class="member-desc">${e.description}</p>
      </div>
    </div>
  </div>
    `}const s=document.getElementById("member-section");o.forEach(e=>{s.innerHTML+=m(e)});const i=document.getElementById("member-fold-btn");i.addEventListener("click",l);const c=document.getElementById("comment-fold-btn");c.addEventListener("click",a);const n=document.getElementById("moveToComments");function l(){const e=document.getElementById("member-section"),t=document.getElementById("member-fold-btn");e.style.display==="none"?(e.style.display="flex",t.style.color="#E8344E",n.style.display="block"):(e.style.display="none",t.style.color="rgb(77, 77, 77)",n.style.display="none")}const d=document.getElementById("newcomments");function a(){const e=document.getElementById("comment-fold-btn"),t=document.getElementById("comment-list");t.style.display==="none"?(t.style.display="flex",e.style.color="#E8344E"):(t.style.display="none",e.style.color="rgb(77, 77, 77)")}n.addEventListener("click",()=>{d.scrollIntoView({behavior:"smooth",block:"start"})});
