import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";

type Props = {};

const CardValue = (props: Props) => {
  interface CardValue {
    card_type_id: string;
    card_value: number;
    card_name: string;
    card_description: string;
    expiration_date: string;
    cost: number;
  }
  const data: CardValue[] = [
    {
      card_type_id: "12312213123",
      card_value: 24,
      card_name: "Zain",
      card_description: "test",
      expiration_date: "1/1/2023",
      cost: 23,
    },
    {
      card_type_id: "12312213123",
      card_value: 24,
      card_name: "umniah",
      card_description: "test",
      expiration_date: "1/1/2023",
      cost: 23,
    },
  ];
  const columns = [
    {
      header: "Card Name",
      accessorKey: "card_name",
    },
    {
      header: "Card Type Id",
      accessorKey: "card type id",
    },
    {
      header: "card value",
      accessorKey: "card_value",
    },
    {
      header: "Expiration Date",
      accessorKey: "expiration_date",
    },
    {
      header: "Cost",
      accessorKey: "cost",
    },
    {
      header: "Card Description",
      accessorKey: "card_description", //using accessorKey dot notation to access nested data
    },
  ] as Array<MRT_ColumnDef<CardValue>>;
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Card Value
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};
export default CardValue;
