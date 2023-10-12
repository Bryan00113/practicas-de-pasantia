const ulnesting1 = document.querySelector(".ul_nesting1 ");
const ulnesting2 = document.querySelector(".ul_nesting2");
const ulnesting3 = document.querySelector(".ul_nesting3");

document.querySelector(".enlace1").addEventListener("click", function () {
  setTimeout(function () {
    ulnesting1.classList.toggle("activo");
  }, 2000);
});
document.querySelector(".enlace2").addEventListener("click", function () {
  setTimeout(function () {
    ulnesting2.classList.toggle("activo");
  }, 2000);
});
document.querySelector(".enlace3").addEventListener("click", function () {
  setTimeout(function () {
    ulnesting3.classList.toggle("activo");
  }, 2000);
});
