class FormPage {
// seletores

get menuForm () {return $("accessibility id:Forms")}
get CampoTexto (){return $("accessibility id:text-input")}
get labelResultado () {return $("accessibility id:input-text-result")}
get dropdown () {return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")")}

// metodos
async abrirMenuForm () {
await this.menuForm.click()

}

async preencherTexto(texto) {
await this.CampoTexto.addValue(texto) 

}

async validarTexto() {
return await this.labelResultado.getText() 

}

async selecionarOpcao (txtOpcao) {
//melhorar metodo

await this.dropdown.click()
const opcao = $(`-android uiautomator:new UiSelector().text(\"${txtOpcao}\")`)
await opcao.click()

}

async validarOpcao() {
return await this.dropdown.getText()
}

}

export default new FormPage