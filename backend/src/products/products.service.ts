import { Injectable } from '@nestjs/common';
import { CollectionsEntity } from './collections/collections.entity';
import { CollectionsRepository } from './collections/collections.repository';
import { ProductTypeEntity } from './product-type/product-type.entity';
import { ProductTypeRepository } from './product-type/product-type.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly collectionsRepository: CollectionsRepository,
    private readonly productTypesRepository: ProductTypeRepository,
  ) {}

  async getCollections(): Promise<CollectionsEntity[]> {
    return this.collectionsRepository.find();
  }

  async getProductTypes(): Promise<ProductTypeEntity[]> {
    return this.productTypesRepository.find();
  }
}
