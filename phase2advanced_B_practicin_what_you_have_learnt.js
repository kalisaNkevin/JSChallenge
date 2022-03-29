
 setAverageChildrenApi = async(families, age) => {
 
    return new Promise(function (resolve, reject) {
   setTimeout( () => {
            let sum = 0;
            let childrenNumberArray = families.filter( family => family.childrenNumber > 0);
              for (let i = 0; i < childrenNumberArray.length; i++) {
              sum += childrenNumberArray[i].childrenNumber;
              }
              let avg = sum / childrenNumberArray.length;
            families.map(family=>{
                family.fatherName == "Lucas" ||  family.fatherName == "Lucas" ? reject("Lucas is not an allowed dad in 2022") :'';
                family.average = avg;
            });

         resolve(families);
           

        },
            500);
  
    });
 }
 

 let families = [
     {fatherName:"Jim",motherName:"sabine",childrenNumber:2},
     {fatherName:"Nestor",motherName:"Sine",childrenNumber:3},
     {fatherName:"Karm",motherName:"Lattifah",childrenNumber:4}
    ]

  setAverageChildrenApi(families).then(data =>{ console.log(data)}).catch(err =>console.log('Error occured : ${err}'));