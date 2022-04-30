// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
//  예를 들어 18의 자릿수 합은 1+8=9이고, 
//  18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
//  자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
//  solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.


function solution(x) {
    let sum = 0;
    let num = x.toString();
    for (i = 0; i < num.length; i++) { //자릿수 더하기
        sum += parseInt(num[i], 10)
    }
    if (Number.isInteger(x / sum) == true) { //x/자릿수 더한값이 정수인지
        return true;
    } else {
        return false;
    }
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));