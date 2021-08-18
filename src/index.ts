import { User } from './models/User';

const user = new User({ name: 'nuevo', age: 34 });

user.save();
