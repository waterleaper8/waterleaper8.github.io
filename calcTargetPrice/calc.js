const resultUpper = document.getElementById("result__upper")
const resultLower = document.getElementById("result__lower")
const upperLine = document.getElementById("upperLine")
const lowerLine = document.getElementById("lowerLine")

console.log(resultUpper)
const calcTargetPrice = (e) => {
  const purchasePrice = document.getElementById("purchasePrice").value
  const resultUpperNum = purchasePrice * upperLine.value
  const resultLowerNum = purchasePrice * (1 + Number(lowerLine.value))
  resultUpper.innerText = Math.round(resultUpperNum)
  resultLower.innerText = Math.round(resultLowerNum)
}
