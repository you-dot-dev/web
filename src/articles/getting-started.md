---
slug: "/articles/getting-started"
date: "2021-02-01 10:00:00"
title: "Getting started in software development"
image: 'coding.jpg'
author: "Paul Coe"
---

# Getting started in software development

## Welcome to you.dev

My name is Paul and I'm here to help you become a software developer.

(This article / series will assume you are already comfortable with basic computer terminology and either [Microsoft Windows](https://www.microsoft.com/en-us/windows) or [Apple macOS](https://www.apple.com/macos).)

Software applications are all about receiving, processing, and presenting information.

That information can come in the form of text, photos, audio, video, 3D graphics, financial records, or basically anything that can be digitized.

Software is written by software developers and engineers using a variety of programming languages suited for different purposes.

Awesome!

So where do we start?


## Step 1: Acquire tools

Every software developer needs tools to get their job done. Some software projects require expensive proprietary tools, but **every** developer needs some free tools from the following categories:

- **Text Editors** - for writing and editing source code.
- **Web Browsers** - for testing and debugging your Web Application if you are building one.
- **IDEs** (**I**ntegrated **D**evelopment **E**nvironments) - for writing, testing, building, and packaging code. IDEs usually target specific platforms and are for generally for advanced developers and engineers. 
- **Virtualization Tools** - for simulating the deployment of software to servers and user devices.
- **Terminals / Shells** - for interacting with both local and remote services / systems among many other functions.

Keep in mind you do not need to learn all these tools. This list covers tools for developers of every flavor. Some developers targeting a specific device or platform can feasibly get away with using "just" an IDE.

---

**Text Editors** are for writing and editing source code. Each editor may have fancy features that others editors may not have, but ultimately **all text editors edit text**. As of this article's publish date in 2021, big names in the text editor world are:

- **Free on all systems**
	- [Sublime Text](https://www.sublimetext.com/) from Sublime HQ (solid; occassional nag to buy license, but easy to ignore)
	- [Visual Studio Code](https://code.visualstudio.com/) from Microsoft (blurs line between text editor and IDE; may "analyze" your usage)
	- [Atom](https://atom.io) from GitHub (It's still here!)
- **macOS exclusive**
	- [BBEdit](https://www.barebones.com/products/bbedit/) from Bare Bones (premium features for 30 days, great free mode afterward; no nag)
	- [TextMate](https://macromates.com/) from MacroMates (Solid free editor)
	- [TextEdit](https://support.apple.com/guide/textedit/welcome/mac) is built-in to macOS in case you can't access the internet. (very basic functionality)
- **Windows exclusive**
	- [notepad++](https://notepad-plus-plus.org/) from Don Ho (Must-have for Windows devs and sys admins)
	- [Notepad](https://www.microsoft.com/en-us/p/windows-notepad/9msmlrh6lzf3) from Microsoft. Built-in Windows plain text editor in case of emergency.
- **Arcane terminal editors for hot-shots**
	- [Emacs](https://www.gnu.org/software/emacs/) from the GNU Project
	- [Vim](https://www.vim.org/) from Bram Moolenaar

---

**Web Browsers** are used for 

---

**IDEs** are for writing, testing, building, and packaging code. They have built-in text editors, sometimes have built-in device simulators. IDEs are generally for more advanced developers working on a specific platform. As a beginner, these can safely be ignored for awhile. Just a few examples for reference:

- [Apple Xcode](https://developer.apple.com/xcode/) for developing macOS and iOS software.
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/) for developing Windows software primarily.
- [Android Studio](https://developer.android.com/studio/) for developing Android mobile apps.

---

**Virtualization Tools** are for simulating the deployment of your software onto virtual servers or user devices that look and feel like the real thing. These "virtual machines" share your physical computer's resources, so having >8GB of memory and >4 processor cores in your computer is preferred. These are intermediate to advanced tools that should be learned a little later if you're just starting.

Just to be aware of them, here are a few of the popular tools in this space:

- [Docker](https://www.docker.com/products/docker-desktop) - Allows you to create full software architectures at a moment's notice using "miniature virtual machines" called containers.
- [VirtualBox](https://www.virtualbox.org/) - For running "heavyweight" virtual machines, complete with emulated hardware and a dedicated operating system.
- [Vagrant](https://www.vagrantup.com/) - A tool for automating the creation and destruction of virtual machines.

---

**Terminals / Shells** are for interacting with local / remote services and systems among many other functions. Terminals can look intimidating at first as the interface is all text, no graphics. However, with a handful of trusty cheatsheets even a beginner developer can become powerful!

Here are some common terminals / shells:

- **macOS**
	- [Terminal](https://www.apple.com/macos) from Apple. (Built-in to macOS; quite nice)
	- [iTerm2](https://iterm2.com/) from George Nachman. (quite nicer)
- **Windows**
	- [PowerShell / ISE](https://docs.microsoft.com/en-us/powershell/) from Microsoft (Built-in to Windows; very powerful; not the prettiest)
	- [Git Bash](https://gitforwindows.org/) from Git (UNIX-like bash shell with Git for Windows)
	- [cmd.exe]() from Microsoft (Built-in to Windows; from DOS era; not as featureful)
	- [Cmder](https://cmder.net/) from Samuel Vasko,  Martin Kemp (A shinier Powershell)

---

That was probably a lot to take in for someone just getting started. Keep in mind, the above list of tools covers every need a professional developer could have for most projects. **You don't need to have them all or learn them all!** Some developers that build software exclusively for one platform can feasibly use just one IDE and nothing else.

Since we’re just beginning our journey, we should start with two tools.

Text Editor and Browser
