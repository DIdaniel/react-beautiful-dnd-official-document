import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 2px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "tomato" : "#fff")};
`;

const Columnn = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task id={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Columnn;
