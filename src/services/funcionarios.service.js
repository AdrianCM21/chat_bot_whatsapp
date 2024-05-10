import axios from "axios";

export const getFuncionario = async (cedula) => {
    try {
      
        const response = await axios.get('https://datos.hacienda.gov.py:443/odmh-api-v2/rest/api/v2/nomina/cabecera/'+cedula+'?page=1',{headers:{
            Accept: 'application/json'
        }} );
        const data =response.data.results[0]
        return response.data.results.length ?[{body:`*Nombre del funcionario* ${data.nombres} ${data.apellidos}`},{body:`*Descripcion del nivel:* ${data.descripcionNivel}`},{body:`*Descripcion entidad:* ${data.descripcionEntidad}`},{body:`*Tipo personal:* ${data.tipoPersonal}`}]:[{body:'Funcionario no encontrado'}]
       
    } catch (error) {
        console.log('first')
        console.error('siiii este falla',error);
        return 'Lo siento, hubo un problema al buscar una oración. Por favor, inténtalo de nuevo más tarde.';
    }
};
