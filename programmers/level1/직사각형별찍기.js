/*
[문제 설명]
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

[제한 조건]
- n과 m은 각각 1000 이하인 자연수입니다.
*/

// n(a) = 행, m(b) = 열이라고 생각하고..?

function solution (data) {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let star = '';

    for(let i = 0; i < b; i++) {
        for(let j = 0; j < a; j++) {
            star += '*';
        } 
        console.log(star);
        star = '';
    }

    return;
};

solution('5 3');

// 문자열 반복해서 쓰는 방식 사용
function solution2 (data) {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let star = '';

    for(let i = 0; i < b; i++) {
            star = '*'.repeat(a);
            console.log(star);
        } 

    return;
};

solution2('5 3');