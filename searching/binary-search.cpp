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


bool searchMatrix(vector<vector<int>>& matrix, int target) {
        for(vector<int> arr: matrix) {

            int low = 0, high = arr.size() -1;

            while(low <= high) {
                int mid = low + high / 2;    

                if (target == arr[mid]){
                    return true;
                } else if (target > arr[mid]){
                    low = mid + 1;
                } else if (target < arr[mid]){
                    high = mid -1;
                }   
            }
        }

        return false;
    }

int main() {
    vector<vector<int>> arr = {{1,3,5,7},
                              {10,11,16,20},
                              {23,30,34,60}};
   
     bool booleano = searchMatrix(arr, 16);

    cout << boolalpha << booleano << endl;
    

    return 0;
}
