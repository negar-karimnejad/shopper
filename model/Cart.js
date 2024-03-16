import { model, models, Schema } from 'mongoose';
import { User } from './User';
import { Product } from './Product';

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: Product },
  quantity: { type: Number },
  price: { type: Number },
});

const ShoppingCartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: User },
  total: { type: Number },
  items: [CartItemSchema],
});

export const CartItem = models?.CartItem || model('CartItem', CartItemSchema);
export const ShoppingCart =
  models?.ShoppingCart || model('ShoppingCart', ShoppingCartSchema);
