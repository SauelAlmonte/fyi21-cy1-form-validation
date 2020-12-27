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
  
  regForm.addEventListener('submit', function (e) {
    e.preventDefault()

    validateEmpty(username)
    validateEmpty(email)
    validateEmpty(password, password2)
    showError(username)
    showError(email)
    showError(password, password2)
    showSuccess(username)
    showSuccess(email)
    showSuccess(password, password2)
    validateMinLength(username)
    validateIsEmail(email)
    validatePassMatch(password, password2)


    //@TODO: add the validation for email (Code Challenge 5a)
    //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below

    //@TODO: add the validation for password (Code Challenge 5a)
    //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  })

  function validateEmpty(input){
    console.log(input)
    if (input.value === "") {
        showError(input)
    } else {
        showSuccess(input)
    }
  }

      // steps to do this...
  function showError(input){

    console.log('input is empty')
  }
  
  function showSuccess (input){
    console.log('you are ready to submit')
  }

    //@TODO: check if the passwords match
  function validatePassMatch(password, password2){
    
  }
    //@TODO: check if input is an email  
  function validateIsEmail(email){

  }
  
    //@TODO: check length
  function validateMinLength(input){

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

