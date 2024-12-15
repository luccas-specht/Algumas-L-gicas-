// Given a unsorted arr provide a function calls merge sort without zeros which returns the arr sorted with the zeros at left  

// [33, -8, 0, 4, 7, 0, 20, 1, 0, 4] -> [0, 0, 0, -8, 1, 4, 4, 7, 20, 33]


#include <iostream>
#include <vector>

using namespace std;

void swapToZero(vector<int> & arr) {
  for(int i = 0; i < arr.size(); i ++){
      for(int j = i + 1; j < arr.size(); j ++) {
        if (arr[i] != 0 && arr[j] == 0) {
            int next = arr[j];
            int previous = arr[i];
            arr[i] = next;
            arr[j] = previous;
        }
    }
  }
}

// Função para fundir duas partes ordenadas do array em uma única parte ordenada
void merge(vector<int>& arr, int left, int middle, int right)  {

  vector<int> leftArray(arr.begin() + left, arr.begin() + middle + 1);
  vector<int> rightArray(arr.begin() + middle + 1, arr.begin() + right + 1);

   int indexInLeft = 0, indexInRight = 0, indexInOriginalArray = left;
  
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

  merge(arr, left, middle, right);
}


int main() {
     vector<int> arr = {33, -8, 0, 4, 7, 0, 20, 1, 0, 4};
     // must improve: 0(N log(N)) + O(n^2)
    mergeSort(arr, 0, arr.size() - 1);
    
     for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}