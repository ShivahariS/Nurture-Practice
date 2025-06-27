package Ex2FactoryMethod;

public interface Document {
    void open();
}

class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document...");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document...");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel Document...");
    }
}
