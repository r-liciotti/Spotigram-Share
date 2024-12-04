function isTouchDevice(): boolean {
  // Verifica se esistono eventi di tocco (touchstart) o la proprietà maxTouchPoints è maggiore di 0
  return (
    "ontouchstart" in window ||
    (typeof navigator.maxTouchPoints === "number" &&
      navigator.maxTouchPoints > 0)
  );
}

export default isTouchDevice;