export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  console.log(counter)
  setCounter(0)
}
