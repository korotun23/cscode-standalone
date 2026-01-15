import { BarcodeParameters } from '@/types/barcodeParameters'
import bwipjs from '@bwip-js/node'

export class BarcodeGeneratorService {
  public generateBarcode(barcodeParameters: BarcodeParameters, value?: string): string {
    try {
      const svgBarcode: string = bwipjs.toSVG({
        bcid: barcodeParameters.identifier,
        text: value ?? barcodeParameters.defaultValue,
        height: barcodeParameters.size[1],
        width: barcodeParameters.size[0],
        includetext: barcodeParameters.printTextValue,
      })
      return svgBarcode
    } catch (error) {
      console.error(error)
      return ''
    }
  }
}
