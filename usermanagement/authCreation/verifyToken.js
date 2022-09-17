import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const token = req.headers['authtoken'];
  if (!token) {
    return res.status(401).json({ status: false, msg: "Access Denied" });
  }

  try {
    const verify = jwt.verify(token, process.env.ACCESSTOKEN);
    req.user = verify;
    return ;
  } catch (error) {
    res.status(400).json({ status: false, msg: "Invalid Token" });
  }
};