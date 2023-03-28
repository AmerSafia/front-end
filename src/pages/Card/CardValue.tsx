import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DataTable from "../../components/dashboard/common/DataTable";
import Modal from "../../components/dashboard/common/Modal";

type Props = {};
interface CardValueType {
  card_type_id: string;
  card_value: number;
  card_name: string;
  card_description: string;
  expiration_date: string;
  cost: number;
}
const data: CardValueType[] = [
  {
    card_type_id: "12312213123",
    card_value: 24,
    card_name: "Zain",
    card_description: "test",
    expiration_date: "1/1/2023",
    cost: 23,
  },
  {
    card_type_id: "12312213123",
    card_value: 24,
    card_name: "umniah",
    card_description: "test",
    expiration_date: "1/1/2023",
    cost: 23,
  },
];
const columns = [
  {
    header: "Card Name",
    accessorKey: "card_name",
  },
  {
    header: "Card Type Id",
    accessorKey: "card type id",
  },
  {
    header: "card value",
    accessorKey: "card_value",
  },
  {
    header: "Expiration Date",
    accessorKey: "expiration_date",
  },
  {
    header: "Cost",
    accessorKey: "cost",
  },
  {
    header: "Card Description",
    accessorKey: "card_description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<CardValueType>>;

const CardValue = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: CardValueType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title="Add New Card Value"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: CardValueType) => formData(data)}>
            <TextFieldElement
              name="card_type_id"
              label="card_type_id"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="card_value"
              label="card value"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="card_name"
              label="card name"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="card_description"
              label="card description"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="expiration date"
              label="expiration date"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="cost"
              label="cost"
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
            Add New Card Value
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default CardValue;
