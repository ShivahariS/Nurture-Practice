package Ex2.Mock2;

public class MyService {
	private Ext_Api api;

    public MyService(Ext_Api api) {
        this.api = api;
    }

    public void fetchData() {
        api.getData();
    }
}
