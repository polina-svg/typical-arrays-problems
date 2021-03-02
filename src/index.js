
exports.min = function min (arr) {
  if (!arr || arr.length == 0){
    return 0;
  }
  const arrSorted = arr.sort((a, b) => a-b);
  let arrMin = arrSorted[0];
  return arrMin;
}

exports.max = function max (arr) {
  if (!arr || arr.length == 0){
    return 0;
  }
  const arrSorted = arr.sort((a, b) => a-b);

  const arrMax = arrSorted[arrSorted.length-1];
  return arrMax;
}

exports.avg = function avg (arr) {
  if (!arr || arr.length == 0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let arrAverage = sum / arr.length;
   return arrAverage
}
