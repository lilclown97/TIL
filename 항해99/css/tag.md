## background : 배경

- background-image : 배경 이미지 

```python
background-image: url("")
```

- background-size : 배경 사이즈

```python
background-size: cover; #cover는 변경
```

- background-position : 배경 이미지 위치

```python
background-position: center; #center는 변경
```

## 크기

- width : 가로 크기

```python
width: 300px; #px, % 사용
```

- height : 세로 크기

```python
height: 200px; #px, % 사용
```

- 모바일 처리

```python
max-width: 1200px; # 최대 넓이
width: 95%; # %로 화면 채움
```

## 여백

- margin : 바깥 여백

```python
margin: 40px; #px, % 사용, -top/-bottom/-right/-left 별개로 사용 가능. 상우하좌
```

- padding : 안쪽 여백

```python
padding: 40px; #px, % 사용, -top/-bottom/-right/-left 별개로 사용 가능. 상우하좌
```

## border : 테두리

- border : 테두리

```python
border: 1px solid white; # 1px 굵기, 직선, 흰색
```

- border-radius : 모서리 라운딩

```python
border-radius: 10px; #px, % 사용
```

## ETC

- linear-gradient : 밝게, 어둡게

```python
linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
# url 앞에 삽입, 0.5 수치 조정으로 밝게 or 어둡게
```

- 내용물 정렬

```python
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
```

- button hover

```python
.mytitle >button:hover { # 버튼에 마우스 올렸을 때 2px, 직선, 흰색
    border: 2px solid white;
}
```

- box-shadow : 그림자

```python
box-shadow: 0 0 3px 0 gray;
```
