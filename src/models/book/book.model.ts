import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema: Schema<IBook> = new Schema(
    {
      title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters'],
      },
      author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
        minlength: [3, 'Author name must be at least 3 characters long'],
        maxlength: [50, 'Author name cannot exceed 50 characters'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
      },
      category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
          values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
          message: 'Category must be one of Fiction, Science, SelfDevelopment, Poetry, Religious',
        },
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [500, 'Description cannot exceed 500 characters'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative'],
      },
      inStock: {
        type: Boolean,
        required: [true, 'InStock status is required'],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );
  
  // Creating the Mongoose Model
  const Book = mongoose.model<IBook>('Book', BookSchema);

  export default Book;