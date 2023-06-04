import { getConnection } from '../database/connection'

export const getCubiculos = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idCubiculo, nombre, capacidad, EstadosCubiculo.estadoActual estado, tiempoMaximo FROM Cubiculos INNER JOIN EstadosCubiculo ON Cubiculos.idEstado = EstadosCubiculo.idEstado");
    res.json(resp.recordset)
}
