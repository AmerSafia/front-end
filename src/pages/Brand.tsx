import React from "react";
import DataTable from "../components/dashboard/common/DataTable";
import { Button } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";

type Props = {};

const Brand = (props: Props) => {
  interface Brand {
    website: string;
    brand_name: string;
    mobile_number: number;
  }

  const data: Brand[] = [
    {
      website: "WWW.test.com",
      brand_name: "samsung",
      mobile_number: 1,
    },
    {
      website: "WWW.test.com",
      brand_name: "test",
      mobile_number: 2,
    },
  ];
  const columns = [
    {
      header: "Brand Name",
      accessorKey: "brand_name",
    },
    {
      header: "Website",
      accessorKey: "website", //using accessorKey dot notation to access nested data
    },
    {
      header: "Mobile Number",
      accessorKey: "mobile_number",
    },
  ] as Array<MRT_ColumnDef<Brand>>;
  return (
    <>
      <DataTable
        renderTopToolbarCustomActions={() => (
          <Button color="secondary" variant="contained">
            Add New Brand
          </Button>
        )}
        columns={columns}
        data={data}
      />
    </>
  );
};

export default Brand;
