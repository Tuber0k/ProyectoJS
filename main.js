const ingredientes = {
    dulceDeLeche: 'dulce de leche',
    chocolate: 'chocolate',
    azucar: 'azucar',
    cremaDeLeche: 'crema de leche',
    manteca: 'manteca',
    mascarpone: 'mascarpone',
    huevo: 'huevo',
    cafe: 'cafe',
    vainilla: 'vainilla',
    cacaoAmargo: 'cacao amargo',
    cacaoDulce: 'cacao dulce',
    chocolateAmargo: 'chocolate amargo',
    chocolateDulcce: 'chocolate dulce',
    galletasChocolate: 'galletas de chocolate',
    lecheCondensada: 'leche condensada',
    leche: 'leche',
    limon: 'limon',
    harina: 'harina',
    esenciaVainilla: 'esencia de vainilla',
    sal: 'sal',
    dulceBatata: 'dulce de batata',
    dulcemenmbrillo: 'dulce de membrillo',
    nueces: 'nueces',
    harina0000: 'harina0000',
    maicena: 'maicena',
    frutilla: 'frutilla',
    gelatinaFrutilla: 'gelatina de frutilla',

};

const postres = {
    tiramisu: 'tiramisu',
    chocotorta: 'chocotorta',
    lemonPie: 'lemon pie',
    pastafrola: 'pasta frola',
    brownie: 'brownie',
    tartaDeFrutilla: 'tarta de frutilla',
};


const listaIngredientes = [
    {nombre: ingredientes.dulceDeLeche, precio: 0.92},
    {nombre: ingredientes.chocolate, precio: 1.84},
    {nombre: ingredientes.azucar, precio: 0.40},
    {nombre: ingredientes.cremaDeLeche, precio: 0.44},
    {nombre: ingredientes.manteca, precio: 1},
    {nombre: ingredientes.mascarpone, precio: 1},
    {nombre: ingredientes.huevo, precio: 20},
    {nombre: ingredientes.cafe, precio: 0.26},
    {nombre: ingredientes.vainilla, precio: 1.09},
    {nombre: ingredientes.cacaoAmargo, precio: 2.54},
    {nombre: ingredientes.cacaoDulce, precio: 2.06},
    {nombre: ingredientes.chocolateAmargo, precio: 1.2},
    {nombre: ingredientes.chocolateDulcce, precio: 1.2},
    {nombre: ingredientes.galletasChocolate, precio: 1.2},
    {nombre: ingredientes.lecheCondensada, precio: 0.5},
    {nombre: ingredientes.leche, precio: 0.125},
    {nombre: ingredientes.limon, precio: 10},
    {nombre: ingredientes.harina, precio: 0.22},
    {nombre: ingredientes.esenciaVainilla, precio: 2},
    {nombre: ingredientes.sal, precio: 0.2},
    {nombre: ingredientes.dulceBatata, precio: 0.22},
    {nombre: ingredientes.dulcemenmbrillo, precio: 0.22},
    {nombre: ingredientes.nueces, precio: 1.47},
    {nombre: ingredientes.harina0000, precio: 0.1},
    {nombre: ingredientes.maicena, precio: 0.70},
    {nombre: ingredientes.frutilla, precio: 0.8},
    {nombre: ingredientes.gelatinaFrutilla, precio: 3.5},
    
];

const listaPostres = [
    {
        nombre: postres.tiramisu,
        ingredientes: [{
            nombre: ingredientes.azucar, cantidad: 160},
          { nombre: ingredientes.cremaDeLeche, cantidad: 400},
          { nombre: ingredientes.mascarpone, cantidad: 600},
          { nombre: ingredientes.huevo, cantidad:7},
          { nombre: ingredientes.cafe, cantidad: 10},
          { nombre: ingredientes.vainilla, cantidad: 2},
          { nombre: ingredientes.cacaoAmargo, cantidad: 100},
          { nombre: ingredientes.chocolateAmargo, cantidad: 75},
        
        ]
    },
    {
        nombre: postres.chocotorta,
        ingredientes: [{
            nombre: ingredientes.dulceDeLeche, cantidad:400},
          { nombre: ingredientes.cremaDeLeche, cantidad:400},
          { nombre: ingredientes.galletasChocolate, cantidad:750},
          { nombre: ingredientes.leche, cantidad:250},
          { nombre: ingredientes.chocolate, cantidad:50},
          { nombre: ingredientes.cacao, cantidad:50},
        
        ]
    },
    {
        nombre: postres.lemonPie,
        ingredientes: [{
            nombre: ingredientes.vainilla, cantidad:200},
          { nombre: ingredientes.manteca, cantidad:70},
          { nombre: ingredientes.huevo, cantidad:4},
          { nombre: ingredientes.lecheCondensada, cantidad:400},
          { nombre: ingredientes.limon, cantidad:1},
          { nombre: ingredientes.azucar, cantidad:200},
        
        ]
    },
    {
        nombre: postres.pastafrola,
        ingredientes: [{
            nombre: ingredientes.huevo, cantidad:1},
          { nombre: ingredientes.harina, cantidad:400},
          { nombre: ingredientes.azucar, cantidad:200},
          { nombre: ingredientes.manteca, cantidad:200},
          { nombre: ingredientes.esenciaVainilla, cantidad:10},
          { nombre: ingredientes.sal, cantidad:5},
          { nombre: ingredientes.dulcemenmbrillo, cantidad:200},
        
        ]
    },
    {
        nombre: postres.brownie,
        ingredientes: [{
            nombre: ingredientes.manteca, cantidad:100},
          { nombre: ingredientes.chocolate, cantidad:150},
          { nombre: ingredientes.huevo, cantidad:2},
          { nombre: ingredientes.azucar, cantidad:200},
          { nombre: ingredientes.nueces, cantidad:250},
          { nombre: ingredientes.harina, cantidad:100},
        
        ]
    },
    {
        nombre: postres.tartaDeFrutilla,
        ingredientes: [{
            nombre: ingredientes.harina0000, cantidad:250},
          { nombre: ingredientes.manteca, cantidad:100},
          { nombre: ingredientes.esenciaVainilla, cantidad:5},
          { nombre: ingredientes.azucar, cantidad:135},
          { nombre: ingredientes.huevo, cantidad:3},
          { nombre: ingredientes.leche, cantidad:250},
          { nombre: ingredientes.azucar, cantidad:55},
          { nombre: ingredientes.maicena, cantidad:20},
          { nombre: ingredientes.cremaDeLeche, cantidad:250},
          { nombre: ingredientes.azucar, cantidad:10},
          { nombre: ingredientes.frutilla, cantidad:500},
          { nombre: ingredientes.gelatinaFrutilla, cantidad:30},
        
        ]
    }

]




const calcularCostoPostre = (nombrePostres) =>{
    let costoTotal = 0;
    const postres = listaPostres.find(postres => postres.nombre === nombrePostres);
    postres.ingredientes.forEach(ingredientesPostres =>
    {
    const ingredientes = listaIngredientes.find(ingredientes => ingredientes.nombre === ingredientesPostres.nombre);
    const costoIngrediente = ingredientes.precio*ingredientesPostres.cantidad;
    
    costoTotal = costoTotal + costoIngrediente;
    })
return costoTotal;
}


    const costoTiramisu = calcularCostoPostre(postres.tiramisu);
    console.log(costoTiramisu);

 /*    const costoChocotorta = calcularCostoPostre(postres.chocotorta);
    console.log(costoChocotorta);

    const costoLemonPie = calcularCostoPostre(postres.lemonPie);
    console.log(costoLemonPie);

    const costoPastaFrola = calcularCostoPostre(postres.pastafrola);
    console.log(costoPastaFrola);

    const costoBrownie = calcularCostoPostre(postres.brownie);
    console.log(costoBrownie);

    const costoTartaDeFrutilla = calcularCostoPostre(postres.tartaDeFrutilla);
    console.log(costoTartaDeFrutilla); */

    
