## ⬛ Mouse

---

### ◾ MouseEvent.button

<br>

- 마우스 이벤트 객체의 버튼 프로퍼티를 활용하면 마우스 버튼을 눌렀을 때 일어난 이벤트에 대해서 어떤 버튼을 눌러서 일어난 이벤트인지 정확하게 알 수 있다.

-

| 값  |                   내용                    |
| :-: | :---------------------------------------: |
|  0  |             마우스 왼쪽 버튼              |
|  1  |                 마우스 휠                 |
|  2  |            마우스 오른쪽 버튼             |
|  3  |  X1 (일반적으로 브라우저 뒤로 가기 버튼)  |
|  4  | X2 (일반적으로 브라우저 앞으로 가기 버튼) |

<br>

### ◾ MouseEvent.type

<br>

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

### ◾ MouseEvent.위치프로퍼티

<br>

|      프로퍼티      |                     설명                      |
| :----------------: | :-------------------------------------------: |
| `clientX, clientY` | 마우스 포인터의 브라우저 표시 영역에서의 위치 |
|   `pageX, pageY`   |      마우스 커서의 문서 영역에서의 위치       |
| `offsetX, offsetY` | 마우스 포인터의 이벤트 발생한 요소에서의 위치 |
| `screenX, screenY` |  마우스 포인터의 모니터 화면 영역에서의 위치  |

<br>

**❗ client, page, offset 차이**

- client : 브라우저가 표시하는 화면 내에서 마우스 좌표 위치

- offset : 이벤트가 발생한 `target` 내에서 마우스의 좌표 위치

- page : 전체 문서 내에서 마우스의 좌표 위치

![](https://velog.velcdn.com/images/lilclown/post/f5ac575d-b06b-47f7-9048-d34450d2c73e/image.PNG)

<br>

### ◾ MouseEvent.relatedTarget

- `mouseenter, mouseleave, mouseover, mouseout` 이벤트에는 `relatedTarget` 이라는 프로퍼티 존재

- `target` 프로퍼티가 이벤트가 발생한 요소를 담는 반면, `relatedTarget` 프로퍼티는 이벤트가 발생하기 직전, 또는 직후에 마우스가 위치해 있던 요소를 담는다.

<br>

**❗ `mouseenter, mouseleave`와 `mouseover, mouseout`의 차이**

- `mouseenter, mouseleave`는 버블링이 일어나지 않는다.

- `mouseenter, mouseleave`는 자식 요소의 영역을 계산하지 않는다.

<br><br>

## ⬛ Keyboard

---

### ◾ KeyboardEvent.type

<br>

| 이벤트 타입 |                                                      설명                                                       |
| :---------: | :-------------------------------------------------------------------------------------------------------------: |
|   keydown   |                                           키보드의 버튼을 누르는 순간                                           |
|  keypress   | 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음) |
|    keyup    |                                        키보드의 버튼을 눌렀다 떼는 순간                                         |

<br>

### ◾ KeyboardEvent.key

<br>

- 사용자가 누른 키가 가지고 있는 값

- ex) shift, a, ctrl 등

<br>

### ◾ KeyboardEvent.code

<br>

- 누른 키의 물리적인 위치

- ex) Left shift, A(대소문자 관계X), Right ctrl

<br><br>

## ⬛ Input Tag

---

| 이벤트 타입 |                           설명                           |
| :---------: | :------------------------------------------------------: |
|   focusin   |                요소에 포커스가 되는 순간                 |
|  focusout   |             요소에 포커스가 빠져나가는 순간              |
|    focus    |    요소에 포커스가 되는 순간 (버블링이 일어나지 않음)    |
|    blur     | 요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음) |
|   change    |                 입력된 값이 바뀌는 순간                  |
|    input    |                    값이 입력되는 순간                    |
|   select    |             입력 양식의 하나가 선택되는 순간             |
|   submit    |                    폼을 전송하는 순간                    |

<br><br>

## ⬛ Scroll

---

- 보통 `window` 객체에 이벤트 핸들러를 등록하고 `window` 객체의 프로퍼티와 함께 자주 활용

- `scrollY` 프로퍼티를 활용하여 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향을 기준으로 이벤트 핸들러가 동작하게끔 활용 가능

<br><br>

> **Tomorrow better than today, Laugh at myself**

> **- 출처 -**
>
> **[codeit](https://www.codeit.kr/dashboard)**
