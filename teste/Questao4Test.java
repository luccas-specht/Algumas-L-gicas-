package projeto.dos.cria.criaif.questao;

import org.junit.Test;

public class Questao4Test {

    @Test
    public void test() {

        Questao4 questao4 = new Questao4();
        questao4.retornaLetraUnica("crescer").forEach(System.out::print);

    }
}