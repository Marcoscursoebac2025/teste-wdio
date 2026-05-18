class DragPage{


get MenuDrag(){return $("~Drag")}

async abrirMenuDrag(){

const menu = this.MenuDrag;
await menu.waitForExist({timeout:5000})
await menu.click()

}


}


export default new DragPage()