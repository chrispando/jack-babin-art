import bcrypt from "bcryptjs";

const users = [
  {
    name: "Jack",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Chris",
    email: "chris@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Alice",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
