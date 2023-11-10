import React, { useState, FC } from 'react';
import '../App.css';
import { RepositoryType } from '../types';
import Table from './Table';

interface TableInterfacePropsType {
  list: RepositoryType[];
}

const TableInterface: FC<TableInterfacePropsType> = ({ list }) => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(0);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setPage(0);
  };

  const filteredList = list.filter((item: any) => item.name.includes(value));
  const listOfCurrentPage = filteredList.slice(page * 10, page * 10 + 10);

  return (
    <div className="table-interface">
      <div>
        <span>Search: </span>
        <input
          value={value}
          placeholder=''
          onChange={handleChange}
          className="input"
        />
      </div>

      {listOfCurrentPage.length > 0 
        ? <Table list={listOfCurrentPage} /> 
        : <div>No Data</div>
      }

      <div>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0} 
          className="button"
        >&lArr;</button>

        <span> {page + 1} </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={listOfCurrentPage.length < 10}
          className="button"
        >&rArr;</button>
      </div>
    </div>
  );
};

export default TableInterface;
