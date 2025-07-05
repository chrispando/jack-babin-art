import bcrypt from "bcryptjs";

const users = [
  {
    name: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
];

export default users;
