import './App.css';

const books = [{title : "The Giver", author : "Lois Lowry", isbn : "0544336267", available : true},
{title : "The Odyssey", author : "Homer", isbn : "9780140268867", available : true},
{title : "Animal Farm", author : "George Orwell", isbn : "9780451526342", available : false},
{title : "To Kill a Mockingbird", author : "Harper Lee", isbn : "0446310786", available : true},]

function Bookshelf() {
  const booklist = books.map(book =>
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td style={{
        backgroundColor: book.available ? 'green' : 'red'
      }}><BuyButton></BuyButton></td>
    </tr>
    );
  return (
    <table className="books">
      <tr>
        <th>Title</th>    
        <th>Author</th>
        <th>ISBN</th>
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
      </header>
    </div>
  );
}

export default App;
