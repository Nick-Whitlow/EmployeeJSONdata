
var directoryPromise = d3.json("employee.json");

var getImage = function(employee) {
    return employee.photo;
}

var successFCN = function(theEmployees) {
    console.log(theEmployees);
   var rows = d3.select("tbody") .selectAll("tr")
    .data(theEmployees)
    .enter()
    .append("tr");
   
   rows.append("td")
    .text(function(name){return name.firstName + "" + name.lastName});
   
   rows.append("td")
    .append("img")
    .attr("src", getImage);
    
    rows.append("td")
    .text(function(info){return info.title + info.unit});
    
    rows.append("td")
    .text(function(contact){return contact.email });
    
    rows.append("td")
    .text(function(contact){return contact.phone });
    
    rows.append("td")
    .text(function(bio){ return bio.bio});
    
}

var failFCN = function(errMessage) {
    console.log("failure", errMessage);
   d3.selectAll("h1") 
   .text("File not found");
}
directoryPromise.then(successFCN, failFCN);