package projeto.dos.cria.criaif.questao;

import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Questao1Test {
    private static final int VALOR_ESPERADO = 8;
    private static final int[][] MATRIZ = {{6, 3, 1}, {9, -1, 4}, {8, 13, 0}};

    @Test
    public void deveCalculcarASomaDaDiagonalSecundariaComSucessoSemStream() {
        //Arrange
        Questao1 questao1 = new Questao1();

        //Act
        int result = questao1.calculaSomaDiagonalSecundaria(MATRIZ);

        //Assert
        assertEquals(VALOR_ESPERADO, result);
        System.out.println(result);
    }
}