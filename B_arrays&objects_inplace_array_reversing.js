const array=[1,2,3,4,5];
const newArray=[];
let reverseArray =(array) =>{
    for(let a=array.length-1; a>=0 ;a--){
        newArray.push(array[a]);
    }

    return newArray;
};
console.log(reverseArray(array));