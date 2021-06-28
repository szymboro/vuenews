// Toast Notification
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export const toastMsg = (message, type = "success") => {
  return createToast(message, {
    type,
    position: "top-right",
    hideProgressBar: false,
    showIcon: false,
    transition: "slide",
    timeout: 5000
  });
};
