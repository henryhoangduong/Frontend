import React from "react";

// hook that we are going to use
import { useRef, useState, useEffect } from "react";

import axios from "axios";
// assets
import "./Register.css";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

import Login from "../../components/Login/Login";
//validated user name/must start with lowercase or upper letter/, password /1 lowercase, 1 uppercase, 1 diggit/
const USER_REGEX = /^[A-z ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{5,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
const Register = () => {
  //allowed us to set the focus on the user input
  const userRef = useRef();
  // if we get the error, we can put the focus on that
  const errRef = useRef();

  //state for user field, user'll type to user input, validName: whether the name validate or not, user input : whether we have focus on input field or not
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [phoneNmbr, setPhoneNmbr] = useState("");
  const [validPhoneNmbr, setValidPhoneNmbr] = useState(false);
  const [phoneNmbrFocus, setPhoneNmbrFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // errrMsg stage for posible error message, success, whether we success submit register form or not
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //set state for address select options
  // const [addressNum,setAddressNum] = useState("");
  const [adrssNum, setAdrssNum] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const [citiesField, setCitiesField] = useState([]);
  const [districtsField, setDistrictsField] = useState([]);
  const [wardsField, setWardsField] = useState([]);

  //apply for setting the focus when the component load
  useEffect(() => {
    userRef.current.focus();
  }, []); // The empty dependency array [] ensures the code runs once when the component mounts.

  // validate the user name
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(user);
    console.log(result);
    setValidName(result);
  }, [user]); // anytime user change, it will check the validation of that field

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(email);
    // console.log(result);
    setValidEmail(result);
    console.log("register.js useEffect valid email: ", result);
  }, [email]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNmbr);
    // console.log(email);
    // console.log(result);
    setValidPhoneNmbr(result);
    console.log("register.js useEffect setValidPhoneNmbr: ", result);
  }, [phoneNmbr]);

  // validate the password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    console.log(pwd);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, email]);

  const handleCity = (data) => {
    const filter = citiesField.filter((city) => city.name == data);
    setDistrictsField(filter[0].districts);
    setCity(data);
    // console.log("Register.js handleDistrict : ", filter[0].Districts);
  };
  const handleDistrict = (data) => {
    const filter = districtsField.filter((district) => district.name == data);
    setWardsField(filter[0].wards);
    setDistrict(data);
  };

  useEffect(() => {
    var Parameter = {
      url: "https://provinces.open-api.vn/api/?depth=3",
      method: "GET",
      responseType: "application/json",
    };
    var promise = axios(Parameter);
    promise.then(function (result) {
      const data = JSON.parse(result.data);
      // renderAddress(data);
      setCitiesField(data);
      // console.log("Register.js promise setCities: ",data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // const REGISTER_URL = "http://127.0.0.1:8000/api/register";
      const userInput = {
        name: user,
        email: email,
        phone: phoneNmbr,
        password: pwd,
        address: `${adrssNum}, ${ward}, ${district}, ${city}`,
      };
      console.log("user input", userInput);
      // const res = await axios.post(REGISTER_URL, userInput);
      // console.log(res);
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (e) {
      if (!e?.response) {
        setErrMsg("No Server Response");
      } else if (e.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <>
      {success == true ? (
        <section>
          <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            style={{ height: "100vh" }}
            className="container-fluid justify-content-center d-flex align-items-center  fs-5"
          >
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="card-title text-center my-0 ">
                      <p className="fs-3 fw-bold font-monospace ">
                        Congratulation, You created your acount, let's check it
                        out!
                      </p>
                    </div>
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            style={{ height: "100vh" }}
            className="container-fluid justify-content-center d-flex align-items-center  fs-6"
          >
            <div className="row w-100 ">
              <div className="col-lg-6 offset-lg-3">
                <div className="card shadow">
                  {/* //define what will hold the error when the error exist */}
                  <p
                    ref={errRef}
                    className={`${
                      errMsg ? "alert alert-danger" : "offscreen"
                    } text-center`}
                    role="alert"
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <div className="card-body">
                    <div className="card-title text-center my-0 ">
                      <p className="fs-3 fw-bold font-monospace ">
                        Create your Lego account
                      </p>
                    </div>

                    <form className="validated-form" onSubmit={handleSubmit}>
                      <div class={"input-group has-validation mb-3"}>
                        <div
                          className={`form-floating  ${
                            validName ? "is-valid" : ""
                          } ${!validName && user ? "is-invalid" : ""}`}
                        >
                          <input
                            className={`form-control ${
                              validName ? "is-valid" : ""
                            } ${!validName && user ? "is-invalid" : ""}`}
                            type="text"
                            ref={userRef} // allow us to set focus on input, focus when combonent load
                            autoComplete="off" // don't want suggest value in this field
                            onChange={(e) => setUser(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                            aria-invalid={validName ? "false" : "true"}
                            id="username"
                            name="username"
                            placeholder="Enter your name"
                            required
                            aria-describedby="name"
                            onFocus={() => setUserFocus(true)} //if the user field is focus we setting it to true
                            onBlur={() => setUserFocus(false)}
                          />
                          {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}
                          <label htmlFor="username">Name </label>
                        </div>
                        <div id="name" className="invalid-feedback">
                          4 to 24 characters. Must begin with a letter. <br />
                          Letters, numbers, underscores, hyphens allowed.
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className={"col-sm-8"}>
                          <div class={"input-group has-validation mb-3"}>
                            <div
                              className={`form-floating ${
                                validEmail ? "is-valid" : ""
                              } ${!validEmail && email ? "is-invalid" : ""}`}
                            >
                              <input
                                className={`form-control  ${
                                  validEmail ? "is-valid" : ""
                                } ${!validEmail && email ? "is-invalid" : ""}`}
                                type="text"
                                onChange={(e) => setEmail(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                                aria-invalid={validEmail ? "false" : "true"}
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                aria-describedby="uidnote"
                                onFocus={() => setEmailFocus(true)} //if the user field is focus we setting it to true
                                onBlur={() => setEmailFocus(false)}
                              />
                              {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}
                              <label
                                for="email"
                                htmlFor="email"
                                className="form-label"
                              >
                                Email{" "}
                              </label>
                              <div id="uidnote" className="invalid-feedback">
                                email not right!
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"col-sm-4"}>
                          <div class={"input-group has-validation mb-3"}>
                            <div
                              className={`form-floating ${
                                phoneNmbr && validPhoneNmbr ? "is-valid" : ""
                              } ${
                                !validPhoneNmbr && phoneNmbr ? "is-invalid" : ""
                              }`}
                            >
                              <input
                                className={`form-control  ${
                                  phoneNmbr && validPhoneNmbr ? "is-valid" : ""
                                } ${
                                  !validPhoneNmbr && phoneNmbr
                                    ? "is-invalid"
                                    : ""
                                }`}
                                type="tel"
                                onChange={(e) => setPhoneNmbr(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                                aria-invalid={validPhoneNmbr ? "false" : "true"}
                                id="phoneNmbr"
                                name="phoneNmbr"
                                value={phoneNmbr}
                                placeholder="Enter a phone number"
                                required
                                aria-describedby="phone"
                                onFocus={() => setPhoneNmbrFocus(true)} //if the user field is focus we setting it to true
                                onBlur={() => setPhoneNmbrFocus(false)}
                              />
                              {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}
                              <label
                                for="phoneNmbr"
                                htmlFor="phoneNmbr"
                                className="form-label"
                              >
                                Phone number{" "}
                              </label>
                              <div id="phone" className="invalid-feedback">
                                not valid yet!
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* address input start--- */}

                      <div class={"input-group has-validation mb-3"}>
                        <div className={`form-floating`}>
                          <input
                            className={"form-control"}
                            type="text"
                            name="adrss"
                            placeholder="Enter your address"
                            required
                            id="address"
                            onChange={(e) => setAdrssNum(e.target.value)}
                          />

                          <label
                            for="address"
                            htmlFor="address"
                            className="form-label"
                          >
                            Address{" "}
                          </label>
                        </div>
                      </div>
                      <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                          <div className="form-floating">
                            <select
                              name="city"
                              className={"form-select"}
                              id="city"
                              required
                              onChange={(e) => handleCity(e.target.value)}
                            >
                              <option value="" disabled selected>
                                Select Tỉnh/Thành
                              </option>
                              {citiesField.map((city) => (
                                <option key={city.code} value={`${city.name}`}>
                                  {city.name}
                                </option>
                              ))}

                              {/* <!-- Add Tỉnh/Thành options here --> */}
                            </select>
                            <label htmlFor="city">City/Province</label>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-floating">
                            <select
                              name="district"
                              className={"form-select"}
                              id="district"
                              required
                              onChange={(e) => handleDistrict(e.target.value)}
                            >
                              <option value="" disabled selected>
                                Select Quận/Huyện
                              </option>
                              {districtsField.map((district) => (
                                <option
                                  key={district.code}
                                  value={`${district.name}`}
                                >
                                  {district.name}
                                </option>
                              ))}
                              {/* <!-- Add Quận/Huyện options here --> */}
                            </select>
                            <label htmlFor="district">district</label>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-floating">
                            <select
                              name="ward"
                              id="ward"
                              className={"form-select"}
                              required
                              onChange={(e) => setWard(e.target.value)}
                            >
                              <option value="" disabled selected>
                                Select Phường/Xã
                              </option>
                              {wardsField.map((ward) => (
                                <option key={ward.code} value={`${ward.name}`}>
                                  {ward.name}
                                </option>
                              ))}
                              {/* <!-- Add Thị Xã options here --> */}
                            </select>
                            <label htmlFor="ward">ward</label>
                          </div>
                        </div>
                      </div>

                      {/* address input end--- */}
                      <div class={"input-group has-validation mb-3"}>
                        <div
                          className={`form-floating ${
                            pwd && validPwd ? "is-valid" : ""
                          } ${!validPwd && pwd ? "is-invalid" : ""}`}
                        >
                          <input
                            className={`form-control  ${
                              pwd && validPwd ? "is-valid" : ""
                            } ${!validPwd && pwd ? "is-invalid" : ""}`}
                            type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            aria-invalid={validPwd ? "false" : "true"}
                            id="password"
                            name="password"
                            value={pwd}
                            required
                            placeholder="Enter your password"
                            aria-describedby="pwd"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                        <div id="pwd" className="invalid-feedback">
                          5 to 24 characters.
                          <br />
                          include letters and a number <br />
                        </div>
                      </div>

                      <div class={"input-group has-validation mb-3"}>
                        <div
                          className={`form-floating ${
                            matchPwd && validMatch ? "is-valid" : ""
                          } ${!validMatch && matchPwd ? "is-invalid" : ""}`}
                        >
                          <input
                            className={`form-control  ${
                              matchPwd && validMatch ? "is-valid" : ""
                            } ${!validMatch && matchPwd ? "is-invalid" : ""}`}
                            type="password"
                            id="ConfirmPassword"
                            name="confirmPassword"
                            aria-describedby="confirmnote"
                            aria-invalid={validMatch ? "false" : "true"}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            required
                            placeholder="Enter your comfirm password"
                          />
                          {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}
                          <label
                            for="ConfirmPassword"
                            htmlFor="ConfirmPassword"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                          <div id="confirmnote" className="invalid-feedback">
                            Not match the first password input field.
                          </div>
                        </div>
                      </div>

                      <div class="d-grid ">
                        <button
                          disabled={
                            !validName || !validPwd || !validMatch
                              ? true
                              : false
                          }
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <p className="text-center mt-3 mb-0">
                      Have an account? <a href="/">Sign in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
