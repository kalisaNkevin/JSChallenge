const a = [1,5,2,4,20,15,36];
const newArray = [];
function sort(a) {
    var swap,swapped,done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < a.length; i ++) {
        if (a[i - 1] > a[i]) {
         swap = a[i];
         a[i] = a[i-1];
         a[i-1] = swap;
         swapped =1;
        }
        if(swapped ==0){
            done= true;
        }
      }
    }

    for (let i =  a.length; i >=0; i --) {
        a[i] % 2 == 0 ? newArray.push(a[i]) : '';
    }
    return newArray;
  }

console.log(  sort(a));