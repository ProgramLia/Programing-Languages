#include <stdio.h>

int main() {
     // Variable...
     char name[100];
     int age;
     char gender;
     float ipk;
     char adress[100];

     // Inputs...
     printf("Enter your name : ");
     fgets(name , sizeof(name) ,stdin);
     printf("Enter your age : ");
     scanf("%d" , &age);
     printf("Enter your  gender [M/L]: ");
     scanf(" %c" , &gender);
     printf("Enter your IPK : ");
     scanf("%f" , &ipk);
     getchar();
     printf("Enter your adress : ");
     fgets(adress , sizeof(adress) , stdin);

     // Outputs...
     printf("\n_____Bio Data_____\n");
     printf("Your name   : %s" , name);
     printf("Your age    : %d\n" , age);
     printf("Your gender : %c\n" , gender);
     printf("Your ipk    : %.2f\n" , ipk);
     printf("Your adress : %s\n" , adress);
     return 0;
}
