import { Flex } from '@chakra-ui/layout';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css'
import { withSRRGuest } from '../utils/withSRRGuest';


export default function Home() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const { signIn } = useContext(AuthContext);

 async function handleSubmit(event: FormEvent) {
  event.preventDefault();

   const data = {
     email,
     password,
   }
   await signIn(data);
 }

  return (
    <Flex justify='center' mt='20rem' >
      <form onSubmit={handleSubmit} className={styles.container}>
      <Flex direction="column">
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </Flex>
      </form>
   </Flex>
  )
}

export const getServerSideProps = withSRRGuest(async (ctx) =>{
  return {
    props: {}
  }
});