import { Todo } from "./todo";

const todo1 = new Todo(
  "Physcis Homework",
  "2nd september 2006",
  "I will have to do my physics homework",
  "high",
);
console.log(todo1.toggleImportant);

const todo2 = new Todo(
  "Chemistry Homework",
  "1st september 2006",
  "do chemistry homework by the end of this week",
  "high",
);

const todo3 = new Todo(
  "Maths Homework",
  "8th september 2006",
  "do maths homework by the end of this week",
  "high",
);

const todo4 = new Todo(
  "building TTT ",
  "3rd september 2006",
  "finish working on Tic Tac Toe game by this weekend",
  "high",
);

const todo5 = new Todo(
  "building todo ",
  "9th september 2006",
  "finish working on TODO game by this weekend",
  "high",
);
const todo6 = new Todo(
  "Mow Grass",
  "12th september 2006",
  "Finish mowing grass this weekend",
  "high",
);
const todo7 = new Todo(
  "get a haircut",
  "2nd december 2006",
  "Do a clen shave",
  "high",
);
export { todo1, todo2, todo3, todo4, todo5, todo6, todo7 };
