var mongoose = require('mongoose')

var PollSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	question: {
		type: String,
		required: [true, 'poll question cannot be blank'],
		minlength: [8, 'question must be at least 8 characters long']
	},
	option_one: {
		content:{
			type: String,
			required: [true, 'options cannot be blank'],
			minlength: [3, 'option must be at least 3 characters long'],
		},
		votes: {
			count: {
				type: Number,
				default: 0
			},
		}
	},
	option_two: {
		content:{
			type: String,
			required: [true, 'options cannot be blank'],
			minlength: [3, 'option must be at least 3 characters long'],
		},
		votes: {
			count: {
				type: Number,
				default: 0
			},
		}
	},
	option_three: {
		content:{
			type: String,
			required: [true, 'options cannot be blank'],
			minlength: [3, 'option must be at least 3 characters long'],
		},
		votes: {
			count: {
				type: Number,
				default: 0
			},
		}
	},
	option_four: {
		content:{
			type: String,
			required: [true, 'options cannot be blank'],
			minlength: [3, 'option must be at least 3 characters long'],
		},
		votes: {
			count: {
				type: Number,
				default: 0
			},
		}
	}

}, {timestamps: true})

mongoose.model('Poll', PollSchema)