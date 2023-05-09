import React, { useState, useCallback, useEffect } from 'react';

import List from '@mui/material/List';

import Patient from 'components/patient';

export default function PatientList() {
  const [viewingPatient, setViewingPatient] = useState('');
  const [patients, setPatients] = useState([]);

  const handlePatientClick = useCallback((patient) => {
    setViewingPatient(patient.Id);
  }, []);

  const handleOrderClose = useCallback(() => {
    setViewingPatient('');
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/api/patients')
      .then((response) => response.json())
      .then((data) => setPatients(data));
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