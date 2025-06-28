package Ex3.Mock;
import static org.junit.Assert.*;  
import static org.mockito.Mockito.*; 
import org.junit.Test; 
import org.mockito.Mockito; 
 
public class MyServiceTest { 
    @Test 
    public void testExternalApi() { 
        Ext_API mockApi = Mockito.mock(Ext_API.class); 
        when(mockApi.getData()).thenReturn("Mock Data"); 
        MyService service = new MyService(mockApi); 
        String result = service.fetchData(); 
        assertEquals("Mock Data", result); 
    } 
}
