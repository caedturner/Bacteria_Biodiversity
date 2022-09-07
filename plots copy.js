function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
      var samples = data.samples;
      console.log(samples)
    // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultsArray = samples.filter(function(data){
        return data.id === sample;
      })
    //  5. Create a variable that holds the first sample in the array.
      var results = resultsArray[0]
      
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuIds = results.otu_ids;
      var otuLabels = results.otu_labels;
      var sampleValues = results.sample_values;
      console.log(sampleValues)
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIds.slice(0,10).map(function(otuID) {
      return `OTU ${otuID}`;
    })

    // 8. Create the trace for the bar chart. 
    var barData = [
      { 
       y:yticks,
       x:sampleValues.slice(0,10).reverse(),
       text:otuLabels.slice(0,10).reverse(),

       type: "bar",
       orientation: 'h'
      }
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Most Frequent Bacteria Types"

     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)
  });
}

// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
      console.log(samples)
    // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultsArray = samples.filter(function(data){
        return data.id === sample;
      })
    //  5. Create a variable that holds the first sample in the array.
      var results = resultsArray[0]
      
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuIds = results.otu_ids;
      var otuLabels = results.otu_labels;
      var sampleValues = results.sample_values;
      console.log(sampleValues)
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    

    var bubbleData = [
      {
        x: otuIds,
        y:sampleValues,
        text:otuLabels,
        mode:"markers",
        marker: {
          size:sampleValues,
          color:otuIds,
          colorscale:"Earth"
        } 
        
      }
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"},
      margin: {t: 30},
      hovermode: "closest"

      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
      // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}

}


      
