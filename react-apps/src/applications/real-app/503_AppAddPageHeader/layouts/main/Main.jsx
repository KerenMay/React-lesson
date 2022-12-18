import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Container>
  );
}

Main.prototypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
