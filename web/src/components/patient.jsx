import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import OrderDialog from 'components/order-dialog';

function Patient({ data, isViewingOrder, isLast, onClick, onOrderClose }) {
  const handleClick = () => onClick(data)

  return (
    <>
      <ListItem divider={!isLast} disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={data.Name} />
        </ListItemButton>
      </ListItem>
      <OrderDialog
        isOpen={isViewingOrder}
        name={data.Name}
        orderId={data.OrderId}
        onClose={onOrderClose}
      />
    </>
  )
}

Patient.propTypes = {
  data: PropTypes.shape({
    Name: PropTypes.string,
    OrderId: PropTypes.string,
  }),
  isViewingOrder: PropTypes.bool,
  isLast: PropTypes.bool,
  onClick: PropTypes.func,
  onOrderClose: PropTypes.func,
};

export default memo(Patient);