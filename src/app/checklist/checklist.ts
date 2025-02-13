export interface ListItem {
    itemId ?: string;
    itemName : string;
    completed?: boolean;
}


export enum ListType {
    Incomplete,
    Completed,
    All
  }