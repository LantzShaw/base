> vscode 中使用 vim 之后 需要映射快捷键，不然有些快捷键用不了

```sh
# 删除
1. D 删除当前到行尾
2. d0 删除当前到开始位置
3. dw 删除某个单词的当前到结尾位置
4. db 删除某个单词的当前到开始位置
5. dd 删除整行

# 移动
$ 移动到行尾
1 + $ 表示当前行行尾
2 + $ 表示当前行的下一行行尾
...依次类推

0 移动到行首

gg 移动到第一行行首 或者 1 + 回车
G 移动到最后一行

# 撤回/反撤回 复制/粘贴
u 撤回
ctrl + r 反撤回

y 或者 yy 复制
p 粘贴

# 注释
gcc 注释/解除注释

gd 跳转代码引用处

gt 切换至下一个tab页
gT 切换至上一个tab页
n+gt 切换至第n个tab页 相当于 alt+n

# 内容查找
/ + ? 或者 ? + 内容  然后使用 n 或者 N 跳转至下一个内容匹配处
```

### 参考内容

https://zhuanlan.zhihu.com/p/512935904#:~:text=%E4%BE%8B%E5%A6%82%EF%BC%8C%E5%9C%A8%20VS%20Code%20%E4%B8%AD%E6%88%91%E7%BB%8F%E5%B8%B8%E4%BD%BF%E7%94%A8%20Ctrl%2Br%20%E5%88%87%E6%8D%A2%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%EF%BC%8C%E4%BD%86%E5%AE%89%E8%A3%85%20Vim%20%E6%8F%92%E4%BB%B6%E5%90%8E,%E4%B8%BA%E4%BA%86%E4%BD%BF%E7%94%A8%E5%8E%9F%E6%B1%81%E5%8E%9F%E5%91%B3%E7%9A%84%20Vim%20%E5%91%BD%E4%BB%A4%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%8A%8A%20VS%20Code%20%E4%B8%AD%E7%9A%84%20Ctrl%2Br%20%E9%87%8D%E6%96%B0%E6%98%A0%E5%B0%84%E6%88%90%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%BF%AB%E6%8D%B7%E9%94%AE%EF%BC%8C%E8%BF%99%E9%87%8C%E6%88%91%E6%8F%90%E4%BE%9B%E4%B8%A4%E7%A7%8D%E9%87%8D%E6%96%B0%E6%98%A0%E5%B0%84%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%9A%84%E6%96%B9%E5%BC%8F%E3%80%82
