import Inputmask from "inputmask";

'use strict';

function menu() {
  const burgerBtn = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.nav-mobile');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

menu();

function modals() {
  const modalCallback = document.querySelector('.modal-enter');
  const modalEnter = document.querySelector('.modal-callback');
  const modalSubscription = document.querySelector('.modal-subscription');

  const headerCallbackBtn = document.querySelector('.header__phones-btn');
  const headerEnterBtn = document.querySelector('.header__btn');
  const footerSubscriptionBtn = document.querySelector('.footer__form-btn');
  const modalCloseBtns = document.querySelectorAll('.modal__close');

  headerCallbackBtn.addEventListener('click', () => {
    modalCallback.classList.add('active');
  });

  headerEnterBtn.addEventListener('click', () => {
    modalEnter.classList.add('active');
  });

  footerSubscriptionBtn.addEventListener('click', () => {
    new window.JustValidate(".footer__form", {
      email: {
        required: true,
        email: true,
      },
      submitHandler: function (form, value, ajax) {
        if (form) {
          modalSubscription.classList.add('active');
        }
      }
    });
  });


  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalEnter.classList.remove('active');
      modalCallback.classList.remove('active');
      modalSubscription.classList.remove('active');
    });
  });
}

modals();

function tabs() {
  const tabsContents = document.querySelectorAll('.service__content');
  const tabsBtns = document.querySelectorAll('.service__btns-btn');
  const tabsContainer = document.querySelector('.service__tabs');

  tabsContainer.addEventListener('click', event => {
    const id = event.target.dataset.id;

    if (id) {
      tabsBtns.forEach(btn => {
        btn.classList.remove('active');
        event.target.classList.add('active');
      });

      tabsContents.forEach(content => {
        content.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

tabs();

function counter() {
  const productBtns = document.querySelectorAll('.products__item-buy');
  const favoriteBtns = document.querySelectorAll('.favorite--btn');
  const compareBtns = document.querySelectorAll('.compare--btn');

  let productBasket = document.querySelector('.header__icons-basket');
  let favoriteIcon = document.querySelector('.header__favorite--icon');
  let compareIcon = document.querySelector('.header__compare--icon');

  productBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      productBasket.innerHTML++;
    });
  });

  favoriteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      favoriteIcon.style.display = 'block';
      favoriteIcon.innerHTML++;
    });
  });

  compareBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      compareIcon.style.display = 'block';
      compareIcon.innerHTML++;
    });
  });
}

counter();

function phoneMask() {
  let phoneMask = document.querySelector('.modal-enter__form-input');
  let im = new Inputmask('+38 (099) 999-99-99');

  im.mask(phoneMask);
}

phoneMask()

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form, value, ajax) {
      console.log(form);
      console.log(value);
    }
  });
}

validateForms('.modal-callback__form', {
  email: {
    required: true,
    email: true,
  },
  password: {
    required: true,
    password: true,
    minLength: 4,
  },
  checkbox: {
    required: true,
  }
});

validateForms('.modal-enter__form', {
  tel: {
    required: true,
  },
});

validateForms('.service__search', {
  search: {
    required: true,
    minLength: 2
  },
});


validateForms('.service__form', {
  select1: {
    required: true,
  },
  select2: {
    required: true,
  },
  select3: {
    required: true,
  },
  select4: {
    required: true,
  },
  select5: {
    required: true,
  },
  number1: {
    required: true,
    function: (name, value) => {
      return value >= 0 ? true : false;
    }
  },
  number2: {
    required: true,
    function: (name, value) => {
      return value >= 0 ? true : false;
    }
  },
});
