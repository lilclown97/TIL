// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 3


function solution(n) {
    if(Number.isInteger(Math.sqrt(n)) == true){ //비교연산
        return answer = Math.pow(Math.sqrt(n)+1,2) //대입연산
    }else{
        return answer = -1 //대입연산
    }
}

console.log(solution(121));
console.log(solution(3));


// 1 + 1 + 1 = 3