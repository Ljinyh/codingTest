function solution(s, n) {
    let answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = upper.toLowerCase();

    for (let i = 0, il = s.length; i < il; i++) {
        let text = s[i];
        if (text == ' ') {
            answer += ' ';
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];


    }

    return answer;
}