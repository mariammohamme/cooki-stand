'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var Seattle ={
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


};
///////////////
// location : Tokyo
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
/////////////////////
// location : Dubai
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
/////////////////////
// location : Paris
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

/////////////////////
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
///////////////

function randomeNamber(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}

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




