// Đồng hồ thời gian thực
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.innerText = "⏰ " + now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock();

// Lời chào theo tên
function sayHello() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");
  if (name.trim() !== "") {
    greeting.innerText = "Xin chào, " + name + " 🎉";
  } else {
    greeting.innerText = "Bạn chưa nhập tên!";
  }
}

// Đổi theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}
