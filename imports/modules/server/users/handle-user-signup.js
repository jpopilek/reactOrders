/* eslint-disable consistent-return */

import { Accounts } from 'meteor/accounts-base';

const createUser = ({ email, password, profile }) => {
  return Accounts.createUser({
      email: email,
      password: password,
      profile: profile
  });
};

const handleUserSignup = (options) => {
  const userId = createUser(options.user);
  Roles.addUsersToRoles(userId, 'user');
  return userId;
};

export default user =>
handleUserSignup(user);
