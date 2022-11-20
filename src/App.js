import { Mission } from "./Mission";
import styled from "styled-components";
import { Publications } from "./Publications";
import { PublicationForm } from "./PublicationForm";

function App() {
  return (
    <Container>
      <PublicationForm />
      <Mission />
      <Publications />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
