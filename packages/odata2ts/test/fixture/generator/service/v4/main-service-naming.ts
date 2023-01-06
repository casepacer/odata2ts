import { ODataClient } from "@odata2ts/odata-client-api";
import { ODataService } from "@odata2ts/odata-service";

// @ts-ignore
import { CREATE_TEST_ENTITY_RSLVR } from "./service/TEST_ENTITY_SRV";

export class TesterService<ClientType extends ODataClient> extends ODataService<ClientType> {
  private NAME_: string = "Tester";
  public LIST = CREATE_TEST_ENTITY_RSLVR(this.client, this.getPath(), "list");
  public NAVIGATE_TO_LIST = this.LIST.get.bind(this.LIST);
}