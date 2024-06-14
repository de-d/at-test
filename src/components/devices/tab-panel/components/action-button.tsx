import { useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Box, Button, ButtonGroup, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";

const options = ["Действия", "Добавить", "Удалить"];

export default function ActionButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        sx={{
          ".MuiButtonGroup-grouped": {
            borderColor: "transparent",
            "&:not(:last-of-type)": {
              borderRight: "1px solid white",
            },
            "&:hover": {
              backgroundColor: "#008a63",
            },
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "#00be85",
            "&:hover": {
              backgroundColor: "#008a63",
            },
          }}
        >
          {options[selectedIndex]}
        </Button>
        <Button
          sx={{
            backgroundColor: "#00be85",
            border: "none",
            "&:hover": {
              backgroundColor: "#008a63",
            },
          }}
          size="small"
          aria-controls={open ? "action-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem key={option} onClick={(event) => handleMenuItemClick(event, index)}>
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
