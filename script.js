let formRegistration = document.getElementById("registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  // usernameField
  let username = document.getElementById("username").value;

  if (username == " " && username.length < 5) {
    errors.username = "U must fill username field !";
  }
  if (username.length < 5) {
    errors.username = "U must use more than 5 characters !";
  }

//   email

let validEmail = document.getElementById("email");

validEmail.addEventListener("keydown", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("error_email");
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (emailValue.match(regex)) {
      errorEmail.textContent = 'Your email is valid !';
      errorEmail.style.color = 'white';
  }else{
      errorEmail.textContent = 'Your email is invalid';
      errorEmail.style.color = 'red';
  }

  });

  // password
  let password = document.getElementById("password").value;

  if (password == "") {
    errors.password = "Enter Password First !";
  }

  let pass2 = document.getElementById("pass2").value;

  if (pass2 != password) {
    errors.pass2 = "passwords do not match !";
  }

  // checkbox

  let agree = document.getElementById("agree").checked;

  if (!agree) {
    errors.agree = "U must agree terms and conditions !";
  }

  // radio
  let gender = false;

  formRegistration.querySelectorAll('[name = "gender"]').forEach((element) => {
    if (element.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select your gender !";
  }

  console.log(errors);

  for (let item in errors) {
    let spancontent = document.getElementById("error_" + item);

    if (spancontent) {
      spancontent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }

  // show / hide button ვერ გავაკეთეეეე!

  let toggleIcon = document.getElementById("toggleIcon");
  let newPassword = document.getElementById("password");

  toggleIcon.addEventListener("click", function () {
    if (newPassword.type == "password") {
      newPassword.setAttribute("type", "text");
    }
  });



});
