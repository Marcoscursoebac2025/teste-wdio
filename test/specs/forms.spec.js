import formPage from '../pageobjects/forms.page'

describe('Tela de formulario', () => {

beforeEach(async () => {
    formPage.abrirMenuForm()

});

it('Deve validar se o texto foi preechido corretamente', async() => {
    await formPage.preencherTexto('Teste Appium')
    expect(await formPage.validarTexto()).toEqual('Teste Appium')
    await driver.pause(5000)

    
});

it('validar a seleçao dropdown', async() => {

await formPage.selecionarOpcao('Appium is awesome')
expect(await formPage.validarOpcao()).toEqual('Appium is awesome')
await driver.pause(5000)
    
});

it('deve trocar o botao de on para off', async () => {
//trocar para ON
const botaoOnOff = await $("~switch");
await botaoOnOff.click();
await driver.pause(5000)
//trocar para OFF
await browser.swipe({
direction: 'left',                  // Swipe from right to left
duration: 5000,                     // Last for 5 seconds
percent: 0.1,                       // Swipe 50% of the scrollableElement
scrollableElement: botaoOnOff,  // The element to swipe within
});
  await driver.pause(5000)
    
});

    
});