import React, { useState } from "react";
import initialData from "./initial-data";
import Columnn from "./components/Columnn";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [state, setState] = useState(initialData);

  console.log(state);

  const onDragEndHandler = (result) => {
    document.body.style.color = "inherit";
    console.log(result);

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Columnn key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
