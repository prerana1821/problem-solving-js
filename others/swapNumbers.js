function swap(x,y){
  let temp;
  temp = x;
  x = y;
  y = temp;
  return [x,y];
}

let list = swap(10,20);
console.log(list);