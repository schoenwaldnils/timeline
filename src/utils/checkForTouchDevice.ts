export const checkForTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false

  return (
    'ontouchstart' in window || 'onmsgesturechange' in window // works on most browsers
  ) // works on IE10 with some false positives
}
