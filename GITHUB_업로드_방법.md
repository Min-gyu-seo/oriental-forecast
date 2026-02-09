# GitHub에 홈페이지 올리기 (처음부터 자세히)

Git을 설치했다면, 아래 순서대로 **한 단계씩** 따라 하세요.

---

## 1단계: 터미널(명령창) 열기

**방법 A – Cursor에서**
- Cursor 프로그램 상단 메뉴에서 **터미널(Terminal)** → **새 터미널(New Terminal)** 클릭  
  또는  
- 키보드 **Ctrl + `** (백틱, 숫자 1 왼쪽 키) 누르기  

화면 아래쪽에 검은/흰 창이 열리면 성공입니다. 그곳에 명령어를 입력합니다.

**방법 B – Windows에서**
- **Windows 키** 누르고 `cmd` 입력 후 **명령 프롬프트** 앱 실행  
- 또는 **PowerShell** 로 열어도 됩니다.

---

## 2단계: 프로젝트 폴더로 이동하기

터미널에 **아래 한 줄**을 그대로 붙여넣고 **Enter** 를 누르세요.

```
cd "%USERPROFILE%\OneDrive\바탕 화면\웹사이트"
```

- `cd` = “이 폴더로 들어간다”는 뜻입니다.
- 붙여넣기: 터미널 창에서 **우클릭** 하면 보통 “붙여넣기”가 나옵니다. (또는 Ctrl + V)
- Enter를 누르면 **웹사이트** 폴더로 이동한 상태가 됩니다.
- 다음 줄에 경로가 `...\웹사이트>` 처럼 보이면 제대로 들어간 겁니다.

---

## 3단계: 이 폴더를 Git 저장소로 만들기

**아래 명령어를 한 줄씩** 입력하고, 매번 **Enter** 를 누르세요.

### 3-1. Git 저장소 초기화

```
git init
```

- “Initialized empty Git repository in ...” 같은 문구가 나오면 성공입니다.
- 이제 이 **웹사이트** 폴더가 “Git이 관리하는 프로젝트”가 된 겁니다.

### 3-2. 파일 모두 스테이징(올릴 목록에 넣기)

```
git add .
```

- 마지막의 **점(.)** 도 꼭 넣어야 합니다. “현재 폴더의 모든 파일”을 의미합니다.
- 아무 메시지가 안 나와도 정상입니다.

### 3-3. 첫 번째 “저장” 만들기 (커밋)

```
git commit -m "첫 커밋: 심리 궁합 웹사이트"
```

- `-m "..."` 안의 글자는 나중에 “이번에 뭘 올렸는지” 적어 둔 메모입니다. 바꿔도 됩니다.
- “X files changed”, “create mode ...” 같은 문구가 나오면 **첫 커밋**이 완료된 겁니다.

여기까지 하면 **내 컴퓨터 안**에서만 Git 저장소가 만들어져 있는 상태입니다.  
다음은 **인터넷(GitHub)** 에 올리는 단계입니다.

---

## 4단계: GitHub에서 새 저장소 만들기

1. **브라우저**를 열고 **https://github.com** 에 접속합니다.
2. **로그인**합니다. (계정이 없으면 **Sign up** 으로 가입)
3. **오른쪽 위**를 봅니다.
   - **+** 버튼(또는 초록색 **New** 버튼)을 클릭합니다.
   - 목록에서 **New repository** 를 클릭합니다.
4. **Repository name** 칸에 저장소 이름을 입력합니다.  
   - 예: `psychology-website` 또는 `my-website`  
   - 공백 없이 영문으로 쓰는 것이 좋습니다.
5. **Public** 이 선택되어 있는지 확인합니다.
6. **Create repository** (또는 **만들기**) 버튼을 클릭합니다.
7. 다음 화면이 나옵니다.
   - “…or push an existing repository from the command line” 이라는 **회색 박스**가 보일 겁니다.
   - 그 안에 **두 줄**이 있습니다.  
     - `git remote add origin https://github.com/여기계정이름/저장소이름.git`  
     - `git push -u origin main`
   - **첫 번째 줄**에 있는 **전체 주소**  
     `https://github.com/본인아이디/저장소이름.git`  
     를 **복사**해 두세요. (다음 단계에서 씁니다)

---

## 5단계: GitHub에 코드 올리기 (푸시)

다시 **Cursor 터미널**(또는 cmd)로 돌아옵니다.  
**웹사이트** 폴더로 이동한 상태에서(**2단계**에서 한 것) 아래를 **한 줄씩** 실행하세요.

### 5-1. GitHub 저장소를 “원격 저장소”로 연결

아래에서 **본인 저장소 주소** 부분만 4단계에서 복사한 주소로 **바꿔서** 입력합니다.

```
git remote add origin https://github.com/본인아이디/저장소이름.git
```

- `본인아이디` → GitHub 로그인 아이디  
- `저장소이름` → 4단계에서 만든 저장소 이름 (예: psychology-website)

예시:
```
git remote add origin https://github.com/hong-gildong/psychology-website.git
```

Enter 누르면, “이 컴퓨터의 Git”과 “GitHub 저장소”가 서로 연결됩니다.

### 5-2. 기본 브랜치 이름을 main으로

```
git branch -M main
```

한 번만 하면 됩니다. Enter 누릅니다.

### 5-3. 실제로 GitHub에 올리기

```
git push -u origin main
```

Enter를 누르면:

- **처음**이면 **로그인 창**이 뜰 수 있습니다.  
  - 브라우저에서 GitHub 로그인하거나  
  - 터미널에 아이디/비밀번호(또는 토큰) 입력하라고 나올 수 있습니다.  
  - 안내대로 로그인하면 됩니다.
- “Enumerating objects...”, “Writing objects... 100%” 같은 메시지가 나오고,  
  마지막에 **에러 없이** 끝나면 **성공**입니다.

---

## 6단계: 확인하기

- 브라우저에서 **방금 만든 GitHub 저장소 페이지**를 **새로고침**(F5) 합니다.
- **파일 목록**이 보이면 (예: `src`, `public`, `package.json` 등) **정상적으로 올라간 것**입니다.

---

## 요약 (한 번에 보기)

| 순서 | 할 일 | 명령어/행동 |
|------|--------|-------------|
| 1 | 터미널 열기 | Cursor: Ctrl+` 또는 메뉴 → 터미널 |
| 2 | 프로젝트 폴더로 이동 | `cd "%USERPROFILE%\OneDrive\바탕 화면\웹사이트"` |
| 3-1 | Git 초기화 | `git init` |
| 3-2 | 파일 추가 | `git add .` |
| 3-3 | 첫 커밋 | `git commit -m "첫 커밋: 심리 궁합 웹사이트"` |
| 4 | GitHub에서 저장소 만들기 | 브라우저 → github.com → New repository → 주소 복사 |
| 5-1 | 원격 연결 | `git remote add origin (복사한 주소)` |
| 5-2 | main 브랜치 | `git branch -M main` |
| 5-3 | 올리기 | `git push -u origin main` |

---

## 나중에 코드 수정했을 때

파일을 수정한 뒤, 다시 GitHub에 반영하려면 **프로젝트 폴더에서** 아래만 실행하면 됩니다.

```
git add .
git commit -m "수정한 내용 한 줄 요약"
git push
```

---

## 막히는 부분이 있으면

- **“git을 찾을 수 없습니다”** → Git 설치 후 **터미널을 완전히 닫았다가 다시 열고** 2단계부터 다시 시도해 보세요.
- **“권한 거부”, “Permission denied”** → GitHub 로그인(또는 토큰)이 필요합니다. 브라우저 로그인 창이 뜨면 그쪽에서 로그인하세요.
- **저장소 주소를 잘못 넣었다면**  
  `git remote remove origin`  
  입력한 뒤, 5-1 단계부터 올바른 주소로 다시 `git remote add origin (주소)` 하면 됩니다.
