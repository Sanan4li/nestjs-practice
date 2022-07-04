import { Document } from 'mongoose';
export class Coffee extends Document {
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
