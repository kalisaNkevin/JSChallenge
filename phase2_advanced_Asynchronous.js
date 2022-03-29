setStudentAgeApi = (student, age) => {
 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
  
    });
 }
 

 let student = {name:"Kevin" }

 setStudentAgeApi(student,18).then(data =>{ console.log(data)}).catch(err =>console.log('Error occured : ${err}'));