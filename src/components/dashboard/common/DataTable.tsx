import React, { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef, MaterialReactTableProps } from "material-react-table";

type DataTableProps<T extends Record<string, any> = {}> = Omit<MaterialReactTableProps<T>, "data"> & {
  data: T[];
  columns: Array<MRT_ColumnDef<T>>;
}

export default function DataTable<T extends Record<string, any> = {}>(props: DataTableProps<T>) {
  const { columns, data, ...rest } = props;
  const tableColumns = useMemo<Array<MRT_ColumnDef<T>>>(
    () => columns,
    [columns]
  );
  return (
    <MaterialReactTable<T>
      columns={tableColumns}
      data={data}
      {...rest}
    />
  );
}