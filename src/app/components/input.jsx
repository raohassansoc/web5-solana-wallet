import Image from "next/image";
const Input = ({icon, label, type}) => {
  return (
    <div className="inputContainer flex items-center mt-1 p-4">
      <div className="inputIcon">
        <Image src={icon} alt="icon" className="w-12" />
      </div>
      <div className="inputs mx-4">
        {/* <label className="block text-gray-700/100"></label> */}
        <input
          type={type}
          placeholder={label}
          className="text-lg border-b-2 border-[#3c3896] mt-1 "
        />
      </div>
    </div>
  );
};

export default Input;
