const { Router } = require('express');

const router = new Router();
const path = '/patients';

router.get(path, (req, res) => {
  res.json([
    {
      Id: '1',
      Name: 'Patient 1',
      OrderId: '1',
    },
    {
      Id: '2',
      Name: 'Patient 2',
      OrderId: '2',
    },
    {
      Id: '3',
      Name: 'Patient 3',
      OrderId: '3',
    },
    {
      Id: '4',
      Name: 'Patient 4',
      OrderId: '4',
    },
    {
      Id: '5',
      Name: 'Patient 5',
      OrderId: '5',
    },
  ]);
});

module.exports = router;