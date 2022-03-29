const primenumber=[1,2,3,4,5,6,7,8,9];
const newprimenumber=[];

function sort(array){
    for(let i= 0; i <= array.length-1; i++ ){
        array[i]%2!== 0 ?newprimenumber.push(array[i]) : '';
    }
    return newprimenumber;
}
console.log(sort(primenumber));