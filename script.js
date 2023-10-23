"use strict"

// BURGER

document.querySelector(".header__burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-header").classList.toggle("open");
})

// RAINBOW TEXT IN GEADER BUTTON

let text = document.querySelector(".header__button");
text.innerHTML = text.innerText
  .split("")
  .map(
    (letters, i) =>
      `<span style="transition-delay:${i * 25}ms; filter:hue-rotate(${
        i * 25
      }deg)">${letters}</span>`
  )
   .join("");
  

// SWIPER


const swiperEnterprises = document.querySelector(".swiper-enterprises");

if (swiperEnterprises) {

const swiper = new Swiper(".swiper-enterprises", {
  // Optional parameters
  autoHeight: true,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },


  autoplay: {
    delay: 2000,
  }, 

  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    575: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 5,
    }
  }


});
}
  

// RATING


const ratings = document.querySelectorAll(".rating-clients");
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating-clients__active");
    ratingValue = rating.querySelector(".rating-clients__value");
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

}