import React from 'react';
import '../App.css';
import img from './files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d';
import img2 from './files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43';
const Overview = () => {
return (
	<div>
		<h1>OVERVIEW</h1>
			<details>
				<summary>1. Domain Situation</summary>
				<div>
					<ul>
						<li>Stroubles Creek is a  12 miles long stream</li>
						<li>Starts in Blacksburg and travels divast Virginia Tech's campus.</li> 
						<li>VT Stream Research, Education and Management (StREAM) Lab is a world-class research center</li>
						<li>Focused on understanding the interactions of natural and human systems.</li>
						<li>StREAM Lab provides opportunities to concurrently conduct research, education, and outreach just kilometers from campus.</li>
					</ul>
				</div> 
				<img src={img}/>
			</details>

			<details>
                <summary>2. Problem Statement</summary>
                
                <p> The main goal of this project is to facilitate better access and visualization of the wealth of data collected by the StREAM Lab that can help people learn about Stroubles Creek so that more people can appreciate it and take care of it. </p>  
                    
                <ol>
                    <li>Immense amounts of Data</li>
                    <li>Current visualizations are sparse and out of date.</li>
                </ol>
            </details>
            <details>
                <summary>3. Example Visualization by StREAM Lab</summary>
                <img src={img2}/>
                
            </details>
       
            <details>
                <summary>4. Target Users</summary>
                <ul>
                    <li>Scientists</li>
                    <li>Researchers</li>
                    <li>Graduate students who work with the StREAM Lab</li>
                </ul>
            </details>
        
            <details>
                <summary>5. Data Abstraction</summary>    
                
                <p>a. Data size: 82,000 rows ... and counting!</p>
                    
                <p>b. Data sources:</p>
                <ul>
                    <li>A dataset is available (by invitation) on the EDI Data Portal.</li>
                    <li>Includes a high-frequency time series of stage height, stream discharge, and water quality.</li>
                    <li>360∘ images along the creek from two different time periods (about 6 years apart).</li>
                    <li>Data at locations “Bridge 1” and “Bridge 2” on Stroubles Creek  are collected at regular time intervals.</li>
                    <li>Includes ~ 25 attributes recorded every 15 minutes & recorded for ~ 10 years.</li>
                    <li>Images (photographs) saved periodically.</li>
                </ul>
            </details>
        
            <details>
                <summary>6. Task Abstraction</summary>
                <ul>
                    <li>Managing the large amount of data available through the StREAM Lab as it is difficult for users to access it.</li>
                    <li>Better access to data from the two bridge locations at different (but specific) periods of time.</li>
                    <li>Targeted areas include looking at features within time series:</li>
                    <ul>
                        <li>changes in the topography</li>
                        <li>trends (e.g. how changes might occur with the seasons or unusual weather events)</li>
                        <li>paths (e.g. different locations might have different results during the same “events”).</li>
                    </ul>
                    <li>Filtering data by certain attributes.</li>
                </ul>
            </details>
						
			
	</div>
);
};

export default Overview;