import {card} from "../boardCard/boardCardInterface"

export interface column {
    id: string
    name:string
    list:Array<card>
}

interface boardListInterface {
    col: column
}

export default boardListInterface;