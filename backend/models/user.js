import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      default: '',
    },
    role: {
      type: String,
      default: 'user',
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

userSchema.pre('save', function (next) {
  this.updated = new Date();
  if (!this.created) {
    this.created = new Date();
  }
  next();
});

export default mongoose.model('User', userSchema);
