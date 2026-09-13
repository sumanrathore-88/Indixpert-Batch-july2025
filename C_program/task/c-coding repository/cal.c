#include <stdio.h>

float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);


int main() {
    float num1, num2;

    
    printf("Enter first number: ");
    scanf("%f", &num1);

    printf("Enter second number: ");
    scanf("%f", &num2);


    printf("Addition: %.2f\n", add(num1, num2));
    printf("Subtraction: %.2f\n", subtract(num1, num2));
    printf("Multiplication: %.2f\n", multiply(num1, num2));

    if (num2 != 0) {
        printf("Division: %.2f\n", divide(num1, num2));
    } else {
        printf("Division: Error! Division by zero.\n");
    }

    return 0;
}


float add(float a, float b) {
    return a + b;
}

float subtract(float a, float b) {
    return a - b;
}

float multiply(float a, float b) {
    return a * b;
}

float divide(float a, float b) {
    return a / b;
}