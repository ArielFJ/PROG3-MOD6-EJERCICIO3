
export class Producto{

    constructor(id, nombre, descripcion, vencimiento, proveedor) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.vencimiento = vencimiento;
        this.proveedor = proveedor;
    }


}

export class Proveedor {

    constructor(id, nombre, direccion, telefono){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

}