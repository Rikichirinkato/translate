let switched = true;

document.getElementById('clear').addEventListener('click', () => {
    document.querySelector('.input').value = '';
});

document.querySelector('.translator').addEventListener('click', () => {
    document.querySelector('.translator').classList.add('active');
    document.querySelector('.dictionaty').classList.remove('active');
});

document.querySelector('.dictionaty').addEventListener('click', () => {
    document.querySelector('.dictionaty').classList.add('active');
    document.querySelector('.translator').classList.remove('active');
});