import PropTypes from "prop-types";
import { useTable, usePagination, useGlobalFilter, useSortBy, useAsyncDebounce } from "react-table";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Autocomplete from "@mui/material/Autocomplete";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";
import { useState } from "react";

function DataTable({ entriesPerPage, canSearch, showTotalEntries, table, isSorted, noEndBorder }) {
  const entries = entriesPerPage.entries?.map((el) => el.toString()) || [
    "5",
    "10",
    "15",
    "20",
    "25",
  ];
  const columns = table.columns;
  const data = table.rows;

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  const setEntriesPerPage = (value) => setPageSize(value);

  const [search, setSearch] = useState(globalFilter);

  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;
  const entriesEnd =
    pageIndex === pageOptions.length - 1 ? data.length : pageSize * (pageIndex + 1);

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {(entriesPerPage || canSearch) && (
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MDBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event, newValue) => setEntriesPerPage(parseInt(newValue, 10))}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
          )}
          {canSearch && (
            <MDBox width="12rem" ml="auto">
              <MDInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }) => {
                  setSearch(currentTarget.value);
                  onSearchChange(currentTarget.value);
                }}
              />
            </MDBox>
          )}
        </MDBox>
      )}
      <Table {...getTableProps()}>
        <MDBox component="thead">
          {headerGroups.map((headerGroup) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id || headerGroup.index}
            >
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width || "auto"}
                  align={column.align || "left"}
                  sorted={
                    isSorted && column.isSorted ? (column.isSortedDesc ? "desc" : "asc") : "none"
                  }
                  key={column.id || column.index}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={row.id || row.index}>
                {row.cells.map((cell) => (
                  <DataTableBodyCell
                    noBorder={noEndBorder && page.length - 1 === row.index}
                    align={cell.column.align || "left"}
                    key={cell.column.id || cell.column.index}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {showTotalEntries && (
        <MDBox p={3}>
          <MDTypography variant="button" color="secondary" fontWeight="regular">
            Showing {entriesStart} to {entriesEnd} of {data.length} entries
          </MDTypography>
        </MDBox>
      )}
    </TableContainer>
  );
}

DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  isSorted: true,
  noEndBorder: false,
};

DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
  }).isRequired,
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
