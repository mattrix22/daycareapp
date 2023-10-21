const submitBtn = document.getElementById('submit');
const container = document.getElementById('main-container');
const firstNameEl = document.getElementById('first-name');
const lastNameEl = document.getElementById('last-name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const enrollEl = document.getElementById('date');
const passwordEl = document.getElementById('password');
const secondPasswordEl = document.getElementById('second-password');

const users = [];

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createUser(
    firstNameEl.value,
    lastNameEl.value,
    emailEl.value,
    phoneEl.value,
    enrollEl.value,
    passwordEl.value,
    secondPasswordEl.value
  );
  displaySuccessMessage();
});

const createUser = function (
  fName,
  lName,
  email,
  phone,
  enrollDate,
  password,
  secondPassword
) {
  // const firstName =

  const user = {
    firstName: fName,
    lastName: lName,
    email: email,
    phone: phone,
    enrollDate: enrollDate,
    password: password,
  };
  users.push(user);
  console.log(users);
};

// Displays message once submitted form has met requirements.
const displaySuccessMessage = function () {
  container.innerHTML = `<div class="py-10 px-28 shadow shadow-slate-300">
  <p class="text-3xl font-bold">Thank you!</p>
  <p class="font-semibold">Account Created</p>
  <a href="./dashboard.html" class="w-full block text-center bg-green-400 rounded mt-5 py-3 text-white font-bold tracking-widest uppercase hover:bg-green-500" id-"continue">Continue</a></div>`;
  console.log('Button pressed');
};
