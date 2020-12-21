import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionsRepository } from './collections/collections.repository';
import { ProductTypesRepository } from './product-types/product-types.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductTypesRepository,
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
