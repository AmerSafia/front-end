import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";
import { useState } from "react";
import Modal from "../../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

type Props = {};

interface SalaryPaymentType {
  salary_id: string;
  amount: number;
  payment_date: string;
}
const data: SalaryPaymentType[] = [
  {
    salary_id: "test",
    amount: 322,
    payment_date: "1/1/2022",
  },
];
const columns = [
  {
    header: "salary_id",
    accessorKey: "salary_id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "payment Date",
    accessorKey: "payment_date",
  },
] as Array<MRT_ColumnDef<SalaryPaymentType>>;
const SalaryPayment = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: SalaryPaymentType) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title="Add New Payment"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer
            onSuccess={(data: SalaryPaymentType) => formData(data)}
          >
            <TextFieldElement
              name="salary_id"
              label="salary id"
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
              name="payment_date"
              label="payment date"
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
            Add New Payment
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default SalaryPayment;
