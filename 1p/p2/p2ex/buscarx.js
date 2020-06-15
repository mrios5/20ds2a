let vector = [2,3,7,4,5,6];
let a=false; 
for(let x of vector){
    console.log(x)
    if(x===7){
     a=true 
     break;  
    }
    
}
if(a===true){
    console.log('encontrado!!')
}else{
    console.log('no encontrado')
}