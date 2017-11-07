// /**
//  * Created by jon on 11/6/17.
//  */
// const Orders = new Mongo.Collection('Orders');
//
// const OrdersSchema = new SimpleSchema({
//
//   customerUniqueIdentifier: {
//     type: String,
//     optional: true,
//   },
//   datePlaced: { // timestamp for when the order was placed/
//     type: String,
//     optional: true,
//   },
//   method: { // Whether the order is for delivery or for pickup
//     type: String,
//     optional: true,
//     allowedValues: ['delivery', 'pickup'],
//   },
//   payment: { // Payment method for the order
//     type: String,
//     optional: true,
//     allowedValues: ['cash', 'card'],
//   },
//   restaurantId: { // Unique identifier for the restaurant to which the order is sent
//     type: String,
//     optional: true,
//   },
//   recipientId: { // Unique Identifier for the user who placed the order
//     type: String,
//     optional: true,
//   },
//   card: { // Credit card that was used to pay for the order TODO build the schema for credit cards.
//     type: Schemas.Credit_Cards,
//     optional: true,
//   },
//   address: { // Address where the order is delivered
//     type: Schemas.addresses,
//     optional: true,
//   },
//   items: {
//     type: Schemas.OrderItems,
//     optional: true,
//   },
// });
