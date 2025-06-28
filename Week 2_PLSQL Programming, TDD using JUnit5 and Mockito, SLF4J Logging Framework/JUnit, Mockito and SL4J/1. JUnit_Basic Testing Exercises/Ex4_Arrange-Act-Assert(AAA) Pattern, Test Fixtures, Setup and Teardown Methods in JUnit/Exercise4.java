package Ex3.JUnit5s;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;
public class Exercise4 {
	 int x;

	    @Before
	    public void setUp() {
	        x = 10;
	        System.out.println("Before test");
	    }

	    @After
	    public void tearDown() {
	        System.out.println("After test");
	    }

	    @Test
	    public void testXValue() {
	        assertEquals(10, x);
	        System.out.println("Testing");
	    }
}

