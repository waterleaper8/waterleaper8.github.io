"use strict"

const toggle = document.querySelector(".toggle")
const toggleInput = toggle.querySelector(".toggle__input")
toggle.addEventListener("click", function () {
  if (toggleInput.checked) {
    toggleInput.removeAttribute("checked")
    toggleInput.checked = false
  } else {
    toggleInput.setAttribute("checked", "")
    toggleInput.checked = true
  }
})
