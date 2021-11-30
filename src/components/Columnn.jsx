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
`;

const Columnn = ({ column, tasks }) => {
  console.log(tasks);

  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList {...provided.droppableProps}>
            {tasks.map((task) => (
              <Task id={task.id} task={task} />
            ))}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Columnn;
