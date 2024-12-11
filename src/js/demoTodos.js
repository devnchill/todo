import { Todo } from "./todo";

const todo1 = new Todo(
  "Physcis Homework",
  "2nd March 2006",
  "I will have to do my physics homework",
  "high",
  true,
);

const todo2 = new Todo(
  "Chemistry Homework",
  "1st February 2006",
  "do chemistry homework by the end of this week",
  "high",
);

const todo3 = new Todo(
  "Maths Homework",
  "8th December 2006",
  "do maths homework by the end of this week",
  "high",
  true,
);

const todo4 = new Todo(
  "building TTT ",
  "3rd September 2006",
  "finish working on Tic Tac Toe game by this weekend",
  "high",
);

const todo5 = new Todo(
  "building todo ",
  "9th September 2006",
  "finish working on TODO game by this weekend",
  "high",
);
const todo6 = new Todo(
  "Mow Grass",
  "12th September 2006",
  "Finish mowing grass this weekend",
  "high",
);
const todo7 = new Todo(
  "get a haircut",
  "11th December, 2024",
  "Do a clen shave",
  "high",
);
todo1.important = true;
todo2.important = true;
todo7.complete = true;
todo4.complete = true;

export { todo1, todo2, todo3, todo4, todo5, todo6, todo7 };
