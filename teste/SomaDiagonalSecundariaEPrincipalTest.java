package projeto.dos.cria.criaif.questao;

import org.junit.Test;

public class SomaDiagonalSecundariaEPrincipalTest {
    private static final int[][] MATRIZ = {
            {6, 3, 1},
            {9, -1, 4},
            {8, 13, 0}
    };

    @Test
    public void deveCalcularDiagonalSecundariaEDiagonalPrincipalComSucesso() {
        SomaDiagonalSecundariaEPrincipal somaDiagonalSecundariaEPrincipal = new SomaDiagonalSecundariaEPrincipal();
        String result = somaDiagonalSecundariaEPrincipal.DiagonalPrincipalESecundaria(MATRIZ);
        System.out.println(result);
    }
}