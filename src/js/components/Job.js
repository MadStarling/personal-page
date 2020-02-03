import React from 'react';

function Job(props) {
    const job = props.value;
    return (
        <div className="job">
            <h2>{job.company}</h2>
            <p>{job.title}</p>
            <p>{job.begin + " - " + job.end}</p>
        </div>
    );
}
 
export default Job;