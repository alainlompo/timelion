var _ = require('lodash');

module.exports = function (dataTuples, targetTuples) {
  console.log(targetTuples);
  var resultTuples = _.map(targetTuples, function (bucket) {
    var time = bucket[0];
    var i = 0;
    var avgSet = [];

    while (i < dataTuples.length && dataTuples[i][0] <= time) {
      avgSet.push(dataTuples[i][1]);
      i++;
    }

    dataTuples.splice(0, i);

    var sum = _.reduce(avgSet, function(sum, num) { return sum + num; }, 0);

    return [bucket[0], (sum / avgSet.length)];
  });

  console.log(resultTuples);
  return resultTuples;
};