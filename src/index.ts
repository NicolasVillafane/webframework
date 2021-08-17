import { User } from './models/User';

const user = new User({ name: 'nico', age: 18 });

user.set({ name: 'luisi' });

console.log(user.get('name'));
console.log(user.get('age'));
