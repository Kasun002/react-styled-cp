import { styled } from 'styled-components';
import AppRouter from './App.Router';
import './App.css';

const RootWrapper = styled.div`
  padding: 0 15px 15px;
`

function App() {
  return (
    <RootWrapper>
      <AppRouter></AppRouter>
    </RootWrapper>
  );
}

export default App;
