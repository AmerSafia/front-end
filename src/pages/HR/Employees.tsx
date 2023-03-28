import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DataTable from "../../components/dashboard/common/DataTable";
import Modal from "../../components/dashboard/common/Modal";

type Props = {};

interface EmployeeType {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  hire_date: string;
  salary: number;
  position: string;
}
const data: EmployeeType[] = [
  {
    first_name: "test",
    last_name: "test",
    email: "test@test.com",
    phone: 799229292,
    hire_date: "1/1/2022",
    salary: 444,
    position: "marketing",
  },
];
const columns = [
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Hire Date",
    accessorKey: "hire_date",
  },
  {
    header: "Position",
    accessorKey: "position",
  },
  {
    header: "Salary",
    accessorKey: "salary", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<EmployeeType>>;
const Employees = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: EmployeeType) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title=" Add New Employee"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: EmployeeType) => formData(data)}>
            <TextFieldElement
              name="first_name"
              label="first name"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="last_name"
              label="last name"
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
              name="phone"
              label="phone"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="hire_date"
              label="hire date"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="salary"
              label="salary"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="position"
              label="position"
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
            Add New Employee
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Employees;
