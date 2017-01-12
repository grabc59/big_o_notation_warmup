// Description
// Write a function that is O(1)
// Write a function that is O(n)
// Write a function that is O(n^2)


//O(1)
function bigO1(){
  var sum = 1;
  console.log(sum);
  return sum;
}
bigO1();




//O(n)
function bigOn(n){
  var sum = 0;
  for (var i = 0; i < n.length; i++){
    sum += n[i];
  }
  console.log(sum);
  return sum;
}
bigOn([1,2,3,4])




//O(n^2)
function sumFinder(array, targetInt) {
  // loop through each index
  for (var i = 0; i < array.length; i++) {
    // loop through again and add the values to the current index
    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === targetInt && i !== j) {
        console.log([i, j])
        return [i, j]
      }
    }
  }
}

sumFinder([1, 2, 3, 4, 5, 6, 7], 13); //[ 5, 6 ]
