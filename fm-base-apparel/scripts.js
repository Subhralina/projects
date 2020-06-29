'use strict';

console.log('loaded');

const emailCheck = () => {
  const emailAddress = document.getElementById('email').value;
  const emailInput = document.getElementById('email');
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
  if (emailAddress.match(mailFormat)) {
    emailInput.classList.remove('landing__text__email--red');
    document.getElementById('emailWarning').classList.add('hidden');
  } else if (!emailAddress.match(mailFormat)) {
    emailInput.classList.add('landing__text__email--red');
    document.getElementById('emailWarning').classList.remove('hidden');
  }
}

const checkSubmit = (event) => {
  event.preventDefault();
  emailCheck();
}

const signUp = document.getElementById('signup');

signUp.addEventListener("click", checkSubmit);