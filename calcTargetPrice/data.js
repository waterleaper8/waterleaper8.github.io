const stockName = document.getElementById("stockName")
const purchasePrice = document.getElementById("purchasePrice")
const stockData = document.getElementById("stock-data")
let orgList = []

const initData = () => {
  try {
    orgList = JSON.parse(localStorage["stockData"])
    console.log(orgList)

    // 銘柄リストの最後にある空の銘柄を削除する
    const cardLast = document.getElementById("card-last")
    cardLast.remove()

    orgList.forEach((item) => {
      const newEle = `<div class="card mb-3" style="width: 17rem" id=${item.id}><div class="card-body position-relative"><button type="button" class="btn-sm mt-2 me-2 btn btn-danger position-absolute end-0 top-0 del-btn">✕</button><div class="d-flex justify-content-evenly align-items-center mb-3"><h5 class="card-title">${item.stockName}</h5></div><div class="d-flex justify-content-evenly align-items-center"><div><h6 class="card-subtitle text-muted">取得価額</h6><p class="card-text">${item.purchasePrice}</p></div><div><h6 class="card-subtitle text-danger">利確ライン</h6><p class="card-text">${item.resultUpper}</p></div><div><h6 class="card-subtitle text-primary">損切りライン</h6><p class="card-text">${item.resultLower}</p></div></div></div></div>`
      stockData.innerHTML += newEle
    })
    // 銘柄リストの最後に空の銘柄を挿入する
    stockData.innerHTML +=
      '<div class="card invisible" id="card-last" style="width: 17rem"></div>'

    // 銘柄を削除するトリガー
    const targetList = document.querySelectorAll(".del-btn")
    const delStock = (e) => {
      const target = e.target.parentElement.parentElement
      target.remove()
      targetId = target.getAttribute("id")
      orgList.forEach((item, i) => {
        if (item.id === targetId) {
          orgList.splice(i, 1)
        }
      })
      localStorage.setItem("stockData", JSON.stringify(orgList))
    }
    targetList.forEach((target) => {
      target.addEventListener("click", delStock)
    })
  } catch (e) {
    return
  }
}

const addData = () => {
  if (!stockName.value || !purchasePrice.value) {
    var alertList = document.querySelectorAll(".alert")
    alertList.forEach(function (alert) {
      new bootstrap.Alert(alert)
    })
    return
  }
  let obj = {
    id: generateUuid(),
    stockName: stockName.value,
    purchasePrice: purchasePrice.value,
    resultUpper: resultUpper.innerText,
    resultLower: resultLower.innerText,
  }
  orgList.push(obj)
  localStorage.setItem("stockData", JSON.stringify(orgList))

  const cardLast = document.getElementById("card-last")
  cardLast.remove()

  const newEle = `<div class="card mb-3" style="width: 17rem" id=${obj.id}><div class="card-body position-relative"><button type="button" class="btn-sm mt-2 me-2 btn btn-danger position-absolute end-0 top-0 del-btn">✕</button><div class="d-flex justify-content-evenly align-items-center mb-3"><h5 class="card-title">${stockName.value}</h5></div><div class="d-flex justify-content-evenly align-items-center"><div><h6 class="card-subtitle text-muted">取得価額</h6><p class="card-text">${purchasePrice.value}</p></div><div><h6 class="card-subtitle text-danger">利確ライン</h6><p class="card-text">${resultUpper.innerText}</p></div><div><h6 class="card-subtitle text-primary">損切りライン</h6><p class="card-text">${resultLower.innerText}</p></div></div></div></div><div class="card invisible" id="card-last" style="width: 17rem"></div>`
  stockData.innerHTML += newEle
}

initData()
