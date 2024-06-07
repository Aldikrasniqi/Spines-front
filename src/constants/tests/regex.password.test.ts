import { PASSWORD_REGEX } from '../regex';
import { expect, describe, test } from 'vitest';

describe('Password regex test', () => {
  test('should match password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character', () => {
    const password = 'Test1234.';
    expect(password).toMatch(PASSWORD_REGEX);
  });
  test('should not match password without special character', () => {
    const password = 'Test1234';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
  test('should not match password with less than 8 characters', () => {
    const password = 'Test123';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
  test('should not match password without uppercase', () => {
    const password = 'test1234';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
  test('should not match password without lowercase', () => {
    const password = 'TEST1234';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
  test('should not match password without number', () => {
    const password = 'TestTest';
    expect(password).not.toMatch(PASSWORD_REGEX);
  });
});
