import { homeTemplate } from './templates/home.template.js';

function config($routeProvider) {  
    $routeProvider.when("/", {
      template: homeTemplate,
      controller: "HomeController",
      controllerAs: "$ctrl"
    });
};

export { config };