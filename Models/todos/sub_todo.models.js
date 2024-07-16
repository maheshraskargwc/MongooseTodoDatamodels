import mongoose, { Mongoose } from 'mongoose';
const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    Compplete: {
      type: Boolean,
      default: flase,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubToto = mongoose.model('SubTodo', sub_todoSchema);
