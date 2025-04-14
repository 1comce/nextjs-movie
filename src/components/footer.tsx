export default function Footer() {
  return (
    <footer className='flex flex-col w-full justify-center items-center flex-1 border-t mt-10 px-4'>
      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center sm:gap-x-10 gap-y-2 w-full text-center'>
        <a href='#' className='underline'>
          Hỏi-Đáp
        </a>
        <a href='#' className='underline'>
          Chính sách bảo mật
        </a>
        <a href='#' className='underline'>
          Điều khoản sử dụng
        </a>
        <a href='#' className='underline'>
          Giới thiệu
        </a>
        <a href='#' className='underline'>
          Liên hệ
        </a>
      </div>
      <p className='text-gray-500 mt-4 text-center w-full'>© 2025 MePhim</p>
    </footer>
  );
}
