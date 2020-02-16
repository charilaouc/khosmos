import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://167.172.186.130:1337/'
const strapi = new Strapi(apiUrl)

export default strapi;
export { apiUrl }
