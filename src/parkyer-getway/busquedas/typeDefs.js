
  export const rutasTypeDef =  `
  type properties {
    idoperador_ruta_zonal: String
    fecha_implementacion_ruta_zonal: String
    tipo_ruta_zonal: Int!
    localidad_origen_ruta_zonal: Int!
    delega_ruta_zonal: Int!
    zona_origen_ruta_zonal: Int!
    route_id_ruta_zonal: Int!
    objectid: Int!
    origen_ruta_zonal: String!
    longitud_ruta_zonal: Float!
    localidad_destino_ruta_zonal: Int!
    destino_ruta_zonal: String!
    denominacion_ruta_zonal: String!
    tipo_servicio_ruta_zonal: Int!
    zona_destino_ruta_zonal: Int!
    globalid: String!
    route_name_ruta_zonal: String!
    codigo_definitivo_ruta_zonal: String!

}
input propertiesInput {
        idoperador_ruta_zonal: String
        fecha_implementacion_ruta_zonal: String
        tipo_ruta_zonal: Int
        localidad_origen_ruta_zonal: Int!
        delega_ruta_zonal: Int!
        zona_origen_ruta_zonal: Int!
        route_id_ruta_zonal: Int!
        objectid: Int!
        origen_ruta_zonal: String!
        longitud_ruta_zonal: Float!
        localidad_destino_ruta_zonal: Int!
        destino_ruta_zonal: String!
        denominacion_ruta_zonal: String!
        tipo_servicio_ruta_zonal: Int!
        zona_destino_ruta_zonal: Int!
        globalid: String!
        route_name_ruta_zonal: String!
        codigo_definitivo_ruta_zonal: String!
    }`;



export const rutasQueries = `
    getIdRuta(route_id_ruta_zonal: Int!): properties!
`;

