import { Injectable } from '@nestjs/common';
import { CollectionsEntity } from './collections/collections.entity';
import { CollectionsRepository } from './collections/collections.repository';
import { ProductTypesEntity } from './product-types/product-types.entity';
import { ProductTypesRepository } from './product-types/product-types.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly collectionsRepository: CollectionsRepository,
    private readonly productTypesRepository: ProductTypesRepository,
  ) {}

  async getCollections(): Promise<CollectionsEntity[]> {
    return this.collectionsRepository.find();
  }

  async getProductTypes(): Promise<ProductTypesEntity[]> {
    return this.productTypesRepository.find();
  }
}
