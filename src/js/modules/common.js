// 不可
// jQuery
// import $ from 'jquery';

// $('.test7').css({ color: 'green', fontSize: 50, 'margin-left': '100px' });




// ES Modules
// export const greet = (name) => {
//   console.log(`おはよう。${name}さん。`);
// };




// グローバルナビゲーションの開閉
const gNavBtn = document.querySelector('.gNavBtn');
const gNavBtnText = document.querySelector('.gNavBtn__text');
const gNavBar = document.querySelector('.gNavBtn__bar');
const gNav = document.querySelector('.gNav');



// メインメニューを開く
const openGnav = () => {
  gNavBtn.ariaLabel = 'メインメニューを閉じる';
  gNavBtn.ariaExpanded = 'true';
  gNavBtnText.textContent = 'Close';
  gNav.ariaHidden = 'false';
};



// メインメニューを閉じる
const closeGnav = () => {
  gNavBtn.ariaLabel = 'メインメニューを開く';
  gNavBtn.ariaExpanded = 'false';
  gNavBtnText.textContent = 'Menu';
  gNav.ariaHidden = 'true';
};



gNavBtn.addEventListener('click', function() {
  document.documentElement.classList.toggle('is-gNavOpen');

  if (gNavBtnText.textContent === 'Menu') {
    openGnav();

    gNavBar.animate(
      {
        backgroundColor: ['#ffffff', 'transparent']
      },
      {
        duration: 300,
        fill: 'forwards'
      }
    );

    gNavBar.animate(
      {
        transform: ['translateY(-9px)', 'translateY(0) rotate(45deg)'],
      },
      {
        duration: 300,
        pseudoElement: '::before',
        fill: 'forwards'
      }
    );

    gNavBar.animate(
      {
        transform: ['translateY(9px)', 'translateY(0) rotate(-45deg)'],
      },
      {
        duration: 300,
        pseudoElement: '::after',
        fill: 'forwards'
      }
    );

    gNav.animate(
      {
        opacity: [0, 1],
        visibility: 'visible'
      },
      {
        duration: 500,
        easing: 'ease',
        fill: 'forwards'
      }
    );
  } else {
    closeGnav();

    gNavBar.animate(
      {
        backgroundColor: ['transparent', '#ffffff']
      },
      {
        duration: 300,
        fill: 'forwards'
      }
    );

    gNavBar.animate(
      {
        transform: ['translateY(0) rotate(45deg)', 'translateY(-9px) rotate(0)']
      },
      {
        duration: 300,
        pseudoElement: '::before',
        fill: 'forwards'
      }
    );

    gNavBar.animate(
      {
        transform: ['translateY(0) rotate(-45deg)', 'translateY(9px) rotate(0)']
      },
      {
        duration: 300,
        pseudoElement: '::after',
        fill: 'forwards'
      }
    );

    gNav.animate(
      {
        opacity: [1, 0],
        visibility: 'hidden'
      },
      {
        duration: 500,
        easing: 'ease',
        fill: 'forwards'
      }
    );
  }
}, false);



const min768 = window.matchMedia('(min-width: 768px)');

min768.addEventListener('change', function(e) {
  if (min768.matches) {
    openGnav();

    gNav.animate(
      {
        opacity: [0, 1],
        visibility: 'visible'
      },
      {
        duration: 0,
        fill: 'forwards'
      }
      );

    document.documentElement.classList.remove('is-gNavOpen');
  } else {
    closeGnav();

    gNav.animate(
      {
        opacity: [1, 0],
        visibility: 'hidden'
      },
      {
        duration: 0,
        fill: 'forwards'
      }
    );
  }
}, false);




// サムネールの拡大表示
const cartThumbnailImages = document.querySelectorAll('.cartSection__thumbnailImage');
const cartLargeImage = document.querySelector('.cartSection__largeImage');

cartThumbnailImages.forEach((cartThumbnailImage, index, array) => {
  cartThumbnailImage.addEventListener('click', (e) => {
    cartLargeImage.src = e.target.src;

    const currentEl = document.querySelector('.is-current');
    currentEl.classList.remove('is-current');

    e.target.classList.add('is-current');
  }, false);
});




// アコーディオン  FAQ

// 🟡 他の Answer を閉じない。

// const questBtns = document.querySelectorAll('.faqAccordion__questionBtn');

// questBtns.forEach((questBtn, index, array) => {
  //   questBtn.addEventListener('click', function(e) {
    //     this.classList.toggle('is-open');

    //     if (this.classList.contains('is-open')) {
//       this.parentElement.nextElementSibling.style.maxHeight = this.parentElement.nextElementSibling.scrollHeight + 'px';
//     } else {
//       this.parentElement.nextElementSibling.style.maxHeight = 0;
//     }
//   }, false);
// });




// 🟡 他の Answer を閉じる。

const questBtns = document.querySelectorAll('.faqAccordion__questionBtn');

questBtns.forEach((questBtn, index, array) => {
  questBtn.addEventListener('click', function(e) {
    const answerEl = this.parentElement.nextElementSibling;

    if (this.classList.contains('is-open')) {
      this.classList.remove('is-open');
      answerEl.style.maxHeight = 0;
    } else {
      const questBtns = document.querySelectorAll('.faqAccordion__questionBtn');

      questBtns.forEach((questBtn) => {
        if (questBtn.classList.contains('is-open')) {
          questBtn.classList.remove('is-open');
          questBtn.parentElement.nextElementSibling.style.maxHeight = 0;
        }
      });

      // or

      // const isOpenEls = document.querySelectorAll('.is-open');
      // console.log(isOpenEls);
      // isOpenEls.forEach((isOpenEl) => {
      //   isOpenEl.classList.remove('is-open');
      //   isOpenEl.parentElement.nextElementSibling.style.maxHeight = 0;
      // });

      this.classList.add('is-open');
      answerEl.style.maxHeight = answerEl.scrollHeight + 'px';
    }
  }, false);
});
