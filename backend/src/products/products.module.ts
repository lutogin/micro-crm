import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionsRepository } from './collections/collections.repository';
import { ProductTypeRepository } from './product-type/product-type.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductTypeRepository,
      CollectionsRepository,
    ]),
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductsService,
  ],
})
export class ProductsModule {}
