// https://observablehq.com/@meglalley/envision-stroubles-data-analysis-project@3209
import define1 from "./e93997d5089d7165@2303.js";
import define2 from "./4be0b7b0578fccff@1366.js";
import define3 from "./1b3a22cd8be84c2f@73.js";
import define4 from "./7dfec509126263f5@315.js";
import define5 from "./a33468b95d0b15b0@808.js";

async function _joined_files2(d3,FileAttachment,parseDate,moment){return(
d3.csvParse( await FileAttachment("aggregated@2.csv").text(),(obj)=>({...d3.autoType(obj),TIMESTAMP: parseDate(obj['TIMESTAMPRECORD']), DAYSTAMP: (new Date(parseDate(obj['TIMESTAMPRECORD'])).toDateString()), WEEK: moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").isoWeek(), MONTH: (moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").month()+1), YEAR: moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").year()  }))
)}

function _parseDate(d3){return(
d3.timeParse('%Y-%m-%d %H:%M:%S')
)}

function _StartDate_Example(Inputs,time_first,time_last){return(
Inputs.datetime({
  label: "Input starting date (link not active)", 
  min: time_first,
  max: time_last,
  value: "2020-09-01"
})
)}

function _EndDate_Example(Inputs,time_first,time_last){return(
Inputs.datetime({
  label: "Input ending date (link not active)", 
  min: time_first,
  max: time_last,
  value: "2020-09-14"
})
)}

function _whichFile_example(Inputs,time_interval){return(
Inputs.select(time_interval, {
  label:  "Choose time interval (link not active):", multiple: false})
)}

function _choice_example(checkbox){return(
checkbox({
  title: "Select Attributes to Include for Time Series Chart (link not active)",
  
  options: [
    { value:  "Batt_V_Min", label: "Batt_V_Min"},
    { value:  "Rain_mm_Tot", label: "Rain_mm_Tot"},
    { value:  "SlrkW", label: "SlrkW"},
    { value:  "SlrMJ", label: "SlrMJ"},
    { value:  "SlrkWLOW", label: "SlrkWLOW"},
    { value:  "SlrMJLOW", label: "SlrMJLOW"},
    { value:  "WindSpd_ms", label: "WindSpd_ms"},
    { value:  "WindDir_deg", label: "WindDir_deg"},
    { value:  "TempAir_degC", label: "TempAir_degC"},
    { value:  "TempAir_degCLOW", label: "TempAir_degCLOW"},
    { value:  "VW", label: "VW"},
    { value:  "PA_uS", label: "PA_uS"},
    { value:  "TempSoil_degC", label: "TempSoil_degC"},
    { value:  "RH", label: "RH"},
    { value:  "RHLOW", label: "RHLOW"},
    { value:  "BaroPressure_mmHg", label: "BaroPressure_mmHg"},
    { value:  "HeatFlux", label: "HeatFlux"},
    { value:  "BattV", label: "BattV"},
    { value:  "Temp", label: "Temperature"},
    { value:  "Con", label: "Con"},
    { value: "pH", label: "pH"},
    { value:  "Turb", label: "Turb"},
    { value:  "DOpct", label: "DOpct"},
    { value:  "DOmgl", label: "DOmgl"},
    { value:  "Batt", label: "Batt"}
    
  ],
  value: ["Temp", "Turb", "pH"],
  //submit: true 
})
)}



function _SelectedDatesData(joined_files2,StartDate1,EndDate1){return(
joined_files2.filter( row => 
                                    row.TIMESTAMP >= StartDate1 && row.TIMESTAMP.getTime() <= EndDate1)
)}

function _aggrTimeFile(whichFile,mapByTime,SelectedDatesData,choice,rollupByDay,rollupByWeek,rollupByMonth)
{
  
  if (whichFile == "minute") {
    return mapByTime(SelectedDatesData, choice)
      
  };
  
  if (whichFile == "day") {
    return rollupByDay(SelectedDatesData, choice)
  };
  if (whichFile == "week") {
    return rollupByWeek(SelectedDatesData, choice)
  };
  if (whichFile == "month") {
    return rollupByMonth(SelectedDatesData, choice)
  }
  }


function _userArray(aggrTimeFile,d3){return(
Array.from(aggrTimeFile, ([Date, value]) => ({ Date, value })).sort((a,b) => d3.ascending(a.Date, b.Date))
)}

function _userTimeStamp(userArray){return(
userArray.map(d => d.Date)
)}

function _userTidy(userArray,choice,d3)
{
  var objArray  = []
  var k = 0
  for (var i = 0; i<userArray.length ; i++){
       
    
        for (var j = 0; j < choice.length ; j++){
                
                var attrObj = {
                Attribute:   choice[j],
                Date:  userArray[i].Date,
                Value:   (userArray[i].value[j]- d3.mean(userArray, d => d.value[j]))/(d3.deviation(userArray, d => d.value[j]))
                }
                
                objArray[k] = attrObj
                k = k+1        
                        }
            }
  var sortedArray = objArray.sort((a,b) => d3.ascending(a.Date, b.Date)).sort((a,b) => d3.ascending(a.Attribute, b.Attribute))
  return sortedArray
}

function _userTidyNotNormalized(userArray,choice,d3)
{
  var objArray  = []
  var k = 0
  for (var i = 0; i<userArray.length ; i++){
       
    
        for (var j = 0; j < choice.length ; j++){
                
                var attrObj = {
                Attribute:   choice[j],
                Date:  userArray[i].Date,
                Value:   (userArray[i].value[j])
                }
                
                objArray[k] = attrObj
                k = k+1        
                        }
            }
  var sortedArray = objArray.sort((a,b) => d3.ascending(a.Date, b.Date)).sort((a,b) => d3.ascending(a.Attribute, b.Attribute))
  return sortedArray
}




function _parCoordData(userArray,choice,d3)
{
  var objArray  = []
  var k = 0
  for (var i = 0; i<userArray.length ; i++){
       var attrObj = {}
      //attrObj.Date = userArray[i].Date
        for (var j = 0; j < choice.length ; j++){
                //Attribute:   choice[j],
                
                attrObj[choice[j]]=   (userArray[i].value[j]- d3.mean(userArray, d => d.value[j]))/(d3.deviation(userArray, d => d.value[j]))
                }
                objArray[k] = attrObj
                k = k+1 
                     
                        }
    
            
  //var sortedArray = objArray.sort((a,b) => d3.ascending(a.Date, b.Date)).sort((a,b) => d3.ascending(a.Attribute, b.Attribute))
  return objArray
}


function _parCoordDataNN(userArray,choice)
{
  var objArray  = []
  var k = 0
  for (var i = 0; i<userArray.length ; i++){
       var attrObj = {}
       attrObj.Date = userArray[i].Date
        for (var j = 0; j < choice.length ; j++){
                //Attribute:   choice[j],
                
                attrObj[choice[j]]=   (userArray[i].value[j])
                }
                objArray[k] = attrObj
                k = k+1 
                     
                        }
    
            
  //var sortedArray = objArray.sort((a,b) => d3.ascending(a.Date, b.Date)).sort((a,b) => d3.ascending(a.Attribute, b.Attribute))
  return objArray
}


function _userNorm2(aggrTimeFile,d3)
{
  var userInstance  = []
  var k = 0
  
    for (var i = 0; i< aggrTimeFile.length ; i++){
     
      var userObj = []
      userObj[0]  =   aggrTimeFile[i][0] // this can be removed if date causes problems in the array; date is also in userTimeStamp array
        for (var j = 0; j < aggrTimeFile[i].length ; j++){
                
                userObj[j+1] =   (aggrTimeFile[i].value[j]- d3.mean(aggrTimeFile, d => d.value[j]))/(d3.deviation(aggrTimeFile, d => d.value[j]))
                    // change "j+1" in above line back to "j" if taking out date
        }
  userInstance[k] =  userObj
                k = k+1
              }  
  return  userInstance
}

function _Times(joined_files2){return(
joined_files2.map(d => d.TIMESTAMP)
)}

function _time_first(d3,Times){return(
d3.min(Times)
)}

function _time_last(d3,Times){return(
d3.max(Times)
)}

function _xScale(height,margin,d3,x2){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x2))
)}

function _x2(d3,StartDate1,EndDate1,margin,width){return(
d3.scaleTime()
  .domain([StartDate1, EndDate1])
  .range([margin.left, width - margin.right])
  .nice()
)}

function _yScale(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
)}

function _choice(checkbox){return(
checkbox({
  title: "Select Attributes to Include for Time Series Chart",
  
  options: [
    { value:  "Batt_V_Min", label: "Batt_V_Min"},
    { value:  "Rain_mm_Tot", label: "Rain_mm_Tot"},
    { value:  "SlrkW", label: "SlrkW"},
    { value:  "SlrMJ", label: "SlrMJ"},
    { value:  "SlrkWLOW", label: "SlrkWLOW"},
    { value:  "SlrMJLOW", label: "SlrMJLOW"},
    { value:  "WindSpd_ms", label: "WindSpd_ms"},
    { value:  "WindDir_deg", label: "WindDir_deg"},
    { value:  "TempAir_degC", label: "TempAir_degC"},
    { value:  "TempAir_degCLOW", label: "TempAir_degCLOW"},
    { value:  "VW", label: "VW"},
    { value:  "PA_uS", label: "PA_uS"},
    { value:  "TempSoil_degC", label: "TempSoil_degC"},
    { value:  "RH", label: "RH"},
    { value:  "RHLOW", label: "RHLOW"},
    { value:  "BaroPressure_mmHg", label: "BaroPressure_mmHg"},
    { value:  "HeatFlux", label: "HeatFlux"},
    { value:  "BattV", label: "BattV"},
    { value:  "Temp", label: "Temperature"},
    { value:  "Con", label: "Con"},
    { value: "pH", label: "pH"},
    { value:  "Turb", label: "Turb"},
    { value:  "DOpct", label: "DOpct"},
    { value:  "DOmgl", label: "DOmgl"},
    { value:  "Batt", label: "Batt"}
    
  ],
  value: ["Temp", "Turb","pH"],
  //submit: true 
})
)}

function _StartDate1(Inputs,time_first,time_last){return(
Inputs.datetime({
  label: "Input starting date", 
  min: time_first,
  max: time_last,
  value: "2020-09-01"
})
)}

function _EndDate1(Inputs,time_first,time_last){return(
Inputs.datetime({
  label: "Input ending date", 
   min: time_first,
  max: time_last,
  value: "2020-09-14"
})
)}

function _whichFile(Inputs,time_interval){return(
Inputs.select(time_interval, {
  label:  "Choose time interval:", multiple: false})
)}

function _chart(DOM,d3,width,height,fonts,series,color,line2,xAxis,yAxis,x3,userDate,currentUrl,image_links,image_links_dates,choice,userArray,_,units_map)
{
  const id = DOM.uid("chart").id;
  const svg = d3
    .create("svg")
    .attr("class", id)
    .attr("viewBox", [0, 0, width, height])
    .attr("overflow", "visible")
    .call(svg => svg.append("defs").html(fonts(`.${id}`)));

  //svg.append("g").call(grid);

  const paths = svg
    .append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", d => color(d.key))
    .attr("stroke-width", 3.5)
    .attr("stroke-linejoin", "round")
    .attr("d", d => line2(d.values));

  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);

  const legend = svg.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 10)
  .attr("text-anchor", "end")
  .selectAll("g")
  .data(series.slice().reverse())
  .enter().append("g")
  .attr("transform", function(d, i) {
    return "translate(0," + i * 20 + ")";
  });

  //append legend colour blocks
  legend.append("rect")
    .attr("x", 1000)
    .attr("width", 18)
    .attr("height", 18)
    .attr("fill", function(d) {
    return color(d.key);
  });

  //append legend texts
  legend.append("text")
    .attr("x", 1025)
    .attr("y", 12)
    .attr("dy", "0.32em")
    .attr("text-anchor", "start")
    .text(function(d) {
    return d.key;
  });

  //paths.call(hover, svg
  var mouseLine = svg
    .append("path") // create vertical line to follow mouse
    .attr("class", "mouse-line")
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("opacity", "0");
   var tooltip = svg
    .append("g")
    .attr("class", "tooltip-wrapper")
    .attr("display", "none");
  var tooltipBackground = tooltip.append("rect").attr("fill", "#e8e8e8");

  var tooltipText = tooltip.append("text");
function focusMouseMove(event) {
    tooltip.attr("display", null);
    var mouse = d3.pointer(event,svg.node());
    var dateOnMouse = x3.invert(mouse[0]);
    var nearestDateIndex = d3.bisect(userDate, dateOnMouse);
    // get the dates on either of the mouse cord
    var d0 = new Date(userDate[nearestDateIndex - 1]);
    var d1 = new Date(userDate[nearestDateIndex]);
    var closestDate;
    if (d0 < x3.domain()[0]) {
      closestDate = d1;
    } else if (d1 > x3.domain()[1]) {
      closestDate = d0;
    } else {
      // decide which date is closest to the mouse
      closestDate = dateOnMouse - d0 > d1 - dateOnMouse ? d1 : d0;
    }
   let curl,upd=currentUrl
    upd( image_links[image_links_dates[d3.bisect(image_links_dates, dateOnMouse)]])
    // var nearestDateYValues = groupValuesByX[closestDate];
    var nearestDateXCord = x3(new Date(closestDate));

    mouseLine.attr("d", `M ${nearestDateXCord} 0 V ${height}`).attr("opacity", "1");

    tooltipText.selectAll(".tooltip-text-line").remove();
    svg.selectAll(".tooltip-line-circles").remove();
    var formatTime = d3.timeFormat('%m-%d-%y %H:%M');
    tooltipText
      .append("tspan")
      .attr("class", "tooltip-text-line")
      .attr("x", "5")
      .attr("y", "5")
      .attr("dy", "13px")
      .attr("font-weight", "bold")
      .text(`${formatTime(closestDate)}`);

    for (let [idx,val] of choice.entries()) {
      

      tooltipText
        .append("tspan")
        .attr("class", "tooltip-text-line")
        .attr("x", "5")
        .attr("dy", `14px`)
        .attr("fill", color(val) ) //replace with dynamic color
        .text(`${val}: ${userArray [nearestDateIndex]['value'][idx]} ${_.get(units_map,val,'')}`);
    }

    var tooltipWidth = tooltipText.node().getBBox().width;
    var tooltipHeight = tooltipText.node().getBBox().height;
    tooltipBackground.attr("width", tooltipWidth + 10).attr("height", tooltipHeight + 10);
    if (nearestDateXCord + tooltipWidth >= width) {
      tooltip.attr("transform", "translate(" + (nearestDateXCord - tooltipWidth - 20) + "," + mouse[1] + ")");
    } else {
      tooltip.attr("transform", "translate(" + (nearestDateXCord + 10) + "," + mouse[1] + ")");
    }
  }

  function focusMouseOver() {
    mouseLine.attr("opacity", "1");
    tooltip.attr("display", null);
  }

  function focusMouseOut() {
    mouseLine.attr("opacity", "0");
    tooltip.attr("display", "none");
    svg.selectAll(".tooltip-line-circles").remove();
  }
  function  mousedblclick(event) {
    var mouse = d3.pointer(event,svg.node());
    var dateOnMouse = x3.invert(mouse[0]);
    var nearestDateIndex = d3.bisect(userDate, dateOnMouse);
    // get the dates on either of the mouse cord
    var d0 = new Date(userDate[nearestDateIndex - 1]);
    var d1 = new Date(userDate[nearestDateIndex]);
    var closestDate;
    if (d0 < x3.domain()[0]) {
      closestDate = d1;
    } else if (d1 > x3.domain()[1]) {
      closestDate = d0;
    } else {
      // decide which date is closest to the mouse
      closestDate = dateOnMouse - d0 > d1 - dateOnMouse ? d1 : d0;
    }
     image_links[image_links_dates[d3.bisect(image_links_dates, dateOnMouse)]]
    window.open(
              image_links[image_links_dates[d3.bisect(image_links_dates, dateOnMouse)]], "_blank");
  }

 var rectOverlay = svg
    .append("rect")
    .attr("cursor", "move")
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    // .attr("transform", "translate(" + focusChartMargin.left + "," + focusChartMargin.top + ")")
    .on("mousemove", focusMouseMove)
    .on("mouseover", focusMouseOver)
    .on("mouseout", focusMouseOut)
  .on('dblclick',mousedblclick);

  return svg.node();
}


function _x3(d3,xDomain,margin,width){return(
d3.scaleUtc()
  .domain([xDomain[0], xDomain[1]])
  .range([margin.left, width - margin.right])
  .nice()
)}

function _xAxis(height,margin,d3,x3){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x3))
    .call(g => g.select(".domain").attr("stroke-width", 1.5))
)}

function _y2(d3,yRange,height,margin){return(
d3.scaleLinear()
    .domain([yRange[0], yRange[1]]).nice()
    .range([height - margin.bottom, margin.top])
)}

function _yRange(d3,userTidy){return(
d3.extent(userTidy, d => d.Value)
)}

function _yAxis(margin,d3,y2){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y2))
)}

function _values(d3,userTidy){return(
d3.rollup(userTidy, ([d]) => d.Value, d => d.Attribute, d => +d.Date)
)}

function _userDate(userArray){return(
userArray.map(d => d.Date)
)}

function _xDomain(d3,userDate){return(
d3.extent(userDate)
)}

function _series(choice,userDate,values){return(
choice.map(k => ({
        key: k, 
        values: userDate.map(d => values.get(k).get(+d))
                               }))
)}

function _line2(d3,x3,userDate,y2){return(
d3.line()
  //.curve(d3.curveStepAfter)
  .defined(d => !isNaN(d))
  .x((d, i) => x3(userDate[i]))    
  .y(d => y2(d))
)}

function _color(d3,choice){return(
d3.scaleOrdinal(d3.schemeTableau10).domain(choice)
)}

function _76(d3,DOM,choice,parCoordDataNN)
{

  var foreground;
  let dimensions = {
    width: 1000,
    height: 400,
    margin: {
      top: 30,
      right: 10,
      bottom: 10,
      left: 0,
    },
  };
  
  //DIMENSIONS OF DRAWING AREA
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.right
    - dimensions.margin.left;

  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom;
  
  const svg = d3.select(DOM.svg(dimensions.width, dimensions.height));
  const main_g = svg.append("g")
      .attr("transform", `translate(${dimensions.margin.left}, ${dimensions.margin.top})`);

  //const classification_mapping = {0:"Normal", 1:"Ransomware", 2:"MiTM", 3:"Trojan"};
  //const classification_mapping_reverse = {"Normal":0, "Ransomware":1, "MiTM":2, "Trojan":3};

  

  // Extract the list of dimensions we want to keep in the plot.
  var features = choice

  //This function moves elements in an array so we can reorder columns how we want
  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  };
  var newpos = features.length - 1 ;
  //Moving DstAddr so that it's the last column
  features.move(1,newpos);

  // For each dimension, I build a linear scale. I store all in a y object
  var y = {}
  for (var i in features) {
    var name = features[i]
    y[name] = d3.scaleLinear()
      .domain( d3.extent(parCoordDataNN, function(d) { return d[name]; }) )
      .range([dimensions.boundedHeight, 0])
  }

  // Build the X scale -> it find the best position for each Y axis
  var x = d3.scalePoint()
    .range([0, dimensions.boundedWidth])
    .padding(1)
    .domain(features);

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
      return d3.line()(features.map(function(p) { return [x(p), y[p](d[p])]; }));
  }
  
  // Draw the lines
  foreground = main_g
    .selectAll("myPath")
    .data(parCoordDataNN)
    .join("path")
      //.attr("class", function (d) { return "line " + classification_mapping[d.Classification] } )
      .attr("d",  path)
      .style("fill", "none")
      .style("stroke", "steelblue")
      .style("opacity", 1.0)

  var dragging = {};

  function position(d) {
    var v = dragging[d];
    return v == null ? x(d) : v;
  }
  function transition(g) {
    return g.transition().duration(500);
  }

  // Draw the axis:
  var g_axis = main_g.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(features).enter()
    .append("g")
    .attr("class", "dimension")
    // I translate this element to its right position on the x axis
    .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
    // And I build the axis with the call function
    .call(d3.drag()
    .subject(function(event, d) {
      return {x: x(d)}; })
      .on("start", function(event, d) {
        dragging[d] = x(d);
      })
      .on("drag", function(event, d) {
        dragging[d] = Math.min(dimensions.boundedWidth, Math.max(0, event.x));
        foreground.attr("d", path);
        features.sort(function(a, b) { return position(a) - position(b); });
        x.domain(features);
        g_axis.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
      })
      .on("end", function(event, d) {
        delete dragging[d];
        transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
        transition(foreground).attr("d", path);
      }))

    // Add axis titlE
  g_axis
      .each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
      .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; })
      .style("fill", "white")


  return svg.node();
}




async function _79(md,FileAttachment){return(
md`
Option A: Normalized data | Option B: Raw data  
Single column of values (all attributes in one column)                     
<figure>
  <img src="${await FileAttachment("image@5.png").url()}" width="600">
</figure>

Option C: Normalized data | Option D: Raw data  
Multiple columns (one for each attribute)                     
<figure>
  <img src="${await FileAttachment("image@7.png").url()}" width="600">
</figure>
`
)}

function _dloadFile(select){return(
select({
  title:  "Choose which file format to download:",
  options: [
    { value: "userTidy" , label: "Option A"},
    { value:  "userTidyNotNormalized" , label: "Option B"},
    { value: "parCoordData"   , label: "Option C"},
    { value:  "parCoordDataNN"  , label: "Option D"}
  ]
})
)}

function _82(DOM,blob){return(
DOM.download(blob, "downloadFile.csv")
)}

function _height(){return(
500
)}

function _margin(){return(
{top: 20, right: 20, bottom: 30, left: 50}
)}

function _blob(d3,downloadFile){return(
new Blob([d3.csvFormat(downloadFile)], {type: "text/csv"})
)}

function _downloadFile(dloadFile,userTidy,userTidyNotNormalized,parCoordData,parCoordDataNN)
{
  
  if (dloadFile == "userTidy") {
    return userTidy
      
  };
  
 if (dloadFile == "userTidyNotNormalized") {
    return userTidyNotNormalized
  };
  if (dloadFile == "parCoordData") {
    return parCoordData
  };
  if (dloadFile == "parCoordDataNN") {
    return parCoordDataNN
  }
  }


function _downloadButton(d3,DOM){return(
(data, filename = 'data.csv') => {
  const csv = new Blob([d3.csvFormat(data)], { type: "text/csv" });
  const size = (csv.size / 1024).toFixed(0);

  const button = DOM.download(
    csv,
    filename,
    `Download ${filename} (~${size} KB)`
  );
  return button;
}
)}

function _109(md){return(
md`## Helper Functions for rollup`
)}

function _mapByTime(d3){return(
(timeseries,attributes)=>d3.rollup(timeseries,timeseries=>(attributes.map(aname => d3.median(timeseries,d=>d[aname]))),d=>d3.timeMinute (d['TIMESTAMP']))
)}

function _111(mapByTime,joined_files2){return(
mapByTime(joined_files2,['Temp','BattV'])
)}

function _rollupByMonth(d3){return(
(timeseries,attributes)=>d3.rollup(timeseries,timeseries=>(attributes.map(aname => d3.median(timeseries,d=>d[aname]))),d=>d3.timeMonth(d['TIMESTAMP']))
)}

function _rollupByWeek(d3){return(
(timeseries,attributes)=>d3.rollup(timeseries,timeseries=>(attributes.map(aname => d3.median(timeseries,d=>d[aname]))),d=>d3.timeWeek(d['TIMESTAMP']))
)}

function _rollupByDay(d3){return(
(timeseries,attributes)=>d3.rollup(timeseries,timeseries=>(attributes.map(aname => d3.median(timeseries,d=>d[aname]))),d=>d3.timeDay(d['TIMESTAMP']))
)}

function _115(rollupByDay,joined_files2){return(
rollupByDay(joined_files2,['Temp','BattV'])
)}

async function _joined_files(d3,FileAttachment,parseDate){return(
d3.csvParse( await FileAttachment("aggregated@2.csv").text(),(obj)=>({...obj,TIMESTAMP: parseDate(obj['TIMESTAMP'])}))
)}

function _117(){return(
new Date(Date.now()).toUTCString()
)}

function _d3(require){return(
require("d3@6")
)}

function _moment(require){return(
require("moment")
)}

function __(require){return(
require('lodash')
)}

function _TableauColor(){return(
["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]
)}

function _line(md){return(
md`d3.line()
  .curve(d3.curveStepAfter)
  .x(d => x(d.Date))
  .y(d => y(d.attr))`
)}

function _y(d3,yRange,height,margin){return(
d3.scaleLinear()
    .domain([yRange[0], yRange[1]]).nice()
    .range([height - margin.bottom, margin.top])
)}

function _dateParser(md){return(
md`d3.timeParse("%Y-%m-%d %H:%M:%S")`
)}

function _time_interval(){return(
["minute", "day", "week", "month"]
)}

function _130(d3,joined_files2){return(
d3.extent(joined_files2, d => d.TIMESTAMP)
)}

function _images(FileAttachment){return(
FileAttachment("processed_img.csv").csv()
)}

function _image_links(images){return(
images.reduce((d,c)=> {return {...d,[new Date(c['timeStamp'])] : c['URL']}},{})
)}

function _image_links_dates(images){return(
images.map(d=>(new Date(d['timeStamp']))).sort((a, b) => b.date - a.date)
)}

function _currentUrl()
{
var url='';
  return (url,function update(newUrl) {
    url=newUrl
  })
  
}


function _userNorm(userArray,d3)
{
  var userInstance  = {}
  var k = 0
  
    for (var i = 0; i< userArray.length ; i++){
     
      var userObj = []
      // userObj[0]  =   userArray[i].Date  // this can be removed if date causes problems in the array; date is also in userTimeStamp array
        for (var j = 0; j < userArray[i].value.length ; j++){
                
                userObj[j] =   (userArray[i].value[j]- d3.mean(userArray, d => d.value[j]))/(d3.deviation(userArray, d => d.value[j]))
                    // change "j+1" in above line back to "j" if taking out date
        }
  userInstance[userArray[i].Date] =  userObj
                k = k+1
              }  
  return  userInstance
}


function _c(currentUrl){return(
currentUrl
)}

function _units_map(){return(
Object({
  'BattV' :'Volts','Temp':'degC','Con':'mS/cm','Turb':'NTU','DOpct':'pct','DOmgl':'mg/l','Batt':'V','Batt_V_Min':'Volts','Rain_mm_Tot':'mm','SlrkW':'kW/mÂ²','WindSpd_ms':'meters/second','WindDir_deg':'degrees','TempAir_degC':'Deg C','TempAir_degCLOW	':'Deg C','TempSoil_degC':'Deg C','RH':'%'})
)}

function _dateFormat(d3){return(
d3.timeFormat("%Y-%m-%d %H:%M:%S")
)}



export default function define(runtime, observer)
{
  const main = runtime.module();
  const fileAttachments = new Map([["aggregated@2.csv",new URL("./files/7c546f03b11863f38ea8da3f9042d4b02a290266b9b47fa365fe071f0d9dba1ba3975085633af32ba58543384bf11cb6ba20f8f1e8f5e65dc759a28d8dbfdcb6",import.meta.url)],["image.png",new URL("./files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d",import.meta.url)],["image@1.png",new URL("./files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43",import.meta.url)],["image@5.png",new URL("./files/ab3b6f7715c8809a4562e71a0d317b991914b5de86bbf590fa019d3ce69e2fd9f3159f5710c656ef197aaf05063cb5a4d1fdab84fbcdb02a72686a4aaac0125f",import.meta.url)],["image@7.png",new URL("./files/db5d9b7114ecb3134bb1d915f761d5afe175cc7d838fdaccf8f8f785177dd0f03da71998d25ac367e4d4640b42fb818ba342637d305ce3c6198470c379f41a38",import.meta.url)],["processed_img.csv",new URL("./files/20c4adcf8d6191896b31dcedefa2d811cc45b0321f91da81b5b81760fe0f75d3beaa234b653737b744ce8717c06357d9d91428080f58e60c22ba446b292a7181",import.meta.url)],["observableData.PNG",new URL("./files/29e53d0f2f7b89e98a8efa90c2f88deffaf2ab93a663889eae99500330eb39cbe3226ca3e7c3b06a7df913a639d61219c4f02ca8bc5c888d51d2a79a9041f333",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  const child1 = runtime.module(define1);
  const child2 = runtime.module(define2);
  main.import("fonts", child2);  
  main.import("checkbox", child1);
  main.variable().define("SelectedDatesData", ["joined_files2","StartDate1","EndDate1"], _SelectedDatesData);
  main.variable().define("mapByTime", ["d3"], _mapByTime);
  main.variable().define("aggrTimeFile", ["whichFile","mapByTime","SelectedDatesData","choice","rollupByDay","rollupByWeek","rollupByMonth"], _aggrTimeFile);
  main.variable().define("rollupByWeek", ["d3"], _rollupByWeek);
  main.variable().define("rollupByDay", ["d3"], _rollupByDay);
  main.variable().define("rollupByMonth", ["d3"], _rollupByMonth);
  main.variable().define("images", ["FileAttachment"], _images);
  main.variable().define("image_links", ["images"], _image_links);
  main.variable().define("image_links_dates", ["images"], _image_links_dates);
  main.variable().define("currentUrl", _currentUrl);
  main.variable().define("height", _height);
  main.variable().define("margin", _margin);
  main.variable().define("userArray", ["aggrTimeFile","d3"], _userArray);
  main.variable().define("userTidy", ["userArray","choice","d3"], _userTidy);
  main.variable().define("parseDate", ["d3"], _parseDate);
  main.variable().define("moment", ["require"], _moment);    
  main.variable().define("joined_files2", ["d3","FileAttachment","parseDate","moment"], _joined_files2);
  main.variable().define("time_interval", _time_interval);
  main.variable().define("units_map", _units_map);
  main.variable().define("Times", ["joined_files2"], _Times);
  main.variable().define("time_first", ["d3","Times"], _time_first);
  main.variable().define("time_last", ["d3","Times"], _time_last);
  main.variable(observer("viewof choice")).define("viewof choice", ["checkbox"], _choice);
  main.variable().define("choice", ["Generators", "viewof choice"], (G, _) => G.input(_));
  main.variable(observer("viewof StartDate1")).define("viewof StartDate1", ["Inputs","time_first","time_last"], _StartDate1);
  main.variable().define("StartDate1", ["Generators", "viewof StartDate1"], (G, _) => G.input(_));
  main.variable(observer("viewof EndDate1")).define("viewof EndDate1", ["Inputs","time_first","time_last"], _EndDate1);
  main.variable().define("EndDate1", ["Generators", "viewof EndDate1"], (G, _) => G.input(_));
  main.variable(observer("viewof whichFile")).define("viewof whichFile", ["Inputs","time_interval"], _whichFile);
  main.variable().define("whichFile", ["Generators", "viewof whichFile"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["DOM","d3","width","height","fonts","series","color","line2","xAxis","yAxis","x3","userDate","currentUrl","image_links","image_links_dates","choice","userArray","_","units_map"], _chart);
  main.variable().define("x3", ["d3","xDomain","margin","width"], _x3);
  main.variable().define("xAxis", ["height","margin","d3","x3"], _xAxis);
  main.variable().define("y2", ["d3","yRange","height","margin"], _y2);
  main.variable().define("yRange", ["d3","userTidy"], _yRange);
  main.variable().define("yAxis", ["margin","d3","y2"], _yAxis);
  main.variable().define("values", ["d3","userTidy"], _values);
  main.variable().define("userDate", ["userArray"], _userDate);
  main.variable().define("xDomain", ["d3","userDate"], _xDomain);
  main.variable().define("series", ["choice","userDate","values"], _series);
  main.variable().define("line2", ["d3","x3","userDate","y2"], _line2);
  main.variable().define("color", ["d3","choice"], _color);

  main.variable().define("userTidyNotNormalized", ["userArray","choice","d3"], _userTidyNotNormalized);

  main.variable(observer()).define(["d3","DOM","choice","parCoordDataNN"], _76);
main.variable().define("parCoordData", ["userArray","choice","d3"], _parCoordData);
main.variable().define("parCoordDataNN", ["userArray","choice"], _parCoordDataNN);

main.import("select", child1);

main.variable(observer()).define(["md","FileAttachment"], _79);
main.variable(observer("viewof dloadFile")).define("viewof dloadFile", ["select"], _dloadFile);
main.variable().define("dloadFile", ["Generators", "viewof dloadFile"], (G, _) => G.input(_));
main.variable(observer()).define(["DOM","blob"], _82);
main.variable().define("blob", ["d3","downloadFile"], _blob);
main.variable().define("downloadFile", ["dloadFile","userTidy","userTidyNotNormalized","parCoordData","parCoordDataNN"], _downloadFile);

}