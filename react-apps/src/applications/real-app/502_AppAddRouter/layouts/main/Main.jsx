import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Main({ children }) {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Container>
  );
}

export default Main;
