import React, { useCallback, useState } from 'react';
import { boardInterface } from "./boardInterface"
import { BoardList } from "@/presentation/components"

import Styles from "./styles.module.scss"

import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const Board: React.FC<boardInterface> = ({ loadBoard }) => {
    const [columns, setColumns] = useState(loadBoard)

    const onDragEnd = useCallback(({ source, destination }: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null

        // Make sure we're actually moving the item
        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null

        //Set start and end variables
        const start = columns[source.droppableId as keyof typeof columns];
        const end = columns[destination.droppableId as keyof typeof columns]

        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            const newList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index])

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                name: start.name,
                list: newList
            }

            // Update the state
            setColumns(state => ({ ...state, [newCol.id]: newCol }))
            return null
        } else {
            // If start is different from end, we need to update multiple columns
            // Filter the start list like before
            const newStartList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )

            // Create a new start column
            const newStartCol = {
                id: start.id,
                name: start.name,
                list: newStartList
            }

            // Make a new end list array
            const newEndList = end.list

            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index])

            // Create a new end column
            const newEndCol = {
                id: end.id,
                name: end.name,
                list: newEndList
            }

            // Update the state
            setColumns(state => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }))
            return null
        }
    }, [columns]);


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={Styles.container}>
                {Object.values(columns).map(col => (
                    <BoardList col={col} key={col.id} />
                ))}
            </div>
        </DragDropContext>

    );
}

export default Board;