import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSRRRAuth } from "../utils/withSRRAuth";

export default function Dashboard(){
  const { user } = useContext(AuthContext)
/*
  const userCanSeeMetrics = useCan({
    //Administrador ou editor podem ver as métricas
    roles: ['administrator', 'editor']
  });
*/

  useEffect(() => {
    api.get('/me').then(response => console.log(response))
    .catch(err => console.log(err));
  }, [])

  return (
    <>
    <h1>Dashboard: {user?.email}</h1>
    {/**Permissão de um tipo de usuario específico 
    { userCanSeeMetrics && <div>Métricas</div> }
    */}
    <Can permissions={['metrics.list']}>
      <div>Métricas</div>
    </Can>
    </>
  );
}

export const getServerSideProps = withSRRRAuth(async(ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  return {
    props: {}
  }
})
