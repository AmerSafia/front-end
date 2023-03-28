import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DataTable from "../components/dashboard/common/DataTable";
import Modal from "../components/dashboard/common/Modal";
import { useState } from "react";

type Props = {};
interface DailySalesType {
  product_type: string;
  product_id: string;
  cost: number;
  quantity: number;
  payment_date: string;
  payment_type: string;
  price: number;
}
const data: DailySalesType[] = [
  {
    product_type: "test",
    product_id: "123123",
    quantity: 322,
    payment_date: "1/1/2022",
    cost: 21,
    price: 12,
    payment_type: "123123",
  },
];
const columns = [
  {
    header: "Product Type",
    accessorKey: "product_type",
  },
  {
    header: "Product Id",
    accessorKey: "product_id",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Payment Type",
    accessorKey: "payment_type",
  },
  {
    header: "payment Date",
    accessorKey: "payment_date",
  },
  {
    header: "Cost",
    accessorKey: "cost",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
] as Array<MRT_ColumnDef<DailySalesType>>;
const DailySales = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: DailySalesType) => {

         
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title="Add New Sale"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: DailySalesType) => formData(data)}>
            <TextFieldElement
              name="product_type"
              label="product type"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="product_id"
              label="product id"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="quantity"
              label="quantity"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="payment_date"
              label="payment_date"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="cost"
              label="cost"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="price"
              label="price"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="payment_type"
              label="payment_type"
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
            Add New Sale
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default DailySales;
