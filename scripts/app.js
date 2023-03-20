//IF YOU ARE SEEING THIS, I KNOW THIS IS HORRIBLE AND IM SORRY FOR IT. BUT IT THE GOOD SIDE, IT MAKES THE HTML LESS UGLY.

let code = `
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Transition {
    int currentState;
    char currentSymbol;
    int newState;
    char newSymbol;
    char direction;
};
void printTape(const vector<char>& tape, int head) {
    for (int i = 0; i < tape.size(); i++) {
        if (i == head) {
            cout << "[" << tape[i] << "]";
        } else {
            cout << " " << tape[i] << " ";
        }
    }
    cout << endl;
}
int main() {
    vector<char> tape = {'_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '@', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'};
    int head = 11;
    vector<Transition> transitions = {
        {0, '_', 1, '_', 'R'},
        {0, '@', 6, '@', 'R'},
        {1, '_', 2, 'x', 'R'},
        {2, '_', 3, '_', 'L'},
        {3, 'x', 4, 'x', 'L'},
        {4, '_', 5, '@', 'R'},
        {5, 'x', 5, 'x', 'R'},
        {5, '_', 0, '_', 'L'},
        {6, '_', 6, '_', 'R'},
        {6, '_', 7, 'x', 'R'},
        {7, '_', 8, '_', 'L'},
        {8, 'x', 9, 'x', 'L'},
        {9, '_', 10, '@', 'R'},
        {10, 'x', 10, 'x', 'R'},
        {10, '_', 0, '_', 'L'}
    };
    int currentState = 0;
    char currentSymbol = tape[head];
    while (currentState != 5) {
        bool foundTransition = false;
        for (int i = 0; i < transitions.size(); i++) {
            if (transitions[i].currentState == currentState && transitions[i].currentSymbol == currentSymbol) {
                tape[head] = transitions[i].newSymbol;
                currentState = transitions[i].newState;
                if (transitions[i].direction == 'L') {
                    head--;
                } else {
                    head++;
                }
                currentSymbol = tape[head];
                foundTransition = true;
                break;
            }
        }
        if (!foundTransition) {
            break;
        }
        printTape(tape, head);
    }
    printTape(tape, head);
    return 0;
}`;

// Scrolls managment in the sidebar

const sidebarLinks = document.querySelectorAll('.SectionsName');

// For each element in this case a p with the class .SectionName add a onclick event that scrolls into the section that match the attribute
sidebarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
