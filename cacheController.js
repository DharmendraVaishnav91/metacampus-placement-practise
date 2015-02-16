
var userModule=angular.module('user',[]);
userModule.factory('myCache',function($cacheFactory){
	return $cacheFactory('myCache',{capacity:3});
});

userModule.controller('userCacheController',
	function($scope,myCache){
		$scope.addToCache=function(key,value){
			myCache.put(key,value);
		};
		$scope.readFromCatch=function(key){
			 return myCache.get(key);
		};
		$scope.getCacheStatus=function(){
			return myCache.info();
		};
});

