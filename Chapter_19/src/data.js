const users = [
  { name: 'Olamide', premium: true },
  { name: 'Desmond', premium: false },
  { name: 'Jubril', premium: true },
  { name: 'Emmanuel', premium: false },
  { name: 'Obalola', premium: true }
];

const getPremium = (users) => {
  return users.filter(user => user.premium);
};

export {getPremium, users as default}