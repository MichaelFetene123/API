import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// all jwt works converting object into a string and then converting that string back to object.
// jwt basically convert the user data into a string and then we can send that string to the client side
// and when the client send that string back to the server we can verify that string and get the user data back . generally, we use jwt for authentication, so when the user login/signup we send that jwt to the client and when the client send that jwt back to the server we can verify that jwt and get the user data back and then we can use that user data to authenticate the user

// we need a secret key to create a jwt and to verify a jwt. we can use any string as a secret key but it should be a long and random string. we should not share this secret key with anyone. we can use dotenv to store the secret key in an environment variable

export const comparePasswords = (password, hash) => { 
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password) => { 
    return bcrypt.hash(password, 5);
}

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export function protect(req, res, next) {
    const bearer = req.headers.authorization;

    if (!bearer) {
        return res.status(401).json({ message: "not authorized" });
    }

    const [, token] = bearer.split(" ");

    if (!token) {
        return res.status(401).json({ message: "not valid token" });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) { 
        console.error(error);
        res.status(401).json({ message: "not valid token" });
         return; 
    }
}
