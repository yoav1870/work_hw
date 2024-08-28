import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import tmpUsers from "../tmpUsers.json";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(tmpUsers);
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.Name, sortable: true },
    { name: "Email", selector: (row) => row.Email, sortable: true },
    { name: "Score", selector: (row) => row.Score, sortable: true },
    { name: "Created At", selector: (row) => row.CreatedAt, sortable: true },
  ];

  return (
    <div>
      <h1>Users Table</h1>
      <DataTable columns={columns} data={users} pagination highlightOnHover />
    </div>
  );
};

export default UserTable;
