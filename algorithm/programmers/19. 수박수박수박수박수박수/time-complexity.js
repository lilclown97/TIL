// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 1 + 3N


var n = 7;
var answer = ''; //대입연산
for (let i = 0; i < n; i++) { //반복문
    if (i % 2 == 0){ //비교연산
        answer += '수';  //대입연산
    } else {
        answer += '박'; //대입연산
    }
}

console.log(answer);

// 1 + (N * 3) = 1 + 3N