import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      Type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      Type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, ' Password is required '],
    },
  },
  { timestamps: true } // this line is add time when you update this field
);

export const User = mongoose.model('user', userSchema);
