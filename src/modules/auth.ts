import jwt from "jsonwebtoken";
// all jwt works converting object into a string and then converting that string back to object.
// jwt basically convert the user data into a string and then we can send that string to the client side
// and when the client send that string back to the server we can verify that string and get the user data back . generally, we use jwt for authentication, so when the user login/signup we send that jwt to the client and when the client send that jwt back to the server we can verify that jwt and get the user data back and then we can use that user data to authenticate the user

// we need a secret key to create a jwt and to verify a jwt. we can use any string as a secret key but it should be a long and random string. we should not share this secret key with anyone. we can use dotenv to store the secret key in an environment variable

export const createJWT = (user) => {
const token = jwt.sign({ id: user.id, username: user.username}, )
}