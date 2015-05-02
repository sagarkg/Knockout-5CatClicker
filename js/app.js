
var ViewModel = function(){
	this.name = ko.observable("Cattie");
	this.image = ko.observable('images/cat.jpg');
	this.count = ko.observable(0);
	this.petNames = ko.observableArray(["Bert","Mert", "Sert","Gert"]);
	
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

	this.incrementCounter = function(){
		this.count(this.count() + 1);
	};
}

ko.applyBindings(new ViewModel());