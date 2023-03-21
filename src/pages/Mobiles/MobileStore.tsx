import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";
type Props = {};

const MobileStore = (props: Props) => {
  //a more complex example with nested data
  interface MobileStore {
    color: string;
    description: string;
    price: number;
    cost: number;
    quantity: number;
    photo: string;
    mobile_status: string;
    battery_health: number;
    model_id: number;
    brand_id: number;
  }
  const data: MobileStore[] = [
    {
      color: "black",
      description: "test",
      price: 1,
      cost: 1,
      quantity: 1,
      photo: "ttest",
      mobile_status: "tesst",
      battery_health: 1,
      model_id: 1,
      brand_id: 1,
    },
    {
      color: "black",
      description: "test",
      price: 1,
      cost: 1,
      quantity: 1,
      photo: "ttest",
      mobile_status: "tesst",
      battery_health: 1,
      model_id: 2,
      brand_id: 2,
    },
  ];

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
      header: "Color",
      accessorKey: "color",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Cost",
      accessorKey: "cost",
    },
    {
      header: "Photo",
      accessorKey: "photo",
    },
    {
      header: "Mobile Status",
      accessorKey: "mobile_status",
    },
    {
      header: "Battery Health",
      accessorKey: "battery_health",
    },
    {
      header: "Cost",
      accessorKey: "cost",
    },
  ] as Array<MRT_ColumnDef<MobileStore>>;

  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Mobile To Store
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default MobileStore;
