export enum ReeshStatusType {
  DONE,
  NONE,
  FRESH_LOADING,
}

export interface CallLoadMoreType {
  done: Function;
  page: number;
  size: number;
}

export interface TabsListType {
    title: string;
    slotName: string
}
