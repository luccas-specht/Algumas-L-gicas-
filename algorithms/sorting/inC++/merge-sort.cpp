/* 
  [10, 4, 7, -1, 0, 6] => [-1, 0, 4, 6, 7, 10]

  //Passos do merge sort:
  1 -> Dividir a lista em duas metades
  2 -> Dividir recursivamente até que cada uma das N metades tenha um unico elemento
  3 -> Combine as sublistas em ordem crescente
  4 -> Combine recursivamente cada sublista até conter todos os elementos de forma ordenada.
  5 -> Copie todos os elementos para a lista original

 */

#include <iostream>
#include <vector>

using namespace std;

// Função para fundir duas partes ordenadas do array em uma única parte ordenada
void merge(vector<int>& arr, int left, int middle, int right)  {

  // Criar dois subarrays temporários para armazenar os elementos da parte esquerda e da parte direita
  vector<int> leftArray(arr.begin() + left, arr.begin() + middle + 1);
  vector<int> rightArray(arr.begin() + middle + 1, arr.begin() + right + 1);

   // Inicializar índices para percorrer os subarrays esquerdo, direito e o array original
   int indexInLeft = 0, indexInRight = 0, indexInOriginalArray = left;

   // Combinar os elementos dos subarrays esquerda e direita de forma ordenada no array original
    while (indexInLeft < leftArray.size() && indexInRight < rightArray.size()) {
        if (leftArray[indexInLeft] <= rightArray[indexInRight]) {
          arr[indexInOriginalArray] = leftArray[indexInLeft];
          indexInLeft++;
        } else {
          arr[indexInOriginalArray] = rightArray[indexInRight];
          indexInRight++;
        }
        indexInOriginalArray++;
    }

  // Copiar quaisquer elementos restantes do subarray esquerdo (se houver)
    while (indexInLeft < leftArray.size()) {
          arr[indexInOriginalArray] = leftArray[indexInLeft];
          indexInLeft++;
          indexInOriginalArray++;
      }
}


void mergeSort(vector<int>& arr, int left, int right) {
  if(left == right) {
    return;
  }

  int middle = left + (right - left) / 2;

  // [10, 4, 7, -1, 0, 6]
  //  ^   ^  ^
  // separa a parte esquerda do array
  mergeSort(arr, left, middle);

  // [10, 4, 7, -1, 0, 6]
  //             ^  ^  ^
  // separa a parte direita do array
  mergeSort(arr, middle + 1, right);

  // Após quebrar o array em sublistas
  // Chamar o merge para combinar ordenando de forma asc
  // Devido a recursão da função `mergeSort`,
  // essa parte só será executada quando o left e o right forem iguais. (10 = 10 && 4 = 4 && 7 = 7)
  merge(arr, left, middle, right);
}

int main() {
    vector<int> arr = {10, 4, 7, -1, 0, 6, 88, 30, 2, 3, 4, 5 ,4, 4, 4, 1};
    mergeSort(arr, 0, arr.size() - 1);
   
     for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
