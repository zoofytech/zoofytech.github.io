---
layout: table
title: python-basics
---

# Python Basics 
{:.no_toc}
This page will go over the basics of python. It is meant to be quick and getting your feet wet. If you are interested in more details of topics feel free to use Google. This should be enough information here to start out doing some easy leetcode questions
This tutorial will go over Python 3+ as it is the most recent one.  

## Download Python
To download python go to [Download](https://www.python.org/downloads/) and download the version for your OS
![execute-python](images/python-download.jpg)
## Install IDE
There are several different types of IDE's for python:
- [Pycharm](https://www.jetbrains.com/pycharm/download/)
- [VSCode](https://code.visualstudio.com/download)

We use VSCode for this tutorial as it has functions for multiple other languages and is not only for python

## Basics
### Print function
The `print()` function in python is used to print specified message on the screen. It can print strings or objects which are then converted to a string while on the screen

**Examples:**

**Input**
```python
print ("HELLO ZOOFYTECH")
```
**Output**
```
HELLO ZOOFYTECH
```

**Input**
```python
print("ABC")
print("123")
print("xyz")
print("890")
```

**Output**
```
ABC
123
xyz
890
```

**Input**
```python
print ("Hello\nWorld")
```
The `\n` will put a new line
**Output**
```
Hello
World
```

### Execute Scripts
To run Python programs, you will need the Python interpreter and possibly an editor(IDE).
A Python interpreter executes Python code (sometimes called programs).
A program can be one or more Python files. Code files can include other files or modules. To run a program, you need to specify a parameter when executing Python.
![execute-python](images/python-interpreter.png)

There are several ways to execute a python file.
1. Execute the file using `python` command on terminal
`python hello.py`
1. If the file has a shebang on the first line to call the python interpreter such as `#!/usr/bin/env python3` or `#!/usr/bin/python3` then you can run the script by just typing in the file name as long as it is executable. To make it executable first run `chmod +x hello.py` then run `hello.py`
1. Run on from IDE. On the IDE you can run the program. On vscode right click the file you are in and run it in interactive mode(this will require install of jupyter notebook)


### Variables 
A Python variable is a reserved memory location to store values. 
Every value in Python has a datatype. The following are the different types:  integers (numbers), float (decimal numbers), booleans (true or false) and strings (text).
Variables in Python can be declared by any name or even alphabets like a, aa, abc, etc. 

Below are some examples of variables. Please try them out on your IDE 

**Example 1**  
```python
# This is a comment 
# a is the variable 
a=900
print (a)
```

**Example 2**  

```python
b=2
print(b)
# re-declaring the var to 3 and printing it
b=3
print(b)
```

**Example 3**  
Concatenation is only possible if you use the same type of datatype.  

```python
a=100
b="cool people"
# This will fail
print a+b
```
One can change the integer to a string by putting a `str` before it
```python
a=100
b="cool people"
print(str(a)+b)
```
**Example 4**  
There are two types of variables in Python, Global variable and Local variable. When you want to use the same variable for the entire program or module you declare it as a global variable. 

To set a global variable, it must be outside of a function. We'll talk more about functions later
> > **Note:**  
For best practices, people tend to set global variables using all capital letters 

```python
GLOBAL_VAR=200
print(GLOBAL_VAR)

# Create function called funFunction 
def funFunction():
    print(GLOBAL_VAR)

# Call the function
funFunction()
```
**Example 5**   
To change a global variable inside a function use the `global` keyword 
```python
GLOBAL_VAR=200
print(GLOBAL_VAR)

# Create function called funFunction 
def funFunction():
    global GLOBAL_VAR
    GLOBAL_VAR="new global var"
    print(GLOBAL_VAR)

# Call the function
funFunction()
```
**Example 6**  
You can also delete variables using the `del` command
```python
l =11
print(l)

del l
print(l)
```
The above should output `NameError: name 'l' is not defined`

### Strings
Python can manipulate strings which can be expressed in several ways. Strings can be enclosed in single quotes `'..'` or double quotes `".."` and `\` can be used to escape special characters such as quotes 

```python
print('hello') #single quote
print("world") # Double quote
print('it doesn\'t have to be this fun') # use \ to escape quote
print("it doesn't have to be this fun" # or just use double quotes instead)
print('"No," yes!')
```

Strings prefixed with `r` or `R`, such as `r'...' `and `r"..."`, are called raw strings and treat backslashes `\` as literal characters. In raw strings, escape sequences are not treated specially.

```python
print(r'a\tb\nA\tB')
print('a\tb\nA\tB')
```

You can also use triple quotes for multiple lines such as `"""..."""` `'''...'''`
```python
print("""
Usage: [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
```

Strings can be concatenated (glued together) with the `+` operator, and repeated with `*`:
```python
print(3*'hi') # 3 times hi
print("hello" + "man") # print helloman
```
Two or more string literals next to each other are automatically concatenated 
This is great for breaking long strings:
```python
long_string= ('lets put some very long strings in different lines ' 
'but put them together by concatenation')
print(long_string)
```

It only works for two literals though not variables. If you want to concatenate variables or a variable and literal then you can use the `+`
```python
a='cats'
print(a + " and dogs")
```

Strings can be indexed with the first character having an index of `0`. 

```python
word="verylongword"
print(word[0])
print(word[-1]) # can go negative for the last character
print(word[-12]) # print the first character
print(word[-2])  # print 2nd to last character
```

Strings can also be sliced. While indexing is used to get individual characters, `slicing` allows you to get multiple strings:
```python
word="verylongword"
print(word[0:2]) # prints positions 0-2
print(word[2:5]) # prints positions 2-5
print(word[:2]) # prints positions from beginning to position 2(excluded)
print(word[3:])# prints position 3 until end(included)
print(word[-2:]) # prints positions second to last until end 
```
Note how the start is always included, and the end always excluded. This makes sure that `s[:i] + s[i:]` is always equal to `s`:
```python
word="verylongword"
print(word[:2])
print(word[2:])
print(word[:2] + word[2:])
```

Strings cannot be changed as they are immutable. Therefore, assigning to an indexed position in the string results in an error:
```python
word[0]='J' #this will fail
word[2:]='test' #this will also fail 
```

The built in function `len` returns the length of a string
```python
word='verylongword'
len(word)
```

### Numbers
There are three numeric types in Python:

- `int` Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
- `float` Float, or "floating point number" is a number, positive or negative, containing one or more decimals. Float can also be scientific numbers with an "e" to indicate the power of 10.
- `complex` Complex numbers are written with a "j" as the imaginary part:


Variables of numeric types are created when you assign a value to them:
```python
a = 6    # int
b = 9.28  # float
c = 5j   # complex
print(type(a)) # Use type to see what type it is
print(type(b))
print(type(c))
```

**Converting**
You can convert from one type of number to another with `int()`, `float()`, and `complex()` methods:

```python
a = 6    # int
b = 9.28  # float
c = 5j   # complex

#convert from int to float:
d = float(a)

#convert from float to int:
e = int(b)

#convert from int to complex:
f = complex(c)

print(d)
print(e)
print(f)

print(type(d))
print(type(e))
print(type(f)) 
```

Python also has a module called `random` that can be used to make random numbers
```python
import random
print(random.randrange(1,10))
```

Python also has a built in simple calculator. You can use expressions of operators like `+`, `-`, `*`, `/`
```python
print(2+2)
print((50 -5*5)/4)
print(5/2)
```

There is also floor division where it rounds down the numbers instead of having a float 
```python
print(15//4) ## floor division 
print(15/4) ## regular division 
```

It is also possible to calculate power by using `**`
```python
print(5 ** 2) 
print(10 ** 2) 

```
### Lists
Lists are a way to store multiple items in a single variable  
Lists are one of the 4 built in data types for Python used to store collections of data. The other 3 are Tuple, Set, and Dictionary 
Lists are created using square brackets `[]` with comma separated values 

```python
names = [john, amy, george ]
print(names)
```

In python, lists are very flexible you can do things like concatenation, replace, append, slice and much more..

**concatenation**
```python
numbers = [1,2,3,4]
connums = numbers + [5,6,7,8]
print(connums)
```
**replace**
```python
odd_nums = [1,2,5,7,9]
odd_nums[1] = 3
print(odd_nums)
```

**append**
```python
odd_nums = [1,2,5,7,9]
odd_nums[1] = 3
print(odd_nums)
odd_nums.append(11)
odd_nums.append(13)
print(odd_nums)
```

**slice**
```python
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# replace some values
letters[2:5] = ['C', 'D', 'E']
print(letters)
# now remove them
letters[2:5] = []
print(letters)
#clear all except first letter
letters[0:] = []
print(letters)
```

### Replace
Python has a built in support for string replacement. A string is variable that contains text data. To replace a string call the string.replace(old,new) method using the string object


```python
a = "Hello World"
s = s.replace("World", "Universe")
print(s)
```

An optional parameter is the number of items that will be replaced. By default it is all
```python
a = "Hello World World World"
s = s.replace("World", "Universe", 1)
print(s)
```

### Join
The join method joins elements and returns them combined as a string. 
```python
firstname = "John"
lastname = "Doe"
sequence = (lastname,firstname)
name = " ".join(sequence)
print(name)
```

It can also join a list of words as well:
```python
list = ["cat","dog","bunny","rabbit"]
animals= ' '.join(list)
print(animals)

```
### String find 
The find() method searches for query string and returns the character position if found. If no string is found, it returns -1.

You can add a string index and end index: `find(query,start,end), but these parameters are optional

**Example:**
```python
s = "Today is a good day"
index = s.find("good")
print(index)
```

You can also use `_in_` to search for strings
```python
s = "Today is a good day"
if "good" in s:
    print("query found")
```
### Split
A string can be split into substrings using the `split(param)` method. This method is part of the string object. The parameter is optional, but you can split on a specific string or character.

If you have a string, you can subdivide it into several strings. The string needs to have at least one separating character, which may be a space.

By default the split method will use space as separator. Calling the method will return a list of all the substrings.

```python
s = "Split this sentence"
words = s.split()
print(words)
```

if you want to split a word into characters, use the list method:

```python
word = "word"
x = list(word)
print(x)
```

### Read input
The input function will ask for keyboard input from the user. The functions read input from the keyboard, converts it to a string and removes the newline(Enter)

```python
name = input('What is your name? ')
print('Hello ' + name)

job = input('What is your job? ')
print('Your job is ' + job)

num = input('Give me a number? ')
print('You said: ' + str(num))
```

## Flow Control

### if statements 
In Python the if statement is used for conditional execution or branching. An if statement is one of the control structures. (A control structure controls the flow of the program.)

The if statement may be combined with certain operator such as equal `(==)`, greater than `(>=)`, less than `(<=)` and not equal `(!=)`. Conditions may be combined using the keywords `or` and `and`.

A basic statement should look like this:

```python
if <condition>:
    <statement>
```

- is the condition evaluated as a Boolean, it can either be True or False.
- if it is one more lines of code. Each of those lines must indented with four spaces.

**Examples**:
```python
x = 4
if x < 10:
    print('x is less than ten')

if x > 10:
    print('x is greater than ten')

if x > 1 and x < 5:
    print('x is in greater than 1 and less than 5')
```

**multiple statements**
An if statement doesn’t need to have a single statement, it can have a block. A block is more than one statement. In python blocks are defined by indentations.

```python
if <condition>:
    <statement>
    <statement>
    <statement>

<statement>  # not in block
```

**Example**

```python
x=10
if x < 11:
    print("x is less than 11")
    print("this means it's not equal to 11 either")
    print("x is an integer")
```

**If-Else**
The `else` keyword is used typically when all other cases are done.
```python
num = input("Pick a number 1-10 \n")
if num <= "10" and num >= "1":
    print("Your number is " + num)
else:
    print("Please choose a number between 1-10")

```

**elif**
If you want to evaluate several cases, you can use the `elif` clause. `elif` is short for else if. Unlike `else`, with elif you can add an expression.
That way instead of writing if over and over again, you can evaluate all cases quickly

```python
x=1
if x == 2:
    print('two')
elif x == 1:
    print('one')
elif x == 4:
    print('four')
else:
    print('x is equal to ' + x)
```

It all boils down to how people read things because the above is the same as the example below
```python
x=1
if x == 2:
    print('two')
if x == 1:
    print('one')
if x == 4:
    print('four')
else:
    print('x is equal to ' + x)
```
### for loops
A for loop repeats an action that can have 1 or more instructions. In python for loops iterates over the items of any sequences(lists, strings, dictionaries) in the order that they appear in the sequence. 


```python
city= ['New York', 'San Francisco', 'Hong Kong']
print ('Cities : ')
for i in city:
    print('City: ' + i)
# Create a sample collection
users = {'John': 'active', 'Rob': 'inactive', 'Ken': 'active'}
active_users = {}
for user, status in users.items():
    if status == 'active':
        print(user+ ":" + status)
```
### while loops
While loops are used to repeat execution as long as the expression is true
```python
while_stmt ::=  "while" assignment_expression ":" suite
                ["else" ":" suite]
```
This repeatedly tests the expression and if it is true, executes the first suite; if the expression is false the suite of the `else` clause,if present is executed and loop is terminated. A `break` statement executed in the first suite terminates the loop without executing the else clause's suite. A `continue` statement executed in the first suite skips the rest of the suite and goes back to the testing expression

```python
x = 4
while x < 10:
    print(x)
    x = x + 1
# This will loop through the numbers until it reaches 10 but excludes 10
```

### Nested loops
A loop can contain one or more other loops. You can create a loop inside a loop. This principle is known as nested loops. Nested loops can get a bit confusing especially if it goes over 3 deep

**example**
```python
people = [ "John", "Jim", "Peter", "Jason" ]
restaurants = [ "Japanese", "American", "Mexican", "Chinese" ]
for person in people:
    for restaurant in restaurants:
        print(person + "eats " + restaurant)
```
## exceptions
Python has built-in exceptions which can output an error. If an error occurs while running the program, it’s called an exception. 

If an exception occurs, the type of exception is shown. Exceptions needs to be dealt with or the program will crash. To handle exceptions, the `try-catch` block is used.

All exceptions in Python inherit from the class BaseException. If you open the Python interactive shell and type the following statement it will list all built-in exceptions:

```python
dir(builtins)
```

### except

The idea of the try-except clause is to handle exceptions (errors at runtime). The syntax of the try-except block is:
```python
try:
    <do something>
except Exception:
    <handle the error>
```
- **try:** the code with the exception(s) to catch. If an exception is raised, it jumps to the except block.
- **except:** this code is only executed if an exception occurred in the `try` block even if it contains only the pass statement 

it can also be combined with the `else` and `finally` keywords.
- **else:** Code in the else block is only executed if no exceptions were raised in the try block.
- **finally:** The code in the finally block is always executed, regardless of if an exception was raised or not

### try
The try-except block can handle exceptions. This prevents the program from crashing and exiting in errors. 
```python
try: 
    1 / 0
except ZeroDivisionError: 
    print('One divide by zero')

print('This should still print')
```

After the except block, the program continues. Without a try-except block, the last line would not print and crash.

You can also write different logic for each type of exception that happens:

```python
try: 
    # your code here
except FileNotFoundError: 
    # handle exception 
except IsADirectoryError:
    # handle exception
except:
    # all other types of exceptions

print('This should still print')
```

### finally
A try-except block can have the finally clause. The finally clause is always executed

```python
try:
    <do something>
except Exception:
    <handle the error>
finally:
    <cleanup>
```

Say if you'd want to open a file then close it.
```python
try: 
    f = open("test.txt")
except: 
    print('Could not open file')
finally:
    f.close()

print('This should still print')
```
### else
The else clause is executed if and only if no exception is raised. This is different from the finally clause that’s always executed.

```python
try:
    x = 10
except:
    print('Failed to set x')
else:
    print('No exception occurred')
finally:
    print('This will always print')
```

### raise
Exceptions are raised when an error occurs, but in python you can also force an exception to occur using `raise`

```python
raise MemoryError("Out of memory")
raise ValueError("Wrong value")
```

### built in exceptions

```
Exception 	Cause of Error

AssertionError 	if assert statement fails.
AttributeError 	if attribute assignment or reference fails.
EOFError 	if the input() functions hits end-of-file condition.
FloatingPointError 	if a floating point operation fails.
GeneratorExit 	Raise if a generator's close() method is called.
ImportError 	if the imported module is not found.
IndexError 	if index of a sequence is out of range.
KeyError 	if a key is not found in a dictionary.
KeyboardInterrupt 	if the user hits interrupt key (Ctrl+c or delete).
MemoryError 	if an operation runs out of memory.
NameError 	if a variable is not found in local or global scope.
NotImplementedError 	by abstract methods.
OSError 	if system operation causes system related error.
OverflowError 	if result of an arithmetic operation is too large to be represented.
ReferenceError 	if a weak reference proxy is used to access a garbage collected referent.
RuntimeError 	if an error does not fall under any other category.
StopIteration 	by next() function to indicate that there is no further item to be returned by iterator.
SyntaxError 	by parser if syntax error is encountered.
IndentationError 	if there is incorrect indentation.
TabError 	if indentation consists of inconsistent tabs and spaces.
SystemError 	if interpreter detects internal error.
SystemExit 	by sys.exit() function.
TypeError 	if a function or operation is applied to an object of incorrect type.
UnboundLocalError 	if a reference is made to a local variable in a function or method, but no value has been bound to that variable.
UnicodeError 	if a Unicode-related encoding or decoding error occurs.
UnicodeEncodeError 	if a Unicode-related error occurs during encoding.
UnicodeDecodeError 	if a Unicode-related error occurs during decoding.
UnicodeTranslateError 	if a Unicode-related error occurs during translating.
ValueError 	if a function gets argument of correct type but improper value.
ZeroDivisionError 	if second operand of division or modulo operation is zero.
```

### User-defined exceptions
As mentioned earlier, there are many types of exceptions built in exceptions, but it might not fit your needs. You can program your own type of exceptions if needed.
To create a user-defined exception, you have to create a class that inherits from Exception.

**Examples:**
```python
class BathroomError(Exception):
    pass

raise BathroomError("Programmer went to the bathroom")
```

```python
class NoMoneyException(Exception):
    pass

class OutOfBudget(Exception):
    pass

balance = int(input("Enter a balance: "))
if balance < 1000:
    raise NoMoneyException
elif balance > 10000:
    raise OutOfBudget
```
## More flow control
### range
If you need to iterate over a sequence of numbers, the built in function range comes in handy.
range has the following parameters
```python
range(start, stop[, step])
```

**start**
    The value of the start parameter (or 0 if the parameter was not supplied)

**stop**

    The value of the stop parameter

**step**

    The value of the step parameter (or 1 if the parameter was not supplied)


For a positive `step`, the contents of a range r are determined by the formula `r[i] = start + step*i` where `i >= 0 and r[i] < stop`

For a negative step, the contents of the range are still determined by the formula `r[i] = start + step*i`, but the constraints are `i >= 0 and r[i] > stop`
```python
for i in range(5):
    print(i)
```

It is also possible to set the range to start at another number
```python
list(range(5,10))
list(range(0,10,3))
list(range(-10,-100,-30))
```

### break statements
The `break` statement breaks out of the innermost enclosing for or while loop
break is used to terminate loops when it is encountered

**Example:**
```python
for i in range(3):
    if i == 2:
        break
    print(i)
```
In the above example, when `i` is equal to 2, the break statement terminates the loop. You will notice that the output of this does not include `2`
### continue statements 
The `continue` statement will continue the iteration of a loop. This will work for both while loops and for loops.

**Example:**
```python
for letter in 'python':     
   if letter == 'p':
      continue
   print 'Letter :', letter

var = 20                 
while var > 0:              
   var = var -1
   if var == 10:
      continue
   print 'Current var:', var
print "Done"
```
 
### pass statements
The pass statement is a null operations; nothing happens when it executes. It is useful in places where your code will eventually go but has not been written yet. 

**Example:**
```python
for letter in 'python':
    if letter == 'o':
        pass
        print 'The pass was used above'
    print 'cur letter :', letter
print "Done"
```

When executed, notice how the `pass` does not do anything. If  the `pass` is not used along with the `print` statement, then it would just throw an error:

```python
for letter in 'python':
    if letter == 'o':
    print 'cur letter :', letter
print "Done"
```
### match case statements
`match case` was added in Python 3.10 >

The `match case` statement has a similar functionality as an `if` statement. If you're familiar with bash, it is similar to a `case` statement as well. 
The pseudocode for `match case` would look like the following:

```python
parameter=""

match parameter:

	case first:
		do_something(first)
	
	case second:
		do_something(second)
		
	case third:
		do_something(third)
		.............
		............
	case n:
		do_something(n)
	case _:
		nothing_matched()
```

**Example:**

```python

param='world, hello!'

match param:
    case 'world, hello!':
        print('world hello too!')
    case 'hello world!':
        print('hello to you too!')
    case _:
        print('no match found')
```

The above example should only match one case and would print out `world hello too!` 

### functions
A function is a block of code which only runs when it is called. You can pass data also known as `parameters` or `arguments` into a function. 

To define a function the keyword `def` is used.  
```python
def function1():
    print('hello function1')
```

To call a function, use the function name followed by parenthesis`()`:
```python
def function1():
    print('hello function1')
function1()
```

Information can be passed into functions as `arguments` also known as `parameters` or `args`. Arguments are specified after the function name inside the parentheses. You can add as many arguments as you want by separating them with a comma. 
```python
def function1(first_name):
    print(first_name + " lastname")
function1("Bob")
function1("Josh")
function1("Jack")
```
**Multiple Arguments**
As stated earlier, you can have multiple arguments by using a comma:
```python
def function1(first_name, last_name):
    print(first_name + " middle name " + last_name)
function1("Bob", "Richard")
function1("Josh", "Lee")
function1("Jack", "Ma")
```

**Arbitrary Arguments/`*args`**
If you do not know how many arguments will be passed to your function, you can add a `*` before the  parameter name:

```python
def func1(*name):
    print("His name is " + name[0] + " " + name[2])
func1("Jackie", "middlename", "Chan")
```

**Keyword Arguments**
 You can also send arguments with `key= value` syntax. In this context, the order of arguments do not matter
 ```python
 def function1(name1, name3, name2):
    print("The third name is" + name3)
function1(name1 = "Heather", name2 = "Johnny", name3 = "Richard")
 ```

**Arbitrary Keyword Arguments, `**kwargs`**
If you have a unknown amount of keyboard arguments(kwargs), just add two asterisks`**` before the parameter name in the function definition. 
```python
def function1(**name):
    print("His name is " + name["first_name"] + " " + name["last_name"])
function1(first_name="Bruce", last_name="Lee")

```

### Default Argument Values
You can set a default value to an argument by using the `=`.
```python
def function1(food = "Pizza"):
    print("I like to eat " + food)
function1("Oranges")
function1("Apples")
function1("Burgers")
function1()
function1("Pasta")
```

### Data type arguments 
You can send any data types of arguments to a function(sets, tuples, lists, dictionaries)
Using the built in `type` function, you can determine what type of data it outputs

**Lists**
```python
def function1(food):
    for x in food:
        print(x)

fruits = ["apple", "oranges", "bananas"]
function1(fruits)
print(type(fruits))
```
**tuple**
```python
def function1(num):
    for x in num:
        print(x)

odd = 1,3,5
function1(odd)
print(type(odd))
```
**set**
```python
def function1(num):
    for x in num:
        print(x)

even = {"2", "4", "6"}
function1(even)
print(type(even))
```

**dictionary**
```python
def function1(car):
    for x in dict:
        print(f"{x}: {dict[x]}")

dict = {
    "brand": "Honda",
    "model": "Civic",
    "year": "1999"
}
function1(dict)
print(type(dict))
```
**return**
To return a function value, use `return` statement
```python
def function1(x):
    return 10 * x
print(function1(1))
print(function1(2))
print(function1(3))

```
### range function
As seen earlier there are built in functions for python such as a the `range` function
If you need to iterate over a sequence of numbers this function comes in handy.
The syntax for range function works as the following:
`range(start,stop,[step])`
```

start
    The value of the start parameter (or 0 if the parameter was not supplied)

stop
    The value of the stop parameter

step
    The value of the step parameter (or 1 if the parameter was not supplied)

```
**Examples:**
```python
for i in range(10):
    print(i)
```

```python
for i in range(5,10):
    print(i)
```

```python
for i in range(5,10,2):
    print(i)
```

**recursion**
python also accepts function recursion, which means a defined function can call itself.

```python

def countdown(x):
    print(x)
    if x == 0:
        print("x reached 0")
    else:
        countdown(x - 1)
countdown(10)
```
The above example counts down from 10 and once it reaches 0 then it stops.

Another way to express the above example:
```python
def countdown(x):
    print(x)
    if x > 0:
        countdown(x - 1)
    if x == 0:
        print("x reached 0")
countdown(10)
```

### map function
The `map()` function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.
**Syntax**
`map(function, iterables)`
**arguments**
- function: a function
- iterable: sets, lists, tuples etc..

**Examples**
So let's say you have a list of items and you want to count the number of strings each item on that list has:
```python
def func1(x):
    return len(x)
x = map(func1, ['apples', 'oranges', 'bananas'])
print(list(x))
```
The above example uses `map` to map each of the items on list and sends it as a parameter to get the length of each item

We can do the same for the above without using `map` by using a loop:
```python
x = ['apples', 'oranges', 'bananas']
b = []
for i in x:
    b.append(len(i))
print(b)
```

Now lets say you have two lists and want to add them together:
```python
def func1(a, b):
    return a + b
x = map(func1, ['John',  'Jenny', 'Jason'], ['A', 'B', 'C'])
print(list(x))
```

Try doing the above without `map`
This would be much harder..

### Lambda functions
Small anonymous functions can be created with the `lambda` keyword. 
**Syntax**
`lambda arguments : expression`


**Example:**
```python
x =  lambda a : a + 5
print(x(2))
```
The above example adds 5 to the argument and prints the result 

Lambda functions can also take multiple arguments:
```python
x = lambda a,b : a * b
print(x(4,5))
```
The above example multiplies `a` with `b` and prints the result

Lets take a look at a use case for lambda

Lets say you have a list of peoples ages and you want to find people who are above the age of 20
```python

ages = [11, 13, 17, 22, 23, 60, 90, 55, 88, 21]
over20 = list(filter(lambda age: age > 20, ages))
print(over20)
```

### Comment Strings
In python there are two ways to create a comment for strings. You can use the `#` for a single line comment
**Example**

```python
#this is a comment
print("hello person")
```
If you use three double quotes `"` it will create a multi-line comment.  Followed with another three double quotes at the end of the comments.
**Example**
```python
""" Do not do anything here
really do not do anything
this is a comment
This is multi-line comment

"""
print("Hello Multi-line comment")
```

## Data Structures
Data structures are code structures for storing and organizing data that make it easier to modify, navigate and access information in python. As mentioned earlier, the most common data structures are the following: `lists - []` `tuple - ()` `set - {}` `dictionary - dict { "a": "b"}` This section goes into more details of data structures 
### More on Lists
The list data type has more options:


`list.append(x)`
Add an item to the end of the list. 

`list.extend(iterable)`

Extend the list by appending all the items from the iterable.

`list.insert(i, x)`

Insert an item at a given position. The first argument is the index of the element before which to insert, so `a.insert(0, x)` inserts at the front of the list.

`list.remove(x)`

Remove the first item from the list whose value is equal to x. It raises a ValueError if there is no such item.

`list.pop([i])`

Remove the item at the given position in the list, and return it. If no index is specified, `a.pop()` removes and returns the last item in the list.

`list.clear()`

Remove all items from the list. 

`list.index(x[, start[, end]])`

Return zero-based index in the list of the first item whose value is equal to x. Raises a ValueError if there is no such item.

The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the start argument.

`list.count(x)`

Return the number of times x appears in the list.

list.sort(*, key=None, reverse=False)

Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).

`list.reverse()`

Reverse the elements of the list in place.

`list.copy()`

Return a shallow copy of the list. Equivalent to a[:].


### Using Lists as Queues
It's possible to use a list as a queue where the first element added is the first element retrieved. Use `collections.deque`:

```
from collections import deque
queue = deque(["1", "2", "3"])
queue.append("4") # Append 4
queue.append("5") # Append 5
print(queue.popleft()) # First to arrive now leaves
print(queue.popleft()) # Second arrive now leaves
print(queue) # Remaining queue in order of arrival 
```
### List Comprehensions
List comprehensions help shorten syntax when you need to create  a new list based on values of existing lists.

**Syntax**
`newlist = [expression for item in iterable if condition == True]`

The `expression` is the current item in the iteration but also the outcome, which you can manipulate before it ends up in a list item in the new list:
`newlist = [x.lower() for x in fruits]`
`newlist = ['hello' for x in fruits]`
The `expression` can also contain conditions to manipulate the outcome:
`newlist = [x if x !="mango" else "apple" for x in fruits]`

The `condition` is like a filter that only accepts the items that valuate to `True`

Only accept items that are not "apple":
`newlist = [x for x in fruits if x != "apple"]`

The `condition` is optional and can be omitted:
`newlist =[x for x in fruits]`

The `iterable` can be any iterable object like a tuple,set,list,range etc.
`newlist = [x for x in range(5)]`
`newlist = [x for x in range(5) if x < 3]`

**Example**
```
fruits = ["green_apple", "red_apple", "banana", "mango"]
newlist = [x for x in fruits if "apple" in x]
print(newlist)
```

Without list comprehension you would need a `for statement`

```
fruits = ["green_apple", "red_apple", "banana", "mango"]
newlist = []
for x in fruits:
  if "apple" in x:
    newlist.append(x)

print(newlist)
```

### The del statement
The `del` statement can be used to delete objects. The `del` statement can be used to delete variables, lists, or parts of a list.

```
list = [1,2,3,4,5]
del list[0]
print(list)
del list[2:4]
print(list)
del list
print(list)
```

### Tuples
A tuple consists of a number of values separated by commas
```
t = 123, 456, 'ello'
print(t[0])
# You can also nest tuples
n = a, (1,2,3,4,5)
print(n)
# Tuples are immutable they cannot be changed
n[0]= 12345
# But they can contain mutable objects
x = ([1,2,3], [3,2,1])
print(x)
```

To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
```
tup = ("apple",)
print(type(tup))

# Not a tuple
tup = ("apple")
print(type(tup))

```
### Sets
A set is a collection which is unordered, unchangeable, and unindexed
Sets cannot have two items with the same value they will not repeat

Sets are written with curly braces `{}`
```
set = {"apple", "oranges", "banana"}
print(set)
```

The value of `True` and `1` are considered the same value in sets and are treated as duplicates

```
set = {"apple", "oranges", "banana", True, 1, 2}
print(set)
```
It is also possible to use `set()` constructor to create a set without using curly braces`{}`
```
set1= set(("apple", "orange", "banana")) #note the double brackets
print(set1)
```
### Dictionaries
Dictionaries are used to store data values in `key:value` pairs

A dictionary is a collection which is ordered, changeable and do not allow duplicates
(As of Python >= 3.7 dictionaries are ordered and  < 3.7 are unordered)

Dictionaries are written in curly braces `{}` and have key and values

```
dict1 = {
    "brand": "Honda",
    "model": "Civic",
    "year": 1989
}
print(dict1)
```
You can print specific values in a dictionary

```
dict1 = {
    "brand": "Honda",
    "model": "Civic",
    "year": 1989
}
print(dict1["brand"])
```

Duplicates are not allowed:

```
dict1 = {
    "brand": "Honda",
    "model": "Civic",
    "year": 1989,
    "year": 2023
}
print(dict1)
```

The values in a dictionary can be any data type
```
dict1 = {
    "brand": "Honda",
    "model": "Civic",
    "year": 1989,
    "colors": ["red", "white", "blue"]
}
print(dict1)
```

It is also possible use the `dict()` constructor to make a dictionary without the curly braces `{}`
```
dict1 = dict(brand = "Honda", model = "Civic", year = 1989)
print(dict1)
```
### Looping Techniques
When looping through dictionaries, the key and corresponding values can be retrieved at the same time when using the `items()` method

```
dict1 = dict(brand = "Honda", model = "Civic", year = 1989)
for k,v in dict1.items():
    print(k, v)
```

When lopping through a sequence, the position index and corresponding value can be  retrieved at the same time using the `enumerate()` function

```
for i, v in enumerate(['a', 'b', 'c']):
    print(i, v)
```

To loop over 2 or more sequences at the same time, the entries can be paired with the `zip()` function

```python
questions = ['name', 'age', 'favorite color']
answer  = ['John', '89', 'red']
for q,a in zip(questions, answer):
    print('What is your {0}? It is {1}.'.format(q,a))
```

To loop over a sequence in reverse, first specify the sequence in a forward direction and then call the `reversed()` function

```python
for i in reversed(range(1,100,2)):
    print(i)
```

To loop over a sequence in sorted order, use the `sorted()` function which returns a new sorted list while leaving the source unaltered:
```python
fruits = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']

for i in sorted(fruits):
    print(i)
```

## Modules
Consider a module to be the same as a code library.
A file containing a set of functions you want to include in your application.

To create a  module just save the code you want in a file extension `.py`
```python
# save code as mymod.py
def greeting(name):
    print("Hello, " + name)
```

Now use the module we created by using the `import` statement:

```
import mymod

mymod.greeting("John")
```

You can also create an alias when you import a module, by using the `as` keyword

```
import mymod as mod1

a =  mod1.greeting("Sally")
```

There are several built in modules for python, which you can import whenever you like

```
import sys
sys.ps1
```

### The dir() Function
The `dir()` function is used to find out which names a module defines. 

```
class Person:
  name = "John"
  age = 18
  country = "USA"

print(dir(Person))
```

### Packages
Python modules may contain several classes, functions, variables etc. Whereas Python packages contain several modules. In simple terms, Package in Python is a directory that contains multiple modules as files

Example:

```
car/    # Top level
    __init__.py
    honda
        __init__.py
        a.py
        b.py
        c.py
    bmw
        __init__.py
        c.py
        d.py
        e.py
    porche
        __init__.py
        f.py
        g.py
        h.py
```

The `__init__.py` files are required to make Python treat directories containing the file as a package. In the simplest cases the files can be an empty file, but it can also execute initialization code for the package or set the `__all__` variable.

Users of the package can import individual modules from the package
`import car.honda.a`
An alternative way of importing the submodule:
`from car.honda import a`
This makes it so you can use the package without the prefix.

### Importing * From a Package
One can import all modules by using `from car.honda import *` but this could take a long time to import all sub modules and have side effects. Instead what that does if `__all__` is not defined, it only ensures that the packages `car.honda` has been imported and then imports whatever names are defined in the package. If the package owner defines a list of named `__all__` it will take the list of module names and using `from package import *` it will use the listed modules.
`__all__ = ["a", "b", "c"]`

## Input and Output

### Fancier Output Formatting

###  Formatted String Literals

### The String format() Method

### Manual String Formatting

###  Old string formatting

### Reading and Writing Files

###  Methods of File Objects

### Saving structured data with json



## Errors and Exceptions

### Syntax Errors

### Exceptions

### Handling Exceptions

### Raising Exceptions

### Exception Chaining

### User-defined Exceptions

### Defining Clean-up Actions

### Predefined Clean-up Actions

### Raising and Handling Multiple Unrelated Exceptions

### Enriching Exceptions with Notes

## Classes

### A Word About Names and Objects

### Python Scopes and Namespaces

### Scopes and Namespaces Example

### A First Look at Classes

### Class Definition Syntax

###  Class Objects

### Instance Objects

### Method Objects

### Class and Instance Variables

### Random Remarks

### Inheritance

### Multiple Inheritance

### Private Variables

### Odds and Ends

### Iterators

### Generators

### Generator Expressions



## Brief Tour of the Standard Library

### Operating System Interface

### File Wildcards

### Command Line Arguments

###  Error Output Redirection and Program Termination

### String Pattern Matching

### Mathematics

### Internet Access

### Dates and Times

### Data Compression

### Performance Measurement

### Quality Control

### Batteries Included



## Brief Tour of the Standard Library — Part II



### Output Formatting

### Templating

### Working with Binary Data Record Layouts

### Multi-threading

### Logging

### Weak References

### Tools for Working with Lists

### Decimal Floating Point Arithmetic



## Virtual Environments and Packages

### Introduction

### Creating Virtual Environments

### Managing Packages with pip



## What Now?


## Interactive Input Editing and History Substitution

### Tab Completion and History Editing

### Alternatives to the Interactive Interpreter

## Floating Point Arithmetic: Issues and Limitations

### Representation Error

## Appendix

### Interactive Mode

### Error Handling

### Executable Python Scripts

### The Interactive Startup File

### The Customization Modules