
// maincontent:sec1-----------------------------------



// add-content:sec1-----------------------------------
const $addBtn = document.getElementById('add-btn');

$addBtn.addEventListener('click', () => {
  alert('create-itemのdivを出現させるYO')
  // sec2内の画面をdisplay:noneを解除します
});


// create-item:sec2-----------------------------------
const $closeBtn = document.getElementsByName('close-btn');
$closeBtn[0].addEventListener('click', ()=> {
  alert('とじたいYo')
})


const $done = document.getElementsByName('done');

$done[0].addEventListener('click', (e) => {
  alert('追加したいYO')
})