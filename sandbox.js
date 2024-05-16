let carouselIndex = 0;

function prev() {
  carouselIndex--;
  if (carouselIndex < 0) {
    carouselIndex = 3;
  }
  updateCarousel();
}

function next() {
  carouselIndex++;
  if (carouselIndex > 3) {
    carouselIndex = 0;
  }
  updateCarousel();
}

function goto(index) {
  carouselIndex = index;
  updateCarousel();
}

function updateCarousel() {
  let carouselItems = document.querySelectorAll('.carousel-item');
  let carouselIndicators = document.querySelectorAll('.carousel-indicators button');
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    carouselIndicators[index].classList.remove('active');
  });
  carouselItems[carouselIndex].classList.add('active');
  carouselIndicators[carouselIndex].classList.add('active');
}

