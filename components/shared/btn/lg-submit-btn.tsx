export default function LgSubmitbtnComponent({ title, onClickFunc }: any) {
     return (
          <button onClick={onClickFunc} className="mt-4 font-bold bg-teal-500 hover:bg-teal-600 text-sm text-gray-100 p-2 rounded-lg">{title}</button>
     )
}