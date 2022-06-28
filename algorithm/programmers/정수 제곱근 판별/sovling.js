// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지
// 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

//Number.isInteger() : 정수인지 판별. 정수면 true
//Math.sqrt(n) : n의 제곱근
//Math.pow(n,n) : n의 n 제곱
function solution(n) {
  if (Number.isInteger(Math.sqrt(n)) == true) {
    return (answer = Math.pow(Math.sqrt(n) + 1, 2));
  } else {
    return (answer = -1);
  }
}

console.log(solution(121));
console.log(solution(3));
