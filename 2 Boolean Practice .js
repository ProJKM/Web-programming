/*

아래 코드에서 경고창이 나타나게 하기 위해 코드를 수정해보세요.

*/

const isTrue = true; // 이 부분을 고쳐보세요.

if (isTrue) {
  alert("Hi I can see you!");
}

/*

아래 코드에서 경고창이 나타나지 않게 하기 위해 코드를 수정해보세요.

*/

const isFalse = false; // 이 부분을 고쳐보세요.

if (isFalse) {
  alert("Hi I can see you!");
}

// new Boolean(false);는 존재하는 값으로 true로 정의

/*

아래 코드에서 경고창이 나타나지 않게 하기 위해 코드를 수정해보세요.

*/

const myName = "ken";
const yourName = "kang"; // 여러분의 이름으로 변경해보세요.

// `===`은 양측이 같은지 판별해주는 비교 연산자입니다.
// 비교 연산자를 이용해 비교한 결과를 `isFalse`라는 변수에 대입하고 있습니다.
// 비교 연산자는 항상 `true` 혹은 `false` 중 하나의 결과를 도출합니다.
const isFalse = (myName === yourName);

if (isFalse) {
  alert("Hi I can see you!");
}

// 비교 연산자는 항상 `true` 혹은 `false` 중 하나의 결과를 도출합니다. 이게 중요해보임
