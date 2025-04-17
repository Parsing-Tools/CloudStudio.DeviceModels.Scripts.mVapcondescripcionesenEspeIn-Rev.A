function getConfiguration(config) {

    config.addressLabel = { en: "Serial Number", es: "Número de Serie" };
}

function getEndpoints(deviceAddress, endpoints) {
    // Endpoints
    endpoints.addEndpoint("FIRMWARE", { en: "Firmware Version", es: "Versión de Firmware" }, endpointType.genericSensor)
        .variableTypeId = 1085;
    endpoints.addEndpoint("SERIAL", { en: "Serial Number", es: "Número de serie" }, endpointType.genericSensor)
        .variableTypeId = 1085;
    endpoints.addEndpoint("RELATIVE_HUMIDITY", { en: "Ambient relative humidity", es: "Humedad relativa ambiente" }, endpointType.humiditySensor);
    endpoints.addEndpoint("TEMPERATURE", { en: "Ambient temperature", es: "Temperatura ambiente" }, endpointType.temperatureSensor);
    endpoints.addEndpoint("ATMOSPHERIC_PRESSURE", { en: "Atmospheric pressure", es: "Presón atmosférica" }, endpointType.pressureSensor);
    endpoints.addEndpoint("RAINFALL_INTENSITY", { en: "Rainfall intensity", es: "Intensidad de precipitación" }, endpointType.genericSensor)
        .variableTypeId = 1014;
    endpoints.addEndpoint("RAIN_PRECIPITATION", { en: "Rain precipitation", es: "Precipitación" }, endpointType.genericSensor)
        .variableTypeId = 1015;
    endpoints.addEndpoint("WIND_SPEED", { en: "Wind speed", es: "Velocidad del viento" }, endpointType.genericSensor)
        .variableTypeId = 1013;
    endpoints.addEndpoint("WIND_DIRECTION", { en: "Wind direction", es: "Dirección del viento" }, endpointType.genericSensor)
        .variableTypeId = 1020;
    endpoints.addEndpoint("EVAPORATED_LEVEL", { en: "Volume shifted", es: "Volumen desplazado" }, endpointType.genericSensor)
        .variableTypeId = 1021;
    endpoints.addEndpoint("TANK_LEVEL", { en: "Tank level", es: "Nivel del tanque" }, endpointType.genericSensor)
        .variableTypeId = 1021;
    endpoints.addEndpoint("LIQUID_TEMPERATURE", { en: "Liquid temperature", es: "Temperatura del líquido" }, endpointType.temperatureSensor);
    endpoints.addEndpoint("MAX_LEVEL", { en: "Maximum tank level", es: "Nivel máximo de tanque" }, endpointType.genericSensor)
        .variableTypeId = 1021;
    endpoints.addEndpoint("TIME_BEETWEN_FILLS", { en: "Time beetwen fills", es: "Tiempo entre llenados" }, endpointType.genericSensor)
        .variableTypeId = 1022;
    endpoints.addEndpoint("CB", { en: "Battery voltage CB", es: "Tensión de batería CB" }, endpointType.voltageSensor);
    endpoints.addEndpoint("V1_STATUS", { en: "V1 valve status", es: "Estado de valvula V1" }, endpointType.genericSensor)
        .variableTypeId = 1025;
    endpoints.addEndpoint("A_EMPTY_TANK", { en: "Reserve tank almost empty", es: "Tanque de reserva casi vacio" }, endpointType.genericSensor)
        .variableTypeId = 1023;
    endpoints.addEndpoint("A_CB_LOW_VOLTAGE", { en: "CB low voltage battery", es: "Baja tensión de batería CB" }, endpointType.genericSensor)
        .variableTypeId = 1023;
    endpoints.addEndpoint("A_SENSOR_DISCONNECTED", { en: "Some sensor disconnected", es: "Algún sensor desconectado" }, endpointType.genericSensor)
        .variableTypeId = 1023;
}

function validateDeviceAddress(address, result) {

}

function updateDeviceUIRules(device, rules) {


    rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {

    rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}
