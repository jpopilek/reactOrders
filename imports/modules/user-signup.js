/**
 * Created by jon on 11/4/17.
 */
/* eslint-disable no-undef, no-underscore-dangle */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation';

let component;

const getUserData = () => ({
  email: component.emailAddress.value,
  password: component.password.value,
  profile: {
    name: {
      first: component.firstName.value,
      last: component.lastName.value,
    },
  },
});

const userSignup = () => {
  const user = getUserData();
  const password = user.password;
  user.password = Accounts._hashPassword(user.password);

  console.log("signup function in modules/user-signup. user: ");
  console.log(user);

  Meteor.call('userSignup',{ user }, (methodError) => {
    if (methodError) {
      console.log("methodError");
      Bert.alert(methodError.reason, 'danger');
    } else {
      Meteor.loginWithPassword(user.email, password, (loginError) => {
        console.log("called loginWithPassword");
        if (loginError) {
          Bert.alert(loginError.reason, 'danger');
        } else {
          Bert.alert('Welcome to Doxie!', 'success');
          browserHistory.push('/documents');
        }
      });
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: {
        required: 'First name?',
      },
      lastName: {
        required: 'Last name?',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { userSignup(); },
  });
};

export default function handleUserSignup(options) {
  component = options.component;
  console.log("component");
  console.log(options.component);
  validate();
}
