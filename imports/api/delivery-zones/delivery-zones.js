// Generated by CoffeeScript 1.12.2
(function() {
  this.Delivery_Zones = new Meteor.Collection('delivery_zones');

  Schemas.delivery_zones = new SimpleSchema({
    description: {
      type: String,
      optional: true
    },
    zips: {
      type: [String],
      optional: true
    },
    points: {
      type: [Schemas.lat_lon_point],
      optional: true
    },
    hole_points: {
      type: [Schemas.lat_lon_point],
      optional: true
    },
    maximum_radius: {
      type: Number,
      optional: true
    }
  });

  d;

}).call(this);

//# sourceMappingURL=delivery-zones.js.map
