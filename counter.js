import MyWorker from "./multiplyWorker?worker"

export function setupCounter(element) {
  let counter = 0
  let timer = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  if (window.Worker) {
    const multiplicationWorker = new MyWorker()

    const mul = document.getElementById("mul")
    multiplicationWorker.onmessage = function(event) {
      console.timeEnd("Worker timer")
      setCounter(event.data)
    }

    mul.addEventListener('click', () => {
      console.time("Worker timer")
      multiplicationWorker.postMessage(counter)
    })
  } else {
    console.log("Worker is not supported")
  }
  
  
  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}
