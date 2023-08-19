import { signOut } from "next-auth/react";
import Link from "next/link";
function Header(){
    return <>
    
   <Link href="./signin">Logoin</Link>
    <button onClick={signOut}>Logout</button>
    
    
    </>
    }
    export default Header; 
    // export async function getServerSideProps({ req }) {
    //     const session = await getSession({ req });
    //     if (session) {
    //       return {
            
    //       }
          
    //     }
    //     return {
    //       props: {
    //     session
    //       }
    //     };
    //   }