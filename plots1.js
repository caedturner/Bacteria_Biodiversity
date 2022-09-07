
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  console.log(newSample);
}

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
       
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
       
    });
    
  
  //PANEL.append("h6").text(result.location);
    
  });


}
// left off confused about where the plot is and how i can make it appear on the screen, am i supposed to build it myself i found the
// <div id="bar"> where is is siupposed to link to but i am unaware where we are instructed to build from. 