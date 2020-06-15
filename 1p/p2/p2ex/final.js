function calculo(a,b,c){
    let s,r,l=0.5,a1,b1,c1
    s=l*(a+b+c);
    a1=s*(s-a)
    b1=s-b
    c1=s-c
    r=a1*b1*c1
    r=Math.sqrt(r)
    r=r/s
    return r
}

    console.log(calculo(5,6,7))