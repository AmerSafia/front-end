import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";

type Props = {};

const CardType = (props: Props) => {
  interface CardType {
    card_name: string;
    card_description: string;
  }
  const data: CardType[] = [
    {
      card_name: "Zain",
      card_description: "zain company",
    },
  ];
  const columns = [
    {
      header: "Card Name",
      accessorKey: "card_name",
    },
    {
      header: "Card Description",
      accessorKey: "card_description", //using accessorKey dot notation to access nested data
    },
  ] as Array<MRT_ColumnDef<CardType>>;
  return (
    <>
      <DataTable 
          renderTopToolbarCustomActions={() => (
            <Button color="secondary" variant="contained">
              Add New Card Type
            </Button>
          )}
      columns={columns} data={data} />
    </>
  );
};
export default CardType;
