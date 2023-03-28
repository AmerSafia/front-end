import { useState } from "react";
import DataTable from "../../components/dashboard/common/DataTable";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Modal from "../../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

type Props = {};
interface AccessoriesStoreType {
  quantity: number;
  description: string;
  barcode?: string;
  price: number;
  cost: number;
}
const data: AccessoriesStoreType[] = [
  {
    quantity: 33,
    description: "screen Protect",
    price: 21,
    cost: 22,
    barcode: "test",
  },
];

const columns = [
  {
    header: "Type Id",
    accessorKey: "type_id",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Barcode",
    accessorKey: "barcode",
  },
  {
    header: "Cost",
    accessorKey: "cost",
  },
  {
    header: "Photo",
    accessorKey: "photo",
  },
] as Array<MRT_ColumnDef<AccessoriesStoreType>>;
const AccessoriesStore = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: AccessoriesStoreType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title="Add Accessorie"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer
            onSuccess={(data: AccessoriesStoreType) => formData(data)}
          >
            <TextFieldElement
              name="price"
              label="price"
              type="number"
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
            <TextFieldElement
              name="barcode"
              label="barcode"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              sx={{ my: "1rem" }}
              name="quantity"
              label="quantity"
              type="number"
              required
              fullWidth
            />
            <TextFieldElement
              sx={{ my: "1rem" }}
              name="cost"
              label="cost"
              type="number"
              required
              fullWidth
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
            Add New Accessories Store
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default AccessoriesStore;
