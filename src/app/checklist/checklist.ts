import { FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { inherits } from "util";

export interface ListItem {
    itemId?: string;
    itemName: string;
    completed?: boolean;
}


export interface LongTermGoal extends ListItem {
}
export interface DailyGoal extends ListItem {
}


export enum ListType {
    Incomplete,
    Completed,
    All
}

export class CustomMaterialFormsMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null): boolean {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}