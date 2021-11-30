import React, { useState } from "react";
import initialData from "./initial-data";
import Columnn from "./components/Columnn";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [state, setState] = useState(initialData);

  const onDragEndHandler = () => {};

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
