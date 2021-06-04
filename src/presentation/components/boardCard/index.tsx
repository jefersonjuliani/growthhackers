import React from 'react';
import { Row } from "@/presentation/components"
import Styles from "./styles.module.scss"
import { Draggable } from 'react-beautiful-dnd';
import { boardCardInterface } from "./boardCardInterface"

const boardCard: React.FC<boardCardInterface> = ({ data, index, }) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided)=> (
                <div
                    className={Styles.container}
                    ref={provided.innerRef}
            
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p>{data.content}</p>
                    <div className={Styles.responsibleContainer}>
                        <Row center>
                            <img className={Styles.img} src={data.photo} alt={data.name} />
                            <h4>{data.name}</h4>
                            <span>16 days ago</span>
                        </Row>
                    </div>

                </div>
            )}
        </Draggable>
    );
}

export default boardCard;