package projeto.dos.cria.criaif.questao;

import org.junit.Assert;
import org.junit.Test;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Questao3Test {
    private static final String FRASE_EXEMPLO = "Eu não consigo entender programação";
    private static final String VALOR_ESPERADO = "programação";

    @Test
    public void deveMostarAMaiorPalavraDaFraseComSucessoSemStream() {
        //Arrange
        Questao3 questao3 = new Questao3();

        //Act
        String result = questao3.retornaMaiorPalavraDaFraseSemStream(FRASE_EXEMPLO);

        //Assert
        assertEquals(VALOR_ESPERADO, result);
        System.out.println(result);
    }

    @Test
    public void deveMostarAMaiorPalavraDaFraseComSucessoComStream() {
        //Arrange
        Questao3 questao3 = new Questao3();

        //Assert
        questao3.retornaMaiorPalavraDaFrase(FRASE_EXEMPLO);

    }
}