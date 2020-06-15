var dice=[1000]

for (var i=1;i<10;i++){
    dice[i]=Math.ceil(Math.random()*6);
    if(dice[i]===0){
        console.log(dice[i]);
    }
}
console.log('hecho...');