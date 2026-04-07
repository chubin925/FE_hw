const countTime = document.getElementById("close");

//지금 시간
const now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

//운영시간 초 기준으로
const startTime = 7 * 3600;
const endTime = 23 * 3600;

//현재시간 전체 초로 변경
let nowtotal = hour * 3600 + min * 60 + sec;
let total = 0;

if (startTime > nowtotal) {
  total = startTime - nowtotal;
  let remainHour = parseInt(total / 3600);
  let rest = total % 3600;
  let remainMin = parseInt(rest / 60);
  let remainSec = parseInt(rest % 60);
  countTime.textContent = `금일 오픈까지 남은 시간: ${remainHour}:${remainMin}:${remainSec}`;
} else if (nowtotal >= startTime && nowtotal < endTime) {
  total = endTime - nowtotal;
  let remainHour = parseInt(total / 3600);
  let rest = total % 3600;
  let remainMin = parseInt(rest / 60);
  let remainSec = parseInt(rest % 60);
  countTime.textContent = `금일 마감까지 남은 시간: ${remainHour}:${remainMin}:${remainSec}`;
} else {
  countTime.textContent = "금일 마감";
}
