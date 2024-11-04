const gameCard = document.getElementById('gameCard');

gameCard.addEventListener('mousedown', () => {
    gameCard.style.backgroundColor = "#DADADA !important";
});

gameCard.addEventListener('mouseup', () => {
    gameCard.style.backgroundColor = "#FFFFFF !important";
});

document.querySelector('.like-heart-btn').addEventListener('click', function(){
    this.classList.toggle('active');
  });
  


  let full = document.querySelector('.full-cont')
  let empty = document.querySelector('.empty-cont')
  this.activated = false;
  full.addEventListener('click',()=> {
    if(this.activated == false) {
      full.classList.add('active'); 
    } else {
      full.classList.add('enabled');
      empty.classList.add('unlike');
      setTimeout(() => {
        full.classList.remove('active');
        full.classList.remove('enabled');
        empty.classList.remove('unlike');
        this.activated = false;
      },500)
    }
    this.activated = true;
  })
  
  