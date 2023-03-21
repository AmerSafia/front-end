import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import React from "react";
import DataTable from "../../components/dashboard/common/DataTable";

type Props = {};

interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  hire_date: string;
  salary: number;
  position: string;
}
const data: Employee[] = [
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
] as Array<MRT_ColumnDef<Employee>>;
const Employees = (props: Props) => {
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
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
