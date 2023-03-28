import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../components/dashboard/common/DataTable";
import { useState } from "react";
import Modal from "../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

interface UserType {
  username: string;
  email: string;
  password: string;
}
const data: UserType[] = [
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
] as Array<MRT_ColumnDef<UserType>>;
type Props = {};

const Users = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: UserType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title=" Add New Card To Store"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: UserType) => formData(data)}>
            <TextFieldElement
              name="username"
              label="username"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />

            <TextFieldElement
              name="email"
              label="email"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="password"
              label="password"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <DialogActions>
              <Button color="secondary" variant="contained" type="submit">
                Save
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </FormContainer>
        </DialogContent>
      </Modal>

      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setIsOpen(true)}
          >
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