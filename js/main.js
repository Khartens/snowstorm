


//Ru EN
// let div = document.getElementsByClassName('dropdown-content');

//   for(let  i =0;i<div.length;i++){

//   for(let  j =0;j<div[i].children.length;j++){

//    div[i].children[j].addEventListener('click',function(){

//      this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
//    })
//   }
//   }
// document.querySelector('.header__wrapper-dropdown').addEventListener('click', function() {
//   let elementOne = document.querySelector('.header__wrapper-dropdown_content');
//   const drop = document.querySelector('.header__wrapper-dropdown');
//   if (elementOne.classList.contains("drop_active")) {
//     elementOne.classList.remove("drop_active");
//     drop.classList.remove("drop_main");
//   } else {
//     elementOne.classList.add("drop_active");
//     drop.classList.add("drop_main");
//   }
  
//   document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(drop);
//     if(!click) {
//       elementOne.classList.remove("drop_active");
//       drop.classList.remove("drop_main");
//     }
//   })
// })
//popu-modal внутри открытие списка
const openNews = document.querySelector('.open-news'),
      news = document.querySelector('.pop-up_menu__content-wrapper_news');
      arrowTransform = document.querySelector('.pop-up_menu__content-list_arrow');
openNews.addEventListener('click', () => {
    news.classList.toggle('active-news');
    arrowTransform.classList.toggle('active-arrow')
})

// header скролл 
const header = document.querySelector('.header'); // Здесь класс шапки
window.addEventListener('scroll', function() {
  if (window.scrollY >= 1) {
    header.classList.add('header-scroll'); // Добавить класс, который будет менять стили
  } else {
    header.classList.remove('header-scroll'); // Убрать
  }
});

// Обрезание текста
  Ellipsis({
    ellipsis: '…',
    debounce: 100,
    responsive: true,
    className: '.card__item-text',
    lines: 9,
    portrait: null,
    break_word: true
  });
// POPUP
document.addEventListener('DOMContentLoaded', function() {
  let btnModal = document.querySelectorAll('.btn-modal');
  let closeModal = document.querySelectorAll('.modal__close');
  let overlay = document.querySelector('.overlay');
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let fixBlock = document.querySelectorAll('.fix-block');
  btnModal.forEach(function(item) {
      item.addEventListener('click', function (e) {
          e.preventDefault()
          let modalName = this.getAttribute('data-modal');

          let modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

          modal.classList.add('show');
          overlay.classList.add('show');
          document.body.style.paddingRight = paddingOffset;
          fixBlock.forEach((el) => {
            el.style.paddingRight = paddingOffset;
          })
          document.body.style.overflow = 'hidden';
          overlay.addEventListener('click', (e) => {
              if(e.target === overlay) {
                  modal.classList.remove('show');
                  overlay.classList.remove('show');
                  document.body.style.paddingRight = '0px';
                  fixBlock.forEach((el) => {
                    el.style.paddingRight = '0px';
                  })
                  document.body.style.overflow = '';
              }
          })
          document.addEventListener('keydown', (e) => {
              if(e.code === 'Escape' && modal.classList.contains('show')) {
                  modal.classList.remove('show');
                  overlay.classList.remove('show');
                  document.body.style.paddingRight = '0px';
                  fixBlock.forEach((el) => {
                    el.style.paddingRight = '0px';
                    document.body.style.overflow = '';
                  })
              }
          })
      });
  })
  closeModal.forEach(function(close) {
      close.addEventListener('click', function() {
          let parent = this.parentNode;
          parent.classList.remove('show');
          overlay.classList.remove('show');
          document.body.style.paddingRight = '0px';
          fixBlock.forEach((el) => {
            el.style.paddingRight = '0px';
            document.body.style.overflow = '';
          })
      })
  });
});

//slider
const picture = document.querySelector('.picture');
const swiper = new Swiper('.main__wrapper-swiper', {
  loop: true,
  mousewheel: {
    // sensitivity: 1,
    // eventsTarget: '.main'
  },
  autoHeight: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+ '0' + (index + 1) + "</span>";
    },
  },
});

//lazy
const observer = lozad();
observer.observe();


let swiper_one = new Swiper(".team__container-content_slider", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
  breakpoints: {
    500: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});
let swiper__two = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
});


//Маска для телефона
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.slice(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});

function chg() {
  document.querySelectorAll(".main__wrapper-content_buttons-wrap").style.width = "300px";
}

// Загрузка файла
window.addEventListener('load', ()=> {
  const input = document.getElementById('upload');
  const filewrapper = document.getElementById('form-file_wrapper');

  input.addEventListener('change', (e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split('.').pop();
    fileshow(fileName, filetype);
  })

  const fileshow = (fileName, filetype) => {
    const showfileboxElem = document.createElement('div');
          showfileboxElem.classList.add('form-file_wrapper-box');
    const leftElem = document.createElement('div');
          leftElem.classList.add('form-file_wrapper-box_left');
    const fileTypeElem = document.createElement('span')
          fileTypeElem.classList.add('form-file_wrapper-box_img'); 
    leftElem.append(fileTypeElem);

    const filetiteleElem = document.createElement('p');
    filetiteleElem.innerHTML=fileName;
    leftElem.append(filetiteleElem);
    showfileboxElem.append(leftElem);

    const rightElem = document.createElement('div');
    rightElem.classList.add('right');
    showfileboxElem.append(rightElem);
    // const crossElem = document.createElement('span');
    // crossElem.innerHTML="&#215;";
    // rightElem.append(crossElem); // удаление 
    
    filewrapper.append(showfileboxElem);

    // crossElem.addEventListener('click',() => {
    //   filewrapper.removeChild(showfileboxElem)
    // }) //удаление
  }
})

//Появление popup
document.querySelectorAll('.main__wrapper-content_items-btn').forEach(button => {
  button.addEventListener('click', function(event) {
      document.querySelectorAll('.main__wrapper-content_items-shell').forEach(item => {
          item.classList.remove('active');
      })
      event.isClick = true
      button.parentElement.classList.toggle('active')
  })
})

document.body.addEventListener('click', function(event) {
  if(
      event._isClick = true || 
      event.target.classList.contains('main__wrapper-content_items-btn') == true ||
      event.target.classList.contains('main__wrapper-content_items-card') == true
  ) return
  document.querySelectorAll('.main__wrapper-content_items-shell').forEach(item => {
      item.classList.remove('active');
      stopVideo();
  })
})
document.querySelectorAll('.main__wrapper-content_items-card_text-close').forEach(button => {
  button.addEventListener('click', function(event) {
      document.querySelectorAll('.main__wrapper-content_items-shell').forEach(item => {
          item.classList.remove('active');
      })
  })
})

//видео ютуб

let video = document.querySelector('.video'),
    modalClose = document.querySelector('.video__wrapper-close'),
    videoWrap = document.querySelector('.video__wrapper')
 
    if(video) {
      function playVideo() {
        video.classList.add('video-active');
        let iframe = document.createElement('iframe');
        iframe.setAttribute("src", "https://www.youtube.com/embed/9Cmdjpu3E_o?si=WzYhPsjvEfT_9nAI");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" );
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.classList.add('modal_vid')
      
        videoWrap.append(iframe);
      }
      modalClose.addEventListener('click', function(){
        let modalvid = document.getElementsByClassName('modal_vid')[0];
        video.classList.remove('video-active');
        modalvid.remove();
      });
    }