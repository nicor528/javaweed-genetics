const estilos = {
    borderWidth: '5px',
    boderColor: '#f00',
    padding: '40px',
    borderStyle: 'solid'
}
function Container (){
    return (<div style={estilos}>Hola mundo</div>);
}

export default Container;
/*
function Container(){
    return{
        <div>
            Hola mundo
        </div>
    };
}*/