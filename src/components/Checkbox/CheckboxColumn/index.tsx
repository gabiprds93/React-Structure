import React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';

const CheckboxColumn: React.FC<GridCellProps> = ({dataItem, field}) => {
  return (
    <td>
      {field && (
        <input type="checkbox" checked={dataItem[field]} disabled />
      )}
    </td>
  );
}

export default CheckboxColumn;