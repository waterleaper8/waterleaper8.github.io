const resultUpper = document.getElementById("result__upper")
const resultLower = document.getElementById("result__lower")
const upperLine = document.getElementById("upperLine")
const lowerLine = document.getElementById("lowerLine")

const init = () => {
  upperLine.querySelector(
    `option[value="${localStorage["upperLine"]}"]`
  ).selected = true
  lowerLine.querySelector(
    `option[value="${localStorage["lowerLine"]}"]`
  ).selected = true
}

const saveValue = () => {
  localStorage.setItem("upperLine", upperLine.value)
  localStorage.setItem("lowerLine", lowerLine.value)
}

const calcTargetPrice = () => {
  const purchasePrice = document.getElementById("purchasePrice").value
  const resultUpperNum = purchasePrice * upperLine.value
  const resultLowerNum = purchasePrice * (1 + Number(lowerLine.value))
  resultUpper.innerText = Math.round(resultUpperNum)
  resultLower.innerText = Math.round(resultLowerNum)
}

const onChangeHandler = () => {
  saveValue()
  calcTargetPrice()
}

window.onload = () => {
  init()
}
