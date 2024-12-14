import { Todo } from "./todo";

const todo1 = new Todo(
  "Physics Homework",
  "2nd March, 2006",
  "I will have to do my physics homework",
  "high",
  true,
);

const todo2 = new Todo(
  "Chemistry Homework",
  "1st February, 2006",
  "Do chemistry homework by the end of this week",
  "high",
);

const todo3 = new Todo(
  "Maths Homework",
  "8th December, 2006",
  "Do maths homework by the end of this week",
  "high",
  true,
);

const todo4 = new Todo(
  "Building Tic Tac Toe Game",
  "3rd September, 2006",
  "Finish working on Tic Tac Toe game by this weekend",
  "high",
);

const todo5 = new Todo(
  "Build Todo App",
  "9th September, 2006",
  "Finish working on Todo app by the weekend",
  "high",
);

const todo6 = new Todo(
  "Mow the Lawn",
  "12th September, 2006",
  "Finish mowing the lawn this weekend",
  "high",
);

const todo7 = new Todo(
  "Get a Haircut",
  "11th December, 2024",
  "Get a fresh haircut before the holidays",
  "high",
  true,
);

const todo8 = new Todo(
  "Clean Bookshelf",
  "14th December, 2024",
  "Clean the bookshelf before guests arrive",
  "high",
);

const todo9 = new Todo(
  "Buy Groceries",
  "16th December, 2024",
  "Do grocery shopping for the week",
  "medium",
);

const todo10 = new Todo(
  "Finish Reading Book",
  "18th December, 2024",
  "Complete reading the current book",
  "low",
);

const todo11 = new Todo(
  "Prepare for Christmas",
  "20th December, 2024",
  "Start preparing Christmas gifts and decorations",
  "high",
);

todo1.important = true;
todo2.important = true;
todo7.complete = true;
todo4.complete = true;

export { todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9, todo10, todo11 };

