import loginPage from "./test/pageobjects/login.page"
describe('funcionalidade login', () => {

  beforeEach(async () => {
    await loginPage.abrirMenu()

  });

   afterEach(async () => {
    await browser.relaunchActiveApp()
  
});

  it('Deve mostrar alerta se o email e inválido', async () => {
    await loginPage.preencherLogin('marcos@teste', 'senha@123')
    await loginPage.mensagemErro('Please enter a valid email address')


  })

  it('Deve fazer login com sucesso', async () => {
    await loginPage.preencherLogin('marcos@teste.com', 'senha@1234')
    expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')

  })
it('deve falhar ao tentar fazer login com senha invalida', async () => {
    await loginPage.preencherLogin('marcos@teste.com', 'senha@')
    await loginPage.mensagemErro('Please enter at least 8 characters')
});

});


