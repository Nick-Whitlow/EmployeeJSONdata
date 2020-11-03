//took out the source because I could make it work properly
var directoryPromise = d3.json("employee.json");

var getImage = function(employee) {
    return employee.photo;
}

var successFCN = function(theCard){
    console.log(theCard);
    
    d3.select("body")
    .selectAll("general")
    .data(theCard)
    .enter()
    .append("eName")
    .text(function(name){return name.firstName + " " + name.lastName});
    
    d3.select("body")
    .selectAll("general")
    .data(theCard)
    .enter()
    .append("img")
    .attr("src", getImage);
    
    
    
    d3.select("body")
.selectAll("title")
.data(theCard)
.enter()
.append("title")
.text(function(title){return title.title});
  
    d3.select("body")
    .selectAll("department")
    .data(theCard)
    .enter()
    .append("department")
    .text(function(unit){return unit.unit});
    
    d3.select("body")
    .selectAll("email")
    .data(theCard)
    .enter()
    .append("email")
    .text(function(email){return email.email});
    
     d3.select("body")
    .selectAll("bio")
    .data(theCard)
    .enter()
    .append("bio")
    .text(function(bio){return bio.bio});
    

}



var failFCN = function(errMessage) {
    console.log("failure", errMessage);
    d3.selectAll("body")
    .text("File Not Found")
}

directoryPromise.then(successFCN, failFCN);