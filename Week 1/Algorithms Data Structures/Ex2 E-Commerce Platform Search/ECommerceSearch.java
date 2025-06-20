public class ECommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return productId + " - " + productName + " (" + category + ")";
        }
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Mouse", "Electronics"),
            new Product(101, "T-shirt", "Clothing"),
            new Product(104, "Phone", "Electronics"),
            new Product(102, "Shoes", "Footwear")
        };

        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, 104);
        System.out.println(result1 != null ? result1 : "Product not found");

        java.util.Arrays.sort(products, java.util.Comparator.comparingInt(p -> p.productId));

        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, 104);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
