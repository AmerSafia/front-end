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
interface MobileModelType {
  model_name: string;
  brand_name: string;
  release_date: string;
}
const data = [
  {
    model_name: "S23",
    brand_name: "samsung",
    release_date: "2023/2/1",
  },
  {
    model_name: "S23+",
    brand_name: "samsung",
    release_date: "2023/2/1",
  },
] as MobileModelType[];

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
    header: "Release Date",
    accessorKey: "release_date",
  },
] as Array<MRT_ColumnDef<MobileModelType>>;

const MobileModel = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: MobileModelType) => {
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
          <FormContainer
            defaultValues={{ model_name: "", brand_name: "", release_date: "" }}
            onSuccess={(data) => formData(data)}
          >
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
              sx={{ my: "1rem" }}
              name="release_date"
              label="Release Date"
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
            Add New Model
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default MobileModel;
