import './App.css';
import { useState } from 'react'

function App() {

  // variables
  const [daysSimulation, setDaysSimulation] = useState(7); // Cantidad de dias simulados
  // const [vpArray, setVpArray] = useState([]); // Array con las ventas pérdidas
  const [arrayData, setArrayData] = useState([])
  const [repositionMon, setRepositionMon] = useState(40)
  const [repositionThrSat, setRepositionThrSat] = useState(30)

  const [arrayReplicas, setArrayReplicas] = useState([])
  const [intervaloDeConfianzaTpvp, setIntervaloDeConfianzaTpvp] = useState([])
  const [intervaloDeConfianzaTcvp, setIntervaloDeConfianzaTcvp] = useState([])
  const [intervaloDeConfianzaCtcp, setIntervaloDeConfianzaCtcp] = useState([])
  const [intervaloDeConfianzaPv, setIntervaloDeConfianzaPv] = useState([])


  const [dataResult, setDataResult] = useState(null)

  
  function getDataSimulation() {
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

    function generateCA(day) {
    
      let promVP = 0
      if (vpArray.length) {
        for (let i = 0; i < vpArray.length; i++) {
          promVP += vpArray[i]
        }
    
        promVP = Math.round(promVP/vpArray.length)
        // console.log(`El promedio de ventas perdidas es de ${promVP}`)
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
      // console.log(`ESTE ES EL ARREGLO DE VENTAS PERDIDAS`, vpArray);

      // Paso 2 (D = D + 1)
      d++

      // console.log(`Hoy es día ${t} ${daysOfWeek[d]}`)

      // Paso 3 (Ver si es el día que vence alguna compra de pan)
      switch (t) {
        case vpl:
          // console.log("Vencío tu pan del lunes")
          // Paso 3.1 -- Ver si el pan vendido desde el lunes es mayor o igual a la cantidad adquirida el lunes
          if (!pvl >= pl) { 
            // Paso 3.1.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - ( pl - pvl > 0? pl - pvl : 0 )
          }
        break;
        case vpj:
          // console.log("Vencío tu pan del jueves")
          // Paso 3.2 -- Ver si el pan vendido desde el jueves es mayor o igual a la cantidad adquirida el jueves
          if (!pvj >= pj) { 
            // Paso 3.2.1 -- Restar el pan vencido de la compra del lunes al stock actual
            st = st - (pj - pvj > 0? pj - pvj : 0)
          }
          
        break;
        case vps:
          // console.log("Vencío tu pan del sábado")
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
        // console.log("Hoy se compra paaaaaaaaaaan")

        // Paso 5 (Generar CA)
        ca = generateCA(d)

        // console.log("CA GENERADOOOOOOO", ca);
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
      // console.log(`hoy se vendió ${vd} Kg de pan`);

      // Paso 10 (Comprobar si la venta diaria es menor al stock)
      if (vd <= st) {
        // Paso 10.1.1 (Al stock le resto el pan vendido)
        st -= vd

        // Paso 10.1.2 (Al pan vendido le sumo la venta diaria)
        pv += vd
      } else {
        // Paso 10.2.1 (guardamos el valor de la venta perdida en nuestro array)
        vp = vd - st
        
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
      
      // console.log('--------------------------------')
      // console.log('vpArray', vpArray)
      // console.log('--------------------------------')

    }


    // Final step (Show results)
    // console.log(`El costo total de compra de pan es: $${ctcp}`)
    // console.log(`El total de pan vendido es: ${pv} Kg`)
    // console.log(`El total de pan perdido es: ${tpvp} Kg`)
    // console.log(`El costo total de venta pérdida es: $${tcvp}`)
    // console.log(`El costo de búsqueda total: $${cbp}`)

    const dataResult = {
      ctcp: ctcp,
      pv: pv,
      tpvp: tpvp,
      tcvp: tcvp,
      cbp: cbp,
    }
    setDataResult(dataResult)

    setArrayData(auxArray)

    return dataResult
  }



  function getVariosResults(amount = 50000) {
    let arrayResults = []
    for (let i = 0; i < amount; i++) {
      arrayResults.push(getDataSimulation())
    }
    setArrayReplicas(arrayResults)

    console.log(arrayResults)
  }
  
  function getIntervaloConfianza() {
    // promedio de replicas
    let avgTpvp = 0
    let avgTcvp = 0
    let avgCtcp = 0
    let avgPv = 0
    let r = arrayReplicas.length

    for (let i = 0; i < r; i++) {
      avgTpvp += arrayReplicas[i].tpvp
      avgTcvp += arrayReplicas[i].tcvp
      avgCtcp += arrayReplicas[i].ctcp
      avgPv += arrayReplicas[i].pv
    }

    avgTpvp = avgTpvp / r
    avgTcvp = avgTcvp / r
    avgCtcp = avgCtcp / r
    avgPv = avgPv / r


    // calculando (x - avr(x))^2
    let auxTpvp = 0
    let auxTcvp = 0
    let auxCtcp = 0
    let auxPv = 0
    for (let i = 0; i < r; i++) {
      auxTpvp += Math.pow(arrayReplicas[i].tpvp - avgTpvp, 2)
      auxTcvp += Math.pow(arrayReplicas[i].tcvp - avgTcvp, 2)
      auxCtcp += Math.pow(arrayReplicas[i].ctcp - avgCtcp, 2)
      auxPv += Math.pow(arrayReplicas[i].pv - avgPv, 2)
    }


    // desviación 
    let s_tpvp = Math.sqrt((1 / (r - 1)) * auxTpvp)
    let s_tcvp = Math.sqrt((1 / (r - 1)) * auxTcvp)
    let s_ctcp = Math.sqrt((1 / (r - 1)) * auxCtcp)
    let s_pv = Math.sqrt((1 / (r - 1)) * auxPv)

    let intervalo_tpvp = []
    let intervalo_tcvp = []
    let intervalo_ctcp = []
    let intervalo_pv = []

    let interInf1 = avgTpvp - (s_tpvp / Math.sqrt(r * 0.05))
    let interSup1 = avgTpvp + (s_tpvp / Math.sqrt(r * 0.05))

    let interInf2 = avgTcvp - (s_tcvp / Math.sqrt(r * 0.05))
    let interSup2 = avgTcvp + (s_tcvp / Math.sqrt(r * 0.05))

    let interInf3 = avgCtcp - (s_ctcp / Math.sqrt(r * 0.05))
    let interSup3 = avgCtcp + (s_ctcp / Math.sqrt(r * 0.05))

    let interInf4 = avgPv - (s_pv / Math.sqrt(r * 0.05))
    let interSup4 = avgPv + (s_pv / Math.sqrt(r * 0.05))  



    intervalo_tpvp.push(interInf1)
    intervalo_tpvp.push(interSup1)

    intervalo_tcvp.push(interInf2)
    intervalo_tcvp.push(interSup2)

    intervalo_ctcp.push(interInf3)
    intervalo_ctcp.push(interSup3)

    intervalo_pv.push(interInf4)
    intervalo_pv.push(interSup4)

    setIntervaloDeConfianzaTpvp(intervalo_tpvp)
    setIntervaloDeConfianzaTcvp(intervalo_tcvp)
    setIntervaloDeConfianzaCtcp(intervalo_ctcp)
    setIntervaloDeConfianzaPv(intervalo_pv)

    console.log(intervalo_tpvp)
    console.log(intervalo_tcvp)
    console.log(intervalo_ctcp)
    console.log(intervalo_pv)
  }




  return (
    <div className="App container">
      <h1 className="mt-5">TPI2 - Simulación</h1>
      
      <div className="row d-flex justify-content-center">
        <h4>Datos de entrada</h4>

        <div className="col-4">
          <div className="input-group">
            <span className="input-group-text">Días de la simulación</span>
            <input type="number" className="form-control" value={daysSimulation} onChange={(e) => setDaysSimulation(e.target.value)} min="1" />
          </div>
        </div>

      </div>

      <div className="row d-flex justify-content-center mt-4">

        <div className="col-4">
          <div className="input-group">
            <span className="input-group-text">Pan a reponer los Lunes</span>
            <input type="number" className="form-control" onChange={(e) => setRepositionMon(Number(e.target.value))} value={repositionMon} />
          </div>
        </div>
        <div className="col-4">
          <div className="input-group">
            <span className="input-group-text">Pan a reponer los Jueves y Sábados</span>
            <input type="number" className="form-control" onChange={(e) => setRepositionThrSat(Number(e.target.value))} value={repositionThrSat} />
          </div>
        </div>

      </div>


      <div className="d-flex p-2 justify-content-center mb-3 mt-3">
        <input type="button" className="btn btn-primary mx-2" value="Realizar una corrida" onClick={ getDataSimulation } />
        <input type="button" className="btn btn-primary mx-2" value="Realizar replicas" onClick={ () => getVariosResults() } />
      </div>

    

      {arrayReplicas.length?
        <div className="container ic-container" >
          <h4 className="mt-2">Intervalos de confianza</h4>
          <input type="button" className="btn btn-success m-2" value="Obtener intervalos de confianza" onClick={ () => getIntervaloConfianza() } />

          {intervaloDeConfianzaTpvp.length?
            <>
              <div className="p-2">
                <span className="alpha-aclaration">Alpha utilizado: 0.05</span>
                
                <div className="m-2">
                  <div><b>TPVP (Kg):</b></div>
                  <div>{ `IC: [${(intervaloDeConfianzaTpvp[0]).toFixed(4)} - ${(intervaloDeConfianzaTpvp[1]).toFixed(4)}]` }</div>
                  <div>{ `Media: ${((intervaloDeConfianzaTpvp[1] + intervaloDeConfianzaTpvp[0]) / 2).toFixed(4)}` }</div>
                  <div>{ `Amplitud del IC: ${(intervaloDeConfianzaTpvp[1] - intervaloDeConfianzaTpvp[0]).toFixed(4)}` }</div>
                </div>
                <div className="m-2">
                  <div><b>PV (Kg):</b></div>
                  <div>{ `IC: [${(intervaloDeConfianzaPv[0]).toFixed(4)} - ${(intervaloDeConfianzaPv[1]).toFixed(4)}]`}</div>
                  <div>{ `Media: ${((intervaloDeConfianzaPv[1] + intervaloDeConfianzaPv[0]) / 2 ).toFixed(4)}` }</div>
                  <div>{ `Amplitud del IC: ${(intervaloDeConfianzaPv[1] - intervaloDeConfianzaPv[0]).toFixed(4)}` }</div>
                </div>
                <div className="m-2">
                  <div><b>TCVP ($):</b></div>
                  <div>{ `IC: [${(intervaloDeConfianzaTcvp[0]).toFixed(4)} - ${(intervaloDeConfianzaTcvp[1]).toFixed(4)}]`}</div>
                  <div>{ `Media: ${((intervaloDeConfianzaTcvp[1] + intervaloDeConfianzaTcvp[0]) / 2 ).toFixed(4)}` }</div>
                  <div>{ `Amplitud del IC: ${(intervaloDeConfianzaTcvp[1] - intervaloDeConfianzaTcvp[0]).toFixed(4)}` }</div>
                </div>
                <div className="m-2">
                  <div><b>CTCP ($):</b></div>
                  <div>{ `IC: [${(intervaloDeConfianzaCtcp[0]).toFixed(4)} - ${(intervaloDeConfianzaCtcp[1]).toFixed(4)}]`}</div>
                  <div>{ `Media: ${((intervaloDeConfianzaCtcp[1] + intervaloDeConfianzaCtcp[0]) / 2 ).toFixed(4)}` }</div>
                  <div>{ `Amplitud del IC: ${(intervaloDeConfianzaCtcp[1] - intervaloDeConfianzaCtcp[0]).toFixed(4)}` }</div>
                </div>

              </div>
            </>
            :
            <></>
          }
        </div>
        :
        <></>
      }
      <div className="mt-4">

        


      </div>

        {dataResult? 
          <div className="result-container">
            <div>
              <h4>Resultados de la última réplica</h4>
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
          </div>
          :
          <></>
        }
      

        
    </div>
  );
}

export default App;
