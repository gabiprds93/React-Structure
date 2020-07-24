import React from 'react'
import { process, State } from '@progress/kendo-data-query';
import { Grid, GridColumn, GridDataStateChangeEvent, GridRowClickEvent } from '@progress/kendo-react-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Window, WindowActionsEvent } from '@progress/kendo-react-dialogs';

import categories from '../../assets/data/categories.json';
import products from '../../assets/data/products.json';
import CheckboxColumn from '../../components/Checkbox/CheckboxColumn';


const Dashboard = () => {
  const [dropdownlistCategory, setDropdownlistCategory] = React.useState(null);
  const [gridDataState, setGridDataState] = React.useState<State>({
    sort: [
      { field: "ProductName", dir: "asc" }
    ],
    skip: 0, 
    take: 10
  });
  const [windowVisible, setWindowVisible] = React.useState(false);
  const [gridClickedRow, setGridClickedRow] = React.useState<any>();

  const handleDropDownChange = (event: DropDownListChangeEvent) => {
    let newDataState: State  = { ...gridDataState };
    
    if(event.target.value.CategoryID) {
      newDataState.filter = {
        logic: 'and',
        filters: [{ field: 'CategoryID', operator: 'eq', value: event.target.value.CategoryID }]
      };
      newDataState.skip = 0;
    } else {
      newDataState.filter = {logic:'and', filters:[]};
      newDataState.skip = 0;
    }

    setDropdownlistCategory(event.target.value.CategoryID);
    setGridDataState(newDataState);
  }

  const handleGridDataStateChange = (event: GridDataStateChangeEvent) => {
    setGridDataState(event.dataState);
  }

  const handleGridRowClick = (event: GridRowClickEvent) => {
    setWindowVisible(true);
    setGridClickedRow(event.dataItem);
  }

  const closeWindow = (event: WindowActionsEvent) => {
    setWindowVisible(false);
  }

  return(
    <div>
      <p>
        <DropDownList
          data={categories}
          dataItemKey="CategoryID"
          textField="CategoryName"
          defaultItem={{CategoryID: null, CategoryName: "Product categories"}}
          onChange={handleDropDownChange}
          />
        &nbsp; Selected category ID: <strong>{dropdownlistCategory}</strong>
      </p>
      
      <Grid
        data={process(products, gridDataState)}
        pageable={true}
        sortable={true}
        {...gridDataState}
        onDataStateChange={handleGridDataStateChange}
        onRowClick={handleGridRowClick}
        style={{ height: "400px" }}
      >
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
        <GridColumn field="UnitsInStock" title="Units in Stock" />
        <GridColumn field="Discontinued" cell={CheckboxColumn} />
      </Grid>

      {windowVisible &&
        <Window
          title="Product Details"
          onClose={closeWindow}
          height={250}>
          <dl style={{textAlign:"left"}}>
            <dt>Product Name</dt>
            <dd>{gridClickedRow.ProductName}</dd>
            <dt>Product ID</dt>
            <dd>{gridClickedRow.ProductID}</dd>
            <dt>Quantity per Unit</dt>
            <dd>{gridClickedRow.QuantityPerUnit}</dd>
          </dl>
        </Window>
      }
    </div>
  );
}

export default Dashboard;