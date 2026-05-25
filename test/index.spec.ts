import { describe, expect, it } from 'vitest'
import { helloWorld } from '../src/index'

describe('index', () => {
  it('should return "Hello World!" when calling the `helloWorld` function', () => {
    const result = helloWorld()

    expect(result).toBe('Hello World!')
  })
})
