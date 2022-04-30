// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 3 + N


function solution(n) {
    let sum = 0; //대입연산
    let num = n.toString(); //대입연산
    for(i = 0; i < num.length; i++) { //반복문
        sum += parseInt(num[i],10); //대입연산
    }
    return answer = sum; //대입연산
}


//1 + 1 + (1 * N) + 1 = 3 + N