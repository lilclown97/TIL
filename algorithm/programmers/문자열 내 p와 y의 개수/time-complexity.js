// 시간복잡도 계산
// best sovling 시간복잡도 : ?
// sovling 시간복잡도 : 3 + 2N


function solution(s) {
    var count_p = 0; //대입연산
    var count_y = 0; //대입연산

    for (i = 0; i < s.length; i++) { //반복
        if (s[i].toUpperCase() == 'P') { //비교연산
            count_p ++ //대입연산
        } else if (s[i].toUpperCase() == 'Y') { 
            count_y ++ 
        }
    }
    if (count_p == count_y) { //비교연산
        return true 
    } else {
        return false
    }
}

// 2 + (2 * N) + 1 = 3 + 2N