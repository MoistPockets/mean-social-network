angular.module('app').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'LABEL_home': 'Home',
        'LABEL_login': 'Login',
		'LABEL_register': 'Register',
		'LABEL_index_title': 'Latest posts',
		'LABEL_submit': 'Submit',
		'LABEL_edit': 'Edit',
		'LABEL_user_title': 'Posts by',
		'LABEL_logged_as': 'Logged as',
		'LABEL_username': 'Username',
		'LABEL_password': 'Password',
		'LABEL_lang_select': 'Choose language',
		'LABEL_comment': 'Comment'
    });
     
    $translateProvider.translations('pl', {
        'LABEL_home': 'Home',
        'LABEL_login': 'Zaloguj',
		'LABEL_register': 'Rejestracja',
		'LABEL_index_title': 'Ostatnie wpisy',
		'LABEL_submit': 'Dodaj',
		'LABEL_edit': 'Edytuj',
		'LABEL_user_title': 'Posty od',
		'LABEL_logged_as': 'Zalogowany jako',
		'LABEL_username': 'Nazwa użytkownika',
		'LABEL_password': 'Hasło',
		'LABEL_lang_select': 'Wybierz język',
		'LABEL_comment': 'Komentarze'
    });
     
    $translateProvider.preferredLanguage('pl');
}]);
angular.module('app').controller('LanguageCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});