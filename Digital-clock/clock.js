const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
    <h4>${dateFns.format(now, 'dddd Do MMMM YYYY')}</h4>
    <span>${hours}</span> : 
    <span>${minutes}</span> : 
    <span>${seconds}</span>
  `;
  clock.innerHTML = html;
};
setInterval(tick, 1000);

const today = new Date();
console.log(dateFns.format(today, 'dddd Do MMMM YYYY'));
