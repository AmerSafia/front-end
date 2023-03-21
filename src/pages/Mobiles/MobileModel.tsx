import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";
type Props = {};

const MobileModel = (props: Props) => {
  //a more complex example with nested data
  interface MobileModel {
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
  ] as MobileModel[];

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
  ] as Array<MRT_ColumnDef<MobileModel>>;

  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
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
