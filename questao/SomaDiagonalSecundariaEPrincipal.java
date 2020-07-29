package projeto.dos.cria.criaif.questao;

public class SomaDiagonalSecundariaEPrincipal {

    public String DiagonalPrincipalESecundaria(int[][] matriz) {
        int somaDiagonalPrincipal = 0;
        int somaDiagonalSecundaria = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz.length; j++) {
                if (i == j) somaDiagonalPrincipal += matriz[i][j];

                if (i + j == matriz.length - 1) somaDiagonalSecundaria += matriz[i][j];
            }
        }
        return "Diagonal Principal: " + somaDiagonalPrincipal + "\n" + "Diagonal Secundaria: " + somaDiagonalSecundaria;
    }
}