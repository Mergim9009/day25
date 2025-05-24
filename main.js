var programmingLanguage  = ['javascript','php','java']
console.log(programmingLanguage[2])

programmingLanguage.pop();
programmingLanguage.push('python');
programmingLanguage.shift();
programmingLanguage.unshift('delete');
console.log(programmingLanguage)

var programmingLanguage1  = ['javascript','php','java','python','c#' ]

programmingLanguage1.splice(1,2, 'Ruby');

console.log(programmingLanguage1)


console.log(Math.floor(Math.random()*10));

 var students = ['student 1 ','student 2'];

 var [s1, s2] = students;

 console.log(s1); 
 console.log(s2);

var country = ['Kosova','Albania','Bullgaria']

var[s1, ,s3] = country
 console.log(s1); 
 console.log(s3);


  
console.log(country)

var numbers = [1,2,3,4,5,6,7,8,9,10]

var[first,second, ...otherNumbers] = numbers

 console.log(first); 

 console.log(seconds);
 
console.log(otherNumbers.toSpring());

  
