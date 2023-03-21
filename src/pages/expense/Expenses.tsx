import DataTable from "../../components/dashboard/common/DataTable";
import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";

type Props = {};

interface ExpensesInterFace {
  expense_type_id: string;
  amount: number;
  expense_date: string;

  description: string;
}
const data: ExpensesInterFace[] = [
  {
    expense_type_id: "123213123",
    amount: 21,
    expense_date: "1/1/2020",
    description: "screen Protect",
  },
];
const columns = [
  {
    header: "expense_type_id",
    accessorKey: "expense_type_id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Expense Date",
    accessorKey: "expense_date",
  },
  {
    header: "Description",
    accessorKey: "description", //using accessorKey dot notation to access nested data
  },
] as Array<MRT_ColumnDef<ExpensesInterFace>>;

const Expenses = (props: Props) => {
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Expenses
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Expenses;
