// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다.
// 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 
// 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 
// 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

// 제한사항
// - 5 ≤ players의 길이 ≤ 50,000
//  - players[i]는 i번째 선수의 이름을 의미합니다.
//  - players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
//  - players에는 중복된 값이 들어가 있지 않습니다.
//  - 3 ≤ players[i]의 길이 ≤ 10
// - 2 ≤ callings의 길이 ≤ 1,000,000
//  - callings는 players의 원소들로만 이루어져 있습니다.
//  - 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

// 입출력 예
// players: ["mumu", "soe", "poe", "kai", "mine"]
// callings: ["kai", "kai", "mine", "mine"]
// result: ["mumu", "kai", "mine", "soe", "poe"]

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
    const hash = new Map();
    
    // players의 name을 key, 해당 index를 value로 초기화
    players.forEach((name, index) => {
        hash.set(name, index);
    })

    // hash 값: Map(5) { 'mumu' => 0, 'soe' => 1, 'poe' => 2, 'kai' => 3, 'mine' => 4 }
    
    // 초기화 해줬던 hash에 callings에 대한 요소(이름)로 key에 접근하여 value를 currIdx에 담아둠
    callings.forEach(name => {
        const currIdx = hash.get(name); // 이렇게 하면 해당 이름의 인덱스 값이 담김
        const front = players[currIdx - 1]; // 바로 전 인덱스에 있던 값을 front에 할당

        // 서로의 index값을 스왑
        [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]];
        
        hash.set(name, hash.get(name) - 1); // 이름이 불린 값을 앞으로 할당
        hash.set(front, hash.get(name) + 1); // 위에서 값이 할당된 원래 인덱스에 있던 값을 뒤로 배치
    })
    
    return players;
};

console.log(solution(players, callings));