package projeto.dos.cria.criaif.questao;

import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Stream;

public class Questao4 {

    //TODO gambi.
    public Stream<String> retornaLetraUnica(String palavra) {
        String[] letras = palavra.split("");

        return Arrays.stream(letras)
                .distinct()
                .sorted(Comparator.reverseOrder())
                .limit(1);
    }
}
