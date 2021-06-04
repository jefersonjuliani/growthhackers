import {card} from "../boardCard/boardCardInterface"

export interface column {
    id: string
    name:string
    list:Array<card>
}

export interface columns {
    [key: string]: column
}


export interface boardInterface {
    loadBoard: columns;
}

