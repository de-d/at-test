import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from "@mui/material";

export default function DeviceDataTable() {
  const [selected, setSelected] = useState<string[]>([]);
  const deviceDataRows = useSelector((state: RootState) => state.devices);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = deviceDataRows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;
  const devices = Array.isArray(deviceDataRows) ? deviceDataRows : [deviceDataRows];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="device data table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={selected.length > 0 && selected.length < deviceDataRows.length}
                checked={deviceDataRows.length > 0 && selected.length === deviceDataRows.length}
                onChange={handleSelectAllClick}
                inputProps={{ "aria-label": "select all devices" }}
              />
            </TableCell>
            <TableCell>№</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UniqueId</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devices.map((device, index) => {
            const isItemSelected = isSelected(device.id);
            const lastUpdate = new Date(device.lastUpdate);
            return (
              <TableRow
                key={device.id}
                hover
                onClick={(event) => handleClick(event, device.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{ "aria-labelledby": `enhanced-table-checkbox-${device.id}` }}
                    onChange={(event) => handleClick(event, device.id)}
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.uniqueId}</TableCell>
                <TableCell>{device.status}</TableCell>
                <TableCell>{lastUpdate.toLocaleString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
