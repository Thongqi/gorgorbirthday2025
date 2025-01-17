import confetti from 'https://cdn.skypack.dev/canvas-confetti';


document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById("btn")
  console.log(btn)
  btn.addEventListener("click", makeConfetti)

  
})

function makeConfetti(){
    
  const vouchers = ['alps', 'azusa']
  const gift = Math.floor(Math.random() * vouchers.length);
  console.log(vouchers[gift])
  var show = vouchers[gift];
  document.getElementById(show).classList.remove('d-none')
  document.getElementById("btn").classList.add('d-none')
  confetti()
}
