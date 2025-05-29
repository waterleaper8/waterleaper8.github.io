function addDays(monthDiff) {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth();                 // 0 = 1月, …, 11 = 12月
  const date = new Date(todayYear, todayMonth + monthDiff, 1);
  const year = date.getFullYear();
  const month = date.getMonth();                 // 0 = 1月, …, 11 = 12月
  const lastDate = new Date(year, month + 1, 0).getDate();  // 今月の最終日

  const weekdays = ['日','月','火','水','木','金','土'];

  const yy = String(year)
  const yymmTr = document.createElement('tr');
  const yymmTh = document.createElement("th")

  yymmTr.setAttribute('class', "yymm")
  yymmTh.innerHTML = `<br>${yy}/${String(month + 1).padStart(2, '0')}`;
  yymmTr.appendChild(yymmTh);

  const calendarBody = document.createElement('tbody');
  const calendarTable = document.createElement('table');
  const tableWrapper = document.querySelector(".table-wrapper");

  calendarBody.appendChild(yymmTr);
  calendarTable.appendChild(calendarBody);
  tableWrapper.appendChild(calendarTable);

  for (let d = 1; d <= lastDate; d++) {
    const dt = new Date(year, month, d);
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    const wd = weekdays[dt.getDay()];

    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = `${mm}/${dd}(${wd})`;
    tr.appendChild(td);
    calendarBody.appendChild(tr);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  addDays(monthDiff=-1)
  addDays(monthDiff=0)
  addDays(monthDiff=1)
});
