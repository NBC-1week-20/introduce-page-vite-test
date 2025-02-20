import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as l}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";import{getFirestore as d,getDocs as r,query as p,collection as g,orderBy as y,limit as f}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";const b=[{name:"김정민",id:"1",image:"./asset/images/kjm_profile_image.jpeg",description:`안녕하세요~ 스프링 6기에 합류한 김정민입니다!

이것 저것 코드 짜는거 좋아하고 얘기하는거 좋아합니다~ 취미로는 운동 하고 있어요.

잘 부탁드립니다~`},{name:"윤경모",id:"2",image:"https://cdn.pixabay.com/photo/2017/08/07/14/15/woman-2604283_1280.jpg",description:"4567"},{name:"소진오",id:"3",image:"./asset/images/jin_profile_image.jpg",description:`안녕하세요. 스프링 6기 소진오입니다.
취미는 정말 많은데 그 중에 제일 좋아하는 취미는 축구 보는 거랑 음악 듣기 등등 있습니다.`},{name:"장희수",id:"4",image:"./asset/images/jhs_profile_image.jpeg",description:"899"}],u={apiKey:"AIzaSyBtVPaMcwLkX8OC8fVfAjpZDxfacykBREU",authDomain:"sparta-e02dc.firebaseapp.com",projectId:"sparta-e02dc",storageBucket:"sparta-e02dc.firebasestorage.app",messagingSenderId:"1000457952288",appId:"1:1000457952288:web:472fe9e7f48a94cea37045",measurementId:"G-H41TVN2QFP"},E=l(u),B=d(E);async function I(){let e=document.getElementById("comment-list");e.innerHTML="",(await r(p(g(B,"details"),y("timestamp","desc"),f(3)))).forEach(m=>{let n=m.data(),s=n.author_name,a=n.content,i=n.timestamp?n.timestamp.toDate().toLocaleString():"날짜 없음",c=`<p class="comment"><strong>${s}:</strong> ${a} <br> <small>${i}</small></p>`;e.innerHTML+=c})}window.onload=I;function h(e){return`
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
    `}const v=document.getElementById("member-section");b.forEach(e=>{v.innerHTML+=h(e)});const _=document.getElementById("member-fold-btn");_.addEventListener("click",j);const w=document.getElementById("comment-fold-btn");w.addEventListener("click",C);const o=document.getElementById("moveToComments");function j(){const e=document.getElementById("member-section"),t=document.getElementById("member-fold-btn");e.style.display==="none"?(e.style.display="flex",t.style.color="#E8344E",o.style.display="block"):(e.style.display="none",t.style.color="rgb(77, 77, 77)",o.style.display="none")}const k=document.getElementById("newcomments");function C(){const e=document.getElementById("comment-fold-btn"),t=document.getElementById("comment-list");t.style.display==="none"?(t.style.display="flex",e.style.color="#E8344E"):(t.style.display="none",e.style.color="rgb(77, 77, 77)")}o.addEventListener("click",()=>{k.scrollIntoView({behavior:"smooth",block:"start"})});
