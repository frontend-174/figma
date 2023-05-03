import React from "react";
import { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const Login = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700441063.jpg)",
        height: "700px",
      }}
    >
      <a href="https://front.codes/" className="logo" target="_blank"></a>

      <div className="section">
        <div className="container ">
          <Link href={"/"}>back</Link>
         
          
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"></h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4">
                            submit
                          </a>
                          <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="logname"
                              class="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
