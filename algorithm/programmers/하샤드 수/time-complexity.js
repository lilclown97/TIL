// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 3 + N


function solution(x) {
    let sum = 0; //대입연산
    let num = x.toString(); //대입연산
    for (i = 0; i < num.length; i++) { //반복문
        sum += parseInt(num[i], 10) //대입연산
    }
    if (Number.isInteger(x / sum) == true) { //비교연산
        return true;
    } else {
        return false;
    }
}


// 1 + 1 + (1 * N) + 1 = 3 + N