export default function ProductCardTagComponent({ color, title }: any) {

  return (
    <span className={`${color} rounded-full flex right-4 top-2 z-10 font-bold  items-center w-12 
    h-6 justify-center text-center text-xs absolute text-white`} >
      <a>{title}</a>
    </span>
  );
}