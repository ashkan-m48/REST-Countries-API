import { Button, Container, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Content() {
  return (
    <Container>
      <Stack direction="row">
        <Button variant="outlined" href="/">
          <ArrowBackIcon />
          Back
        </Button>
      </Stack>
    </Container>
  );
}

export default Content;
