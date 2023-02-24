const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const submitButton = document.querySelector("#submitButton");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    nameError.style.display = "none";
    // firstName.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validatEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // if (
  //   checkLength(firstName.value, 0) === true &&
  //   checkLength(subject.value, 9) === true &&
  //   checkLength(address.value, 25) === true &&
  //   validatEmail(email.value) === true
  // ) {
  //   submitButton.disabled = false;
  // } else {
  //   submitButton.disabled = true;
  // }

  // if (firstName.value.trim().length > 0) {
  //   firstName.style.display = "none";
  // } else {
  //   nameError.style.display = "block";
  // }

  // if (subject.value.trim().length > 9) {
  //   subjectError.style.display = "none";
  // } else {
  //   subjectError.style.display = "block";
  // }

  // if (email.value.trim().length > 0) {
  //   emailError.style.display = "none";
  // } else {
  //   emailError.style.display = "block";
  // }

  // if (address.value.trim().length > 24) {
  //   subjectError.style.display = "none";
  // } else {
  //   addressError.style.display = "block";
  // }

  console.log("");
}

form.addEventListener("submit", validateForm);

// use this function to check for length
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validatEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
