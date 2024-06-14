import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type ObjectElementsProps = {
  num: string;
  icon: string;
  photo: string;
  name: string;
  creator: string;
  account: string;
  category: string;
  objectType: string;
  id: number;
};

function ObjectElements(props: ObjectElementsProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", color: "black" }}>
      <Typography>{props.num}</Typography>
      <LocalShippingIcon sx={{ width: "20px", height: "20px", color: "#9da6ae" }} />
      <AccountCircleIcon sx={{ width: "20px", height: "20px", color: "#9da6ae" }} />
      <Typography>{props.name}</Typography>
      <Typography>{props.creator}</Typography>
      <Typography>{props.account}</Typography>
      <Typography>{props.category}</Typography>
      <Typography>{props.objectType}</Typography>
      <Typography>{props.id}</Typography>
    </Box>
  );
}

export default ObjectElements;
