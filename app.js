// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const usernameErr = username.nextElementSibling
const email = document.getElementById('email')
const emailErr = email.nextElementSibling
const password = document.getElementById('password')
const passwordErr = password.nextElementSibling
const password2 = document.getElementById('password2')
const password2Err = password2.nextElementSibling
// const usernameErr = document.getElementById("usernameErr")

// 2. Add event / modification

regForm.addEventListener('click', function (e) {
  e.preventDefault()

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.className = 'block text-white bg-red-500'
  } else {
    console.log('sending to server')
    
  }

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

})
