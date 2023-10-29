import { t } from 'testcafe';

export const fillFormLogin = async (email, password) => {
    await t
        .typeText('#user-name', email)
        .typeText('#password', password)
        .click('#login-button')
}