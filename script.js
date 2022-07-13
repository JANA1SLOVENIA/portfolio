const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
const ongsb = document.getElementById("ongsb");


checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$0" ? "$2.09" : "$0";
  ongsb.textContent = ongsb.textContent === "No ongoing support" ? "Ongoing support" : "No ongoing support";
  professional.textContent =
    professional.textContent === "$4.18" ? "$12.54" : "$4.18";
  master.textContent = master.textContent === "$16.72" ? "$52.24" : "$16.72";
});


let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function(){
    copyText.classList.remove("active");
  },2500);
});