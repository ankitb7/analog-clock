const startClock = () => setInterval(setTime, 1000);

const setTime = () => {
  const date = new Date();
  document.getElementById('digital-clock').innerHTML = date;
  let hour = document.querySelector('.hr');
  let minute = document.querySelector('.mn');
  let second = document.querySelector('.sc');
  const degree = 6;
  let hh = date.getHours();
  hour.style.transform = (`rotateZ(${(hh * degree)}deg)`);
  let mm = date.getMinutes();
  minute.style.transform = (`rotateZ(${(mm * degree)}deg)`);
  let ss = date.getSeconds();
  second.style.transform = (`rotateZ(${(ss * degree)}deg)`);
};
