const refresh = () => {
  const button = document.getElementById('refreshButton');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
  })
}