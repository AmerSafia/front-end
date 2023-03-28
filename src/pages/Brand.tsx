import { useState } from "react";
import DataTable from "../components/dashboard/common/DataTable";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Modal from "../components/dashboard/common/Modal";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

type Props = {};
interface BrandType {
  website: string;
  brand_name: string;
  mobile_number: number;
}

const data: BrandType[] = [
  {
    website: "WWW.test.com",
    brand_name: "samsung",
    mobile_number: 1,
  },
  {
    website: "WWW.test.com",
    brand_name: "test",
    mobile_number: 2,
  },
];
const columns = [
  {
    header: "Brand Name",
    accessorKey: "brand_name",
  },
  {
    header: "Website",
    accessorKey: "website", //using accessorKey dot notation to access nested data
  },
  {
    header: "Mobile Number",
    accessorKey: "mobile_number",
  },
] as Array<MRT_ColumnDef<BrandType>>;

const Brand = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = (data: BrandType) => {
    console.log(data);
    // data;
  };

  return (
    <>
      <Modal
        title="Add New Brand"
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <FormContainer onSuccess={(data: BrandType) => formData(data)}>
            <TextFieldElement
              name="brand_name"
              label="brand name"
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

            <TextFieldElement
              name="mobile_number"
              label="mobile number"
              type="number"
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
            Add New Brand
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Brand;
