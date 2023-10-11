const enlace1 = document.querySelector(".enlace1");
const enlace2 = document.querySelector(".enlace2");
const enlace3 = document.querySelector(".enlace3");

const ulnesting1 = document.querySelector(".ul_nesting1");
const ulnesting2 = document.querySelector(".ul_nesting2");
const ulnesting3 = document.querySelector(".ul_nesting3");

// enlace1.onclick = () => {
//   ulnesting1.classList.remove("activo");
// };
enlace1.addEventListener("click", () => {
  ulnesting1.classList.toggle("activo");
});
enlace2.addEventListener("click", () => {
  ulnesting2.classList.toggle("activo");
});
enlace3.addEventListener("click", () => {
  ulnesting3.classList.toggle("activo");
});
