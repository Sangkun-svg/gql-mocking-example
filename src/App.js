import { Mission } from "./Mission";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Mission />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
