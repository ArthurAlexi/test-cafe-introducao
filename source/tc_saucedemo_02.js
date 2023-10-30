import { Selector } from 'testcafe';

fixture `Sauce Demo Tests`
    .page `https://www.saucedemo.com/`;
  
test('Teste Ccompleto', async t => {
    // Teste 1: Login com credenciais inválidas e verifica botão de erro
   // await t.maximizeWindow();
    await t
        .typeText('#user-name', 'invalid_user')
        .typeText('#password', 'invalid_pass')
        .click('.btn_action')
        .expect(Selector('.error-button').visible).ok();

    // Teste 2: Login com credenciais válidas
    await t
        .typeText('#user-name', 'standard_user', { replace: true })
        .typeText('#password', 'secret_sauce', { replace: true })
        .click('.btn_action');
  
    // Teste 3: Verificar a funcionalidade de ordenação de produtos
    await t
        .click('.product_sort_container')
        .click(Selector('option').withText('Price (low to high)'))
        .expect(Selector('.inventory_item_name').nth(0).innerText).eql('Sauce Labs Onesie');

    // Teste 4: Navegar para a página de detalhes do produto
    await t
        .click(Selector('.inventory_item_name').nth(0));

    // Teste 5: Adicionar produto ao carrinho e verificar
    await t
        .click('.btn_primary.btn_inventory')
        .expect(Selector('.shopping_cart_badge').innerText).eql('1');

    // Teste 6: Finalizar compra após adicionar produto ao carrinho
    await t
        .click('.shopping_cart_link')
        .click('.checkout_button');

    // Teste 7: Verificar resumo da compra antes de finalizar o pedido
    await t
        .typeText('#first-name', 'Nome_cliente')
        .typeText('#last-name', 'sobrenome')
        .typeText('#postal-code', '12345')
        .click('.cart_button')
        .expect(Selector('.summary_total_label').innerText).contains('Total: $8.63');

    // Teste 8: Verificar a remoção de produto do carrinho
    await t
        .click('.cart_button')
        .expect(Selector('.shopping_cart_badge').exists).notOk();
});
