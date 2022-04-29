// 시간복잡도 계산
// best sovling 시간복잡도 : 2N
// sovling 시간복잡도 : 5

function solution(a, b) {
    var answer = ""; //대입연산
    var someday = new Date(2016,a-1,b); //대입연산
    var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; //대입연산

    answer = day[someday.getDay()] //대입연산
    return answer; //대입연산
}