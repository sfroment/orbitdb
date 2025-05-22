import { createOrbitDB, Documents, KeyValue } from 'orbitdb'; // Changed to 'orbitdb' to match tsconfig paths

async function main() {
  // These are just example usages, pick some relevant ones from the library
  // You might need to mock IPFS or other dependencies if their actual instances are required for basic type checking.
  // The goal is to check if types are recognized, not to run the code.

  const ipfsMock: any = { libp2p: {} }; // Simple mock for IPFS if needed for type checking

  const orbitdb = await createOrbitDB({ ipfs: ipfsMock });
  console.log('OrbitDB instance created:', orbitdb.id);

  // Example with Documents store - updated to use a more generic 'db' variable
  const db = await orbitdb.open('my-docs', { type: 'documents' });
  console.log('Database opened:', db.address);
  await db.put({ _id: 'hello', value: 'world' });
  const value = await db.get('hello');
  console.log('Retrieved value:', value);
  await db.close();

  // Example with KeyValue store - this part was in the original thought but not in the final test.ts
  // I will stick to the provided example in the prompt.
  // const kv = await orbitdb.open('my-kv', { type: 'keyvalue' });
  // console.log('KeyValue store opened:', kv.address);
  // await kv.put('mykey', 'myvalue');
  // const kvValue = await kv.get('mykey');
  // console.log('Retrieved key-value:', kvValue);
  // await kv.close();

  await orbitdb.stop();
}

main().catch(console.error);
