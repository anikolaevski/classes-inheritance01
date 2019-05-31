/* eslint-disable no-console */
// TODO: write code here
import {
  Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from './Character';

console.log('app.js bundled');

const obj = new Character({
  name: 'Лучник',
  health: 100,
});
console.log('Исходный объект:');
console.table(obj);

console.table(new Bowman({ name: 'Лучник', health: 100, level: 80 }));

console.table(new Swordsman({ name: 'Мечник', health: 100, level: 80 }));

console.table(new Magician({ name: 'Маг', health: 100, level: 80 }));

console.table(new Undead({ name: 'Маклауд', health: 100, level: 80 }));

console.table(new Zombie({ name: 'Зомби', health: 100, level: 80 }));

console.table(new Daemon({ name: 'Демон', health: 100, level: 80 }));
