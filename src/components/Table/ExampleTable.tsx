import React, { useState } from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import classNames from "classnames";
import { exportToCSV, exportToExcel, exportToPDF } from "./exportFunctions";
import { advancedSearch } from "./advancedSearchFunction";
import { customStyles } from "./customStyles";

interface Props {
  data: any[];
  columns: any[];
  loading: boolean;
}

const Table: React.FC<Props> = ({ data, columns, loading }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [customColors, setCustomColors] = useState({});

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      data,
      columns,
      initialState: { pageIndex: 0 },
      manualPagination: true,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const handleRowClick = (row) => {
    // Handle row selection
  };

  const handleColumnClick = (column) => {
    // Handle column selection and visibility
  };

  const handleExportToCSV = () => {
    exportToCSV(data, columns);
  };

  const handleExportToExcel = () => {
    exportToExcel(data, columns);
  };

  const handleExportToPDF = () => {
    exportToPDF(data, columns);
  };

  const handleSearch = (searchTerm) => {
    advancedSearch(data, columns, searchTerm);
  };

  const handlePageChange = (newPageIndex) => {
    gotoPage(newPageIndex);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const handleColorChange = (newColors) => {
    setCustomColors(newColors);
  };

  return (
    <div className="table-container">
       <div className={classnames("table-container", className)}>
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            onClick={() => handleSort(column.key)}
                            className={classnames({
                                active: sort.key === column.key,
                                [sort.order]: sort.key === column.key
                            })}
                        >
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        onClick={() => handleSelect(row)}
                        className={classnames({
                            selected: selected.includes(row)
                        })}
                    >
                        {columns.map((column, index) => (
                            <td key={index}>{row[column.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="table-actions">
            <button onClick={handleExportToCSV}>Exportar CSV</button>
            {/* <button onClick={handleExportToExcel}>Exportar Excel</button>
            <button onClick={handleExportToPDF}>Exportar PDF</button>
            <button onClick={handleToggleColumns}>Mostrar/Ocultar Columnas</button> */}
        </div>
    </div>
    </div>
)
                        }