// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
// 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수
// solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.


function solution(arr1, arr2) {
    var answer = [];
    for(i = 0; i < arr1.length; i++) { // arr1 배열의 길이만큼.
        var array_sum = [];
        for(j = 0; j < arr1[i].length; j++) { // arr1[i] 배열의 길이만큼.
            array_sum.push(arr1[i][j] + arr2[i][j]) // array_sum = [x, y]
        }
        answer.push(array_sum);
    }
    return answer
}

// 테스트 하기 위한 코드.
var a = [
    [1, 2],
    [2, 3]
]
var b = [
    [3, 4],
    [5, 6]
]
console.log(solution(a,b));
