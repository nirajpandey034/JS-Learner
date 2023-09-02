const nameField = document.getElementById("_name");
const cityField = document.getElementById("_city");
const emailField = document.getElementById("_email");
const passwordField = document.getElementById("_password");

const submitButton = document.getElementById("_submitBtn");

// error messages
const nameError = document.getElementById("name_error");
const cityError = document.getElementById("city_error");
const emailError = document.getElementById("email_error");

const specialCharacterFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const emailFormat = /\S+@\S+\.\S+/;

let readyToSubmit = {
  name: false,
  city: false,
  email: false,
  password: false,
};

const nameValidator = (e) => {
  if (e.target.value.length <= 5) {
    nameError.innerHTML = "Name should have at least 5 characters";
    nameError.style.color = "red";
    readyToSubmit.name = false;
  } else if (e.target.value.length === 0) {
    nameError.innerHTML = "Name field cannot be empty";
    nameError.style.color = "pink";
    readyToSubmit.name = false;
  } else {
    nameError.innerHTML = "";
    readyToSubmit.name = true;
  }
};

const cityValidator = (e) => {
  if (e.target.value.length === 0) {
    cityError.innerHTML = "City field cannot be empty";
    cityError.style.color = "red";
    readyToSubmit.city = false;
  } else {
    cityError.innerHTML = "";
    readyToSubmit.city = true;
  }
};

const emailValidator = (e) => {
  if (emailFormat.test(e.target.value)) {
    emailError.innerHTML = "";
    readyToSubmit.email = true;
  } else {
    emailError.innerHTML = "Provide correct email address";
    emailError.style.color = "red";
    readyToSubmit.email = false;
  }
};

const passwordValidator = (e) => {
  let password = e.target.value;
  let cond_1,
    cond_2,
    cond_3 = false;

  // checking first criteria
  if (password.length > 5) {
    document.getElementById("pass_criteria_1").style.color = "green";
    cond_1 = true;
  } else {
    document.getElementById("pass_criteria_1").style.color = "red";
    cond_1 = false;
  }

  // checking 2nd criteria
  if (specialCharacterFormat.test(password)) {
    document.getElementById("pass_criteria_2").style.color = "green";
    cond_2 = true;
  } else {
    document.getElementById("pass_criteria_2").style.color = "red";
    cond_2 = false;
  }
  // checking 3rd criteria
  const separatedName = nameField.value.split(" ");
  if (
    password.toLowerCase().includes(separatedName[0].toLowerCase()) ||
    password.length === 0
  ) {
    document.getElementById("pass_criteria_3").style.color = "red";
    cond_3 = false;
  } else {
    document.getElementById("pass_criteria_3").style.color = "green";
    cond_3 = true;
  }
  if (cond_1 && cond_2 && cond_3) {
    readyToSubmit.password = true;
  } else readyToSubmit.password = false;
};

const handleSubmit = () => {
  if (
    Object.keys(readyToSubmit).filter((item) => readyToSubmit[item] === false)
      .length > 0
  )
    alert("Sorry, We will NOT be able to continue");
  else alert("Congratulations, We can continue now.");
};
nameField.addEventListener("input", nameValidator);
cityField.addEventListener("input", cityValidator);
emailField.addEventListener("input", emailValidator);
passwordField.addEventListener("input", passwordValidator);

submitButton.addEventListener("click", handleSubmit);
