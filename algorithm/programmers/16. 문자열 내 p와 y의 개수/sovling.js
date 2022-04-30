// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 
// "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.


function solution(s) {
    var count_p = 0;
    var count_y = 0;

    for (i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() == 'P') { //s의 i번째 문자를 대문자로 변환 후 P와 같은지 비교
            count_p ++
        } else if (s[i].toUpperCase() == 'Y') { //s의 i번째 문자를 대문자로 변환 후 Y와 같은지 비교
            count_y ++
        }
    }
    if (count_p == count_y) { // count_p와 count_y가 같다면 ture 반환, 아니라면 false 반환
        return true
    } else {
        return false
    }
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));


// 런타임 에러
// function solution(s){
//     var count_p = s.match(/p/gi).length;
//     var count_y = s.match(/y/gi).length;

//     if (count_p == count_y){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(solution("pPoooyY"));
// console.log(solution("Pyy"));
