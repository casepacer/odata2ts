import { QStringNumberV2Param } from "./QStringNumberV2Param.js";

export class QDoubleV2Param<ConvertedType = string> extends QStringNumberV2Param<ConvertedType> {
  protected getTypeSuffix() {
    return "d";
  }
}
