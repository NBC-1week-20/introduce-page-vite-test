import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as m}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";import{getFirestore as d,addDoc as p,collection as l,getDocs as f}from"https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";const i={apiKey:"AIzaSyBtVPaMcwLkX8OC8fVfAjpZDxfacykBREU",authDomain:"sparta-e02dc.firebaseapp.com",projectId:"sparta-e02dc",storageBucket:"sparta-e02dc.firebasestorage.app",messagingSenderId:"1000457952288",appId:"1:1000457952288:web:472fe9e7f48a94cea37045",measurementId:"G-H41TVN2QFP"};console.log(i);async function u(){const e=m(i),t=d(e);$("#postingbtn").click(async function(){let n=$("#author-name").val(),a=$("#comment-content").val(),r={author_name:n,content:a};await p(l(t,"details"),r),window.location.reload()});let o=await f(l(t,"details")),c="";o.forEach(n=>{let a=n.data(),r=a.author_name,s=a.content;c+=`
        <li class="comment">
          <div class="author">${r}</div>
          <div class="content">${s}</div>
        </li>
    `}),$(".comment-list").html(c)}async function g(){try{return(await fetch("/asset/data/details.json")).json()}catch(e){console.log(e)}}async function y(){try{const t=new URLSearchParams(window.location.search).get("id");return Number(t)}catch(e){alert("fail load to member Id"),console.log(e)}}function h(e){const t=document.querySelector(".profile_image img");t.src=e.profileImageUrl||"./asset/images/default_profile_image.jpg",t.alt=`${e.name}의 프로필 이미지`;const o=document.querySelector(".profile_team_name");o.textContent=e.teamName||"팀 이름 없음";const c=document.querySelector(".profile_role");c.textContent=e.role||"역할 정보 없음";const n=document.querySelector(".profile_name");n.textContent=e.name||"이름 없음";const a=document.querySelectorAll(".image-row .image");e.images.forEach((r,s)=>{a[s]&&(a[s].style.backgroundImage=`url("${r}")`)})}async function w(){const e=await y(),o=(await g())[e-1];h(o)}w();u();
