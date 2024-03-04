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

void merge(vector<int>& arr, int left, int middle, int right)  {

  vector<int> leftArray(arr.begin() + left, arr.begin() + middle + 1);
  vector<int> rightArray(arr.begin() + middle + 1, arr.begin() + right + 1);

   int i = 0, j = 0, k = left;

    while (i < leftArray.size() && j < rightArray.size()) {
        if (leftArray[i] <= rightArray[j]) {
          arr[k] = leftArray[i];
          i++;
        } else {
          arr[k] = rightArray[j];
          j++;
        }
        k++;
    }

    while (i < leftArray.size()) {
          arr[k] = leftArray[i];
          i++;
          k++;
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
    vector<int> arr = {10, 4, 7, -1, 0, 6};
    mergeSort(arr, 0, arr.size() - 1);
   
     for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
