function firstFunc(num){
  return function secondFunc(num2){
    return num + num2
  }
}

resultFunc = firstFunc(1);

let sum = resultFunc(6);
console.log(sum);
