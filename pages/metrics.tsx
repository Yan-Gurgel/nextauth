import { setupAPIClient } from "../services/api";
import { withSRRRAuth } from "../utils/withSRRAuth";


export default function Metrics(){
  return (
    <>
    <h1>Metrics</h1> 
    </>
  );
}

export const getServerSideProps = withSRRRAuth(async(ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list3'],
  roles: ['administrator'],
})
