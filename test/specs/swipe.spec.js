import swipePage from "../pageobjects/swipe.page";

describe('Teste swipe', () => {

  beforeEach(async () => {
    await swipePage.abrirMenuSwipe()
  });

  afterEach(async () => {

    await driver.back();
    await driver.pause(5000)

  });

  it('Deve arrastar para baixo', async () => {
    await browser.swipe({
      direction: 'down',
      duration: 1000,
      percent: 0.5

    })

  });

  it('deve arrastar para cima com coordenadas', async () => {
    await driver.swipe('down') // primeiro desce
    await driver.pause(3000) // espera 3 segundos
    await driver.action('pointer')
      .move({ duration: 0, x: 549, y: 2049 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 560, y: 1026 })
      .up({ button: 0 })
      .perform();

    await driver.pause(5000)
  });
  it('deve deslizar con una pausa visible', async () => {
    // Localiza el contenedor del swipe por accessibilityId
    const carousel = await $('~Swipe');

    await expect(carousel).toBeDisplayed();

    // Ejecuta el gesto de swipe
    await driver.execute('mobile: swipeGesture', {
      elementId: carousel.elementId,
      direction: 'left',
      percent: 0.5
    });

    // Pausa de 5 segundos para observar el movimiento
    await driver.pause(5000);

    // Validación: el primer item ya no debería estar visible
    const firstItem = await $(`android=new UiSelector().resourceId("__CAROUSEL_ITEM_0_READY__")`);
    await expect(firstItem).not.toBeDisplayed();
  });

});



