/*

화면 하단의 `Console` 버튼을 이용하여 콘솔을 확인할 수 있습니다.
콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하기 위해 필요한 내용을 추가해보세요.

*/
const myName = '경모'
const introduction = "제 이름은 " + myName + "입니다.";

alert(introduction);

/*

화면 하단의 `Console` 버튼을 이용하여 콘솔을 확인할 수 있습니다.
콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.

HINT: `let`과 `const`의 차이점과 특징에 대해 조사해보세요.

*/

let age = 30; // TODO: 이 줄을 고쳐주세요.

alert(`현재 제 나이는 ${age}살 입니다.`);

age = age + 1;

alert(`내년에 제 나이는 ${age}살 입니다.`);

// const의 경우 변수 수정이 안된다.

/*

  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.
  
*/

const course = "Bootcamp";

alert(`Hi I am getting ready for ${course}`);

// 변수를 먼저 선언해야함

/*

  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.
  
  오류가 발생하지 않고 경고창이 나타난다면, 경고창에 표기되는 메시지는 크게 관계없습니다.
  가장 중요한 것은 어떤 이유에서 발생한 오류였는지 이해하는 것입니다.
  
*/

const course = "Bootcamp Prep";

alert(`Hi I am getting ready for ${course}`);

// const는 변수 재선언이 불가함으로 삭제
