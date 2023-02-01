import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://weco:AHw2QIUN0ll7WDzQ@cluster0.xfpldic.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
