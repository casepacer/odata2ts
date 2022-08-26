import { ODataClient } from "@odata2ts/odata-client-api";
import { EntityTypeServiceV4, EntitySetServiceV4 } from "@odata2ts/odata-service";
// @ts-ignore
import { Book, EditableBook } from "../TesterModel";
// @ts-ignore
import { QBook, qBook } from "../QTester";
// @ts-ignore
import { AuthorService, AuthorCollectionService } from "./AuthorService";

export class BookService<ClientType extends ODataClient> extends EntityTypeServiceV4<
  ClientType,
  Book,
  EditableBook,
  QBook
> {
  private _authorSrv?: AuthorService<ClientType>;
  private _relatedAuthorsSrv?: AuthorCollectionService<ClientType>;

  constructor(client: ClientType, path: string) {
    super(client, path, qBook);
  }

  public getAuthorSrv(): AuthorService<ClientType> {
    if (!this._authorSrv) {
      this._authorSrv = new AuthorService(this.client, this.path + "/author");
    }

    return this._authorSrv;
  }

  public getRelatedAuthorsSrv(): AuthorCollectionService<ClientType> {
    if (!this._relatedAuthorsSrv) {
      this._relatedAuthorsSrv = new AuthorCollectionService(this.client, this.path + "/relatedAuthors");
    }

    return this._relatedAuthorsSrv;
  }
}

export class BookCollectionService<ClientType extends ODataClient> extends EntitySetServiceV4<
  ClientType,
  Book,
  EditableBook,
  QBook,
  string | { ID: string },
  BookService<ClientType>
> {
  constructor(client: ClientType, path: string) {
    super(client, path, qBook, BookService, [{ isLiteral: true, type: "string", name: "id", odataName: "ID" }]);
  }
}
