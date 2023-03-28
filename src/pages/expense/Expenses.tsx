import DataTable from "../../components/dashboard/common/DataTable";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Modal from "../../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useState } from "react";

type Props = {};

interface ExpensesInterFace {
  expense_type_id: string;
  amount: number;
  expense_date: string;

  description: string;
}
const data: ExpensesInterFace[] = [
  {
    expense_type_id: "123213123",
    amount: 21,
    expense_date: "1/1/2020",
    description: "screen Protect",
  },
];
const columns = [
  {
    header: "expense_type_id",
    accessorKey: "expense_type_id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Expense Date",
    accessorKey: "expense_date",
  },
  {
    header: "Description",
    accessorKey: "description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<ExpensesInterFace>>;

const Expenses = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: ExpensesInterFace) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title="Add New Expenses"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer
            onSuccess={(data: ExpensesInterFace) => formData(data)}
          >
            <TextFieldElement
              name="expense_type_id"
              label="expense_type_id"
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
              name="expense_date"
              label="expense date"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="description"
              label="description"
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
            Add New Expenses
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Expenses;
