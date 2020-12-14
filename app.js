// 1. get DOM element
const regForm = document.getElementById('registration-form')
<<<<<<< HEAD
const username = document.getElementById('username')
const usernameErr = username.nextElementSibling
const email = document.getElementById('email')
const emailErr = email.nextElementSibling
const password = document.getElementById('password')
const passwordErr = password.nextElementSibling
const password2 = document.getElementById('password2')
const password2Err = password2.nextElementSibling
// const usernameErr = document.getElementById("usernameErr")
=======
>>>>>>> upstream/main

const username = document.getElementById('username')
const email = document.getElementById('email')

regForm.addEventListener('submit', function (e) {
  e.preventDefault()

<<<<<<< HEAD
  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.className = 'block text-white bg-red-500'
  } else {
    console.log('sending to server')
    
=======
  validateEmpty(username)

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
})

function validateEmpty(input) {
  console.log(input)
  if (input.value === '') {
      showError(input)
  } else {
      showSuccess(input)
>>>>>>> upstream/main
  }
}

<<<<<<< HEAD
  //@TODO: add the validation for email
  if (email.value === '') {
    emailErr.className = 'block text-white bg-red-500'
  } else {
    console.log('sending to server')
  }

  //@TODO: add the validation for password
  if (password.value === '') {
    passwordErr.className = 'block text-white bg-red-500'
  } else {
    console.log('sending to server')
  }

  if (password2.value === '') {
    password2Err.className = 'block text-white bg-red-500'
  } else {
    console.log('sending to server')
  }
=======
function showError(input){
  // steps to do this...
  console.log('input is empty')
}

function showSuccess () {
    console.log('you are ready to submit')
}
>>>>>>> upstream/main

function validatePassMatch(password1, password2){
  //@TODO: check if the passwords match
}

function validateIsEmail(email){
  //@TODO: check if input is an email
}


function validateMinLength(input){
  //@TODO: check length
}