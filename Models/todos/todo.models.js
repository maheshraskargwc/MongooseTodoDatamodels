import mongoose from 'mongoose';

const todoschema = new mongoose.Schema(
  {
    Content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: true,
    },
    CreateBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoschema);
