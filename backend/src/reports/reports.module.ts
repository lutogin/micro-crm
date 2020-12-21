import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { SalesModule } from './sales/sales.module';
import { CostsModule } from './costs/costs.module';
import { CashModule } from './cash/cash.module';

@Module({
  imports: [
    SalesModule,
    CostsModule,
    CashModule,
  ],
  providers: [
    ReportsService,
  ],
  exports: [
    ReportsService,
  ],
})
export class ReportsModule {}
