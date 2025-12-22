import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";

const Layout = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 min-h-screen'>
      <h1 className='text-3xl font-bold underline'>QrCodeGenerator</h1>
      <QrCodeGenerator />
    </div>
  );
};

export default Layout;
