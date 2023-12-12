/*
[문제 설명]
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

[제한 조건]
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

*/
function solution(s, n) {
    let answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = upper.toLowerCase();

    for (let i = 0, il = s.length; i < il; i++) {
        let text = s[i];
        // 공백일 경우 설정
        if (text == ' ') {
            answer += ' ';
            continue;
        }

        // upper인지 lower인지 찾기
        const textArr = upper.includes(text) ? upper : lower;
        // 인덱스를 찾아서 플러스하여 해당 인덱스에 있는 글자 가져오기
        let index = textArr.indexOf(text) + n;

        // 만약 인덱스가 z보다 크거나 같다면 더해진 값에 알파벳 갯수인 26를 빼주면 인덱스 값을 구할 수 있음
        if (index >= textArr.length) index -= 26;

        answer += textArr[index];
    }

    return answer;
}

console.log(solution("a B z", 4)); // return "e F d"