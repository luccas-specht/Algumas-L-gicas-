package projeto.dos.cria.criaif.questao;

import org.junit.Test;

public class Questao2Test {
    private static final int[] VETOR = {3, 6, 5, 2, 5, 3};
    private static final int[] VALOR_ESPERADO = {3, 5};

    @Test
    public void deveCalculcarASomaDaDiagonalSecundariaComSucessoSemStream() {
        //Arrange
        Questao2 questao2 = new Questao2();

        //Assert
        questao2.mostraValoresRepetidosEmUmVetor(VETOR);
    }

    @Test
    public void deveCalculcarASomaDaDiagonalSecundariaComSucessoComStream() {
        //Arrange
        Questao2 questao2 = new Questao2();

        //Assert
        questao2.mostraValoresRepetidosEmUmVetorComStream(VETOR);
    }
}