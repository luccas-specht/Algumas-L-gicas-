void merge(vector<int>& arr, int left, int middle, int right) {
// vector desconsidera o último ao declarar dessa forma,
// por isso o + 1 no final


  vector<int> leftArray(arr.begin() + left, arr.begin() + middle + 1);
  vector<int> rightArray(arr.begin() + middle + 1, arr.begin() + right + 1);
  int i = 0, j = 0, k = left;
  while (i < leftArray.size() && j < rightArray.size()) {
  if (leftArray[i] <= rightArray[j]) {
// Podemos atualizar o arr diretamente,
// porque estamos comparando as cópias
arr[k] = leftArray[i];
i++;
} else {
arr[k] = rightArray[j];
j++;
}
k++;
}
// Copia os elementos restantes de leftArray[], se houver
while (i < leftArray.size()) {
arr[k] = leftArray[i];
i++;
k++;
}
// Não precisamos copiar os elementos restantes do rightArray
// porque os elementos de rightArray já estariam no lugar correto,
// à direita no array original
}
void mergeSort(vector<int>& arr, int left, int right) {
if (left == right){
return;
}
int middle = left + (right - left) / 2;
// Classifica a primeira metade
mergeSort(arr, left, middle);
// Classifica a segunda metade
mergeSort(arr, middle + 1, right);
// Mescla as metades ordenadas
merge(arr, left, middle, right);
}