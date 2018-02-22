module.exports = function check(str, bracketsConfig) {
  // your solution
/*   let solution = true;
  bracketsConfig.forEach(brackets => {
    if (!solution) return;
    let countOpenedBrackets = 0, countClosedBrackets = 0;
    str.split('').forEach(item => {
      if (item === brackets[0]) countOpenedBrackets++;
      else if (item === brackets[1]) countClosedBrackets++;
      if (countOpenedBrackets < countClosedBrackets) {
        solution = false;
        return;
      }
    });
    if (countOpenedBrackets !== countClosedBrackets) {
      solution = false;
      return;
    }
  });
  return solution;  */
  let arrOpenedIndexes = [];
  let arrOpenedBrackets = [], arrClosedBrackets = [];
  let indexOpenedBracket, indexCLosedBracket;

  bracketsConfig.forEach(brackets => {
    arrOpenedBrackets.push(brackets[0]);
    arrClosedBrackets.push(brackets[1]);
  })

  for (let i = 0; i < str.length; i++) {
    indexOpenedBracket = arrOpenedBrackets.indexOf(str[i]);
    indexCLosedBracket = arrClosedBrackets.indexOf(str[i]);
    if (indexOpenedBracket !== -1 && indexOpenedBracket === indexCLosedBracket && indexCLosedBracket === arrOpenedIndexes[arrOpenedIndexes.length - 1]) {
      arrOpenedIndexes.pop();
    }
    else if (indexOpenedBracket !== -1) {
      arrOpenedIndexes.push(indexOpenedBracket);
    }
    else if (indexCLosedBracket !== -1 && indexCLosedBracket === arrOpenedIndexes[arrOpenedIndexes.length - 1]) {
      arrOpenedIndexes.pop();
    }
    else return false;
  }
  if (arrOpenedIndexes.length !== 0) return false;
  return true;
}
