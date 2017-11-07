/**
 * Created by jon on 11/4/17.
 */
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import handleUserSignup from '../imports/modules/server/users/handle-user-signup';

Meteor.methods({
  userSignup(user) {
    console.log("users/server/methods signup method. params: ");
    console.log(user);
    check(user, Object);
    return handleUserSignup(user)
  },
});
