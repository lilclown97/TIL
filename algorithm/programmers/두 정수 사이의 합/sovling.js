// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.


function solution(a, b) {
    var answer = 0;

    // a가 b보다 클때 a부터 b까지 answer에 더해가며 저장.
    if (a > b) {
        for (i = b; i <= a; i++) {
            answer += i;
        }
    } else { // b가 a보다 크거나 같을때 b부터 a까지 answer에 더해가며 저장.
        for (i = a; i <= b; i++) {
            answer += i;
        }
    }
    return answer;
}
console.log(solution(3,5))