import { Injectable } from '@angular/core';

@Injectable()
export class TypeCheckerService {
  /**
   * Checks if the provided value is a number.
   */
  isNumber(value: any): value is number {
    return !Number.isNaN(Number.parseFloat(value)) && Number.isFinite(value);
  }
}
