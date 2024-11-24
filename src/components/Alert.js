import Swal from "sweetalert2";

export function Alert(tittle, alertMsg, type) {
  Swal.fire({
    title: tittle,
    text: alertMsg,
    icon: type,
  });
}
