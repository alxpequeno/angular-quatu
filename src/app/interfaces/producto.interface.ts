export interface Producto {
    codigo?: number;
    nombre: string;
    descripcion: string;
    precioMin: number;
    precioMax: number;
    medida: string;
    categoria: number;
    region: string;
    resumen: string;
    proveedor: number;
    foto: string;
}