function adder(a, b) {
  return a + b;
}

function test(callback) {
  console.log(callback(1, 2));
}

test(adder);

const arr = [10, 20, 30, 40, 50];

const arr2 = arr.map((item, index, _) => {
  if(index % 2 == 0) {
    console.log(item);
    _[index] = item * 2;
    return _[index];
    
  } else {
    return 0;
  }
})

console.log(arr);
console.log(arr2);

const cat = {
  name: 'nsj',
  foo1: function() {
    const foo2 = () => {
      console.log(this.name);
    }
    foo2();
  }
}

cat.foo1();

let aaa;

class D {

}

aaa = new D();
aaa['make'] = 234;
console.log(aaa['make']);

