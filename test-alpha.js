const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}    

let {loc, loc: {start}, loc: {start: {line}}} = node;

console.log(line, start, loc); 