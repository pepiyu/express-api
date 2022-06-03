

const create = async (model, data) =>
await new model({ ...data })
  .save()
  .then(body => ({
    body,
    status: 201,
  }))
  .catch(err => ({
    body: {
      error: err.message
    },
    status: 500,
  }));


const getAll = async (model, filter) => {
const list = await model.find(filter ? filter : {});
const body = await JSON.parse(await JSON.stringify(list));
return { status: 200, body };
}


const getOrFind = async promise => await promise
.then(body => {
  if (body === null) throw new Error('Not found');
  return ({
    body,
    status: 200,
  })
})
.catch((err) => ({
  body: {
    error: err.message
  },
  status: 404,
}));


const getById = async (model, id) =>
await getOrFind(model.findById(id))


const putById = async (model, id, payload) =>
await getOrFind(model.findByIdAndUpdate(id, payload, {new: true}))


const deleteById = async (model, id) =>
await model.deleteOne({ _id: id })
  .then(() => ({
    status: 200,
    body: {
      message: 'Deleted!',
    }
  }));

module.exports = {
create,
getAll,
getById,
putById,
deleteById
};
