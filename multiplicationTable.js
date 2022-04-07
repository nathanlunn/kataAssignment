const multiplicationTable = function(maxValue) {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = i; j <= i * maxValue; j += i) {
      if (j !== i * maxValue) {
        table += `${j} `;
      } else {
        table += j;
      }
    }
    if (i !== maxValue) {
      table += "\n";
    }
  }
  return table;
};

console.log(multiplicationTable(5));