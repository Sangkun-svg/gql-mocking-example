import { Mission } from "./Mission";
import styled from "styled-components";
import { Publications } from "./Publications";

function App() {
  return (
    <Container>
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
