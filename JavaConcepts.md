# Basic Concepts

## Amortized Time Complexity

Java array list has fixed size. Let the initial capacity be **N** elements. The cost of adding elements is

```java
List<Integer> list = new ArrayList<>();
list.add(1);    // TC = O(1)
list.add(1);    // TC = O(1)
...             // added N elements in total and now the list is FULL
list.add(1);    // TC = O(N + 1), 
                // copied the original arraylist into new list of 1.5*N capacity, then add new element
list.add(1);    // TC = O(1)
                // We can add another 0.5*N elements with O(1)
```

an **Amortized Time Complexity** means the Average time needed for each add in the 0.5N elements after first N elements, which is given by:
$$
\frac{[1*(n+1)+(0.5n-1)*1]}{0.5n}=\frac{1.5n}{0.5n}=3=O(1)
$$
so adding for java array list, although it might need to up its capacity from time to time, has TC = O(n) when we need to expand, and O(1) when we don't: amortized to O(1). 

Additionally, Time complexity for Array List vs Linked List is listed as follows: 

| Operation                     | ArrayList                                                    | LinkedList |
| :---------------------------- | :----------------------------------------------------------- | :--------- |
| get(int index) at head / tail | O(1)                                                         | O(1)       |
| get(int index) in middle      | O(1)                                                         | O(N)       |
| set(int index) at head / tail | O(1)                                                         | O(1)       |
| set(int index) in middle      | O(1)                                                         | O(N)       |
| add(int index, E e) in middle | O(N)                                                         | O(N)       |
| add(int index, E e) at head   | O(N)                                                         | O(1)       |
| add(E e) at tail              | 1. need expand : O(N)<br>2. otherwise: O(1)<br>Amortized O(1) TC | O(1)       |
| remove(index) at head         | O(N)                                                         | O(1)       |
| remove(index) at tail         | O(1)                                                         | O(1)       |
| remove(index) at middle       | O(N)                                                         | O(N)       |
| size()                        | O(1)                                                         | O(1)       |
| isEmpty()                     | O(1)                                                         | O(1)       |

The take away is:

1. Lot of random access? ArrayList

2. Add / Remove at the end, use ArrayList

   2.1. When TC is similar for both, use ArrayList for Overhead and Locality



**Deque on 2 stacks**

```
Deque = [1 2 3 4 5 6 7 8]
1 2 3 4 ] stack1  stack2 [ 5 6 7 8

Deque.leftAdd(0) = stack1.push(0)    ==> TC = O(1)
Deque.rightAdd(9) = stack2.push(9)   ==> TC = O(1)
Deque.leftRemove() = stack1.pop()    ==> this is where it gets interesting
```

If left stack is not empty during left remove, TC = O(1). Otherwise, we'll need to pop every element in right stack and push them to left stack. For N elements in right stack, and an empty left stack, left remove will have 2N + 1.

After we call left remove, if we call right remove, and then left remove, and then right remove.. the time for each would be

```
left remove  ==> TC = O(2n - 1)
right remove ==> TC = O(2(n - 1) - 1)
left remove  ==> TC = O(2(n - 2) - 1)
right remove ==> TC = O(2(n - 3) - 1)
left remove  ==> ...
right remove ==> ...
```

Thus
$$
\text{Amortized Time}=\frac{2[n+(n-1)+(n-2)+...+1]+n}{n}=\frac{n*(n-1)+n}{n}=O(n)
$$
The worst case removal time is O(n) and it cannot be amortized to O(1).