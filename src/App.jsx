import React, { useReducer } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import PatientList from 'components/patient-list';

import {
  reducer,
  initialOrders,
  OrdersContext,
  DispatchContext,
} from 'store';

function App() {
  const [orders, dispatch] = useReducer(reducer, initialOrders);

  return (
    <OrdersContext.Provider value={orders}>
      <DispatchContext.Provider value={dispatch}>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}
        >
          <PatientList />
        </Container>
      </DispatchContext.Provider>
    </OrdersContext.Provider>
  );
}

export default App;
