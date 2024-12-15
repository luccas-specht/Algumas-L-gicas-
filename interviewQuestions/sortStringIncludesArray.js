function sortStringIncludesArray(input) {
  const toArray = input
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('}', '')
    .replaceAll(',', '')
    .replaceAll('{name:', '')
    .replaceAll('mark:', '')
    .split(' ')
    .filter((e) => e.length > 0)
    .reduce((acc, curr, ind, orign) => {
      if (orign[ind - 1] && ~~curr) {
        acc.push({ name: orign[ind - 1], mark: curr });
      }
      return acc;
    }, []);

  const sortedArr = toArray.sort((prev, next) =>
    next.mark === prev.mark
      ? prev.name.localeCompare(next.name)
      : next.mark - prev.mark
  );

  const formattedResult = sortedArr
    .map((el) => `{name: ${el.name}, mark: ${el.mark}}`)
    .join(', ');

  return `[${formattedResult}]`;
}

module.exports = sortStringIncludesArray;
