'use strict';

app.controller('ProductsCtrl', function ($scope, allProducts, allCategories) {
	
	$scope.products = allProducts;
	$scope.categories = allCategories;

	//this was an attempt to set the checked categories array on the scope 
	//so we don't have to make that check for every product
	//currently not working...

	//$scope.$watch($scope.categories, function(newVal, oldVal){
	//	$scope.checkedCategories = $scope.categories.filter(function(cat){
  //  	return cat.checked === true;
  //	});
	//});


	$scope.inStock = function(product){
		return (product.quantity !== 0);
	};

	$scope.isFiltered = function(product){
		var checkedCategories = $scope.categories.filter(function(e){
			return e.checked;
		});

		if(checkedCategories.length === 0) return true;
		else {
			for (var i = 0; i < product.categories.length; i++) {
				for (var j = 0; j < checkedCategories.length; j++) {
					if (product.categories[i].name === checkedCategories[j].name){
						return true;
					}
					
				};
			};
			return false;
			// return product.categories.some(function(e){
			// 	for (var i = 0; i < checkedCategories.length; i++) {
			// 		return checkedCategories[i].name === e.name;
			// 	}
			// });
		}
	};

	$scope.myClick = function(category) {
		category.checked = !category.checked;
		if (category.checked)
			category.style="clicked";
		else
			category.style = "";
	}

});
