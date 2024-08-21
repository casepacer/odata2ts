import { ODataHttpClient, ODataHttpClientConfig, ODataResponse } from "@odata2ts/http-client-api";
import { ODataModelPayloadV4, ODataModelResponseV4 } from "@odata2ts/odata-core";
import { ODataQueryBuilderV4 } from "@odata2ts/odata-query-builder";
import { QueryObject, convertV4ModelResponse } from "@odata2ts/odata-query-objects";

import { ServiceStateHelperV4 } from "./ServiceStateHelperV4.js";

export class EntityTypeServiceV4<in out ClientType extends ODataHttpClient, T, EditableT, Q extends QueryObject> {
  protected readonly __base: ServiceStateHelperV4<ClientType, Q>;

  public constructor(
    client: ClientType,
    basePath: string,
    name: string,
    qModel: Q,
    bigNumbersAsString: boolean = false
  ) {
    this.__base = new ServiceStateHelperV4(client, basePath, name, qModel, bigNumbersAsString);
  }

  public getPath() {
    return this.__base.path;
  }

  public async patch(
    model: ODataModelPayloadV4<Partial<EditableT>>,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<void | ODataModelResponseV4<T>> {
    const { client, qModel, path, getDefaultHeaders, qResponseType } = this.__base;

    const result = await client.patch<void | ODataModelResponseV4<T>>(
      path,
      qModel.convertToOData(model),
      requestConfig,
      getDefaultHeaders()
    );
    return convertV4ModelResponse(result, qResponseType);
  }

  public async update(
    model: ODataModelPayloadV4<EditableT>,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<void | ODataModelResponseV4<T>> {
    const { client, qModel, path, getDefaultHeaders, qResponseType } = this.__base;

    const result = await client.put<void | ODataModelResponseV4<T>>(
      path,
      qModel.convertToOData(model),
      requestConfig,
      getDefaultHeaders()
    );
    return convertV4ModelResponse(result, qResponseType);
  }

  public async delete(requestConfig?: ODataHttpClientConfig<ClientType>): ODataResponse<void> {
    const { client, path } = this.__base;
    return client.delete(path, requestConfig);
  }

  public async query<ReturnType extends Partial<T> = T>(
    queryFn?: (builder: ODataQueryBuilderV4<Q>, qObject: Q) => void,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<ODataModelResponseV4<ReturnType>> {
    const { client, applyQueryBuilder, getDefaultHeaders, qResponseType } = this.__base;

    const response = await client.get(applyQueryBuilder(queryFn), requestConfig, getDefaultHeaders());
    return convertV4ModelResponse(response, qResponseType);
  }
}
