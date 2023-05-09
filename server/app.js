#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const patientsRouter = require('./routes/patients')

const LISTEN_PORT = process.env.LISTEN_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', patientsRouter);

app.listen(LISTEN_PORT, () => {
  console.log(`App listening on port ${LISTEN_PORT}`);
});