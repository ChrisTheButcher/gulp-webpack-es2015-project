import 'angular';
import 'angular-route';

import { config } from './config'
import { btnComponent } from './components/btn.component.js';
import { HomeService } from './services/home.service.js';
import { HomeController } from './controllers/home.controller.js';

const app = angular.module('app', ['ngRoute'])
    .config(config)
    .service('HomeService', HomeService)
    .controller('HomeController', HomeController)
    .component('btn', btnComponent)    