export function middleware(req,res) {
    // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
    const secret = process.env.ACCESSTOKEN
    const token = await getToken({ req,secret })
    if (token) {
      // Signed in
      console.log("JSON Web Token", JSON.stringify(token, null, 2))
      next()
    } else {
      // Not Signed in
      res.redirect('/login')
    }
  }