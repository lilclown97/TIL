// 2번. 자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요.
//  예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

// 제한 조건
// N의 범위 : 100,000,000 이하의 자연수


function solution(n){
	n=n.toString().split("").reverse()
	let answer = n[0]
	let sum = parseInt(n[0])
	for(let i = 1; i < n.length; i++) {
		answer += `+${n[i]}`
		sum += parseInt(n[i])
	}
	return answer + `=${sum}`
}
console.log(solution(718253)) //"3+5+2+8+1+7=26"
console.log(solution(12345)) //"5+4+3+2+1=15"
console.log(solution(1532576)) //"6+7+5+2+3+5+1=29"

