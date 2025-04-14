import Header from "./header";
import Footer from "./footer";
import ScrollTop from "./scrolltop";
export default function RootWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 sm:px-2 text-center md:px-20'>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </main>
  );
}
