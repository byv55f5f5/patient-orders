import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useOrders } from 'store';

export default function OrderDialog({ name, onClose, orderId, isOpen }) {
  const orderTextRef = useRef(null);
  const dispatch = useDispatch();
  const orders = useOrders();

  const handleClose = () => {
    onClose();
  };

  const handleConfirmClick = () => {
    if (orderTextRef.current.value !== '') {
      dispatch({
        type: 'add',
        message: orderTextRef.current.value,
        orderId,
      });
      orderTextRef.current.value = '';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleConfirmClick();
    }
  };

  const handleDeleteClick = (id) => {
    dispatch({
      type: 'delete',
      id,
      orderId,
    });
  };

  const viewingOrders = orders[orderId] ?? [];

  return (
    <Dialog onClose={handleClose} open={isOpen} fullWidth>
      <DialogTitle>{name} Orders</DialogTitle>
      <DialogContent dividers>
        <List>
          {viewingOrders.map((order, index) => (
            <ListItem key={order.Id} divider={index + 1 !== order.length}>
              <ListItemText
                primary={order.Message}
                sx={{ wordBreak: 'break-all' }}
              />
              <IconButton onClick={() => handleDeleteClick(order.Id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <ListItem disableGutters>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                columnGap: '10px',
              }}
            >
              <TextField
                inputRef={orderTextRef}
                sx={{ flexGrow: 1 }}
                label="Enter order here"
                variant="filled"
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <IconButton sx={{ flexShrink: 0 }} onClick={handleConfirmClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

OrderDialog.propTypes = {
  onClose: PropTypes.func,
  name: PropTypes.string,
  orderId: PropTypes.string,
  isOpen: PropTypes.bool,
};

OrderDialog.defaultProps = {
  onClose: () => undefined,
  name: '',
  orderId: '',
  isOpen: false,
};
