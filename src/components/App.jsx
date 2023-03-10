import { BrowserRouter } from 'react-router-dom';

import NavigateBar from './NavigateBar/NavigateBar';
import UserRoutes from './UserRoute';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <NavigateBar />
      <UserRoutes />
    </BrowserRouter>
  );
};
