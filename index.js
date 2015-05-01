var intersect = require('intersect');
var toposort = require('toposort').array;

module.exports = function (nodes, edges) {
  var idx = edges.reduce(function (acc, list) {
    var v = list[0], vx = list.slice(1);
    acc[v] = [].concat(acc[v]).concat(vx).filter(Boolean);
    return acc;
  }, {});
  nodes.forEach(function (v) { if (!idx[v]) idx[v] = [] });
  return toposort(nodes, edges).reduce(function (acc, v) {
    var vx = acc.filter(function (x) {
      if (~idx[String(x)].indexOf(v)) return x;
    });
    if (vx.length === 1) {
      var vx0 = vx[0],
          dups = intersect(idx[vx0], idx[v]);
      idx[vx0] = idx[vx0].filter(function (x) {
        if (~dups.indexOf(x)) return;
        return true;
      }).concat(idx[v]);
      return acc;
    }
    return acc.concat([v]);
  }, []).map(function (v) {
    return [].concat(v).concat(idx[v]).filter(Boolean);
  });
};
