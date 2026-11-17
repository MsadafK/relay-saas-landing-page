const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  });
});

const billingOptions = document.querySelectorAll('.billing-option');
const planPrice = document.querySelector('.featured-price .price strong');
const pricePeriod = document.querySelector('.featured-price .price-period');

billingOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const isYearly = option.dataset.period === 'yearly';
    billingOptions.forEach((item) => {
      const isActive = item === option;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    planPrice.textContent = planPrice.dataset[isYearly ? 'yearly' : 'monthly'];
    pricePeriod.textContent = isYearly ? '/ person, monthly, billed yearly' : '/ person, monthly';
  });
});

const form = document.querySelector('#demo-form');
const successMessage = document.querySelector('#form-success');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  field.setAttribute('aria-invalid', String(Boolean(message)));
  field.setAttribute('aria-describedby', error.id);
  error.textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name;
  const email = form.elements.email;
  const nameError = name.value.trim().length < 2 ? 'Please enter your name (at least 2 characters).' : '';
  const emailError = emailPattern.test(email.value.trim()) ? '' : 'Please enter a valid email address.';

  showError(name, nameError);
  showError(email, emailError);

  if (nameError || emailError) {
    form.querySelector('[aria-invalid="true"]')?.focus();
    successMessage.classList.remove('visible');
    return;
  }

  successMessage.classList.add('visible');
  successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  form.reset();
  name.removeAttribute('aria-invalid');
  email.removeAttribute('aria-invalid');
  name.removeAttribute('aria-describedby');
  email.removeAttribute('aria-describedby');
  document.querySelectorAll('.field-error').forEach((error) => { error.textContent = ''; });
});

form.querySelectorAll('input').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') showError(field, '');
    successMessage.classList.remove('visible');
  });
});
