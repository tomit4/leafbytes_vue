<script setup>
    import { onMounted } from 'vue'
    import Prism from "prismjs"
    import prvbtn from '../views_data/prevbtn.json'
    onMounted(() => { Prism.highlightAll() })
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="intro-header">
                <router-link :aria-label="prvbtn[0].ariaLabel" class="prev-btn"
                to="/blog/git-basics"
                v-html="prvbtn[0].svg"></router-link>
            </div>
            <p class="article-header">the readme</p>
            <p class="article-header3">documentation for beginners</p>
            <div class="article-body">
                <figure>
                    <img
                        class="header-images intro-image"
                        src="../../assets/img/markdown_logo.webp"
                        alt="An image of the markdown logo"
                        title="An image of the markdown logo"
                        cite=""
                        loading="lazy"
                    />
                <figcaption>The Markdown Logo</figcaption>
                </figure>
                <blockquote class="article-quotes" cite="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg">
                    "Documentation is a love letter that you write to your
                    future self."
                    <br> -<a class="blockquote-links" target="_blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Damian_Conway"><em>Damian
                    Conway</em></a>
                </blockquote>
                <h4 class="article-header4">Introduction</h4>
                <p class="article-content">
                    Documentation in the world of software is an essential part of the development
                    process. Without proper documentation both users and developers are given the
                    monumental task of parsing out a project line by line in order to understand how
                    to debug the project, contribute to the project, or indeed, even utilize the
                    software itself.
                </p>
                <p class="article-content">
                    There are many forms of documenting projects, be they man pages accessible via
                    the terminal to official documentation provided by the developer hosted on their
                    website. The intermediary piece of documentation that a new software developer
                    must become familiar with how to write is the README.md file. If you have ever
                    perused a properly maintained Repository page on Github or other hosting
                    service websites, you have most certainly come across a README.md. The finished
                    document looks something like this:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-01.webp"
                        alt="A sample page of a readme"
                        title="A sample page of a readme"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>A Sample README.md from the Timeshift
                    Repository</figcaption>
                </figure>
                <h4 class="article-header4">The Basic Readme</h4>
                <p class="article-content">
                    The README is a document that one can think of as being the entry point to learning
                    about and using a piece of software. Oftentimes this document provides
                    instructions on installation, basic usage, and configuration. Sometimes multiple
                    READMEs are provided on more extensive projects to help developers extend,
                    debug, and manage a piece of software.
                </p>
                <p class="article-content">
                    Not including a README, even when working on a trivial or basic project, is
                    considered poor etiquette, as having no README leaves any potential user or
                    developer with absolutely no information about what lies within the project, and
                    indicates that the project maintainer doesn't care about the project, or at
                    least, doesn't care to provide documentation. Very simply, it is always a good
                    idea to provide at least a basic README when creating a project.
                </p>
                <p class="article-content">
                    Although a README can be written in plain text or even HTML, the markdown
                    language has become the standard for writing READMEs, as it provides a quick way
                    to create formatted text that is well presented to the reader. READMEs are
                    traditionally capitalized so that the 'ls' command prioritizes its display, and
                    the .md appended to the end of the README is to indicate that the document is
                    written in markdown.
                </p>
                <h4 class="article-header4">The Markdown Language</h4>
                <p class="article-content">
                    Anyone familiar with The HyperText Markup Language, commonly known as HTML, will
                    find themselves comfortable working in Markdown, as many pieces of Markdown are
                    interchangeable with classic HTML elements, just expressed differently.
                </p>
                <p class="article-content">
                    In certain circumstances, the Markdown language is even more powerful than HTML,
                    as it can very quickly represent tables, graphs, checkboxes, and other common
                    presentation elements in a way that is easier to read and requires fewer typed
                    characters to express them.
                </p>
                <p class="article-content">
                    For the remainder of this blog post, I will cover how to create a standard README
                    for a software project. While Markdown has many extensive features such as
                    presentation graphs and tables, I will solely be covering the basics for the
                    sake of brevity and this is only meant as an introduction. Should you desire to
                    explore what other features the Markdown language has to offer, I advise you to
                    take a look at the <a class="article-outside-links" target="_blank" rel="noopener
                    noreferrer" href="https://www.markdownguide.org/">official guide</a>.
                </p>
                <h4 class="article-header4">Getting Started</h4>
                <p class="article-content">
                    At the end of the day, Markdown is simply an extension upon a plain text
                    document, so one can get started working in it right away. Navigate to the base
                    of a project you'd like to write a README for (or just create a test directory),
                    and let's create one from command line using the touch command:
                    <pre><code class="language-bash">[ ~]$ touch README.md</code></pre>
                </p>
                <p class="article-content">
                    Next we'll open up our newly created README.md file in our favorite text editor
                    and start documenting our project. I'll be using Neovim for my examples, and
                    will also be using an extension called
                    <a class="article-outside-links" target="_blank" rel="noopener noreferrer"
                    href="https://github.com/iamcco/markdown-preview.nvim">markdown-preview</a>. If
                    you are reading this blog post and want to follow along in
                    VS Code, there is equivalent functionality available for that editor as well.
                </p>
                <p class="article-content">
                    Let's write out a header, with the title of our project. I'm going to call my
                    project, "markdown_ex".
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-02.webp"
                        alt="a h1 header displayed in both neovim and the browser"
                        title="a h1 header displayed in both neovim and the browser"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>An H1 header expressed in Markdown</figcaption>
                </figure>
                <p class="article-content">
                    As you can see, a single hashtag "#" character is interpreted by Markdown as
                    indicating the beginning of a header. This is equivalent to an &lth1&gt tag in HTML.
                    Let's create some other headers as an example.
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-03.webp"
                        alt="a series of headers expressed in markdown"
                        title="a series of headers expressed in markdown"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>A series of headers expressed in Markdown</figcaption>
                </figure>
                <p class="article-content">
                    Now, what's nice about Markdown is at this point you can simply start typing out
                    your documentation. Unlike in HTML, there is no need to encapsulate everything
                    in paragraph tags, so working in Markdown becomes more akin to working in an
                    extremely basic word processor. You can revert to using HTML elements if you'd
                    like, but especially in this mentioned example, it is not necessary:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-04.webp"
                        alt="basic display of paragraph text in markdown"
                        title="basic display of paragraph text in markdown"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>No paragraph tags are necessary in Markdown</figcaption>
                </figure>
                <h4 class="article-header4">Stylizing Text</h4>
                <p class="article-content">
                    Let's now explore some of the basic features that Markdown has to offer. Let's
                    say we wish to stylize our text a little beyond just making headers. Well, we
                    have many options at our disposal. Let's create some bold, italic, underline,
                    and strike-through pieces of text:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-05.webp"
                        alt="various stylizing of markdown text"
                        title="various stylizing of markdown text"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>Bold, Italicize, Strikethrough and Underline in
                    Markdown</figcaption>
                </figure>
                <p class="article-content">
                    Here we see the various syntax utilized for styling pieces of text in markdown.
                    I'll cover briefly the basic syntax here:
                    <pre><code class="language-markdown">**two stars creates bold text**
__two underscores also creates bold text__</code></pre>
                    <pre><code class="language-markdown">*single star creates italicized text*
_single underscore also creates italicized text_</code></pre>
                    <pre><code class="language-markdown">~~two tildes creates strikethrough text~~</code></pre>
                    <pre><code class="language-markdown">&ltu&gthtml style u tags create underline text&lt/u&gt</code></pre>
                </p>
                <h4 class="article-header4">Creating Lists</h4>
                <p class="article-content">
                    As I mentioned earlier, the syntax of Markdown can be far nicer than HTML in
                    many respects. A good example of this is creating ordered and unordered list. In
                    HTML, creating an unordered list looks like this:
                    <pre><code class="language-cshtml">&ltul&gt
    &ltli&gtMy first item&lt/li&gt
    &ltli&gtMy second item&lt/li&gt
    &ltli&gtMy third item&lt/li&gt
&lt/ul&gt</code></pre>
                </p>
                <p class="article-content">
                    As opposed to in Markdown:
                    <pre><code class="language-markdown">- My first item
- My second item
- My third item</code></pre>
                </p>
                <p class="article-content">
                    The following picture demonstrates the simple creation of ordered and unordered
                    lists in markdown:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-06.webp"
                        alt="a demonstration of creating lists in markdown"
                        title="a demonstration of creating lists in markdown"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>creating lists in markdown is easy</figcaption>
                </figure>
                <h4 class="article-header4">Creating Links</h4>
                <p class="article-content">
                    Markdown is especially easy on the eyes when it comes to creating links. In
                    HTML, creating a basic link can be created like so:
                    <pre><code class="language-cshtml">&lta href="https://www.example.com"&gtmy example link&lt/a&gt</code></pre>
                </p>
                <p class="article-content">
                    The same can be accomplished in Markdown like so:
                    <pre><code class="language-markdown">[my example link](https://www.example.com)</code></pre>
                </p>

                <h4 class="article-header4">Code Snippets</h4>
                <p class="article-content">
                    The Markdown language is multifaceted, it can be utilized to document anything
                    from scientific papers to simple blog posts and is often utilized in online
                    forums. One of the most common usage for Markdown is code snippets, which can be
                    expressed using backticks like so:
                    <pre><code class="language-markdown">```console.log('nice code block!')```</code></pre>
                </p>
                <p class="article-content">
                    Or Like so:
                    <pre><code class="language-markdown">`console.log('nice code block!')`</code></pre>
                </p>
                <p class="article-content">
                    If, for example, you needed to present some basic JSON, you could do so very
                    simply like so:
                    <pre><code class="language-markdown">``
{
    "firstName: "John",
    "lastName": "Smith",
    "age": 25
}
``</code></pre>
                </p>
                <p class="article-content">
                    The following picture demonstrates the effect:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-07.webp"
                        alt="demonstration of writing code blocks in markdown"
                        title="demonstration of writing code blocks in markdown"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>writing code blocks is essential for software
                    documentation</figcaption>
                </figure>
                <h4 class="article-header4">Checkboxes</h4>
                <p class="article-content">
                    One of my personal favorite uses of Markdown is to place a list of checkboxes
                    towards the bottom of my READMEs. This usually is a list of various aspects of
                    my software that need to be worked on, such as new features, bug fixes, and
                    documentation.
                </p>
                <p class="article-content">
                    Checkboxes can be instantiated like so, one is checked off, the other is not:

                    <pre><code class="language-markdown">- [x] This is a completed task
- [ ] This task has yet to be done</code></pre>
                </p>
                <p class="article-content">
                    And here is an example Picture showing the results:
                </p>
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/readme-pic-08.webp"
                        alt="demonstration of how to write checkboxes in
                        markdown"
                        title="demonstration of how to write checkboxes in
                        markdown"
                        cite="screenshot"
                        loading="lazy"
                    />
                    <figcaption>checkboxes are a great way of keeping track of
                    your project</figcaption>
                </figure>
                <h4 class="article-header4">Conclusion</h4>
                <p class="article-content">
                    The capabilities of Markdown are vast. In addition to what has been covered here,
                    one can create tables, graphs, and embed images/gifs into Markdown files to
                    further help document your projects.
                </p>
                <p class="article-content">
                    A good README can often be the saving grace of a project. Even if a project is
                    poorly designed or not well maintained, a good README can provide a general overview
                    of a piece of software and help others navigate its use, configuration, and
                    further development. Without a README, the potential user or developer is left
                    solely with the code itself to determine everything about the project. Indeed, a
                    project without a README is probably not worth investigating, unless the
                    codebase is particularly small and even then, some form of introductory
                    documentation would be highly encouraged.
                </p>
                <p class="article-content">
                    As a beginning software developer, the README is one of your most important
                    tools when learning about a new tool, or even referring back to one of your old
                    projects. It is within your best interest to develop a good habit of writing
                    READMEs and other forms documentation for your projects, so take the time to
                    familiarize yourself with one of the most common forms of it, Markdown.
                </p>
                <p class="article-content">
                    I do hope this has been helpful to you and provides you with a basic
                    understanding of the Markdown language and how to utilize it for a basic README.
                    Cheers and Happy Coding!
                </p>
            </div>
            <div class="spacer"></div>
        </div>
    </div>
</template>
