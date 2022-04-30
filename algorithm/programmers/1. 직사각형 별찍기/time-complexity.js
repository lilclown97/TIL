// 시간복잡도 계산
// best sovling 시간복잡도 : N
// sovling 시간복잡도 : N^2 + 1

const a = 2, b = 3;
let star = ""; // 대입연산
for (let k = 0; k < b; k++) { // b의 길이만큼 반복 : N
    for (i = 0; i < a; i++) { // a의 길이만큼 반복 : N
        star += "*" // 대입연산
    }
    star += "\n" // 대입연산
}
console.log(star);

// (N * 1) * (N * 1) + 1 = N^2 + 1