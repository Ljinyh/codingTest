/*
[문제 설명]
2016년 1월 1일은 금요일입니다.
2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.

요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

[제한 조건]
- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다.
(13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/

function solution(a, b) {
    // 1월 1일이 금요일부터 시작이라고 헀으니 array도 금요일부터 시작
    const date = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    // 각 월 별 일수 정의
    const lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sumDay = 0;

    // a의 달보다 -1 하여 모든 날짜를 더함
    for(let i = 0, il = a - 1; i < il; i++) sumDay += lastDay[i];

    // b의 일수를 더함
    sumDay = sumDay + b

    // 1월 1일이 포함되므로 -1 하고 요일을 나눔
    const findDate = (sumDay - 1) % 7;

    return date[findDate]
}

console.log(solution(1, 1)); //return "FRI"
console.log(solution(5, 24)); //return "TUE"
console.log(solution(1, 3)); //return "SUN"
console.log(solution(1, 7)); //return "TUE"
console.log(solution(2, 29)); //return "MON"

