export function sortNumbers(numbers) {
    return numbers.sort((a, b) => {
      const aStr = a.toString();
      const bStr = b.toString();
      const aDecimalIndex = aStr.indexOf('.');
      const bDecimalIndex = bStr.indexOf('.');
      
      if (aDecimalIndex !== -1 && bDecimalIndex === -1) {
        return -1;
      }
      if (aDecimalIndex === -1 && bDecimalIndex !== -1) {
        return 1;
      }
      if (aDecimalIndex !== -1 && bDecimalIndex !== -1) {
        if (aDecimalIndex < bDecimalIndex) {
          return -1;
        }
        if (aDecimalIndex > bDecimalIndex) {
          return 1;
        }
        // Sort decimal numbers in descending order
        if (parseFloat(bStr) - parseFloat(aStr) !== 0) {
          return parseFloat(bStr) - parseFloat(aStr);
        }
      }
      if (aStr.length < bStr.length) {
        return -1;
      }
      if (aStr.length > bStr.length) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
}
  
  