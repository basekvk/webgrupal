import { FaPhoneAlt } from 'react-icons/fa';

function botonLlamada() {
    return (
        <>
                <h2 style={{textAlign:'center', fontSize: 40}}>SERVICIO 24 HORAS</h2>           
                <a className="boton" href="tel:+34915771849">
                    <FaPhoneAlt /> LLAMANOS
                </a>
            
        </>
    );
}

export default botonLlamada;
