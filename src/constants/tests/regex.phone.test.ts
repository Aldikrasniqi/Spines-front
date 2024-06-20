import { PHONE_REGEX } from '../regex';
import { expect, describe, test } from 'vitest';

describe('Regex phone number test ', () => {
  test('should match phone number', () => {
    const phone = '081234567890';
    expect(phone).toMatch(PHONE_REGEX);
  });
  test('should not match phone number shorter than 8 words', () => {
    const phone = '1234';
    expect(phone).not.toMatch(PHONE_REGEX);
  });
  test('should not match phone number with latters', () => {
    const phone = 'asd1234';
    expect(phone).not.toMatch(PHONE_REGEX);
  });
  test('should not match phone number with special characters', () => {
    const phone = '081234567890@';
    expect(phone).not.toMatch(PHONE_REGEX);
  });
});
