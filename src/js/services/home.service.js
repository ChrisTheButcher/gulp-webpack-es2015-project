class HomeService {
    constructor($http) {
        this.get =()=> $http.get('http://api.giphy.com/v1/gifs/search?q=exited&api_key=dc6zaTOxFJmzC')
    }
}

export { HomeService }