# 코드잇 8주차 미션

이번 미션에서는 구현자체가 어려운건 아니였지만, 생각을 좀 많이 해야하는 부분이 많았다.
우선 내가 좀 힘들었던 점을 정리해봤고 이번 미션에서는 내가 안써본 것과 구조에 대해 굉장히 생각을 많이해서 도움이 되었다.

- styled-components
- 로딩 처리
- 폴더 구조
- 경고창 UI (코드잇에서 제공하는 디자인 파일로만 사용하는건 뭔가.. UX, UI적으로 좋지 않다고 생각했다.)이다.

# styled-components

7주차에 했던 전통방식의 CSS들을 styled-components로 변경을 했다.

나는 개인적으로 styled-components를 별로 안좋아한다... 컴포넌트 파일 자체가 커지는게 싫었다.

그래서 styled-components에 대해 막 찾아봤는데 내가 알던것과는 다르게 스타일들을 분리할 수 있었다.

생각해보니 styled-components도 결국은 값(컴포넌트)이다. 값으로 평가되는데 export가 안 될 이유가 없다.

나는 styled-components를 이렇게 사용했다.

👉 styles폴더를 만들어서 전역적인 스타일들을 관리하자. (굳이 styles 폴더인데 style.js를 붙인이유는 import할 때에도 명확함을 주기 위해서다.)

👉 styled-reset 라이브러리를 사용해 브라우저마다 차이가 있는 스타일을 맞춰주었다.

👉 컴포넌트에 스타일을 추가하지말고 컴포넌트명.style.js 라는 파일을 만들어 import 했다. (style 이라는것을 명확하게 해주기 위해)

👉 S-Dot을 네이밍을 사용했고, 막 사용하는것보단 최대한 중첩되어있는 상위 요소들에게만 적용했다.(중첩되어있을 때)

❗️createGlobalStyle로 폰트를 설정하면 리랜더링시에 폰트를 계속 다운받는 이슈가 있다. (폰트는 따로 css파일로 import해서 불러오자.)

---

# 로딩 처리

이번 폴더 미션같은 경우에는 한 페이지에 API를 두번 받아와야한다. 폴더 카테고리 API와 링크 API다.

나는 이전 7주차 미션 때 로딩 스피너를 넣었다. 일관성있는 디자인과 사용자 경험을 위해 로딩 스피너로 보여주려고 했지만 여기서 문제가 드러난다.

폴더 카테고리와 링크들을 각각 로딩 스피너를 보여줄건지 아니면 한번에 로딩처리를 할 것인지에 대한 문제다.

사실 이 문제는 쉽다. 각각 fetch로 불러오거나 한번에 로딩처리를 할거라면 Promise.all을 사용하면 된다.

어느정도 고민한 후에 결국은 두개의 로딩 스피너를 사용했다. 이유는 혹시나 요청이 느리게 온다라고 했을 때 안보였다가 갑자기 훅 보이면 UX적으로 별로라고 생각했기 때문이다.

그리고 API 자체가 1초도 안걸리기 때문에 어느 방법을 선택하든 상관없지만 이부분은 멘토님의 의견도 물어봐야겠다.

---

# 폴더 구조

거의 작업이 끝나갈 무렵 내 폴더를 보는데 그냥 보기 싫었다. 그래도 괜찮다고 깔끔하다고 말해준 사람도 있었지만 내가 마음에 안들었다.

가장 마음에 안드는것은 components 폴더다. components 폴더는 어느곳에서 사용할 수 있는 곳인데. 작업을하면 할 수록 공통적인게 아닌 페이지를 위한 폴더가 되어가고 있었다.

아직 페이지도 두개밖에 없어서 상관은 없었지만 나중에는 못할 것 같았다. 그래서 내가 적용한 방법은 features라는 폴더를 하나만들어 페이지 기능단위의 컴포넌트들을 따로 관리할 수 있게 만들고,

context, hooks와 같은 특정 페이지에서만 사용할 수 있는 기능들을 같이 만들 수 있게 적용했다. 이렇게 하니까 components 폴더에는 어디서든 사용할 수 있는 즉 재사용성이 높은 컴포넌트들만 남아있었다.

이 방법의 좋은 점은 정말 공통적인 컴포넌트와 특정 페이지에서만 사용하는 컴포넌트 분리가되기 때문에 pages 폴더나 파일들이 더러워지지 않는다. (깔끔해진다!)

지금은 너무 오버엔지니어링이 아닌가 싶다. 나는 이러한 방법을 사용해본적은 없었기 때문에 경험해보면 좋을것 같아 사용했다.

(관심있는분들은 react folder structure 검색 해보면 자료 많이 나옵니다!)

---

# 경고창 UI

나는 코드잇 미션에서 제공해주는 디자인만 하는것보단 여기에 내 생각을 더해서 하나하나씩 더 만들어가는게 재밌고 좋은방향이라 생각한다.

왜냐하면 무엇인가를 만든다는것은 더 생각을 해야하기 때문이다. 나는 데이터가 없다라는 문구만 보여주는건 요즘 시대와 맞지 않다고 생각을해서

경고창 UI를 찾으려고 시간 투자를 많이했다... 내 마음대로 (그냥 핀터레스트 배꼈다) 커스텀 했다. 컬러감에서 주는 느낌과 UI형태를 추가만 해줬을 뿐이지만 사이트의 퀄리티는 더 살아나는것 같았다.

이런것들이 나중에 디자이너나, 기획자와 소통할 때 장점은 무조건 있지 않을까 생각한다.

---
