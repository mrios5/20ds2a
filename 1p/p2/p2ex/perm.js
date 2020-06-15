

function factorial(n){
    let f=1
    for(let i=1;i<=n;i++){
        f=f*i;  
    }
        return f
    }
    function permutacion(n,r){
    let npr
    npr=(factorial(n))/factorial((n-r))
    return npr
    }
    console.log(permutacion(8,5))