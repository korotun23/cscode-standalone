import type { BarcodeTypeInterface } from '../types/barcodeTypeInterface'
import { barcodeTypesData } from '../data/barcodeType.data'

export class BarcodeTypeService {
  /**
   * Load the barcode types from the data file
   */
  private barcodeTypes: BarcodeTypeInterface[] = barcodeTypesData

  /**
   * Get the barcode types array
   * @returns The barcode types array
   */
  public getBarcodeTypes(): BarcodeTypeInterface[] {
    return this.barcodeTypes
  }
}
