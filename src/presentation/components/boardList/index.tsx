import React from 'react';
import boardListInterface from "./boardListInterface"
import Styles from "./styles.module.scss"
import { Droppable } from 'react-beautiful-dnd';
import { BoardCard, Button, Row } from "@/presentation/components"
import Icon from "@/presentation/assets/index"

const boardList: React.FC<boardListInterface> = ({ col }) => {
  return (
    <Droppable droppableId={col.id}>
      {provided => (
        <div
          className={Styles.container}
        >
          <Row center spaceBetween>
            <h2>{col.name}</h2>
            <img src={Icon.dotsIcon} alt="" width="18" />
          </Row>

          <div
            className={Styles.background}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {col.list.map((data, index) => (
              <BoardCard key={data.id} data={data} index={index} />
            ))}
            {provided.placeholder}

            <div className={Styles.buttonContainer}>
              <Button title="+ New card" />
            </div>

          </div>
        </div>
      )}
    </Droppable>
  );
}

export default boardList;