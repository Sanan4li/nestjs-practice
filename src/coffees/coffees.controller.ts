import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }
  @Post(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
  @Post()
  createCoffee(@Body() body: CreateCoffeeDto) {
    this.coffeesService.add(body);
  }
  @Patch(':id')
  updateCoffee(@Body() body: UpdateCoffeeDto, @Param('id') id: string) {
    this.coffeesService.update(id, body);
    return true;
  }
}
