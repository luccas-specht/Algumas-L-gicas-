#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> arr = {10, 7, 2, -1, 9};
    int n = 5;
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;  
            }
        }
    }

     for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
