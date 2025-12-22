import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [inputChar, setInputChar] = useState("");
  const [resultShowQrCode, setResultShowQrCode] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    setResultShowQrCode(inputChar);
    setInputChar("");
  };

  const handleChange = (e) => {
    setInputChar(e.target.value);
    setResultShowQrCode("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          placeholder="Type text..."
          value={inputChar}
          onChange={handleChange}
          className="border rounded-sm p-2"
          type="text"
        />
        <button
          onClick={handleClick}
          className="border rounded-sm p-2 cursor-pointer hover:gray-600 focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          type="submit"
        >
          Generate
        </button>

        <div className="min-h-70">
          {resultShowQrCode !== "" && (
            <QRCodeSVG size="256" value={resultShowQrCode} />
          )}
        </div>
      </form>
    </div>
  );
};

export default QrCodeGenerator;
