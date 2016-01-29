import OPDSLink from "./opds_link";
import Author from "./author";
import Category from "./category";

export default class OPDSEntry {
  id: string;
  updated: string;
  title: string;
  authors: Array<Author>;
  links: Array<OPDSLink>;
  categories: Array<Category>;
  identifiers: Array<string>;
  issued: string;
  constructor(
    id: string,
    updated: string,
    title: string,
    authors: Array<Author>,
    links: Array<OPDSLink>,
    categories: Array<Category>,
    identifiers: Array<string>,
    issued: string
  ) {

    this.id = id;
    this.updated = updated;
    this.title = title;
    this.authors = authors;
    this.links = links;
    this.categories = categories;
    this.identifiers = identifiers;
    this.issued = issued;
  }
}