import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import theme from "../../configs/colors";
const CustomCard = ({ title, subtitle, author, buttonLabel }) => (
  <Card sx={{ maxWidth: 300 }}>
    <CardContent>
      <Typography
        variant="h5"
        gutterBottom
        textAlign={"center"}
        sx={{ color: "black" }}
      >
        {title}
      </Typography>

      <Typography
        gutterBottom
        textAlign={"center"}
        variant="h6"
        sx={{ color: theme.palette.primary.text }}
      >
        {subtitle}
      </Typography>
      <Typography textAlign={"center"} variant="caption1">
        {author}
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button size="small">{buttonLabel}</Button>
    </CardActions>
  </Card>
);
CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default CustomCard;
