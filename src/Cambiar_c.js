import React from "react";
import "./styles.css";

export default function Cambiar_c() {
  return (
    <div className="Cambiar_c">

     <button className="atras">
            <img
              src="https://1.bp.blogspot.com/-F9j1pPlcOyE/X2D2At5HqOI/AAAAAAAAP4M/Zu55xGCco6s4IkouCzW4Sq7s7BgGBUwugCLcBGAsYHQ/s512/iconfinder_arrow-left-01_186410.png"
              alt=""
              height="15px"
            />
            </button>
            <label className="cambiar">Cambiar contraseña </label>
            
            <div className="contraseña1">Contraseña actual</div>
            <input
            className="Contraseña"
            id="contraseña"
            name="contraseña"
            placeholder="CONTRASEÑA ACTUAL"
          />
          <div>
           <label className="nueva1">Nueva contraseña </label>
            </div>
            
            <input
            className="Nueva"
            id="contraseña"
            name="contraseña"
            placeholder="CONTRASEÑA ACTUAL"
          />

           <div>
           <label className="vuelva1">Vuelva a escribir la 
           contraseña  </label>
            </div>
            
            <input
            className="vuelva"
            id="vuelva"
            name="vuelva"
            placeholder=""
          />
         <div>
          <button className="cambia"> CAMBIAR CONTRASEÑA
            </button>
          </div> 
    </div>
  );
}
