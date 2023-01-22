<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/tomit4/leafbytes_vue/main/readme_assets/readme_logo.png" width="100" />
</div>

<h1 align="center">
leafbytes.com
</h1>

<p align="center">
This repository contains the source code for the V2 iteration of my
blog/website.
<a href="https://leafbytes.com">Leafbytes</a>.
</p>

<p align="center">
This website has had one previous iteration, the source code can be found <a href="https://github.com/tomit4/leafbytes">here</a>.
</p>

<p align="center">
    Hosted On: <img src="https://api.netlify.com/api/v1/badges/1963b488-7b78-48c9-9e2d-6fb5e47ab3af/deploy-status" alt="Netlify Status" />
</p>

<p align="center">
    <img alt="screenshot" src="https://raw.githubusercontent.com/tomit4/leafbytes_vue/main/readme_assets/readme_ss.png" />
</p>


### Installation and Dev Setup

This Website utilizes [Vite](https://vitejs.dev/), [Vue3](https://vuejs.org/guide/introduction.html), [Vue-Router](https://router.vuejs.org/), and [PrismJS](https://prismjs.com/). Set up is relatively
straight forward. Simply clone the repository:

```
git clone https://github.com/tomit4/leafbytes_vue
```

And then, simply navigate into the leafbytes_vue directory, and install the dependencies:

```
npm install
```

After all dependencies have been installed, run the development server:

```
npm run dev
```
You may notice that the background images do not load like on the official site,
this is because the build process does not for some reason copy all assets
in the dev environment over to the build section. Uncomment the lines in the css
portion of the components/Background.vue file on lines 11 and 24, and comment
out the lines on lines 12 and 25. My apologies for the extra setup work, I will
try to address this at some point when I return to work on the site once other
projects have been finished.

### Building Process

This is my first time building a static site using ViteJS and Vue, so you may
notice the package.json has some interesting addenda to the build command.
This is because the directory structure of the dev server does not port over
certain assets like the feed.rss file and the background files when run with the
default build command in vitejs, thus the series of cp commands. Nevertheless,
you simply have to run the build process the same:
```
npm run build
```
And within the dist directory, the changes you made to the development version
will now be applied to the production version. You can test out this production
version locally using live-server by simply navigating into the dist directory
and invoking it:
```
live-server
```
Note that changes to the deployed site on netlify do not need this process, as
they do this upon changes to this Repository.

### Color Pallettes
| Universal Colors          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black           | ![#252525](https://via.placeholder.com/10/252525?text=+) `#252525` |

| Light Mode Colors          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| White           | ![#ffffffff](https://via.placeholder.com/10/ffffffff?text=+) `#ffffffff` |
| Dark Blue           | ![#004b77](https://via.placeholder.com/10/004b77?text=+) `#004b77` |
| Light Blue           | ![#baf6ff](https://via.placeholder.com/10/baf6ff?text=+) `#baf6ff` |
| BG Light Blue           | ![#62a5bf](https://via.placeholder.com/10/62a5bf?text=+) `#62a5bf` |
| BG Dark Blue           | ![#2a7296](https://via.placeholder.com/10/2a7296?text=+) `#2a7296` |
| HD Dark Blue           | ![#002c46](https://via.placeholder.com/10/002c46?text=+) `#002c46` |
| Link Clr           | ![#0066cc](https://via.placeholder.com/10/0066cc?text=+) `#0066cc` |

| Dark Mode Colors          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| White           | ![#222f48](https://via.placeholder.com/10/222f48?text=+) `#222f48` |
| Dark Blue           | ![#9ad7ff](https://via.placeholder.com/10/9ad7ff?text=+) `#9ad7ff` |
| Light Blue           | ![#39738c](https://via.placeholder.com/10/39738c?text=+) `#39738c` |
| BG Light Blue           | ![#4b8aa1](https://via.placeholder.com/10/4b8aa1?text=+) `#4b8aa1` |
| BG Dark Blue           | ![#264567](https://via.placeholder.com/10/264567?text=+) `#264567` |
| HD Dark Blue           | ![#9ad7ff](https://via.placeholder.com/10/9ad7ff?text=+) `#9ad7ff` |
| Link Clr           | ![#cca700](https://via.placeholder.com/10/cca700?text=+) `#cca700` |

| Prism Dark Mode Colors          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Pre-Class-Lang           | ![#f8f8f2](https://via.placeholder.com/10/f8f8f2?text=+) `#f8f8f2` |
| BG           | ![#002c46ff](https://via.placeholder.com/10/002c46ff?text=+) `#002c46ff` |
| BG-Border           | ![#02c46ff](https://via.placeholder.com/10/02c46ff?text=+) `#02c46ff` |
| TK-Prolog           | ![#8292a2](https://via.placeholder.com/10/8292a2?text=+) `#8292a2` |
| TK-Punc           | ![#f8f8f2](https://via.placeholder.com/10/f8f8f2?text=+) `#f8f8f2` |
| TK-Tag           | ![#f92672](https://via.placeholder.com/10/f92672?text=+) `#f92672` |
| TK-Numb           | ![#ae81ff](https://via.placeholder.com/10/ae81ff?text=+) `#ae81ff` |
| TK-String           | ![#a6e22e](https://via.placeholder.com/10/a6e22e?text=+) `#a6e22e` |
| TK-Var           | ![#f8f8f2](https://via.placeholder.com/10/f8f8f2?text=+) `#f8f8f2` |
| TK-Func           | ![#e6db74](https://via.placeholder.com/10/e6db74?text=+) `#e6db74` |
| TK-Keyw           | ![#66d9ef](https://via.placeholder.com/10/66d9ef?text=+) `#66d9ef` |
| TK-Regex           | ![#fd971f](https://via.placeholder.com/10/fd971f?text=+) `#fd971f` |

| Prism Light Mode Colors          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Pre-Class-Lang           | ![#657b83](https://via.placeholder.com/10/657b83?text=+) `#657b83` |
| BG           | ![#c4faff](https://via.placeholder.com/10/c4faff?text=+) `#c4faff` |
| BG-Border           | ![#002c46ff](https://via.placeholder.com/10/002c46ff?text=+) `#002c46ff` |
| TK-Prolog           | ![#93a1a1](https://via.placeholder.com/10/93a1a1?text=+) `#93a1a1` |
| TK-Punc           | ![#586e75](https://via.placeholder.com/10/586e75?text=+) `#586e75` |
| TK-Tag           | ![#268bd2](https://via.placeholder.com/10/268bd2?text=+) `#268bd2` |
| TK-Numb           | ![#268bd2](https://via.placeholder.com/10/268bd2?text=+) `#268bd2` |
| TK-String           | ![#2aa198](https://via.placeholder.com/10/2aa198?text=+) `#2aa198` |
| TK-Var           | ![#cb4b16](https://via.placeholder.com/10/cb4b16?text=+) `#cb4b16` |
| TK-Func           | ![#b58900](https://via.placeholder.com/10/b58900?text=+) `#b58900` |
| TK-Keyw           | ![#859900](https://via.placeholder.com/10/859900?text=+) `#859900` |
| TK-Regex           | ![#cb4b16](https://via.placeholder.com/10/cb4b16?text=+) `#cb4b16` |

