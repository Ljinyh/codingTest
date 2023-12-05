/*
문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

function solution(s){
    let count = 0;
    
    // 첫번째 괄호가 닫힌 괄호면 무조건 짝이 맞지 않기 때문에 바로 false 반환
    if(s[0] === ')') return false;
    
    // 열린 괄호부터 시작을 한다면 카운트 시작
    for(let i = 0, il = s.length; i < il; i++) {
        s[i] === '(' ? count++ : count--;
        
        // 음수일 경우 결국 짝이 안맞는 것이기 때문에 바로 false 리턴
        if(count < 0) return false
    }
    
    return !count ? true : false;
}

console.log(solution("()()")); // return true
console.log(solution("(())()")); // return true
console.log(solution(")()(")); // return fales
console.log(solution("(()(")); // return fales
console.log(solution("())((()))(()")); // return fales