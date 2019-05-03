//Task1
var from = +prompt('Discounts are valid from', '');
var to = +prompt('Discounts are valid to', '');
var now = +prompt('Current time', '');

if (((from < to) && (now >= from) && (now <= to)) || ((from > to) && (now >= from) || (now <= to))) {
  console.log('Discounts are valid');
} else {
  console.log("Discounts AREN'T valid, comeback from " + from + ' to ' + to );
}


//Task 2
function randomNumber(min, max) {
  console.log('2. random number: ' + ~~(min + (max - min) * Math.random()));
}

randomNumber(1, 100);


//Task 3
function reverse(string) {
  var reverseStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
}

console.log('3. reverse string: ' + reverse('abcdef'));


//Task 4
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log('4.1 fib number: ' + fib(9));


//Task 5
function fib2(n) {
  var arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n - 1] + arr[n - 2];
}

console.log('5. fib number: ' + fib2(9));


//Task 6
function counter() {
  var count = 1;
  return function() {
    return count++;
  }
}

var getCount = counter();
console.log('6.1 count: ' + getCount());
console.log('6.2 count: ' + getCount());
console.log('6.3 count: ' + getCount());


//Task 7
function multiA(a) {
  return function (b) {
    return a * b;
  }
}

function multi3(x) {
  return multiA(3)(x);
}

function multi4(x) {
  return multiA(4)(x);
}

console.log('7.1 MultiA = ' + multiA(2)(3));
console.log('7.2 multi3(x) = ' + multi3(4));
console.log('7.3 multi4(x) = ' + multi4(5));


//Task 8
function getName() {
  return this.name;
}

var user = {
  name: "Alena"
};

user.f = getName;
console.log("8. User name is " + user.f());


//Task 9
var n = {
  number: 3
};

function getDoubled() {
  return this.number * this.number * 2;
}

function getDoubledTrippled() {
  return getDoubled.call(this) * 3;
}

n.doubled = getDoubled;
n.trippled = getDoubledTrippled;

console.log('9. Doubled = ' + n.doubled());
console.log('9. DoubledTrippled = ' + n.trippled());


//Task 10
var arr = [2, 10, 5, -41, 150, -13];
function random() {
  return Math.random() - 0.5;
}

arr.sort(random);

console.log('10. random mix array: ' + arr);

//Task 11
function maxNumb(){
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
     max = arr[i];
    }
  }
  return max;
}

console.log('11.1 Max in array = ' + maxNumb());
console.log('11.2 Max in array = ' + Math.max(...arr));


//Task 12
function sum() {
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log('12. Sum = ' + sum());


//Task 13
function checkPalindrome(str) {
  this.str = str.toLowerCase();
  return this.str === this.str.split('').reverse().join('');
}

console.log('13. ' + checkPalindrome('Anna'));
console.log('13. ' + checkPalindrome('ono'));
console.log('13. ' + checkPalindrome('string'));
