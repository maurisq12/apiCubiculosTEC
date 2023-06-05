import { getConnection } from '../database/connection'

export const getAsignaciones = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request().query("SELECT idCubiculo, Estudiantes.idEstudiante idEstudiante,Estudiantes.nombre nombre, Estudiantes.apellido1 apellido1 ,Estudiantes.apellido2 apellido2, fechaDeUso, horaInicio, horaFinal, confirmacion, fechaDeReservacion, idReservacion FROM Reservaciones INNER JOIN Estudiantes ON Reservaciones.idEstudiante = Estudiantes.idEstudiante");
    res.json(resp.recordset)
}
