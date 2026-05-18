import swipePage from "../pageobjects/swipe.page";

describe('Teste swipe', () => {

  beforeEach(async () => {
    await swipePage.abrirMenuSwipe()
  });

  afterEach(async () => {

    await driver.back()
    await driver.pause(5000)

  });

  it('Deve arrastar para baixo', async () => {
    await driver.swipe('down')

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

  it('deve deslizar com sucesso para o lado', async () => {

    const carousel = $("-android uiautomator:new UiSelector().resourceId(\"__CAROUSEL_ITEM_0_READY__\")");

    await browser.swipe({
      direction: 'left',                  // Swipe from right to left
      duration: 5000,                     // Last for 5 seconds
      percent: 0.5,                       // Swipe 50% of the scrollableElement
      scrollableElement: $('~carousel'),  // The element to swipe within

    })
  });
});

