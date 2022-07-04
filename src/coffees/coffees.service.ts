import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/cofee.entity';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  async findAll() {
    return this.coffeeModel.find().exec();
  }
  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found!`);
    }
    return coffee;
  }
  async remove(id: string) {
    const coffee = this.coffeeModel.findOne({ _id: id });
    return coffee.remove();
  }
  async add(data: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(data).save();
    return coffee;
  }
  async update(id: string, data: UpdateCoffeeDto) {
    const coffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: data }, { new: true })
      .exec();
    if (!coffee) {
      throw new NotFoundException('no coffee found to update');
    }
    return coffee;
  }
}
