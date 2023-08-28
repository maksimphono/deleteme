onmessage = function(event) {
    let num = event.data
    for (let i = 0; i < 100000000; i++) {
        num *= 1.0000001
    }
    postMessage(num)
}