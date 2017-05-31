var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter a name'],
		unique: true
	},
	polls: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Poll'
	}]
}, {timestamps: true})

mongoose.model('User', UserSchema)