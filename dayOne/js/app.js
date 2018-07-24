window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop running of script
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  console.log(key);
});

function removeTransition(e) {
  if(e.propertyName !== 'tranform') return;
  this.clasList.remove('playing');
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
