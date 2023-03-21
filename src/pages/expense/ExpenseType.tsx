import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DataTable from "../../components/dashboard/common/DataTable";

interface ExpenseTypeInterFace {
  expense_name: string;
  expense_description: string;
}
const data: ExpenseTypeInterFace[] = [
  {
    expense_name: "test",
    expense_description: "test",
  },
];
const columns = [
  {
    header: "Expense Name",
    accessorKey: "expense_name",
  },
  {
    header: "Expense Description",
    accessorKey: "expense_description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<ExpenseTypeInterFace>>;
type Props = {};

const ExpenseType = (props: Props) => {
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Expense Type
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default ExpenseType;
