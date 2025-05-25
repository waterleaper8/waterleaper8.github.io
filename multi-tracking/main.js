let japanpostAnchor
let yamatoAnchor
let sagawaAnchor

function inputChanged(_trackingNo, carrier) {
  const trackingNo = _trackingNo.replace(/\D/g, '')

  if (carrier === "japanpost") {
    if(/^\d{10,13}$/.test(trackingNo)) {
      japanpostAnchor.textContent = trackingNo
      japanpostAnchor.setAttribute("href", `https://www.post.japanpost.jp/receive/tracking/result.php?code=${trackingNo}`)
      japanpostAnchor.style.visibility = "visible"
    } else {
      japanpostAnchor.style.visibility = "hidden"
    }
  }
  if (carrier === "yamato") {
    if (/^\d{10,13}$/.test(trackingNo)) {
      yamatoAnchor.textContent = trackingNo
      yamatoAnchor.setAttribute("href", `https://member.kms.kuronekoyamato.co.jp/parcel/detail?pno=${trackingNo}`)
      yamatoAnchor.style.visibility = "visible"
    } else {
      yamatoAnchor.style.visibility = "hidden"
    }
  }
  if (carrier === "sagawa") {
    if (/^\d{10,13}$/.test(trackingNo)) {
    sagawaAnchor.textContent = trackingNo
    sagawaAnchor.setAttribute("href", `https://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=${trackingNo}`)
    sagawaAnchor.style.visibility = "visible"
    } else {
    sagawaAnchor.style.visibility = "hidden"
    }
  }
}

window.addEventListener('load', () => {
  japanpostAnchor = document.getElementById('japanpost-anchor');
  yamatoAnchor = document.getElementById('yamato-anchor');
  sagawaAnchor = document.getElementById('sagawa-anchor');
  const japanpostInput = document.getElementById('japanpost-input');
  const yamatoInput = document.getElementById('yamato-input');
  const sagawaInput = document.getElementById('sagawa-input');

  // 初期出力
  inputChanged(japanpostInput.value, "japanpost")
  inputChanged(yamatoInput.value, "yamato")
  inputChanged(sagawaInput.value, "sagawa")


  // 番号入力時
  japanpostInput.addEventListener('change', (e) => {
    inputChanged(e.target.value, "japanpost")
  })
  yamatoInput.addEventListener('change', (e) => {
    inputChanged(e.target.value, "yamato")
  })
  sagawaInput.addEventListener('change', (e) => {
    inputChanged(e.target.value, "sagawa")
  })
})
