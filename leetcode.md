---
layout: table
title: leetcode
---
# leetcode
Below we will go over some [leetcode](https://leetcode.com/problemset/all/) problems that will help with coding specifically for SRE/DevOps/Platform Engineers. We will be using python3 for all the solutions on this page. If your coding skills are not the best please just start with all the easy problems then move onto medium once you get enough confidence. 

# Problems (75)

## Scripting and Automation (11)

### Easy (7)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/length-of-last-word/">Length of Last Word</a> - Problem #58</li>
<details>
<summary>Summary</summary>
This problem involves manipulating strings, which is a common task in scripting. You need to find the length of the last word in a string.
</details>
<details>
<summary>Solution</summary>
<pre><code class="lang-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">lengthOfLastWord</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, <span class="hljs-symbol">s:</span> str)</span></span> -&gt; <span class="hljs-symbol">int:</span>
        word_list = s.split()
        last_word = word_list[-<span class="hljs-number">1</span>]
        lw_count = len(last_word)
        <span class="hljs-keyword">return</span>(lw_count)
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li>First we split the words by using <code>split</code>. This will remove all of the spaces if there are any in <code>s</code></li>
<li>We then grab the last word by indexing the last word <code>word_list[-1]</code></li>
<li>We then get the count of the last word by using <code>len</code> and return the count of it.
This is just a simple solution to the problem. We can actually trim the answer if needed to the following:<pre><code class="lang-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">lengthOfLastWord</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, <span class="hljs-symbol">s:</span> str)</span></span> -&gt; <span class="hljs-symbol">int:</span>
      s = s.rstrip()  <span class="hljs-comment">#or strip</span>
      <span class="hljs-keyword">return</span> len(s.split()[-<span class="hljs-number">1</span>])
</code></pre>
</li>
</ul>

</details>
<li><a href="https://leetcode.com/problems/add-binary/">Add Binary</a> - Problem #67</li>
<details>
<summary>Summary</summary>
This problem simulates binary addition. In scripting, you might encounter scenarios where you need to perform calculations on binary data.
</details>
<details>
<summary>Solution</summary>
<pre><code class="lang-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">addBinary</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, <span class="hljs-symbol">a:</span> str, <span class="hljs-symbol">b:</span> str)</span></span> -&gt; <span class="hljs-symbol">str:</span>
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li>We use <code>int</code> to convert the string to an integer and use base 2 </li>
<li>We use <code>format</code> to convert the integer back into binary without the &quot;0b&quot;
Another way that we can solve this is by using <code>bin</code>
Similarly we just remove the first 2 strings.</li>
</ul>
<pre><code class="lang-python">class Solution:
    def addBinary(<span class="hljs-keyword">self</span>, a: <span class="hljs-keyword">str</span>, b: <span class="hljs-keyword">str</span>) -&gt; <span class="hljs-keyword">str</span>:
        <span class="hljs-keyword">return</span> bin(<span class="hljs-keyword">int</span>(a , <span class="hljs-number">2</span>) + <span class="hljs-keyword">int</span>(b,<span class="hljs-number">2</span>))[<span class="hljs-number">2</span>:]
</code></pre>

</details>
<li><a href="https://leetcode.com/problems/pascals-triangle-ii/">Pascal&#39;s Triangle II</a> - Problem #119</li>
<details>
<summary>Summary</summary>
This problem deals with generating rows of Pascal's Triangle, which can be used in various automated data generation scenarios.
</details>
<details>
<summary>Solution</summary>
<pre><code class="lang-python">class <span class="hljs-type">Solution</span>:
    def getRow(self, rowIndex: <span class="hljs-built_in">int</span>) -&gt; <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]:
        <span class="hljs-literal">result</span> = []
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, rowIndex+<span class="hljs-number">1</span>):
            <span class="hljs-literal">result</span>.append([])

            <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, i + <span class="hljs-number">1</span>):
                <span class="hljs-keyword">if</span> x == <span class="hljs-number">0</span>:
                    <span class="hljs-literal">result</span>[i].append(<span class="hljs-number">1</span>)
                <span class="hljs-keyword">elif</span> i == x:
                    <span class="hljs-literal">result</span>[i].append(<span class="hljs-number">1</span>)
                <span class="hljs-keyword">else</span>:
                    <span class="hljs-literal">result</span>[i].append((<span class="hljs-literal">result</span>[i-<span class="hljs-number">1</span>][x-<span class="hljs-number">1</span>]) + (<span class="hljs-literal">result</span>[i-<span class="hljs-number">1</span>][x]))
        <span class="hljs-keyword">return</span> <span class="hljs-literal">result</span>[rowIndex]
</code></pre>
<p><strong>Explanation:</strong>
This problem asks you to return the rowIndex-th (0-based index) row of Pascal&#39;s Triangle as a list of integers. Pascal&#39;s Triangle is a triangular array of binomial coefficients, where each number is the sum of the two numbers directly above it. The first few rows of Pascal&#39;s Triangle look like this:</p>
<pre><code class="lang-python">Row <span class="hljs-number">0</span>: <span class="hljs-string">[1]</span>
Row <span class="hljs-number">1</span>: <span class="hljs-string">[1, 1]</span>
Row <span class="hljs-number">2</span>: <span class="hljs-string">[1, 2, 1]</span>
Row <span class="hljs-number">3</span>: <span class="hljs-string">[1, 3, 3, 1]</span>
</code></pre>
<ol>
<li><p>We create an empty list called result to store the rows of Pascal&#39;s Triangle.
Create an empty list called result to store the rows of Pascal&#39;s Triangle.</p>
</li>
<li><p>We then iterate over the rows from 0 to rowIndex, inclusive, using the variable i to represent the current row index.</p>
</li>
<li><p>For each row, append an empty list to the result list. This empty list will be used to store the elements of the current row.</p>
</li>
<li><p>Inside the inner loop, iterate over the elements in the current row from 0 to i, using the variable x to represent the current column index.</p>
</li>
<li><p>For each element, check if it is the first element in the row (i.e., x == 0) or the last element in the row (i.e., i == x). 
If it is either the first or last element, append a 1 to the current row because the first and last elements of each row in Pascal&#39;s Triangle are always 1.</p>
</li>
<li><p>If the element is not the first or last element, calculate its value by adding the element from the previous row in the same column (result[i-1][x-1]) and the element from the previous row in the next column (result[i-1][x]). 
This follows the rule of Pascal&#39;s Triangle where each element is the sum of the two elements above it.</p>
</li>
<li><p>Append the calculated value to the current row.</p>
</li>
<li><p>Repeat steps 5-7 for all elements in the current row.</p>
</li>
<li><p>Once the inner loop finishes, the current row is complete, and you move on to the next row.</p>
</li>
<li><p>Finally, return the row at the rowIndex index from the result list. </p>
</li>
</ol>

</details>
<li><a href="https://leetcode.com/problems/merge-sorted-array/">Merge Sorted Array</a> - Problem #88</li>
<details>
<summary>Summary</summary>
This problem is about merging arrays, a common task in scripting when you're working with data from various sources.
</details>
<details>
<summary>Solution</summary>
<pre><code class="lang-python">        class Solution:
    def <span class="hljs-keyword">merge</span>(<span class="hljs-keyword">self</span>, nums1: <span class="hljs-keyword">List</span>[<span class="hljs-built_in">int</span>], m: <span class="hljs-built_in">int</span>, nums2: <span class="hljs-keyword">List</span>[<span class="hljs-built_in">int</span>], n: <span class="hljs-built_in">int</span>) -&gt; <span class="hljs-keyword">None</span>:
        <span class="hljs-keyword">while</span> m &gt; <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> n &gt; <span class="hljs-number">0</span>:
            <span class="hljs-keyword">if</span> nums1[m<span class="hljs-number">-1</span>] &gt; nums2[n<span class="hljs-number">-1</span>]:
                nums1[m+n<span class="hljs-number">-1</span>] = nums1[m<span class="hljs-number">-1</span>]
                m -= <span class="hljs-number">1</span>
            <span class="hljs-keyword">else</span>:
                nums1[m+n<span class="hljs-number">-1</span>] = nums2[n<span class="hljs-number">-1</span>]
                n -= <span class="hljs-number">1</span>
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-keyword">range</span>(n):
            nums1[i] = nums2[i]
</code></pre>
<p><strong>Explanation:</strong>
To go through this solution, we will go through line by line.</p>
<ol>
<li><p>starting with the while loop. It will continue as long as both m and n are greater than 0. This will help merge the two arrays.</p>
</li>
<li><p>Inside the loop, we then compare the last element of nums1 at a index of m-1 with the last element of nums2 at index n-1. 
These are the largest elements of each array. </p>
</li>
<li><p>If the element in nums1 is greater, 
it means that this element should be placed at the end of the merged array, 
which is at index m+n-1 in nums1. So, it assigns the value of nums1[m-1] to nums1[m+n-1]. 
This merges the element from nums1 into the array.</p>
</li>
<li><p>After merging an element from nums1 it decreases m by 1 to move the m pointer to the previous element in nums1 </p>
</li>
<li><p>If the element in nums2 is greater or equal to nums1 then that means that this element should be placed at the end of the merged array.</p>
</li>
<li><p>From the line aboves if statement , we then assign the value of  <code>nums2[n-1] to nums1[m+n-1]</code> to merge the elements from nums2 to nums1</p>
</li>
<li><p>After merging an element from nums2 it decrements n by 1 to move the n pointer to the previous element in nums2
<code>n -= 1</code></p>
</li>
<li><p>After the while loop exits, there might be remaining elements in <code>nums2</code> that were not merged. This for loop iterates over the remaining elements of nums2 from index 0 to n-1
<code>for i in range(n)</code></p>
</li>
<li><p>In the for loop, it copies the remaining elements from nums2 into nums1 by merging the remaining elements from nums2 to into nums1 
<code>nums1[i] = nums2[i]</code></p>
</li>
</ol>
<p>The key idea here is to work from the end of the arrays towards the beginning,
which avoids overwriting elements in nums1 before they are compared and merged.
This approach ensures that the merged array is sorted without the need for extra space or creating a new array.</p>

</details>
<li><a href="https://leetcode.com/problems/excel-sheet-column-title/">Excel Sheet Column Title</a> - Problem #168</li>
<details>
<summary>Summary</summary>
In this problem, you convert a column number into the corresponding Excel column title. Such conversions are often encountered in automated data processing.
</details>
<details>
<summary>Solution</summary>
<pre><code>        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">convertToTitle</span><span class="hljs-params">(self, columnNumber: int)</span> -&gt; str:</span>
        alphabet=<span class="hljs-string">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span>
        result=<span class="hljs-string">""</span>
        <span class="hljs-keyword">while</span> columnNumber:
            columnNumber=columnNumber<span class="hljs-number">-1</span>
            result=alphabet[columnNumber%<span class="hljs-number">26</span>]+result
            columnNumber=columnNumber//<span class="hljs-number">26</span>
        <span class="hljs-keyword">return</span> result
</code></pre><p><strong>Explanation:</strong>
This problem asks you to convert a positive integer,  columnNumber,
into an Excel sheet column title. Excel column titles are represented using
uppercase English letters, and they follow a pattern similar to base 26 numbering, 
where the digits are represented by the English alphabet (A=1, B=2, ..., Z=26), 
and when the column number exceeds 26, it starts using two-letter combinations (AA=27, AB=28,
..., ZZ=702, AAA=703, and so on).</p>
<ol>
<li><p>We first define alphabet that contains all uppercase letters from A-Z. These strings will be used to map column numbers to titles.</p>
</li>
<li><p>We then initializes an empty string result to store the Excel column title </p>
</li>
<li><p>We start a while loop that continues as long as columnNumber is not zero. The loop will gradually convert the column number to column title.</p>
</li>
<li><p>Inside of the loop, it subtracts 1 from the columnNumber. This is done to handle the fact that the Excel column numbering starts from 1, but our algorithm will work with 0-based indexing.</p>
</li>
<li><p><code>result = alphabet[columnNumber % 26] + result</code></p>
</li>
</ol>
<p>This calculates the remainder when columnNumber is divided by 26. The remainder corresponds to a letter in the alphabet.
It then takes that letter at the position in the alphabet string and appends it to the beginning of the result string. This builds the Excel column title from right to left.</p>
<ol>
<li><code>columnNumber = columnNumber // 26</code></li>
</ol>
<p>It updates columnNumber by performing an integer division by 26 (columnNumber // 26). 
This reduces columnNumber to the next lower place value.</p>
<p>The loop will continue with the reduced columnNumber and the next letter is added to the result string.</p>
<p>This process continues until columnNumber becomes zero, at which point we have constructed the complete Excel column title in the result string.</p>
<ol>
<li>We finally return the result string which contains the Excel column title corresponding to the input columnNumber.</li>
</ol>
<p>This algorithm effectively converts a decimal number into a base 26 representation using the English alphabet letters and builds the Excel column title accordingly.</p>

</details>
<li><a href="https://leetcode.com/problems/excel-sheet-column-number/">Excel Sheet Column Number</a> - Problem #171</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/single-number/">Single Number</a> - Problem #136</li>
<details>
<summary>Summary</summary>
This problem involves finding a single number in an array where all other numbers appear twice. It's a common task in automated data analysis.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>

</details>

### Medium (4)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/count-and-say/">Count and Say</a> - Problem #38</li>
<details>
<summary>Summary</summary>
This problem involves generating sequences based on previous values, which can be useful for generating automated sequences of data.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/reverse-words-in-a-string/">Reverse Words in a String</a> - Problem #151</li>
<details>
<summary>Summary</summary>
Similar to the previous problem, this asks you to reverse the words in a string but not in-place. Scripting can help automate this process.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/basic-calculator-ii/">Basic Calculator II</a> - Problem #227</li>
<details>
<summary>Summary</summary>
In this problem, you're asked to reverse the order of words in a string, which can be useful for automating text transformations.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/group-anagrams/">Group Anagrams</a> - Problem #49</li>
<details>
<summary>Summary</summary>
Automating the process of grouping anagrams from a given list of words is applicable to this problem, aligning with scripting and automation concepts.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>
</details>


## Networking (13)

### Easy (7)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/first-unique-character-in-a-string/">First Unique Character in a String</a> - Problem #387</li>
<details>
<summary>Summary</summary>
Relates to processing strings, which is fundamental in networking protocols for parsing and validation.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">strStr</span><span class="hljs-params">(self, haystack: str, needle: str)</span> -&gt; int:</span>
        <span class="hljs-keyword">while</span> needle <span class="hljs-keyword">in</span> haystack:
            res = haystack.index(needle)
            <span class="hljs-keyword">return</span> res
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>
</code></pre>
<p><strong>Explanation</strong></p>

</details>
<li><a href="https://leetcode.com/problems/implement-strstr/">Implement strStr()</a> - Problem #28</li>
<details>
<summary>Summary</summary>
In networking, substring matching is used in various applications, from pattern matching to searching for headers in network packets.
</details>
<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">strStr</span><span class="hljs-params">(self, haystack: str, needle: str)</span> -&gt; int:</span>
        <span class="hljs-keyword">while</span> needle <span class="hljs-keyword">in</span> haystack:
            res = haystack.index(needle)
            <span class="hljs-keyword">return</span> res
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>
</code></pre>
<p><strong>Explanation</strong></p>


</div>
</details>
<li><a href="https://leetcode.com/problems/valid-anagram/">Valid Anagram</a> - Problem #242</li>
<details>
<summary>Summary</summary>
String manipulation, such as character sorting, is used in various networking applications, such as checksum calculations.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">isAnagram</span><span class="hljs-params">(self, s: str, t: str)</span> -&gt; bool:</span>
        <span class="hljs-keyword">if</span> sorted(s) == sorted(t):
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">True</span>
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">False</span>
</code></pre>
<p><strong>Explanation</strong></p>

</div>
</details>
<li><a href="https://leetcode.com/problems/isomorphic-strings/">Isomorphic Strings</a> - Problem #205</li>
<details>
<summary>Summary</summary>
Understanding character mappings is important in networking tasks like encoding and decoding.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python"><span class="hljs-symbol">class</span> Solution:
    def isIsomorphic(<span class="hljs-keyword">self, </span>s: <span class="hljs-keyword">str, </span>t: <span class="hljs-keyword">str) </span>-&gt; <span class="hljs-keyword">bool:
</span>        <span class="hljs-meta">if</span> len(s) != len(t):
            return False
<span class="hljs-symbol">        else:</span>
            <span class="hljs-built_in">d1</span>, <span class="hljs-built_in">d2</span> = {}, {}
            for i in range(len(s)):
                <span class="hljs-keyword">str1, </span><span class="hljs-keyword">str2 </span>= s[i], t[i]
                <span class="hljs-meta">if</span> <span class="hljs-keyword">str1 </span>not in <span class="hljs-built_in">d1</span>:
                    <span class="hljs-built_in">d1</span>[<span class="hljs-keyword">str1] </span>= <span class="hljs-keyword">str2
</span>                <span class="hljs-meta">if</span> <span class="hljs-keyword">str2 </span>not in <span class="hljs-built_in">d2</span>:
                    <span class="hljs-built_in">d2</span>[<span class="hljs-keyword">str2] </span>= <span class="hljs-keyword">str1
</span>                <span class="hljs-meta">if</span> <span class="hljs-built_in">d1</span>[<span class="hljs-keyword">str1] </span>!= <span class="hljs-keyword">str2 </span>or <span class="hljs-built_in">d2</span>[<span class="hljs-keyword">str2] </span>!= <span class="hljs-keyword">str1:
</span>                    return False
        return True
</code></pre>
<p><strong>Explanation</strong></p>


</details>
<li><a href="https://leetcode.com/problems/pascals-triangle/">Pascal&#39;s Triangle</a> - Problem #118</li>
<details>
<summary>Summary</summary>
While not a direct analogy, data organization and computation are crucial in networking protocols and data transmission.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        class <span class="hljs-type">Solution</span>:
    def generate(self, numRows: <span class="hljs-built_in">int</span>) -&gt; <span class="hljs-type">List</span>[<span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]]:
        <span class="hljs-literal">result</span> = []
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, numRows):
            <span class="hljs-literal">result</span>.append([])

            <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, i + <span class="hljs-number">1</span>):
                <span class="hljs-keyword">if</span> x == <span class="hljs-number">0</span>:
                    <span class="hljs-literal">result</span>[i].append(<span class="hljs-number">1</span>)
                <span class="hljs-keyword">elif</span> i == x:
                    <span class="hljs-literal">result</span>[i].append(<span class="hljs-number">1</span>)
                <span class="hljs-keyword">else</span>:
                    <span class="hljs-literal">result</span>[i].append((<span class="hljs-literal">result</span>[i-<span class="hljs-number">1</span>][x-<span class="hljs-number">1</span>]) + (<span class="hljs-literal">result</span>[i-<span class="hljs-number">1</span>][x]))
        <span class="hljs-keyword">return</span> <span class="hljs-literal">result</span>
</code></pre>
<p><strong>Explanation</strong></p>


</details>
<li><a href="https://leetcode.com/problems/move-zeroes/">Move Zeroes</a> - Problem #283</li>
<details>
<summary>Summary</summary>
In networking, data reorganization may be necessary for efficient data transmission.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">moveZeroes</span><span class="hljs-params">(self, nums: List[int])</span> -&gt; <span class="hljs-keyword">None</span>:</span>
        <span class="hljs-string">"""
        Do not return anything, modify nums in-place instead.
        """</span>
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> nums:
            <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span>:
                nums.remove(i)
                nums.append(<span class="hljs-number">0</span>)
</code></pre>
<p><strong>Explanation</strong></p>

</details>
<li><a href="https://leetcode.com/problems/reverse-vowels-of-a-string/">Reverse Vowels of a String</a> - Problem #345</li>
<details>
<summary>Summary</summary>
String manipulation and transformation are important in many text-based networking applications.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">reverseVowels</span><span class="hljs-params">(self, s: str)</span> -&gt; str:</span>
    vowels = re.findall(<span class="hljs-string">'[aeiouAEIOU]'</span>, s)
    <span class="hljs-keyword">return</span> re.sub(<span class="hljs-string">'[aeiouAEIOU]'</span>, <span class="hljs-keyword">lambda</span> _ : vowels.pop(), s)
</code></pre>
<p><strong>Explanation</strong></p>

</details>
</ol>
</details>

### Medium (6)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/3sum/">3Sum</a> - Problem #15</li>
<details>
<summary>Summary</summary>
In networking, searching for patterns or matches within data streams is a common task.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/longest-palindromic-substring/">Longest Palindromic Substring</a> - Problem #5</li>
<details>
<summary>Summary</summary>
String processing is essential in networking, such as when parsing and validating URLs or extracting specific data.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/zigzag-conversion/">ZigZag Conversion</a> - Problem #6</li>
<details>
<summary>Summary</summary>
Resembles data reformatting tasks seen in networking, such as transforming data for compatibility.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/rotate-image/">Rotate Image</a> - Problem #48</li>
<details>
<summary>Summary</summary>
Transforming data, as in rotating an image, is analogous to data transformation in networking tasks.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/longest-consecutive-sequence/">Longest Consecutive Sequence</a> - Problem #128</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/find-peak-element/">Find Peak Element</a> - Problem #162</li>
<details>
<summary>Summary</summary>
Relates to analyzing sequences of data, important in networking for detecting patterns and trends.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>
</details>


## Performance Optimization (7)

### Easy (2)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">Best Time to Buy and Sell Stock</a> - Problem #121</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        class Solution:
    def <span class="hljs-keyword">max</span>Profit(<span class="hljs-literal">self</span>, prices: List[int]) -&gt; int:
        if not prices:
            return <span class="hljs-number">0</span>

        <span class="hljs-keyword">max</span>Profit = <span class="hljs-number">0</span>
        <span class="hljs-keyword">min</span>Purchase = prices[<span class="hljs-number">0</span>]
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> range(<span class="hljs-number">1</span>, len(prices)):        
            <span class="hljs-keyword">max</span>Profit = <span class="hljs-keyword">max</span>(<span class="hljs-keyword">max</span>Profit, prices[i] - <span class="hljs-keyword">min</span>Purchase)
            <span class="hljs-keyword">min</span>Purchase = <span class="hljs-keyword">min</span>(<span class="hljs-keyword">min</span>Purchase, prices[i])
        return <span class="hljs-keyword">max</span>Profit
</code></pre>
<p><strong>Explanation</strong></p>

</details>
<li><a href="https://leetcode.com/problems/merge-two-sorted-lists/">Merge Two Sorted Lists</a> - Problem #21</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">mergeTwoLists</span><span class="hljs-params">(<span class="hljs-keyword">self</span>, <span class="hljs-symbol">list1:</span> Optional[ListNode], <span class="hljs-symbol">list2:</span> Optional[ListNode])</span></span> -&gt; Optional[ListNode]:

        merged = ListNode() <span class="hljs-comment"># Create an empty ListNode to serve as the dummy node for the merged list.</span>
        current = merged <span class="hljs-comment"># Initialize a pointer 'current' to the dummy node.</span>
        <span class="hljs-comment"># The while loop iterates as long as there are elements in both list1 and list2. Inside the loop, we compare the values of the current nodes in both lists</span>
        <span class="hljs-keyword">while</span> list1 <span class="hljs-keyword">and</span> <span class="hljs-symbol">list2:</span> 
            <span class="hljs-keyword">if</span> list1.val &lt;= list2.<span class="hljs-symbol">val:</span>  <span class="hljs-comment"># Append the smaller value from list1.</span>
                current.<span class="hljs-keyword">next</span> = list1  <span class="hljs-comment"># Move the pointer in list1 to the next node.</span>
                list1 = list1.<span class="hljs-keyword">next</span> <span class="hljs-comment"># Move the pointer in list1 to the next node.</span>
            <span class="hljs-symbol">else:</span>
                current.<span class="hljs-keyword">next</span> = list2 <span class="hljs-comment"># # Append the smaller value from list2.</span>
                list2 = list2.<span class="hljs-keyword">next</span> <span class="hljs-comment"># Move the pointer in list2 to the next node.</span>
            current = current.<span class="hljs-keyword">next</span>  <span class="hljs-comment"># Move the 'current' pointer to the newly appended node.</span>
        <span class="hljs-comment"># Append any remaining elements from list1 or list2</span>
        <span class="hljs-keyword">if</span> <span class="hljs-symbol">list1:</span>
            current.<span class="hljs-keyword">next</span> = list1 
        elif <span class="hljs-symbol">list2:</span>
            current.<span class="hljs-keyword">next</span> = list2
        <span class="hljs-keyword">return</span> merged.<span class="hljs-keyword">next</span>  <span class="hljs-comment"># Return the merged list starting from the first node.</span>
</code></pre>
<p><strong>Explanation</strong>
merged = ListNode(): We create an empty ListNode named merged to serve as the dummy node for the merged list. This dummy node helps simplify the merging process by providing a starting point for the merged list.</p>
<p>current = merged: We initialize a pointer current to the dummy node merged. This pointer will be used to traverse and build the merged list.</p>
<p>The while loop iterates as long as there are elements in both list1 and list2. Inside the loop, we compare the values of the current nodes in both lists and append the node with the smaller value to the merged list.</p>
<p>current.next = list1 or current.next = list2: We update the next attribute of the current node to point to the smaller node between list1 and list2. This effectively appends the smaller node to the merged list.</p>
<p>list1 = list1.next or list2 = list2.next: We move the pointer in the corresponding input list (list1 or list2) to the next node, as we&#39;ve already appended the current node to the merged list.</p>
<p>current = current.next: We move the current pointer to the newly appended node in the merged list so that the next iteration appends the next smallest node.</p>
<p>After the loop completes, we check if there are any remaining elements in list1 or list2 and append them to the merged list if necessary.</p>
<p>Finally, we return the merged list starting from the node after the dummy node (merged.next) to exclude the dummy node from the final result.</p>

</details>

</ol>
</details>

### Medium (5)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/maximum-subarray/">Maximum Subarray</a> - Problem #53</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">Longest Substring Without Repeating Characters</a> - Problem #3</li>
<details>
<summary>Summary</summary>
Optimizing substring calculations, similar to optimizing data processing tasks.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/container-with-most-water/">Container With Most Water</a> - Problem #11</li>
<details>
<summary>Summary</summary>
Optimization of container volume calculations, similar to optimizing data allocation in a system.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/search-in-rotated-sorted-array/">Search in Rotated Sorted Array</a> - Problem #33</li>
<details>
<summary>Summary</summary>
 Optimization of search algorithms, crucial in optimizing data retrieval processes.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/word-search/">Word Search</a> - Problem #79</li>
<details>
<summary>Summary</summary>
Optimization of pattern searching tasks, which is similar to optimizing data processing for finding specific patterns.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>
</details>

## Troubleshooting and Debugging (9)

### Easy (5)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/two-sum/">Two Sum</a> - Problem #1</li>
<details>
<summary>Summary</summary>
This problem requires problem-solving and debugging skills, similar to identifying issues and bugs in distributed systems.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        class Solution:
    def twoSum(self, num<span class="hljs-variable">s:</span> List[<span class="hljs-keyword">int</span>], targe<span class="hljs-variable">t:</span> <span class="hljs-keyword">int</span>) -&gt; List[<span class="hljs-keyword">int</span>]:
        <span class="hljs-keyword">res</span>=[]
        <span class="hljs-keyword">for</span> i in <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(nums)):
            <span class="hljs-keyword">for</span> <span class="hljs-keyword">a</span> in <span class="hljs-built_in">range</span>(i+<span class="hljs-number">1</span>,<span class="hljs-built_in">len</span>(nums)):
                <span class="hljs-keyword">if</span> (nums[i]+nums[<span class="hljs-keyword">a</span>]==target):
                    <span class="hljs-keyword">res</span>.<span class="hljs-keyword">append</span>(i)
                    <span class="hljs-keyword">res</span>.<span class="hljs-keyword">append</span>(<span class="hljs-keyword">a</span>)
                    <span class="hljs-keyword">break</span>     
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">res</span>
</code></pre>
<p><strong>Explanation</strong></p>


</details>
<li><a href="https://leetcode.com/problems/palindrome-number/">Palindrome Number</a> - Problem #9</li>
<details>
<summary>Summary</summary>
Involves checking for palindromes, akin to debugging and validating data correctness.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">isPalindrome</span><span class="hljs-params">(self, x: int)</span> -&gt; bool:</span>
        a = <span class="hljs-string">''</span>.join(reversed(str(x)))
        <span class="hljs-keyword">if</span> a == str(x):
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">True</span>
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">False</span>
</code></pre>
<p><strong>Explanation</strong></p>

</details>
<li><a href="https://leetcode.com/problems/longest-common-prefix/">Longest Common Prefix</a> - Problem #14</li>
<details>
<summary>Summary</summary>
Similar to identifying common patterns, a crucial skill in debugging distributed systems.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">isPalindrome</span><span class="hljs-params">(self, x: int)</span> -&gt; bool:</span>
        a = <span class="hljs-string">''</span>.join(reversed(str(x)))
        <span class="hljs-keyword">if</span> a == str(x):
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">True</span>
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">False</span>
</code></pre>
<p><strong>Explanation</strong></p>



</details>
<li><a href="https://leetcode.com/problems/valid-parentheses/">Valid Parentheses</a> - Problem #20</li>
<details>
<summary>Summary</summary>
Debugging skills are important in verifying the correctness of algorithms, a key aspect of troubleshooting.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Solution</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">isValid</span><span class="hljs-params">(self, s: str)</span> -&gt; bool:</span>
        <span class="hljs-keyword">while</span> <span class="hljs-string">'()'</span> <span class="hljs-keyword">in</span> s <span class="hljs-keyword">or</span> <span class="hljs-string">'[]'</span><span class="hljs-keyword">in</span> s <span class="hljs-keyword">or</span> <span class="hljs-string">'{}'</span> <span class="hljs-keyword">in</span> s:
            s = s.replace(<span class="hljs-string">'()'</span>,<span class="hljs-string">''</span>).replace(<span class="hljs-string">'[]'</span>,<span class="hljs-string">''</span>).replace(<span class="hljs-string">'{}'</span>,<span class="hljs-string">''</span>)
        <span class="hljs-keyword">if</span> len(s) !=<span class="hljs-number">0</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">False</span>
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">True</span>
</code></pre>
<p><strong>Explanation</strong></p>


</details>
</ol>
</details>

### Medium (4)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/compare-version-numbers/">Compare Version Numbers</a> - Problem #165</li>
<details>
<summary>Summary</summary>
Debugging and problem-solving for version comparison, similar to identifying compatibility issues in distributed systems.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/decode-string/">Decode String</a> - Problem #394</li>
<details>
<summary>Summary</summary>
Debugging and problem-solving for decoding tasks, similar to fixing issues with data transformations.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/top-k-frequent-words/">Top K Frequent Words</a> - Problem #692</li>
<details>
<summary>Summary</summary>
Debugging and problem-solving related to frequent item calculations, similar to identifying and fixing issues with data analysis.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/multiply-strings/">Multiply Strings</a> - Problem #43</li>
<details>
<summary>Summary</summary>
Debugging and optimizing string multiplication algorithms, crucial in identifying and fixing performance bottlenecks
</details>

<details>
<summary>Solution</summary>
</details>
</ol>

</details>


## Database Design and Querying (14)

### Easy (6)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/combine-two-tables/">Combine Two Tables</a> - Problem #175</li>
<details>
<summary>Summary</summary>
This problem involves using SQL <code>JOIN</code> to combine information from two different tables based on a common key.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/rising-temperature/">Rising Temperature</a> - Problem #197</li>
<details>
<summary>Summary</summary>
This problem focuses on querying a <code>Weather</code> table to find days where the temperature was higher than the previous day.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/big-countries/">Big Countries</a> - Problem #595</li>
<details>
<summary>Summary</summary>
This problem involves selecting countries with a population greater than 250 million or an area greater than 3 million square kilometers using SQL.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/employees-earning-more-than-their-managers/">Employees Earning More Than Their Managers</a> - Problem #181</li>
<details>
<summary>Summary</summary>
In this problem, you need to compare salaries between employees and their managers using SQL queries.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/customers-who-never-order/">Customers Who Never Order</a> - Problem #183</li>
<details>
<summary>Summary</summary>
This problem requires identifying customers who have never placed an order by using a combination of SQL <code>JOIN</code> and <code>NOT EXISTS</code>.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/duplicate-emails/">Duplicate Emails</a> - Problem #182</li>
<details>
<summary>Summary</summary>
The task here is to find duplicate email addresses from a <code>Person</code> table using SQL queries.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>

</details>

### Medium (8)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/nth-highest-salary/">Nth Highest Salary</a> - Problem #177</li>
<details>
<summary>Summary</summary>
This problem involves finding the Nth highest salary using SQL.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/consecutive-numbers/">Consecutive Numbers</a> - Problem #180</li>
<details>
<summary>Summary</summary>
The task is to find numbers that appear at least three times consecutively in a table using SQL queries.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/exchange-seats/">Exchange Seats</a> - Problem #626</li>
<details>
<summary>Summary</summary>
This problem involves simulating a classroom seating arrangement and exchanging the seats of adjacent students. You are given a table that represents the current seating arrangement with student IDs and their corresponding seats. The task is to design a query that exchanges the seats of adjacent students, assuming that the total number of students is even.

This problem demonstrates the use of SQL queries to manipulate and update data in a database table. The problem tests your ability to work with relational data, update specific rows, and perform conditional updates based on the positions of students.

In a real-world scenario, this problem reflects how database queries can be used to manage seating arrangements, perform data updates, and ensure data consistency. It showcases your skills in writing efficient and effective SQL queries to perform specific tasks within a database environment.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/product-price-at-a-given-date/">Product Price at a Given Date</a> - Problem #1164</li>
<details>
<summary>Summary</summary>
This problem involves querying a database to find the price of a product at a given date. It requires crafting SQL queries to filter products based on their price history and the provided date. The problem tests your ability to retrieve historical data from a database and filter it based on specific conditions.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/second-highest-salary/">Second Highest Salary</a>  - Problem #176</li>
<details>
<summary>Summary</summary>
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/last-person-to-fit-in-the-bus/">Last Person to Fit in the Bus</a> - Problem #1204</li>
<details>
<summary>Summary</summary>
This problem is about simulating elevator trips for a building. You need to design a query to determine who was the last person to fit in the elevator after a certain time. It involves joining tables, filtering data based on specific conditions, and finding the maximum value. The problem mirrors real-world scenarios where database queries are used to manage and analyze data about people and events.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/tree-node/">Tree Node</a> - Problem #608</li>
<details>
<summary>Summary</summary>
This problem involves working with a database table representing a tree structure. You need to design a query to retrieve information about parent and child relationships within the tree. It's an example of how databases can be used to model hierarchical structures and retrieve data based on those relationships.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/rank-scores/">Rank Scores</a> - Problem #178</li>
<details>
<summary>Summary</summary>
In this problem, you are tasked with ranking scores in a database table. You need to design a query that assigns ranks to scores while handling cases of ties. This problem is a classic example of using SQL to generate rankings and order data based on certain criteria.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>
</details>


## Distributed Systems (11)

### Easy (5)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/nim-game/">Nim Game</a> - Problem #292</li>
<details>
<summary>Summary</summary>
This problem illustrates game strategy in a distributed context, akin to making decisions in a distributed environment.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/flood-fill/">Flood Fill</a> - Problem #733</li>
<details>
<summary>Summary</summary>
This problem simulates the spread of information through cells, similar to data propagation in distributed systems.
</details>

<details>
<summary>Solution</summary>
<pre><code class="lang-python">class Solution:
    def floodFill(self, <span class="hljs-built_in">image</span>: List[List[int]], sr: int, sc: int, <span class="hljs-built_in">color</span>: int) -&gt; List[List[int]]:
        <span class="hljs-keyword">if</span> <span class="hljs-built_in">image</span>[sr][sc] == <span class="hljs-built_in">color</span>:
            <span class="hljs-built_in">return</span> <span class="hljs-built_in">image</span>
        def dfs(<span class="hljs-built_in">row</span>, <span class="hljs-built_in">col</span>, startColor):
            <span class="hljs-keyword">if</span> <span class="hljs-built_in">row</span> &lt; <span class="hljs-number">0</span> <span class="hljs-keyword">or</span> <span class="hljs-built_in">row</span> &gt;= len(<span class="hljs-built_in">image</span>) <span class="hljs-keyword">or</span> <span class="hljs-built_in">col</span> &lt; <span class="hljs-number">0</span> <span class="hljs-keyword">or</span> <span class="hljs-built_in">col</span> &gt;= len(<span class="hljs-built_in">image</span>[<span class="hljs-number">0</span>]) <span class="hljs-keyword">or</span> <span class="hljs-built_in">image</span>[<span class="hljs-built_in">row</span>][<span class="hljs-built_in">col</span>] != startColor:
                <span class="hljs-built_in">return</span>
            <span class="hljs-built_in">image</span>[<span class="hljs-built_in">row</span>][<span class="hljs-built_in">col</span>] = <span class="hljs-built_in">color</span>

            dfs(<span class="hljs-built_in">row</span> + <span class="hljs-number">1</span> , <span class="hljs-built_in">col</span>, startColor)
            dfs(<span class="hljs-built_in">row</span> - <span class="hljs-number">1</span>, <span class="hljs-built_in">col</span>, startColor)
            dfs(<span class="hljs-built_in">row</span>, <span class="hljs-built_in">col</span> + <span class="hljs-number">1</span>, startColor)
            dfs(<span class="hljs-built_in">row</span>, <span class="hljs-built_in">col</span> - <span class="hljs-number">1</span>, startColor)
        startColor = <span class="hljs-built_in">image</span>[sr][sc]
        dfs(sr, sc, startColor)
        <span class="hljs-built_in">return</span> <span class="hljs-built_in">image</span>
</code></pre>

<p><strong>Explanation</strong></p>
<ol>
<li><p>Check if the <code>newColor</code> is the same as the color at the starting point <code>(sr, sc)</code>. If they are the same, there&#39;s no need to perform the flood fill, so return the original <code>image</code>.</p>
</li>
<li><p>Define a depth-first search (DFS) function, <code>dfs</code>, which takes the current row and column and the starting color as parameters. This function recursively explores neighboring pixels and changes their color to the <code>newColor</code>.</p>
</li>
<li><p>Inside the <code>dfs</code> function:</p>
<ul>
<li>Check if the current pixel is out of bounds or if it doesn&#39;t have the same color as the starting color. If any of these conditions are met, return, as there&#39;s no need to visit or change the color of this pixel.</li>
<li>Change the color of the current pixel to the <code>newColor</code>.</li>
<li>Recursively call <code>dfs</code> on the neighboring pixels in all four directions (up, down, left, right).</li>
</ul>
</li>
<li><p>Set the <code>startColor</code> variable to the color of the starting pixel <code>(sr, sc)</code>.</p>
</li>
<li><p>Call the <code>dfs</code> function to start the flood fill operation from the <code>(sr, sc)</code> point.</p>
</li>
<li><p>Return the modified <code>image</code> after the flood fill is complete.</p>
</li>
</ol>

</details>
<li><a href="https://leetcode.com/problems/to-lower-case/">To Lower Case</a> - Problem #709</li>
<details>
<summary>Summary</summary>
This problem demonstrates converting strings to lowercase, which is crucial in distributed systems for standardizing data formats.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/climbing-stairs/">Climbing Stairs</a> - Problem #70</li>
<details>
<summary>Summary</summary>
This problem compares to distributed problems with multiple paths, where optimizing traversal becomes essential.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/balanced-binary-tree/">Balanced Binary Tree</a> - Problem #110</li>
<details>
<summary>Summary</summary>
Balancing a binary tree is essential in distributed databases for optimizing data storage and retrieval.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>

</details>

### Medium (6)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/network-delay-time/">Network Delay Time</a> - Problem #743</li>
<details>
<summary>Summary</summary>
This problem mimics the propagation of information through a distributed network, similar to data transmission delays.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/number-of-islands/">Number of Islands</a> - Problem #200</li>
<details>
<summary>Summary</summary>
This problem relates to distributed computation by simulating the spread of information through connected components in a grid.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/course-schedule/">Course Schedule</a> - Problem #207</li>
<details>
<summary>Summary</summary>
This problem reflects dependencies in distributed task scheduling, which is crucial for resource allocation
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/as-far-from-land-as-possible/">As Far from Land as Possible</a> - Problem #1162</li>
<details>
<summary>Summary</summary>
This problem involves measuring distances between nodes, similar to distance calculations in a distributed spatial context.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/rotting-oranges/">Rotting Oranges</a> - Problem #994</li>
<details>
<summary>Summary</summary>
This problem simulates distributed state changes and their propagation, similar to message passing in distributed systems.
</details>

<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/evaluate-division/">Evaluate Division</a> - Problem #399</li>
<details>
<summary>Summary</summary>
This problem resembles graph traversal and calculations, which are often seen in distributed systems' computations.
</details>

<details>
<summary>Solution</summary>
</details>
</ol>
</details>

## System Design and Architecture (10)

### Easy (4)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/design-hashset/">Design HashSet</a> - Problem #705</li>
<details>
<summary>Summary</summary>
<p>In this problem, you&#39;re required to design a simple HashSet data structure, supporting basic operations like insertion, deletion, and checking for the presence of an element. While this problem might seem straightforward, it has some underlying connections to system design and architecture concepts:</p>
<ol>
<li><p><strong>Data Modeling and Storage:</strong> When designing a HashSet, you need to think about how to organize and store the data efficiently. This can relate to database schema design in a larger system, where you would consider how to store and access data optimally.</p>
</li>
<li><p><strong>Data Access Optimization:</strong> In a larger system, quick access to data is crucial. When designing a HashSet, you&#39;re challenged to implement efficient lookup and manipulation operations, similar to how efficient data retrieval is a key consideration in designing systems.</p>
</li>
<li><p><strong>Collision Handling:</strong> Hash collisions can occur when multiple elements map to the same hash value. This connects to concepts of distributed systems and hashing techniques, which are relevant when handling data across multiple servers.</p>
</li>
<li><p><strong>Concurrency and Consistency:</strong> While the problem might not explicitly require it, in a distributed system, you would need to consider issues like concurrent access and maintaining data consistency. This mirrors challenges faced in distributed databases and systems.</p>
</li>
<li><p><strong>Scalability:</strong> While the problem doesn&#39;t specifically touch on this, when designing a HashSet for a large-scale system, you&#39;d need to think about how to make the data structure scalable, possibly by sharding or partitioning data across different nodes.</p>
</li>
<li><p><strong>Data Integrity and Error Handling:</strong> Ensuring that your HashSet functions correctly and handles errors gracefully is akin to ensuring data integrity and handling exceptions in a real-world system.</p>
</li>
</ol>
<p>While this problem isn&#39;t a full-blown system design challenge, it provides a microcosm of considerations that come into play when designing and implementing data structures in a larger system. It&#39;s about making design choices that optimize for performance, reliability, and scalability—core tenets of system design and architecture.</p>
</details>
<details>
<summary>Problem</summary>
<p>Design a HashSet without using any built-in hash table libraries.</p>
<p>Implement <code>MyHashSet</code> class:</p>
<ul>
<li><code>void add(key)</code> Inserts the value <code>key</code> into the HashSet.</li>
<li><code>bool contains(key</code>) Returns whether the value <code>key</code> exists in the HashSet or not.</li>
<li><code>void remove(key)</code> Removes the value <code>key</code> in the HashSet. If <code>key</code> does not exist in the HashSet, do nothing</li>
</ul>
<p><strong>Example 1:</strong></p>
<p><strong>Input</strong></p>
<pre><code>[<span class="hljs-string">"MyHashSet"</span>, <span class="hljs-string">"add"</span>, <span class="hljs-string">"add"</span>, <span class="hljs-string">"contains"</span>, <span class="hljs-string">"contains"</span>, <span class="hljs-string">"add"</span>, <span class="hljs-string">"contains"</span>, <span class="hljs-string">"remove"</span>, <span class="hljs-string">"contains"</span>]
[[], [<span class="hljs-number">1</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">1</span>], [<span class="hljs-number">3</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>]]
</code></pre><p><strong>Output</strong></p>
<pre><code>[<span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">false</span>]
</code></pre><p><strong>Explanation</strong></p>
<pre><code><span class="hljs-type">MyHashSet</span> myHashSet = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">MyHashSet</span>();
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">add</span>(<span class="hljs-number">1</span>);      <span class="hljs-comment">// set = [1]</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">add</span>(<span class="hljs-number">2</span>);      <span class="hljs-comment">// set = [1, 2]</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">contains</span>(<span class="hljs-number">1</span>); <span class="hljs-comment">// return True</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">contains</span>(<span class="hljs-number">3</span>); <span class="hljs-comment">// return False, (not found)</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">add</span>(<span class="hljs-number">2</span>);      <span class="hljs-comment">// set = [1, 2]</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">contains</span>(<span class="hljs-number">2</span>); <span class="hljs-comment">// return True</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">remove</span>(<span class="hljs-number">2</span>);   <span class="hljs-comment">// set = [1]</span>
<span class="hljs-title">myHashSet</span>.<span class="hljs-title">contains</span>(<span class="hljs-number">2</span>); <span class="hljs-comment">// return False, (already removed)</span></span>
</code></pre><p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= key &lt;= 106</code></li>
<li>At most 10<sup>4</sup> calls will be made to <code>add</code>, <code>remove</code>, and <code>contains</code>.</li>
</ul>
</details>
<details>
<summary>Solution</summary>


</details>
<li><a href="https://leetcode.com/problems/implement-queue-using-stacks/">Implement Queue using Stacks</a> - Problem #232</li>
<details>
<summary>Summary</summary>
This problem involves designing a queue using stacks. It tests your ability to create a data structure that emulates a queue's behavior using another data structure. Such design considerations are important when implementing efficient data processing pipelines.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/implement-queue-using-stacks/">Implement Queue using Stacks</a> - Problem #225</li>
<details>
<summary>Summary</summary>
Reinforces the concept of designing a queue using stacks, further illustrating the relationship between different data structures.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/next-greater-element-i/">Next Greater Element I</a> - Problem #496</li>
<details>
<summary>Summary</summary>
This problem reinforces the concept of designing a queue using stacks, further illustrating the relationship between different data structures.
</details>
<details>
<summary>Solution</summary>
</details>
</ol>
</details>

### Medium (6)
<details>
<summary>Click for problems</summary>
<ol>
<li><a href="https://leetcode.com/problems/lru-cache/">LRU Cache</a> - Problem #146</li>
<details>
<summary>Summary</summary>
Designing a least recently used (LRU) cache involves managing data eviction strategies efficiently, which is crucial in system design where memory management and caching play a role.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/">Reorder Routes to Make All Paths Lead to the City Zero</a> - Problem #1466</li>
<details>
<summary>Summary</summary>
This problem simulates reordering routes in a directed graph to centralize paths. In system design, centralized data processing and communication can improve efficiency and reduce latency.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/min-stack/">Min Stack</a> - Problem #155</li>
<details>
<summary>Summary</summary>
This problem requires designing a stack that supports constant-time retrieval of the minimum element. It relates to designing data structures that optimize for certain operations, which is a fundamental aspect of system design and architecture.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/count-unhappy-friends/">Count Unhappy Friends</a> - Problem #1583</li>
<details>
<summary>Summary</summary>
This problem requires designing a mechanism to count unhappy friends based on their preferences. This concept is similar to data analysis and pattern recognition in larger-scale systems.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/">Construct Binary Tree from Preorder and Inorder Traversal</a> - Problem #105</li>
<details>
<summary>Summary</summary>
In system design, constructing complex data structures efficiently from partial information can be crucial for optimization.
</details>
<details>
<summary>Solution</summary>
</details>
<li><a href="https://leetcode.com/problems/accounts-merge/">Accounts Merge</a> - Problem #721</li>
<details>
<summary>Summary</summary>
This problem involves designing a mechanism to merge user accounts, which is analogous to merging data and records in a larger system.
</details>
<details>
<summary>Solution</summary>
</details>
</ol>
</details>