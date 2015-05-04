
"use strict";

//Cat Data
var initialCats = [
	{
		name: "Cattie",
		image: "images/cat.jpg", 
		count: 0,
		petNames: ["Bert","Mert", "Sert","Gert"]

	},

	{	
		name: "Chewie", 
		image: "images/cat2.jpg", 
		count: 0,
		petNames: ["Jon","Von", "Con","Don"]
	},
	{	name: "Zestie", 
		image: "images/cat3.jpg" , 
		count: 0,
		petNames: ["Zee","Zac", "Zest","Zen"]
	},
	{
		name: "Grumpie" , 
		image: "images/cat4.jpg", 
		count: 0,
		petNames: ["Grump","Pump"]
	},
	{
		name: "Cutie", 
		image: "images/cat5.jpg" , 
		count: 0,
		petNames: ["Cuteness","Cutiepie", "Cuttieshwar","Cuttieben"]
	}
	];


//Cat Model Constructor Function 
var Cat = function(data){
	
	this.name = ko.observable(data.name);
	this.image = ko.observable(data.image);
	this.count = ko.observable(data.count);
	this.petNames = ko.observableArray(data.petNames);
	
	
	this.catLevel = ko.computed(function(){

		if(this.count() <= 10){
			return "New Born";
		}
		if(this.count()>10 && this.count()<=25){
			return "Infant";
		}

		if(this.count()>25 && this.count()<=50){
			return "Adolescent";
		}
		if(this.count()>50 && this.count()<=75){
			return "Teen";
		}
		if(this.count()>50 && this.count()<=75){
			return "Middle Aged";
		}
		if(this.count()>75 && this.count()<=100){
			return "Middle Aged";
		}
		if(this.count()>100){
			return "Dead";
		}

	}, this);

}


//KO ViewModel
var ViewModel = function(){
	var self = this;
	self.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});


	self.currentCat = ko.observable(self.catList()[0]);

	//Admin Panel variables
	self.tmpName= ko.observable(self.currentCat().name());
	self.tmpImage = ko.observable(self.currentCat().image());
	self.tmpCount = ko.observable(self.currentCat().count());

	//AdminView Toggling variable
	self.adminVisibleFlag = ko.observable(false);

	self.incrementCounter = function(){
		self.currentCat().count(self.currentCat().count() + 1);
		self.tmpCount(self.currentCat().count());
	};

	self.setCurrentCat = function(obj, event){
		
		self.currentCat(obj);
		
	};

	
	self.toggleAdminView = function(){
		self.adminVisibleFlag(!self.adminVisibleFlag());
		self.tmpName(self.currentCat().name());
		self.tmpImage(self.currentCat().image());
		self.tmpCount(self.currentCat().count());

	};

		
	self.applyCatUpdates = function(obj,event){
		self.currentCat().name(self.tmpName());
		self.currentCat().image(self.tmpImage());
		if(!isNaN(parseInt(self.tmpCount()))){
			self.currentCat().count(parseInt(self.tmpCount()));
		}else {
		 throw alert("Count has to be a number");
		}
	};	
};

ko.applyBindings(new ViewModel());