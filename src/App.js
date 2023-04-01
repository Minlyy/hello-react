import './App.css';
import {supabase} from './supabaseClient'
import { useState } from 'react';


// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    // Update the state
    setMyBooks(books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table className='books'>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

const books = [{item : "The Giver", price : "$9.99", available : true},
{item : "The Odyssey", price : "$4.99", available : true},
{item : "Animal Farm", price : "$20", available : false},
{item : "To Kill a Mockingbird", price : "$8.00", available : true},]

function Bookshelf() {
  const booklist = books.map(book =>
    <tr>
      <td>{book.item}</td>
      <td>{book.price}</td>
      <td style={{
        backgroundColor: book.available ? 'green' : 'red'
      }}><BuyButton></BuyButton></td>
    </tr>
    );
  return (
    <table className="books">
      <tr>
        <th>Title</th>    
        <th>Price</th>
        <th>Available</th>
      </tr>
      {booklist}
    </table>
  )
}

function BuyButton() {
  return (
    <button>Buy</button>
  )
}

function Navbar() {
  return (
    <nav>
      <p className='nav_p'>Books</p>
      <ul className='nav_link'>
        <li>Home</li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <header className="App-header">
        <Bookshelf></Bookshelf>
        <h2>Supabase Books</h2>
        <Library></Library>
      </header>
    </div>
  );
}

export default App;
