type VerifyUserfn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserfn = (user, sentValue) => {
  return (
    user.username === sentValue.username && sentValue.password === user.password
  );
};

const bdUser = { username: "Joao", password: "123456" };
const sentUser = { username: "Joao", password: "123456" };
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn);