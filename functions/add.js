import faker from 'faker'
const { createClient } = require("@astrajs/collections")
let id = faker.random.uuid()

const ASTRA_DB_ID = '279f10e6-ee6d-4ec0-84dd-77b5411c5fe6'
const ASTRA_DB_REGION = 'europe-west1'
const ASTRA_DB_USERNAME = 'aniakusername'
const ASTRA_DB_KEYSPACE = 'aniakkeyspace'
const ASTRA_DB_PASSWORD = 'aniakpassword'

const collection = 'tktkposts'

export async function handler(event, context, callback) {
  const astraClient = await createClient({
        astraDatabaseId: ASTRA_DB_ID,
        astraDatabaseRegion: ASTRA_DB_REGION,
        username: ASTRA_DB_USERNAME,
        password: ASTRA_DB_PASSWORD,
      });

      const users = astraClient.namespace(ASTRA_DB_KEYSPACE).collection(collection)

      try {
        const user = await users.create(id, event.body)

        return {
          statusCode: 200,
          body: JSON.stringify(user),
        };
      } catch (e) {
        console.error(e);
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        };
      }
    };
