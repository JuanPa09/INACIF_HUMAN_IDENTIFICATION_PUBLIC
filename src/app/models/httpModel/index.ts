type Dict = { [key: string]: any };
export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export const ERROR_MESSAGES = {
    INTERNAL_ERROR: {
        httpCode: 500,
        title: 'Error Interno',
        message: 'Error al realizar la operación, vuelva a intentarlo más tarde'
    },
    NOT_FOUND: {
        httpCode: 404,
        title: 'Datos no encontrados',
        message: 'No se encontraron datos para la operación realizada'
    },
    OPERATION_SUCCESSFUL: {
        httpCode: 200,
        title: 'Operación Exitosa',
        message: 'Operación realizada correctamente'
    }

}