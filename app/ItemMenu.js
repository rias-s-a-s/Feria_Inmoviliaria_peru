import Link from "next/link";

const ItemMenu = ({ children, ruta, setIsOpen }) => {
  return (
    <Link href={`${ruta}`}>
      <li
        onClick={(e) => {
          e.preventDefault();

          setIsOpen(false);
        }}
        className="cursor-pointer mx-3 my-6 md:mx-1 lg:mx-3"
      >
        <div className="uppercase md:text-base lg:text-xl">{children}</div>
      </li>
    </Link>
  );
};

export default ItemMenu;
