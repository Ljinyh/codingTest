/*
[문제 설명]
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

[제한 조건]
- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

[입출력 예]
{ a: 3, b:5 } = 12
{ a: 3, b: 3 } = 3
{ a: 5, b: 3 } = 12
*/

// 최소, 최대값을 구하는 여러가지 방법 중 어느것이 더 빠를지 비교해보자

// 배열 비구조화 할당 사용
// 평균속도: 0.05ms
// console.time('arr');
// let [min, max] = [a, b].sort((x, y) => x -y);
// console.timeEnd('arr');

// JS 내장 함수인 Math 함수 사용
// 평균 속도: 0.005ms
// console.time('math');
// const minN = Math.min(a, b);
// const maxN = Math.max(a, b);
// console.timeEnd('math');

// 결과: math의 코드가 평균적으로 더 빠른 것으로 판별

function solution(a, b) {
    let answer = 0;

    // 제한 조건2 조건 걸기
    if(!(a >= -10000000 && a <= 10000000 && b >= -10000000 && b <= 10000000)) return console.error('입력된 정수는 제한 범위에 걸리지 않습니다.');
    // 제약조건 1 때문에 a와 b가 같은지 판별
    if(a === b) return answer = a || b;

    if(a < b) {
        for(let i = a; i < b; i++) answer += i;
        return answer + b;
    }

    for(let i = b; i < a; i++) answer += i;
    return answer + a;
};


// 가우스 공식 사용
function solution2(a, b) {
    // 제한 조건2 조건 걸기
    if(!(a >= -10000000 && a <= 10000000 && b >= -10000000 && b <= 10000000)) return console.error('입력된 정수는 제한 범위에 걸리지 않습니다.');
    
    // 같으면 무조건 둘 중 하나 리턴
    if(a === b) return a || b;

    // 정수가 마이너스일 경우 사이 정수의 합을 구하기 어려워 절댓값을 확인
    const n = Math.abs(b - a) + 1;

    const answer = (n / 2) * (a + b);

    // 좀 더 간결하게 쓰려면 (a + b) * Math.abs(b - a) + 1 / 2

    return answer;
};

// 평균속도: 3.2ms
console.time('solution1');
console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
console.timeEnd('solution1');


// 평균 속도: 0.31ms
console.time('solution2');
console.log(solution2(3, 5));
console.log(solution2(3, 3));
console.log(solution2(5, 3));
console.timeEnd('solution2');