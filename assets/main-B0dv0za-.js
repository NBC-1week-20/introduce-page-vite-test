import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as l}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";import{getFirestore as d,getDocs as r,query as p,collection as g,orderBy as f,limit as y}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";const b=[{name:"김정민",id:"1",image:"../asset/images/kjm_profile_image.jpeg",description:`1234sdkfjheiwufh
oiefjwoeifjowiejfoijowiejf`},{name:"윤경모",id:"2",image:"https://cdn.pixabay.com/photo/2017/08/07/14/15/woman-2604283_1280.jpg",description:"4567"},{name:"소진오",id:"3",image:"https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg",description:"66789"},{name:"장희수",id:"4",image:"../asset/images/jhs_profile_image.jpeg",description:"899"}],u={apiKey:"AIzaSyBtVPaMcwLkX8OC8fVfAjpZDxfacykBREU",authDomain:"sparta-e02dc.firebaseapp.com",projectId:"sparta-e02dc",storageBucket:"sparta-e02dc.firebasestorage.app",messagingSenderId:"1000457952288",appId:"1:1000457952288:web:472fe9e7f48a94cea37045",measurementId:"G-H41TVN2QFP"},E=l(u),h=d(E);async function B(){let e=document.getElementById("comment-list");e.innerHTML="",(await r(p(g(h,"details"),f("timestamp","desc"),y(3)))).forEach(m=>{let o=m.data(),s=o.author_name,a=o.content,i=o.timestamp?o.timestamp.toDate().toLocaleString():"날짜 없음",c=`<p class="comment"><strong>${s}:</strong> ${a} <br> <small>${i}</small></p>`;e.innerHTML+=c})}window.onload=B;function I(e){return`
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
    `}const w=document.getElementById("member-section");b.forEach(e=>{w.innerHTML+=I(e)});const j=document.getElementById("member-fold-btn");j.addEventListener("click",k);const v=document.getElementById("comment-fold-btn");v.addEventListener("click",C);const n=document.getElementById("moveToComments");function k(){const e=document.getElementById("member-section"),t=document.getElementById("member-fold-btn");e.style.display==="none"?(e.style.display="flex",t.style.color="#E8344E",n.style.display="block"):(e.style.display="none",t.style.color="rgb(77, 77, 77)",n.style.display="none")}const _=document.getElementById("newcomments");function C(){const e=document.getElementById("comment-fold-btn"),t=document.getElementById("comment-list");t.style.display==="none"?(t.style.display="flex",e.style.color="#E8344E"):(t.style.display="none",e.style.color="rgb(77, 77, 77)")}n.addEventListener("click",()=>{_.scrollIntoView({behavior:"smooth",block:"start"})});
