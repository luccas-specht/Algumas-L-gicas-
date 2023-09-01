/******************************************************************************
Faça um programa que receba do usuário um vetor X de 10 posições. Em seguidadeverão ser impressos o maior e o menor elemento desse vetor.
*******************************************************************************/

int main()
{
    int arr[10], biggest = 0, smallest = 0, number;
    int arrayLength = sizeof(arr) / sizeof(int);
    
    for(int i = 0; i < arrayLength; i ++){
        printf("number:");
        scanf("%d", &number);
        arr[i] = number;
    }
    
    for(int i = 0; i < arrayLength; i ++){
       if(arr[i] > biggest){
           biggest = arr[i];
       }
       
       if(arr[i] < smallest){
           smallest = arr[i];
       }
    }
    
    
    printf("biggest: %d", biggest);
    printf("\nsmallest: %d", smallest);
    
    return 0;
}