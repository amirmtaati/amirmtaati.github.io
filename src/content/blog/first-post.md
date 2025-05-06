---
title: A Complete Guide to Markdown Features
date: 2025-05-03
description: This post demonstrates all the features of Markdown, including headers, lists, images, links, code blocks, tables, and more, formatted for an Astro blog.
tags: [markdown, tutorial, astro, writing]
---

# A Complete Guide to Markdown Features

Welcome to this comprehensive guide showcasing all the features of Markdown! This post is designed to demonstrate how to use Markdown in your Astro blog while adhering to the content collection schema.

# Markdown Feature Showcase

This file demonstrates all major features of **Markdown**.

---

## Table of Contents

1. [Headings](#headings)
2. [Paragraphs and Line Breaks](#paragraphs-and-line-breaks)
3. [Text Emphasis](#text-emphasis)
4. [Lists](#lists)
5. [Links](#links)
6. [Images](#images)
7. [Code](#code)
8. [Blockquotes](#blockquotes)
9. [Horizontal Rules](#horizontal-rules)
10. [Tables](#tables)
11. [Task Lists](#task-lists)
12. [Footnotes](#footnotes)
13. [Math Formulas](#math-formulas)
14. [Escaping Characters](#escaping-characters)

---

## Headings

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## Paragraphs and Line Breaks

This is a paragraph.  
This is a line break using two spaces.  
Here's another paragraph.

---

## Text Emphasis

- *Italic*
- _Italic_
- **Bold**
- __Bold__
- ***Bold and Italic***
- ~~Strikethrough~~

---

## Lists

### Unordered List

- Item 1
  - Subitem 1
  - Subitem 2
- Item 2

### Ordered List

1. First
2. Second
   1. Sub-second
   2. Sub-third
3. Third

---

## Links

[OpenAI](https://www.openai.com)  
<https://www.openai.com>

---

## Images

![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

## Code

### Inline Code

Use the `print()` function in Python.

### Code Block (Python)

```python
def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("Markdown")
````

### Code Block (Generic)

```bash
npm install markdown
```

---

## Blockquotes

> Markdown is awesome.
> — *Someone Smart*

> > Nested Blockquote

---

## Horizontal Rules

---

---

---

---

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

Right-aligned:

|  Name | Score |
| ----: | ----: |
|   Bob |    87 |
| Alice |    93 |

---

## Task Lists

* [x] Write markdown
* [x] Test rendering
* [ ] Add more content
* [ ] Celebrate!

---

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

---

## Math Formulas

You can write inline math like this:
Euler's identity: \$e^{i\pi} + 1 = 0\$

Or display math blocks:

$$
\int_{a}^{b} x^2 \, dx = \left[ \frac{x^3}{3} \right]_a^b
$$

Quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Matrix example:

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

Summation and product notation:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \quad 
\prod_{k=1}^{n} k = n!
$$

Limits:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

---

## Escaping Characters

Use a backslash to escape characters:
\*literal asterisks\*
\_literal underscores\_
\`literal backticks\`


