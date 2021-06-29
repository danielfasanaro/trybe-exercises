const connection = require('./mongoConnection');
const { ObjectId } = require('mongodb');

const addUser = async ({ firstName, lastName, email, password }) => {
  const db = await connection();
  const result = await db.collection('users').insertOne({ firstName, lastName, email, password });
  const newUser = result.ops[0];

  return newUser;
};

const getUsers = async () => {
  const db = await connection();
  const result = await db.collection('users').find().toArray();

  return result;
};

const getUserById = async (id) => {
  const db = await connection();
  const result = await db.collection('users').findOne({ _id: ObjectId(id) });

  return result;
};

const editUser = async ({id, firstName, lastName, email, password }) => {
  const db = await connection();
  await db.collection('users').updateOne(
    { _id: ObjectId(id) }, { $set: { firstName, lastName, email, password } },
    );
  return { id, firstName, lastName, email };
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  editUser,
};
