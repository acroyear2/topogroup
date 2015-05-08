# topogroup

topologically sorts and divides a directed acylic graph into almost disjoint subsets of interconnected vertices.

# example

```js
var nodes = [ 'y', 'j', 'k', 'x' ];
var edges = [
  [ 'x', 'j' ],
  [ 'x', 'y' ],
  [ 'k', 'j' ],
  [ 'y', 'j' ],
];
var groups = topogroup(nodes, edges);
console.log(groups);
```

outputs:

```
[
 [ 'k', 'j' ],
 [ 'x', 'y', 'j' ],
 [ 'j' ]
]
```

# api

## var arr = topogroup(nodes, edges)

- `nodes` is the array of vertices.
- `edges` is the array of directed edges that describes the graph.

# license

mit