import Swal from 'sweetalert2'

Swal.fire({
    icon: 'info',
    title: 'Cargando',
    text: 'Aguarde 3 segundos ya cargaran los productos',
    timer:3000,
    allowOutsideClick:false,
    allowEscapeKey:false,
    allowEnterKey:false,
    showConfirmButton:false,
  })

 export default alert