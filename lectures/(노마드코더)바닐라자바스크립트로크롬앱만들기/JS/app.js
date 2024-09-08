const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); //이벤트의 기본 행동이 발생되지 않도록 막는 것. preventDefault
  console.log("Hello " + loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
