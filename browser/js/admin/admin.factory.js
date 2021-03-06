'use strict'; 

app.factory('AdminFactory', function($http, AuthService, $q, $state){

	var AdminFactory = {};

	function getData (res) { return res.data; }

	AdminFactory.fetchById = function(id){
		var url = '/api/users/' + id;
		return $q.all([$http.get(url), $http.get(url + '/orders')])
		.then( function(responses) { return responses.map(getData); }) 
		.then( function (results) {
			var admin = results[0];
			var orders = results[1]; 
			admin.orders = orders; 
			return admin;
		});
	};	

	AdminFactory.fetchOrders = function(){
		return $http.get('/api/orders')
		.then(getData) 
		.then(function (orders) {
			return orders;
		});
	};

	AdminFactory.fetchProducts = function(){
		return $http.get('/api/products')
		.then(getData) 
		.then(function (products) {
			return products;
		});
	};

	AdminFactory.addProduct = function(newProduct){
		console.log('in the add product factory');
		return $http.post('/api/products', newProduct)
		.then(function (product) {
			$state.go('products');
		});
	};

	AdminFactory.fetchUsers = function(){
		return $http.get('/api/users')
		.then(getData) 
		.then(function (users) {
			return users;
		});
	};

	AdminFactory.deleteUser = function(id){
		return $http.delete('/api/users/' + id);
	}

	AdminFactory.updateAdminStatus = function(id, data){
		return $http.put('/api/users/' + id, data)
		.then(function(data){
			return data; 
		})
	}

	AdminFactory.updateOrderStatus = function(id, data){
		return $http.put('/api/orders/' + id, data)
		.then(function(data){
			return data; 
		})
	}

	return AdminFactory; 

})