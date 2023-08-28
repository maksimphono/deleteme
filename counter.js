//import MyWorker from "./multiplyWorker?worker"

export function setupCounter(element) {
  let counter = 0
  let timer = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  
  
  
  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}
