package Ex1.LibraryManagement;

public class BookService {

    private BookRepository bookRepository;
    
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBookRepository() {
        if (bookRepository != null) {
            System.out.println("BookRepository is injected successfully!");
        } 
        else {
            System.out.println("BookRepository is NOT injected.");
        }
    }
}
