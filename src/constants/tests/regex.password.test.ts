import { PASSWORD_REGEX } from '../regex';
import { expect, describe, test } from 'vitest';

describe('Regex tests', () => {
  test('should match password with at least 8 characters, 1 uppercase, 1 lowercase, and 1 number', () => {
    const password = 'Test1234';
    expect(password).toMatch(PASSWORD_REGEX);
  });
  test('should not match password with less than 8 characters', () => {
    const password = 'Test123';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
});
