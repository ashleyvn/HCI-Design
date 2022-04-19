import React from 'react';
import '../App.css';
import img from './files/img'

const Implementation = () => {
return (
	<div>
	<h1>IMPLEMENTATION</h1>

<details>
	<summary>1.0 Get the Data</summary>
	<p>1.1  Initially, we had hoped to access the data "live"</p>
	<p>This was not possible - so the rest of the presentation/demo will be with a static file.</p>
	<p>We'll talk about the cloud access at the end.</p>
	<p>Our Focus became how incorporate user input, flexibility, and choice within visualizations.</p>
	<ul>
		<li>For this project, we used a static download of the dynamic data file for data at Bridge 1</li>
		<li>We created a python file to join the data together from Bridge 1:  "infovis.py"</li>
	</ul>
	<p>We will be creating time series charts, so date (which comes in as a string) needed to be converted to "date" format</p>
</details>

<details>
	<summary>2.0 User selections</summary>
	<h3>2.1. Filter by user selected time frame</h3>
	<h3>2.2. Aggregate by user selected aggregation</h3>
	<p>The user can select how they would like to aggregate the data.</p>
	<h3>2.3. Filter by User Selected Attributes</h3>
	<p>Each user selection filters the original dataset</p>
	<ul>
		<li>Filter time</li>
		<li>Aggregate time</li>
		<li>Filter attributes</li>
		<li>Format per chart need</li>
	</ul>

	<h4>2.4.1 userTidy reorganizes the data for use in time series chart:</h4>
		<ul>
			<li>It creates a single column for attributes/values</li>
			<li>It also normalizes the data</li>
			<li>Because the user may want to download their data (and they may want the original values rather than normalized values, we made the same dataset as "userTidy" but without the normalization algorithm.</li>
		</ul> 

	<h4>2.4.2  "parCoordData" has a column for each attribute (works better for Parallel Coordinates)</h4>
		<ul>
			<li>Again, created a "non-normalized version as well for downloading purposes.</li>            
		</ul>
		   
	<h4>2.4.3 The following variables are set up in order to identify start and end dates from the main datafile ("joined_files2").  These values ("time_first" and "time_last") are shared with the user.  They are also used as "min" and "max" values within the selection input so that the user doesn't choose a date that is out of range.</h4>
</details>

<details>
	<summary>3.0 Plot Data</summary>
	<h3>3.1</h3>
	<h4>Design Description</h4>
	<ul>
		<li>The final design consists of a time series line graph that display the trends amongst various attributes at different time frames.</li>
		<li>Users have an option to select the attributes and time frames that are of interest to them.</li>
		<li>Users can choose various time intervals that include 'minute', 'day', 'time', and 'week'.</li>
		<li>On mouse hover, a tooltip is provided that displays the date and time, along with the values of the selected attributes.</li>
		<li>When double clicked at any point on the graph, the user will be redirected to a page that displays the image (at Bridge 1) at that particular time.</li>
	</ul>

	<h3>3.2 Chart</h3>
	<ul>
		<li>Selections are made by the user.  The chart is dynamically updated each time a selection is made or changed.</li>
		<li>A tooltip gives the date and specific values for the attributes at the mouse's position.</li>
		<li>The user can double-click on the tooltip to see an image at Bridge 1 for the time closest to the tooltip position's time.</li>
	</ul>

	<h4>3.2.1 Date Ranges for Current Static Dataset</h4>

	<h3>3.3 Parallel Coordinates</h3>
	<ul>
		<li>The Parallel Coordinates Chart offers the user an opportunity to explore attribute relationships.</li>
		<li>The user can look for correlations between attributes.</li>
		<li>The user can shift attributes by clicking and dragging the attribute name.  In this way, two attributes can be placed adjacent so that it will be easier to see if there is any correlation (positive or negative).</li>
	</ul>
</details>

<details>
	<summary>4.0 Download Your Dataset</summary>
	<ul>
		<li>Since many users with different skill levels may be using this notebook, we offered the option to download the filtered/aggregated dataset.</li>
		<li>Different users may choose to perform different data analysis and may do so in their platform of choice by using this download option.</li>
		<li>The downloaded data will be in CSV format and is easily viewed within Excel.</li>
	</ul>
</details>

<details>
	<summary>Cloud Data in Observable</summary>
	<p>Information from Observable (https://observablehq.com/@observablehq/introduction-to-data)</p>
	<figure>
	  <img src={img}/>
	  <figcaption>Copying a link to a cell from the cell menu</figcaption>
	</figure>
	<p>"That's great - but StREAM Lab manages their data in the cloud (Google Drive) - Can Observable access data on the cloud?"</p>
	<p>Short answer:  Yes!</p>
	<p>https://observablehq.com/@observablehq/cloud-files</p>
	<p>Fine Print:  Not Really!</p>
	<p>Publishing notebooks with cloud files is not supported.  This means that it is not possible for multiple users to use the notebook when data is accessed dynamically.</p>
	<p>There are solutions available to access dynamic data.  However, they are all outside the scope of this project:</p>
	<ul>
		<li>Create a Google API</li>
		<li>Observable Teams</li>
		<li>Dropbox</li>
	</ul>
</details>  
	</div>
);
};

export default Implementation;
