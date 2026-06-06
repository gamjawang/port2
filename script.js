const searchInput = document.getElementById('searchInput');
const menuBar = document.getElementById('menuBar');

// 엔터키 감지 이벤트
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // 새로고침 방지

        const value = searchInput.value.trim();
        
        // 입력값 새 창 열기
        if (value === '지뢰찾기') {
            window.open('minesweeper.html', '_blank', 'width=500,height=600');
        }
        if (value === '뱀게임') {
            window.open('snake.html', '_blank', 'width=520,height=600');
        }

        if (value === '손가락운동') {
            for (let i = 1000; i > 0; i--) {
            alert("손가락 운동 중... 남은 횟수: " + i + "번");
            }
            alert("축하합니다! 1000번의 운동이 끝났습니다.");
        }

        if (value === '포트폴리오' || value === '팀소개') {
            showResults(value);
        }
        searchInput.value = '';
    }
});

function toggleMenu() {
    menuBar.classList.toggle('show');
}

function openMinesweeper() {
    window.open('minesweeper.html', '_blank', 'width=500,height=600');
    menuBar.classList.remove('show'); // 팝업이 뜨면 메뉴바는 닫아주기
}
function openSnake() {
    window.open('snake.html', '_blank', 'width=520,height=600');
    menuBar.classList.remove('show'); // 팝업이 뜨면 메뉴바는 닫아주기
}

function openFinger() {
    for (let i = 1000; i > 0; i--) {
            alert("손가락 운동 중... 남은 횟수: " + i + "번");
            }
    
            alert("축하합니다! 1000번의 운동이 끝났습니다.");
}

const teamData = {
    '안성원':{
        git: "https://github.com/Anseongwon",
        blog: "https://blog.naver.com/asvvstudy"
    },
    '장주민':
        {
        git: "https://github.com/wpdl42",
        blog: "https://it-bookmark.tistory.com/"
    },
    '최윤성':
        {
        git: "https://github.com/ysysys91",
        blog: "https://note05863.tistory.com/"
    }
}

function team(type) {
    const searchResults = document.getElementById('searchResults');
    const data = teamData[type];
    const cardHTML = `
        <div class="social">
            <a href="${data.git}" target="_blank"><i class="ri-github-fill"></i></a>
            <a href="${data.blog}" target="_blank">Blog</a>
        </div>
    `;

    searchResults.innerHTML = cardHTML;
}

const searchData = {
    '포트폴리오': [
        {   
            url:"https://github.com/gamjawang",
            site: "https://github.com/gamjawang · 감자왕의 깃허브",
            title: "감자왕의 깃허브",
            snippet: "깃허브 입니다."
        },
        {   
            url:"https://blog.naver.com/true_playground",
            site: "https://blog.naver.com/true_playground · 나의 블로그",
            title: "나의 블로그",
            snippet: "블로그 입니다."
        },
        {   
            url:"https://blog.naver.com/true_playground/224307401282",
            site: "https://blog.naver.com/true_playground/224307401282 · 사이트 제작 과정",
            title: "사이트 제작과정",
            snippet: "이 사이트 어떻게 만들었을까 궁금하지 않습니까?"
        },

        {   
            url:"https://blog.naver.com/true_playground",
            site: "https://github.com/gamjawang · 지뢰찾기 제작 과정",
            title: "지뢰찾기 제작과정",
            snippet: "마지막으로 지뢰찾기 한게 언제더라."
        },
        {   
            url:"https://blog.naver.com/true_playground",
            site: "https://github.com/gamjawang · 뱀 게임 제작 과정",
            title: "뱀 게임 제작과정",
            snippet: "밤에 피리불면 뱀 나온다던데... 헉!"
        },

        {   
            url:"https://blog.naver.com/true_playground",
            site: "https://github.com/gamjawang · 손가락 운동 제작 과정",
            title: "손가락 운동 제작과정",
            snippet: "진짜 손가락 운동이 되는지는 미지수."
        }
    ],
    '팀소개': [
        {   
            url:"#",
            func:"team('안성원')",
            site: "https://팀 소개",
            title: "안성원 팀원을 소개합니다",
            snippet: "깃허브 링크와 블로그 링크"
        },
        {   
            url:"#",
            func:"team('장주민')",
            site: "https://팀 소개",
            title: "장주민 팀원을 소개합니다",
            snippet: "깃허브 링크와 블로그 링크"
        },
        {   
            url:"#",
            func:"team('최윤성')",
            site: "https://팀 소개",
            title: "최윤성 팀원을 소개합니다",
            snippet: "깃허브 링크와 블로그 링크"
        }
    ]
}

// 검색 결과를 화면에 뿌려주는 SPA 핵심 함수
function showResults(type) {
    const mainContainer = document.querySelector('.main-container');
    const searchResults = document.getElementById('searchResults');

    searchInput.value = type;
    //css
    document.body.classList.add('search-mode');
    mainContainer.classList.add('searched');

    const cardHTML = searchData[type].map(data => 
        {const target = data.func ? "" : 'target="_blank"';
        return `<div class="result-card">
            <div class="card-site">${data.site}</div>
            <a href="${data.url}" ${target} onclick="${data.func}"; class="card-title">${data.title}</a>
            <div class="card-snippet">${data.snippet}</div>
        </div> `;}).join('');
    
    searchResults.innerHTML = cardHTML;
    searchResults.classList.add('show');
    menuBar.classList.remove('show');
}

