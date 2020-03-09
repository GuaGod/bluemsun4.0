function cookieDecorator(fn) {
    return function() {
        fn()
    }
}