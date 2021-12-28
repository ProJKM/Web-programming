for (var i = 1; i < 101; i++) {
  if (i%3 == 0 && i%5 == 0)
  console.log('FizzBuzz');
  else if (i%3 == 0)
  console.log('Fizz');
  else if (i%5 == 0)
  console.log('Buzz');
  else
  console.log(i);
}

////////////////////////////////////////////

var a = 10; 
var b = 20; 
var c = 30; 

if (a>b){
  if (a>c)
    console.log(a);
  else
    console.log(c);
}

else if (b>c){
  if (b>a)
    console.log(b);
  else
    console.log(a);
}

else{
  console.log(c);
}

////////////////////////////////////////////

var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var indexOfD = sentence.indexOf(word); // SOMETHING 부분에 dolphin의 d의 위치를 찾는 코드를 작성해보세요.
if (indexOfD>-1)
  {indexOfD = indexOfD + word.indexOf('d');}
var indexOfN = sentence.lastIndexOf(word); // SOMETHING_ELSE 부분에 dolphin의 n의 위치를 찾는 코드를 작성해보세요.
if (indexOfN>-1)
  {indexOfN = indexOfN + word.indexOf('n');}

console.log(indexOfD, indexOfN);
