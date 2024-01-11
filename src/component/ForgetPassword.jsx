import React from 'react';
import NavBar from './navBar';
import '../../StyleComponent/forgetpass.css';

export default function ForgetPassword() {
  return (
    <div>
      <div className="forgetPass d-flex justify-content-center align-items-center">
        <form className='text-center'>
          <h2>Forgot Password</h2>
          <p>Insert your email to receive the reset password verification</p>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="abc@gmail.com" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
