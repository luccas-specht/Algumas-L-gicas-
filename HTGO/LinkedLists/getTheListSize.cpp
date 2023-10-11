#include <iostream>

// get the size of the follwing linked list: |head -> | |1 ->| |2 ->| |3 ->| |4 -> | |5 -> |


struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

/*
    O motivo pelo qual você obtém um erro de "Segmentation fault" 
    (falha de segmentação) ao executar a função printTheList1 
    é devido a como você está tentando acessar head->val após mover o ponteiro head para o próximo nó. 
    Vou explicar a diferença entre as duas funções e o problema em printTheList1:

    printTheList1:

    Você verifica se head não é nulo.
    Em seguida, você move head para o próximo nó com head = head->next.
    No entanto, após essa etapa, você tenta acessar head->val, o que levará a um erro se head for nulo (ou seja, se você alcançar o final da lista).
    printTheList2:

    Nesta função, você verifica se head não é nulo e, em seguida, percorre a lista usando um loop while.
    Você sempre verifica se head é nulo antes de acessar head->val, evitando assim um erro de segmentação.
*/


// add Nos to the linked list
void insertNosToTheList(ListNode*& head, int val) {
    ListNode* current = nullptr;
    for (int i = 1; i <= val; i++) {
        if (current == nullptr) {
            head = new ListNode(i);
            current = head;
        } else {
            current->next = new ListNode(i);
            current = current->next;
        }
    }
}


void printTheList1(ListNode* head) {
    if(head != nullptr){
        std::cout << head->val << std::endl;
        head = head->next;
        //here: std::cout << head->val << std::endl; -> Segmentation fault (core dumped),
        printTheList1(head);
    } 
}

long getTheListSize(ListNode* head){
    long size = 0;

    while(head != nullptr) {
        size++;
        head = head->next;
    }
    return size;
}


void printTheList2(ListNode* head) {
    while (head != nullptr) {
        std::cout << head->val << " ";
        head = head->next;
    }
    std::cout << std::endl;
}

int main() {
    ListNode* linkedList = nullptr;
    insertNosToTheList(linkedList, 100);
    printTheList1(linkedList);

    long listSize = getTheListSize(linkedList);
    std::cout << "size: " <<listSize << std::endl;
    
    return 0;
}