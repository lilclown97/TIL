// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 3N + 1


function solution(absolutes, signs) {
    let answer = 0; // 변수선언 : 1
    for (let i = 0; i < absolutes.length; i++) { // absolutes의 길이만큼 반복 : N
        if (signs[i] == true) { // 비교연산 : 1
            answer += absolutes[i]; // 대입연산 : 1
        } else {
            answer -= absolutes[i]; // 대입연산 : 1
        }
    }
    return answer;
}

// (3 * N) + 1 = 3N + 1