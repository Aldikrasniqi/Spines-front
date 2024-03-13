import { loadUserData } from "./load-user-data";
import { expect, describe, test } from "vitest";

describe('loadUserDetails', () => {
    test('should load user details', async () => {
        const user = await loadUserData('Aldiq');
        expect(user).toEqual({
            name: 'Aldi',
            age: 18,
            email: 'aldi@email.com',
        });
    });
    test('should throw error if user not found', async () => {
        try {
            await loadUserData('TestUser');
        } catch (error : any) {
            expect(error.message).toBe('User not found');
        }
    });
})