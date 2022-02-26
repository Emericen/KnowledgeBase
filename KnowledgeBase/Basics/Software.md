# Stack & Heap

**Arrays** such as int[] are also **instances of Array class**, which is why you can do Arrays.sort(a), where sort is a **static** method for array class. For the following code

```java
int[] a = new int[3];
System.out.println(a.length)
```

1. The **new** keyword signals Java to create a new array object. 
2. "**a**" here is a **reference** to the created object. a itself is stored on **stack** whereas its pointed object is stored on **heap**. 
3. "**a.length**" is a process of **dereferencing**: accessing the actual object to retrive array property **length**.

Java has 2 types of memory, **stack** and **heap**. 

- **Stack**, aka call stack, stores (stack up) active subroutines of a computer program. 

  - ```java
    public void first() { ... foo(); }
    public void foo() { float temp=12.3; ... bar(); }
    public void bar() { int i=0; ... buz(i); }
    public void buz(int i) { ... }
    ```

    Upon buz(), your stack will look like

    <img src="/Users/apple/Desktop/KnowledgeBase/Basics/images/lecture 1-1.png" alt="lecture 1-1" style="zoom:50%;" />

    it'll then start to pop / excute each stack frame from the top.

    **Local variables** (i and temp) are stored in their corresponding function stack frame, and will be terminated w/ stack frame upon function completion. Were they passed down to the next incoming stack frame, the new function will make a **copy**. 

- **Heap**: class objects are stored in heap. For example

  ```java
  int[] a = new int[3];
  ```

  "a" is a reference on stack, it stores an address on heap of the actual data, an object with 3 ints and some other properties, length for instance.

**Note: Primitive types** in Java includes boolean, byte, char, short, int, long, float, double. These have no reference and are stored right in stack. **BUT** primitive properties of an object on heap is also stored on heap.

For example, if we have 

```java
int[] a = new int[3];
int[] b = new int[5];
```

then a and b is going to store 2 address values of 2 array objects stored in heap, and if I do

```java
a = b;
```

a & b is going to point at the **same object** int[5] on heap. Since the object int[3] is no longer referenced, Java put it in to **garbage collector**. Then, if I do

```java
b[0] = 12;
System.out.println(a[0]);
```

this will print out **12**.



# Miscellaneous

- In Java, use 

  - **UpperCamelCase** for **class names**  
  - **lowerCamelCase** for **method and field names**.
  - **UPPER_CASE_WITH_UNDERSCORE** for **constant variable**

- Instantiation vs initialization

  - new Student() is called **instantiation**.
  - for int a, a=12 is called **initialization**.

- Default value: for uninitialized variable, Java gave them default value according to their type

  |   Types    |  Value   |
  | :--------: | :------: |
  |    byte    |    0     |
  |   short    |    0     |
  |    int     |    0     |
  |    long    |    0L    |
  |   float    |   0.0f   |
  |   double   |   0.0d   |
  |    char    | "\u0000" |
  | any object |   null   |
  |  boolean   |  false   |

- Having multiple version of the same function is called **overloading**



# Static

You can access static field in non-static methods of a class. You CANNOT access instance specific fields in static methods.

# Final

> Final class: a class that cannot be inherited
>
> Final method: a method that cannot be overriden
>
> Final variable: a variable that once assigned, cannot be assigned again
>
> Constants: once assigned, cannot be changed.

You cannot change the value of "a" if its declared like

```java
final int a = 0;
```

Additionally, the following code

```java
public class Student {
  ...
  final Girl girlFriend;
  public Student(Girl gf) {
    this.girlFriend = gf;
  }
}
```

If you do

```java
Boy b = new Boy(new Girl("taylor"));
```

this one line will create on you memory

<img src="/Users/apple/Desktop/KnowledgeBase/Basics/images/lecture 2-1.png" alt="lecture 2-1" style="zoom:50%;" />

Where the link between girlFriend and Girl instance **CANNOT** be changed. The Girl instance can change name, but the girlFriend field will always reference it.



# Parameter Passing

Java will **ALWAYS** pass by value:

- **Primitive** parameter: function make **copy of value**.
- **Object** parameter: function make **copy of reference**. 
  - The copy will point at the **same** object as the original.

## Examples:

```java
public static void main(String[] args) {
  Simple s1 = new Simple(5);
  changeValue(s1);
  System.out.println(s1.value); // prints 5, value from a new simple
}
public static void changeValue(Simple simple) {
  Simple newSimple = new Simple(10);
  simple = newSimple;
}
```

```java
public static void main(String[] args) {
  Simple s2 = new Simple(5);
  changeValue(s2);
  System.out.println(s2.value); // prints 10, value from changed s2
}
public static void changeValue(Simple simple) {
  simple.value = 10;
}
```

```java
public static void main(String[] args) {
  Simple s3 = new Simple(5);
  s3 = changeValue(s3);
  System.out.println(s3.value); // prints 10, value from a new simple
}
public static void changeValue(Simple simple) {
  Simple newSimple = new Simple(10);
  return newSimple
}
```



# Multi-Dimensional Array

For code 

```java
int[][] arr = new int[1][3];
```

You'll create in memory:

<img src="/Users/apple/Desktop/KnowledgeBase/Basics/images/lecture 2-2.png" alt="lecture 2-2" style="zoom:40%;" />

Starting to look alot like Software I & II, isn't it?



## Array errors

- index out of bounds exception

  ```java
  int[] a = new int[3];
  int b = a[5];
  // or
  int[] a = new int[0];
  int b = a[0];
  ```

- null pointer exception

  ```java
  int[] a;
  int b = a[0];
  ```

- example

  ```java
  int[][] arr = new int[5][];
  int[] a = arr[5];	// out of bound
  int b = arr[3][2]; // NPE
  ```

  



