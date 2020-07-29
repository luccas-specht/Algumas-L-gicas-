package projeto.dos.cria.criaif.questao;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Questao2 {

    //TODO sem stream
    public void mostraValoresRepetidosEmUmVetor(int[] vetor) {
        for (int i = 0; i < vetor.length; i++) {
            for (int j = i + 1; j < vetor.length; j++) {
                if (vetor[i] == vetor[j]) {
                    System.out.println(vetor[i]);
                }
            }
        }
    }

    //TODO com stream
    public void mostraValoresRepetidosEmUmVetorComStream(int[] vetor) {
        Set<Integer> novosValores = new HashSet<>();
        Arrays.stream(vetor)
                .filter(n -> !novosValores.add(n))
                .sorted()
                .forEach(System.out::println);
    }
}


