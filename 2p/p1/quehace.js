function WhatDoesItDo(a, b){
    let t=a
    a=b
    b=t
}
let a=3, b=7
WhatDoesItDo(a,b)
console.log(a,b)