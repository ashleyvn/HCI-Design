import React from 'react';
import '../App.css';

const Validation = () => {
return (
	<div>
	<h1>VALIDATION</h1>
    
    <details>
        <summary>1.0 Solution Justification</summary>
        <p>The main concerns and desires of the client that are addressed in our design</p>
        <ul>
            <li>Enables users to easily access the large amount of data collected by the StREAM Lab.</li>
            <li>Enables users to easily download their chosen data for further off-line analysis.</li>
            <li>Allowing the user to specify what time periods to visualize.</li>
            <li>Allowing the user to determine which attributes to visualize.</li>
            <li>Proof of concept to link images to chart for specific date via tooltip.</li>
            <li> Facilitates better comparisons between various attributes and time frames.</li>
        </ul> 
    </details>
    
    <details>
        <summary>1.1 Changes from Phase-2</summary>
        <ul>
            <li>The initial design idea was to have different graphs for each attribute.</li>
            <li>The visualization implemented shows all the attributes in a single graph.</li>
            <li>The tooltip is also updated to show the readings of the selected attributes, along with the date and time.</li>
            <li>A feature to display images at various time stamps is also incorporated.</li>
            <li>Users are also allowed to choose the dataset (normalized / raw) they wish to visualize.</li>
            <li>Users can also choose to download their dataset for further analysis on other platforms.</li>
        </ul>
    </details>
	</div>
);
};

export default Validation;
