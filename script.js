const home = document.getElementById('home');
const groups = document.getElementById('groups');
const enterGroups = document.getElementById('enterGroups');
const backButton = document.getElementById('backButton');


enterGroups.addEventListener('click', () => {
  home.classList.add('hidden');
  groups.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ groups: true }, '', '#grupos');
});

backButton.addEventListener('click', () => {
  groups.classList.add('hidden');
  home.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({}, '', window.location.pathname);
});

window.addEventListener('popstate', () => {
  const showGroups = location.hash === '#grupos';
  home.classList.toggle('hidden', showGroups);
  groups.classList.toggle('hidden', !showGroups);
});

document.getElementById('year').textContent = new Date().getFullYear();
