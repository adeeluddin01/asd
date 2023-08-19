import { getSession } from "next-auth/react";

function profile() {
  return (
    <div>
       Profile
    </div>
  );
}
export default profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "./signin",
        permanent: false
      }
    };
  }
  return {
    props: {
  session
    }
  };
}
