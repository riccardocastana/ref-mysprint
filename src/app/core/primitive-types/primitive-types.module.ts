import { ObjectExtensionsService } from './extensions/object-extensions.service';
import { NgModule } from '@angular/core';
import { TypeCheckerService } from './checker/type-checker.service';

@NgModule({
  providers: [ObjectExtensionsService, TypeCheckerService],
})
export class PrimitiveTypesModule {}
