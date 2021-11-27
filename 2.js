function isPrime(num){
  
  if (typeof num !== 'number' || isNaN(num)){
    return 'Данные не верны!';
  } else if (num < 0 || num > 1000){
    return 'Вне диапазона проверяемых чисел!';
  } else if (num === 0){
    return '0 - он такой, не простой, не составной)'
  } else if (num === 1){
    return '1 - он такая, не простая, не составная)'
  }
  
  
  let j = 0;
  
  for (i = 1; i <= num; i++){
  
    if (num % i === 0 ){
      j++;
    }
  }
  
  if (j == 2){
    return 'Простое';
  } else {
    return 'Составное';
  }
  
}

console.log(isPrime(7));
