// 시간복잡도 계산
// best sovling 시간복잡도 : 1
// sovling 시간복잡도 : 1 + 2N


function solution(a, b) {
    var answer = 0; // 변수선언 : 1
    if (a > b) {
        for (i = b; i <= a; i++) { // a의 길이만큼 반복 : N
            answer += i; // 대입연산 : 1
        }
    } else { 
        for (i = a; i <= b; i++) { // b의 길이만큼 반복 : N
            answer += i; // 대입연산 : 1
        }
    }
    return answer;
}
// 테스트
console.log(solution(3,5))

// (1 * N) + (1 * N) + 1 = 1 + 2N