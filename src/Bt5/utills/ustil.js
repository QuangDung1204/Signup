import Swal from "sweetalert2";

export const confirmDeletion = async () => {
  const result = await Swal.fire({
    title: "Bạn có chắc chắn?",
    text: "Bạn sẽ không thể hoàn tác điều này!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, xóa nó!"
  });

  if (result.isConfirmed) {
    Swal.fire({
      title: "Đã xóa!",
      text: "Sản phẩm đã được xóa khỏi giỏ hàng của bạn.",
      icon: "success"
    });
    return true;
  }
  
  return false;
};
