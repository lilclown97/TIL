--- 

title: "[항해99] 웹개발종합반 #5" 
excerpt: "웹개발 종합반 2-1~5 JQuery" 
categories: [Web develop]
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/categories/#notice)**
{: .notice--danger}

<br><br><br>

## 2-1

<br>

### 1. Javascript 연습

- 홀수 짝수 onclick
```python
let count = 0
function hey() {
    count += 1
    if (count % 2 == 0) {
        alert ('짝수입니다!')
    } else {
        alert ('홀수입니다!')
    }
}
```

- ![홀수](https://user-images.githubusercontent.com/98236458/164151167-85414b05-66c1-4863-8d7d-1f667b8029c3.PNG)

- ![짝수](https://user-images.githubusercontent.com/98236458/164151188-ac8acb09-e138-4754-aea3-53c23710eb09.PNG)

<br><br><br>

## 2-2~3

<br>

### 1. jQuery?

- HTML 요소들을 조작하는 편리한 Javascript를 미리 작성해둔 라이브러리 ex) 부트스트랩

<br><br><br>

### 2. jQuery 사용법

- class 대신 id 사용

- head에 코드 추가
```python
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

<br><br><br>

### 3. val

- val 입력
```python
$('#url').val('입력을 하고 싶다')
```

- ![val 1](https://user-images.githubusercontent.com/98236458/164153282-c6c69ea8-4913-410f-89c2-040748a9c4f2.PNG)


- val 입력 값 가져오기
```python
$('#url').val()
```

- ![val2](https://user-images.githubusercontent.com/98236458/164153332-b58b3869-9120-4900-8a6e-aa42fc6d9d2e.PNG)


<br><br><br>

### 4. hide, show

- hide
```python
$('#post-box').hide()
```

- ![hide](https://user-images.githubusercontent.com/98236458/164153690-77ff88cc-ea76-4acb-a737-6402b6fee79f.PNG)

- show
```python
$('#post-box').show()
```

- ![show](https://user-images.githubusercontent.com/98236458/164153711-b7ae3d92-a2b8-4829-a5a2-1cf63a564cb3.PNG)

<br><br><br>

### 5. append

- 작은 따옴표가 아님. ' (X), ` (O)

- append 버튼 만들기
```python
let temp_html = `<button>나는 버튼이다</button>`
```
```python
$('#cards-box').append(temp_html)
```

- ![append 1](https://user-images.githubusercontent.com/98236458/164154386-4b32e242-fc4a-40cd-824f-c06e1955a131.PNG)
- ![append 2](https://user-images.githubusercontent.com/98236458/164154399-de0fabe5-27f2-4918-a16a-22a9750c0b8b.PNG)

- append 카드 추가
```python
let temp_html = ` <div class="col">
                <div class="card">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">여기에 제목이 들어갑니다.</h5>
                        <p class="card-text">여기에 내용이 들어가지요.</p>
                        <p>⭐⭐⭐</p>
                        <p class="mycomment">여기에 코멘트가 들어갑니다.</p>
                    </div>
                </div>
            </div>`
```
```python
$('#cards-box').append(temp_html)
```

- ![append3](https://user-images.githubusercontent.com/98236458/164154785-f6032f42-d85e-42e1-b7b9-319e518fee28.PNG)
- ![append4](https://user-images.githubusercontent.com/98236458/164154811-f9b7811e-8662-4ad3-bd09-f277f3d62b96.PNG)

<br><br><br>

## 2-4~5

<br>

### 1. JQuery 적용하기

- 포스팅 박스
```python
function open_box() {
    $('#post-box').show()
}
function close_box() {
    $('#post-box').hide()
}
```

- ![열기](https://user-images.githubusercontent.com/98236458/164395448-1c2d50e7-745a-4a69-aa35-ba12f624d840.PNG)
- ![닫기](https://user-images.githubusercontent.com/98236458/164395479-5191afde-89ec-4799-8015-2990ddeca97d.PNG)

<br><br><br>

### 2. Quiz_JQuery 연습하기

- 빈칸 체크 함수 만들기

```python
function q1() {
    let text = $('#input-q1').val()
    if (text == '') {
        alert('입력하세요!')
    } else {
        alert(text)
    }
}
```

- ![입력하세요](https://user-images.githubusercontent.com/98236458/164409311-9113e89f-76c8-446d-9a96-6f8c070eec17.PNG)
- ![asd](https://user-images.githubusercontent.com/98236458/164409371-741b6750-9914-4ec0-b972-b4a797d1537f.PNG)

- 이메일 판별 함수 만들기

```python
function q2() {
    let email = $('#input-q2').val()
    if (email.includes('@')) {
        let domain = email.split('@')[1].split('.')[0];
        alert(domain)
    } else {
        alert('이메일이 아닙니다.')
    }
}
```

- ![이메일이 아닙니다](https://user-images.githubusercontent.com/98236458/164409549-3c5c781e-1b88-47a8-b1d8-5324f8749a67.PNG)
- ![naver](https://user-images.githubusercontent.com/98236458/164409570-13de4326-a3ab-464f-87e5-675dce6c0ec0.PNG)


- HTML 붙이기/지우기 연습

```python
function q3() {
    let name = $('#input-q3').val()
    let temp_html = `<li>${name}</li>`
    $('#names-q3').append(temp_html)
}

function q3_remove() {
    $('#names-q3').empty()
}
```

- ![윤영성](https://user-images.githubusercontent.com/98236458/164409798-d8a90a60-2908-4510-8a65-c5ebbbd10393.PNG)
- ![지우기](https://user-images.githubusercontent.com/98236458/164409835-f5e635fd-3815-4bd3-9eca-18827c15ccad.PNG)

<br><br><br>

### 3. Quiz_JQuery 답안

```python
function q1() {
    let value = $('#input-q1').val();
    if (value == '') {
        alert('입력하세요!');
    } else {
        alert(value);
    }
}

function q2() {
    let email = $('#input-q2').val();
    if (email.includes('@')) {
        let domainWithDot = email.split('@')[1];
        let onlyDomain = domainWithDot.split('.')[0];
        alert(onlyDomain);
    } else {
        alert('이메일이 아닙니다.');
    }
}

function q3() {
    let newName = $('#input-q3').val();
    if (newName == '') {
        alert('이름을 입력하세요');
        return;
    }
    let temp_html = `<li>${newName}</li>`;
    $('#names-q3').append(temp_html);
}

function q3_remove() {
    $('#names-q3').empty();
}
```

<br><br><br>

### 4. 리뷰

- includes : 특정 문자열이 포함되어 있으면 true 출력

- 변수명은 알아볼 수 있도록 직관적이게.

- function q2 차이점. **어떤게 더 좋은 코드인지는 아직 모르겠음.**{: .notice--danger}

- 작성
```python
if (email.includes('@')) {
    let domain = email.split('@')[1].split('.')[0];
    alert(domain)
```
- 답안
```python
if (email.includes('@')) {
    let domainWithDot = email.split('@')[1];
    let onlyDomain = domainWithDot.split('.')[0];
    alert(onlyDomain);
```

- function q2 궁금점. **이메일 주소를 도메인으로 split 하는 과정이 if문 위에서 진행되면 else가 실행되지 않음.**{: .notice--danger}

- function q3 차이점. 설명대로 이름이 나오고 지워지는 버튼만 만들었으나 답안에는 아무것도 입력되지 않았을때는 이름이 추가 되지 않고 이름을 입력하라는 메세지창 출력.