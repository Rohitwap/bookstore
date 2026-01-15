import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔥 Generate 100 World Famous Selling Books API (Mock)
const booksApi = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", image: "https://covers.openlibrary.org/b/id/8107896-L.jpg", genre: "Fiction", rating: 4.7, price: 299 },
  { id: 2, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", image: "https://covers.openlibrary.org/b/id/7984916-L.jpg", genre: "Fantasy", rating: 4.8, price: 350 },
  { id: 3, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", image: "https://covers.openlibrary.org/b/id/7984917-L.jpg", genre: "Fantasy", rating: 4.8, price: 350 },
  { id: 4, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", image: "https://covers.openlibrary.org/b/id/7984918-L.jpg", genre: "Fantasy", rating: 4.9, price: 375 },
  { id: 5, title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", image: "https://covers.openlibrary.org/b/id/7984919-L.jpg", genre: "Fantasy", rating: 4.9, price: 399 },

  { id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/8231856-L.jpg", genre: "Fantasy", rating: 4.9, price: 450 },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/6979861-L.jpg", genre: "Fantasy", rating: 4.8, price: 325 },
  { id: 8, title: "Think and Grow Rich", author: "Napoleon Hill", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg", genre: "Self-Help", rating: 4.6, price: 275 },
  { id: 9, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", image: "https://covers.openlibrary.org/b/id/8370221-L.jpg", genre: "Finance", rating: 4.5, price: 299 },
  { id: 10, title: "Atomic Habits", author: "James Clear", image: "https://covers.openlibrary.org/b/id/9255891-L.jpg", genre: "Self-Help", rating: 4.8, price: 399 },

  { id: 11, title: "The Power of Habit", author: "Charles Duhigg", image: "https://covers.openlibrary.org/b/id/8231990-L.jpg", genre: "Psychology", rating: 4.7, price: 350 },
  { id: 12, title: "The Book Thief", author: "Markus Zusak", image: "https://covers.openlibrary.org/b/id/8225265-L.jpg", genre: "Historical Fiction", rating: 4.8, price: 325 },
  { id: 13, title: "The Da Vinci Code", author: "Dan Brown", image: "https://covers.openlibrary.org/b/id/240727-L.jpg", genre: "Thriller", rating: 4.6, price: 375 },
  { id: 14, title: "Angels & Demons", author: "Dan Brown", image: "https://covers.openlibrary.org/b/id/240726-L.jpg", genre: "Thriller", rating: 4.6, price: 375 },
  { id: 15, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://covers.openlibrary.org/b/id/8228691-L.jpg", genre: "Classic", rating: 4.9, price: 299 },

  { id: 16, title: "1984", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/7222245-L.jpg", genre: "Dystopian", rating: 4.8, price: 275 },
  { id: 17, title: "Animal Farm", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/153541-L.jpg", genre: "Dystopian", rating: 4.7, price: 250 },
  { id: 18, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://covers.openlibrary.org/b/id/7352167-L.jpg", genre: "Classic", rating: 4.8, price: 299 },
  { id: 19, title: "Pride and Prejudice", author: "Jane Austen", image: "https://covers.openlibrary.org/b/id/8091016-L.jpg", genre: "Romance", rating: 4.8, price: 275 },
  { id: 20, title: "The Kite Runner", author: "Khaled Hosseini", image: "https://covers.openlibrary.org/b/id/8165266-L.jpg", genre: "Drama", rating: 4.9, price: 325 },

  { id: 21, title: "The Hunger Games", author: "Suzanne Collins", image: "https://covers.openlibrary.org/b/id/6952610-L.jpg", genre: "Dystopian", rating: 4.7, price: 350 },
  { id: 22, title: "Catching Fire", author: "Suzanne Collins", image: "https://covers.openlibrary.org/b/id/6952611-L.jpg", genre: "Dystopian", rating: 4.7, price: 350 },
  { id: 23, title: "Mockingjay", author: "Suzanne Collins", image: "https://covers.openlibrary.org/b/id/6952612-L.jpg", genre: "Dystopian", rating: 4.6, price: 375 },
  { id: 24, title: "Twilight", author: "Stephenie Meyer", image: "https://covers.openlibrary.org/b/id/6979862-L.jpg", genre: "Romance", rating: 4.5, price: 325 },
  { id: 25, title: "New Moon", author: "Stephenie Meyer", image: "https://covers.openlibrary.org/b/id/6979863-L.jpg", genre: "Romance", rating: 4.4, price: 325 },

  { id: 26, title: "The Fault in Our Stars", author: "John Green", image: "https://covers.openlibrary.org/b/id/7260046-L.jpg", genre: "Romance", rating: 4.7, price: 299 },
  { id: 27, title: "Looking for Alaska", author: "John Green", image: "https://covers.openlibrary.org/b/id/7260047-L.jpg", genre: "Romance", rating: 4.6, price: 299 },
  { id: 28, title: "Sapiens", author: "Yuval Noah Harari", image: "https://covers.openlibrary.org/b/id/8167890-L.jpg", genre: "History", rating: 4.8, price: 425 },
  { id: 29, title: "Homo Deus", author: "Yuval Noah Harari", image: "https://covers.openlibrary.org/b/id/8167891-L.jpg", genre: "History", rating: 4.7, price: 450 },
  { id: 30, title: "Ikigai", author: "Hector Garcia", image: "https://covers.openlibrary.org/b/id/8231876-L.jpg", genre: "Self-Help", rating: 4.5, price: 299 },

  { id: 31, title: "The Psychology of Money", author: "Morgan Housel", image: "https://covers.openlibrary.org/b/id/10404123-L.jpg", genre: "Finance", rating: 4.7, price: 375 },
  { id: 32, title: "Deep Work", author: "Cal Newport", image: "https://covers.openlibrary.org/b/id/8278781-L.jpg", genre: "Productivity", rating: 4.8, price: 350 },
  { id: 33, title: "Zero to One", author: "Peter Thiel", image: "https://covers.openlibrary.org/b/id/8370229-L.jpg", genre: "Business", rating: 4.6, price: 399 },
  { id: 34, title: "The Richest Man in Babylon", author: "George S. Clason", image: "https://covers.openlibrary.org/b/id/7222244-L.jpg", genre: "Finance", rating: 4.6, price: 250 },
  { id: 35, title: "Steve Jobs", author: "Walter Isaacson", image: "https://covers.openlibrary.org/b/id/7260028-L.jpg", genre: "Biography", rating: 4.8, price: 499 },

  { id: 36, title: "Elon Musk", author: "Ashlee Vance", image: "https://covers.openlibrary.org/b/id/8370233-L.jpg", genre: "Biography", rating: 4.7, price: 475 },
  { id: 37, title: "Game of Thrones", author: "George R.R. Martin", image: "https://covers.openlibrary.org/b/id/7295234-L.jpg", genre: "Fantasy", rating: 4.8, price: 450 },
  { id: 38, title: "A Clash of Kings", author: "George R.R. Martin", image: "https://covers.openlibrary.org/b/id/7295235-L.jpg", genre: "Fantasy", rating: 4.8, price: 450 },
  { id: 39, title: "The Shining", author: "Stephen King", image: "https://covers.openlibrary.org/b/id/8232581-L.jpg", genre: "Horror", rating: 4.7, price: 350 },
  { id: 40, title: "Dracula", author: "Bram Stoker", image: "https://covers.openlibrary.org/b/id/8085821-L.jpg", genre: "Horror", rating: 4.6, price: 299 },

  { id: 41, title: "Frankenstein", author: "Mary Shelley", image: "https://covers.openlibrary.org/b/id/7984910-L.jpg", genre: "Horror", rating: 4.5, price: 275 },
  { id: 42, title: "The Odyssey", author: "Homer", image: "https://covers.openlibrary.org/b/id/8231871-L.jpg", genre: "Epic", rating: 4.7, price: 325 },
  { id: 43, title: "The Iliad", author: "Homer", image: "https://covers.openlibrary.org/b/id/8231872-L.jpg", genre: "Epic", rating: 4.6, price: 325 },
  { id: 44, title: "Sherlock Holmes", author: "Arthur Conan Doyle", image: "https://covers.openlibrary.org/b/id/8221256-L.jpg", genre: "Mystery", rating: 4.8, price: 299 },
  { id: 45, title: "The Little Prince", author: "Antoine de Saint-Exupéry", image: "https://covers.openlibrary.org/b/id/8225631-L.jpg", genre: "Fable", rating: 4.7, price: 225 },
  { "id": 46, "title": "The Chronicles of Narnia", "author": "C.S. Lewis", "image": "https://covers.openlibrary.org/b/id/6979865-L.jpg" },
  { "id": 47, "title": "The Lion, the Witch and the Wardrobe", "author": "C.S. Lewis", "image": "https://covers.openlibrary.org/b/id/6979866-L.jpg" },
  { "id": 48, "title": "Percy Jackson: The Lightning Thief", "author": "Rick Riordan", "image": "https://covers.openlibrary.org/b/id/6979867-L.jpg" },
  { "id": 49, "title": "Percy Jackson: Sea of Monsters", "author": "Rick Riordan", "image": "https://covers.openlibrary.org/b/id/6979868-L.jpg" },
  { "id": 50, "title": "Divergent", "author": "Veronica Roth", "image": "https://covers.openlibrary.org/b/id/6979869-L.jpg" },

  { "id": 51, "title": "Insurgent", "author": "Veronica Roth", "image": "https://covers.openlibrary.org/b/id/6979870-L.jpg" },
  { "id": 52, "title": "Allegiant", "author": "Veronica Roth", "image": "https://covers.openlibrary.org/b/id/6979871-L.jpg" },
  { "id": 53, "title": "Life of Pi", "author": "Yann Martel", "image": "https://covers.openlibrary.org/b/id/8235146-L.jpg" },
  { "id": 54, "title": "Gone Girl", "author": "Gillian Flynn", "image": "https://covers.openlibrary.org/b/id/7278786-L.jpg" },
  { "id": 55, "title": "The Girl with the Dragon Tattoo", "author": "Stieg Larsson", "image": "https://covers.openlibrary.org/b/id/8235211-L.jpg" },

  { "id": 56, "title": "The Maze Runner", "author": "James Dashner", "image": "https://covers.openlibrary.org/b/id/6979872-L.jpg" },
  { "id": 57, "title": "The Scorch Trials", "author": "James Dashner", "image": "https://covers.openlibrary.org/b/id/6979873-L.jpg" },
  { "id": 58, "title": "The Death Cure", "author": "James Dashner", "image": "https://covers.openlibrary.org/b/id/6979874-L.jpg" },
  { "id": 59, "title": "The Giver", "author": "Lois Lowry", "image": "https://covers.openlibrary.org/b/id/8235129-L.jpg" },
  { "id": 60, "title": "A Wrinkle in Time", "author": "Madeleine L'Engle", "image": "https://covers.openlibrary.org/b/id/8221259-L.jpg" },

  { "id": 61, "title": "Matilda", "author": "Roald Dahl", "image": "https://covers.openlibrary.org/b/id/8225640-L.jpg" },
  { "id": 62, "title": "Charlie and the Chocolate Factory", "author": "Roald Dahl", "image": "https://covers.openlibrary.org/b/id/8225641-L.jpg" },
  { "id": 63, "title": "The Secret Garden", "author": "Frances Hodgson Burnett", "image": "https://covers.openlibrary.org/b/id/8225639-L.jpg" },
  { "id": 64, "title": "Anne of Green Gables", "author": "L.M. Montgomery", "image": "https://covers.openlibrary.org/b/id/8225642-L.jpg" },
  { "id": 65, "title": "Little Women", "author": "Louisa May Alcott", "image": "https://covers.openlibrary.org/b/id/8225643-L.jpg" },

  { "id": 66, "title": "The Old Man and the Sea", "author": "Ernest Hemingway", "image": "https://covers.openlibrary.org/b/id/8225644-L.jpg" },
  { "id": 67, "title": "Moby Dick", "author": "Herman Melville", "image": "https://covers.openlibrary.org/b/id/7222243-L.jpg" },
  { "id": 68, "title": "War and Peace", "author": "Leo Tolstoy", "image": "https://covers.openlibrary.org/b/id/7222242-L.jpg" },
  { "id": 69, "title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "image": "https://covers.openlibrary.org/b/id/7222241-L.jpg" },
  { "id": 70, "title": "The Brothers Karamazov", "author": "Fyodor Dostoevsky", "image": "https://covers.openlibrary.org/b/id/7222240-L.jpg" },

  { "id": 71, "title": "The Alchemist (Illustrated)", "author": "Paulo Coelho", "image": "https://covers.openlibrary.org/b/id/8107897-L.jpg" },
  { "id": 72, "title": "The Monk Who Sold His Ferrari", "author": "Robin Sharma", "image": "https://covers.openlibrary.org/b/id/8231880-L.jpg" },
  { "id": 73, "title": "Who Moved My Cheese?", "author": "Spencer Johnson", "image": "https://covers.openlibrary.org/b/id/8231881-L.jpg" },
  { "id": 74, "title": "The Subtle Art of Not Giving a F*ck", "author": "Mark Manson", "image": "https://covers.openlibrary.org/b/id/8231882-L.jpg" },
  { "id": 75, "title": "Can't Hurt Me", "author": "David Goggins", "image": "https://covers.openlibrary.org/b/id/10404124-L.jpg" },

  { "id": 76, "title": "Think Like a Monk", "author": "Jay Shetty", "image": "https://covers.openlibrary.org/b/id/10404125-L.jpg" },
  { "id": 77, "title": "The 7 Habits of Highly Effective People", "author": "Stephen Covey", "image": "https://covers.openlibrary.org/b/id/8231883-L.jpg" },
  { "id": 78, "title": "How to Win Friends and Influence People", "author": "Dale Carnegie", "image": "https://covers.openlibrary.org/b/id/7222247-L.jpg" },
  { "id": 79, "title": "Man's Search for Meaning", "author": "Viktor Frankl", "image": "https://covers.openlibrary.org/b/id/8231884-L.jpg" },
  { "id": 80, "title": "The Art of War", "author": "Sun Tzu", "image": "https://covers.openlibrary.org/b/id/8231885-L.jpg" },

  { "id": 81, "title": "Pinocchio", "author": "Carlo Collodi", "image": "https://covers.openlibrary.org/b/id/8231886-L.jpg" },
  { "id": 82, "title": "Aladdin and the Wonderful Lamp", "author": "Unknown", "image": "https://covers.openlibrary.org/b/id/8231887-L.jpg" },
  { "id": 83, "title": "Alice's Adventures in Wonderland", "author": "Lewis Carroll", "image": "https://covers.openlibrary.org/b/id/8231888-L.jpg" },
  { "id": 84, "title": "Peter Pan", "author": "J.M. Barrie", "image": "https://covers.openlibrary.org/b/id/8231889-L.jpg" },
  { "id": 85, "title": "The Jungle Book", "author": "Rudyard Kipling", "image": "https://covers.openlibrary.org/b/id/8231890-L.jpg" },

  { "id": 86, "title": "The Little Mermaid", "author": "Hans Christian Andersen", "image": "https://covers.openlibrary.org/b/id/8231891-L.jpg" },
  { "id": 87, "title": "Beauty and the Beast", "author": "Gabrielle-Suzanne Barbot", "image": "https://covers.openlibrary.org/b/id/8231892-L.jpg" },
  { "id": 88, "title": "The Snow Queen", "author": "Hans Christian Andersen", "image": "https://covers.openlibrary.org/b/id/8231893-L.jpg" },
  { "id": 89, "title": "The Velveteen Rabbit", "author": "Margery Williams", "image": "https://covers.openlibrary.org/b/id/8231894-L.jpg" },
  { "id": 90, "title": "Winnie-the-Pooh", "author": "A.A. Milne", "image": "https://covers.openlibrary.org/b/id/8231895-L.jpg" },

  { "id": 91, "title": "The Call of the Wild", "author": "Jack London", "image": "https://covers.openlibrary.org/b/id/8231896-L.jpg" },
  { "id": 92, "title": "Treasure Island", "author": "Robert Louis Stevenson", "image": "https://covers.openlibrary.org/b/id/8231897-L.jpg" },
  { "id": 93, "title": "The Time Machine", "author": "H.G. Wells", "image": "https://covers.openlibrary.org/b/id/8231898-L.jpg" },
  { "id": 94, "title": "The War of the Worlds", "author": "H.G. Wells", "image": "https://covers.openlibrary.org/b/id/8231899-L.jpg" },
  { "id": 95, "title": "Fahrenheit 451", "author": "Ray Bradbury", "image": "https://covers.openlibrary.org/b/id/8231900-L.jpg" },

  { "id": 96, "title": "The Road", "author": "Cormac McCarthy", "image": "https://covers.openlibrary.org/b/id/8231901-L.jpg" },
  { "id": 97, "title": "The Handmaid's Tale", "author": "Margaret Atwood", "image": "https://covers.openlibrary.org/b/id/8231902-L.jpg" },
  { "id": 98, "title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "image": "https://covers.openlibrary.org/b/id/8231903-L.jpg" },
  { "id": 99, "title": "The Name of the Wind", "author": "Patrick Rothfuss", "image": "https://covers.openlibrary.org/b/id/8231904-L.jpg" },
  { "id": 100, "title": "The Road Less Traveled", "author": "M. Scott Peck", "image": "https://covers.openlibrary.org/b/id/8231905-L.jpg" }

];

export default function WorldFamousBooksCarousel() {
  const [books] = useState(booksApi);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 1800, stopOnInteraction: false })]
  );

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 60, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black py-24"
    >
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-white mb-14">
        🌍 100 World Famous Best-Selling Books
      </h2>

      <div ref={emblaRef} className="overflow-hidden px-6">
        <div className="flex gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_28%] lg:flex-[0_0_20%]"
            >
              <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-yellow-400/40 transition duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {book.genre}
                  </span>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500">{book.author}</p>

                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-yellow-500 font-semibold">⭐ {book.rating}</span>
                    <span className="font-bold text-green-600">₹{book.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
