// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 
// 리턴하는 함수, solution을 완성하세요. 요일의 이름은 
// 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 
// 예를 들어 a=5, b=24라면 5월 24일은 
// 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// var a = 1
// var b = 1

// var dt = new Date(2016,a-1,b);

// var answer = '';
// var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// answer = day[dt.getDay()]


// console.log(answer);

function solution(a, b) {
    var answer = "";
    var someday = new Date(2016,a-1,b); //month는 index 값이라 0부터 1월.
    var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; //일~월 = 0~6

    answer = day[someday.getDay()] //getDay 함수로 해당 날짜의 요일 가져와 배열에서 찾기
    return answer;
}

console.log(solution(1,1))