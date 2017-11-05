/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Users from '../../../api/users/users';


const createUserInDatabase = (users) => {
  console.log("in createUserInDatabase. Params: ");
  console.log(users);
  try {
    // let newUserId = Users.insert(users.options.user);

    // if (newUserId !== null  || newUserId !== undefined) {
    //   return newUserId;
    // }
    // return
    console.log("am i in the tru catch?");
  } catch (err) {
    console.log("why");
      // console.log(`[handleUserSignup.createCustomerInDatabase] ${exception}`);
  }
};

const createUser = ({ email, password, profile }) => {
  console.log("createUser. PARAMS: ");
  console.log(email);
  console.log(password);
  console.log(profile);
  try {
    return Accounts.createUser({ email, password, profile });
  } catch (exception) {
      console.log(`[handleUserSignup.createUser] ${exception}`);
  }
};

const handleUserSignup = (options) => {
  console.log("handleUserSignup. PARAMS: ");
  console.log(options);
  try {
    const userId = createUser(options.user);

    console.log("in handleUserSignup. params: ");
    console.log(options);
    createUserInDatabase({
      userId,
      options
    });
  } catch (exception) {
    console.log("is this the right why?");
      // console.log(`[handleUserSignup] ${exception}`);
  }
};

export default user =>
handleUserSignup(user);
