import classes from './index.module.scss';

function Blockquote() {
    return (
        <div className={classes.area}>
            <p className={classes.desc}>
                Hacemos nuestros los problemas de nuestros clientes orientandolo en todo momento durante el proceso, así pueden obtener los mejores resultados en el menor tiempo posible y con los mejores precios.
            </p>
        </div>
    );
}

export default Blockquote;
