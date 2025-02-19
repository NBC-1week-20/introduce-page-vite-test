import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs, orderBy, query, limit } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import members from "./memberData.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 최신 댓글 3개 불러오기
async function fetchLatestComments() {
    let commentsContainer = document.getElementById("comment-list");
    commentsContainer.innerHTML = "";  // 기존 댓글 초기화
    let docs = await getDocs(query(collection(db, "details"), orderBy("timestamp", "desc"), limit(3)));
    docs.forEach((doc) => {
        let row = doc.data();
        let author_data = row['author_name'];
        let content_data = row['content'];
        let date = row['timestamp'] ? row['timestamp'].toDate().toLocaleString() : "날짜 없음";
        let temp_html = `<p class="comment"><strong>${author_data}:</strong> ${content_data} <br> <small>${date}</small></p>`;
        commentsContainer.innerHTML += temp_html;
    });
}

window.onload = fetchLatestComments;

function memberCard(member) {
  return `
    <div class="member-card">
    <div class="member-wrap">
      <div class="member-left">
        <img
          class="card-pic"
          src="${member.image}"
          alt="Profile picture"/>
        <p class="card-name">${member.name}</p>
        <a href="./details.html?id=${member.id}">
          <button class="detail-btn">자세히 보기</button>
        </a>
      </div>
      <div class="member-right">
        <p class="member-desc">${member.description}</p>
      </div>
    </div>
  </div>
    `;
}

const memberSection = document.getElementById("member-section");
members.forEach((member) => {
  memberSection.innerHTML += memberCard(member);
});

const foldMember = document.getElementById("member-fold-btn");
foldMember.addEventListener("click", toggleMember);

const foldComments = document.getElementById("comment-fold-btn");
foldComments.addEventListener("click", toggleComment);

const moveToComment = document.getElementById("moveToComments");

function toggleMember() {
  const memberArea = document.getElementById("member-section");
  const memberBtn = document.getElementById("member-fold-btn");
  if (memberArea.style.display === "none") {
    memberArea.style.display = "flex";
    memberBtn.style.color = "#E8344E";
    moveToComment.style.display = "block"
  } else {
    memberArea.style.display = "none";
    memberBtn.style.color = "rgb(77, 77, 77)";
    moveToComment.style.display = "none"

  }
}

const commentTitle = document.getElementById("newcomments");

function toggleComment() {
    const commentBtn = document.getElementById("comment-fold-btn");
    const commentArea = document.getElementById("comment-list");

    if (commentArea.style.display === "none") {
        commentArea.style.display = "flex";
        commentBtn.style.color = "#E8344E";
    } else {
        commentArea.style.display = "none";
        commentBtn.style.color = "rgb(77, 77, 77)";
    }
  }
  

  moveToComment.addEventListener("click", () => {
    commentTitle.scrollIntoView({ behavior: "smooth", block: "start" });
  });


