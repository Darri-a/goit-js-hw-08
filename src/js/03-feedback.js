import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
let formData = {};
const formDataJson = localStorage.getItem("feedback-form-state");

if (formDataJson) {
  formData = JSON.parse(formDataJson);
}

const emailInput = document.querySelector("[name=email]");
const messageInput = document.querySelector("[name=message]");

if (formData.email) {
  emailInput.value = formData.email;
}
if (formData.message) {
  messageInput.value = formData.message;
}

form.addEventListener(
  "input",
  throttle((data) => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }, 1000)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem("feedback-form-state"));

  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  form.reset();
});
