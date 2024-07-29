function updateTime() {
  const londonEl = document.querySelector("#london");
  if (londonEl) {
    const londonDate = londonEl.querySelector(".date");
    const londonTime = londonEl.querySelector(".time");

    let date = moment().tz("Europe/London").format("MMMM Do YYYY");
    londonDate.innerHTML = date;

    let time = moment()
      .tz("Europe/London")
      .format("h:mm:ss:SS [<small>]A[</small>]");
    londonTime.innerHTML = time;
  }

  const nycEl = document.querySelector("#nyc");
  if (nycEl) {
    const nycDate = nycEl.querySelector(".date");
    const nycTime = nycEl.querySelector(".time");

    let dateNyc = moment().tz("America/New_York").format("MMMM Do YYYY");
    nycDate.innerHTML = dateNyc;

    let timeNyc = moment()
      .tz("America/New_York")
      .format("h:mm:ss:SS [<small>]A[</small>]");
    nycTime.innerHTML = timeNyc;
  }

  const sandoEl = document.querySelector("#sando");
  if (sandoEl) {
    const sandoDate = sandoEl.querySelector(".date");
    const sandoTime = sandoEl.querySelector(".time");

    let dateSando = moment().tz("America/La_Paz").format("MMMM Do YYYY");
    sandoDate.innerHTML = dateSando;

    let timeSando = moment()
      .tz("America/La_Paz")
      .format("h:mm:ss:SS [<small>]A[</small>]");
    sandoTime.innerHTML = timeSando;
  }
}

updateTime();
setInterval(updateTime, 100);
