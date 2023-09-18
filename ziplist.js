const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];
function ziplist(one, two) {
  const result = [];
  if (one.length !== two.length) {
    return 0;
  }
  for (let i = 0; i < one.length; i++) {
    result.push(one[i]);
    result.push(two[i]);
  }
  return result;
}
console.log(ziplist(test1, test2));

function zipListTheSimpleWay(data1, data2) {
  const data = _.zip(data1, data2);
  return _.flatten(data);
}
console.log(zipListTheSimpleWay(test1, test2));
