import type { BarcodeTypeInterface } from './barcodeTypeInterface'

/**
 * Class representing the parameters of a barcode
 * Implement BarcodeTypeInterface (represent barcode types such as code128, ean128, qrcode...)
 * @property identifier - The identifier of the barcode type (the value which is used in the barcode generator library, e.g 'ean13', 'code128', 'qrcode')
 * @property name - The name of the barcode type (the value which is displayed in the UI, e.g 'EAN-13', 'Code 128', 'QR Code')
 * @property defaultValue - The default value of the barcode type (e.g '123456789012')
 * @property size - The default size of the barcode type (e.g [200, 200])
 * @property printTextValue - The default value of the print text value option (e.g true)
 * @property imageFormat - The default value of the image format option (e.g 'png')
 */
export class BarcodeParameters implements BarcodeTypeInterface {
  identifier: string
  name: string
  defaultValue: string
  size: [number, number]
  printTextValue: boolean
  imageFormat: string

  constructor() {
    this.identifier = ''
    this.name = ''
    this.defaultValue = ''
    this.size = [0, 0]
    this.printTextValue = false
    this.imageFormat = ''
  }
}
