// const { test } = require('@playwright/test');
// const LoginPage = require('../PlaywrightLoginAutomation/LoginPage');

// test('Sign up verification', async ({ page }) => {

//     const login = new LoginPage(page);

//     await page.goto('https://tichi-app-webapp-stage.web.app/login');

//     await login.login(
//         'valluvans790@gmail.com'
//     );
// });
import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
    // login code
});

test('Invalid Password', async ({ page }) => {
    // invalid password
});

test('Invalid Email', async ({ page }) => {
    // invalid email
});

test('Empty Email', async ({ page }) => {
    // empty email
});

test('Empty Password', async ({ page }) => {
    // empty password
});

test('Empty Fields', async ({ page }) => {
    // both empty
});