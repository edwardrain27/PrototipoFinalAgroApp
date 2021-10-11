const pool = require('../database');

reporteConsultaPrincipal = async () => {

    let query = `select O.ms_costo as costo_mantenimiento,
    O.fecha_final_man_sub as fecha_final_mantenimiento,
    O.iD_mantenimentos_subterrenocol as id,
    M.ma_fecha as fecha_mantenimiento,
    M.ma_descripcion as descripcion_mantenimiento, 
    M.ma_estado as estado_mantenimiento, 
    S.idsubterreno as id_Subterreno, 
    T.t_nombre as nombre_trabajador, 
    T.t_salario_jormal as salario_trabajador, 
    T.trabajadorId as cedula, 
    Q.tm_nombre as nombre_mantenimiento,
    Q.num_jornals as numero_jornales, 
    Q.descripcion as descripcion_mantenimiento, 
    Q.idtipos_matenimiento as ID_tipo_mantenimiento, 
    I.in_nombre as nombre_insumo, 
    H.he_nombre as herramienta
    from mantenimentos_has_subterreno as O
    inner join mantenimentos as M
    on(O.fk_mantenimentos = M.idmantenimentos)
    inner join subterreno as S
    on(O.fk_subterreno = S.idsubterreno)
    inner join trabajador as T
    on(M.fk_trabajador_manteni = T.trabajadorId)
    inner join tipos_matenimiento as Q
    on(M.fk_tipos_matenimiento = Q.idtipos_matenimiento)
    inner join insumos as I
    on(Q.fk_insumos = I.insu_id)
    inner join herramientas as H
    on(Q.fk_insumos = H.idherramientas);`

    return await pool.query(query);
}

module.exports = {
     reporteConsultaPrincipal
}