function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

// Dark / light mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode(); // Set light mode initially
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  // Add the dark theme class to the body
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");

  // Set the theme-specific cursor border color
  const cursor = document.querySelector(".cursor");
  cursor.style.borderColor = "white"; // Change to white border for dark mode

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");

  // Remove the dark theme class from the body
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");

  // Set the theme-specific cursor border color
  const cursor = document.querySelector(".cursor");
  cursor.style.borderColor = "black"; // Change to black border for light mode

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}



// Cursor 
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
  });

  document.addEventListener("mouseenter", function () {
      cursor.style.opacity = 1;
  });

  document.addEventListener("mouseleave", function () {
      cursor.style.opacity = 0;
  });
});



// button switch effect 

document.querySelector('.btn-container').addEventListener('mouseover', () => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('hover-effect');
  });
});

document.querySelector('.btn-container').addEventListener('mouseout', () => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.remove('hover-effect');
  });
});


