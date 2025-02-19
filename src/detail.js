// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs, orderBy, query, Timestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

async function ykm() {
    // const firebaseConfig = response.json();
    // Firebase 인스턴스 초기화
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Firebase에 데이터 저장
    $("#postingbtn").click(async function () {

        let author = $('#author-name').val();

        let content = $('#comment-content').val();

        let timestamp = Timestamp.fromDate(new Date());  // 현재 시간 저장

        let doc = {
            'author_name': author,
            'content': content,
            'timestamp': timestamp
        }

        await addDoc(collection(db, "details"), doc);
        alert('작성완료!');
        window.location.reload();

    })

// Firebase에서 데이터 불러오기
    let docs = await getDocs(query(collection(db, "details"), orderBy("timestamp", "desc")));
    docs.forEach((doc) => {
        let row = doc.data();
        let author_data = row['author_name'];
        let content_data = row['content'];
        let date = row['timestamp'].toDate().toLocaleString();
        let temp_html = `
    <ul class="comment-list">
        <li class="comment">
          <div class="author">${author_data}</div>
          <div class="content">${content_data}</div>
          <small class="timestamp">${date}</small>
        </li>
    </ul>
    `;

        $('.comment-list').before(temp_html); // 기존 .comment-list의 바깥쪽 앞에 추가
    });
    

}

/**
 * 파일에서 회원 데이터 불러오기
 * member: {
 *     id: string,
 *     name: string,
 *     teamName: string,
 *     images: URL[]
 * }
 */
async function getMembers() {
    try {
        const response = await fetch('/asset/data/details.json')
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

/**
 * 쿼리 파라미터에서 회원 아이디 조회
 */
async function getMemberId() {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const memberId = queryParams.get('id');

        return Number(memberId);
    } catch (error) {
        alert('fail load to member Id');
        console.log(error);
    }
}

/**
 * 회원 데이터를 받아서 HTML 치환
 */
function insertHtml(member) {
    // 프로필 이미지 교체
    const profileImage = document.querySelector(".profile_image img");
    profileImage.src = member.profileImageUrl || "./asset/images/default_profile_image.jpg"; // 데이터가 없으면 기본 이미지 사용
    profileImage.alt = `${member.name}의 프로필 이미지`;


    // 팀 이름 교체
    const profileTeamName = document.querySelector(".profile_team_name");
    profileTeamName.textContent = member.teamName || "팀 이름 없음";


    // 역할(Roles) 교체
    const profileRole = document.querySelector(".profile_role");
    profileRole.textContent = member.role || "역할 정보 없음";


    // 조원 이름 교체
    const profileName = document.querySelector(".profile_name");
    profileName.textContent = member.name || "이름 없음";


    // 이미지 갤러리 업데이트
    const imageRows = document.querySelectorAll(".image-row .image");
    member.images.forEach((imageUrl, index) => {
        if (imageRows[index]) {
            imageRows[index].style.backgroundImage = `url("${imageUrl}")`;
        }
    });
}

async function loadMemberAndInsertHtml() {
    const memberId = await getMemberId();
    const members = await getMembers();
    const member = members[memberId - 1];

    insertHtml(member);
}

loadMemberAndInsertHtml()
ykm()