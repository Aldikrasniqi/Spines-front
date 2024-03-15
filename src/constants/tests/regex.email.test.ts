import { EMAIL_REGEX } from "../regex";
import { expect, describe, test } from "vitest";

describe('Regex email tests', () => {
   test('should match the email', () => {
         const email = 'aldi@test.com'
        expect(email).toMatch(EMAIL_REGEX);
   }); 
    test('should not match the email', () => {
        const email = 'aldi@test'
        expect(email).not.toMatch(EMAIL_REGEX);
    }); 
    test('should not match the email', () => {
        const email = 'aldi@test.'
        expect(email).not.toMatch(EMAIL_REGEX);
    }); 
    test('should not match the email', () => {
        const email = 'aldi@testc'
        expect(email).not.toMatch(EMAIL_REGEX);
    });
});