const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)];
console.log(array);

/*
[
  [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ],
  [
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ]
]
*/

for (const match of fruit.matchAll("etc")) {
  console.log(match);
}

/*
[
  'etc',
  index: 36,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'etc',
  index: 41,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'etc',
  index: 46,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]

*/
