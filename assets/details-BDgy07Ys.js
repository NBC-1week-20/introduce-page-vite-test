import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as i}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";import{getFirestore as d,Timestamp as p,addDoc as f,collection as m,getDocs as u,query as g,orderBy as y}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";const h={apiKey:"AIzaSyBtVPaMcwLkX8OC8fVfAjpZDxfacykBREU",authDomain:"sparta-e02dc.firebaseapp.com",projectId:"sparta-e02dc",storageBucket:"sparta-e02dc.firebasestorage.app",messagingSenderId:"1000457952288",appId:"1:1000457952288:web:472fe9e7f48a94cea37045",measurementId:"G-H41TVN2QFP"};async function w(){const e=i(h),t=d(e);$("#postingbtn").click(async function(){let r=$("#author-name").val(),a=$("#comment-content").val(),c=p.fromDate(new Date),o={author_name:r,content:a,timestamp:c};await f(m(t,"details"),o),alert("작성완료!"),window.location.reload()});let n=await u(g(m(t,"details"),y("timestamp","desc"))),s="";n.forEach(r=>{let a=r.data(),c=a.author_name,o=a.content,l=a.timestamp.toDate().toLocaleString();s+=`
    <li class="comment">
          <div class="author">${c}</div>
          <div class="content">${o}</div>
          <small class="timestamp">${l}</small>
        </li>
    `}),$(".comment-list").html(s)}async function I(){try{return(await fetch("./asset/data/details.json")).json()}catch(e){console.log(e)}}async function b(){try{const t=new URLSearchParams(window.location.search).get("id");return Number(t)}catch(e){alert("fail load to member Id"),console.log(e)}}function _(e){const t=document.querySelector(".profile_image img");t.src=e.profileImageUrl||"./asset/images/default_profile_image.jpg",t.alt=`${e.name}의 프로필 이미지`;const n=document.querySelector(".profile_team_name");n.textContent=e.teamName||"팀 이름 없음";const s=document.querySelector(".profile_role");s.textContent=e.role||"역할 정보 없음";const r=document.querySelector(".profile_name");r.textContent=e.name||"이름 없음";const a=document.querySelectorAll(".image-row .image");e.images.forEach((c,o)=>{a[o]&&(a[o].style.backgroundImage=`url("${c}")`)})}async function S(){const e=await b(),n=(await I())[e-1];_(n)}S();w();
