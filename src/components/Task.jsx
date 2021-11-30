import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 2px solid dodgerblue;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "#fff")};
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
