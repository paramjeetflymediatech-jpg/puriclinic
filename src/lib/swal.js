import Swal from 'sweetalert2';

const CustomSwal = Swal.mixin({
  customClass: {
    confirmButton: 'swal-confirm-btn',
    cancelButton: 'swal-cancel-btn',
    popup: 'swal-popup-custom'
  },
  buttonsStyling: true,
  confirmButtonColor: '#EA6490', // Pink
  cancelButtonColor: '#4CA6AE',  // Teal
  heightAuto: false, // Prevents layout shifts in Next.js
});

export default CustomSwal;
