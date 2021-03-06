import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  const user = useSelector(selectUser);

  return (
    <div className='header'>
         ...
        <button onClick={logoutOfApp}>Logout</button>
         ...
    </div>
  );
}

export default Header;
