import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
// import tmpUsers from "../tmpUsers.json";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // setUsers(tmpUsers);

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    { name: "Name", selector: (row) => row.Name, sortable: true },
    { name: "Email", selector: (row) => row.Email, sortable: true },
    { name: "Score", selector: (row) => row.Score, sortable: true },
    { name: "Created At", selector: (row) => row.createdAt, sortable: true },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.Name && user.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Users Table</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredUsers}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default UserTable;
