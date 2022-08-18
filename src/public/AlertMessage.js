import { toast } from "react-toastify";

const AlertMessage = (type, message, id = 9) => {
  switch (type) {
    case "success":
      toast.success(message, {
        toastId: id,
      });
      break;
    case "warning":
      toast.warn(message, {
        toastId: id,
      });
      break;
    case "info":
      toast.info(message, {
        toastId: id,
      });
      break;
    case "error":
      toast.error(message, {
        toastId: id,
      });
      break;
    default:
      toast(message, {
        toastId: id,
      });
  }
};

export default AlertMessage;
