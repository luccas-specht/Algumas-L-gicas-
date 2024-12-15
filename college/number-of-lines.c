
/*
Proponha um programa em C que lê uma variável n, inteira e maior que zero, que representa o número de linhas da figura que segue o padrão a seguir:

n= 5
*****
****
***
**
*

*/

int main()
{
   int n, i;
   
   printf("número:");
   scanf("%d", &n);
   
   i = n;
   while(i != 0){
    
       for(int j = 0; j < i; j++){
           printf("%c", '*');
       }
       printf("\n");
       
      i--;
   }
   

    return 0;
}
