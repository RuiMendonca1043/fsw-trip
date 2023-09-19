import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-5 items-center justify-center">
      <Image src="/logo.png" alt="logo" width={133} height={23} />
      <p className="text-xs font-semibold text-primaryDarker">
        Todos os direitos reservados
      </p>
    </div>
  );
};

export default Footer;
