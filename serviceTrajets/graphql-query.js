const axios = require('axios');

async function sendGraphQLQuery() {
  try {
    const response = await axios.post('http://localhost:5000/graphql');

    return response.data;
  } catch (error) {
    console.error('An error occurred while sending the GraphQL query:', error);
    throw error;
  }
}






const fetchTrajets = async () => {
  try {
    const response = await sendGraphQLQuery();
    const trajets = response.data.trajets;
    console.log(trajets);
  } catch (error) {
    console.error('An error occurred while fetching trajets:', error);
  }
};


fetchTrajets();

