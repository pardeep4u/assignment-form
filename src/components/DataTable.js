import React, { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import "./List.css";
import MyModal from "./Modal";
import EditForm from "./EditForm";
import { useNavigate } from "react-router-dom";

const DataTable = ({ data, onDelete, onEdit }) => {
  const [editCabin, setEditCabin] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditCabin(true);
  };

  return (
    <Container>
      <div className="hero">All Users</div>
      <Table striped bordered hover responsive className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MyModal isEditOpen={editCabin} setIsEditOpen={setEditCabin}>
        {selectedItem && (
          <EditForm
            item={selectedItem}
            onSave={(updatedItem) => {
              onEdit(updatedItem);
            }}
            onClose={() => setEditCabin(false)}
          />
        )}
      </MyModal>
      <div className="add-new-button">
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            navigate("/register");
          }}
        >
          Add new user
        </Button>
      </div>
    </Container>
  );
};

export default DataTable;
