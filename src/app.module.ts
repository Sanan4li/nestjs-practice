import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/coffeedb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    ),
    UserModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
