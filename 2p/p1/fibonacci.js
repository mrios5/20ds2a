function fibonacci(num){
    var a = 1, b = [0,1], guardar;
  
    while (num >= 0){
      guardar = a;
      a = a + b[num];
      b[num] = guardar;
      num--;
    }
  
    return b;
}
console.log(fibonacci(10))