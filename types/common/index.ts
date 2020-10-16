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

export interface ENV_INFO {
  [env: string]: { BASE_URL: string };
}

export interface REDUX_ACTION {
  type: string;
  payload: {
    data: any;
  };
}
