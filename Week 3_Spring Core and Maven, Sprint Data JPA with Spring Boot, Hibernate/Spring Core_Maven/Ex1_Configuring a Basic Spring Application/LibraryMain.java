package Ex1.LibraryManagement;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class LibraryMain {
	 public static void main(String[] args) {
	        ApplicationContext con = new ClassPathXmlApplicationContext("applicationContext.xml");
	        BookService ser = (BookService) con.getBean("bookService");
	        ser.addBook("Harry Potter-The Goblet of Fire");
	        ser.addBook("Percy Jackson The Lightning Thief");
	    }
}
