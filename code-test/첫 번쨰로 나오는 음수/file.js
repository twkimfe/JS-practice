// 문제 설명:
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100

// claude 풀이, 자체 해법 생기기 전까지 진행 보류
function solution(num_list) {
  var answer = -1;  // 기본값을 -1로 설정
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;  // 첫 번째 음수의 인덱스를 저장
      break;  // 첫 번째 음수를 찾았으므로 반복 중단
    }
  }
  return answer;
}