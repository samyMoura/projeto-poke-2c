const Viacep = () => {

    return (
        <div className="ViaCep">
            <h1>ViaCep</h1>
            <input type="text"
            classname="cep"
            placeholder="00000-000" />
            <button onClick={()=>alert('oi')}>
                Buscar
            </button>
        </div>
    )
}

export default ViaCep