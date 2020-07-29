package projeto.dos.cria.criaif.questao;

import java.util.Scanner;

public class Teste {

    public static void main(String[] args) {
        Scanner tc = new Scanner(System.in);

        int tamanhoVetor = tc.nextInt();

        double[] resistores = new double[tamanhoVetor];

        for (int z = 0; z < resistores.length; z++) {
            resistores[z] = tc.nextInt();
        }

        tensaoResultante(resistores);
        tc.close();
    }


    private static void tensaoResultante(double[] resistores) {
        int y = 1;
        double[] vOut = new double[resistores.length - 1];

        for (int i = 0; i < vOut.length; i++) {
            double numerador = 0;
            for (double resistore : resistores) {
                vOut[i] += resistore;
            }
            for (int k = 0; k < resistores.length - y; k++) {
                numerador += resistores[k + y];
            }
            vOut[i] = (numerador) / vOut[i];

            y++;

        }
        for (double v : vOut) {
            System.out.printf("%.2f\n", v);
        }
    }
}