import './App.css';
import { useState } from 'react'

function App() {

  // variables
  const [daysSimulation, setDaysSimulation] = useState(0);
  
  function generateCA() {
    let aux = Math.random()

    if (aux >= 0 && aux <= 0.053) return 11
    if (aux >= 0.054 && aux <= 0.14) return 12
    if (aux >= 0.141 && aux <= 0.249) return 13
    if (aux >= 0.25 && aux <= 0.412) return 14
    if (aux >= 0.413 && aux <= 0.564) return 15
    if (aux >= 0.565 && aux <= 0.738) return 16
    if (aux >= 0.739 && aux <= 0.858) return 17
    if (aux >= 0.859 && aux <= 0.923) return 18
    if (aux >= 0.924 && aux <= 0.977) return 19
    if (aux >= 0.978 && aux <= 0.999) return 20
  }


  function getDataSimulation() {
    // Inicialización de variables

    let d = 0 // día de la semana, va de 1 a 7

    let vpl = 3 // Venc. pan del lunes
    let vpj = 7 // Venc. pan del jueves
    let vps = 10 // Venc. pan del sábado

    let pl = 0 // pan del lunes
    let pj = 0 // pan del jueves
    let ps = 0 // pan del sábado

    let pvl = 0 // pan vendido desde el lunes
    let pvj = 0 // pan vendido desde el jueves
    let pvs = 0 // pan vendido desde el sábado

    let cbp = 0 // costo de búsqueda de pan
    let ccp = 0 // costo de compra de pan

    const α1 = 650  // Gasto fijo por buscar pan (Gasoil)
    const α2 = 68   // Costo de kg de pan

    let ca = 0

    let st = 45

    const dp = [1, 4, 6]

    const daysOfWeek = {
      1: "Lunes",
      2: "Martes",
      3: "Miércoles",
      4: "Jueves",
      5: "Viernes",
      6: "Sábado",
      7: "Domingo"
    }

    
    // Paso 1 (T = T + 1)
    for (let t = 1; t <= daysSimulation; t++) {

      // Paso 2 (D = D + 1)
      d++

      console.log(`día ${t} de ${daysSimulation}`)

      console.log(`Hoy es ${daysOfWeek[d]}`)

      // Paso 3 (Ver si es el día que vence alguna compra de pan)
      switch (t) {
        case vpl:
          console.log("Vencío tu pan del lunes")
          // Paso 3.1 -- Ver si el pan vendido desde el lunes es mayor o igual a la cantidad adquirida el lunes
          if (!pvl >= pl) { 
            // Paso 3.1.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - (pl - pvl)
          }
        break;
        case vpj:
          console.log("Vencío tu pan del jueves")
          // Paso 3.2 -- Ver si el pan vendido desde el jueves es mayor o igual a la cantidad adquirida el jueves
          if (!pvj >= pj) { 
            // Paso 3.2.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - (pj - pvj)
          }
          
        break;
        case vps:
          console.log("Vencío tu pan del sábado")
          // Paso 3.3 -- Ver si el pan vendido desde el sábado es mayor o igual a la cantidad adquirida el sábado
          if (!pvs >= ps) { 
            // Paso 3.3.1 -- Restar el pan vencido de la compra del sábado al stock actual
            st = st - (ps - pvs)
          }
        break;

        default:
        break;
      }

      // Paso 4 (DP includes D)
      if (dp.includes(d)) {
        console.log("Hoy se compra paaaaaaaaaaan")

        // Paso 5 (Generar CA)
        ca = generateCA()

        // Paso 6 -- Ver que día de compra es
        switch (d) {
          // lunes
          case 1:
            // Paso 6.1.1
            vpl = t + 3
            // Paso 6.1.2
            pl = ca
            // Paso 6.1.3
            pvl = 0
            // Paso 6.1.4
            st = st + pl

          break;
          // jueves
          case 4:
            // Paso 6.2.1
            vpj = t + 3
            // Paso 6.2.2
            pj = ca
            // Paso 6.2.3
            pvj = 0
            // Paso 6.2.4
            st = st + pj
            
          break;
          // sabado
          case 6:
            // Paso 6.3.1
            vps = t + 3
            // Paso 6.3.2
            ps = ca
            // Paso 6.3.3
            pvs = 0
            // Paso 6.3.4
            st = st + ps
            
          break;
        
          default:
          break;
        }

      }

      // Paso 7 (Suma el costo de búsqueda (α1) al costo de busqueda total (cbp))
      cbp = cbp + α1

      // Paso 8 (Calcula el costo de la compra actual)
      ccp = ca*α2



      if (d >= 7) {
        d = 0
      }

    }

  }


  // t va a ser manejado por el ciclo for


  return (
    <div className="App">
      <h1>VAMOS CON LA PROMO</h1>
      <input type="number" value={daysSimulation} onChange={(e) => setDaysSimulation(e.target.value)} />
    

      <input type="button" value="Realizar simulación" onClick={ getDataSimulation } />
      <input type="button" value="Generar Ventas" onClick={ generateCA } />
    </div>
  );
}

export default App;
