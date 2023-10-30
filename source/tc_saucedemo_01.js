import { Selector } from 'testcafe';

fixture `Sauce Demo Tests`
    .page `https://www.saucedemo.com/`;
    
const usernameInput = Selector('#user-name');
const passwordInput = Selector('#password');
const loginButton = Selector('.btn_action');
const hamburgerMenuButton = Selector('.bm-burger-button');
const logoutButton = Selector('#logout_sidebar_link');

// Função para fazer login
async function login(t, username = 'standard_user', password = 'secret_sauce') {
    await t
        .typeText(usernameInput, username, {replace: true})
        .typeText(passwordInput, password, {replace: true})
        .click(loginButton);
        await t.maximizeWindow();
}

// Função para fazer logout
async function logout(t) {
    await t
        .click(hamburgerMenuButton)
        .click(logoutButton);
}


test('Login com credenciais inválidas e verifique a mensagem de erro', async t => {
    const errorMessage = Selector('h3[data-test="error"]');
    await login(t, 'invalid_user', 'invalid_password');
    await t.expect(errorMessage.exists).ok()
        .expect(errorMessage.innerText).contains('Epic sadface: Username and password do not match any user in this service');
});


test('Navegar para a página de detalhes do produto', async t => {
    const firstProductTitle = Selector('.inventory_list .inventory_item_name').nth(0);
    const productDetailTitle = Selector('.inventory_details_name');
    
    await login(t);
    await t.click(firstProductTitle);
    await t.expect(productDetailTitle.exists).ok();
    await logout(t);
});
test('Verificar a funcionalidade de ordenação de produtos', async t => {
    const sortingDropdown = Selector('.product_sort_container');
    const productListNames = Selector('.inventory_item_name');
    
    await login(t);
    await t.click(sortingDropdown)
           .click(Selector('option').withAttribute('value', 'lohi'))
           .expect(productListNames.nth(0).innerText).eql('Sauce Labs Onesie')
           .click(hamburgerMenuButton)  
           .click(logoutButton);
});

test('Login, adicione produto ao carrinho e verifique', async t => {
    const firstProductAddButton = Selector('.inventory_list').find('.btn_primary').nth(0);
    const shoppingCartBadge = Selector('.shopping_cart_badge');

    await login(t);
    await t.click(firstProductAddButton);
    await t.expect(shoppingCartBadge.exists).ok()
           .expect(shoppingCartBadge.innerText).eql('1');
    await logout(t);
});


