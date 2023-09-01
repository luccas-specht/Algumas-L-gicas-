/*
    O Triângulo de Floyd
*/


int main()
{
    int n = 0, i = 0;
    
    while(n < 3){
     printf("N:");
     scanf("%d", &n);
    }
    
    do {
        
        for(int j = 1; j <= i; j++) {
            printf("%d", j);
        }
        printf("\n");
        
      i++;
      
    } while(n >= i);
    
    return 0;
}
