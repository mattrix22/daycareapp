const submitBtn = document.getElementById('submit');
const container = document.getElementById('main-container');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  container.innerHTML = `<div class="py-10 px-28 shadow shadow-slate-300">
  <p class="text-3xl font-bold">Thank you!</p>
  <p class="font-semibold">Account Created</p>
  <a href="./dashboard.html" class="w-full block text-center bg-green-400 rounded mt-5 py-3 text-white font-bold tracking-widest uppercase hover:bg-green-500" id-"continue">Continue</a></div>`;
  console.log('Button pressed');
});
