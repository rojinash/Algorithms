function allValidNParens(n, solutions = [], partial = '', open = 0) {
    if(n === 0) {
      for(let i = 0; i < open; i++) {
        partial += ')';
      }
      solutions.push(partial);
    } else {
      allValidNParens(n - 1, solutions, partial + '(', open + 1);
      if(open > 0) {
        allValidNParens(n, solutions, partial + ')', open - 1);
      }
    }
    return solutions;
  }
allValidNParens(2);  