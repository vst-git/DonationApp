import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/shared/Form/Form';
import Spinner from '../../components/shared/Spinner';
import { toast } from 'react-toastify';

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={''} submitBtn={'Login'} formType={'login'} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
