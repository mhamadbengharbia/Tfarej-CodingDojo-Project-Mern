const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
	{
	username: {
		type:String,
		required: [true,"username is required. "],
		},
	email: {
		type:String,
		required: [true,"email is required. "],
		validate: {
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
			}
		},
	password: {
		type:String,
		required: [true,"password is required. "],
		minlength: [8, "Password must be 8 characters or longer"]

		},
	roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
	},{timestamps:true}
		);

// add this after UserSchema is defined
userSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

userSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });





const Users = mongoose.model("Users", userSchema);

module.exports = Users; 