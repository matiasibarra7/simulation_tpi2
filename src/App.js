import './App.css';
import { useState } from 'react'

function App() {

  // variables
  const [daysSimulation, setDaysSimulation] = useState(7); // Cantidad de dias simulados
  // const [vpArray, setVpArray] = useState([]); // Array con las ventas pérdidas
  const [arrayData, setArrayData] = useState([])
  const [repositionMon, setRepositionMon] = useState(40)
  const [repositionThrSat, setRepositionThrSat] = useState(30)

  const [dataResult, setDataResult] = useState(null)

  let auxArray = []
  
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
  const α3 = 60   // Costo de pérdida de pan

  let ca = 0

  let vpArray = [] // Array con las ventas pérdidas

  let vd = 0 // Venta diaria
  let pv = 0 // Pan vendido
  let cvp = 0 // Costo de venta pérdida
  let vp = 0 // Venta pérdida
  

  let ctcp = 40 * α2 // Costo total de compra de pan
  let tcvp = 0 // Total de costo de venta pérdido
  let tpvp = 0 // Total KG pan de venta pérdido
  

  let st = 40

  const dp = [1, 4, 6]

  const daysOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    0: "Domingo"
  }

  function getDataSimulation() {
    function generateCA(day) {
    
      let promVP = 0
      if (vpArray.length) {
        for (let i = 0; i < vpArray.length; i++) {
          promVP += vpArray[i]
        }
    
        promVP = Math.round(promVP/vpArray.length)
        console.log(`El promedio de ventas perdidas es de ${promVP}`)
      }
  
      let base
      day === 1? base = repositionMon : base = repositionThrSat
  
      let extra = Math.round(promVP/2) - st
      

      if (base + extra > 0) {
        return base + extra
      } else {
        return 0
      }

    }

    function generateVD() {
      let aux = Math.random()
  
      if (aux >= 0 && aux < 0.054) return 11
      if (aux >= 0.054 && aux < 0.14) return 12
      if (aux >= 0.14 && aux < 0.249) return 13
      if (aux >= 0.249 && aux < 0.412) return 14
      if (aux >= 0.412 && aux < 0.564) return 15
      if (aux >= 0.564 && aux < 0.738) return 16
      if (aux >= 0.738 && aux < 0.858) return 17
      if (aux >= 0.858 && aux < 0.923) return 18
      if (aux >= 0.923 && aux < 0.977) return 19
      if (aux >= 0.977 && aux < 1) return 20
    }



    
    // Paso 1 (T = T + 1)
    for (let t = 1; t <= daysSimulation; t++) {
      console.log(`ESTE ES EL ARREGLO DE VENTAS PERDIDAS`, vpArray);

      // Paso 2 (D = D + 1)
      d++

      console.log(`Hoy es día ${t} ${daysOfWeek[d]}`)

      // Paso 3 (Ver si es el día que vence alguna compra de pan)
      switch (t) {
        case vpl:
          console.log("Vencío tu pan del lunes")
          // Paso 3.1 -- Ver si el pan vendido desde el lunes es mayor o igual a la cantidad adquirida el lunes
          if (!pvl >= pl) { 
            // Paso 3.1.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - ( pl - pvl > 0? pl - pvl : 0 )
          }
        break;
        case vpj:
          console.log("Vencío tu pan del jueves")
          // Paso 3.2 -- Ver si el pan vendido desde el jueves es mayor o igual a la cantidad adquirida el jueves
          if (!pvj >= pj) { 
            // Paso 3.2.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - (pj - pvj > 0? pj - pvj : 0)
          }
          
        break;
        case vps:
          console.log("Vencío tu pan del sábado")
          // Paso 3.3 -- Ver si el pan vendido desde el sábado es mayor o igual a la cantidad adquirida el sábado
          if (!pvs >= ps) { 
            // Paso 3.3.1 -- Restar el pan vencido de la compra del sábado al stock actual
            st = st - (ps - pvs > 0? ps - pvs : 0)
          }
        break;

        default:
        break;
      }

      // Paso 4 (DP includes D)
      if (dp.includes(d)) {
        console.log("Hoy se compra paaaaaaaaaaan")

        // Paso 5 (Generar CA)
        ca = generateCA(d)

        console.log("CA GENERADOOOOOOO", ca);
        if (ca > 0) {
          // Paso x (Calcula el total de buscar el producto)
          cbp = cbp + α1

          // Paso x (Calcula el costo de la compra actual)
          ccp = ca*α2

          // Paso x (Acumulamos el costo total de compra de pan)
          ctcp += ccp

        }

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




      // Paso 9 (Generar la venta diaria)
      vd = generateVD()
      console.log(`hoy se vendió ${vd} Kg de pan`);

      // Paso 10 (Comprobar si la venta diaria es menor al stock)
      if (vd <= st) {
        // Paso 10.1.1 (Al stock le resto el pan vendido)
        st -= vd

        // Paso 10.1.2 (Al pan vendido le sumo la venta diaria)
        pv += vd
      } else {
        // Paso 10.2.1 (guardamos el valor de la venta perdida en nuestro array)
        vp = vd - st
        console.log("st: ", st);
        vpArray.push(vp)

        // Paso 10.2.2 (Calcular el costo de venta pérdido)
        cvp += vp * α3

        // Paso 10.2.3 (Vendemos el pan que nos queda)
        pv += st

        // Paso 10.2.4 (Vaciamos el stock)
        st = 0

        // TOTAL DE VENTAS PERDIDAS EN KG
        tpvp += vp

        // Paso x (Acumulamos el total de costo de venta perdido)
        tcvp += cvp
      }

      // // Paso 12 (Acumulamos el total de pan vendido)
      // tpv += pv



      // Paso 14 (Acumulamos la cantidad de pan vendido desde el lunes)
      pvl += pv

      // Paso 15 (Acumulamos la cantidad de pan vendido desde el jueves)
      pvj += pv

      // Paso 16 (Acumulamos la cantidad de pan vendido desde el sábado)
      pvs += pv
      
      // Paso 17 (Reiniciar la semana si cabe)
      if (d >= 7) {
        d = 0
      }

      

      
      const dataDay = {
        t: t,
        day: daysOfWeek[d],
        vd: vd,
        vpl: vpl,
        vpj: vpj,
        vps: vps,
        vpArray: vpArray,
        ca: ca,
        st: st,
        pl: pl,
        pj: pj,
        ps: ps,
      }

      auxArray.push(dataDay)
      
      console.log('--------------------------------')
      console.log('vpArray', vpArray)
      console.log('--------------------------------')

    }


    // Final step (Show results)
    console.log(`El costo total de compra de pan es: $${ctcp}`)
    console.log(`El total de pan vendido es: ${pv} Kg`)
    console.log(`El total de pan perdido es: ${tpvp} Kg`)
    console.log(`El costo total de venta pérdida es: $${tcvp}`)
    console.log(`El costo de búsqueda total: $${cbp}`)

    const dataResult = {
      ctcp: ctcp,
      pv: pv,
      tpvp: tpvp,
      tcvp: tcvp,
      cbp: cbp,
    }
    setDataResult(dataResult)

    setArrayData(auxArray)
  }


  // t va a ser manejado por el ciclo for


  return (
    <div className="App">
      <h1>TPI2 - Simulación</h1>
      <input type="number" value={daysSimulation} onChange={(e) => setDaysSimulation(e.target.value)} min="1"/>
    

      <input type="button" value="Realizar simulación" onClick={ getDataSimulation } />

      <div style={{margin:"1rem"}}>
        <div>
          <span style={{ margin: "0 1rem" }}>Pan a reponer los Lunes</span>
          <input type="number" onChange={(e) => setRepositionMon(Number(e.target.value))} value={repositionMon} />
        </div>
        <div>
          <span style={{ margin: "0 1rem" }}>Pan a reponer los Jueves y Sábados</span>
          <input type="number" onChange={(e) => setRepositionThrSat(Number(e.target.value))} value={repositionThrSat} />
        </div>
      </div>


      <div className="result-container">
        {dataResult? 
          <>
          <div>
            <div><b>Resultados</b></div>
            <div>El costo total de compra de pan: {dataResult.ctcp}</div>
            <div>Total de pan vendido: {dataResult.pv}</div>
            <div>Total de pan perdido: {dataResult.tpvp}</div>
            <div>Costo total de venta pérdida: {dataResult.tcvp}</div>
            <div>Costo de búsqueda total : {dataResult.cbp}</div>
          </div>


            <table style={{ margin:"1rem auto" }}>
              <thead>
                <tr>
                  <th>Día nro</th>
                  <th>Día de la semana</th>
                  <th>Venta Diaria</th>
                  <th>Pan Lunes</th>
                  <th>Vto. pan Lunes</th>
                  <th>Pan Jueves</th>
                  <th>Vto. pan Jueves</th>
                  <th>Pan Sábado</th>
                  <th>Vto. pan Sábado</th>
                  <th>Stock/Final día</th>
                  <th>Pan comprado hoy</th>
                </tr>
              </thead>
              <tbody>
                { arrayData.length?
                  
                  arrayData.map((el,i) => {
                    return <tr key={i}>
                            <td>{el.t}</td>
                            <td>{el.day}</td>
                            <td>{el.vd}</td>
                            <td>{el.pl}</td>
                            <td>{el.vpl}</td>
                            <td>{el.pj}</td>
                            <td>{el.vpj}</td>
                            <td>{el.ps}</td>
                            <td>{el.vps}</td>
                            <td>{el.st}</td>
                            <td>{el.ca}</td>
                          </tr>
                  })
                  : 
                  <></>
                }
              </tbody>
            </table>
          </>
          
          :
          <></>
        }
      </div>

        
    </div>
  );
}

export default App;
