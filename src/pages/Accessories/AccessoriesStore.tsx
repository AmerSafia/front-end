import DataTable from "../../components/dashboard/common/DataTable";
import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";

type Props = {};
const AccessoriesStore = (props: Props) => {
  interface AccessoriesStore {
    quantity: number;
    description: string;
    barcode?: string;
    price: number;
    cost: number;
  }
  const data: AccessoriesStore[] = [
    {
      quantity: 33,
      description: "screen Protect",
      price: 21,
      cost: 22,
      barcode: "test",
    },
  ];

  const columns =  [
      {
        header: "Type Id",
        accessorKey: "type_id",
      },
      {
        header: "Quantity",
        accessorKey: "quantity",
      },
      {
        header: "Description",
        accessorKey: "description", //using accessorKey dot notation to access nested data
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Barcode",
        accessorKey: "barcode",
      },
      {
        header: "Cost",
        accessorKey: "cost",
      },
      {
        header: "Photo",
        accessorKey: "photo",
      },
    ]as Array<MRT_ColumnDef<AccessoriesStore>>
  

  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Accessories Store
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default AccessoriesStore;
