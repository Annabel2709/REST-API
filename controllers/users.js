import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
}

export const createUser = (req, res) => {
  const user = req.body;

users.push({...user, id: uuidv4() });

 res.send(`User with the name ${user.bookTitle} added to the database!`);
}


export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((book) => book.id !== id )

  res.send(`Book with the id ${id} deleted from the database!`);
}
 export const updateUser = (req, res) => {
  const { id } = req.params;

  const {bookTitle, authorName, numberOfPages, price } = req.body;

  const user = users.find((user) => user.id === id);

  if(bookTitle) {user.bookTitle = bookTitle; }
  if(authorName) {
    user.authorName = authorName; }
    if(numberOfPages) {
      user.numberOfPages = numberOfPages;}
      if(price) {
        user.price = price;}

      res.send(`User with the id {id}has been updated`);  
}