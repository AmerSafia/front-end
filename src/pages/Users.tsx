import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../components/dashboard/common/DataTable";

interface User {
  username: string;
  email: string;
  password: string;
}
const data: User[] = [
  {
    username: "amersafia",
    email: "test@gmail.com",
    password: "123123123123",
  },
];
const columns = [
  {
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Email",
    accessorKey: "email", //using accessorKey dot notation to access nested data
  },
  {
    header: "Password",
    accessorKey: "password", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<User>>;
type Props = {};

const Users = (props: Props) => {
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New User
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Users;
