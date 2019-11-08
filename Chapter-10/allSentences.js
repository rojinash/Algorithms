//parameter: multidimentional array of strings
//return an array of all possible combinations of these strings

// function quickBrownFox(arr, result = [], sol = ""){
//     if(!arr){
//         return result.push(sol);
//     }
//     let i = 0, j = 0;
//     len = arr[0].length;
//     while(len){
//         sol = sol + arr[0][i] + " ";
//         return quickBrownFox(arr.slice(1), result, sol);
//     }
//     return result;
// }
    
function allSentencesIterative(array) {
    let solutions = [''];
    for(let i = 0; i < array.length; i++) {
      // inside outer array
      let newSolutions = [];
      for(let j = 0; j < array[i].length; j++) {
        // inside inner array
        for(let k = 0; k < solutions.length; k++) {
          const current = solutions[k];
          newSolutions.push(current + (current !== '' ? ' ' : '') + array[i][j]);
        }
      }
      solutions = newSolutions;
    }
    return solutions;
  }

arr = [["Alice", "Bob", "Cindy"], ["loves","hates"], ["apples", "bananas", "cherries"]];

//console.log(quickBrownFoxIterative(arr));
console.log(allSentencesIterative(arr));