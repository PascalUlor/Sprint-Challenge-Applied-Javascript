class Carousel {
    constructor(carousel) {
        this.CarouselClass = 'carousel__photo';
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.leftButton = this.carousel.querySelector('.left-button');
        this.Count = this.images.length;
        this.slide = 0;
        this.moving= true;
        this.initCarousel();
      }

      // Set classes
    setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    this.images[this.Count - 1].classList.add("prev");
    this.images[0].classList.add("active");
    this.images[1].classList.add("next");
  }
  // Set event listeners
  setEventListeners() {
    this.rightButton.addEventListener('click', ()=>this.moveNext());
    this.leftButton.addEventListener('click', ()=>this.movePrev());
  }

  // Next navigation handler
moveNext() {
    // Check if moving
    if (!this.moving) {
      // If it's the last slide, reset to 0, else +1
      if (this.slide === (this.Count - 1)) {
        this.slide = 0;
      } else {
        this.slide++;
      }
      // Move carousel to updated slide
      this.moveCarouselTo(this.slide);
    }
  }
  // Previous navigation handler
  movePrev() {
    // Check if moving
    if (!this.moving) {
      // If it's the first slide, set as the last slide, else -1
      if (this.slide === 0) {
        this.slide = (this.Count - 1);
      } else {
        this.slide--;
      }
            
      // Move carousel to updated slide
      this.moveCarouselTo(this.slide);
    }
  }

  disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    this.moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(() =>{
      this.moving = false
    }, 500);
  }

  moveCarouselTo(slide) {
    console.log(this.images[slide].className);
    // Check if carousel is moving, if not, allow interaction
    if(!this.moving) {
      // temporarily disable interactivity
      this.disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 2,
          oldNext = slide + 2;
      // Test if carousel has more than three items
      if ((this.Count) > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = (this.Count - 1);
        } else if (newNext >= (this.Count - 1)){
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (this.slide === 0) {
          newPrevious = (this.Count - 1);
          oldPrevious = (this.Count - 2);
          oldNext = (this.slide + 1);
        } else if (this.slide === (this.Count -1)) {
          newPrevious = (this.slide - 1);
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going, 
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        this.images[oldPrevious].className = this.CarouselClass;
        this.images[oldNext].className = this.CarouselClass;
        // Add new classes
        this.images[newPrevious].className = this.CarouselClass + " prev";
        this.images[this.slide].className = this.CarouselClass + " active";
        this.images[newNext].className = this.CarouselClass + " next";
      }
    }
  }

  initCarousel() {
    this.setInitialClasses();
    this.setEventListeners();
    // Set moving to false so that the carousel becomes interactive
    this.moving = false;
  }    
      
    
}

let carousel = document.querySelector('.carousel');
let slide = new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
