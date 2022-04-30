function solution(arr, n) {
    arr = arr.sort()
    let str = arr.join(" ") + " "
    console.log(str);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) str = str.replaceAll(`${arr[i]} `, "")
    }
    
    let answer = str.split(" ")
    console.log(answer);
    answer.pop()
    answer = answer.sort((a, b) => {
        if (a[n] > b[n]) return 1
        if (a[n] == b[n]) return 0
        if (a[n] < b[n]) return -1
    })
    return answer
}


console.log(solution(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"], 2)) //["glass", "yogurt", "coke", "vitamin", "water"]
console.log(solution(["brush", "sun", "brush", "bed", "car"], 1)) //["car", "bed", "sun"]
console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"], 0)) //["apple", "car", "cat"]