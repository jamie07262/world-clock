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

function updateCity(event) {
  if (event.target.value.length > 0) {
    let city = event.target.value;
    let cityName = city.replace("_", " ").split("/")[1];

    let timezone = moment().tz("city");
    let dateEl = timezone.format("MMMM  Do YYYY");

    let time = timezone.format("h:mm:ss [<small>]A[</small>]");
    const citiesEl = document.querySelector(".city");

    citiesEl.innerHTML = `  
  <div class="cities">
    <div id="city-date">
      <h2>
        ${cityName}
      </h2>
      <div class="date">
         ${dateEl}
      </div>
    </div>
    <div class="time">
        ${time}
    </div>
  </div>
`;
  }
}

updateTime();
setInterval(updateTime, 100);

const selectorEl = document.querySelector("#cities");

selectorEl.addEventListener("change", updateCity);
