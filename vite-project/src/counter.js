export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const playPauseBtn = document.getElementById('playPauseBtn');
playPauseBtn.addEventListener('click', () => {
  // Toggle the 'active' class for the button
  playPauseBtn.classList.toggle('active');

  // Change the icon inside the button
  const icon = playPauseBtn.querySelector('i');
  if (icon.classList.contains('fa-play')) {
    icon.classList.replace('fa-play', 'fa-pause');
  } else {
    icon.classList.replace('fa-pause', 'fa-play');
  }
});