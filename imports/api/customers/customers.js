import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Customers = new Mongo.Collection('Customers');

Customers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Customers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const CustomersSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'The ID of the user this customer profile belongs to.',
  },
  customerId: {
    type: String,
    label: 'The user\'s customer ID on Stripe.',
  },
  'card.brand': {
    type: String,
    label: 'The brand of credit card the customer has on file.',
  },
  'card.last4': {
    type: String,
    label: 'The last four digits of the credit card the customer has on file.',
  },
  'subscription.id': {
    type: String,
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.status': {
    type: String,
    allowedValues: ['active', 'cancelling', 'canceled', 'none', 'trialing'],
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.plan': {
    type: String,
    label: 'The ID of the user\'s plan on Stripe.',
    optional: true,
  },
  'subscription.current_period_end': {
    type: Number,
    label: 'The next change date for the customer\'s subscription on Stripe (epoch timestamp in seconds).',
    optional: true,
  },
  // TODO - build out functionality for the database schema below
  // name: {
  //   type: String,
  //   optional: true
  // },
  // url: {
  //   type: String,
  //   optional: true
  // },
  // streetAddress: {
  //   type: String,
  //   optional: true
  // },
  // city: {
  //   type: String,
  //   optional: true
  // },
  // state: {
  //   type: String,
  //   optional: true
  // },
  // zip: {
  //   type: String,
  //   optional: true
  // },
  // latitude: {
  //   type: String,
  //   optional: true
  // },
  // longitude: {
  //   type: String,
  //   optional: true
  // },
  // food_types: {
  //   type: [String],
  //   optional: true
  // },
  // offers_delivery: {
  //   type: Boolean,
  //   optional: true
  // },
  // delivery_price: {
  //   type: String,
  //   optional: true
  // },
  // delivery_minimum: {
  //   type: String,
  //   optional: true
  // },
  // minimum_free_delivery: {
  //   type: String,
  //   optional: true
  // },
  // logo_url: {
  //   type: String,
  //   optional: true
  // },
  // open: {
  //   type: true,
  //   optional: true
  // },
  // hours: {
  //   type: Object,
  //   optional: true
  // },
  // 'hours.monday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.tuesday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.wednesday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.thursday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.friday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.saturday': {
  //   type: [String],
  //   optional: true
  // },
  // 'hours.sunday': {
  //   type: [String],
  //   optional: true
  // },
  // timezone: {
  //   type: String,
  //   optional: true
  // },
  // zones: {
  //   type: [Schemas.delivery_zones],
  //   optional: true
  // },
});

Customers.attachSchema(CustomersSchema);

export default Customers;
