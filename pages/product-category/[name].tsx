
export async function getServerSideProps(context: any) {
  const { name } = context.params;

  return { props: { name } };
}


export default function Category({ name }: any) {
  return (<p>this is category : {name}</p>)
}