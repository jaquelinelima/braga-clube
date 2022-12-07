import swal from 'sweetalert';
import Api from './api'

export default{
    async registerNewUser(newUser){
        try{
            const response = await Api().post('/registro', newUser);
            const { token } = response.data;

            if (token){
                localStorage.setItem('jwt', token);
                swal({
                    title: 'Excelente!',
                    text: 'Usuario(a) cadastrado(a) com sucesso!',
                    icon: 'success',
                }); 
            }
        }catch(error){
            swal({
                text: 'Erro ao criar cadastro.',
                icon: 'error',
            }); 
        }
    }

}