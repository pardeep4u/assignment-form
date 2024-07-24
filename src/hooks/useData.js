import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useData() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  const handleDelete = async (id) => {
    try {
      const newData = data.filter((item) => item.id !== id);
      localStorage.setItem("formData", JSON.stringify(newData));
      setReload((pre) => !pre);
      toast.success("Deleted Successfully");
    } catch (e) {
      toast.error("Deletion failed");
      toast.error("Something Went wrong");
    }
  };

  const handleEdit = async (updatedItem) => {
    try {
      const newData = data.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      localStorage.setItem("formData", JSON.stringify(newData));
      setReload((pre) => !pre);
      toast.success("Edited Successfully");
    } catch (e) {
      toast.error("update failed");
      toast.error("Something Went wrong");
    }
  };

  useEffect(() => {
    async function fetch() {
      if (localStorage.getItem("formData")) {
        let data = await JSON.parse(localStorage.getItem("formData"));
        setData(data);
      }
    }
    fetch();
  }, [reload]);

  return { handleEdit, handleDelete, reload, setReload, data, setData };
}

export default useData;
