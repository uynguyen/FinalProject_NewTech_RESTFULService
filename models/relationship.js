var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var relationShipSchema = new Schema({
   user1: { type: Schema.Types.ObjectId, ref: 'User' },
   user2: { type: Schema.Types.ObjectId, ref: 'User' },
   relationship: {
      name: String,
      description: String,
      created_at: Date
   }
});

var Relationship = mongoose.model('Relationship', relationShipSchema);
// make this available to our users in our Node applications
module.exports = Relationship;

