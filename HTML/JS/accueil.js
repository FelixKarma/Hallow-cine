
function timer() {

    setTimeout(function() {
        document.location.assign("accueil light.html");
    }, 5000);
  }
  
  const button = document.querySelector('#button');
  const canvas = document.querySelector('#confetti');
  


  
  const jsConfetti = new JSConfetti();
  
  button.addEventListener('click', () => {
      jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      }).then(() => jsConfetti.addConfetti())
      setTimeout(function() {
        jsConfetti.addConfetti({
          confettiNumber: 2500,
        })
    }, 3000);
  })
