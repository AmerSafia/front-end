import DataTable from "../../components/dashboard/common/DataTable";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Modal from "../../components/dashboard/common/Modal";
type Props = {};

interface AccessoriesType {
  accessories_name: string;
  description: string;
}
const data: AccessoriesType[] = [
  {
    accessories_name: "screen Protect",
    description: "screen Protect",
  },
  {
    accessories_name: "Cover",
    description: "cover",
  },
];
const columns = [
  {
    header: "Accessories Name",
    accessorKey: "accessories_name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
] as Array<MRT_ColumnDef<AccessoriesType>>;

const Accessories = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: AccessoriesType) => {
    console.log(data);

    // data;
  };

  return (
    <>
      <Modal
        title="Add Type Accessories"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: AccessoriesType) => formData(data)}>
            <TextFieldElement
              name="accessories_name"
              label="Accessories Name"
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
            Add New Accessories Type
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Accessories;
