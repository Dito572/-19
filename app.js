
const modalOpenBtn = document.querySelector('#open-modal');
modalOpenBtn.addEventListener('click', () => {
  openModal('.my-modal');
})

function openModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add('visible');
  const modalCloseBtn = modalNode.querySelector('.modal-close');
  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalSelector)
  })
}

function closeModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove('visible');
}
const form = document.querySelector('#user-login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalNumberInput = document.querySelector('input[name="personal_number"]');
const mobileNumberInput = document.querySelector('input["mobile_number"]');
const positionInput = document.querySelector('input["position"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    try {
      console.log(emailInput.value);
    } catch (e) {
      console.log('catch error', e);
    }
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPersonalNumberValid = validatepersonalNumber();
    const isMobileNumberValid = validateMobileNumber();
    const isPositionValid =  validatePosition();
    if(isEmailValid && isPasswordValid && isPersonalNumberValid && isMobileNumberValid){
     closeModal();
    }
  });
  
function validateEmail(){
    if(!emailInput.value){
      emailInput.classList.add('has-error');
      emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
      return false;
    }
    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
      emailInput.classList.add('has-error');
      emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
      return false;
    }
    emailInput.classList.remove('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }
  
  function validatePassword(){
    if(!passwordInput.value){
      passwordInput.classList.add('has-error');
      passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
      return false;
    }
    if(!passwordInput.value.length < 8){
      passwordInput.classList.add('has-error');
      passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
      return false;
    }
    passwordInput.classList.remove('has-error');
    passwordInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }
  function validatepersonalNumber(){
    if (!personalNumberInput.value){
      personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter personal numebr';
      return false;
    }
    if(!personalNumberInput.value.length != 11){
      personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Personal number must inqlude 11 digits';
      return false;
    }
    personalNumberInput.parentNode.querySelector('.error-message').innerText =  '';
    return true;
  }
  function validateMobileNumber(){
    if (!mobileNumberInput.value){
      mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
      return false;
    }
    if(!mobileNumberInput.value.length != 9){('.error-message').innerText = 'Mobile number must inqlude 9 digits';
    return false;
  }
    mobileNumberInput.parentNode.querySelector('.error-message').innerText ='';
    return true;
  }
  function validatePosition(){
    if (!positionInput.value.length > 30){('.error-message').innerText = 'maximum chars of position is 30';
    return false;
    }
    positionInput.parentNode.querySelector('error-message').innerText = '';
    return true
  }