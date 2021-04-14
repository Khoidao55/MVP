console.log(
{
  room_id: "507f191e810c19729de860ea",
  userOneID: "342654e810c76564de544ea",
  userTwoID: "654f191e232c15429de855ea",
  messages: {
    {
      senderID: "342654e810c76564de544ea",
      body: "Hey this is a text from lizardlover69!",
      timestamp: "date here"
    },
    {
      senderID: "654f191e232c15429de855ea",
      body: "Hey this is a text from donkeylover123!",
      timestamp: "date here"
    }
  }
}

//countryID uses the country's alpha-2 code
{
  userID: "342654e810c76564de544ea",
  username: "lizardlover69",
  email: "lizardassociation@inquiry.com",
  bio: "I've been harrassed by donkeys and this needs to stop!",
  country_code: 'US',
  pendingConnections: [
    {
      userID: "654f191e232c15429de855ea",
      username: 'donkeylover123'
    }
  ],
  rooms: {
    "507f191e810c19729de860ea": {
      user_id: "555f191e2121crre29def43435ea",
      name: "donkeyhater69",
      bio: "I hate donkeys with a passion, will connect to anyone similar",
      country: "UK",
    },
    ...
  }
}