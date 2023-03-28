import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../components/dashboard/common/DataTable";
import { useState } from "react";
import Modal from "../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

type Props = {};

interface DistributorType {
  distributor_name: string;
  website: string;
  mobile_number: number;
  location: string;
  brand_name_id: string;
}
const data: DistributorType[] = [
  {
    distributor_name: "Ahmed",
    website: "test",
    mobile_number: 795945929,
    location: "amman",
    brand_name_id: "asdasd",
  },
];
const columns = [
  {
    header: "Distributor Name",
    accessorKey: "distributor_name",
  },
  {
    header: "Website",
    accessorKey: "website", //using accessorKey dot notation to access nested data
  },
  {
    header: "Mobile Number",
    accessorKey: "mobile_number", //using accessorKey dot notation to access nested data
  },
  {
    header: "Location",
    accessorKey: "location", //using accessorKey dot notation to access nested data
  },
  {
    header: "brand_name_id",
    accessorKey: "brand_name_id", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<DistributorType>>;

const Distributors = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: DistributorType) => {
    console.log(data);

    // data;
  };
  return (
    <>
      <Modal
        title="Add New Distributor"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: DistributorType) => formData(data)}>
            <TextFieldElement
              name="distributor_name"
              label="distributor name"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="mobile_number"
              label="mobile number"
              type="number"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="location"
              label="location"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="brand_name_id"
              label="brand name id"
              required
              fullWidth
              sx={{ my: "1rem" }}
            />
            <TextFieldElement
              name="website"
              label="website"
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
            Add New Distributor
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Distributors;
