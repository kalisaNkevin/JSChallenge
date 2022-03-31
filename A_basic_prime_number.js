const primenumber=[1,2,3,4,5,6,7,8,9,13];
const newPrimenumber=[];
function sort(array){
    let isPrime= true;
    for(let i= 0 ; i < array.length; i++){
        if(array[i] !=1 && array[i]>1){
            for(let j= 2; j < array[i]; j++ ){
            if(array[i]%j ==0){
                isPrime=false;
              break;}
        }
       if(isPrime) newPrimenumber.push(array[i]);
        isPrime=true;
    }
    }
    return newPrimenumber;
}
console.log(sort(primenumber));

