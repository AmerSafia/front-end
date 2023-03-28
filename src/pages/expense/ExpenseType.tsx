import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DataTable from "../../components/dashboard/common/DataTable";
import Modal from "../../components/dashboard/common/Modal";
import { useState } from "react";

interface ExpenseTypeInterFace {
  expense_name: string;
  expense_description: string;
}
const data: ExpenseTypeInterFace[] = [
  {
    expense_name: "test",
    expense_description: "test",
  },
];
const columns = [
  {
    header: "Expense Name",
    accessorKey: "expense_name",
  },
  {
    header: "Expense Description",
    accessorKey: "expense_description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<ExpenseTypeInterFace>>;
type Props = {};

const ExpenseType = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: ExpenseTypeInterFace) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title="Add New Expense Type"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer
            onSuccess={(data: ExpenseTypeInterFace) => formData(data)}
          >
            <TextFieldElement
              name="expense_name"
              label="expense name"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="expense_description"
              label="expense description"
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
            Add New Expense Type
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default ExpenseType;
