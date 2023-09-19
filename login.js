const express=require("express")
const route=express.Router()

 route.get("/login",(req,res,next)=>{
    
    // res.send("<form onsubmit ='localStorage.setItem('username','document.getElementById('username').value)' action= '/'  method='POST'><label> username </label> <input id='username'type='text' name='username' ><button type='SUBMIT'>Enter</button> </form>")
    console.log(req.body)
    // console.log(document.getElementById("username").value)

    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">

	<input id="username" type="text" name"title">

	<button type="submit">Add User</button>

</form>`)

})
route.post("/product", (req, res, next) => {
    // console.log(req.body);  // // req.body = [Object: null prototype] { title: 'product' }
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj); // { title: 'product' }
    res.redirect("/");
  });
module.exports=route