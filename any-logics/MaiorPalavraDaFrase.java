
import java.util.Arrays;
import java.util.Comparator;

public class Questao3 {

    // TODO Sem Stream
    public String retornaMaiorPalavraDaFraseSemStream(String frase) {
        String[] palavras = frase.split(" ");
        String maiorPalavra = " ";

        for (String palavra : palavras) {
            if (palavra.length() > maiorPalavra.length()) {
                maiorPalavra = palavra;
            }
        }
        return maiorPalavra;
    }


    // TODO Com Stream
    public void retornaMaiorPalavraDaFrase(String frase) {
        String[] palavras = frase.split(" ");

        Arrays.stream(palavras)
                .sorted(Comparator.reverseOrder())
                .limit(1)
                .forEach(System.out::print);
    }
}
