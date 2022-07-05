## ⬛ 이벤트 핸들러

---

### ◾ 이벤트 핸들러 등록/삭제

<br>

**이벤트 핸들러 등록**

- `Element.addEventListener('type', 'handler')`

**이벤트 핸들러 삭제**

- `Element.removeEventListner('type', 'handler')`

- `addEventListener` 메소드를 활용해서 등록한 이벤트 핸들러만 삭제 가능

<br>

### ◾ 이벤트 핸들러 등록/삭제

<br>

**마우스 이벤트**

|  이벤트 타입  |                              설명                               |
| :-----------: | :-------------------------------------------------------------: |
|  `mousedown`  |                    마우스 버튼을 누르는 순간                    |
|   `mouseup`   |                 마우스 버튼을 눌렀다 떼는 순간                  |
|    `click`    |                     왼쪽 버튼을 클릭한 순간                     |
|  `dblclick`   |              왼쪽 버튼을 빠르게 두 번 클릭한 순간               |
| `contextmenu` |                    오른쪽 버튼을 클릭한 순간                    |
|  `mousemove`  |                     마우스를 움직이는 순간                      |
|  `mouseover`  |              마우스 포인터가 요소 위로 올라온 순간              |
|  `mouseout`   |             마우스 포인터가 요소에서 벗어나는 순간              |
| `mouseenter`  | 마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)  |
| `mouseleave`  | 마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음) |

<br>

**키보드 이벤트**

| 이벤트 타입 |                                                      설명                                                       |
| :---------: | :-------------------------------------------------------------------------------------------------------------: |
|  `keydown`  |                                           키보드의 버튼을 누르는 순간                                           |
| `keypress`  | 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음) |
|   `keyup`   |                                        키보드의 버튼을 눌렀다 떼는 순간                                         |

<br>

**포커스 이벤트**

| 이벤트 타입 |                             설명                             |
| :---------: | :----------------------------------------------------------: |
|  `focusin`  |                  요소에 포커스가 되는 순간                   |
| `focusout`  |             요소로부터 포커스가 빠져나가는 순간              |
|   `focus`   |      요소에 포커스가 되는 순간 (버블링이 일어나지 않음)      |
|   `blur`    | 요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음) |

<br>

**입력 이벤트**

| 이벤트 타입 |               설명               |
| :---------: | :------------------------------: |
|  `change`   |     입력된 값이 바뀌는 순간      |
|   `input`   |        값이 입력되는 순간        |
|  `select`   | 입력 양식의 하나가 선택되는 순간 |
|  `submit`   |        폼을 전송하는 순간        |

<br>

**스크롤 이벤트**

| 이벤트 타입 |         설명          |
| :---------: | :-------------------: |
|  `scroll`   | 스크롤 바가 움직일 때 |

<br>

**윈도우 창 이벤트**

| 이벤트 타입 |              설명              |
| :---------: | :----------------------------: |
|  `resize`   | 윈도우 사이즈를 움직일 때 발생 |

<br><br>

## ⬛ 이벤트 객체(Event Object)

---

### ◾ 이벤트 객체

<br>

- 이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달

- 이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있다.

<br>

### ◾ 이벤트 객체 프로퍼티

<br>

**[❓ 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Event)**

**[❓ 마우스 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)**

**[❓ 키보드 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)**

<br><br>

## ⬛ DOM 이벤트

---

### ◾ 이벤트 버블링 (Event Bubbling)

<br>

- 어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차레로 이벤트 핸들러가 동작

- 자식 요소에서 부모 요소로 이벤트가 전파되는 것을 이벤트 버블링 이라고 한다.

- `stopPropagation` 메소드로 전파를 막을 수 있다.

![](https://velog.velcdn.com/images/lilclown/post/e5df68ef-dffc-40a5-8b70-97bb81a0878e/image.PNG)

**[❓ 표준 DOM 이벤트](https://www.w3.org/TR/DOM-Level-3-Events/)**

**[❓ 자바스크립트의 이벤트 순서](https://www.quirksmode.org/js/events_order.html#link4)**

**[❓ addEventListner에 캡쳐링 단계 적용하기](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)**

<br><br>

## ⬛ 이벤트 위임 (Event Delegation)

---

- 버블링의 개념을 활용하여 효과적인 이벤트 관리가 가능

- 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트 관리

**[❓ 이벤트 위임](https://ko.javascript.info/event-delegation)**

<br><br>

## ⬛ 브라우저의 기본 동작

---

- 브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작이 존재. ex) 마우스 우클릭 > 메뉴창 등

- 기본 동작을 막고 싶다면 이벤트 객체의 `preventDefault` 메소드로 막을 수 있다.

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
