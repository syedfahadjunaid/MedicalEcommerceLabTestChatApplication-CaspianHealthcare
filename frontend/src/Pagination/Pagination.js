import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Pagination.css'

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary"  shape="rounded"/>
    </Stack>
  );
}
