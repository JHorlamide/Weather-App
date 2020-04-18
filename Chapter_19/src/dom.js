console.log('Dom file');
const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
};

const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

const contact = 'olamidejubril68@gmail.com';

export { styleBody, addTitle, contact };

// styleBody();
// addTitle('Hello world, from the dom file');