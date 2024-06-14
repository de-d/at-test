import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { getDevicesId } from "../../../../redux/api/actions";
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(getDevicesId(searchValue));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "start" }}>
        <TextField
          sx={{
            height: "36px",
            "& .MuiInputBase-root": {
              height: "36px",
              borderRadius: "6px 6px 6px 6px",
            },
            "& .MuiInputBase-input": {
              height: "36px",
              padding: "2",
              color: "#9da6ae",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00be85",
              borderWidth: "3px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00be85",
              borderWidth: "2px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#9da6ae",
            },
            width: "250px",
            backgroundColor: "#8080800f",
            margin: "0",
          }}
          placeholder="Поиск по id"
          variant="outlined"
          autoComplete="off"
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default Search;
