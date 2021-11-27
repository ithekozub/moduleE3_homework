
function countEvenOddInArr(arr){
  
  let countEven = 0; 
  let countOdd = 0;
  let countZero = 0;

  for (i = 0; i < arr.length; i++){
  
   if (typeof arr[i] === 'number' && !isNaN(arr[i])){
   
     if(arr[i] === 0){
       ++countZero;
     }else if (arr[i]%2){
       ++countOdd;
     }else {
       ++countEven;
     }
   }
  
  }


  console.log(`Количество нулей - ${countZero}`);
  console.log(`Количество парных - ${countEven}`);
  console.log(`Количество непарных - ${countOdd}`);
}

let x;
let arr = [2, 2, x, 3, 4, 6, x, '', 100, 7, 9, 0, 0, 0, 2, 16];

countEvenOddInArr(arr);
