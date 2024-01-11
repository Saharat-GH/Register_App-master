import React, {useState} from "react";
import "../../StyleComponent/forgetpass.css";
import Swal from "sweetalert2";

export default function ForgetPassword() {


  const [email, setEmail] = useState('');

  const handleAlert =()=>{
    const emailCheck = {
      email: "email@example.com"
    }

    const alertMessage = 
    email === emailCheck.email ? { 
      icon: "success",
      title: "Reset Password Email has been sent"
    } : {
      icon: "error",
      title: "Invalid Email"
    };

    Swal.fire({
      position: "center",
      ...alertMessage,
      showConfirmButton: false,
      timer: 2000,  
    })
  }
  return (
    <div>
      <div className="forgetPass d-flex justify-content-center align-items-center">
        <form className="text-center">
          <h2>Forgot Password</h2>
          <p>Insert your email to receive the reset password verification</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-warning submitBtn"
              onClick={handleAlert}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
