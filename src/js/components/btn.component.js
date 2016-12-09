const btnComponent = {
    bindings: {
        text: '<',
    },
    controller: class Controller {
        constructor() {
            this.type = 'button';
        }
    },
    template: '<button type="{{$ctrl.type}}">{{$ctrl.text}}</button>'
};

export { btnComponent };