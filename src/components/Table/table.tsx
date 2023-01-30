import React, { useState } from 'react';
import classNames from 'classnames/bind';



interface TableProps {
  data: Array<any>;
  columns: Array<Column>;
  onSort: (column: string, direction: string) => void;
  onSelectRow: (row: any) => void;
  onSelectAllRows: (rows: Array<any>) => void;
  onToggleColumn: (column: string) => void;
  onSearch: (value: string) => void;
  onFilter: (filters: Array<Filter>) => void;
  onDownload: () => void;
}

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  hidden?: boolean;
  render?: (value: any) => any;
  filter?: Filter;
}

interface Filter {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date';
  options?: Array<Option>;
  value?: any;
  onChange: (value: any) => void;
}

interface Option {
  value: any;
  label: string;
}


// const cx = classNames.bind(styles);

const Table: React.FC<TableProps> = ({ data, columns, onSort, onSelectRow, onSelectAllRows, onToggleColumn, onSearch, onFilter, onDownload }) => {
  const [sortedData, setSortedData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSort = (column: string) => {
    const direction = sortedData.direction === 'asc' ? 'desc' : 'asc';
    const sorted = data.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setSortedData({ data: sorted, direction });
    onSort(column, direction);
  };

  const handleSelectRow = (row: any) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter(r => r !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
    onSelectRow(row);
  };

  const handleSelectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(data);
    } else {
      setSelectedRows([]);
    }
    onSelectAllRows(data);
  };

  const handleToggleColumn = (column: string) => {
    const updatedColumns = columns.map(c => {
      if (c.key === column) {
        return { ...c, hidden: !c.hidden };
      }
      return c;
    });
    setColumns(updatedColumns);
    onToggleColumn(column);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilter = (key: string, value: any) => {
    const updatedFilters = filters.map(f => {
      if (f.key === key) {
        return { ...f, value };
      }
      return f;
    });
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleDownload = () => {
    // code to download the data
    onDownload();
  };
}