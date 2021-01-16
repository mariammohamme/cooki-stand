'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var totalColloume=[];
var grandTotal=0;
for(var i=0 ; i<hours.length; i++)
{
    totalColloume.push(0);
}
function CockiStand(name,minCusomerhours,maxCusomerhours,avgCockies){
    this.name = name ;
    this.minCusomerhours= minCusomerhours;
    this.maxCusomerhours= maxCusomerhours;
    this.avgCockies= avgCockies;
    this.customerInhour=[];
    this.cockiSoldsinhour=[];
    this.totalcockies = 0;

}

CockiStand.prototype.calculateCustomersinhour = function(){
    for(var i=0;i<hours.length;i++)
    {
      this.customerInhour.push(Math.floor(randomeNamber(this.minCusomerhours,this.maxCusomerhours))
      );
      console.log(randomeNamber(this.minCusomerhours,this.maxCusomerhours))
    } 
  };

  CockiStand.prototype.calculateCockiessinhour = function(){
    for(var i=0 ; i<this.customerInhour.length;i++)
    {
        var Cokiesinhour = Math.ceil(this.customerInhour[i]*this.avgCockies)
        this.cockiSoldsinhour.push(Cokiesinhour);
        this.totalcockies = this.totalcockies + Cokiesinhour;
    }
    grandTotal+=this.totalcockies;
    console.log(grandTotal);
};
CockiStand.prototype.render=function(){
    
    var locationData = document.createElement('tr');
    locationTabel.appendChild(locationData);
    
    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    locationData.appendChild(nameCell);
    
    var dataCell;
    for(var i=0 ; i<this.cockiSoldsinhour.length;i++){
        dataCell = document.createElement('td');
        dataCell.textContent = this.cockiSoldsinhour[i];
        totalColloume[i]+=this.cockiSoldsinhour[i];
        locationData.appendChild(dataCell);
        

    }
    var totalcells = document.createElement('td');
    locationData.appendChild(totalcells);
    totalcells.textContent=this.totalcockies;
};
var mainDiv;
var locationTabel;

function creatTable (){
    mainDiv= document.getElementById('locations');
    locationTabel=document.createElement('table');
    mainDiv.appendChild(locationTabel);
}
creatTable();
function creatHeader(){
    var headerRow = document.createElement('tr');
    locationTabel.appendChild(headerRow);
    var emptyCell = document.createElement('th');
    headerRow.append(emptyCell);

    var hourCell;
    for (var i=0 ; i < hours.length ; i++){
        hourCell = document.createElement('th');
        hourCell.textContent = hours[i];
        headerRow.appendChild(hourCell);
    }
    var totalCell = document.createElement('th');
    totalCell.textContent = ' Daily location total ';
    headerRow.appendChild(totalCell);
}
creatHeader();
var totalRows;
function totalRow(){
     totalRows= document.createElement('tr');
    locationTabel.appendChild(totalRows);

    var totalcells =document.createElement('th');
    totalcells.textContent = 'Totals';
    totalRows.appendChild(totalcells);


     var Columecells;
    for (var j=0 ; j< hours.length ; j++){
        Columecells= document.createElement('th');
        totalRows.appendChild(Columecells);
        Columecells.textContent = totalColloume[j];
        console.log(totalColloume[j]);
    }
    
}


// location : seattle
var seattle = new CockiStand('seattle',23,65,6.3);
seattle.calculateCustomersinhour();
seattle.calculateCockiessinhour();
seattle.render();
console.log(seattle);

// location : tokyo

var tokyo = new CockiStand('tokyo',23,65,6.3);
tokyo.calculateCustomersinhour();
tokyo.calculateCockiessinhour();
tokyo.render();
console.log(tokyo);
// location : Dubai
var Dubai = new CockiStand('dubai',23,65,6.3);
Dubai.calculateCustomersinhour();
Dubai.calculateCockiessinhour();
Dubai.render();
console.log(Dubai);
// location : Paris
var Paris = new CockiStand('paris',23,65,6.3);
Paris.calculateCustomersinhour();
Paris.calculateCockiessinhour();
Paris.render();
console.log(Paris);
// location : Lima
var Lima = new CockiStand('lima',23,65,6.3);
Lima.calculateCustomersinhour();
Lima.calculateCockiessinhour();
Lima.render();
console.log(Lima);
totalRow();
var grandCell;
    grandCell= document.createElement('th');
    totalRows.appendChild(grandCell);
    grandCell.textContent=grandTotal;

function randomeNamber (max,min){
    return Math.floor(Math.random() * (max - min+1) + min);
};



/*var Seattle ={
    name:'seattle',
    minCusomerhours:23,
    maxCusomerhours:65,
    avgCockies:6.3,
    customerInhour:[],
    cockiSoldsinhour:[],
    //cookiesPurchasedperhoure:[],
    numberOfcustomersperhour:function()
    {
        return Math.random() * (max - min) + min;
    },
    calculateCustomersinhour:function(){
      for(var i=0;i<hours.length;i++)
      {
        this.customerInhour.push(randomeNamber(this.minCusomerhours,this.maxCusomerhours));
      } 
    },
    calculateCockiessinhour:function(){
        for(var i=0 ; i<this.customerInhour.length;i++)
        {
            this.cockiSoldsinhour.push(Math.ceil(this.customerInhour[i]*this.avgCockies));
        }
    },
    render: function(){
        var mienDiv = document.getElementById('locations');
        var locationSection = document.createElement('section');
        mienDiv.appendChild(locationSection);

    //name
    var locationName = document.createElement('h2');
    locationName.textContent = this.name;
    locationSection.appendChild(locationName);
   //list
    var Locationlist =document.createElement('ul');
    locationSection.appendChild(Locationlist);
    var listItem;
    for(var i=0 ; i< this.cockiSoldsinhour.length;i++){
        listItem = document.createElement('li');
        listItem.textContent = hours[i]+' : '+ this.cockiSoldsinhour[i]+' cookies';
        Locationlist.appendChild(listItem);
    }
}
*/

///////////////
// location : Tokyo
/*
var Tokyo ={
    name:'Tokyo',
    minCusomerhours:3,
    maxCusomerhours:24,
    avgCockies:1.2,
    customerInhour:[],
    cockiSoldsinhour:[],
    //cookiesPurchasedperhoure:[],
    numberOfcustomersperhour:function()
    {
        return Math.random() * (max - min) + min;
    },
    calculateCustomersinhour:function(){
      for(var i=0;i<hours.length;i++)
      {
        this.customerInhour.push(randomeNamber(this.minCusomerhours,this.maxCusomerhours));
      } 
    },
    calculateCockiessinhour:function(){
        for(var i=0 ; i<this.customerInhour.length;i++)
        {
            this.cockiSoldsinhour.push(Math.ceil(this.customerInhour[i]*this.avgCockies));
        }
    },
    render: function(){
        var mienDiv = document.getElementById('locations');
        var locationSection = document.createElement('section');
        mienDiv.appendChild(locationSection);

    //name
    var locationName = document.createElement('h2');
    locationName.textContent = this.name;
    locationSection.appendChild(locationName);
   //list
    var Locationlist =document.createElement('ul');
    locationSection.appendChild(Locationlist);
    var listItem;
    for(var i=0 ; i< this.cockiSoldsinhour.length;i++){
        listItem = document.createElement('li');
        listItem.textContent = hours[i]+' : '+ this.cockiSoldsinhour[i]+' cookies';
        Locationlist.appendChild(listItem);
    }
}


};
*/
/////////////////////
// location : Dubai
/*
var Dubai ={
    name:'Dubai',
    minCusomerhours:11,
    maxCusomerhours:38,
    avgCockies:3.7,
    customerInhour:[],
    cockiSoldsinhour:[],
    //cookiesPurchasedperhoure:[],
    numberOfcustomersperhour:function()
    {
        return Math.ceil(Math.random() * (max - min) + min);
    },
    calculateCustomersinhour:function(){
      for(var i=0;i<hours.length;i++)
      {
        this.customerInhour.push(randomeNamber(this.minCusomerhours,this.maxCusomerhours));
      } 
    },
    calculateCockiessinhour:function(){
        for(var i=0 ; i<this.customerInhour.length;i++)
        {
            this.cockiSoldsinhour.push(Math.ceil(this.customerInhour[i]*this.avgCockies));
        }
    },
    render: function(){
        var mienDiv = document.getElementById('locations');
        var locationSection = document.createElement('section');
        mienDiv.appendChild(locationSection);

    //name
    var locationName = document.createElement('h2');
    locationName.textContent = this.name;
    locationSection.appendChild(locationName);
   //list
    var Locationlist =document.createElement('ul');
    locationSection.appendChild(Locationlist);
    var listItem;
    for(var i=0 ; i< this.cockiSoldsinhour.length;i++){
        listItem = document.createElement('li');
        listItem.textContent = hours[i]+' : '+ this.cockiSoldsinhour[i]+' cookies';
        Locationlist.appendChild(listItem);
    }
}


};
*/
/////////////////////
// location : Paris
/*
var Paris ={
    name:'Paris',
    minCusomerhours:20,
    maxCusomerhours:38,
    avgCockies:2.3,
    customerInhour:[],
    cockiSoldsinhour:[],
    //cookiesPurchasedperhoure:[],
    numberOfcustomersperhour:function()
    {
        return Math.random() * (max - min) + min;
    },
    calculateCustomersinhour:function(){
      for(var i=0;i<hours.length;i++)
      {
        this.customerInhour.push(randomeNamber(this.minCusomerhours,this.maxCusomerhours));
      } 
    },
    calculateCockiessinhour:function(){
        for(var i=0 ; i<this.customerInhour.length;i++)
        {
            this.cockiSoldsinhour.push(Math.ceil(this.customerInhour[i]*this.avgCockies));
        }
    },
    render: function(){
        var mienDiv = document.getElementById('locations');
        var locationSection = document.createElement('section');
        mienDiv.appendChild(locationSection);

    //name
    var locationName = document.createElement('h2');
    locationName.textContent = this.name;
    locationSection.appendChild(locationName);
   //list
    var Locationlist =document.createElement('ul');
    locationSection.appendChild(Locationlist);
    var listItem;
    for(var i=0 ; i< this.cockiSoldsinhour.length;i++){
        listItem = document.createElement('li');
        listItem.textContent = hours[i]+' : '+ this.cockiSoldsinhour[i]+' cookies';
        Locationlist.appendChild(listItem);
    }
}


};
*/

/////////////////////
/*
// location : Lima
var Lima ={
    name:'Lima',
    minCusomerhours:2,
    maxCusomerhours:16,
    avgCockies:4.6,
    customerInhour:[],
    cockiSoldsinhour:[],
    //cookiesPurchasedperhoure:[],
    numberOfcustomersperhour:function()
    {
        return Math.random() * (max - min) + min;
    },
    calculateCustomersinhour:function(){
      for(var i=0;i<hours.length;i++)
      {
        this.customerInhour.push(randomeNamber(this.minCusomerhours,this.maxCusomerhours));
      } 
    },
    calculateCockiessinhour:function(){
        for(var i=0 ; i<this.customerInhour.length;i++)
        {
            this.cockiSoldsinhour.push(Math.ceil(this.customerInhour[i]*this.avgCockies));
        }
    },
    render: function(){
        var mienDiv = document.getElementById('locations');
        var locationSection = document.createElement('section');
        mienDiv.appendChild(locationSection);

    //name
    var locationName = document.createElement('h2');
    locationName.textContent = this.name;
    locationSection.appendChild(locationName);
   //list
    var Locationlist =document.createElement('ul');
    locationSection.appendChild(Locationlist);
    var listItem;
    for(var i=0 ; i< this.cockiSoldsinhour.length;i++){
        listItem = document.createElement('li');
        listItem.textContent = hours[i]+' : '+ this.cockiSoldsinhour[i]+' cookies';
        Locationlist.appendChild(listItem);
    }
}


};
*/
///////////////
/*
function randomeNamber(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
*/

/*
Seattle.calculateCustomersinhour();
Seattle.calculateCockiessinhour();
Seattle.render();
console.log(Seattle);

Tokyo.calculateCustomersinhour();
Tokyo.calculateCockiessinhour();
Tokyo.render();
console.log(Tokyo);

Dubai.calculateCustomersinhour();
Dubai.calculateCockiessinhour();
Dubai.render();
console.log(Dubai);

Paris.calculateCustomersinhour();
Paris.calculateCockiessinhour();
Paris.render();
console.log(Paris);

Lima.calculateCustomersinhour();
Lima.calculateCockiessinhour();
Lima.render();
console.log(Lima);

*/


