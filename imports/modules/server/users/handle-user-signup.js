/* eslint-disable consistent-return */

import { Accounts } from 'meteor/accounts-base';

const createUser = ({ email, password, profile }) => {
  console.log("createUser. PARAMS: ");
  console.log("email", email);
  console.log(password);
  console.log(profile);
  // try {
    return Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    });
  // } catch (exception) {
  //     console.log(`[handleUserSignup.createUser] ${exception}`);
  // }
};

const handleUserSignup = (options) => {
  console.log("handleUserSignup. PARAMS: ");
  console.log(options);
  // try {
    const userId = createUser(options.user);
    return userId;
  // } catch (exception) {
  //      console.log(`[handleUserSignup] ${exception}`);
  // }
};

export default user =>
handleUserSignup(user);
