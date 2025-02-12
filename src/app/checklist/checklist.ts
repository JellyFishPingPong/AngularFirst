export interface ListItem {
    itemId : number;
    itemName : string;
    completed: boolean;
}


export enum ListType {
    Incomplete,
    Completed,
    All
  }