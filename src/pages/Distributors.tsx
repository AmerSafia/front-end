import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../components/dashboard/common/DataTable";

type Props = {};

interface Distributor {
  distributor_name: string;
  website: string;
  mobile_number: number;
  location: string;
  brand_name_id: string;
}
const data: Distributor[] = [
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
] as Array<MRT_ColumnDef<Distributor>>;

const Distributors = (props: Props) => {
  return (
    <>

      <DataTable 
          renderTopToolbarCustomActions={() => (
            <Button color="secondary" variant="contained">
            Add New Distributor
            </Button>
          )}
      columns={columns} data={data} />
    </>
  );
};

export default Distributors;
