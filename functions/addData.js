const { createClient } = require("@astrajs/collections")
const ASTRA_DB_ID = '279f10e6-ee6d-4ec0-84dd-77b5411c5fe6'
const ASTRA_DB_REGION='europe-west1'
const ASTRA_DB_USERNAME='aniakusername'
const ASTRA_DB_KEYSPACE='aniakkeyspace'
const ASTRA_DB_PASSWORD='aniakpassword'
const collection = 'tktkposts'

export async function handler(event, context, callback) {
  const astraClient = await createClient({
        astraDatabaseId: ASTRA_DB_ID,
        astraDatabaseRegion: ASTRA_DB_REGION,
        username: ASTRA_DB_USERNAME,
        password: ASTRA_DB_PASSWORD,
      });


      const posts = astraClient
      .namespace(ASTRA_DB_KEYSPACE)
      .collection(collection);

      const data = [
        {
          id: 0,
          name: "Mo Farooq",
          username: "mofarooq32",
          avatar: "https://i.imgur.com/9KYq7VG.png",
          is_followed: true,
          video: "https://i.imgur.com/FTBP02Y.mp4",
          caption: "These ducks are MEGA cute",
          likes: 10,
          comments: 2,
          timestamp: "2019-03-10T09:08:31.020Z",
          button_visible: true
        },
        {
          id: 1,
          name: "Tim Salowski",
          username: "timmytam",
          avatar: "https://i.imgur.com/rWYtZa6.png",
          is_followed: false,
          video: "https://i.imgur.com/1A7AKoF.mp4",
          caption: "When your fries give you attitude #getInMyBelly",
          likes: 12,
          comments: 2,
          timestamp: "2020-03-10T09:08:31.020Z",
          button_visible: true
        },
        {
          id: 2,
          name: "Angela Lee",
          username: "angiecakes",
          avatar: "https://i.imgur.com/eX3hkoc.png",
          is_followed: true,
          video: "https://i.imgur.com/al6MLay.mp4",
          caption: "Happiest of Birthdays my Angel",
          likes: 2,
          comments: 4,
          timestamp: "2020-04-10T09:08:31.020Z",
          button_visible: true
        },
        {
          id: 3,
          name: "Nina Xen",
          username: "nina_lina",
          avatar: "https://i.imgur.com/IigY4Hm.png",
          is_followed: false,
          video: "https://i.imgur.com/Kzvbeup.mp4",
          caption: "The new normal",
          likes: 10,
          comments: 2,
          timestamp: "2020-05-10T09:08:31.020Z",
          button_visible: true
        },
        {
          id: 0,
          name: "Lana Del Mont",
          username: "lana_del_away",
          avatar: "https://i.imgur.com/jONHmE5.png",
          is_followed: true,
          video: "https://i.imgur.com/H9UX0Jm.mp4",
          caption: "Art is for everyone",
          likes: 231,
          comments: 20,
          timestamp: "2020-09-10T09:08:31.020Z",
          button_visible: true
        }
      ]

      try {
        data.forEach(dataItem => posts.create(dataItem.id, dataItem))

        return {
          statusCode: 200,
        };
      } catch (e) {
        console.error(e);
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        };
      }
  };
