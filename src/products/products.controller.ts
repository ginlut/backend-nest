import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-products.dto';
import { Product } from 'src/interfaces/products.interface';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Post()
  async create(@Body() createProductsDto: CreateProductDto){
    this.productsService.create(createProductsDto)
  }

  @Get()
  async findAll(): Promise<Product[]>{
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  async update(@Body() updateProductsDto: CreateProductDto, @Param('id') id: string){
    this.productsService.update(id, updateProductsDto)
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}
