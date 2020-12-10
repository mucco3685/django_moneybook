// -------------------------------------------header
// ------下準備start------
// ユーザーが指定した値
let deadLine = 2;

// 現在の日時を取得
let now = new Date();
let currentY = now.getFullYear();
let currentM = now.getMonth() + 1;
let currentD = now.getDate();

// html
const $date = document.getElementById('get-date');
const $deadLine = document.getElementById('dead-line');

// ------下準備end------



// 現在日時をhtmlに表示---
function getNow() {
  let strM = '0' + String(currentM);
  let nowDate = `${currentY}/${strM.slice(-2)}/${currentD}`;
  return nowDate;
}
$date.textContent = getNow();



// あと何日？部分の実装---
let RemainingDays = deadLine - currentD;


// ◆◆◆今月の最終日は？(RemainingDays < 0だった時の準備)◆◆◆
// あとで関数にぶちこみます
let y = currentY;
let m = currentM;

m++;

if (m > 12) {
  m -= 12;
  y = currentY + 1;
}

let getDt = new Date(y, m-1, 1);
console.log(getDt);
getDt.setDate(getDt.getDate() -1);
// getDtが今月末の数字になりました
// ので、あとは計算です
let setEnd = deadLine + getDt.getDate();
let calcDays = (setEnd - currentD)+1;

// ◆◆◆--------------------------------------------◆◆◆

if (RemainingDays >= 0) {
  // 当月が期日だったとき
  $deadLine.textContent = RemainingDays;
} else {
  // 来月が期日だったとき
  // 1.今日～今月の末日までの日数を足し算
  // 2.来月の期日{15} + 1で出した数字
  $deadLine.textContent = calcDays;
}


