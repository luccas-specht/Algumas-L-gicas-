const getUniqueValuesFromArray = (array) => {
  const uniqueValues = array.reduce((arr, current) => {
    const itemFound = arr.find(
      (item) => item['any-property'] === current['same-property-used-there']
    );
    if (itemFound) return arr;

    return [...arr, ...[current]];
  }, []);

  return uniqueValues;
};
