// 5-5 배열과 메서드 - 연습 과제1
// 개인 해답-> 제대로 작동 안 함
// let words = 'background-color'

// function camelize(words) {
//   let changedWords = words.split('-');
//   let upperWords = toUpperCase(changedWords);

//   return upperWords
// };

// 정답- ai 제공
// function camelize(words) {
//   let changedWords = words.split("-");

//   console.log(changedWords);
// 첫 단어는 그대로, 남은 단어의 첫 글자만 대문자로 변환
// let result = changedWords.map((word, index) => {
//   if (index === 0) {
//     return word;
//   }
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });

// 배열을 문자열로 병합
//   return result.join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// 정답- 교재 해답
// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// 5-5 배열과 메서드 - 연습 과제2
// 개인 해답-> 정상 해답 실패
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// function filterRange(array, startNum, endNum) {
// }

// 정답- ai 제공
// 화살표 함수 버전
// function filterRange(arr, min, max) {
//   return arr.filter((item) => item >= min && item <= max);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);
// alert(filtered)
// alert(arr)

// 화살표 함수 안 쓴 버전
// function filterRange(arr, min, max) {
//   return arr.filter(function (item) {
//     return item >= min && item <= max;
//   });
// }

// 정답- 교재 해답
// function filterRange(arr, a, b) {
//   가독성을 위해 표현식을 괄호로 감싸주었습니다.
//   return arr.filter(item => (a <= item && item <= b));
// }

// 5-5 배열과 메서드 - 연습 과제3
// 개인 해답-> 오답, splice()를 filter처럼 사용
// function filterRangeInPlace(arr, min, max) {
//   return arr.splice((item) => min <= item && item <= max);
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);
// alert(arr);

// 정답- ai 제공
// function filterRangeInPlace(arr, min, max) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] < min || arr[i] > max) {
//       arr.splice(i, 1);
//     }
//   }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// 정답- 교재 해답
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // 범위 밖 요소 제거
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// 5-5 배열과 메서드 - 연습 과제4
// 개인 해답-> 자료 참고하여 정답
// function compareNumber(a, b) {
//   if (a > b) return -1;
//   if ((a = b)) return 0;
//   if (a < b) return 1;
// }

// let arr = [5, 2, 1, -10, 8];
// arr.sort(compareNumber);
// console.log(arr);
// alert(arr);

// 정답- 교재 해답, 간편식을 기억할 것
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// 5-5 배열과 메서드 - 연습 과제5
// 개인 해답-> sort는 문자열로 취급하여 재정렬, 사전 편집 순으로 진행
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//   let compareArr = arr.concat();
//   compareArr.sort();
//   return compareArr;
// }

// console.log(sorted);
// console.log(arr);

// 정답- 교재 해답, slice() 사용하여 배열 복사 및 재정렬
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// 5-5 배열과 메서드 - 연습 과제6
// 확장 가능한 계산기-1
// 개인 해답-> 작동 불가 - 함수, 메서드 호출 등 문제 때문에 오답
// function Calculator(text) {
//   let arr = text.split("");

//   let result = arr.reduce((sum, current) => sum + current, 0);
//   return result;
// }

// let calc = new Calculator();
// console.log(calc.Calculator("3 + 7"));

// 정답- ai 제공
// function Calculator() {
//   this.calculate = function (str) {
//     // 공백 제거 후 숫자, 연산자 분리
//     let arr = str.trim().split(" ");

//     // 숫자들을 number 타입으로 변환
//     let a = Number(arr[0]);
//     let op = arr[1];
//     let b = Number(arr[2]);

//     // 연산 수행
//     switch (op) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       default:
//         return NaN;
//     }
//   };
// }
// let calc = new Calculator();
// console.log(calc.calculate("3 + 7"));

// 확장 가능한 계산기-2
// 개인 해답-> 전 해답 참고하여 작성
// function Calculator() {
//   this.calculate = function (str) {
//     let arr = str.trim().split(" ");

//     let a = Number(arr[0]);
//     let op = arr[1];
//     let b = Number(arr[2]);

//     switch (op) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       case "*":
//         return a * b;
//       case "/":
//         return a / b;
//       case "**":
//         return a ** b;
//       default:
//         return NaN;
//     }
//   };
// }

// let powerCalc = new Calculator();
// let result = powerCalc.calculate("2 ** 3");
// console.log(result);

// 정답- 교재 해답
// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }
//     return this.methods[op](a, b);
//   };
//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// 5-5 배열과 메서드 - 연습 과제7
// 이름 매핑하기
// 개인 해답-> 오답 - undefined 배열 반환
// 요소의 프로퍼티가 아닌 배열만 순회해서 오류 발생
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map((name) => users.name);
// console.log(names);

// 정답- ai 제공 - 교재 정답과 일치
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name);

// console.log(names);

// 5-5 배열과 메서드 - 연습 과제8
// 객체 매핑하기
