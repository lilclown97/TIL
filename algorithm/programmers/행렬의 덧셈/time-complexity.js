// 시간복잡도 계산
// best sovling 시간복잡도 : 1 + N^2
// sovling 시간복잡도 : 


function solution(arr1, arr2) {
    var answer = []; //대입연산 : 1
    for(i = 0; i < arr1.length; i++) { //반복문 : N
        var array_sum = []; //대입연산 : 1
        for(j = 0; j < arr1[i].length; j++) { //반복문 : N
            array_sum.push(arr1[i][j] + arr2[i][j]) //대입연산 : 1
        }
        answer.push(array_sum); //대입연산 : 1
    }
    return answer
}

// 1 + (N * 2)(N * 1) = 1 + 2N^2