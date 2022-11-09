function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function namedFunction() {
        console.log('shah')
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('hey')
    }
}