import { Selector } from 'testcafe'

import { fillFormLogin } from './actions';


fixture('Demo Start')
    .page('https://www.saucedemo.com/')

test('Test: success login', async t => {
    await fillFormLogin( 'standard_user', 'secret_sauce')


    await t
        .expect(Selector('#inventory_container').exists)
        .eql(true)   
})


test('Test: error login message', async t => {

    await fillFormLogin( 'standard_user', '1234')


    await t
        .expect(Selector('h3').innerText)
        .eql('Epic sadface: Username and password do not match any user in this service')   
})

test('Test: lack of login user', async t => {

    await t
        .click('#login-button')


    await t
        .expect(Selector('h3').innerText)
        .eql('Epic sadface: Username is required')     
})

test('Test: lack of login password', async t => {

    await t
        .typeText('#user-name', 'standard_user')
        .click('#login-button')

    await t
        .expect(Selector('h3').innerText)
        .eql('Epic sadface: Password is required') 
         
})