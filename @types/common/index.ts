export interface IPAGES {
  [page: string]: {
    PAGE_NAME: string;
    ROUTE: string;
  };
}

export type IROUTES = Array<{
  pageName: string;
  path: string;
  pages: string;
}>;
