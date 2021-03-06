class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.leftButton = this.carousel.querySelector('.left-button');
        this.slide();
      }

      slide() {
          if (this.rightButton) {
            this.rightButton.addEventListener('click', ()=>{
                this.images.forEach(image => {
                  image.setAttribute('style', 'transform:translateX(-' + 100 + '%)');
                });
            })
          } else if (this.leftButton) {
            this.leftButton.addEventListener('click', ()=>{
                this.images.forEach(image => {
                  image.setAttribute('style', 'transform:translateX(+' + 100 + '%)');
                });
            })
          }
          
      }
      
    
}

let carousel = document.querySelector('.carousel');
let slide = new Carousel(carousel);
console.log(slide);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
