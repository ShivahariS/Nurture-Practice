import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const headingColor = cohort.status === "Ongoing" ? "green" : "blue";

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor, marginBottom: "10px" }}>
        {cohort.name}
      </h3>
      <dl>
        <dt>Started On:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach:</dt>
        <dd>{cohort.coach}</dd>
        <dt>Trainer:</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
