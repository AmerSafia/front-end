import DataTable from "../../components/dashboard/common/DataTable";
import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";

type Props = {};
const AccessoriesType = (props: Props) => {
  interface AccessoriesType {
    accessories_name: string;
    description: string;
  }
  const data: AccessoriesType[] = [
    {
      accessories_name: "screen Protect",
      description: "screen Protect",
    },
  ];
  const columns = [
    {
      header: "Accessories Name",
      accessorKey: "accessories_name",
    },
    {
      header: "Description",
      accessorKey: "description", //using accessorKey dot notation to access nested data
    },
  ] as Array<MRT_ColumnDef<AccessoriesType>>;

  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Accessories Type
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default AccessoriesType;
