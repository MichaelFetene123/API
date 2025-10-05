import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", () => {
    const req = { body: { username: "hello", password: "hi" } };
    const res ={json({ token }) {
        expect(token).toBeTruthy();
      },
    };

   user.createNewUser(req, res, () => {});
  });
});
