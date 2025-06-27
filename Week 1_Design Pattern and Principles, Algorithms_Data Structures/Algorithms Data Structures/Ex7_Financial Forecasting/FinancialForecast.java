public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return futureValue(principal, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double principal = 10000; // Initial investment
        double rate = 0.05;       // 5% annual growth
        int years = 5;

        double result = futureValue(principal, rate, years);
        System.out.printf("Future value after %d years: %.2f%n", years, result);
    }
}
