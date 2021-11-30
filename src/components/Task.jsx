import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid dodgerblue;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({ task }) => {
  return <Container>{task.content}</Container>;
};

export default Task;
