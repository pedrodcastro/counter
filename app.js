const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }

    switch (true) {
      case count > 0:
        value.style.color = '#5F8575';
        break;
      case count < 0:
        value.style.color = '#D22B2B';
        break;
      default:
        value.style.color = '#333';
        break;
    }
    value.textContent = count;
  });
});
