import { ODataClient } from "@odata2ts/odata-client-api";
import { EntityTypeServiceV2, CollectionServiceV2, EntitySetServiceV2 } from "@odata2ts/odata-service";
// @ts-ignore
import { Book, EditableBook, Reviewer, EditableReviewer } from "../TesterModel";
// @ts-ignore
import { QBook, qBook, QReviewer, qReviewer } from "../QTester";
// @ts-ignore
import { ReviewerService } from "./ReviewerService";

export class BookService<ClientType extends ODataClient> extends EntityTypeServiceV2<
  ClientType,
  Book,
  EditableBook,
  QBook
> {
  private _lectorSrv?: ReviewerService<ClientType>;
  private _reviewersSrv?: CollectionServiceV2<ClientType, Reviewer, QReviewer, EditableReviewer>;

  constructor(client: ClientType, path: string) {
    super(client, path, qBook);
  }

  public getLectorSrv(): ReviewerService<ClientType> {
    if (!this._lectorSrv) {
      this._lectorSrv = new ReviewerService(this.client, this.path + "/lector");
    }

    return this._lectorSrv;
  }

  public getReviewersSrv(): CollectionServiceV2<ClientType, Reviewer, QReviewer, EditableReviewer> {
    if (!this._reviewersSrv) {
      this._reviewersSrv = new CollectionServiceV2(this.client, this.path + "/reviewers", qReviewer);
    }

    return this._reviewersSrv;
  }
}

export class BookCollectionService<ClientType extends ODataClient> extends EntitySetServiceV2<
  ClientType,
  Book,
  EditableBook,
  QBook,
  string | { id: string },
  BookService<ClientType>
> {
  constructor(client: ClientType, path: string) {
    super(client, path, qBook, BookService, [{ isLiteral: false, type: "string", name: "id", odataName: "id" }]);
  }
}
