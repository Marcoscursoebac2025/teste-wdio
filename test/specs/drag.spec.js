import dragPage from "../pageobjects/drag.page";

describe("Testes na tela DragDrop", () => {
  beforeEach(async () => {
    await dragPage.abrirMenuDrag();
    browser.pause(1000);
  });

  it("Deve arrastar a peça até o lugar certo", async () => {
    const peca_1 = await $("~drag-l1"); // Peça de origem
    const destino_1 = await $("~drop-l1"); // Slot de destino

    await peca_1.dragAndDrop(destino_1)
    await browser.pause(2000);
    
  });

  it("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
    //DESAFIO: Implementar o drag and drop para todas as peças aqui 
    const peca_1 = await $("~drag-l1"); // Peça de origem
    const destino_1 = await $("~drop-l1"); // Slot de destino

    await peca_1.dragAndDrop(destino_1)
    await browser.pause(5000);
    //peça_2
    const peca_2 = await $("~drag-c1");
    const destino_2 = await $("~drop-c1");

    await peca_2.dragAndDrop(destino_2);
    await browser.pause(5000);
    //peça_3
    const peca_3 = await $("~drag-r1");
    const destino_3 = await $("~drop-r1");

    await peca_3.dragAndDrop(destino_3);
    await browser.pause(5000);
    //peça_4
    const peca_4 = await $("~drag-l2");
    const destino_4 = await $("~drop-l2");

    await peca_4.dragAndDrop(destino_4);
    await browser.pause(5000);
    //peça_5
    const peca_5 = await $("~drag-c2");
    const destino_5 = await $("~drop-c2");

    await peca_5.dragAndDrop(destino_5);
    await browser.pause(5000);
    //peça_6
    const peca_6 = await $("~drag-r2");
    const destino_6 = await $("~drop-r2");

    await peca_6.dragAndDrop(destino_6);
    await browser.pause(5000);
    //peça_7

    const peca_7 = await $("~drag-l3");
    const destino_7 = await $("~drop-l3");

    await peca_7.dragAndDrop(destino_7);
    await browser.pause(5000);

    //peça_8
    const peca_8 = await $("~drag-c3");
    const destino_8 = await $("~drop-c3");

    await peca_8.dragAndDrop(destino_8);
    await browser.pause(5000);
    //peça_9
    const peca_9 = await $("~drag-r3");
    const destino_9 = await $("~drop-r3");

    await peca_9.dragAndDrop(destino_9);
    await browser.pause(5000);

    //Resultado esperado, só depois de completar o quebra cabeça
    const mensagem = await $('android=new UiSelector().text("Congratulations")');
    await expect(mensagem).toBeDisplayed();

  });



});

