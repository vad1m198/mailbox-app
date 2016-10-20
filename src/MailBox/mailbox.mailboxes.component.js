angular.module('mailbox').component('mailboxes',{    controller: function($scope, MailsDataSvc) {	  this.loading = true;	  this.hideError = function() {		this.error = '';	  }	  this.hideNotification = function() {		this.notification = '';	  }      MailsDataSvc.getAllMailboxes()        .then(mailboxes => {          this.mailboxes = mailboxes;		  this.loading = false;		          })		.catch(error => {			console.log("mailboxes component error >>>>>", error)			this.loading = false;			this.error = error.status + ' ' + error.statusText;		})	  $scope.$on('startLoading', function(){				$scope.$ctrl.loading = true;	  });	  $scope.$on('stopLoading', function(){				$scope.$ctrl.loading = false;	  });	  $scope.$on('showError', function(name, errorMessage){				$scope.$ctrl.error = errorMessage;	  });	  $scope.$on('showNotification', function(name, message){				$scope.$ctrl.notification = message;	  });    },    templateUrl: 'src/MailBox/templates/mailbox.mailboxes.component.tmpl.html',	  })