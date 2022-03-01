var arr = [1,2,3,4,5]

let result = arr.reduce((acc,cur,i)=>{
    console.log(acc,cur,i)
    return acc+cur
},0 )
console.log(result);

let result2 = arr.reduce((acc,cur,i)=>{
    console.log(acc,cur,i)
    return acc+cur
})
console.log(result2);