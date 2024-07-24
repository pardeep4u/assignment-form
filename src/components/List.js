import React from "react";
import "./List.css";
import DataTable from "./DataTable";
import useData from "../hooks/useData";

function List() {
  const { data, handleDelete, handleEdit } = useData();

  return (
    <div>
      <DataTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default List;
