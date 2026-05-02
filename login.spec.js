describe('Funcionalidade: login', () => {

it('Deve fazer login com sucesso', async () => {
  await $('~Login').click()
  await $('~input-email').setValue('marcos@teste.com')
  await $('~input-password').setValue('senha1234@')
  await $('~button-LOGIN').click()
  await driver.pause (5000)
    
});

    
});