import { Button, DialogActions, DialogContent } from "@mui/material";
import DataTable from "../../components/dashboard/common/DataTable";
import { MRT_ColumnDef } from "material-react-table";
import { useState } from "react";
import Modal from "../../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

type Props = {};
interface CardStoreType {
  card_name: string;
  card_description: string;
}
const data: CardStoreType[] = [
  {
    card_name: "Zain",
    card_description: "zain company",
  },
];

const columns = [
  {
    header: "Card Name",
    accessorKey: "card_name",
  },
  {
    header: "Card Description",
    accessorKey: "card_description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<CardStoreType>>;

const Card = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: CardStoreType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title=" Add New Card To Store"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: CardStoreType) => formData(data)}>
            <TextFieldElement
              name="card_name"
              label="card name"
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
            Add New Card To Store
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default Card;
