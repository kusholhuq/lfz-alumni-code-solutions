const contactForm = document.querySelector("#contact-form");

function submitHandler (event) {
  event.preventDefault();
  const formValueObject = {
    email: contactForm.elements.email.value,
    name: contactForm.elements.name.value,
    message: contactForm.elements.message.value
  }
  console.log(formValueObject);
  contactForm.reset();
}

contactForm.addEventListener('submit', submitHandler);
