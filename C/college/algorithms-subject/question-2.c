/*
    Proponha um programa em C que lê uma variável n, inteira e maior que zero, que representa o número de linhas da figura que segue o padrão a seguir:
*/

int main()
{
   int n, i = 0;
   
   printf("número:");
   scanf("%d", &n);
   
   while(i < n){
        
       for(int j = 0; j <= i; j++){
           printf("%c", '*');
       }
       printf("\n");
       
      i++;
   }   
    return 0;
}
