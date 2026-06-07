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


const teamPageData = {
    '팀페이지': [{
        name:"중간",
        page:"https://neocore-three.vercel.app/",
        intro:"인공지능(AI)의 역사, 일상 속 활용, 그리고 보안 기술을 대중에게 소개하는 정보 제공용 웹진입니다. 1950년대 튜링 테스트부터 최신 LLM(GPT-3)까지의 AI 발전사와 의료·자율주행 등 실생활 적용 사례를 시각적인 카드로 보여줍니다. 또한 데이터 공격이나 적대적 공격 같은 AI 대상의 보안 위협과 이에 대응하는 방어 기술을 함께 다루고 있습니다. 전체적으로 라이트/다크 모드 전환 기능을 갖춘 깔끔하고 직관적인 반응형 UI로 구성되어 있습니다."
    },

    {
        name:"기말",
        page:"https://neo-core-ai.vercel.app/",
        intro:"인공지능(AI)의 역사, 일상 속 활용, 보안 기술을 소개하는 정보 제공용 웹진에서 한 단계 나아가, 사용자가 직접 AI 알고리즘을 경험할 수 있는 복합 체험 플랫폼입니다. 이 사이트는 Transformers.js 라이브러리를 활용해 서버 없이 브라우저 내에서 텍스트의 유해성과 피싱 위협을 실시간으로 판별하는 'AI 스캔' 기능과 틱택토 및 숫자 맞추기 게임을 통해 알고리즘 원리를 익히는 'AI 게임' 서비스를 제공합니다. 또한 생성형 AI의 환각 현상이나 개인정보 유출 주의점, 구체적인 프롬프트 작성법과 같은 실용적인 가이드를 포함하고 있으며, 다크/라이트 테마 기억 기능과 일관된 탭 전환 기술을 적용하여 사용자 편의성을 높인 반응형 웹사이트입니다."
    }]
}

const teamData = {
    '안성원':
    {
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
            url:"https://blog.naver.com/true_playground/224307732449",
            site: "https://blog.naver.com/true_playground/224307732449 · 지뢰찾기 제작 과정",
            title: "지뢰찾기 제작과정",
            snippet: "마지막으로 지뢰찾기 한게 언제더라."
        },
        {   
            url:"https://blog.naver.com/true_playground/224307759370",
            site: "https://blog.naver.com/true_playground/224307759370 · 뱀 게임 제작 과정",
            title: "뱀 게임 제작과정",
            snippet: "밤에 피리불면 뱀 나온다던데... 헉!"
        },

        {   
            url:"https://blog.naver.com/true_playground",
            site: "https://blog.naver.com/true_playground/224307845309 · 손가락 운동 제작 과정",
            title: "손가락 운동 제작과정",
            snippet: "진짜 손가락 운동이 되는지는 미지수."
        }
    ],
    '팀소개': [
        {
            url:"#",
            func:"teamPage('팀페이지')",
            site: "https://팀페이지",
            title: "팀페이지를 소개합니다",
            snippet: "팀페이지 소개 링크 모음"
        },
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

function teamPage(type) {
    const searchResults = document.getElementById('searchResults');
    const data = teamPageData[type];
    const cardHTML = teamPageData[type].map(data =>`
        <div class="result-card">
            <div class="card-site">${data.page}</div>
            <a href="${data.page}" target="_blank" class="card-title">${data.name}페이지 바로가기</a>
            <div class="card-snippet">${data.intro}</div>
        </div>
    `).join('');

    searchResults.innerHTML = cardHTML;
}

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

