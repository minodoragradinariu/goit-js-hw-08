import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Funcție pentru a salva datele în localStorage
const saveFormState = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

// Funcție pentru a încărca datele salvate din localStorage
function loadFormState() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
}

// Eveniment de input pentru a salva datele
form.addEventListener('input', saveFormState);

// Eveniment de submit pentru a trimite datele și a le șterge din localStorage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  // Curățăm formularul și localStorage
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});

// Încărcăm datele salvate la pornirea paginii
loadFormState();

