--- 

title: "[항해99] 웹개발종합반 #6" 
excerpt: "웹개발 종합반 2-6~11 Ajax" 
categories: [Web develop]
tag: [항해99, 사전준비, 웹개발종합반] 

---

**[Notice[공지사항]](https://lilclown97.github.io/notice/Notice1/)**
{: .notice--danger}

<br><br><br>

## 2-6 서버-클라이언트 통신 이해하기

<br>

### 1. JSON

- Key, value(dict, list)로 구성
- ![Untitled](https://user-images.githubusercontent.com/98236458/164431724-95d5818f-3428-469a-b6e9-cfd160019a09.png)

- [서울시 OpenAPI](http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99)
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=ko)

- 기본 형태
![서울이 API](https://user-images.githubusercontent.com/98236458/164430958-3571c60d-e34a-471e-88cd-80da6e550222.PNG)

- JSONView 사용 시
![json](https://user-images.githubusercontent.com/98236458/164431266-9e698afb-39e0-4410-87e7-23d1d357116d.PNG)

<br>

### 2. GET, POST

- GET : 데이터 조회(Read)

- POST : 데이터 생성(Creat), 변경(Update), 삭제(Delete)

- GET 예시
```python
https://movie.naver.com/movie/bi/mi/basic.nhn?code=161967
```
서버 주소: https://movie.naver.com/movie/bi/mi/basic.nhn<br>
영화 정보: code=161967

- GET 예시2
```python
google.com/search?q=아이폰&sourceid=chrome&ie=UTF-8
```
google.com/search<br>
q=아이폰 (검색어)<br>
sourceid=chrome (브라우저 정보)<br>
ie=UTF-8 (인코딩 정보)

<br><br><br>

## 2-7 Ajax 시작하기

<br>

### 1. Ajax 기본 골격

- 기본 골격
```python
$.ajax({
  type: "GET",
  url: "여기에URL을입력",
  data: {},
  success: function(response){
    console.log(response)
  }
})
```

<br>

### 2. Ajax 사용하기

- 구이름, 미세먼지 수치 출력
```python
$.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/seoulair",
    data: {},
    success: function (response) {
        let rows = response['RealtimeCityAir']['row']
        for (let i = 0; i < rows.length; i++) {
            let gu_name = rows[i]['MSRSTE_NM'] #rows의 i번째의 'MSRSTE_NM'
            let gu_mise = rows[i]['IDEX_MVL'] #rows의 i번째의 'IDEX_MVL'
            console.log(gu_name, gu_mise)
        }
    }
})
```

<br><br><br>

## 2-8 Ajax 함께 연습하기

<br>

### 1. 서울시 OpenAPI로 연습

- [서울시 미세먼지 OpenAPI](http://spartacodingclub.shop/sparta_api/seoulair)
- 업데이트 버튼을 누르면 서울시 미세먼지 값 append, 70 이상인 곳은 빨간색으로.

- style
```python
.bad {
    color: red;
}
```

- script
```python
function q1() {
    $('#names-q1').empty()
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/seoulair",
        data: {},
        success: function (response) {
            let rows = response['RealtimeCityAir']['row']
            for (let i = 0; rows.length; i++) {
                let gu_name = rows[i]['MSRSTE_NM']
                let gu_rise = rows[i]['IDEX_MVL']

                let temp_html = ``

                if (gu_rise >= 70) {
                    temp_html = `<li class="bad">${gu_name} : ${gu_rise}</li>`
                } else {
                    temp_html = `<li>${gu_name} : ${gu_rise}</li>`
                }

                $('#names-q1').append(temp_html)
            }
        }
    })
}
```

- ![서울시 미세먼지](https://user-images.githubusercontent.com/98236458/164503318-7cefbf4e-e448-40e8-b511-97c45d1fe36e.PNG)
![서울시 미세먼지 출력](https://user-images.githubusercontent.com/98236458/164503334-17af4f5a-2c66-4425-909f-a55140baed34.PNG)

<br><br><br>

## 2-9 Quiz_Ajax 연습하기(1)

<br>

### 1. 서울시 OpenAPI로 연습

- [서울시 따릉이 OpenAPI](http://spartacodingclub.shop/sparta_api/seoulbike)
- 자전거 대수 5보다 적으면 빨간색.

- style
```python
.urgent {
    color: red;
}
```

- script
```python
function q1() {
    $('#names-q1').empty()
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/seoulbike",
        data: {},
        success: function (response) {
            let rows = response['getStationList']['row']
            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['stationName']
                let rack = rows[i]['rackTotCnt']
                let bike = rows[i]['parkingBikeTotCnt']

                let temp_html = ``
                if (bike < 5) {
                    temp_html = `<tr class="urgent">
                                    <td>${name}</td>
                                    <td>${rack}</td>
                                    <td>${bike}</td>
                                </tr>`
                } else {
                    temp_html = `<tr>
                                    <td>${name}</td>
                                    <td>${rack}</td>
                                    <td>${bike}</td>
                                </tr>`
                }

                $('#names-q1').append(temp_html)
            }
        }
    })
}
```

- ![서울시 따릉이](https://user-images.githubusercontent.com/98236458/164507423-f100237b-194f-41cd-b270-b5029c6727ec.PNG)
![서울시 따릉이 출력](https://user-images.githubusercontent.com/98236458/164507445-f07a6d18-d143-4b10-9d5f-03cf49b52c89.PNG)

<br><br><br>

## 2-10 Quiz_Ajax 연습하기(2)

<br>

### 1. 랜덤 르탄이 API로 연습

- [랜텀 르탄이 API](http://spartacodingclub.shop/sparta_api/rtan)
- 사진과 텍스트가 버튼을 누를때마다 변경

- script
```python
function q1() {
$.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/rtan",
        data: {},
        success: function (response) {
            let url = response['url']
            let msg = response['msg']

            $('#img-rtan').attr('src',url) #이미지 바꾸기
            $('#text-rtan').text(msg) #텍스트 바꾸기
        }
    })
}
```

- ![르탄이](https://user-images.githubusercontent.com/98236458/164510484-bb919ad5-7611-4f2f-8bec-56f7e9527a16.PNG)
- ![르탄이 바꾸기](https://user-images.githubusercontent.com/98236458/164510504-efc1ef3e-5c26-44ea-a631-87c19f13d297.PNG)