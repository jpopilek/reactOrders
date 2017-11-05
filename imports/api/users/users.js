/**
 * Created by jon on 11/4/17.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = new Mongo.Collection('Users');

Users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const UsersSchema = new SimpleSchema({
  email: {
    type: String,
    label: 'Email',
  },
  password: {
    type: Object,
    label: 'Password',
    blackbox:true,
  },
  profile: {
    type: Object,
  },
  'profile.name': {
    type: Object,
  },
  'profile.name.first': {
    type: String,
    label: 'First Name',
  },
  'profile.name.last': {
    type: String,
    label: 'Last Name',
  },
});

Meteor.users.attachSchema(UsersSchema);

export default Users;
