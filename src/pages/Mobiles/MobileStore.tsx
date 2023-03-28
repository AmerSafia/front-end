import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useState } from "react";
import DataTable from "../../components/dashboard/common/DataTable";
import Modal from "../../components/dashboard/common/Modal";
import {
  AutocompleteElement,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";

type Props = {};
//a more complex example with nested data
interface MobileStoreType {
  color: string;
  description: string;
  price: number;
  cost: number;
  quantity: number;
  photo: string;
  mobile_status: string;
  battery_health: number;
  model_name: string;
  brand_name: string;
}
const data: MobileStoreType[] = [
  {
    color: "black",
    description: "test",
    price: 1,
    cost: 1,
    quantity: 1,
    photo: "ttest",
    mobile_status: "tesst",
    battery_health: 1,
    model_name: "s21",
    brand_name: "samsung",
  },
  {
    color: "black",
    description: "test",
    price: 1,
    cost: 1,
    quantity: 1,
    photo: "ttest",
    mobile_status: "tesst",
    battery_health: 1,
    model_name: "s22",
    brand_name: "samsung",
  },
];

const columns = [
  {
    header: "Model Name",
    accessorKey: "model_name", //using accessorKey dot notation to access nested data
  },
  {
    header: "Brand Name",
    accessorKey: "brand_name",
  },
  {
    header: "Color",
    accessorKey: "color",
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
    header: "Cost",
    accessorKey: "cost",
  },
  {
    header: "Photo",
    accessorKey: "photo",
  },
  {
    header: "Mobile Status",
    accessorKey: "mobile_status",
  },
  {
    header: "Battery Health",
    accessorKey: "battery_health",
  },
  {
    header: "Cost",
    accessorKey: "cost",
  },
] as Array<MRT_ColumnDef<MobileStoreType>>;

const MobileStore = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: MobileStoreType) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title="Add Mobile Model"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: MobileStoreType) => formData(data)}>
            <TextFieldElement
              name="model_name"
              label="Model Name"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <AutocompleteElement
              name="brand_name"
              label="Brand Name"
              loading
              options={[
                {
                  id: 1,
                  label: "Samsung",
                },
                {
                  id: 2,
                  label: "Iphone",
                },
                {
                  id: 3,
                  label: "Third",
                },
                {
                  id: 4,
                  label: "Four",
                },
              ]}
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
              name="description"
              label="description"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="color"
              label="color"
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
            <TextFieldElement
              sx={{ my: "1rem" }}
              name="mobile_status"
              label="mobile_status"
              required
              fullWidth
            />
            <TextFieldElement
              sx={{ my: "1rem" }}
              name="battery_health"
              label="battery_health"
              type="number"
              required
              fullWidth
            />
            <TextFieldElement
              sx={{ my: "1rem" }}
              name="photo"
              label="photo"
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
            Add New Mobile To Store
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default MobileStore;
