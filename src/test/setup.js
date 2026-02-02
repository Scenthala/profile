import '@testing-library/jest-dom'

// Mock IntersectionObserver for jsdom
class IntersectionObserver {
  constructor(callback) { this.callback = callback }
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserver
