function check() {
  const pwd = document.getElementById('pwd').value;
  if (pwd == '4648') { 
    window.open("form/sick-leave/67b32db9243b2f60c270ddbd.pdf", "_blank")
  } else {
    alert('Неверный код');
  }
}