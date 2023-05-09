import { createContext, useContext } from 'react';

export const initialOrders = {
  "1": [],
  "2": [],
  "3": [],
  "4": [],
  "5": [],
}

const findOrderId = (order) => {
  const ids = order.map(o => +o.Id);
  ids.sort((a, b) => a - b);

  const id = ids.reduce((acc, curr) => {
    if (acc === curr) {
      return acc + 1;
    }

    return acc;
  }, 1);

  return id.toString();
};

export const reducer = (orders, action) => {
  switch (action.type) {
    case 'add': {
      const { orderId, message } = action;
      const patientOrders = [...orders[orderId]];

      if (patientOrders) {
        patientOrders.push({
          Id: findOrderId(patientOrders),
          Message: message,
        });
      }

      return {
        ...orders,
        [orderId]: patientOrders
      }
    }

    case 'delete': {
      const { id, orderId } = action;
      const patientOrders = [...orders[orderId]];

      if (patientOrders) {
        const index = patientOrders.findIndex(po => po.Id === id);
        patientOrders.splice(index, 1);
      }

      return {
        ...orders,
        [orderId]: patientOrders
      }
    }

    default:
      break;
  }
};

export const DispatchContext = createContext(null);
export const OrdersContext = createContext(null);

export const useDispatch = () => {
  return useContext(DispatchContext)
};

export const useOrders = () => {
  return useContext(OrdersContext)
};
