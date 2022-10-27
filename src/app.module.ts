import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CartController } from './cart/cart.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    CartModule, 
    ProductsModule, 
    MongooseModule.forRoot(process.env.MONGO_URL)],
    
  controllers: [AppController, ProductsController, CartController, UsersController],
  providers: [AppService],
})

export class AppModule {}
