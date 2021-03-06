import React, { useContext } from 'react';
import authContext from './context/auth/authContext';



let Profile = () => {

  let auth = useContext(authContext)

  return (
    <div>
      {auth.user ? (
        <>
          <button type="button" onClick={auth.logOut}>
            Logout
          </button>
          <p>{auth.user}</p>
        </>
      ) : (
        <button type="button" onClick={auth.logIn}>
          Login
        </button>
      )}
    </div>
  );
};

export default Profile;


// const withAuthContext = WrappedComponent => {
//   return function WithAuthContext(props) {
//     return (
//       <authContext.Consumer>
//         {context => <WrappedComponent auth={context} {...props} />}
//       </authContext.Consumer>
//     );
//   };
// };

// const Profile = ({ auth }) => (
//   <div>
//     {auth.user ? (
//       <>
//         <button type="button" onClick={auth.logOut}>
//           Logout
//         </button>
//         <p>{auth.user}</p>
//       </>
//     ) : (
//       <button type="button" onClick={auth.logIn}>
//         Login
//       </button>
//     )}
//   </div>
// );

// export default withAuthContext(Profile);
