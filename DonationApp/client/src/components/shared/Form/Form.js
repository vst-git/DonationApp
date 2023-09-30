import React, { useState } from 'react';
import '../../../index.css';
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const type = showPassword ? 'text' : 'password';
  const icon = showPassword ? 'fas fa-eye' : 'fas fa-eye-slash';

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (formType === 'login') {
      handleLogin(e, email, password, role);
    } else if (formType === 'register') {
      handleRegister(
        e,
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        address,
        phone
      );
    }
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <div>
        {/* Switch statements */}
        {(() => {
          // eslint-disable-next-line default-case
          switch (true) {
            case formType === 'login': {
              return (
                <>
                  {/* ---------------------------------------------*/}
                  <div
                    className="wrapper mb-2 mt-2"
                    style={{ maxWidth: '800px' }}
                  >
                    {/* ---------------------------------------------*/}
                    <div className="logo">
                      <img src="./assets/images/bloodDrop.png" alt="logo" />
                    </div>
                    {/* ---------------------------------------------*/}
                    <div className="text-center mt-4 name">Welcome</div>
                    {/* ---------------------------------------------*/}
                    <form className="p-4 mt-2 mr-2 mb-2">
                      <div className="form-field d-flex align-items-center">
                        <span className="fas fa-user fa-inverse" />
                        <input
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {/* ---------------------------------------------*/}
                      <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key" />
                        <input
                          type={type}
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                        />
                        <span
                          className="mr-2"
                          onClick={handleToggle}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={icon} />
                        </span>
                      </div>
                      {/* ---------------------------------------------*/}
                      <div className="col-md-12 form-field d-flex align-items-center">
                        <span className="fas fa-pencil-alt" />
                        <input
                          type="role"
                          id="roleselect"
                          className="form-control"
                          placeholder="Role"
                          readOnly={true}
                        />
                        <select
                          className="col-md-7"
                          id="roleselect"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value={'donor'}>Donor</option>
                          <option value={'admin'}>Admin</option>
                          <option value={'hospital'}>Hospital</option>
                          <option value={'organisation'}>Organisation</option>
                        </select>
                      </div>
                      {/* ---------------------------------------------*/}
                      <button
                        className="btn mt-3"
                        type="submit"
                        onClick={onSubmit}
                      >
                        {submitBtn}
                      </button>
                      {/* ---------------------------------------------*/}
                    </form>
                    {/* ---------------------------------------------*/}
                    <div className="text-center fs-6">
                      <a href="/">Forget password?</a> or{' '}
                      <a href="/register">Sign up</a>
                    </div>
                    {/* ---------------------------------------------*/}
                  </div>
                  {/* -------------------------------------------------------------------------------------------*/}
                </>
              );
            }
            case formType === 'register': {
              return (
                <>
                  {/* -------------------------------------------------------------------------------------------*/}
                  <div
                    className="wrapper mt-1 mb-1"
                    style={{ maxWidth: '1200px' }}
                  >
                    {/* -------------------------------------------------------------------------------------------*/}
                    <div className="logo">
                      <img src="./assets/images/bloodDrop.png" alt="logo" />
                    </div>
                    {/* -------------------------------------------------------------------------------------------*/}
                    <div className="text-center mt-4 name mb-4">
                      Create account
                    </div>
                    {/*---------------------------------------------------------------------------------------*/}
                    <form className="p-4 mt-3 mr-3 mb-2">
                      {/*---------------------------------------------------------------------------------------*/}
                      <div className="row">
                        <div className="col-md-12 form-field d-flex align-items-center">
                          <span className="fas fa-pencil-alt" />
                          <input
                            type="role"
                            id="roleselect"
                            className="form-control"
                            placeholder="Role"
                            readOnly={true}
                          />
                          <select
                            className="col-md-7"
                            id="roleselect"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select
                            </option>
                            <option
                              value={'donor'}
                              onChange={(e) => setRole(e.target.value)}
                            >
                              Donor
                            </option>
                            <option
                              value={'admin'}
                              onChange={(e) => setRole(e.target.value)}
                            >
                              Admin
                            </option>
                            <option
                              value={'hospital'}
                              onChange={(e) => setRole(e.target.value)}
                            >
                              Hospital
                            </option>
                            <option
                              value={'organisation'}
                              onChange={(e) => setRole(e.target.value)}
                            >
                              Organisation
                            </option>
                          </select>
                        </div>
                      </div>
                      {/*--------------------------------------------------------------------------------------*/}
                      <div className="row">
                        {/*--------------------------------------------------------------------------------------*/}
                        {role === 'donor' && (
                          <div className="col-md-12 form-field d-flex align-items-center">
                            <span className="fas fa-user fa-inverse" />
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        )}
                        {role === 'admin' && (
                          <div className="col-md-12 form-field d-flex align-items-center">
                            <span className="fa-solid fa-lock" />
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        )}
                        {role === 'organisation' && (
                          <div className="col-md-12 form-field d-flex align-items-center">
                            <span className="fa-solid fa-building-ngo" />
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              placeholder="Organisation"
                              onChange={(e) =>
                                setOrganisationName(e.target.value)
                              }
                            />
                          </div>
                        )}
                        {role === 'hospital' && (
                          <div className="col-md-12 form-field d-flex align-items-center">
                            <span className="fa-solid fa-hospital" />
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              placeholder="Hospital"
                              onChange={(e) => setHospitalName(e.target.value)}
                            />
                          </div>
                        )}

                        {/*--------------------------------------------------------------------------------------*/}
                        <div className="col-md-12 form-field d-flex align-items-center">
                          <span className="fas fa-map-marker-alt" />
                          <input
                            type="text"
                            id="address"
                            className="form-control"
                            placeholder="City"
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>

                        {/*--------------------------------------------------------------------------------------*/}
                      </div>
                      {/*---------------------------------------------------------------------------------------*/}
                      <div className="row">
                        {/*--------------------------------------------------------------------------------------*/}
                        <div className="col-md-12 form-field d-flex align-items-center">
                          <span className="fas fa-envelope" />
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/*---------------------------------------------------------------------------------------*/}
                        <div className="col-md-12 form-field d-flex align-items-center">
                          <span className="fas fa-phone" />
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control"
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>

                        {/*--------------------------------------------------------------------------------------*/}
                      </div>
                      {/*---------------------------------------------------------------------------------------*/}
                      <div className="row">
                        {/*--------------------------------------------------------------------------------------*/}
                        <div className="col-md-12 position-relative form-field d-flex align-items-center">
                          <span className="fas fa-key" />
                          <input
                            type={type}
                            id="password"
                            placeholder="Password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                          />
                          <span
                            className="position-absolute top-50 end-0 me-3 translate-middle-y"
                            onClick={handleToggle}
                            style={{ cursor: 'pointer' }}
                          >
                            <i className={icon} />
                          </span>
                        </div>
                      </div>
                      {/*---------------------------------------------------------------------------------------*/}
                      <div className="text-center ">
                        <button
                          className="btn mt-3"
                          type="submit"
                          onClick={onSubmit}
                        >
                          {submitBtn}
                        </button>
                      </div>
                      {/*---------------------------------------------------------------------------------------*/}
                    </form>
                    {/*-------------------------------------------------------------------------------------*/}
                    <div className="text-center fs-6">
                      <a href="/">Forget password?</a> or{' '}
                      <a href="/login">Sign in</a>
                    </div>
                    {/*-------------------------------------------------------------------------------------*/}
                  </div>
                  {/*---------------------------------------------------------------------------------------*/}
                </>
              );
            }
          }
        })()}
      </div>
    </form>
  );
};

export default Form;
