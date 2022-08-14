import jwt from "jsonwebtoken";

export const creatingTokens = (data) => {
  const maxAge = 3 * 24 * 60 * 60;
  const accessToken = jwt.sign(data, process.env.ACCESSTOKEN, {
    expiresIn: maxAge,
  });
  const refreshToken = jwt.sign(data, process.env.REFRESHTOKEN, {
    expiresIn: maxAge * 60,
  });
  const Tokens = {
    role: "user",
    token: accessToken,
    refreshToken: refreshToken,
  };
  return Tokens;
};
