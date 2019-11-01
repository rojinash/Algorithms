function allValidNBraces(n, solutions = [], partial = '', stack = []) {
    const charMap = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  ​
    if(n === 0) {
      for(let i = stack.length - 1; i >= 0; i--) {
        partial += charMap[stack[i]];
      }
  ​
      solutions.push(partial);
    } else {
      if(n > 0) {
        allValidNBraces(n - 1, solutions, partial + '(', [...stack, '(']);
        allValidNBraces(n - 1, solutions, partial + '{', [...stack, '{']);
        allValidNBraces(n - 1, solutions, partial + '[', [...stack, '[']);
      }
  ​
      const stackLength = stack.length;
      if(stackLength) {
        allValidNBraces(n, solutions, partial + charMap[stack[stackLength - 1]], stack.slice(0, stackLength - 1));
      }
    }
  ​
    return solutions;
  }

  allValidNBraces(1);
  
  
  
  