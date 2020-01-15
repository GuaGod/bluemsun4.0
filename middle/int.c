#include <stdio.h>

void calculateStatus(char str[], int x);
int main()
{
    char str[70];
    char ch;
    int i = 0;
    do{

        ch = getchar();
        if (ch == '$') break;
        str[i++] = ch;

    } while (ch != '$');

    //上面一系列的操作将人类的行为输入到了str中，现在str中存储的是人类行为，而i代表了总共有多少天

    char staus[70];                 //表示老鼠每天的状态


    
    return 0;
}

void calculateStatus(char str[], int x) {
    int i = 0;
    for (int j = 0; j < x; j++) {
        //T:放置带奶酪的捕鼠夹
        if (str[j] == 'T') {
            if (i == 0) {
                staus[i++] = 'D';       //第1天 老鼠必出动 所以老鼠被打死了
            }
            else {
                if (staus[i-1] == '!') {        //查看前一天的状态 如果是吃到奶酪
                    staus[i++] = 'D';
                }
                else if ((staus[i - 1] == 'D' || staus[i - 1] == 'U') && staus[i - 2] != '!') {
                    staus[i++] = '-';           //前一天如果是老鼠被打死或者老鼠没有收获 且老鼠现在不是开心状态
                }
                else if (staus[i - 1] == '-' && staus[i - 2] == 'D') {
                    staus[i++] = '-';
                }
                else if (staus[i-1] == 'D' && staus[i-2] == '!') {
                    staus[i++] = 'D';
                }
                else {
                    staus[i++] = 'D';
                }
            }
        }
        //X:什么也不放
        else if (str[j] == 'X') {
            if (i == 0) {
                staus[i++] = 'U';
            }
            else {
                if (staus[i - 1] == '!') {
                    staus[i++] = 'U';
                }
                else if ((staus[i-1] == 'D' || staus[i-1] == 'U') && staus[i-2] != '!') {
                    staus[i++] = '-';
                }
                else if (staus[i-1] == '-' && staus[i-2] == 'D') {
                    staus[i++] = '-';
                }
                else {
                    staus[i++] = 'U';
                }
            }

        }
        //C:放置奶酪
        else if (str[j] == 'C') {
            if (i == 0) {
                staus[i++] = '!';
            }
            else {
                if (staus[i - 1] == 'D' || staus[i-1] == 'U') {
                    staus[i++] = '-';
                }
                else if (staus[i - 1] == '-' && staus[i - 2] == 'D') {
                    staus[i++] = '-';
                }
                else {
                    staus[i++] = '!';
                }
            }
        }
}
