import React, { useState } from 'react';
import InputType from './InputType';
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [name, setName] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  //const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === 'login')
            return handleLogin(e, email, password, role);
          else if (formType === 'register')
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              // website,
              address,
              phone
            );
        }}
      >
        <h1
          className="text-center"
          style={{
            color: 'red',
            textDecoration: 'underline',
            marginTop: '20px',
          }}
        >
          {formTitle}
        </h1>

        <hr />

        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadio"
              value={'donor'}
              onChange={(e) => setRole(e.target.value)}
            />

            <label
              htmlFor="donorRadio"
              className="form-check-lable"
              style={{
                color: 'yellow',
                textDecoration: 'underline',
              }}
            >
              Donor
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={'admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="adminRadio"
              className="form-check-label"
              style={{
                color: 'yellow',
                textDecoration: 'underline',
              }}
            >
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={'hospital'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="hospitalRadio"
              className="form-check-label"
              style={{
                color: 'yellow',
                textDecoration: 'underline',
              }}
            >
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={'organisation'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="organisationRadio"
              className="form-check-label"
              style={{
                color: 'yellow',
                textDecoration: 'underline',
              }}
            >
              Organisation
            </label>
          </div>
        </div>

        {/* Switch statements */}
        {(() => {
          // eslint-disable-next-line default-case
          switch (true) {
            case formType === 'login': {
              return (
                <>
                  <InputType
                    labelText={'Email'}
                    labelFor={'forEmail'}
                    inputType={'email'}
                    name={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelColor={'yellow'}
                  />

                  <InputType
                    labelText={'Password'}
                    labelFor={'forPassword'}
                    inputType={'password'}
                    name={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelColor={'yellow'}
                  />
                </>
              );
            }
            case formType === 'register': {
              return (
                <>
                  {(role === 'admin' || role === 'donor') && (
                    <InputType
                      labelText={'Name'}
                      labelFor={'forName'}
                      inputType={'text'}
                      name={'name'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      labelColor={'yellow'}
                    />
                  )}
                  {role === 'organisation' && (
                    <InputType
                      labelText={'Organisation Name'}
                      labelFor={'fororganisationName'}
                      inputType={'text'}
                      name={'organisationName'}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                      labelColor={'yellow'}
                    />
                  )}
                  {role === 'hospital' && (
                    <InputType
                      labelText={'Hospital Name'}
                      labelFor={'forHospitalName'}
                      inputType={'text'}
                      name={'hospitalName'}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                      labelColor={'yellow'}
                    />
                  )}

                  <InputType
                    labelText={'Email'}
                    labelFor={'forEmail'}
                    inputType={'email'}
                    name={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelColor={'yellow'}
                  />
                  <InputType
                    labelText={'Password'}
                    labelFor={'forPassword'}
                    inputType={'password'}
                    name={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelColor={'yellow'}
                  />
                  {/* <InputType
                    labelText={'Website'}
                    labelFor={'forWebsite'}
                    inputType={'text'}
                    name={'website'}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    labelColor={'yellow'}/>*/}

                  <InputType
                    labelText={'Address'}
                    labelFor={'forAddress'}
                    inputType={'text'}
                    name={'address'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    labelColor={'yellow'}
                  />
                  <InputType
                    labelText={'Phone'}
                    labelFor={'forPhone'}
                    inputType={'text'}
                    name={'phone'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    labelColor={'yellow'}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === 'login' ? (
            <p
              style={{
                color: 'pink',
              }}
            >
              Not registered yet ?
              <Link
                to="/register"
                style={{
                  color: 'red',
                  textDecoration: 'underline',
                }}
              >
                {' '}
                Register
              </Link>
            </p>
          ) : (
            <p
              style={{
                color: 'pink',
              }}
            >
              Already registered ?
              <Link
                to="/login"
                style={{
                  color: 'red',
                  textDecoration: 'underline',
                }}
              >
                {' '}
                Login{' '}
              </Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
