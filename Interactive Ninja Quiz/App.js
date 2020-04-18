const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correctAnswers = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', e => {
  e.preventDefault();
  const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];
  let score = 0;
  userAnswers.forEach((answer, index) => { // check Answers
    if (answer === correctAnswers[index]) {
    score += 25;
    }
  });
  scrollTo(0,0); // Scrolls To the top of the page
  // Show result on page
  setTimeout(() => { // NOTE: setTimeout fires after a particular time specified
    result.classList.remove('d-none');
  },100);
  let output = 0;
  const timer = setInterval(() => { //NOTE: setInterval keeps on firing every particular time specified  
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer)
    }else {
      output++
    }
  }, 10);
});

