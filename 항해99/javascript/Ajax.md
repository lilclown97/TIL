## JSON

- json view 설치

## Ajax 기본 골격

- GET

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

- GET ex)

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

## API code

- GET

```python
@app.route('/test', methods=['GET'])
def test_get():
   title_receive = request.args.get('title_give') # 2. 봄날은간다를 받아서 저장
   print(title_receive) # 3. title_receive 출력
   return jsonify({'result':'success', 'msg': '이 요청은 GET!'})
```

- POST

```python
@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give'] # 2. 봄날은간다를 받아서 저장
   print(title_receive) # 3. title_receive 출력
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})
```

## Ajax code

- GET

```python
$.ajax({
    type: "GET", # GET 방식
    url: "/test?title_give=봄날은간다", # 1. /test에 title_give=봄날은간다
    data: {},
    success: function(response){ # 4. 성공시 response 받아와서
       console.log(response) # 5. console.log 창에 출력
    }
  })
```

- POST

```python
$.ajax({
    type: "POST", # POST 방식
    url: "/test",
    data: { title_give:'봄날은간다' }, # 1. /test에 title_give=봄날은간다
    success: function(response){ # 4. 성공시 response 받아와서
       console.log(response) # 5. console.log 창에 출력
    }
  })
```