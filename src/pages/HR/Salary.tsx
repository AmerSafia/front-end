import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";
import { useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Modal from "../../components/dashboard/common/Modal";

type Props = {};

interface SalaryType {
  employee_id: string;
  amount: number;
  pay_date: string;
}
const data: SalaryType[] = [
  {
    employee_id: "test",
    amount: 900,
    pay_date: "1/1/2022",
  },
];
const columns = [
  {
    header: "employee_id",
    accessorKey: "employee_id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Pay Date",
    accessorKey: "pay_date",
  },
] as Array<MRT_ColumnDef<SalaryType>>;
const Salary = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: SalaryType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title="Add New Salary"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: SalaryType) => formData(data)}>
            <TextFieldElement
              name="employee_id"
              label="employee_id"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />

            <TextFieldElement
              name="amount"
              label="amount"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="pay_date"
              label="pay_date"
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
            Add New Salary
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Salary;
