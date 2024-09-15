export const content = [
    {
      id: 0,
        date: '8 sept, 2024',
        title: 'Debouncing Click Events in javascript⚡',
        language: 'Javascript',
        category: 'Javascript',
        code: `function debounce(func, delay) {
  let debounceTimer;
  return function(...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}
`
    },
    {
      id: 1,
        date: '8 sept, 2024',
        title: 'Centering Elements with Flexbox 🎯',
        language: 'CSS',
        category: 'CSS',
        code: `<body>
    <div class="centered">
        <p>Centered Content</p>
    </div>
</body>
    <style>
        .centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
    </style>`

    },
    {
      id: 2,
        date: '8 sept, 2024',
        title: 'Simple Counter with React Hooks 🔢',
        language: 'React',
        category: 'React',
        code: `import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
`
    },
    {
      id: 3,
        date: '8 sept, 2024',
        title: 'Form and Function: Your Personal Info Gateway 📝',
        language: 'HTML',
        category: 'HTML',
        code: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <input type="submit" value="Submit">
</form>
`
    },
    {
      id: 4,
        date: '8 sept, 2024',
        title: 'Creating a Basic HTTP Server 🌐',
        language: 'Node.js',
        category: 'Node.js',
        code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
    },
   
    {
      id: 5,
        date: '8 sept, 2024',
        title: 'Sorting an Array in Java 🃏',
        language: 'Java',
        category: 'Java',
        code: `import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] numbers = {5, 1, 4, 2, 3};
    Arrays.sort(numbers);
    System.out.println(Arrays.toString(numbers));
  }
}`
    },
    {
      id: 6,
      date: '8 sept, 2024',
      title: 'Responsive Grid Layout 🎛️',
      language: 'CSS',
      category: 'CSS',
      code: `<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
</body>
<style>
      .grid-container {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 10px;
}
</style>`
  },
    {
      id: 7,
      date: '14 sept, 2024',
      title: 'Basic Git Commands for Repositories 🚀',
      language: 'Git',
      category: 'Git',
      code: `git init
git add .
git commit -m "Initial commit"
git remote add origin <remote_repository_url>
git push -u origin master
`
  },
  {
    id: 8,
    date: '8 sept, 2024',
    title: 'program to do Selection Sort on an array. 📊✨',
    language: 'C++',
    category: 'DSA',
    code: `#include<bits/stdc++.h>

using namespace std;
void selection_sort(int arr[], int n) {
  // selection sort
  for (int i = 0; i < n - 1; i++) {
    int mini = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    int temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }

  cout << "After selection sort: " << "\n";
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << "\n";

}
int main() {
  int arr[] = {13,46,24,52,20,9};
  int n = sizeof(arr) / sizeof(arr[0]);
   cout << "Before selection sort: " << "\n";
   for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << "\n";
  selection_sort(arr, n);
  return 0;
}`
},
{
  id: 9,
  date: '14 sept, 2024',
  title: 'program to do Bubble Sort on an array. 📊✨',
  language: 'c++',
  category: 'DSA',
  code: `#include <bits/stdc++.h>
using namespace std;

void bubble_sort(int arr[], int n) {
    // bubble sort
    for (int i = n - 1; i >= 0; i--) {
        int didSwap = 0;
        for (int j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                didSwap = 1;
            }
        }
        if (didSwap == 0) {
            break;
        }
    }

    cout << "After Using bubble sort: " << "\n";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main()
{
    int arr[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Before Using Bubble Sort: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    bubble_sort(arr, n);
    return 0;
}`
},
{
  id: 10,
  date: '14 sept, 2024',
  title: 'program to do Insertion Sort on an array. 📊✨',
  language: 'c++',
  category: 'DSA',
  code: `#include <bits/stdc++.h>
using namespace std;

void insertion_sort(int arr[], int n) {
    for (int i = 0; i <= n - 1; i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            int temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    cout << "After Using insertion sort: " << "\n";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main()
{
    int arr[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Before Using insertion Sort: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    insertion_sort(arr, n);
    return 0;
}`
},
]