import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ViewRepositoryButton = ({ repositoryId }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="primary"
      text="View repository"
      callback={() =>
        navigate(`/repository/${repositoryId}`, { replace: true })
      }
    />
  );
};

export default ViewRepositoryButton;
