$(document).ready(function () {
    // Preparamos datos genericos
    var data = new Array();
    var firstNames =
        [
            "Tomás", "Felipe", "Oscar", "Samir", "Francisca", "Gwyn", "Lord Of Cinder", "Pedro", "Jacob", "Jaime", "Ivan", "Javier"
        ];
    var lastNames =
        [
            "Ossandón", "Espinoza", "Castro", "Morandé", "Saavedra", "Excel", "Prueba", "Muñoz", "Guevara", "Bravo", "Zamorano", "Salas", "Sanchez"
        ];
    var productNames =
        [
            "Monster 500 ML", "Cafe", "Alimento Para Gatos", "Polera Polo", "Pokebolas"
        ];

    //Creamos un metodo que nos arroje datos aleatorios para llenar 100 filas pero solo al cambiar el menor que 100 podemos hacer mas filas en las 3 columnas (solo como acotacion)
    for (var i = 0; i < 100; i++) {
        var row = {};
        var productindex = Math.floor(Math.random() * productNames.length);
        row["nombres"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["apellidos"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["productos"] = productNames[productindex];
        data[i] = row;
    }
    // Instanciamos las variables
    var source =
    {
        localdata: data,
        datatype: "array"
    };
    var dataAdapter = new $.jqx.dataAdapter(source, {
        loadComplete: function (data) { },
        loadError: function (xhr, status, error) { }
    });
    //Se crea la tabla
    $("#jqxgrid").jqxGrid(
        {
               
            source: dataAdapter,
            columns: [
                { text: 'Nombre', datafield: 'nombres', width: 200 },
                { text: 'Apellido', datafield: 'apellidos', width: 200 },
                { text: 'Producto', datafield: 'productos', width: 200 }
            ]
        });
    //Creamos el metodo para exportar el excel tomando los 100 registros    
    $("#excelExport").click(function () {
        $("#jqxgrid").jqxGrid('exportdata', 'xls', 'DescargaDatos');
    });
});