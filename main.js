// function check() {
//   const pwd = document.getElementById('pwd').value;
//   if (pwd == '4648') { 
//     window.open("form/sick-leave/67b32db9243b2f60c270ddbd.pdf", "_blank")
//   } else {
//     alert('Неверный код');
//   }
// }

function check(event) {
  event.preventDefault(); // предотвращаем перезагрузку формы

  const codeInput = document.getElementById("pwd");
  const userCode = codeInput.value.trim();

  if (userCode == 4648) { // замените на ваш реальный код
    // скрываем форму
    document.querySelector(".box").style.display = "none";

    // показываем iframe с PDF
    const pdfFrame = document.getElementById("pdf-frame");
    pdfFrame.src = "./form/sick-leave/67b32db9243b2f60c270ddbd.pdf"; // путь к PDF  
    document.getElementById("pdf-container").style.display = "block";
  }
}
