import "./css/style.css"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { useDispatch, useSelector} from "react-redux"
// import { tambahUsername } from "../Store/login"

function Login(){
    // const dispatch = useDispatch()
    // const username= useSelector((state) => state.username.username)

    // const saveData = (e)=>{
    //     dispatch(tambahUsername(e.target.value))
    // }
    
    return(
        <div id="mainContainer">
        <div class="">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-xs-12 d-none d-lg-block d-md-block">
            <div id="mainBgn"></div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
            <div class="p-4 centerOnMobile" >
                <div class="formContainer">
                <h2 class="p-2 h4 text-center"><i class="fas fa-lock me-2"></i> Login</h2>
                <form action="#">
                    <div class="form-floating my-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">username</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    </div>
                    <div class="mt-3">
                    <input type="checkbox" /> Remember me
                    </div>
                    <div id="btnHolder">
                    <button class="btn btn-lg btn-primary mt-3 w-100">Login</button>
                    </div>
                </form>
                </div>
                <div class="mt-2 text-center">
                <a href="#">New? signup</a><br />
                <a href="#">Forgot Password?</a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

// function saveData(data) {
//   let dt = data;
//   localStorage.setItem("username", dt);
// }

const mapStoreToProps = (state) => {
    return{
        username: state.username
    }
}

export default Login;