
public class Questao1 {

    //TODO sem stream
    public int calculaSomaDiagonalSecundaria(int[][] matriz) {
        int soma = 0;
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz.length; j++) {
                if (i + j == (matriz.length - 1)) {
                    soma += matriz[i][j];
                }
            }
        }
        return soma;
    }
}
