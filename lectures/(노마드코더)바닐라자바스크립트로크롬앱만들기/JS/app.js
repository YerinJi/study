const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
  event.preventDefault(); //이벤트의 기본 행동이 발생되지 않도록 막는 것. preventDefault
  console.log("Hello " + loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
