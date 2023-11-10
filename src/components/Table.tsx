import React, { FC } from 'react';
import '../App.css';
import { RepositoryType } from '../types';

interface TablePropsType {
  list: RepositoryType[]
}

const Table: FC<TablePropsType> = ({ list }) => {
  return (
    <div className="table">
      <table> 
        <tbody>
          <tr>
            <th>Owner</th>
            <th>Name</th>
            <th>Url</th>
            <th>Description</th>
          </tr>
          {list.map((item: RepositoryType) => (
            <tr key={item.id} >
              <td><img src={item.owner.avatar_url} alt="avatar" className="avatar" /></td>
              <td>{item.name}</td>
              <td><a href={item.html_url} className="link">{item.html_url}</a></td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
