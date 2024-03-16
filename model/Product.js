import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  id: { type: String },
  name: { type: String },
  category: { type: String },
  image: { type: String },
  new_price: { type: Number },
  old_price: { type: Number },
});

export const Product = models?.Product || model('Product', ProductSchema);
