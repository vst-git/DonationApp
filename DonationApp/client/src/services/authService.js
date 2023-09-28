import { userLogin, userRegister } from '../redux/features/auth/authActions';
import store from '../redux/store';

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert('Please fill the necessary fields!');
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (
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
) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert('Please fill the necessary fields!');
    }
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
       // website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
