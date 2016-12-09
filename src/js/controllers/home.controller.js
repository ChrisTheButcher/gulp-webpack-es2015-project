class HomeController {
    constructor(HomeService) {
        this.title = 'Hello World';
        this.data = [];

        HomeService.get().then(
            suc => this.data = suc.data.data,
            err=> console.warn(err)
        )
    }
}

export { HomeController }