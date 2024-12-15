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

    int search(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;

       while (low <= high) {
        int mid = low + high / 2;

        if (target == nums[mid]){
            return mid;
        }

        if (target > nums[mid]){
            low = mid + 1;
        }
      
        if (target < nums[mid]){
            high = mid - 1;
        }
	    }
		  return -1;
   }

int main() {
    vector<int> arr = {10,11,16,20};
   
     int booleano = search(arr, 16);

    cout << boolalpha << booleano << endl;
    

    return 0;
}
