import {styleBody, addTitle, contact} from './dom';
import Users, { getPremium } from './data';

const premiumUser = getPremium(Users);

console.log(contact);
console.log(Users, premiumUser);
console.log('test 2');

