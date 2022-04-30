## jQuery

### 사용법

- id 사용
- head 안에 코드 추가

```python
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

- val

```python
$('#id').val()
```

- hide

```python
$('#id').hide()
```

- show

```python
$('#id').show()
```

- append

```python
let temp_html = `` # 작은 따옴표 아님.

$('#id').append(temp_html)
```

- split

 문자, 문자열 기준으로 나누기.

 ex)

```python
let myemail = '123@456' # myemail = '123@456'
myemail.split('@') # myemail = ['123', '456']
```

- repeat

ex)

```python
for (let i = 0; 1 < rows.length; i++) {
    let title = rows[i]['title']
    let desc = rows[i]['desc']
    let image = rows[i]['image']
    let star = rows[i]['star'] # star 변수 지정
    let comment = rows[i]['comment']

    let star_image = '⭐'.repeat(star) # star의 갯수만큼 star_image에 '⭐' 저장

    let temp_html = `<div class="col">
                        <div class="card">
                            <img src="${image}"
                                    class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${desc}</p>
                                <p>${star_image}</p>
                                <p class="mycomment">${comment}</p>
                            </div>
                        </div>
                    </div>`
```

