---
slug: "/articles/getting-started"
date: "2021-02-01 10:00:00"
title: "Getting Started in Software Development"
image: 'coding.jpg'
author: "Paul Coe"
---


# Getting Started in Software Development

> "Hello, and welcome! It's Paul from you.dev.

> "Just a quick note: this series of articles and screencasts assumes you are already comfortable with basic computer usage and either the [Microsoft Windows](https://www.microsoft.com/en-us/windows) or [Apple macOS](https://www.apple.com/macos) operating system.

Software applications are all about receiving, processing, and presenting information. That information can come in the form of text, photos, audio, video, 3D graphics, financial records, or basically anything that can be digitized. Software is written by software developers and engineers using a variety of programming languages. Software runs on computers ranging from the size of a postage stamp to an entire building.

“Awesome! So where does one start as a beginner?", you might be asking.


---


# Awareness of the tool landscape

As a beginner, you should start by becoming aware of the tools "used by the pros" as these tools will be required to get your job done as a software developer. A professional developer should have tools from the following categories:

- **Computers** - electronic hardware for writing and running software.
- **Programming Languages** - for expressing computer instructions in a human-readable format.
- **Text Editors** - for writing and editing software source code using programming languages.
- **IDEs** (**I**ntegrated **D**evelopment **E**nvironments) - for writing, testing, building, and packaging software.
- **Web Browsers** - for using and testing websites and web applications.
- **Terminals / Shells / Consoles** - for interacting with both local and remote systems and services.
- **Virtualization Tools** - for simulating the deployment of software to real servers and user devices.

If you are reading this on a computer, you already 


## Computers

Computers are electronic devices that process information and typically display the output on a screen. We'll be writing and running our software on one! There are many computer manufacturers to choose from, including but certainly not limited to: [Lenovo](https://www.lenovo.com/us/en/pc), [HP](https://store.hp.com/us/en/cat/desktops), [Dell](https://www.dell.com/), [Apple](https://apple.com/mac), [Microsoft](https://www.microsoft.com/en-us/surface), [System76](https://system76.com/).

Computers come in many _form factors_ (listed in increasing size):

- **Microcontrollers / System-on-Chip** - computers the size of a quarter: _inside electronic appliances_
- **Microcomputers** - computers with motherboards the size of a credit card: _Raspberry Pi_
- **Smart Phones** - pocket computers w/ a celluar antenna: _iPhone, Android_
- **Mini-PCs / HTPCs** Miniature or Home Theater PCs that fit in entertainment centers: _macMini, Intel NUC_
- **Notebooks / Laptops** - computers that fits on lap, ie: _MacBook, Surface Book_
- **Desktops** - computers that fits on a desk, not in your lap: _iMac, Surface Pro_
- **Servers** - computers that fit in a hardware rack in a data center: _Dell PowerEdge, HPE Superdome, System76 Jackal_ 
- **Clusters** - multiple computers connected together acting as one.


## Programming Languages 

Programming Languages are for expressing computer instructions in a human-readable format. Languages will provide a "compiler" or "interpreter" to turn your code into real machine instructions. A **compiler** will take all your source code, and turn it into a file of pure machine instructions. That file can be delivered and run directly on your users' computers. A language **interpreter** takes a collection of source code files and runs them without necessarily producing a "runnable file". When interpreted software runs, the interpreter will compile and send machine instructions to the processor as needed, called just-in-time compiling. If you are writing a program in an interpreted language, your users will need to have that interpreter installed before running your software.

> Example: If you are writing a Java application, your users will need to have the Java Runtime Environment to use it.


## Text Editors

Text Editors are for writing and editing source code. Programmers' text editors will have features such as: highlighting language keywords, "folding blocks" so you can temporarily hide code, etc. Some text editors may have features you prefer over another's, but ultimately **all text editors edit text**.

As of this article's publish date in 2021, big names in the text editor world are:

### Free on all systems
- [Sublime Text](https://www.sublimetext.com/) from Sublime HQ (A solid editor. Occassional nag to buy license, but easy to ignore)
- [Visual Studio Code](https://code.visualstudio.com/) from Microsoft (Blurs line between text editor and IDE; may "analyze your usage")
- [Atom](https://atom.io) from GitHub (It's still here!)

### macOS exclusive
- [BBEdit](https://www.barebones.com/products/bbedit/) from Bare Bones (Premium features for 30 days, great free mode afterward; no nag)
- [TextMate](https://macromates.com/) from MacroMates (Solid free editor)
- [TextEdit](https://support.apple.com/guide/textedit/welcome/mac) is built-in to macOS in case you can't access the internet. (Very basic functionality)

### Windows exclusive
- [notepad++](https://notepad-plus-plus.org/) from Don Ho. This is a must-have for Windows devs and sys admins)
- [PSPad](https://www.pspad.com/) from Jan Fiala. Another solid free editor.
- [Notepad](https://www.microsoft.com/en-us/p/windows-notepad/9msmlrh6lzf3) from Microsoft. Built-in Windows plain text editor in case of emergency.

### Arcane terminal editors for hotshots
- [Emacs](https://www.gnu.org/software/emacs/) from the GNU Project
- [Vim](https://www.vim.org/) from Bram Moolenaar


## IDEs

Integrated Development Environments (IDEs) are for writing, testing, building, and packaging code. They have built-in text editors and sometimes have built-in device simulators. IDEs are generally for more advanced developers working on a specific platform. As a beginner, these can safely be ignored for awhile. For future reference, here are a few leading IDEs:

- [Apple Xcode](https://developer.apple.com/xcode/) for developing macOS and iOS software.
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/) for developing Windows software primarily.
- [Android Studio](https://developer.android.com/studio/) for developing Android mobile apps.
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) for developing Java software primarily.


## Web Browsers

Web Browsers are used for accessing applications and resources on the Internet. A browser should be provided with your Operating System. ([Safari](https://www.apple.com/safari/) on macOS, [Edge](https://www.microsoft.com/en-us/edge) on Windows, usually [Firefox](https://firefox.com/) on Unix-like Desktops). A browser's three main functions are:

- Hypertext Transfer Protocol Client (HTTP Client) - for sending and receiving requests.
- Document Object Model renderer (The DOM) - for displaying information received from a web server.
- and JavaScript engine - for handling user interaction, interface animations, etc.


## Terminals / Shells / Consoles

Terminals, shells, and consoles are for interacting with local / remote services and systems among many other functions. Terminals can look intimidating at first as the interface is text-only. However with good reference and a handful of trusty cheatsheets, even a beginner developer can become a powerful terminal user quickly!

Here are some common terminal emulators:

### macOS
- [Terminal](https://www.apple.com/macos) from Apple. (Built-in to macOS; quite nice)
- [iTerm2](https://iterm2.com/) from George Nachman. (quite nicer)

	
### Windows
- [PowerShell / ISE](https://docs.microsoft.com/en-us/powershell/) from Microsoft (Built-in to Windows; very powerful; not the prettiest)
- [Git Bash](https://gitforwindows.org/) from Git (UNIX-like bash shell with Git for Windows)
- [cmd.exe]() from Microsoft (Built-in to Windows; from DOS era; not as featureful)
- [Cmder](https://cmder.net/) from Samuel Vasko,  Martin Kemp (A shinier Powershell)


## Virtualization Tools

Virtualization Tools are for simulating the deployment of your software onto real servers or user devices. These simulations are called "Virtual Machines" and "Containers". VMs and contashare your computer's physical resources. so having 8GB+ of memory and 4+ processor cores in your computer is preferred. These are intermediate to advanced tools that should be learned a little later if you're just starting.

Just to be aware of them, here are a few of the popular tools in this space:

- [Docker](https://www.docker.com/products/docker-desktop) - Allows you to create full software architectures at a moment's notice using "miniature" virtual machines called containers.
- [VirtualBox](https://www.virtualbox.org/) - For running "full-size" virtual machines, complete with emulated hardware and a dedicated operating system.
- [Vagrant](https://www.vagrantup.com/) - A tool for automating the creation and destruction of virtual machines.


---


# 😰 "Uhhh..."

That was probably a lot to take in for someone just getting started! Keep in mind, the above list of tools covers _99% of the needs_ any flavor of professional developer could have. You will not have to download and learn all of them all at once. Some developers building software exclusively for one platform can feasibly use just one IDE and nothing else.

Since we’re just beginning our journey, we should start relatively small with two tools and three languages. These tools and languages are mostly likely already on your computer!

## Text Editor

