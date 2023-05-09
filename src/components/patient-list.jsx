import React, { useState, useCallback } from 'react';

import List from '@mui/material/List';

import Patient from 'components/patient';

const patients = [
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
];

export default function PatientList() {
  const [viewingPatient, setViewingPatient] = useState('');

  const handlePatientClick = useCallback((patient) => {
    setViewingPatient(patient.Id);
  }, []);

  const handleOrderClose = useCallback(() => {
    setViewingPatient('');
  }, []);

  return (
    <>
      <List sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', flexGrow: 1 }}>
        {patients.map((patient, index) => (
          <Patient
            key={patient.Id}
            data={patient}
            isViewingOrder={patient.Id === viewingPatient}
            isLast={index + 1 === patients.length}
            onClick={handlePatientClick}
            onOrderClose={handleOrderClose}
          />
        ))}
      </List>
    </>
  );
}