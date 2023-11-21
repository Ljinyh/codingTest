/*
[문제 설명]
    두 정수 a,b와 boolean 변수 flag가 매개변수로 주어질 때,
    flag가 true면 a + b 를 false a - b를 return하는 solution 함수를 작성해 주세요.

[제한사항]
    -1000 <= a,b <= 1000

[입출력 예]
    a: -4, -4
    b: 7, 7
    flag: true, false
    result: 3, -11
*/

// solution1 코드 속도 : 0.041ms
console.time('solution1');
function solution1 (a, b, flag) {
    let answer = 0;
    if(!!flag) answer = a + b;
    else answer = a - b;
    return answer;
};
console.timeEnd('solution1');

// solution2 속도: 평균 0.004ms
console.time('solution2');
const solution2 = (a, b, flag) => flag ? a + b : a - b;
console.timeEnd('solution2');

// solution3 속도: 평균 0.003ms
console.time('solution3');
function solution3 (a, b, flag) {
    return flag ? a + b : a - b;
};
console.timeEnd('solution3');

// solution4 속도: 평균 0.004ms
console.time('solution4');
function solution4 (a, b, flag) {
    switch (flag) {
        case true:
            return a + b;
        case false:
            return a - b;
    };
};
console.timeEnd('solution4');

// console.log(solution4(-4, 7, false));
