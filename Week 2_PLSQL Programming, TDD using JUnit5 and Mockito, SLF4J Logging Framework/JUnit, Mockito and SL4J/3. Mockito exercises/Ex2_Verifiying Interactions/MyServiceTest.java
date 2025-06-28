package Ex2.Mock2;
import static org.mockito.Mockito.*; 
import org.junit.Test; 
import org.mockito.Mockito; 
 
public class MyServiceTest { 
    @Test 
    public void testVerifyInteraction() { 
        Ext_Api mockApi = Mockito.mock(Ext_Api.class); 
        MyService service = new MyService(mockApi); 
        service.fetchData(); 
        verify(mockApi).getData(); 
    } 
} 
