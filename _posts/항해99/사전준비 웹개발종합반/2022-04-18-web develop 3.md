## 1-12

<br>

### 1. Javascript?

- 모든 브라우저는 기본적으로 Javascript 사용 (약속)
- Java와 Javascript는 관련이 없음.

<br><br><br>

### 2. 자바스크립트 기초

```python
<script>
        function hey(){
            alert('안녕!');
        }
    </script>
```

```python
<button onclick="hey()">영화 기록하기🔥</button>
```

![자바스크립트 기초](https://user-images.githubusercontent.com/98236458/163781198-3cc1e22d-fb24-476b-a5b6-9f6de71ad3ef.PNG)

![자바스크립트 기초2](https://user-images.githubusercontent.com/98236458/163781235-e3d87989-cad6-4c92-a6a3-b19e917e561a.PNG)

<br><br><br>

## 1-13~14

<br>

### 1. 개발자 도구

- 크롬 창 우클릭 > 검사 > console

<br><br><br>

### 2. 변수

- 지정 : let

- ![자바스크립트 변수](https://user-images.githubusercontent.com/98236458/163785076-deeb1f8c-a57e-4582-abc2-cd4dcd3aa256.PNG)

<br><br><br>

### 3. 자료형(list)

- 리스트 선언
```python
let list_name = [0, 1, 'name', 3] #숫자, 단일문자는 그냥 선언, 문자열 '' 사용.
```
- 출력
```python
list_name[0] #앞에서부터 0번째.
```
- 추가
```python
list_name.push('Hi') #list_name 마지막에 'Hi' 추가.
```

- ![자바스크립트 자료형 리스트](https://user-images.githubusercontent.com/98236458/163785743-efea43fa-142c-495f-8d68-bd8c670f298d.PNG)

<br><br><br>

### 4. 자료형(dict)

- 딕셔너리 선언
```python
let dict_name = {'name':'YS', 'age':27} #숫자, 단일문자는 그냥 선언, 문자열 '' 사용.
```
- 출력
```python
dict_name['name'] #YS 출력
dict_age['age'] #27출력
```
- 추가
```python
dict_name['height'] = 173
```

- ![자바스크립티 자료형 딕셔너리](https://user-images.githubusercontent.com/98236458/163788540-064caae1-615c-4b64-84ed-83a40f8b0566.PNG)

<br><br><br>

### 5. 함수(split)

- 사용
```python
myemail.split('@') #@를 기준으로 좌우 나눔.
```
- ![함수 split](https://user-images.githubusercontent.com/98236458/163789599-189b030e-d857-422f-be75-ec124423417e.PNG)

<br><br><br>

### 6. 함수

- 함수 : 정해진 동작을 하는 것
- alert 사용 시 흰화면이 뜬 이유 : 위에서부터 차례대로 읽는데 화면이 읽히기 전에 alert 됨.

- 
```python
function sum(a,b){
    console.log(a+b)
}
```
- ![함수 sum](https://user-images.githubusercontent.com/98236458/163793972-e359fd1e-372c-435d-835d-272dfab030aa.PNG)

- 
```python
function sum(a,b){
    alert('계산을 하자')
    return a+b
}
let result = sum(2,3)
alert(result)
```
- ![result 1](https://user-images.githubusercontent.com/98236458/163794336-322758a5-b24f-4e32-92f5-5e23eea4716e.PNG)
- ![result 2](https://user-images.githubusercontent.com/98236458/163794362-034fcd73-9e72-4663-b4fa-700a1ce5706c.PNG)

- 
```python
function sum(a,b){
    console.log('계산을 하자')
    return a+b
}
let result = sum(2,3)
console.log(result)
```
- ![console](https://user-images.githubusercontent.com/98236458/163794714-4f4c5d40-d61c-43a8-9972-d39ef234b4e4.PNG)

<br><br><br>

### 7. 조건문

- 
```python
function is_adult(age){
    if (age > 20) {
        alert('성인입니다')
    } else {
        alert('청소년입니다')
    }
}
```
- ![반복문 나이](https://user-images.githubusercontent.com/98236458/163798156-8b7c6f5f-b025-465f-83b7-f6613287546d.PNG)
- ![반복문 나이 25](https://user-images.githubusercontent.com/98236458/163798173-911897a0-ba20-46b6-90a2-10bc1b193451.PNG)

<br><br><br>

### 8. 반복문

- i = 0 으로 지정.
- i 가 a_list의 길이, 즉 4가 될때까지 1씩 증가하며 반복 출력

- 
```python
let a_list = ['사과', '배', '감', '딸기']
for (let i = 0; i < a_list.length; i++) {
console.log(a_list[i])
}
```
- ![반복문 기초](https://user-images.githubusercontent.com/98236458/163799036-595ad462-59d3-4739-bcc5-87a16356e2f4.PNG)

- 예제2
```python
let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])
}
```
- ![예제2](https://user-images.githubusercontent.com/98236458/163799351-3a7c752e-1d13-4873-b2a6-9f0649e90257.PNG)

- 예제2 점수만
```python
let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]['score'])
}
```
- ![예제2 점수만](https://user-images.githubusercontent.com/98236458/163799908-458c7c7d-819a-440e-91e0-9fe49cd1cefb.PNG)

- 예제2 70점 이상
```python
let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]
for (let i = 0; i < scores.length; i++) {
    if (scores[i]['score'] > 70){
        console.log(scores[i]['name'])
    }
}
```
- ![예제2 70점 이상만](https://user-images.githubusercontent.com/98236458/163800438-95584ee2-5d9f-47cd-8423-3df322662afb.PNG)

<br><br><br>

## 1-15

<br>

### 1. Javascript 연습하기

- 미세먼지 : 'IDEX_MVL'
- 지역구 : 'MSRSTE_NM'

- 미세먼지 수치 40보다 낮은 치역구 출력
```python
let mise_list = [
{
MSRDT: "201912052100",
MSRRGN_NM: "도심권",
MSRSTE_NM: "중구",
PM10: 22,
PM25: 14,
O3: 0.018,
NO2: 0.015,
CO: 0.4,
SO2: 0.002,
IDEX_NM: "좋음",
IDEX_MVL: 31,
ARPLT_MAIN: "O3",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "도심권",
MSRSTE_NM: "종로구",
PM10: 24,
PM25: 18,
O3: 0.013,
NO2: 0.016,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 39,
ARPLT_MAIN: "PM25",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "도심권",
MSRSTE_NM: "용산구",
PM10: 0,
PM25: 15,
O3: 0.012,
NO2: 0.027,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "점검중",
IDEX_MVL: -99,
ARPLT_MAIN: "점검중",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서북권",
MSRSTE_NM: "은평구",
PM10: 36,
PM25: 14,
O3: 0.019,
NO2: 0.018,
CO: 0.5,
SO2: 0.005,
IDEX_NM: "좋음",
IDEX_MVL: 42,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서북권",
MSRSTE_NM: "서대문구",
PM10: 28,
PM25: 9,
O3: 0.018,
NO2: 0.015,
CO: 0.6,
SO2: 0.004,
IDEX_NM: "좋음",
IDEX_MVL: 37,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서북권",
MSRSTE_NM: "마포구",
PM10: 26,
PM25: 8,
O3: 0.012,
NO2: 0.021,
CO: 0.5,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 36,
ARPLT_MAIN: "NO2",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "광진구",
PM10: 17,
PM25: 9,
O3: 0.018,
NO2: 0.016,
CO: 0.6,
SO2: 0.001,
IDEX_NM: "좋음",
IDEX_MVL: 31,
ARPLT_MAIN: "O3",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "성동구",
PM10: 21,
PM25: 12,
O3: 0.018,
NO2: 0.017,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 33,
ARPLT_MAIN: "PM25",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "중랑구",
PM10: 27,
PM25: 10,
O3: 0.015,
NO2: 0.019,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 34,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "동대문구",
PM10: 26,
PM25: 9,
O3: 0.016,
NO2: 0.017,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 34,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "성북구",
PM10: 27,
PM25: 8,
O3: 0.022,
NO2: 0.014,
CO: 0.5,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 37,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "도봉구",
PM10: 25,
PM25: 12,
O3: 0.024,
NO2: 0.011,
CO: 0.3,
SO2: 0.002,
IDEX_NM: "좋음",
IDEX_MVL: 41,
ARPLT_MAIN: "O3",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "강북구",
PM10: 30,
PM25: 15,
O3: 0.022,
NO2: 0.02,
CO: 0.4,
SO2: 0.002,
IDEX_NM: "좋음",
IDEX_MVL: 39,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동북권",
MSRSTE_NM: "노원구",
PM10: 21,
PM25: 14,
O3: 0.017,
NO2: 0.016,
CO: 0.4,
SO2: 0.004,
IDEX_NM: "좋음",
IDEX_MVL: 36,
ARPLT_MAIN: "PM25",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "강서구",
PM10: 36,
PM25: 16,
O3: 0.021,
NO2: 0.013,
CO: 0.4,
SO2: 0.004,
IDEX_NM: "좋음",
IDEX_MVL: 42,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "구로구",
PM10: 23,
PM25: 10,
O3: 0.022,
NO2: 0.016,
CO: 0.3,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 37,
ARPLT_MAIN: "O3",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "영등포구",
PM10: 29,
PM25: 15,
O3: 0.01,
NO2: 0.022,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 41,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "동작구",
PM10: 29,
PM25: 15,
O3: 0.012,
NO2: 0.023,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 41,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "관악구",
PM10: 27,
PM25: 12,
O3: 0.012,
NO2: 0.022,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 37,
ARPLT_MAIN: "NO2",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "금천구",
PM10: 25,
PM25: 15,
O3: 0.015,
NO2: 0.02,
CO: 0.4,
SO2: 0.004,
IDEX_NM: "좋음",
IDEX_MVL: 43,
ARPLT_MAIN: "PM25",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "서남권",
MSRSTE_NM: "양천구",
PM10: 0,
PM25: 14,
O3: 0.016,
NO2: 0.017,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "점검중",
IDEX_MVL: -99,
ARPLT_MAIN: "점검중",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동남권",
MSRSTE_NM: "강남구",
PM10: 31,
PM25: 16,
O3: 0.018,
NO2: 0.018,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 39,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동남권",
MSRSTE_NM: "서초구",
PM10: 34,
PM25: 13,
O3: 0.024,
NO2: 0.019,
CO: 0.3,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 41,
ARPLT_MAIN: "PM10",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동남권",
MSRSTE_NM: "송파구",
PM10: 25,
PM25: 6,
O3: 0.014,
NO2: 0.025,
CO: 0.4,
SO2: 0.003,
IDEX_NM: "좋음",
IDEX_MVL: 42,
ARPLT_MAIN: "NO2",
},
{
MSRDT: "201912052100",
MSRRGN_NM: "동남권",
MSRSTE_NM: "강동구",
PM10: 24,
PM25: 14,
O3: 0.016,
NO2: 0.02,
CO: 0.4,
SO2: 0.002,
IDEX_NM: "좋음",
IDEX_MVL: 39,
ARPLT_MAIN: "PM25",
},
];
for (let i = 0; i < mise_list.length; i++) {
    if(mise_list[i]['IDEX_MVL'] < 40) {
        console.log(mise_list[i]['MSRSTE_NM'])
    }
}
```

- ![미세먼지 40](https://user-images.githubusercontent.com/98236458/163952373-bd315b6b-8998-4101-9b9d-5c08466cf593.PNG)

